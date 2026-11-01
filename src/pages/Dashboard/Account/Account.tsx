import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  MdOutlineComputer,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import DashboardLeft from "../../../components/DashboardLeft";
import { setThemeChoice, useThemeChoice } from "../../../theme";

import "./Account.css";

const themeOptions = [
  { value: "light", label: "Light", Icon: MdOutlineLightMode },
  { value: "dark", label: "Dark", Icon: MdOutlineDarkMode },
  { value: "system", label: "System", Icon: MdOutlineComputer },
] as const;

function clearSession() {
  localStorage.removeItem("user_id");
}

function Account() {
  const navigate = useNavigate();
  const themeChoice = useThemeChoice();
  const [confirming, setConfirming] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const userId = localStorage.getItem("user_id") ?? "";
  const lastFive = userId.slice(-5);

  useEffect(() => {
    document.title = "Mintage | Account";
  }, []);

  function logOut() {
    clearSession();
    toast.success("Logged Out");
    navigate("/");
  }

  function cancelDelete() {
    setConfirming(false);
    setConfirmText("");
  }

  const deleteAccount = async (e: FormEvent) => {
    e.preventDefault();
    if (confirmText !== lastFive) return;
    setDeleting(true);
    try {
      const res = await fetch("https://api.mintage.cc/delete_account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        toast.error(data?.error || "Could not delete your account");
        setDeleting(false);
        return;
      }

      clearSession();
      toast.success("Account Deleted");
      navigate("/");
    } catch {
      toast.error("Could not delete your account");
      setDeleting(false);
    }
  };

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
        <div className="accountoutline">
          <div className="accountrow">
            <div>
              <p className="accountlabel">Account number</p>
              <p className="accountdescription">
                You sign in with this number. If you lose it we cannot recover
                it.
              </p>
            </div>
            <p className="accountnumber">
              <span className="accountnumberblur" aria-hidden="true">
                00000 00000 00000
              </span>{" "}
              {lastFive}
            </p>
          </div>

          <div className="accountrow">
            <div>
              <p className="accountlabel">Theme</p>
              <p className="accountdescription">
                Choose how Mintage looks in this browser.
              </p>
            </div>
            <div className="themepicker">
              {themeOptions.map(({ value, label, Icon }) => (
                <button
                  key={value}
                  className="themeoption"
                  aria-pressed={themeChoice === value}
                  onClick={() => setThemeChoice(value)}
                >
                  <Icon size={14}></Icon>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="accountrow">
            <div>
              <p className="accountlabel">Log out</p>
              <p className="accountdescription">
                Log out of Mintage in this browser.
              </p>
            </div>
            <button className="accountbutton" onClick={logOut}>
              Log out
            </button>
          </div>

          <div className="accountrow">
            <div>
              <p className="accountlabel">Delete account</p>
              <p className="accountdescription">
                Permanently delete this account. This cannot be undone.
              </p>
            </div>
            {!confirming && (
              <button
                className="accountbutton accountbuttondanger"
                onClick={() => setConfirming(true)}
              >
                Delete account
              </button>
            )}
            {confirming && (
              <form className="accountdeleteconfirm" onSubmit={deleteAccount}>
                <label htmlFor="deleteconfirm">
                  Type <code>{lastFive}</code> to confirm
                </label>
                <input
                  id="deleteconfirm"
                  className="accountconfirminput"
                  autoFocus
                  autoComplete="off"
                  inputMode="numeric"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                ></input>
                <button
                  className="accountbutton accountbuttondanger"
                  disabled={confirmText !== lastFive || deleting}
                >
                  {deleting ? "Deleting..." : "Delete account"}
                </button>
                <button
                  type="button"
                  className="accountbutton"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
