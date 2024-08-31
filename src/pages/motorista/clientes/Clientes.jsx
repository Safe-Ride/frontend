import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Clientes.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Pesquisa from "../../../components/Clientes/Pesquisa";
import OpcaoCliente from "../../../components/Clientes/OpcaoCliente";
import Solicitacoes from "../../../components/Clientes/Solicitacoes";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:8080/usuarios/clientes-motorista`,
});

const titulo = "clientes";

const Clientes = () => {
  const navigate = useNavigate();
  const [cardsCliente, setCardCliente] = useState();

  function recuperarInformacoes() {
    api
      .get(`/${sessionStorage.ID_USUARIO}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
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
    recuperarInformacoes();
  }, []);

  return (
    <>
      <NavBarTop titulo={titulo} />
      <Pesquisa></Pesquisa>

      <div>
        {cardsCliente &&
          cardsCliente.map((cliente, index) => (
            <div
              key={index}
              onClick={() => navigate(`/motorista/clientes/${cliente.id}`)}
            >
              <OpcaoCliente foto={cliente.foto} nome={cliente.nome} />
            </div>
          ))}
      </div>
      <Solicitacoes></Solicitacoes>
      <NavBarBot />
    </>
  );
};

export default Clientes;
