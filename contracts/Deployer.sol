// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./HouseNFT.sol";

contract Deployer {

    mapping (HouseNFT => bool) public HouseNFTDeployed;
    address public owner;
    event AuctionCreated(
        uint256 indexed tokenId,
        address indexed seller,
        uint256 duration,
        address indexed tokenContract
    );
    event NFTContractMinted(
        HouseNFT indexed tokenContract,
        address indexed tokenOwner
    );
    event AuctionFinalized(
        uint256 indexed tokenId,
        address seller,
        address indexed highestBidder,
        uint256 highestBid,
        address indexed tokenContract
    );
    event InstantBuy(
        uint256 indexed tokenId,
        address indexed buyer,
        uint256 price,
        address indexed tokenContract
    );
    event BidPlaced(
        uint256 indexed tokenId,
        address indexed bidder,
        uint256 bidAmount,
        address indexed tokenContract
    );

    event isNFTRented(
        address indexed tokenContract,
        bool indexed isRented
    );

     event TokenDestroyed(
        address indexed tokenContract
    );

    event TokenTransfer(
        address indexed tokenContract,
        address from,
        address indexed to,
        uint256 indexed tokenId
    );

    event TokenRentPayed(
        address indexed tokenContract,
        uint256 indexed unitRent
    );

    constructor(){
        owner = msg.sender;
    }

    function mintNFT(
        string memory name_,
        string memory symbol_,
        uint256 unitPrice_,
        string memory baseUrl_,
        address tokenOwner
    ) public returns (HouseNFT){
        require(msg.sender == owner,"Only the owner can deploy this contract");
        require(unitPrice_ > 0.0001 ether,"Unit price must be higher than 0.0001");
        HouseNFT houseNFt = new HouseNFT(name_,
            symbol_,
            unitPrice_,
            baseUrl_,
            address(this),
            tokenOwner
        );
        HouseNFTDeployed[houseNFt] = true;
        emit NFTContractMinted(houseNFt,tokenOwner);
        return houseNFt;
    }

    modifier onlyRecognized {
        require(HouseNFTDeployed[HouseNFT(msg.sender)],"Contract not recognized");
        _;
    }

    function auctionCreated(uint256 tokenId,address seller,uint256 duration) external onlyRecognized{
        emit AuctionCreated(tokenId, seller, duration, msg.sender);
    }

    function bidPlaced(uint256 tokenId,address seller,uint256 amount) external onlyRecognized{
        emit BidPlaced(tokenId, seller, amount, msg.sender);
    }

    function auctionFinalized(uint256 tokenId,address seller,address highestBidder,uint256 highestBid) external onlyRecognized{
        emit AuctionFinalized(tokenId, seller, highestBidder,highestBid, msg.sender);
    }

    function instantBuy(uint256 tokenId,address buyer,uint256 price) external onlyRecognized{
        emit InstantBuy(tokenId, buyer, price, msg.sender);
    }

    function isnftRented(bool isRented) external onlyRecognized{
        emit isNFTRented(msg.sender,isRented);
    }

    function tokenDestroyed() external onlyRecognized{
        emit TokenDestroyed(msg.sender);
    }

    function tokenTransfer(address from, address to, uint256 tokenId) external {
        emit TokenTransfer(msg.sender,from,to,tokenId);
    }

    function tokenRentPayed(uint256 unitRent) external onlyRecognized{
        emit TokenRentPayed(msg.sender,unitRent);
    }
}
