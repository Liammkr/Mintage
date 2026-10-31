import { CoinLogo } from "../../../components/CoinLogos";
import DashboardLeft from "../../../components/DashboardLeft";
import { useState } from "react";
import { toast } from "sonner";
import "./Wallets.css";
function Wallets() {
  const coins = [
    { id: "BTC", network: "Bitcoin", decimals: 8, confirmations: "2" },
    { id: "LTC", network: "Litecoin", decimals: 8, confirmations: "6" },
    { id: "DOGE", network: "Dogecoin", decimals: 8, confirmations: "50" },
    { id: "BCH", network: "Bitcoin Cash", decimals: 8, confirmations: "12" },
    { id: "DASH", network: "Dash", decimals: 8, confirmations: "2" },
    { id: "DGB", network: "DigiByte", decimals: 8, confirmations: "40" },
    {
      id: "ETH",
      network: "Ethereum mainnet",
      decimals: 18,
      confirmations: "14",
    },
    {
      id: "ETH_ARB",
      network: "ETH on Arbitrum One",
      decimals: 18,
      confirmations: "40",
    },
    {
      id: "ETH_OP",
      network: "ETH on Optimism",
      decimals: 18,
      confirmations: "15",
    },
    {
      id: "BNB",
      network: "BNB Smart Chain",
      decimals: 18,
      confirmations: "25",
    },
    { id: "POL", network: "Polygon PoS", decimals: 18, confirmations: "14" },
    {
      id: "AVAX",
      network: "Avalanche C-Chain",
      decimals: 18,
      confirmations: "1",
    },
    {
      id: "SOL",
      network: "Solana",
      decimals: 9,
      confirmations: "1 (finalized)",
    },
    {
      id: "TRX",
      network: "TRON",
      decimals: 6,
      confirmations: "1 (solidified)",
    },
    { id: "TON", network: "TON", decimals: 9, confirmations: "1" },
  ];
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState<Record<string, string>>({});

  const saveWallet = async (coin: string, address: string) => {
    try {
      const res = await fetch("https://api.mintage.cc/update_wallets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: localStorage.getItem("user_id"),
          coin,
          address,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setSaved((prev) => ({ ...prev, [coin]: address }));
      toast.success(`${coin} wallet saved`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save wallet");
    }
  };
  return (
    <div className="fulldashboard no-scroll-page no-margin-page">
      <DashboardLeft></DashboardLeft>
      <div className="walletsright">
        <div className="withdrawstop">
          <div>
            <p className="transactiontoptext">Wallets</p>
            <p className="transactiontoptextdescription">
              Change and set your withdraw wallets.
            </p>
          </div>
        </div>
        <div className="walletspage">
          <div className="walletkeys">
            <span>Coin</span>
            <span>Withdraw address</span>
          </div>
          {coins.map((c) => {
            const address = (drafts[c.id] ?? "").trim();
            const changed = address !== "" && address !== saved[c.id];
            return (
              <div className="walletrow" key={c.id}>
                <div className="walletcoin">
                  <CoinLogo coin={c.id} size={24}></CoinLogo>
                  {c.network}
                </div>
                <input
                  className="walletaddress"
                  aria-label={`${c.network} withdraw address`}
                  placeholder="Paste address"
                  spellCheck={false}
                  autoComplete="off"
                  value={drafts[c.id] ?? ""}
                  onChange={(e) =>
                    setDrafts((prev) => ({ ...prev, [c.id]: e.target.value }))
                  }
                ></input>
                {changed && (
                  <button
                    className="walletsave"
                    onClick={() => saveWallet(c.id, address)}
                  >
                    Save
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wallets;
