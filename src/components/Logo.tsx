import "./Logo.css";
import { useNavigate } from "react-router-dom";
export function LogoImg({ size = 30 }: { size?: number }) {
  const navigate = useNavigate();
  return (
    <a onClick={() => navigate("/")}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <image href="/mintage_black.png" width={"100%"} height={"100%"} />
      </svg>
    </a>
  );
}
export function LogoAndName({
  logosize = 30,
  textsize = 18,
}: {
  logosize?: number;
  textsize?: number;
}) {
  return (
    <div className="wrapper">
      <LogoImg size={logosize}></LogoImg>
      <span style={{ fontSize: textsize, fontWeight: "550" }}>Mintage</span>
    </div>
  );
}
