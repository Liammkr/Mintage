import { LogoImg } from "../../components/Logo";
import { Turnstile } from "@marsidev/react-turnstile";
import { Footer } from "../../components/Footer";
import { BackArrow } from "../../components/BackArrow";
import { useState } from "react";

import "./Signin.css";

function Signin() {
  const [token, setToken] = useState<string | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const formatted = accountNumber.replace(/(\d{5})(?=\d)/g, "$1 ");
  return (
    <div className="completeWrap">
      <div className="signupPageFull">
        <BackArrow></BackArrow>
        <div className="cardwrapper">
          <div className="signupCard">
            <LogoImg></LogoImg>
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
              ></input>
            </div>
            <Turnstile
              style={{ marginTop: "10px" }}
              siteKey="1x00000000000000000000AA"
              onSuccess={(t) => setToken(t)}
              onExpire={() => setToken(null)}
              onError={() => setToken(null)}
            />
            <button className="createAccText" disabled={!token}>
              Sign In
            </button>

            <div className="bottomSignin">
              <p>Dont have an account?</p>
              <a className="asignin" href="/signup">
                Create account
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "0px" }}>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Signin;
