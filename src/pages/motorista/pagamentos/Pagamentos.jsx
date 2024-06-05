import React from "react";
// import styles from "./Pagamentos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";

const titulo = "pagamentos";

const Clientes = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />

      <NavBarBot />
    </>
  );
};

export default Clientes;
