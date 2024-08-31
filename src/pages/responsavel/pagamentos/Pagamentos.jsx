import React from "react";
import styles from "./Pagamentos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import DefaultMessage from "../../../components/responsavel/pagamentos/DefaultMessage";
import ListaMotoristas from "../../../components/responsavel/pagamentos/ListaMotoristas";

const titulo = "pagamentos";

const Pagamentos = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
      <DefaultMessage tipo="motorista"></DefaultMessage>
      <ListaMotoristas></ListaMotoristas>
      <NavBarBot />
    </>
  );
};

export default Pagamentos;
