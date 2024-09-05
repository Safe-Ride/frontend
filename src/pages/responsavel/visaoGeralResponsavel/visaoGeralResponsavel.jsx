import React from "react";
// import styles from "./TempoReal.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import CardVisao from "../../../components/responsavel/visaoGeral/Card1";
import icoCasa from "../../../utils/assets/dependentes/casa.png";
import icoEscola from "../../../utils/assets/dependentes/escola.png";

const titulo = "Visão Geral";

function returnIconeStatus(status) {
  switch (status) {
    case "escola":
      return icoEscola;
    case "casa":
      return icoCasa;
  }
}

const VisaoGeralResponsavel = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
        
        <CardVisao>
          
        </CardVisao>
      <NavBarBot />
    </>
  );
};

export default VisaoGeralResponsavel;
