import React from "react";
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
    default:
      return icoCasa; // Adicionando um valor padrão
  }
}

const VisaoGeralResponsavel = () => {
  // Simular status para este exemplo
  const status = "escola"; // Aqui você pode passar dinamicamente o status desejado

  return (
    <>
      <NavBarTop titulo={titulo} />
      <CardVisao icone={returnIconeStatus(status)} />
      <NavBarBot />
    </>
  );
};

export default VisaoGeralResponsavel;
