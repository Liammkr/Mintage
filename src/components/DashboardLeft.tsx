import { LogoImg } from "./Logo";
import {
  MdOutlineSpaceDashboard,
  MdOutlinePayments,
  MdOutlineAccountBalanceWallet,
  MdCode,
  MdOutlinePerson,
  MdLogout,
} from "react-icons/md";
import { IoMdBook } from "react-icons/io";

import "./DashboardLeft.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function DashboardLeft() {
  const navigate = useNavigate();
  if (
    localStorage.getItem("user_id") == "" ||
    localStorage.getItem("user_id") == null
  ) {
    window.location.href = "/signin";
  }
  function logoutofacc() {
    localStorage.removeItem("user_id");
    toast.success("Logged Out");
    navigate("/");
  }
  return (
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
      <p className="sidebartexts" onClick={() => navigate("/dashboard/api")}>
        <MdCode></MdCode>Developer
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
  );
}
