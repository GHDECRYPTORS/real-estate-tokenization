import { Chain } from "wagmi";

export const hederaMainnet = {
  id: 295,
  name: "Hedera Mainnet",
  network: "hedera-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Hedera",
    symbol: "HBAR",
  },
  rpcUrls: {
    public: {
      http: ["https://mainnet.hashio.io/api"],
    },
    default: {
      http: ["https://mainnet.hashio.io/api"],
    },
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/mainnet/dashboard",
    },
  },
  testnet: false,
} as const satisfies Chain;

export const hederaTestnet = {
  id: 296,
  name: "Hedera Testnet",
  network: "hedera-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Hedera",
    symbol: "HBAR",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.hashio.io/api"],
    },
    public: {
      http: ["https://testnet.hashio.io/api"],
    },
  },
  blockExplorers: {
    default: {
      name: "Hashscan",
      url: "https://hashscan.io/testnet/dashboard",
    },
  },
  testnet: true,
} as const satisfies Chain;
