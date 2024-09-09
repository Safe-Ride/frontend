import React from "react";
import styles from "./Pagamentos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import DefaultMessage from "../../../components/responsavel/pagamentos/DefaultMessage";
import ListaResponsaveis from "../../../components/Motorista/pagamentos/ListaResponsaveis";

const titulo = "pagamentos";

const Pagamentos = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
      <DefaultMessage tipo="responsável"></DefaultMessage>
      <ListaResponsaveis></ListaResponsaveis>
      <NavBarBot />
    </>
  );
};

export default Pagamentos;
