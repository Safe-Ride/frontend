import React, { useState, useEffect } from "react";
// import api from "../../../apiPerfil";
import styles from "./ListDependente.module.css";
import Dependente from "./Dependente";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListDependente = () => {
  const api = axios.create({
    baseURL: "https://661ef2e016358961cd932dc5.mockapi.io/usuarios",
  });

  const navigate = useNavigate();
  const [cardsDependentes, setCardDependentes] = useState();

  function recuperarInformacoesCliente() {
    api
      .get()
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        setCardDependentes(data);
      })
      .catch(() => {
        console.log("Deu erro, tente novamente! ");
      });
  }

  useEffect(() => {
    recuperarInformacoesCliente();
  });

  return (
    <div className={styles["list-dependente"]}>
      {cardsDependentes &&
        cardsDependentes.map((dependente, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/responsavel/pagamentos/dependente/${dependente.id}`)
            }
          >
            <Dependente foto={dependente.foto} nome={dependente.nome} />
          </div>
        ))}
    </div>
  );
};

export default ListDependente;
