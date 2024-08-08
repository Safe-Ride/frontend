import React, { useState, useEffect } from "react";
// import api from "../../../apiPerfil";
import styles from "./ListDependente.module.css";
import Dependente from "./Dependente";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListDependente = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080/contratos/responsavel",
  });

  const navigate = useNavigate();
  const [cardContrato, setCardContrato] = useState();

  function recuperarInformacoesCliente() {
    api
      .get(`/${sessionStorage.ID_USUARIO}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        setCardContrato(data);
      })
      .catch(() => {
        console.log("Deu erro, tente novamente! ");
      });
  }

  useEffect(() => {
    recuperarInformacoesCliente();
  }, []);

  return (
    <div className={styles["list-dependente"]}>
      {cardContrato &&
        cardContrato.map((contrato, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/responsavel/pagamentos/dependente/${contrato.id}`)
            }
          >
            <Dependente
              dependente={contrato.dependente}
              pagamento={ultimoPagamento(contrato.pagamentos)}
            />
          </div>
        ))}
    </div>
  );
};

function ultimoPagamento(pagamentos) {
  const dataAtual = new Date();

  for (let i = 0; i < pagamentos.length; i++) {
    const dataVencimento = new Date(pagamentos[i].dataVencimento);

    if (
      dataAtual.getMonth() === dataVencimento.getMonth() &&
      dataAtual.getFullYear() === dataVencimento.getFullYear()
    ) {
      return pagamentos[i];
    }
  }

  return null;
}

export default ListDependente;
