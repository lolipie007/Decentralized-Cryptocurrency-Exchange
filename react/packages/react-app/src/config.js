import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x8Bc6D19823E1eDa22fA6eBb30873e62b183F8661"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/i9IvHKALsNZ-K7yD1amHXHCNZ5hY3nmE",
  },
};