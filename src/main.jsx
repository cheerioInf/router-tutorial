import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses";
import Invoice from "./routes/invoice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<p>Select a invoice</p>}></Route>
            <Route path=":invoiceId" element={<Invoice />}></Route>
          </Route>
          <Route path="expenses" element={<Expenses />}></Route>
        </Route>
        <Route path="*" element={<p>There is nothing</p>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
