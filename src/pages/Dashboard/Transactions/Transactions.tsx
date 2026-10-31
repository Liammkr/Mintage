import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import DashboardLeft from "../../../components/DashboardLeft";
import "./Transactions.css";
import { FiPlus } from "react-icons/fi";
import { CoinLogo } from "../../../components/CoinLogos";
import { StatusComplete } from "../../../components/Status";
import { MdContentCopy, MdOpenInNew, MdClose } from "react-icons/md";
import { useEffect } from "react";
function Transactions() {
  const payments = [
    {
      description: "37fc27341355b06c619395f7",
      coin: "BTC",
      amount: "$199.99",
      status: "Confirmed",
    },
    {
      description: "37fc27341355b06c619395f7",
      coin: "ETH",
      amount: "$19.99",
      status: "Confirming",
    },
    {
      description: "37fc27341355b06c619395f7",
      coin: "LTC",
      amount: "$1,199.00",
      status: "Confirmed",
    },
    {
      description: "37fc27341355b06c619395f7",
      coin: "DOGE",
      amount: "$49.00",
      status: "Expired",
    },
    {
      description: "37fc27341355b06c619395f7",
      coin: "POL",
      amount: "$523.00",
      status: "Confirmed",
    },
  ];
  const navigate = useNavigate();
  document.title = "Mintage | Dashboard Overview";
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

      toast.success("Transactions Loaded");
      console.log(data);
    } catch (err) {
      toast.error("Error Loading Transactions");
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
          <button className="createinvbutton">
            <FiPlus size={20}></FiPlus>New Payment
          </button>
        </div>
        <div className="maintransactionchart">
          <div className="tableKeyList324">
            <span>Invoice #</span>
            <span>Created</span>
            <span>Coin</span>
            <span>Ammount</span>
            <span>Confirmations</span>
            <span>Withdrawn</span>
            <span>Status</span>
          </div>
          {payments.map((p) => (
            <div className="table324">
              <span className="transactionidintable">
                {p.description}{" "}
                <MdContentCopy className="copytextbutton"></MdContentCopy>
              </span>
              <span>Oct 30, 11:30 PM</span>
              <span className="coinColumn324">
                <CoinLogo coin={p.coin} size={20} />
                {p.coin}
              </span>
              <span>{p.amount}</span>
              <span className="confirmationstableentry">0/32</span>
              <MdClose className="withdrwantstatus notwithdrawn"></MdClose>
              <StatusComplete status={p.status} />
              <MdOpenInNew className="openinnewwindow" size={18}></MdOpenInNew>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Transactions;
