import React from "react";
// import styles from "./TempoReal.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import CardVisao from "../../../components/responsavel/visaoGeral/Card1";

const titulo = "Visão Geral";

const VisaoGeralResponsavel = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
        
      <NavBarBot />
    </>
  );
};

export default VisaoGeralResponsavel;
