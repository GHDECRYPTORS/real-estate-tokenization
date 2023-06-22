export abstract class Chain {
  protected walletConnected: boolean;
  protected walletAddress: string | undefined;

  constructor() {
    this.walletConnected = false;
    this.walletAddress = undefined;
  }

  connectWallet(): void {
    // Implement wallet connection logic specific to the chain
    // For example, using a provider or API to connect the wallet
    this.walletConnected = true;
  }

  abstract viewAddress(): void;
}
