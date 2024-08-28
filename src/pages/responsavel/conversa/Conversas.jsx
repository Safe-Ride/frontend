import React from "react";
import styles from "./Conversas.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Motorista from "../../../components/responsavel/conversas/Motorista";

const Conversas = () => {
  const motorista = {
    nome: "teste",
    mensagem: "teste",
    horario: "2024/08/28 10:34",
    qtdMensagens: 2,
  };

  return (
    <>
      <NavBarTop titulo={"conversas"} />
      <div className={styles["lista-conversas"]}>
        <Motorista motorista={motorista}></Motorista>
      </div>
      <NavBarBot />
    </>
  );
};

export default Conversas;
