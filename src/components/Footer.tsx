import { LogoImg } from "./Logo";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className="sectionSix">
      <div className="outerWrap">
        <LogoImg></LogoImg>
        <div className="footerGrid">
          <div className="footerPiece">
            <h1 className="titlefoot">Home</h1>
            <a className="tittleunder" onClick={() => navigate("/#Payments")}>
              Payments
            </a>
            <a
              className="tittleunder"
              onClick={() => navigate("/#SupportedCoins")}
            >
              Supported coins
            </a>
            <a className="tittleunder" onClick={() => navigate("/#LogPolicy")}>
              Log policy
            </a>
            <a className="tittleunder" onClick={() => navigate("/terms")}>
              Privacy and terms
            </a>
          </div>
          <div className="footerPiece">
            <h1 className="titlefoot">Developer</h1>
            <a className="tittleunder" onClick={() => navigate("/docs")}>
              API docs
            </a>
            <a
              className="tittleunder"
              onClick={() => navigate("/docs#webhooks")}
            >
              Webhooks
            </a>
            <a
              className="tittleunder"
              onClick={() => navigate("/docs#invoices")}
            >
              Invoices
            </a>
          </div>
          <div className="footerPiece">
            <h1 className="titlefoot">Account</h1>
            <a className="tittleunder" onClick={() => navigate("/signin")}>
              Log in
            </a>
            <a className="tittleunder" onClick={() => navigate("/signup")}>
              Create account
            </a>
          </div>
        </div>
      </div>

      <div className="completeBottom">
        <p>© 2026 Mintage</p>
        <p>
          Network fees vary between network and are never collected by Mintage
        </p>
      </div>
    </div>
  );
}
