import { LogoImg } from "../../components/Logo";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Footer } from "../../components/Footer";
import { BackArrow } from "../../components/BackArrow";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";

import "./Signup.css";

function Signup() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleCreate = async () => {
    if (!token) return;
    setLoading(true);

    try {
      const res = await fetch("https://api.mintage.cc/create_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ turnstile_token: token }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      toast.success("Account Created");
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("api_key", data.api_key);
      document.getElementById("one")?.style.setProperty("display", "none");
      document.getElementById("two")?.style.setProperty("display", "block");
    } catch (err) {
      toast.error("Error occured while creating account");
    } finally {
      setLoading(false);
      setToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <>
      <Toaster position="top-right" theme="light" richColors closeButton />
      <div className="completeWrap">
        <div className="signupPageFull">
          <BackArrow />
          <div className="cardwrapper">
            <div className="signupCard" id="one">
              <LogoImg />
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
                className="createAccText"
                disabled={!token || loading}
                onClick={handleCreate}
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
              <p className="legal">
                By clicking Create Account, you agree to our{" "}
                <a href="/terms" className="legaltext">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="legaltext">
                  Privacy Policy
                </a>
                .
              </p>
              <div className="bottomSignin">
                <p>Already have an account?</p>
                <a className="asignin" href="/signin">
                  Sign In
                </a>
              </div>
            </div>
          </div>

          <div className="cardwrapper" id="two" style={{ display: "none" }}>
            <div className="signupCard">
              <LogoImg />
              <div className="inputwrap">
                <p className="acctnumtext">Account Number</p>
                <p
                  inputMode="numeric"
                  className="inputtext"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    marginTop: "0px",
                    cursor: "pointer",
                    marginBottom: "6px",
                  }}
                  onClick={async (e) => {
                    try {
                      await navigator.clipboard.writeText(
                        e.currentTarget.textContent ?? "",
                      );
                      toast.success("Copied!");
                    } catch {
                      toast.error("Couldn't copy");
                    }
                  }}
                >
                  {localStorage.getItem("user_id")}
                </p>
              </div>
              <p
                style={{
                  marginTop: "0px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Make sure to save your account number. There is no way to
                recover it.
              </p>
              <button
                className="createAccText"
                onClick={() => (window.location.href = "/dashboard")}
              >
                <p className="textinsidedash">
                  Continue To Dashboard{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={{ marginLeft: "2px" }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Signup;
