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
          if (dependente.motorista != null) {
            return (
              <CardDependente
                key={dependente.id}
                dependente={dependente}
                navigateTo={`/responsavel/dependentes/${dependente.id}`}
              />
            );
          } else {
            return (
              <CardDependente
                key={dependente.id}
                dependente={dependente}
                navigateTo={`/responsavel/dependentes/${dependente.id}/encontrar-motorista`}
              />
            );
          }
        })}
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
