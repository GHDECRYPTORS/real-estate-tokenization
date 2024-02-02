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

export const lightLinkTestnet = {
  id: 1891,
  name: "Lightlink Pegasus Testnet",
  network: "lightlink-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Pegasus",
    symbol: "ETH",
  },
  rpcUrls: {
    public: {
      http: ["https://replicator.pegasus.lightlink.io/rpc/v1"],
    },
    default: {
      http: ["https://replicator.pegasus.lightlink.io/rpc/v1"],
    },
  },
  blockExplorers: {
    default: {
      name: "Pegasus",
      url: "https://pegasus.lightlink.io",
    },
  },
  testnet: false,
} as const satisfies Chain;
export const areaonTestnet = {
  id: 462,
  name: "Areon Pegasus Testnet",
  network: "areon-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Areon",
    symbol: "TAREA",
  },
  rpcUrls: {
    public: {
      http: ["https://testnet-rpc.areon.network"],
    },
    default: {
      http: ["https://testnet-rpc.areon.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Areon",
      url: "https://areonscan.com/",
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
