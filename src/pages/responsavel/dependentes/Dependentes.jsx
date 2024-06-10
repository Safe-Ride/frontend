import React from "react";
// import styles from "./Dependentes.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";

const titulo = "dependentes";

const Dependentes = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />

      <NavBarBot />
    </>
  );
};

export default Dependentes;
