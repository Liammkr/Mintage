import { LogoImg } from "../../components/Logo";
import "./Docs.css";

function Docs() {
  /*const supportedCoins = [
    "sol",
    "ltc",
    "btc",
    "eth",
    "pol",
    "bnb",
    "bch",
    "doge",
    "eth_arb",
    "eth_op",
    "avax",
    "trx",
    "ton",
    "dash",
    "dgb",
  ];*/
  return (
    <>
      <div className="pageWrap">
        <div className="topBarWrap">
          <div className="topBarBetween">
            <LogoImg />
            <a className="docsStyle" href="/docs">
              Docs
            </a>
          </div>
          <div className="topBarBetween">
            <button className="docsStyle">Log In</button>
            <button className="createAccountButton">Create Account</button>
          </div>
        </div>
        <div className="mainContent">
          <div className="docsLeftSide">
            <h1 className="mainbubble">Api Refrence</h1>
            <a className="bubbleside" href="/docs#authentication">
              Authentication
            </a>
            <a className="bubbleside" href="/docs#invoices">
              Creating Invoices
            </a>
            <a className="bubbleside" href="/docs#webhooks">
              Webhooks
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Docs;
