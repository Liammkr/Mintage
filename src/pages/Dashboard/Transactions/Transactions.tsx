//import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import DashboardLeft from "../../../components/DashboardLeft";
import "./Transactions.css";
//import { FiPlus } from "react-icons/fi";
import { CoinLogo } from "../../../components/CoinLogos";
import { StatusComplete } from "../../../components/Status";
import {
  MdContentCopy,
  MdOpenInNew,
  MdClose,
  MdCheck,
  MdRefresh,
} from "react-icons/md";
import { useEffect, useState } from "react";

type Transaction = {
  transaction_id: string;
  coin: string;
  amount_usd: string;
  confirmations?: number;
  confirmations_needed: number;
  created: number;
  status: string;
  withdraw_txid?: string;
};

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function formatDate(seconds: number) {
  return new Date(seconds * 1000).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

const skeletonWidths = [
  "85%",
  "65%",
  "55%",
  "50%",
  "36px",
  "26px",
  "80%",
  "18px",
];
function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loadState, setLoadState] = useState<"loading" | "done" | "failed">(
    "loading",
  );
  const [refreshDisabled, setRefreshDisabled] = useState(true);

  const checktransactions = async () => {
    try {
      const res = await fetch("https://api.mintage.cc/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: localStorage.getItem("user_id"),
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setTransactions(data.transactions);
      setLoadState("done");
    } catch (err) {
      setLoadState("failed");
      toast.error("Error Loading Transactions");
    } finally {
      setTimeout(() => setRefreshDisabled(false), 5000);
    }
  };
  useEffect(() => {
    checktransactions();
  }, []);
  return (
    <div className="fulldashboard no-scroll-page no-margin-page">
      <DashboardLeft></DashboardLeft>
      <div className="overviewRight">
        <div className="paymentstop">
          <div>
            <p className="transactiontoptext">Transactions</p>
            <p className="transactiontoptextdescription">
              View all of your transactions created manually or from your API
              and see their status.
            </p>
          </div>
          <div className="righthandbuttonsontransactions">
            <button
              className="refrecttransbutton"
              disabled={refreshDisabled}
              onClick={() => checktransactions()}
            >
              <MdRefresh size={20}></MdRefresh>
            </button>
          </div>
        </div>
        <div className="maintransactionchart">
          <div className="tableKeyList324">
            <span>Invoice #</span>
            <span>Created</span>
            <span>Coin</span>
            <span>Amount</span>
            <span>Confirmations</span>
            <span>Withdrawn</span>
            <span>Status</span>
          </div>

          {loadState === "loading" &&
            Array.from({ length: 8 }, (_, row) => (
              <div className="table324" key={row}>
                {skeletonWidths.map((width, cell) => (
                  <span
                    className="skeleton"
                    style={{ width }}
                    key={cell}
                  ></span>
                ))}
              </div>
            ))}

          {loadState === "failed" && (
            <p className="tableMessage">
              Could not load transactions. Try again later.
            </p>
          )}

          {loadState === "done" && transactions.length === 0 && (
            <p className="tableMessage">No transactions yet.</p>
          )}

          {transactions.map((t) => (
            <div className="table324" key={t.transaction_id}>
              <span className="transactionidintable">
                {t.transaction_id}{" "}
                <MdContentCopy className="copytextbutton"></MdContentCopy>
              </span>
              <span>{formatDate(t.created)}</span>
              <span className="coinColumn324">
                <CoinLogo coin={t.coin} size={20} />
                {t.coin}
              </span>
              <span>{usd.format(Number(t.amount_usd))}</span>
              <span className="confirmationstableentry">
                {Math.min(t.confirmations ?? 0, t.confirmations_needed)}/
                {t.confirmations_needed}
              </span>
              {t.withdraw_txid ? (
                <MdCheck className="withdrwantstatus withdrawn"></MdCheck>
              ) : (
                <MdClose className="withdrwantstatus notwithdrawn"></MdClose>
              )}
              <StatusComplete
                status={t.status.charAt(0).toUpperCase() + t.status.slice(1)}
              />
              <MdOpenInNew className="openinnewwindow" size={18}></MdOpenInNew>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Transactions;
