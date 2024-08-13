import React from "react";
import styles from "./Pagamentos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import DefaultMessage from "../../../components/responsavel/pagamentos/DefaultMessage";
import ListDependente from "../../../components/responsavel/pagamentos/ListDependente";

const titulo = "pagamentos";

const Pagamentos = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <DefaultMessage></DefaultMessage>
        <ListDependente></ListDependente>
      </div>
      <NavBarBot />
    </>
  );
};

export default Pagamentos;
