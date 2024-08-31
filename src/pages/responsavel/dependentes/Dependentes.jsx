import React from "react";
import styles from "./Dependentes.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import CardDependente from "./CardDependente/CardDependente"
import { useNavigate } from "react-router-dom";

const titulo = "dependentes";

const listaDependentes = [
  {nome: "teste", id: 1, status: "EM CASA",},
  {nome: "teste2", id: 2, status: "NA ESCOLA",}
];

const Dependentes = () => {

  const navigate = useNavigate();

  return (
    <>
      <NavBarTop titulo={titulo} />
        <div className={styles.dependentes}>
          {
            listaDependentes.map(dependente => {
              return <CardDependente key={ dependente.id } dependente={ dependente } />  
            })
          }
          <div className={styles['adicionar']}>
            <div onClick={ () => navigate("/responsavel/dependentes/cadastrar") }>
              <span>+</span>
              <span>Adicionar Dependente</span>
            </div>
          </div>
        </div>
      
      <NavBarBot />
    </>
  );
};

export default Dependentes;
