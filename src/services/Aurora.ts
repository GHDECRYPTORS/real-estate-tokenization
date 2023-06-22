import { Chain } from "./Chain";
// import Web3 from "web3";

class AuroraChain extends Chain {
  //   private web3: Web3;

  constructor() {
    super();
    // this.web3 = new Web3("aurora-chain-url"); // Replace 'aurora-chain-url' with the actual Aurora chain URL
  }

  connectWallet(): void {
    super.connectWallet();
    // Implement Aurora-specific wallet connection using web3.js
    // For example, with Metamask:
    // this.web3.eth
    //   .requestAccounts()
    //   .then((accounts: Array<any>) => {
    //     this.walletAddress = accounts[0];
    //     console.log("Wallet connected to Aurora chain");
    //   })
    //   .catch((error: any) => {
    //     console.error("Failed to connect wallet:", error);
    //   });
  }

  viewAddress(): void {
    console.log("Aurora");
    if (this.walletConnected) {
      console.log("Wallet address (Aurora):", this.walletAddress);
    } else {
      console.log("Wallet not connected");
    }
  }
}

export { AuroraChain}
