import React, { useState } from "react";
import ListaResponsaveis from "../../../components/motorista/pagamentos/ListaResponsaveis";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import DefaultMessage from "../../../components/responsavel/pagamentos/DefaultMessage";
import SeletorAno from "./SeletorAno/SeletorAno";

const titulo = "pagamentos";

const Pagamentos = () => {
  const anoAtual = new Date(Date.now()).getFullYear()
  const [anoSelecionado, setAnoSelecionado] = useState(anoAtual)
  const anoHandler = (ano) => {
    setAnoSelecionado(ano)
  } 
  return (
    <>
      <NavBarTop titulo={titulo} />
      <SeletorAno handler={anoHandler} />
      <DefaultMessage tipo="responsável"></DefaultMessage>
      <ListaResponsaveis anoSelecionado={anoSelecionado}></ListaResponsaveis>
      <NavBarBot />
    </>
  );
};

export default Pagamentos;
