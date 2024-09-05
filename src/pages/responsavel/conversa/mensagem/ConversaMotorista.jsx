import React from "react";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import StatusEnviado from "../../../../components/responsavel/conversas/mensagem/StatusEnviado";
import StatusRecebido from "../../../../components/responsavel/conversas/mensagem/StatusRecebido";
import styles from "./ConversaMotorista.module.css";

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
        <StatusRecebido mensagem={mensagem}></StatusRecebido>
      </div>
      <NavBarBot />
    </>
  );
};

export default ConversaMotorista;
