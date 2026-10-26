import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home.tsx";
import Docs from "./pages/Docs/Docs.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
