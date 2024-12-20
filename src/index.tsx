import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import TransactionsCtxProvider from "context/TransactionsCtxProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TransactionsCtxProvider>
      <App />
    </TransactionsCtxProvider>
  </React.StrictMode>
);
