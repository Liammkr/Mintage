import { LogoImg } from "../../components/Logo";
import {
  LuLayoutDashboard,
  LuArrowLeftRight,
  LuWallet,
  LuWebhook,
  LuCircleUser,
  LuLogOut,
} from "react-icons/lu";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="fulldashboard no-scroll-page no-margin-page">
      <div className="leftsidebardashboard">
        <LogoImg></LogoImg>
        <p className="sidebardescriptions">General</p>
        <p className="sidebartexts">
          <LuLayoutDashboard></LuLayoutDashboard>Overview
        </p>
        <p className="sidebartexts">
          <LuArrowLeftRight></LuArrowLeftRight>Transactions
        </p>
        <p className="sidebardescriptions">Settings</p>
        <p className="sidebartexts">
          <LuWallet></LuWallet>Wallets
        </p>
        <p className="sidebartexts">
          <LuWebhook></LuWebhook>Webhooks
        </p>
        <p className="sidebartexts">
          <LuCircleUser></LuCircleUser>Account
        </p>
        <div className="bottomacctnumb">
          <p className="acctnumbersideshown">
            ••••• ••••• ••••• ••••• 92834{" "}
            <LuLogOut className="logoutbuttononside"></LuLogOut>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
