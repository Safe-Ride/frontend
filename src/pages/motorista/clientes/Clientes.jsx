import api from "../../../api";
import React, { useState, useEffect } from "react";
import styles from "./Clientes.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Pesquisa from "../../../components/Clientes/Pesquisa";
import OpcaoCliente from "../../../components/Clientes/OpcaoCliente";

const titulo = "clientes";

const Clientes = () => {
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
            <div key={index}>
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
      <NavBarBot />
    </>
  );
};

export default Clientes;
