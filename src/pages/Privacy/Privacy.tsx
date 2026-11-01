import { BackArrow } from "../../components/BackArrow";
import { Footer } from "../../components/Footer";
import "./Privacy.css";
function Privacy() {
  const terms = `MINTAGE TERMS OF SERVICE

Effective date: October 31, 2026


1. AGREEMENT TO THESE TERMS

1.1 These Terms of Service are a binding agreement between you and Mintage ("Mintage", "we", "us"), the operator of mintage.cc. They cover the Mintage website, dashboard, API and payment services.

1.2 You accept these terms by creating an account, clicking Create Account, or using the service in any way. If you don't agree, don't use Mintage.

1.3 If you use Mintage for a company or other organisation, you confirm that you can bind it to these terms. "You" then means that organisation as well.

The most important points

This summary doesn't replace the full terms, but please read it first:

- Your account number can't be recovered. It is your only login. If you lose it, we can't restore your access.
- Blockchain payments can't be reversed. A payment sent to the wrong address or network may be lost for good.
- Save a payout address. With none saved, funds stay on the invoice address when an invoice is confirmed, and saving one later doesn't pay them out.
- You deal with your own customers. Refunds, disputes, orders and taxes are your responsibility.
- You must follow the law. You are responsible for any licence, tax or compliance duty that applies to your business.
- Our liability is limited. Sections 18 and 19 limit what we are responsible for.


2. DEFINITIONS

Account number: The 20-digit number created when you sign up, also called your user_id. It is the only credential for your dashboard.

API key: The secret key your systems use to create invoices.

Confirmation: A blockchain's record that a payment is included and has further blocks built on it, or the equivalent finality for that network.

Customer: Anyone you ask to pay you through Mintage.

Invoice: A payment request created through Mintage for a USD price, a supported coin and a unique deposit address.

Invoice address: The unique deposit address generated for one invoice.

Merchant: You, the holder of a Mintage account.

Network fee: The fee a blockchain charges to process a transaction. It goes to that network, not to Mintage.

Payout: The transfer of funds from an invoice address to your payout address.

Payout address: The wallet address you save in Mintage for a coin.

Service: The Mintage website, dashboard, API, webhooks and payment processing.

Supported coin: A coin listed in the Mintage API documentation at the time you create an invoice.

Webhook: The signed message Mintage sends to your URL when an invoice is paid.

Webhook secret: The secret you use to verify that a webhook came from Mintage.


3. WHAT MINTAGE IS AND IS NOT

3.1 Mintage is software that lets merchants accept cryptocurrency payments. It creates invoices and deposit addresses, watches blockchains for payments, notifies you by webhook, and sends received funds to your payout address.

3.2 To do this, Mintage generates each invoice address and keeps its private key in encrypted form. That key is what allows us to send the funds to you. Funds on an invoice address can therefore be moved by Mintage's systems until they are paid out.

3.3 Mintage is not a bank, exchange, broker, escrow agent, investment adviser or wallet provider. Funds are not deposits, earn no interest, and are not covered by any deposit insurance or government protection scheme.

3.4 Mintage does not convert crypto to USD or any other currency. An invoice is priced in USD only to work out how much crypto to request. You receive crypto.

3.5 Mintage is not a party to any sale between you and your customers. We don't sell your goods or services, and we don't guarantee them or your customers' conduct.

3.6 Nothing on the Service is financial, investment, tax or legal advice.


4. ELIGIBILITY

4.1 You may use the Service only if you are at least 18 and have the legal capacity to enter this agreement.

4.2 The Service is for business and professional use. It is not offered for personal or household purposes.

4.3 You may not use the Service if you are:

- located in a country or region subject to comprehensive sanctions;
- named on a government sanctions or restricted party list, or owned or controlled by someone who is; or
- prohibited from using a service like this by any law that applies to you.

4.4 Mintage doesn't ask for your name or identity documents at sign-up. That doesn't remove these requirements. By using the Service, you confirm that you meet them, and this statement stays true for as long as you use it.

4.5 We may ask for more information, or stop serving you, if the law or a lawful authority requires it or if we reasonably suspect you don't meet these requirements.


5. ACCOUNTS AND SECURITY

5.1 Your account number is your login. Anyone who has it can sign in, change your payout addresses, replace your API key and delete your account. Keep it secret.

5.2 There is no recovery. Mintage holds no email address or other way to confirm who you are. If you lose your account number, we can't restore your access or reissue it. Save it somewhere safe when you sign up.

5.3 API keys and webhook secrets are shown once. We display each one only when it is created. If you lose one, create a replacement. The old one stops working immediately, so your systems must switch to the new one.

5.4 Keep your API key on your own servers wherever you can. A key placed in a web page or app can be read by anyone who views it.

5.5 You are responsible for what happens under your account, including actions by anyone using your account number, API key or webhook secret, whether or not you authorised them. We treat any request made with valid credentials as made by you.

5.6 If a credential is exposed, replace it straight away. Change your payout addresses if you think someone else may have altered them. Tell us at support@mintage.cc if you suspect misuse of the Service.

5.7 You are responsible for the security of your own devices, servers, wallets and private keys. We can't help you recover a payout wallet that you lose access to.

5.8 Accounts are personal to you. You may not sell or transfer an account, or create accounts to get around a limit, suspension or these terms.


6. INVOICES AND PAYMENTS

6.1 Pricing. You set an invoice's price in USD. We convert it to the coin you choose using a third-party price at the moment the invoice is created, rounded up to the coin's smallest unit. The crypto amount doesn't change after that, even if the market moves. We don't guarantee that any price is the best available.

6.2 Time limit. An invoice normally lasts 3 hours. A payment must arrive and reach the required confirmations within that time. A payment still confirming when the time runs out doesn't count, so slow networks need a prompt payment. We may change this period for future invoices.

6.3 Confirmations. Each coin has a required number of confirmations, shown in the API documentation. We may change these numbers at any time to protect the Service.

6.4 What counts as paid. An invoice is paid when the address has received at least 99% of the requested amount, with the required confirmations. Several payments to the same address are added together.

6.5 What happens in each situation:

- At least 99% received and confirmed in time: The invoice is confirmed, we send your webhook, and we attempt a payout.
- More than the amount requested: The invoice is confirmed, and the full balance is included in the payout, less network fees.
- Less than 99% received by the time limit: The invoice is marked underpaid. There is no webhook or payout, and the funds stay on the invoice address.
- Nothing received by the time limit: The invoice is marked expired.
- Payment arrives after the invoice has ended: It isn't detected or counted, and there is no webhook or payout. The funds stay on the invoice address.
- Payment sent on the wrong network: It isn't detected and may be lost permanently.
- A token or coin that isn't supported, such as USDT or USDC, is sent to the address: It isn't detected and may be lost permanently.

6.6 Native coins only. Mintage accepts only the native coin of each listed network. ETH on Arbitrum One or Optimism must be sent on that exact network. You must make the correct coin, network, address and amount clear to your customers.

6.7 Single use. Each invoice is for one payment. Don't reuse an invoice address or share it for any other purpose.

6.8 Payments can't be reversed. Blockchain transactions are final. We can't cancel, reverse or change a payment once it has been sent.

6.9 Delays. Network congestion, chain reorganisations, or outages at Mintage or our data providers can delay detection. If we can't check a payment, the invoice may stay open past its time limit until we can.


7. PAYOUTS

7.1 Automatic payouts. When an invoice is confirmed, Mintage attempts to send its full balance, less network fees, to the payout address saved for that coin at that moment. There is no on or off setting.

7.2 Your address, your responsibility. Check every payout address carefully. A payout sent to a wrong, mistyped or compromised address can't be recovered. We check an address's format, but we can't tell whether it belongs to you. We aren't responsible for a payout sent to the address saved on your account, including one saved by someone using your account number.

7.3 No payout address. If you have no address saved for a coin when an invoice is confirmed, the funds stay on the invoice address and the transaction shows a withdrawal error. Saving an address later doesn't pay out invoices that were already confirmed.

7.4 Failed payouts. A payout can fail, for example if an address is invalid or a network is unavailable. A failed payout isn't retried automatically. The funds stay on the invoice address and the transaction shows a withdrawal error. Contact us at support@mintage.cc if this happens.

7.5 Funds left on an invoice address. This includes underpaid invoices, late payments, and the cases in 7.3 and 7.4. Mintage has no self-service way to withdraw these funds, and we don't promise that they can be recovered. We may help at our discretion, and we may ask you to show that the invoice is yours. Any network fees come out of the funds.

7.6 Small amounts. A payment may be too small to cover the network fee needed to move it. In that case, the payout may fail or the amount may not be recoverable.

7.7 Timing. Payouts depend on blockchain networks and third-party services, so we don't promise when one will complete.

7.8 Safety and legal holds. We may delay or refuse a payout if we reasonably believe it involves fraud, a compromised account, a security incident, a prohibited use or a breach of law, or if a lawful authority requires it.


8. FEES

8.1 Mintage currently charges no processing fee on payments.

8.2 Network fees still apply. They are charged by each blockchain, not by Mintage, and they vary with network activity. Network fees for payouts are taken from the funds being sent, so the amount you receive can be less than the amount your customer paid. Your customer pays any network fee for their own payment.

8.3 We will give you at least 30 days' notice on the Service before introducing a processing fee or any other charge. If you don't accept the new fee, you must stop using the Service before it takes effect.


9. YOUR RESPONSIBILITIES TO YOUR CUSTOMERS

9.1 You alone are responsible for your products, services, prices, orders, delivery, customer support and marketing.

9.2 Refunds and disputes. Mintage has no refund feature, and crypto payments have no chargebacks. Any refund is between you and your customer, and you make it from your own funds. If a customer contacts us about your business, we may direct them to you.

9.3 Clear payment instructions. You must show customers the exact amount, coin, network, address and time limit for each invoice, and tell them that a payment on the wrong network may be lost.

9.4 Fulfilling orders. Before fulfilling an order, you must verify the webhook signature and check that the invoice matches the order. Don't treat an invoice as paid because of a customer's screenshot, a transaction ID or anything else that hasn't been verified.

9.5 Your legal documents. You must provide any terms, privacy notice, refund policy and legally required information that apply to your business.

9.6 Customer information. Don't put personal or sensitive information in invoice_data unless you have a lawful basis for it. Mintage stores that field and returns it in webhooks. We recommend using a plain order number.


10. PROHIBITED USES

10.1 You may not use the Service, or let anyone else use it, for or in connection with:

- anything illegal where you or your customer are located;
- money laundering, terrorist financing, or hiding the source or ownership of funds;
- getting around sanctions or export controls;
- ransomware, extortion, blackmail, or the proceeds of hacking or theft;
- child sexual abuse material or any content that sexually exploits minors;
- non-consensual intimate images, human trafficking, or exploitation of any person;
- fraud, scams, phishing, deceptive or pyramid schemes, or fake investment offers;
- illegal drugs, illegal weapons or explosives, or stolen goods;
- goods or services that infringe someone else's intellectual property;
- gambling, securities, or financial services, unless you hold every licence required;
- malware, spyware, or services designed to attack other systems; or
- processing payments for someone else as a payment service, unless you hold every licence required.

10.2 You also may not:

- attack, overload, probe or disrupt the Service or anyone using it;
- get around rate limits, Cloudflare checks or other security controls;
- access another person's account without permission, or try to guess account numbers or API keys;
- use the Service to send webhooks or other traffic to systems you have no right to contact;
- reverse engineer the Service, except where the law allows this regardless of these terms; or
- misrepresent your relationship with Mintage, or suggest that we endorse your business.

10.3 If you discover a security problem, report it to us at support@mintage.cc and give us reasonable time to fix it before disclosing it. Don't access or change other people's data while investigating.


11. LEGAL COMPLIANCE AND TAXES

11.1 You must comply with every law that applies to you and your business. This includes laws on consumer protection, crypto assets, money transmission, anti-money laundering, sanctions, data protection and taxes.

11.2 You are responsible for working out whether you need a licence or registration to accept crypto payments, and for getting it.

11.3 Taxes. You are responsible for reporting and paying all taxes on your sales and on the crypto you receive, including sales tax, VAT and income tax. Mintage doesn't calculate, collect or send taxes. It doesn't provide tax forms, and invoice records may not be enough for your tax reporting, so keep your own.

11.4 Requests from authorities. We may share information we hold, or preserve or restrict funds and accounts, when we reasonably believe the law or a valid legal process requires it. We may not be able to tell you when this happens.

11.5 Blockchain analysis and screening. We may use tools or services to detect fraud, sanctions risks or misuse of the Service, and we may act on what they show.

11.6 Crypto rules differ by country and change often. The fact that Mintage is available to you doesn't mean that using it is lawful where you are.


12. API AND WEBHOOKS

12.1 Licence. While you comply with these terms, you may use the API to connect your own systems to Mintage. This permission is limited, non-exclusive and can be withdrawn. You can't transfer it or sublicense it.

12.2 Rate limits. The API has rate limits, and we may change them at any time. Requests above a limit are refused. Don't build systems that depend on going beyond them.

12.3 Webhooks are your payment notification. Mintage sends one event, invoice.paid, when an invoice is confirmed. It sends nothing when an invoice expires or is underpaid.

12.4 Delivery limits. Your endpoint must use public https and return a 2xx response within 10 seconds. We don't follow redirects. A failed delivery is tried up to 3 times in total, then not sent again, even though the invoice stays paid. If your endpoint is down, you may miss the notification, and you need to check your transactions in the dashboard.

12.5 Verification. You must verify each webhook's signature using your webhook secret and reject stale timestamps. Your system must also cope with receiving the same event more than once.

12.6 Replacing a webhook secret. Saving a webhook URL creates a new secret, and the old one stops working immediately. Update your server straight away, or it may reject valid webhooks.

12.7 Changes. We may change or remove API features. We will try to give reasonable notice of a breaking change through our documentation, but an urgent security or legal issue may require a change without notice. You are responsible for keeping your integration up to date.

12.8 No guarantee of availability. We don't promise any level of uptime or support. The Service may be unavailable because of maintenance, faults or events outside our control.


13. PRIVACY AND DATA

13.1 Our Privacy Policy explains how we handle information, and it forms part of these terms.

13.2 What we don't ask for. Sign-up doesn't require your name, email address or phone number.

13.3 What we do store:

- Account number, API key, webhook URL and webhook secret: To run your account and sign webhooks.
- Payout addresses: To send you funds.
- Invoice records, meaning coin, amounts, addresses, status, times, transaction IDs and your invoice_data: To process payments and show your transactions.
- Each invoice address's encrypted private key: To move the funds on that address.

13.4 Technical data. IP addresses and similar request data may be processed for rate limiting, security and hosting, including by the third parties in section 14.

13.5 Your browser. The site saves your account number and theme choice in your browser's local storage. Anyone with access to that browser may be able to read them, so log out on shared devices.

13.6 Blockchains are public. Addresses, amounts and transactions are permanently visible on public blockchains. We can't change or delete them, and someone may be able to link them to you or your customers.

13.7 Your responsibilities. You control what you send us in invoice_data, and you are responsible for your customers' personal data under the laws that apply to you.


14. THIRD PARTY SERVICES

14.1 Mintage relies on outside services, and we may change them at any time. They currently include:

- hosting and database providers, including Vercel and Google Firebase;
- Cloudflare, for bot protection at sign-up and sign-in;
- price sources, including Coinbase, for USD conversion; and
- blockchain networks and blockchain data providers, for detecting and sending payments.

14.2 We don't control these services. We aren't responsible for their outages, errors, data or actions, or for losses they cause, except where the law says otherwise.

14.3 Your wallets, servers and other tools are your own responsibility, along with any terms that come with them.


15. INTELLECTUAL PROPERTY

15.1 Mintage and its licensors own the Service, including its software, design, documentation, name and logos. These terms give you no ownership of them.

15.2 You may use the Service only as these terms allow. You may not copy, resell or build a competing service from it, or use our name or logos in a way that suggests we endorse you. You may state accurately that you accept payments through Mintage.

15.3 You keep ownership of your own content, including your invoice_data. You allow us to store and use it as needed to run the Service and meet legal duties.

15.4 If you send us feedback or ideas, we may use them freely and without paying you.


16. SUSPENSION, TERMINATION AND DELETING YOUR ACCOUNT

16.1 Deleting your account. You can delete your account from the dashboard at any time, unless 16.2 applies. Deletion is permanent. Your account number and API key stop working immediately, and your saved wallets, webhook and invoice list are removed.

16.2 When deletion is refused. To protect your money and your customers', we refuse deletion while:

- an invoice is pending or confirming. Try again once it has been paid or has expired; or
- a confirmed invoice hasn't been paid out to you. Contact us at support@mintage.cc about those funds first.

16.3 What we keep after deletion. We keep our own invoice records, including each invoice address's encrypted private key, your invoice_data and the API key the invoice was created with. We keep them to recover late payments, handle security issues and meet legal duties.

16.4 Funds after deletion. Expired and underpaid invoices don't block deletion. Any funds left on those addresses, or sent later, are no longer tied to an account you can access. You accept that you may lose access to them.

16.5 Suspension or termination by us. We may suspend, limit or close your account, with or without notice, if we reasonably believe that:

- you have broken these terms;
- your use is illegal, fraudulent or creates risk for Mintage or others;
- your account has been compromised; or
- the law or a lawful authority requires it.

16.6 Open invoices during a suspension. We may stop creating invoices or processing payments for your account. Where we lawfully can, we will try to send funds from confirmed invoices to your payout address. We may hold them if the law or a reasonable suspicion of misuse requires it.

16.7 Ending the Service. We may discontinue all or part of the Service. Where reasonably possible, we will give at least 30 days' notice on the Service so you can complete open invoices and change your systems.

16.8 What continues. Sections that by their nature should continue after an account ends remain in force. These include sections 7.5, 9, 11, 13, 15, 16, 18, 19, 20, 22 and 23.


17. RISKS OF CRYPTOCURRENCY

By using the Service, you accept these risks. You could lose some or all of the funds involved.

- Price changes. Crypto prices can move sharply, including between creating an invoice, receiving payment and getting your payout. The USD value you receive may be more or less than the invoice price.
- Irreversible transactions. Payments sent to a wrong address or network generally can't be recovered.
- Network problems. Blockchains can suffer congestion, forks, reorganisations, attacks, bugs or shutdowns. These can delay, reverse or invalidate transactions, even after the required confirmations.
- Network fees. Fees can rise without warning and may take up much of a small payment.
- Security risks. Software, wallets, private keys and online systems, including Mintage's, can be attacked or fail. A breach could result in the loss of funds on invoice addresses.
- Coin changes. A network or coin can change its rules, lose value, or stop being supported by Mintage or its data providers.
- Legal changes. New laws or enforcement can restrict crypto, or restrict Mintage's ability to operate in your location.


18. DISCLAIMERS

18.1 THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE". TO THE FULLEST EXTENT THE LAW ALLOWS, WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED. THESE INCLUDE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.

18.2 We don't promise that the Service will be uninterrupted, secure or free of errors. We also don't promise that every payment will be detected, that every webhook will arrive, that every payout will succeed, or that prices and blockchain data are accurate.

18.3 Marketing or documentation describing the Service doesn't create a warranty beyond what these terms say.

18.4 Some places don't allow certain warranties to be excluded. In those places, the exclusions apply only as far as the law permits.


19. LIMITATION OF LIABILITY

19.1 TO THE FULLEST EXTENT THE LAW ALLOWS, MINTAGE AND ITS OWNERS, STAFF, CONTRACTORS AND SUPPLIERS WON'T BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES. WE ALSO WON'T BE LIABLE FOR LOST PROFITS, REVENUE, SALES, GOODWILL OR DATA, EVEN IF WE KNEW THEY WERE POSSIBLE.

19.2 TO THE FULLEST EXTENT THE LAW ALLOWS, OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE OR THESE TERMS WON'T EXCEED USD $100.

19.3 Subject to 19.5, we aren't liable for losses caused by:

- a lost, stolen or shared account number, API key or webhook secret;
- a wrong, invalid or compromised payout address;
- a payment sent to the wrong address or network, a late payment or an underpayment;
- changes in crypto prices;
- a missed, delayed or duplicated webhook, or a failure to verify one;
- blockchain networks, third party services, or attacks on them; or
- anything else beyond our reasonable control.

19.4 Your customers have no claim against us under these terms, and you are responsible for any claim they bring relating to your business.

19.5 Nothing in these terms limits liability that the law doesn't allow to be limited. This may include liability for fraud, or for death or personal injury caused by negligence.


20. INDEMNIFICATION

20.1 You agree to defend and indemnify Mintage and its owners, staff and contractors against claims, losses, fines, costs and reasonable legal fees that arise from:

- your use of the Service, or anyone's use of it with your credentials;
- your products, services, customers, refunds or disputes;
- your breach of these terms or of any law; or
- your invoice_data or other content infringing someone's rights.

20.2 We will tell you about a claim if we reasonably can. We may take over the defence of a claim, and you will cooperate with us. You may not settle a claim in a way that affects us without our written agreement.


21. CHANGES

21.1 The Service. We may add, change or remove features at any time, including supported coins, confirmation requirements and invoice time limits. Changes apply to invoices created afterwards wherever reasonably possible. Support for a coin can also end for security or legal reasons with little or no notice.

21.2 These terms. We may update these terms. Because we don't collect email addresses, we will post the new version on this page and change its effective date. For a material change, we will also give at least 30 days' notice on the Service, unless a legal or security reason requires a faster change.

21.3 Your acceptance. Please check this page regularly. By continuing to use the Service after a change takes effect, you accept the updated terms. If you don't accept them, stop using the Service and delete your account.


22. GOVERNING LAW AND DISPUTES

22.1 The laws of the place where the operator of Mintage is established govern these terms and any dispute relating to them or the Service, without regard to conflict of law rules.

22.2 Talk to us first. Before starting a formal claim, contact us at support@mintage.cc and describe the problem. Both sides will try in good faith to resolve it within 30 days.

22.3 Courts. If the dispute isn't resolved, the courts of the place where the operator of Mintage is established have exclusive jurisdiction, and you agree to their authority over you. Either side may still ask any competent court for urgent relief to protect its rights, security or intellectual property.

22.4 Time limit. You must bring any claim within one year after it arises, unless the law requires a longer period.


23. GENERAL TERMS

23.1 Entire agreement. These terms, the Privacy Policy and the API documentation are the whole agreement between you and Mintage about the Service. If they conflict, these terms take priority.

23.2 Assignment. You may not transfer these terms without our written agreement. We may transfer them as part of a merger, sale or reorganisation of our business.

23.3 Severability. If part of these terms can't be enforced, the rest stays in force, and that part applies as far as the law allows.

23.4 No waiver. If we don't enforce a term right away, we can still enforce it later.

23.5 Events outside our control. We aren't responsible for delays or failures caused by events beyond our reasonable control. These include network failures, attacks, outages, natural disasters, war and government action.

23.6 No partnership. These terms don't create a partnership, agency, employment, fiduciary or trust relationship between you and Mintage.

23.7 Notices. We give notices by posting them on the Service. You give notices to us at support@mintage.cc.

23.8 Language. These terms are written in English. A translation is for convenience only, and the English version controls.


CONTACT

You can contact Mintage at support@mintage.cc.
`;
  return (
    <>
      <div className="completeWrap ">
        <div className="signupPageFull">
          <BackArrow />
          <p className="termstext">{terms}</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Privacy;
