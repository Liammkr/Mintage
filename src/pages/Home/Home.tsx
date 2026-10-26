import { LogoImg } from "../../components/Logo";
import { StatusComplete } from "../../components/Status";
import { CoinLogo } from "../../components/CoinLogos";
import "./Home.css";

function Home() {
  const payments = [
    {
      description: "Order #7821",
      coin: "BTC",
      amount: "$199.99",
      status: "Confirmed",
    },
    {
      description: "Monthly License",
      coin: "ETH",
      amount: "$19.99",
      status: "Confirming",
    },
    {
      description: "Invoice #221",
      coin: "LTC",
      amount: "$1,199.00",
      status: "Confirmed",
    },
    {
      description: "Checkout Payment",
      coin: "DOGE",
      amount: "$49.00",
      status: "Expired",
    },
    {
      description: "Order #9821",
      coin: "POL",
      amount: "$523.00",
      status: "Confirmed",
    },
  ];
  const supportedCoins = [
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
  ];
  return (
    <>
      <div className="pageWrap">
        <div className="topBarWrap">
          <div className="topBarBetween">
            <LogoImg />
            <span className="docsStyle">Docs</span>
          </div>
          <div className="topBarBetween">
            <button className="docsStyle">Log In</button>
            <button className="createAccountButton">Create Account</button>
          </div>
        </div>
        <div className="sectionOne">
          <div className="leftSide">
            <h1 className="titleText">
              Crypto payents with{" "}
              <span style={{ color: "rgb(129, 112, 240)" }}>0%</span> fees.
            </h1>
            <p className="descriptionText">
              Accept multiple different Crypto currencies like Bitcoin, Ethereum
              and more. Implementation for your online stores or SaaS solutions
              without any extra fees added besides the blockchains own fees.
              Sign up without any personal information.
            </p>
            <div className="sectionOneButtons">
              <button className="createAccountSectionOne">
                Create your account now{" "}
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
              </button>
              <button className="docsButtonSectionOne">Developer docs</button>
            </div>
          </div>
          <div className="rightSide">
            <div className="paymentCard">
              <div className="tableTitle">
                <p
                  style={{
                    marginTop: "15px",
                    marginBottom: "15px",
                    marginLeft: "15px",
                  }}
                >
                  Payment Dashboard
                </p>
              </div>
              <div className="tableKeyList">
                <span>Description</span>
                <span>Coin</span>
                <span>Ammount</span>
                <span>Status</span>
              </div>
              {payments.map((p) => (
                <div className="table">
                  <span>{p.description}</span>
                  <span className="coinColumn">
                    <CoinLogo coin={p.coin} size={20} />
                    {p.coin}
                  </span>
                  <span>{p.amount}</span>
                  <StatusComplete status={p.status} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sectionTwo">
          <p className="coinsSupportedText">Accept a variety of coins.</p>
          <div className="supportedCoinRoundAbout">
            <div className="coinTrack">
              {[...supportedCoins, ...supportedCoins].map((c, i) => (
                <div
                  key={i}
                  className="coinItem"
                  aria-hidden={i >= supportedCoins.length}
                >
                  <CoinLogo coin={c} size={50} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
