import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListaResponsaveis.module.css";
import Responsavel from "./Responsavel";

const ListaResponsaveis = ({anoSelecionado}) => {
  const api = axios.create({
    baseURL: "http://localhost:8080/contratos/motorista",
  });

  const navigate = useNavigate();
  const [cardContrato, setCardContrato] = useState();

  const recuperarInformacoesCliente = useCallback(() => {
    api
      .get(`/${sessionStorage.ID_USUARIO}/ano/${anoSelecionado}`, {
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
  }, [anoSelecionado])

  useEffect(() => {
    recuperarInformacoesCliente();
  }, [recuperarInformacoesCliente]);

  return (
    <div className={styles["lista-responsaveis"]}>
      {cardContrato &&
        cardContrato.map((contrato, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/motorista/pagamentos/responsavel/${contrato.id}`)
            }
          >
            <Responsavel
              responsavel={contrato.responsavel}
              pagamento={ultimoPagamento(contrato.pagamentos)}
            />
          </div>
        ))}
    </div>
  );
};

function ultimoPagamento(pagamentos) {
  pagamentos.sort((a, b) => new Date(b.dataVencimento) - new Date(a.dataVencimento));
  for (let i = 0; i < pagamentos.length; i++) {
      return pagamentos[i];
  }

  return null;
}

export default ListaResponsaveis;
