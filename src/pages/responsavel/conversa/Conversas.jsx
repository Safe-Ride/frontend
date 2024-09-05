import React from "react";
import styles from "./Conversas.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Motorista from "../../../components/responsavel/conversas/Motorista";
import { useNavigate } from "react-router-dom";

const Conversas = () => {
  const navigate = useNavigate();

  const motorista = {
    id: 1,
    foto: "profile.png",
    nome: "teste",
    mensagem: "teste",
    horario: "2024/08/28 10:34",
    qtdMensagens: 2,
  };

  return (
    <>
      <NavBarTop titulo={"conversas"} />
      <div className={styles["lista-conversas"]}>
        <div onClick={() => navigate(`/responsavel/conversas/${motorista.id}`)}>
          <Motorista motorista={motorista}></Motorista>
          <Motorista motorista={motorista}></Motorista>
        </div>
      </div>
      <NavBarBot />
    </>
  );
};

export default Conversas;
