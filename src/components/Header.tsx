import { LogoImg } from "./Logo";
import "./Header.css";

export function Header() {
  return (
    <div className="topBarWrap">
      <div className="topBarBetween">
        <LogoImg />
        <a className="docsStyle" href="/docs">
          Docs
        </a>
      </div>
      <div className="topBarBetween">
        <button
          className="docsStyle"
          onClick={() => (window.location.href = "/signin")}
        >
          Log In
        </button>
        <button
          className="createAccountButton"
          onClick={() => (window.location.href = "/signup")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
