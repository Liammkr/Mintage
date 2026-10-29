import { LogoImg } from "./Logo";
import "./Footer.css";

export function Footer() {
  return (
    <div className="sectionSix">
      <div className="outerWrap">
        <LogoImg></LogoImg>
        <div className="footerGrid">
          <div className="footerPiece">
            <h1 className="titlefoot">Home</h1>
            <a className="tittleunder" href="/#Payments">
              Payments
            </a>
            <a className="tittleunder" href="/#SupportedCoins">
              Supported coins
            </a>
            <a className="tittleunder" href="/#LogPolicy">
              Log policy
            </a>
            <a className="tittleunder" href="/terms">
              Privacy and terms
            </a>
          </div>
          <div className="footerPiece">
            <h1 className="titlefoot">Developer</h1>
            <a className="tittleunder" href="/docs">
              API docs
            </a>
            <a className="tittleunder" href="/docs#webhooks">
              Webhooks
            </a>
            <a className="tittleunder" href="/docs#invoices">
              Invoices
            </a>
          </div>
          <div className="footerPiece">
            <h1 className="titlefoot">Account</h1>
            <a className="tittleunder" href="/signin">
              Log in
            </a>
            <a className="tittleunder" href="/signup">
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
