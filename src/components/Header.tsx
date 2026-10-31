import { LogoImg } from "./Logo";
import "./Header.css";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
  return (
    <div className="topBarWrap">
      <div className="topBarBetween">
        <LogoImg />
        <a className="docsStyle" onClick={() => navigate("/docs")}>
          Docs
        </a>
      </div>
      {localStorage.getItem("user_id") != "" &&
      localStorage.getItem("user_id") != null ? (
        <div className="topBarBetween">
          <button
            className="createAccountButton"
            onClick={() => navigate("/dashboard/overview")}
          >
            Dashboard
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
}
