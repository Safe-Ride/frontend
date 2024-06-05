import React from "react";
// import styles from "./Trajetos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";

const titulo = "trajetos";

const Clientes = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />

      <NavBarBot />
    </>
  );
};

export default Clientes;
