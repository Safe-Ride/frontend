import React from "react";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import CardVisao from "../../../components/responsavel/visaoGeral/Card1";
import icoCasa from "../../../utils/assets/dependentes/casa.png";
import icoEscola from "../../../utils/assets/dependentes/escola.png";

const titulo = "Visão Geral";



const VisaoGeralResponsavel = () => {
 
  const status = "escola"; 

  return (
    <>
      <NavBarTop titulo={titulo} />
      <CardVisao />
      <NavBarBot />
    </>
  );
};

export default VisaoGeralResponsavel;
