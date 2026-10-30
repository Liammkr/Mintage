import { LogoImg } from "../../components/Logo";
import {
  MdOutlineSpaceDashboard,
  MdOutlinePayments,
  MdOutlineAccountBalanceWallet,
  MdCode,
  MdOutlinePerson,
  MdLogout,
} from "react-icons/md";
import { IoMdBook } from "react-icons/io";

import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Dashboard() {
  const navigate = useNavigate();
  function logoutofacc() {
    localStorage.setItem("user_id", "");
    toast.success("Logged Out");
    navigate("/");
  }
  document.title = "Mintage | Dashboard";
  return (
    <div className="fulldashboard no-scroll-page no-margin-page">
      <div className="leftsidebardashboard">
        <LogoImg></LogoImg>
        <p className="sidebardescriptions">General</p>
        <p className="sidebartexts">
          <MdOutlineSpaceDashboard></MdOutlineSpaceDashboard>Overview
        </p>
        <p
          className="sidebartexts"
          onClick={() => navigate("/dashboard/transactions")}
        >
          <MdOutlinePayments></MdOutlinePayments>Transactions
        </p>
        <p className="sidebardescriptions">Settings</p>
        <p
          className="sidebartexts"
          onClick={() => navigate("/dashboard/wallets")}
        >
          <MdOutlineAccountBalanceWallet></MdOutlineAccountBalanceWallet>Wallets
        </p>
        <p
          className="sidebartexts"
          onClick={() => navigate("/dashboard/webhooks")}
        >
          <MdCode></MdCode>Webhooks
        </p>
        <p
          className="sidebartexts"
          onClick={() => navigate("/dashboard/account")}
        >
          <MdOutlinePerson></MdOutlinePerson>Account
        </p>
        <p className="sidebardescriptions">API</p>
        <p className="sidebartexts" onClick={() => navigate("/docs")}>
          <IoMdBook></IoMdBook>API Docs
        </p>
        <div className="bottomacctnumb">
          <p className="teuhig289f23">Your Account</p>
          <p className="acctnumbersideshown">
            ••••• ••••• ••••• ••••• {localStorage.getItem("user_id")?.slice(-5)}{" "}
            <MdLogout
              className="logoutbuttononside"
              onClick={() => logoutofacc()}
            ></MdLogout>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
