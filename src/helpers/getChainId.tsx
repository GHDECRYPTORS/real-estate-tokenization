import { ethers } from "ethers";

async function getCurrChainId() {
  try {
    const provider = new ethers.providers.JsonRpcProvider(window.ethereum);
    return +(provider.connection as any).chainId;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default getCurrChainId;
