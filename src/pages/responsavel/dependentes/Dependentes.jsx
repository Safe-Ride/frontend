import React from "react";
import styles from "./Dependentes.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import CardDependente from "./CardDependente/CardDependente"

const titulo = "dependentes";

const listaDependentes = [
  {nome: "teste", id: 1, status: "EM CASA",},
  {nome: "teste2", id: 2, status: "NA ESCOLA",}
];

const Dependentes = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
        <div className={styles.dependentes}>
          {
            listaDependentes.map(dependente => {
              return <CardDependente dependente={ dependente } />  
            })
          }
          <div className={styles['adicionar']}>
            <span>+</span><span>Adicionar Dependente</span>
          </div>
        </div>
      
      <NavBarBot />
    </>
  );
};

export default Dependentes;
