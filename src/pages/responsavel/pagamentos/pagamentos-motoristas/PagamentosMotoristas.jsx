import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./PagamentosMotoristas.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import LegendaStatus from "../../../../components/pagamentos/LegendaStatus";
import ProximoPagamento from "../../../../components/pagamentos/responsavel/ProximoPagamento";
import Cobranca from "../../../../components/pagamentos/Cobranca";

const api = axios.create({
  baseURL: `http://localhost:8080/contratos`,
});

const PagamentosMotoristas = () => {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [cardContrato, setCardContrato] = useState([]);

  function recuperarInformacoesCobranca() {
    api
      .get(`/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        const { data } = response;
        const { nome } = data.motorista;

        setCardContrato(data.pagamentos);
        setNome(nome);
      })
      .catch((error) => {
        console.log(`Erro ao buscar contrato de id ${id}: `, error);
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
        <ProximoPagamento
          pagamento={calcularProximoPagamento(cardContrato)}
        ></ProximoPagamento>
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

function calcularProximoPagamento(cardContrato) {
  for (let i = 0; i < cardContrato.length; i++) {
    if (cardContrato[i].status === "PENDENTE") {
      return cardContrato[i];
    }
  }
  return {
    dataVencimento: "--",
    valor: "--",
  };
}

export default PagamentosMotoristas;
