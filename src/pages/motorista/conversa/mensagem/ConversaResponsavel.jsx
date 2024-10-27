import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../api";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import StatusRecebido from "../../../../components/conversas/mensagens/StatusRecebido";
import StatusEnviado from "../../../../components/conversas/mensagens/StatusEnviado";
import styles from "./ConversaResponsavel.module.css";

const ConversaResponsavel = () => {
  const [responsavel, setResponsavel] = useState({});
  const [mensagens, setMensagens] = useState([]);
  const idUsuario = sessionStorage.getItem("ID_USUARIO");

  const messagesEndRef = useRef(null);

  const params = useParams();

  const loadMensagens = useCallback(async () => {
    try {
      const response = await api.get(
        `/conversas?responsavelId=${params.id}&motoristaId=${idUsuario}`,
        { headers: { Authorization: `Bearer ${sessionStorage.token}` } }
      );
      const data = response.data;
      let mensagens = data.mensagens
      setResponsavel(data.responsavel);
      let mensagensFiltradas = mensagens.filter(m => m.status !== "")
      setMensagens(mensagensFiltradas);
      await marcarMensagensComoLidas(data.mensagens);
      return response.status
    } catch (error) {
      console.error(error);
    }
  }, []);

  const marcarMensagensComoLidas = async (mensagens) => {
    let mensagensNaoLidas = mensagens.filter((m) => !m.lida && m.tipoUsuario === "RESPONSAVEL");
        console.log(mensagensNaoLidas)
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
  }, [loadMensagens]);

  useEffect(() => {
    scrollToBottom();
  }, [mensagens]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("messagesEndRef is null");
    }
  };

  return (
    <>
      <NavBarTop titulo={responsavel.nome} />
      <div className={styles["conversa"]}>
        {mensagens &&
          mensagens.map((m) => {
            if (m.tipoUsuario === "MOTORISTA") {
              return <StatusEnviado mensagem={m} key={m.id}></StatusEnviado>;
            } else {
              return <StatusRecebido mensagem={m} key={m.id}></StatusRecebido>;
            }
          })}
        <div ref={messagesEndRef} style={{ paddingTop: "10%" }}></div>
      </div>
      <NavBarBot />
    </>
  );
};

export default ConversaResponsavel;
