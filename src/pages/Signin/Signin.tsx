import { LogoImg } from "../../components/Logo";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Footer } from "../../components/Footer";
import { BackArrow } from "../../components/BackArrow";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

import "./Signin.css";
function Signin() {
  useLayoutEffect(() => {
    if (localStorage.getItem("user_id") != "") {
      navigate("/dashboard", { replace: true });
    }
  }, []);
  document.title = "Mintage | Sign In";

  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const formatted = accountNumber.replace(/(\d{5})(?=\d)/g, "$1 ");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const canSubmit = !!token && accountNumber.length === 20 && !loading;

  const handleLogin = async () => {
    if (!canSubmit) return;
    setLoading(true);

    try {
      const res = await fetch("https://api.mintage.cc/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          turnstile_token: token,
          user_id: accountNumber,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("api_key", data.api_key);
      toast.success("Signed in");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid account number");
    } finally {
      setLoading(false);
      setToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <>
      <div className="completeWrap no-scroll-page">
        <div className="signupPageFull">
          <BackArrow />
          <div className="cardwrapper">
            <form
              className="signupCard"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <LogoImg />
              <div className="inputwrap">
                <p className="acctnumtext">Account Number</p>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="00000 00000 00000 00000"
                  value={formatted}
                  onChange={(e) =>
                    setAccountNumber(
                      e.target.value.replace(/\D/g, "").slice(0, 20),
                    )
                  }
                  maxLength={23}
                  className="inputtext"
                />
              </div>
              <Turnstile
                ref={turnstileRef}
                style={{ marginTop: "10px" }}
                siteKey="0x4AAAAAAFrYlvo1H-n30tio"
                //siteKey="1x00000000000000000000AA"
                onSuccess={(t) => setToken(t)}
                onExpire={() => setToken(null)}
                onError={() => setToken(null)}
              />
              <button
                type="submit"
                className="createAccText"
                disabled={!canSubmit}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              <div className="bottomSignin">
                <p>Dont have an account?</p>
                <a className="asignin" onClick={() => navigate("/signup")}>
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Signin;
