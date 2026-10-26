import type { ComponentType, SVGProps } from "react";
import {
  IconSol,
  IconLtc,
  IconBtc,
  IconEth,
  IconMatic,
  IconBnb,
  IconBch,
  IconDoge,
  IconArb,
  IconOp,
  IconAvax,
  IconTrx,
  IconTon,
  IconDash,
  IconDgb,
} from "@cryptofonts/react";
import "./CoinLogos.css";
type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const coinIcons: Record<string, Icon> = {
  sol: IconSol,
  ltc: IconLtc,
  btc: IconBtc,
  eth: IconEth,
  pol: IconMatic,
  bnb: IconBnb,
  bch: IconBch,
  doge: IconDoge,
  avax: IconAvax,
  trx: IconTrx,
  ton: IconTon,
  dash: IconDash,
  dgb: IconDgb,
  eth_arb: IconEth,
  eth_op: IconEth,
};

const networkBadges: Record<string, Icon> = {
  eth_arb: IconArb,
  eth_op: IconOp,
};

export function CoinLogo({ coin, size = 20 }: { coin: string; size?: number }) {
  const key = coin.toLowerCase();
  const CoinIcon = coinIcons[key];
  const Badge = networkBadges[key];

  if (!CoinIcon) {
    return (
      <span className="coinFallback" style={{ width: size, height: size }}>
        {key[0]?.toUpperCase()}
      </span>
    );
  }

  return (
    <span className="coinLogo" style={{ width: size, height: size }}>
      <CoinIcon size={size} aria-label={coin} />
      {Badge && (
        <span className="coinBadge">
          <Badge size={Math.round(size * 0.5)} />
        </span>
      )}
    </span>
  );
}
