import { useNavigate } from "react-router-dom";
import { LogoImg } from "./Logo";
import "./BackArrow.css";

export function BackArrow() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        className="backArrow"
        onClick={() => navigate("/")}
        aria-label="Go back"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
}
export function BackArrowWithLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BackArrow></BackArrow>
      <LogoImg></LogoImg>
    </div>
  );
}
