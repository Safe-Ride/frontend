import React, { useState, useEffect } from "react";
import styles from "./ListaMotoristas.module.css";
import { useNavigate } from "react-router-dom";
import Motorista from "./Motorista";
import api from "../../../api";

const ListaMotoristas = () => {
  const navigate = useNavigate();
  const [cardContrato, setCardContrato] = useState();

  function recuperarInformacoesCliente() {
    api
      .get(`/contratos/responsavel/${sessionStorage.ID_USUARIO}`, {
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
    <div className={styles["lista-motoristas"]}>
      {cardContrato &&
        cardContrato.map((contrato, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/responsavel/pagamentos/dependente/${contrato.id}`)
            }
          >
            <Motorista
              motorista={contrato.motorista}
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

export default ListaMotoristas;
