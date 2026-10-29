import { CoinLogo } from "../../components/CoinLogos";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./Docs.css";

const BASE_URL = "https://api.mintage.cc";

const genInvoiceRequest = String.raw`{
  "api_key": "mk_9c1e…",
  "coin": "SOL",
  "amount_usd": "25.00",
  "invoice_data": {"order_id": "1234"}
}`;

const genInvoiceResponse = String.raw`{
  "transaction_id": "3f9a1c0e7b2d4a6f8e1b5c3d",
  "coin": "SOL",
  "address": "FmwFyquXse3cNM2tqzJjFbAp9Evb7uNf1ds4gP8DjF5P",
  "amount": "0.164074293",
  "amount_usd": "25.00",
  "invoice_data": "{"order_id": "1234"}",
  "status": "pending",
  "created": 1761480000,
  "expires": 1761490800
}`;

const genInvoiceCurl = String.raw`curl -X POST https://api.mintage.cc/gen_invoice \
  -H "Content-Type: application/json" \
  -d '{"api_key":"mk_...","coin":"SOL","amount_usd":"25.00","invoice_data":{"order_id":"1234"}}'`;

const genInvoiceNode = String.raw`// Node 18+, server side only (api_key should never reach the browser)
const res = await fetch("https://mintagecc.vercel.app/gen_invoice", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    api_key: process.env.MINTAGE_API_KEY,
    coin: "SOL",
    amount_usd: "25.00",
    invoice_data: { order_id: "1234" },
  }),
});
const invoice = await res.json();
if (res.status !== 201) throw new Error(invoice.error);
// display invoice.address, invoice.amount and invoice.expires to the customer or redirect them to hosted checkout.`;

const setWebhookResponse = String.raw`{
  "ok": true,
  "webhook": "https://shop.example.com/mintage/webhook",
  "webhook_secret": "whsec_4b7d…"
}`;

const webhookRequest = String.raw`POST <your webhook URL>
Content-Type: application/json
User-Agent: Mintage-Webhook/1.0
X-Mintage-Timestamp: 1761480000
X-Mintage-Signature: sha256=a671f1b3f9c7459dc77f6479af0c7076ad69f76cbdbe4cf8afaced855ab69da5

{
  "event": "invoice.paid",
  "transaction_id": "3f9a1c0e7b2d4a6f8e1b5c3d",
  "coin": "SOL",
  "address": "FmwFyquXse3cNM2tqzJjFbAp9Evb7uNf1ds4gP8DjF5P",
  "amount": "0.164074293",
  "amount_received": "0.164074293",
  "amount_usd": "25.00",
  "confirmations": 1,
  "invoice_data": "{"order_id": "1234"}",
  "status": "confirmed"
}`;

const verifyNode = String.raw`import crypto from "node:crypto";
import express from "express";

const app = express();

// express.raw keeps the exact bytes, which the signature is computed over
app.post("/mintage/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const timestamp = req.get("X-Mintage-Timestamp") ?? "";
  const signature = req.get("X-Mintage-Signature") ?? "";

  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return res.status(400).send("stale");

  const expected = "sha256=" + crypto
    .createHmac("sha256", process.env.MINTAGE_WEBHOOK_SECRET)
    .update(timestamp + ".")
    .update(req.body)
    .digest("hex");
  const ok = signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!ok) return res.status(401).send("bad signature");

  const event = JSON.parse(req.body.toString("utf8"));
  const invoiceData = JSON.parse(event.invoice_data); 

  // find the order by event.transaction_id, check it matches, mark it paid
  // (do nothing if it's already paid, see "Responding and retries")

  res.sendStatus(200);
});`;

const coins = [
  { id: "BTC", network: "Bitcoin", decimals: 8, confirmations: "2" },
  { id: "LTC", network: "Litecoin", decimals: 8, confirmations: "6" },
  { id: "DOGE", network: "Dogecoin", decimals: 8, confirmations: "50" },
  { id: "BCH", network: "Bitcoin Cash", decimals: 8, confirmations: "12" },
  { id: "DASH", network: "Dash", decimals: 8, confirmations: "2" },
  { id: "DGB", network: "DigiByte", decimals: 8, confirmations: "40" },
  { id: "ETH", network: "Ethereum mainnet", decimals: 18, confirmations: "14" },
  {
    id: "ETH_ARB",
    network: "ETH on Arbitrum One",
    decimals: 18,
    confirmations: "40",
  },
  {
    id: "ETH_OP",
    network: "ETH on Optimism",
    decimals: 18,
    confirmations: "15",
  },
  { id: "BNB", network: "BNB Smart Chain", decimals: 18, confirmations: "25" },
  { id: "POL", network: "Polygon PoS", decimals: 18, confirmations: "14" },
  {
    id: "AVAX",
    network: "Avalanche C-Chain",
    decimals: 18,
    confirmations: "1",
  },
  { id: "SOL", network: "Solana", decimals: 9, confirmations: "1 (finalized)" },
  { id: "TRX", network: "TRON", decimals: 6, confirmations: "1 (solidified)" },
  { id: "TON", network: "TON", decimals: 9, confirmations: "1" },
];

const invoiceRequestFields = [
  ["`api_key`", "string", "Your API key found in the dashboard."],
  ["`coin`", "string", "See list of supported coins."],
  [
    "`amount_usd`",
    "string or number",
    "Price you are charging in USD greater than 0.",
  ],
  [
    "`invoice_data`",
    "string or object",
    "Your own reference for your backend with a max of 2,000 characters",
  ],
];

const invoiceResponseFields = [
  [
    "`transaction_id`",
    "string",
    "Transaction ID generated by Mintage for internal tracking.",
  ],
  ["`coin`", "string", "The coin the customer must pay in."],
  ["`address`", "string", "One-time deposit address."],
  ["`amount`", "string", "Exact amount in specified coin from USD."],
  ["`amount_usd`", "string", "The USD price amount."],
  ["`invoice_data`", "string", "Your data."],
  ["`status`", "string", 'Always shows `"pending"` as it was just created.'],
  ["`created`", "integer", "Unix time in seconds."],
  ["`expires`", "integer", "Unix time in seconds, 3 hours after."],
];

const invoiceErrors = [
  [
    "`400`",
    "A field is missing, `coin` isn't supported, `amount_usd` isn't a positive number, or `invoice_data` is too long.",
  ],
  ["`401`", "Invalid / Wrong `api_key`."],
  ["`429`", "Rate limited."],
  ["`503`", "Failed to get USD price of token, try again later."],
  ["`500`", "Internal error."],
];

const webhookFields = [
  ["`event`", "string", 'Always `"invoice.paid"`.'],
  [
    "`transaction_id`",
    "string",
    "Same as from `/gen_invoice`. Use it to find the order.",
  ],
  ["`coin`", "string", "The coin that was paid."],
  ["`address`", "string", "The invoice's deposit address."],
  ["`amount`", "string", "The amount the invoice asked for."],
  [
    "`amount_received`",
    "string",
    "What actually arrived. Can be slightly less than `amount` (down to 99%) or more if the customer overpaid.",
  ],
  ["`amount_usd`", "string", "The invoice's USD price."],
  [
    "`confirmations`",
    "integer",
    "Confirmations when the webhook was sent. For SOL, TRX and TON this is 1, meaning final.",
  ],
  [
    "`invoice_data`",
    "string",
    "Exactly what `/gen_invoice` stored. If you sent an object, this is a JSON string, so parse it.",
  ],
  ["`status`", "string", 'Always `"confirmed"`.'],
];

function withCode(text: string) {
  return text
    .split("`")
    .map((part, i) => (i % 2 ? <code key={i}>{part}</code> : part));
}

function DocsTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="tableScroll">
      <table className="docsTable">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{withCode(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ label, code }: { label?: string; code: string }) {
  return (
    <div className="codeBlock">
      {label && <div className="codeLabel">{label}</div>}
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Endpoint({ method, path }: { method: string; path: string }) {
  return (
    <p className="endpoint">
      <span className="method">{method}</span>
      <code>{path}</code>
    </p>
  );
}

function Docs() {
  return (
    <>
      <div className="pageWrap">
        <Header></Header>
        <div className="mainContent">
          <div className="docsLeftSide">
            <h1 className="mainbubble">API Reference</h1>
            <a className="bubbleside" href="/docs#overview">
              Overview
            </a>
            <a className="bubbleside" href="/docs#invoices">
              Creating Invoices
            </a>
            <a className="bubbleside" href="/docs#coins">
              Supported Coins
            </a>
            <a className="bubbleside" href="/docs#webhooks">
              Webhooks
            </a>
          </div>
          <div className="docsRightSide">
            <section className="docsSection" id="overview">
              <h1 className="docsTitle">Mintage API</h1>
              <p>
                Integrate Mintage into your own application or use our premade
                checkout page.
              </p>
              <ol>
                <li>
                  Your backend server calls <code>POST /gen_invoice</code> with
                  your API key, the amount you want to charge in USD, any data
                  you want to receive in the response, and what coin.
                </li>
                <li>
                  Mintage will send a response consisting of: the deposit
                  address for the user to send the crypto to, the exact amount
                  in that coin they need to send, and a prebuilt checkout page
                  link.
                </li>
                <li>
                  Once the customer pays the set amount, Mintage will wait until
                  the transaction receives a safe amount of confirmations
                  (varies between coins) and then it will send a webhook post to
                  your webhook and send the funds to your wallet.
                </li>
                <li>
                  Any data sent in <code>/gen_invoice</code> will be sent back
                  in the webhook response to your desired endpoint where you can
                  decide what to do with that data.
                </li>
              </ol>
              <CodeBlock label="Base URL" code={BASE_URL} />
              <h3>Errors and rate limits</h3>
              <p>
                Every request and response body is JSON. Errors return a{" "}
                <code>{'{"error": "<error message>"}'}</code> and rate limits
                will return a <code>429</code>.
              </p>
            </section>
            <section className="docsSection" id="invoices">
              <h2>Creating Invoices</h2>
              <p>
                Create invoices on this endpoint and pick which coin and amount
                to charge. Each IP is rate limited to 60 transactions per
                minute. If your service requires a higher limit please contact
                support.
              </p>
              <Endpoint method="POST" path="/gen_invoice" />
              <CodeBlock label="Request body" code={genInvoiceRequest} />
              <DocsTable
                head={["Field", "Type", "Notes"]}
                rows={invoiceRequestFields}
              />
              <p>
                All four fields are required or else you will receive an error
                response.
              </p>

              <h3>Response</h3>
              <CodeBlock label="201 Created" code={genInvoiceResponse} />
              <DocsTable
                head={["Field", "Type", "Meaning"]}
                rows={invoiceResponseFields}
              />

              <h3>Errors</h3>
              <DocsTable head={["Status", "When"]} rows={invoiceErrors} />

              <h3>Examples</h3>
              <CodeBlock label="curl" code={genInvoiceCurl} />
              <CodeBlock label="Node" code={genInvoiceNode} />
            </section>
            <section className="docsSection" id="coins">
              <h2>Supported Coins</h2>
              <div className="tableScroll">
                <table className="docsTable">
                  <thead>
                    <tr>
                      <th>coin</th>
                      <th>Network</th>
                      <th>Confirmations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coins.map((c) => (
                      <tr key={c.id}>
                        <td>
                          <span className="coinCell">
                            <CoinLogo coin={c.id} size={18} />
                            <code>{c.id}</code>
                          </span>
                        </td>
                        <td>{c.network}</td>
                        <td>{c.confirmations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="docsSection" id="webhooks">
              <h2>Webhooks</h2>
              <p>
                Mintage only sends a post to your webhook if the invoice is paid
                completely. You can set your webhook on the dashboard page.
              </p>
              <CodeBlock label="Response: 200 OK" code={setWebhookResponse} />

              <h3>The request Mintage sends</h3>
              <CodeBlock code={webhookRequest} />
              <DocsTable
                head={["Field", "Type", "Meaning"]}
                rows={webhookFields}
              />

              <h3>Verifying the signature</h3>
              <p>
                Anyone can POST to your webhook URL, so check every request
                before trusting it:
              </p>
              <ol>
                <li>
                  Reject the request if <code>X-Mintage-Timestamp</code> is more
                  than 300 seconds from your current time.
                </li>
                <li>
                  Compute <code>HMAC-SHA256</code> with your{" "}
                  <code>webhook_secret</code> as the key and{" "}
                  <code>timestamp + "." + raw_body</code> as the message, as
                  lowercase hex.
                </li>
                <li>
                  Compare <code>"sha256=" + hex</code> with{" "}
                  <code>X-Mintage-Signature</code> using a constant-time
                  comparison, and reject the request if they differ.
                </li>
              </ol>
              <CodeBlock label="Node (Express)" code={verifyNode} />
            </section>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Docs;
