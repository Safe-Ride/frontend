// import App from "./App";
import React from "react";
import "./utils/globals.css";
import ReactDOM from "react-dom/client";
import Clientes from "./pages/home/Clientes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Clientes />
  </React.StrictMode>
);
