import React, { useEffect, useState } from "react";
import styles from "./PagamentosResponsaveis.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import { useParams } from "react-router-dom";
import Cobranca from "../../../../components/pagamentos/Cobranca";
import CampoGrafico from "../../../../components/motorista/pagamentos/pagamentosResponsaveis/CampoGrafico";
import api from "../../../../api";

const PagamentosResponsaveis = () => {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [cardContrato, setCardContrato] = useState();

  function recuperarInformacoes() {
    api
      .get(`/contratos/${id}`, {
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
