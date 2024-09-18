import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import CardDependente from "../../../components/responsavel/dependentes/CardDependente/CardDependente";
import styles from "./TempoReal.module.css";

const titulo = "tempo real";

const TempoReal = () => {
  const [listaDependentes, setListaDependentes] = useState([]);

  useEffect(() => {
    api
      .get(`/usuarios/dependentes-responsavel/${sessionStorage.ID_USUARIO}`)
      .then((res) => {
        const data = res.data;
        setListaDependentes(data);
      })
      .catch((error) => {
        console.log(error)
      })
  });

  const navigate = useNavigate();

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div>
        {listaDependentes.map((dependente) => {
          return (
            <div onClick={() => navigate(`/responsavel/tempo-real/${dependente.id}`)}>
              <CardDependente key={dependente.id} dependente={dependente} />
            </div>
          )
        })}
      </div>

      <NavBarBot />
    </>
  );
};

export default TempoReal;
