import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../api";
import Enviar from "../../../../components/conversas/Enviar/Enviar";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import StatusEnviado from "../../../../components/responsavel/conversas/mensagem/StatusEnviado";
import StatusRecebido from "../../../../components/responsavel/conversas/mensagem/StatusRecebido";
import styles from "./ConversaMotorista.module.css";
const ConversaMotorista = () => {
  const [motorista, setMotorista] = useState({});
  const [mensagens, setMensagens] = useState([]);
  const idUsuario = sessionStorage.getItem("ID_USUARIO");

  const handleSubmit = () => {
    loadMensagens();
  };

  const params = useParams();
  const conversaId = sessionStorage.getItem("conversaId")

  const loadMensagens = useCallback(() => {
    api
      .get(`/conversas?responsavelId=${idUsuario}&motoristaId=${params.id}`, {
        headers: { Authorization: `Bearer ${sessionStorage.token}` }
      })
      .then((res) => {
        const data = res.data;
        let mensagens = data.mensagens;
        setMotorista(data.motorista);
        setMensagens(mensagens);
      });
  }, []);

  const marcarMensagensComoLidas = () => {
    let mensagensNaoLidas = mensagens.filter((m) => !m.lida);
        mensagensNaoLidas.forEach((m) => {
          api.patch(
            `/mensagens/marcar-lida/${m.id}`,
            {},
            { headers: { Authorization: `Bearer ${sessionStorage.token}` } }
          )
        });
  }

  useEffect(() => {
    loadMensagens();
    marcarMensagensComoLidas()
  }, [loadMensagens]);

  return (
    <>
      <NavBarTop titulo={motorista.nome} />
      <div className={styles["conversa"]}>
        {mensagens &&
          mensagens.map((m) => {
            if (m.tipoUsuario === "RESPONSAVEL") {
              return <StatusEnviado mensagem={m}></StatusEnviado>;
            } else {
              return <StatusRecebido mensagem={m}></StatusRecebido>;
            }
          })}
        <div style={{ paddingTop: "10%" }}></div>
      </div>
      <Enviar submit={handleSubmit} conversaId={conversaId} />
      <NavBarBot />
    </>
  );
};

export default ConversaMotorista;
