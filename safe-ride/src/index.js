import React from "react";
import "./utils/globals.css";
import ReactDOM from "react-dom/client";
import Rotas from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
