import { TokenIcon } from "@web3icons/react/dynamic";
//const supportedCoins = ["sol", "ltc", "btc", "pol", "bnb", "bch", "doge"];
export function CoinLogo({ coin }: { coin: string }) {
  return <TokenIcon symbol={coin.toLowerCase()} variant="branded" size={20} />;
}
