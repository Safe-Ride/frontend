import React, { useEffect, useState } from "react";
import styles from "./PagamentosDependente.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import { useParams } from "react-router-dom";
import axios from "axios";
import LegendaStatus from "../../../../components/pagamentos/LegendaStatus";
import ProximoPagamento from "../../../../components/pagamentos/responsavel/ProximoPagamento";
import Cobranca from "../../../../components/pagamentos/Cobranca";

const api = axios.create({
  baseURL: `http://localhost:8080/contratos/dependente`,
});

const PagamentosDependente = () => {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [cardContrato, setCardContrato] = useState();

  function recuperarInformacoesCobranca() {
    api
      .get(`/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const { data } = response;
        const { nome } = data.dependente;

        setCardContrato(data.pagamentos);
        setNome(nome);
      })
      .catch((error) => {
        console.log("Erro ao buscar os detalhes da música: ", error);
      });
  }

  useEffect(() => {
    recuperarInformacoesCobranca();
  }, []);

  return (
    <>
      <NavBarTop titulo={nome} />
      <div className={styles["container"]}>
        <LegendaStatus></LegendaStatus>
        <ProximoPagamento></ProximoPagamento>
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

export default PagamentosDependente;
