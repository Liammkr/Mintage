import btc from "react-crypto-icons/lib/assets/btc.svg";
import eth from "react-crypto-icons/lib/assets/eth.svg";
import usdt from "react-crypto-icons/lib/assets/usdt.svg";
import usdc from "react-crypto-icons/lib/assets/usdc.svg";
import ltc from "react-crypto-icons/lib/assets/ltc.svg";
import sol from "react-crypto-icons/lib/assets/sol.svg";
import trx from "react-crypto-icons/lib/assets/trx.svg";
import xmr from "react-crypto-icons/lib/assets/xmr.svg";
import bnb from "react-crypto-icons/lib/assets/bnb.svg";
import doge from "react-crypto-icons/lib/assets/doge.svg";
import dai from "react-crypto-icons/lib/assets/dai.svg";
import bch from "react-crypto-icons/lib/assets/bch.svg";
import matic from "react-crypto-icons/lib/assets/matic.svg";
import xrp from "react-crypto-icons/lib/assets/xrp.svg";

export type CoinIds =
  | "bitcoin"
  | "ethereum"
  | "tron"
  | "solana"
  | "bsc"
  | "polygon"
  | "litecoin"
  | "monero"
  | "dogecoin"
  | "bitcoincash"
  | "xrpl";

export interface Network {
  id: CoinIds;
  name: string;
  short: string;
  confirmations: number;
  feeUsd: number;
}

export const NETWORKS: Record<CoinIds, Network> = {
  bitcoin: {
    id: "bitcoin",
    name: "Bitcoin",
    short: "BTC",
    confirmations: 2,
    feeUsd: 1.2,
  },
  ethereum: {
    id: "ethereum",
    name: "Ethereum",
    short: "ERC-20",
    confirmations: 12,
    feeUsd: 0.9,
  },
  tron: {
    id: "tron",
    name: "Tron",
    short: "TRC-20",
    confirmations: 19,
    feeUsd: 1.1,
  },
  solana: {
    id: "solana",
    name: "Solana",
    short: "SPL",
    confirmations: 1,
    feeUsd: 0.01,
  },
  bsc: {
    id: "bsc",
    name: "BNB Smart Chain",
    short: "BEP-20",
    confirmations: 15,
    feeUsd: 0.05,
  },
  polygon: {
    id: "polygon",
    name: "Polygon",
    short: "Polygon",
    confirmations: 30,
    feeUsd: 0.02,
  },
  litecoin: {
    id: "litecoin",
    name: "Litecoin",
    short: "LTC",
    confirmations: 6,
    feeUsd: 0.02,
  },
  monero: {
    id: "monero",
    name: "Monero",
    short: "XMR",
    confirmations: 10,
    feeUsd: 0.03,
  },
  dogecoin: {
    id: "dogecoin",
    name: "Dogecoin",
    short: "DOGE",
    confirmations: 6,
    feeUsd: 0.05,
  },
  bitcoincash: {
    id: "bitcoincash",
    name: "Bitcoin Cash",
    short: "BCH",
    confirmations: 6,
    feeUsd: 0.01,
  },
  xrpl: {
    id: "xrpl",
    name: "XRP Ledger",
    short: "XRPL",
    confirmations: 1,
    feeUsd: 0.01,
  },
};
