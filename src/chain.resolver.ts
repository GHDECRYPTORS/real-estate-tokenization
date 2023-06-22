import React from "react";
import { AuroraChain } from "./services/Aurora";
import { Chain } from "./services/Chain";
import { HederaChain } from "./services/Hedera";
const chain = import.meta.env.VITE_CHAIN_NAME || "aurora-testnet";

export const chainClass: Chain =
  chain === "aurora-testnet" ? new AuroraChain() : new HederaChain();
export const ChainContext = React.createContext(chainClass);
