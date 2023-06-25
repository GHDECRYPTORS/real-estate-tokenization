import { ethers } from "ethers";
import houseNFTABI from "../../nft_abi.json";
async function getTokenOwner(contractAddress: string, tokenId: any) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const contract = new ethers.Contract(
      contractAddress,
      houseNFTABI,
      provider
    );

    const owner = await contract.ownerOf(tokenId);
    return owner;
  } catch (error) {
    console.error("Error occurred while fetching unique owners:", error);
  }
}
export default getTokenOwner;
