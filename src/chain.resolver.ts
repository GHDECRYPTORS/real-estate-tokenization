import React from "react";
import { AuroraChain } from "./services/Aurora";
import { Chain } from "./services/Chain";
import { HederaChain } from "./services/Hedera";
const chain = import.meta.env.VITE_CHAIN_NAME || "aurora";

export const chainClass: Chain =
  chain === "aurora" ? new AuroraChain() : new HederaChain();
export const ChainContext = React.createContext(chainClass);
