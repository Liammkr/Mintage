import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { MdContentCopy } from "react-icons/md";
import DashboardLeft from "../../../components/DashboardLeft";

import "./API.css";

async function postToApi(path: string, body: object = {}) {
  const res = await fetch(`https://api.mintage.cc${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: localStorage.getItem("user_id"),
      ...body,
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }

  return data;
}

function OneTimeSecret({
  name,
  value,
  onDone,
}: {
  name: string;
  value: string;
  onDone: () => void;
}) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied!");
    } catch {
      toast.error("Couldn't copy");
    }
  };

  return (
    <div className="onetimesecret">
      <p className="onetimewarning">
        Save this {name} now. You will not be able to see it again.
      </p>
      <div className="onetimevalue">
        <code>{value}</code>
        <button className="accountbutton apicopy" onClick={copy}>
          <MdContentCopy size={14}></MdContentCopy>Copy
        </button>
      </div>
      <button className="accountbutton onetimedone" onClick={onDone}>
        Done
      </button>
    </div>
  );
}

function API() {
  const [savedWebhook, setSavedWebhook] = useState<string | null>(null);
  const [webhookDraft, setWebhookDraft] = useState("");
  const [webhookLoading, setWebhookLoading] = useState(true);
  const [webhookLoaded, setWebhookLoaded] = useState(false);
  const [webhookSaving, setWebhookSaving] = useState(false);
  const [confirmingWebhook, setConfirmingWebhook] = useState(false);
  const [webhookSecret, setWebhookSecret] = useState<string | null>(null);

  const [confirmingKey, setConfirmingKey] = useState(false);
  const [keyCreating, setKeyCreating] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const webhookUrl = webhookDraft.trim();
  const webhookChanged = webhookUrl !== (savedWebhook ?? "");
  const secretWouldBeReplaced = !webhookLoaded || savedWebhook !== null;

  const loadWebhook = async () => {
    try {
      const data = await postToApi("/get_webhook");
      setSavedWebhook(data.webhook);
      setWebhookDraft(data.webhook ?? "");
      setWebhookLoaded(true);
    } catch {
      toast.error("Error Loading Webhook");
    } finally {
      setWebhookLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Mintage | API";
    loadWebhook();
  }, []);

  const saveWebhook = async () => {
    setWebhookSaving(true);
    try {
      const data = await postToApi("/set_webhook", { webhook: webhookUrl });
      setSavedWebhook(data.webhook);
      setWebhookDraft(data.webhook);
      setWebhookLoaded(true);
      setWebhookSecret(data.webhook_secret);
      setConfirmingWebhook(false);
      toast.success("Webhook saved");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Could not save webhook",
      );
    } finally {
      setWebhookSaving(false);
    }
  };

  function submitWebhook(e: FormEvent) {
    e.preventDefault();
    if (!webhookUrl || webhookLoading || webhookSaving) return;
    if (secretWouldBeReplaced) {
      setConfirmingWebhook(true);
    } else {
      saveWebhook();
    }
  }

  const createApiKey = async () => {
    setKeyCreating(true);
    try {
      const data = await postToApi("/new_api_key");
      setApiKey(data.api_key);
      setConfirmingKey(false);
      toast.success("New API key created");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not create key");
    } finally {
      setKeyCreating(false);
    }
  };

  return (
    <div className="fulldashboard no-scroll-page no-margin-page">
      <DashboardLeft></DashboardLeft>
      <div className="accountright">
        <div className="withdrawstop">
          <div>
            <p className="transactiontoptext">API</p>
            <p className="transactiontoptextdescription">
              Developer webhooks and API keys.
            </p>
          </div>
        </div>
        <div className="accountoutline">
          <div className="accountrow apirow">
            <div>
              <p className="accountlabel">Webhook</p>
              <p className="accountdescription">
                Once a transaction is completed, Mintage will send a post
                request to your endpoint where you can decide how you process
                the data. Examples in API docs.
              </p>
            </div>
            <form className="apiinputrow" onSubmit={submitWebhook}>
              {webhookLoading ? (
                <span className="skeleton"></span>
              ) : (
                <input
                  className="apiurlinput"
                  aria-label="Webhook URL"
                  placeholder="https://yourshop.com/mintage/webhook"
                  type="url"
                  spellCheck={false}
                  autoComplete="off"
                  value={webhookDraft}
                  onChange={(e) => setWebhookDraft(e.target.value)}
                ></input>
              )}
              {!webhookLoading && !confirmingWebhook && webhookChanged && (
                <button
                  className="accountbutton apibuttonprimary"
                  disabled={!webhookUrl || webhookSaving}
                >
                  {webhookSaving ? "Saving..." : "Save"}
                </button>
              )}
              {!webhookLoading &&
                !confirmingWebhook &&
                !webhookChanged &&
                savedWebhook !== null && (
                  <button className="accountbutton">Replace secret</button>
                )}
            </form>
            {confirmingWebhook && (
              <div className="apiconfirm">
                <p>
                  Completing this action creates a new webhook secret and your
                  old webhook secret will stop working imediatly.
                </p>
                <button
                  className="accountbutton accountbuttondanger"
                  disabled={webhookSaving}
                  onClick={saveWebhook}
                >
                  {webhookSaving ? "Saving..." : "Replace secret"}
                </button>
                <button
                  className="accountbutton"
                  onClick={() => setConfirmingWebhook(false)}
                >
                  Cancel
                </button>
              </div>
            )}
            {webhookSecret && (
              <OneTimeSecret
                name="webhook secret"
                value={webhookSecret}
                onDone={() => setWebhookSecret(null)}
              ></OneTimeSecret>
            )}
          </div>

          <div className="accountrow">
            <div>
              <p className="accountlabel">API key</p>
              <p className="accountdescription">
                Use this API key to create invoices from you own backend.
              </p>
            </div>
            {!confirmingKey && (
              <button
                className="accountbutton"
                onClick={() => setConfirmingKey(true)}
              >
                Create new API key
              </button>
            )}
            {confirmingKey && (
              <div className="apiconfirm">
                <p>
                  Completing this action creates a new API key and your old API
                  key will stop working imediatly.
                </p>
                <button
                  className="accountbutton accountbuttondanger"
                  disabled={keyCreating}
                  onClick={createApiKey}
                >
                  {keyCreating ? "Creating..." : "Replace API key"}
                </button>
                <button
                  className="accountbutton"
                  onClick={() => setConfirmingKey(false)}
                >
                  Cancel
                </button>
              </div>
            )}
            {apiKey && (
              <OneTimeSecret
                name="API key"
                value={apiKey}
                onDone={() => setApiKey(null)}
              ></OneTimeSecret>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default API;
