import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CurrencyProvider } from "./context/CurrencyContext";
import { FilterProvider } from "./context/FilterContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CurrencyProvider>
  </React.StrictMode>
);
