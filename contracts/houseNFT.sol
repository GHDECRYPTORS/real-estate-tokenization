// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "./Deployer.sol";
import "hardhat/console.sol";

contract HouseNFT is ERC721 {
    string private _name;
    uint256 public _maxSupply = 100;

    uint256 public _unitPrice;
    address public _deadAddr = 0x000000000000000000000000000000000000dEaD;
    address public _devAddr = 0x65Ce6D885C1935b8c4D53CB99e3f55cf5841dd16;
    string public tokenImageUrl;
    address public deployer_;
    mapping(address => bool) public isRented;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 unitPrice_,
        string memory tokenImageUrl_,
        address deployer,
        address tokenOwner
    ) ERC721(name_, symbol_) {
        _name = name_;
        _unitPrice = unitPrice_; // original price / _maxSupply
        tokenImageUrl = tokenImageUrl_;
        deployer_ = deployer;

        for (uint256 i = 0; i < _maxSupply; i++) {
            _mint(tokenOwner, i);
        }
        isRented[address(this)] = false;
    }

    function _afterTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize) internal override {
        super._afterTokenTransfer(from, to, tokenId, batchSize);
        Deployer(deployer_).tokenTransfer(from,to,tokenId);
    }


    function toggleRent(bool setRented) public returns(bool){
        require(msg.sender == _devAddr,"Only dev can rent this asset");
        isRented[address(this)] = setRented;
        Deployer(deployer_).isnftRented(setRented);
        return true;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireMinted(tokenId);
        return tokenImageUrl;
    }

    function viewTokenHolders() public view {
        for (uint256 i = 0; i < _maxSupply; i++) {
            console.log(ownerOf(i));
        }
    }

    function maxSupply() public view returns (uint256) {
        return _maxSupply;
    }

    function selfDestruct() public {
        for (uint256 i = 0; i < _maxSupply; i++) {
            uint256 tokenId = i;
            require(
                ownerOf(tokenId) == msg.sender,
                "You must own all tokens to perform this action"
            );
            ERC721(address(this)).safeTransferFrom(ownerOf(tokenId), _deadAddr, tokenId);
        }
        Deployer(deployer_).tokenDestroyed();
    }

    function getPrice() public view returns (uint256) {
        return _unitPrice;
    }

    function distributeRent() public payable {
        uint256 rentToSend = msg.value / _maxSupply;
        for (uint256 i = 0; i < _maxSupply; i++) {
            uint256 tokenId = i;

            (bool success, ) = payable(ownerOf(tokenId)).call{
                value: rentToSend
            }("");
            require(success, "Failed to send ETH");
        }
        Deployer(deployer_).tokenRentPayed(rentToSend);
    }

    struct Auction {
        address seller;
        address highestBidder;
        uint256 highestBid;
        uint256 endTime;
        bool ended;
    }

    mapping(uint256 => Auction) public auctions;
    mapping(uint256 => bool) public instantBuyEnabled;

    

    function createAuction(uint256 tokenId, uint256 duration) external {
        
        require(
            ownerOf(tokenId) == msg.sender,
            "You must own this token to perform this action"
        );

        require(
            !instantBuyEnabled[tokenId],
            "Instant buy is not enabled for this token"
        );

        uint256 endTime = block.timestamp + duration;

        auctions[tokenId] = Auction({
            seller: msg.sender,
            highestBidder: msg.sender,
            highestBid: _unitPrice,
            endTime: endTime,
            ended: false
        });
        Deployer(deployer_).auctionCreated(tokenId, msg.sender, duration);
    }

    function emergencyWithdrawal(uint256 tokenId) external {
        Auction storage auction = auctions[tokenId];
        require(
            auction.highestBidder == msg.sender,
            "You must be the highest bidder to withdraw"
        );

        uint256 refundAmount = (auction.highestBid * 90) / 100;

        (bool success, ) = payable(auction.highestBidder).call{
            value: refundAmount
        }("");
        require(success, "Failed to return funds to previous highest bidder");

        uint256 devFee = auction.highestBid - refundAmount;

        (bool successDev, ) = payable(_devAddr).call{value: devFee}("");
        require(successDev, "Failed to transfer dev fee");
    }

    function getBidPrice(uint256 tokenId) external view returns (uint256){
        Auction storage auction = auctions[tokenId];
        return auction.highestBid;
    }

    function placeBid(uint256 tokenId) external payable {
        Auction storage auction = auctions[tokenId];

        require(!auction.ended, "Auction has ended");
        
        require(block.timestamp < auction.endTime, "Auction has expired");
        require(
            msg.value > auction.highestBid,
            "Bid must be higher than current highest bid"
        );

        if (auction.highestBid != 0) {
            // Return funds to the previous highest bidder
            (bool success, ) = auction.highestBidder.call{
                value: auction.highestBid
            }("");
            require(
                success,
                "Failed to return funds to previous highest bidder"
            );
        }

        auction.highestBidder = msg.sender;
        auction.highestBid = msg.value;

        Deployer(deployer_).bidPlaced(tokenId, msg.sender, msg.value);
    }

    function finalizeAuction(uint256 tokenId) external {
        Auction storage auction = auctions[tokenId];

        require(!auction.ended, "Auction has already been finalized");
        require(
            block.timestamp >= auction.endTime,
            "Auction has not ended yet"
        );

        auction.ended = true;

        ERC721(address(this)).safeTransferFrom(ownerOf(tokenId), auction.highestBidder, tokenId);

        (bool success, ) = auction.seller.call{value: auction.highestBid}("");
        require(success, "Failed to transfer funds to the seller");

        Deployer(deployer_).auctionFinalized(
            tokenId, 
            auction.seller,
            auction.highestBidder,
            auction.highestBid
        );
        delete auctions[tokenId];
    }

    function enableInstantBuy(uint256 tokenId) external {
        require(
            ownerOf(tokenId) == msg.sender,
            "You must own this token to perform this action"
        );
        require(
            auctions[tokenId].seller == address(0),
            "Auction already in progress"
        );
        instantBuyEnabled[tokenId] = true;
    }

    function disableInstantBuy(uint256 tokenId) external {
        require(
            ownerOf(tokenId) == msg.sender,
            "You must own this token to perform this action"
        );
        instantBuyEnabled[tokenId] = false;
    }

    function instantBuy(uint256 tokenId)
        external
        payable
    {
        require(
            instantBuyEnabled[tokenId],
            "Instant buy is not enabled for this token"
        );

        require(msg.value >= getPrice(), "Insufficient payment amount");

        ERC721(address(this)).safeTransferFrom(ownerOf(tokenId), msg.sender, tokenId);

        instantBuyEnabled[tokenId] = false;

        Deployer(deployer_).instantBuy(
            tokenId, 
            msg.sender, 
            msg.value
        );
    }
}
