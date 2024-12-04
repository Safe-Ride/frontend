import React, { useEffect, useState } from "react";
import styles from "./ClienteId.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import Card1 from "../../../../components/motorista/clientes/perfil-cliente/Card1";
import DadosResponsavel from "../../../../components/motorista/clientes/perfil-cliente/DadosResponsavel";
import DadosDependentes from "../../../../components/motorista/clientes/perfil-cliente/DadosDependentes";
import { useParams } from "react-router-dom";
import api from "../../../../api";

function ClienteId() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [status, setStatus] = useState("");
  const [horario, setHorario] = useState("");
  const [responsavel, setResponsavel] = useState("");

  useEffect(() => {
    api
      .get(`/usuarios/${id}`)
      .then((response) => {
        const { data } = response;
        const { nome, imagem, status, horario } = data;

        setResponsavel(data);

        setNome(nome);
        setFoto(imagem.caminho);
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
        <DadosResponsavel responsavel={responsavel}></DadosResponsavel>
        <DadosDependentes
          dependentes={responsavel.dependentes}
        ></DadosDependentes>
        {/* <Historico></Historico> */}
      </div>
      <NavBarBot />
    </>
  );
}

export default ClienteId;
