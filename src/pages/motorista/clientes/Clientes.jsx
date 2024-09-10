import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Clientes.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import OpcaoCliente from "../../../components/motorista/clientes/OpcaoCliente";
import Solicitacoes from "../../../components/motorista/clientes/Solicitacoes";
import Pesquisa from "../../../components/motorista/clientes/Pesquisa";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:8080/usuarios/clientes-motorista`,
});

const titulo = "clientes";

const Clientes = () => {
  const navigate = useNavigate();
  const [cardsCliente, setCardCliente] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const clientesFiltrados = cardsCliente.filter((cliente) =>
    cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

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
      <Pesquisa setTermoPesquisa={setTermoPesquisa} /> {/* Passando a função */}
      <div>
        {clientesFiltrados.map((cliente, index) => (
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
