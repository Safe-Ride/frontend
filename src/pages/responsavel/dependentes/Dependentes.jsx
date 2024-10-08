import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import CardDependente from "../../../components/responsavel/dependentes/CardDependente/CardDependente";
import styles from "./Dependentes.module.css";

const titulo = "dependentes";

// const listaDependentes = [
//   {nome: "teste", id: 1, status: "EM CASA",},
//   {nome: "teste2", id: 2, status: "NA ESCOLA",}
// ];

const Dependentes = () => {
  const [listaDependentes, setListaDependentes] = useState([]);

  useEffect(() => {
    api
      .get(`/usuarios/dependentes-responsavel/${sessionStorage.ID_USUARIO}`)
      .then((res) => {
        const data = res.data;
        setListaDependentes(data);
      });
  });

  const navigate = useNavigate();

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles.dependentes}>
        {listaDependentes.map((dependente) => {
          return ( 
            <div onClick={() => navigate(`/responsavel/dependentes/${dependente.id}`)}>
              <CardDependente key={dependente.id} dependente={dependente} />
            </div>
          )
        })}
        <div onClick={() => navigate("/responsavel/dependentes/5/encontrar-motorista")}>
          <CardDependente key={100} dependente={{"id": 100, "nome": "Dependente 32", "foto": null}} />
        </div>
        <div className={styles["adicionar"]}>
          <div onClick={() => navigate("/responsavel/dependentes/cadastrar")}>
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
