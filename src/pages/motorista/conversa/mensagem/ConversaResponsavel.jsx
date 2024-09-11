import React from "react";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import StatusRecebido from "../../../../components/motorista/conversas/mensagem/StatusRecebido";
import StatusEnviado from "../../../../components/motorista/conversas/mensagem/StatusEnviado";
import styles from "./ConversaResponsavel.module.css";

const ConversaMotorista = () => {
  const responsavel = {
    id: 1,
    nome: "Junior",
  };

  const mensagem = {
    nome: "Caio",
    status: "NÃO VAI",
    horario: "2024-08-27 10:34",
    qtdMensagens: 2,
  };

  return (
    <>
      <NavBarTop titulo={responsavel.nome} />
      <div className={styles["conversa"]}>
        <StatusRecebido mensagem={mensagem}></StatusRecebido>
        <StatusEnviado mensagem={mensagem}></StatusEnviado>
      </div>
      <NavBarBot />
    </>
  );
};

export default ConversaMotorista;
