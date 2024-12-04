import React, { useState, useEffect } from "react";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import OpcaoCliente from "../../../components/motorista/clientes/OpcaoCliente";
import Solicitacoes from "../../../components/motorista/clientes/Solicitacoes";
import Pesquisa from "../../../components/motorista/clientes/Pesquisa";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

const titulo = "clientes";

const Clientes = () => {
  const navigate = useNavigate();
  const [cardsCliente, setCardCliente] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [qtdSolicitacao, setQtdSolicitacao] = useState(0);

  const clientesFiltrados = cardsCliente.filter((cliente) =>
    cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  function recuperarInformacoes() {
    api
      .get(`/usuarios/clientes-motorista/${sessionStorage.ID_USUARIO}`, {
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

  function recuperarQtdSolicitacoes() {
    api
      .get(
        `/solicitacoes/motorista/${sessionStorage.ID_USUARIO}/qtdSolicitacao`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        setQtdSolicitacao(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    recuperarInformacoes();
    recuperarQtdSolicitacoes();
  }, []);

  return (
    <>
      <NavBarTop titulo={titulo} />
      <Pesquisa setTermoPesquisa={setTermoPesquisa} />
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
      <div onClick={() => navigate(`/motorista/solicitacoes`)}>
        <Solicitacoes qtdSolicitacoes={qtdSolicitacao} />
      </div>
      <NavBarBot />
    </>
  );
};

export default Clientes;
