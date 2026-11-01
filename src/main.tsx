import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./theme.css";
import "./index.css";
import Home from "./pages/Home/Home.tsx";
import Docs from "./pages/Docs/Docs.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import Signin from "./pages/Signin/Signin.tsx";
import Fourofour from "./pages/404/404.tsx";
import Transactions from "./pages/Dashboard/Transactions/Transactions.tsx";
import Wallets from "./pages/Dashboard/Wallets/Wallets.tsx";
import Account from "./pages/Dashboard/Account/Account.tsx";
import API from "./pages/Dashboard/API/API.tsx";
import { Toaster } from "sonner";
import { useResolvedTheme } from "./theme";

function ThemedToaster() {
  const theme = useResolvedTheme();
  return <Toaster position="top-right" theme={theme} richColors closeButton />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemedToaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard/transactions" element={<Transactions />} />
        <Route path="/dashboard/wallets" element={<Wallets />} />
        <Route path="/dashboard/account" element={<Account />} />
        <Route path="/dashboard/api" element={<API />} />
        <Route path="/dashboard/overview" element={<Transactions />} />
        <Route path="*" element={<Fourofour />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
