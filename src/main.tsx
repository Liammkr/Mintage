import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home.tsx";
import Docs from "./pages/Docs/Docs.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import Signin from "./pages/Signin/Signin.tsx";
import Fourofour from "./pages/404/404.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" theme="light" richColors closeButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Fourofour />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
