import DashboardLeft from "../../../components/DashboardLeft";

import "./Account.css";
function Account() {
  return (
    <div className="fulldashboard no-scroll-page no-margin-page">
      <DashboardLeft></DashboardLeft>
      <div className="accountright">
        <div className="withdrawstop">
          <div>
            <p className="transactiontoptext">Account</p>
            <p className="transactiontoptextdescription">
              Account and website settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
