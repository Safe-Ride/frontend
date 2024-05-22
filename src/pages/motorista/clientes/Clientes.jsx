import api from "../../../api";
import React, { useState, useEffect } from "react";
import styles from "./Clientes.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Pesquisa from "../../../components/Clientes/Pesquisa";
import OpcaoCliente from "../../../components/Clientes/OpcaoCliente";
import Solicitacoes from "../../../components/Clientes/Solicitacoes";
import { useNavigate } from "react-router-dom";

const titulo = "clientes";

const Clientes = () => {
  const navigate = useNavigate();
  const [cardsCliente, setCardCliente] = useState();

  function recuperarInformacoesCliente() {
    api
      .get()
      .then((response) => {
        console.log(response.data);
        const { data } = response;
        setCardCliente(data);
      })
      .catch(() => {
        console.log("Deu erro, tente novamente! ");
      });
  }

  useEffect(() => {
    recuperarInformacoesCliente();
  }, []);

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <Pesquisa></Pesquisa>
      </div>
      <div>
        {cardsCliente &&
          cardsCliente.map((cliente, index) => (
            <div
              key={index}
              onClick={() => navigate(`/motorista/clientes/:id`)}
            >
              <OpcaoCliente
                foto={cliente.foto}
                nome={cliente.nome}
                status={cliente.status}
                horario={"12:30"}
                notificacao={cliente.notificacao}
              />
            </div>
          ))}
      </div>
      <Solicitacoes></Solicitacoes>
      <NavBarBot />
    </>
  );
};

export default Clientes;
