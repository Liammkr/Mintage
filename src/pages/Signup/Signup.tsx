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
        body: JSON.stringify({ turnstileToken: token }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      console.log("Created:", data);
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
            <div className="signupCard">
              <LogoImg />
              <Turnstile
                ref={turnstileRef}
                style={{ marginTop: "10px" }}
                siteKey="1x00000000000000000000AA"
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
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Signup;
