import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import CardVisao from "../../../components/responsavel/visaoGeral/Card1";
import styles from "./visaoGeralResponsavel.module.css";

const VisaoGeralResponsavel = () => {
  const titulo = "Visão Geral";
  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  const [dependentes, setDependentes] = useState([]);
  const api = axios.create({
    baseURL: `http://localhost:8080/`,
  });

  const buscarDependentes = () => {
    api
      .get(`/usuarios/status-dependentes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setDependentes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dependentes:", error);
      });
  };

  useEffect(() => {
    buscarDependentes();
  }, []);

  return (
    <>
      <NavBarTop titulo={titulo} />
      {/* Div de contêiner para os cards */}
      <div className={styles["cardsContainer"]}>
        {/* Renderiza um CardVisao para cada dependente */}
        {dependentes.map((dependente, index) => (
          <CardVisao
            key={index}
            id={dependente.dependenteId}
            nomeDependente={dependente.dependenteNome}
            status={dependente.mensagemStatus}
            enderecoSaida={dependente.dependenteEndereco}
            horarioSaida={dependente.horarioInicio}
            enderecoRetorno={dependente.escolaNome}
            horarioRetorno={dependente.horarioFim}
          />
        ))}
      </div>
      <NavBarBot />
    </>
  );
};

export default VisaoGeralResponsavel;
