import React, { useEffect, useState } from "react";
import styles from "./ClienteId.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import Card1 from "../../../../components/motorista/clientes/perfil-cliente/Card1";
import DadosResponsavel from "../../../../components/motorista/clientes/perfil-cliente/DadosResponsavel";
import DadosDependentes from "../../../../components/motorista/clientes/perfil-cliente/DadosDependentes";
import Historico from "../../../../components/motorista/clientes/perfil-cliente/Historico";
import { useParams } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/usuarios/`,
});

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

  const responsavel = {
    nome: "teste",
    email: "teste",
    cpf: "teste",
    telefone: "teste",
    dataNascimento: "teste",
  };

  const dependentes = [
    {
      id: 1,
      nome: "teste",
    },
    {
      id: 2,
      nome: "teste",
    },
  ];

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
        <DadosDependentes dependentes={dependentes}></DadosDependentes>
        {/* <Historico></Historico> */}
      </div>
      <NavBarBot />
    </>
  );
}

export default ClienteId;
