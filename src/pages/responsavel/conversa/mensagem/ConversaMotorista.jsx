import React from "react";
import styles from "./ConversaMotorista.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import StatusEnviado from "../../../../components/responsavel/conversas/mensagem/StatusEnviado";

const ConversaMotorista = () => {
  const motorista = {
    id: 1,
    nome: "Rogerio",
  };

  const mensagem = {
    nome: "Caio",
    status: "NÃO VAI",
    horario: "2024-08-27 10:34",
    qtdMensagens: 2,
  };

  return (
    <>
      <NavBarTop titulo={motorista.nome} />
      <div className={styles["conversa"]}>
        <StatusEnviado mensagem={mensagem}></StatusEnviado>
      </div>
      <NavBarBot />
    </>
  );
};

export default ConversaMotorista;
