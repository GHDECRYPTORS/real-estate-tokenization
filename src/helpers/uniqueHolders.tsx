import { ethers } from "ethers";
import houseNFTABI from "../../nft_abi.json";
async function getUniqueOwners(contractAddress: string, tokenIdRange: any) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contract = new ethers.Contract(
      contractAddress,
      houseNFTABI,
      provider
    );

    //   const owners = new Set();
    let ownerArr = [];
    for (let i = tokenIdRange.start; i <= tokenIdRange.end; i++) {
      const tokenId = i.toString();

      ownerArr.push(contract.ownerOf(tokenId));
      // console.log(tokenId)
    }
    let holders = await Promise.all(ownerArr);
    //   console.log(holders);
    const owners = new Set(holders);

    const uniqueOwners = Array.from(owners);
    return uniqueOwners;
  } catch (error) {
    console.error("Error occurred while fetching unique owners:", error);
  }
}
export default getUniqueOwners;
