import React, { useEffect, useState } from "react";
import styles from "./ClienteId.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import Card1 from "../../../../components/Clientes/ClienteId/Card1";
import Card2 from "../../../../components/Clientes/ClienteId/Card2";
import Card3 from "../../../../components/Clientes/ClienteId/Card3";
import api from "../../../../api";
import { useParams } from "react-router-dom";

function ClienteId() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [status, setStatus] = useState("");
  const [horario, setHorario] = useState("");

  useEffect(() => {
    api
      .get(`/${id}`)
      .then((response) => {
        const { data } = response;
        const { nome, foto, status, horario } = data;

        setNome(nome);
        setFoto(foto);
        setStatus(status);
        setHorario(horario);
      })
      .catch((error) => {
        console.log("Erro ao buscar os detalhes da música: ", error);
      });
  }, [id]);

  return (
    <>
      <NavBarTop titulo={nome} />
      <div className={styles["container"]}>
        <Card1
          nome={nome}
          foto={foto}
          status={status}
          horario={horario}
        ></Card1>
        <Card2></Card2>
        <Card3></Card3>
      </div>
      <NavBarBot />
    </>
  );
}

export default ClienteId;
