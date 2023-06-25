import axios from "axios";

export abstract class Chain {
  protected walletConnected: boolean;
  protected walletAddress: string | undefined;
  public url = "https://real-estate-backend.azurewebsites.net/v1";

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

  public getCollections(): Promise<Array<any>> {
    return axios.get(`${this.url}/collections`).then((res) => res.data.data);
  }

  public searchCollections(query: string): Promise<Array<any>> {
    return axios
      .get(`${this.url}/collections/search/${query}`)
      .then((res) => res.data.data);
  }
}
