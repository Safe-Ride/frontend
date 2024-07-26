import React from "react";
import styles from "./Trajetos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import TrajetosAtivos from "../../../components/Motorista/TrajetosAtivos/TrajetosAtivos"
import TrajetosGerais from "../../../components/Motorista/TrajetosGerais/TrajetosGerais"

const titulo = "trajetos";

const Clientes = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}></div>
        <TrajetosAtivos/>
        <TrajetosGerais/>
      </div>
      <NavBarBot />
    </>
  );
};

export default Clientes;
