import { LogoImg } from "../../components/Logo";
import { StatusComplete } from "../../components/Status";
import { CoinLogo } from "../../components/CoinLogos";
import "./Home.css";
import "./HomeMobile.css";

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
            <a className="docsStyle" href="/docs">
              Docs
            </a>
          </div>
          <div className="topBarBetween">
            <button className="docsStyle">Log In</button>
            <button className="createAccountButton">Create Account</button>
          </div>
        </div>
        <div className="sectionOne" id="Payments">
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
              <a className="docsButtonSectionOne" href="/docs">
                Developer docs
              </a>
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
        <div className="sectionTwo" id="SupportedCoins">
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
        <div className="sectionThree" id="LogPolicy">
          <h1 className="zeroLogText">
            <span style={{ color: "rgb(129, 112, 240)" }}>Zero</span> log
            policy.
          </h1>
          <div className="descriptionWrapper">
            <p className="zeroLogDescription">
              Mintage never tracks any of your personal information. When
              signing up, all you recieve is an account number. We will never
              ask for any personal information such as your name, email adress,
              or phone number.
            </p>
          </div>
        </div>
        <div className="sectionFour">
          <div className="fourWrap">
            <div className="fourLeft">
              <h1 style={{ marginTop: "0px" }}>Prebuilt checkout page.</h1>
              <p style={{ paddingRight: "80px" }}>
                Hosted by Mintage for easy setup. If you want to, directly
                display the invoice in your code, there are infinite
                possibilities for your own checkout pages.
              </p>
            </div>
            <div className="fourRight">
              <div className="checkoutBorder"></div>
            </div>
          </div>
        </div>
        <div className="sectionFive">
          <h1 className="zeroLogText">
            <span style={{ color: "rgb(129, 112, 240)" }}>0%</span> fees
            forever.
          </h1>
          <div className="descriptionWrapper">
            <p className="zeroLogDescription">
              Mintage never collects any fees of any ammount. Blockchain fees
              are unavoidable and can range from 0 to 30 cents. Mintage attempts
              to reduce blockchain transactions by withdrawing in batches.
            </p>
          </div>
        </div>
        <div className="sectionSix">
          <div className="outerWrap">
            <LogoImg></LogoImg>
            <div className="footerGrid">
              <div className="footerPiece">
                <h1 className="titlefoot">Home</h1>
                <a className="tittleunder" href="/#Payments">
                  Payments
                </a>
                <a className="tittleunder" href="/#SupportedCoins">
                  Supported coins
                </a>
                <a className="tittleunder" href="/#LogPolicy">
                  Log policy
                </a>
                <a className="tittleunder" href="/terms">
                  Privacy and terms
                </a>
              </div>
              <div className="footerPiece">
                <h1 className="titlefoot">Developer</h1>
                <a className="tittleunder" href="/docs">
                  API docs
                </a>
                <a className="tittleunder" href="/docs#webhooks">
                  Webhooks
                </a>
                <a className="tittleunder" href="/docs#invoices">
                  Invoices
                </a>
              </div>
              <div className="footerPiece">
                <h1 className="titlefoot">Account</h1>
                <a className="tittleunder" href="/login">
                  Log in
                </a>
                <a className="tittleunder" href="/signup">
                  Create account
                </a>
              </div>
            </div>
          </div>

          <div className="completeBottom">
            <p>© 2026 Mintage</p>
            <p>
              Network fees vary between network and are never collected by
              Mintage
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
