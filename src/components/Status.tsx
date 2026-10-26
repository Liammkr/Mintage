import { Check, X, Loader2 } from "lucide-react";
import "./Status.css";
function StatusIcon({ status }: { status: string }) {
  const s = status.toLowerCase();
  if (s === "confirming") return <Loader2 className="statusIcon spin" />;
  if (s === "confirmed") return <Check className="statusIcon" />;
  if (s === "expired") return <X className="statusIcon" />;
  return null;
}
export function StatusComplete({ status }: { status: string }) {
  const s = status.toLowerCase();
  return (
    <span className={`statusColumn status ${status.toLowerCase()}`}>
      <StatusIcon status={s} /> {status}
    </span>
  );
}
