import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../api";
import Enviar from "../../../../components/conversas/Enviar/Enviar";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import StatusEnviado from "../../../../components/responsavel/conversas/mensagem/StatusEnviado";
import StatusRecebido from "../../../../components/responsavel/conversas/mensagem/StatusRecebido";
import styles from "./ConversaMotorista.module.css";
const ConversaMotorista = () => {
  // const motorista = {
  //   id: 1,
  //   nome: "Rogerio"
  // };
  const [motorista, setMotorista] = useState({})
  const [mensagens, setMensagens] = useState([])
  const idUsuario = sessionStorage.getItem("ID_USUARIO")

  const mensagem = {
    nome: "Caio",
    status: "NÃO VAI",
    horario: "2024-08-27 10:34",
    qtdMensagens: 2,
    enviada: true
  };

  const mensagem2 = {
    nome: "Caio",
    status: "NÃO VAI",
    horario: "2024-08-27 10:34",
    qtdMensagens: 2,
    enviada: false
  };

  const params = useParams();

  const loadMessages = () => {
    api
      .get(`/conversas?responsavelId=${sessionStorage.getItem("ID_USUARIO")}&motoristaId=${params.id}`, {
        headers: { Authorization: `Bearer ${sessionStorage.token}` }
      })
      .then((res) => {
        const data = res.data
        setMensagens(data.mensagems)
        setMotorista(data.motorista)
      });
  };

  useEffect(() => {
    loadMessages();
  });

  return (
    <>
      <NavBarTop titulo={motorista.nome} />
      <div className={styles["conversa"]}>
        <StatusEnviado mensagem={mensagem}></StatusEnviado>
        <StatusRecebido mensagem={mensagem}></StatusRecebido>
        <StatusEnviado mensagem={mensagem2}></StatusEnviado>
        {mensagens && mensagens.map((m) => {
          if(m.tipoUsuario === "RESPONSAVEL") {
            return <StatusEnviado mensagem={m}></StatusEnviado>
          } else {
            return <StatusRecebido mensagem={m}></StatusRecebido>
          }
        })}
        <Enviar />
      </div>
      <NavBarBot />
    </>
  );
};

export default ConversaMotorista;
