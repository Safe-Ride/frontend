import React, { useEffect, useState } from "react";
import styles from "./PagamentosResponsaveis.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cobranca from "../../../../components/pagamentos/Cobranca";
import CampoGrafico from "../../../../components/Motorista/pagamentos/pagamentosResponsaveis/CampoGrafico";

const api = axios.create({
  baseURL: `http://localhost:8080/contratos`,
});

const PagamentosResponsaveis = () => {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [cardContrato, setCardContrato] = useState();

  function recuperarInformacoes() {
    api
      .get(`/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const { data } = response;
        const { nome } = data.responsavel;

        console.log("Pagamentos:", data.pagamentos);

        setCardContrato(data.pagamentos);
        setNome(nome);
      })
      .catch((error) => {
        console.log(`Erro ao buscar o contrato de id ${id}: `, error);
      });
  }

  useEffect(() => {
    recuperarInformacoes();
  }, []);

  return (
    <>
      <NavBarTop titulo={nome} />
      <div className={styles["container"]}>
        <CampoGrafico></CampoGrafico>
        <div className={styles["lista-cobranca"]}>
          {cardContrato &&
            cardContrato.map((cobranca) => (
              <Cobranca
                dataVencimento={cobranca.dataVencimento}
                valor={cobranca.valor}
                status={cobranca.status}
              />
            ))}
        </div>
      </div>
      <NavBarBot />
    </>
  );
};

export default PagamentosResponsaveis;
