import "./Logo.css";
export function LogoImg({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <image href="/favicon.svg" width={"100%"} height={"100%"} />
    </svg>
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
