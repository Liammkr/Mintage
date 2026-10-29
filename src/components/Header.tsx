import { LogoImg } from "./Logo";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className="topBarWrap">
      <div className="topBarBetween">
        <LogoImg />
        <a className="docsStyle" href="/docs">
          Docs
        </a>
      </div>
      <div className="topBarBetween">
        <button className="docsStyle" onClick={() => navigate("/signin")}>
          Log In
        </button>
        <button
          className="createAccountButton"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
