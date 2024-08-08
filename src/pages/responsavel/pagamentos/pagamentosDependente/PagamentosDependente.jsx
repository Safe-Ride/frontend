import React, { useEffect, useState } from "react";
import styles from "./PagamentosDependente.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import { useParams } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/dependentes`,
});

const Clientes = () => {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    api
      .get(`/${id}`)
      .then((response) => {
        const { data } = response;
        const { nome, foto } = data;

        setNome(nome);
        setFoto(foto);
      })
      .catch((error) => {
        console.log("Erro ao buscar os detalhes da música: ", error);
      });
  }, [id]);

  return (
    <>
      <NavBarTop titulo={nome} />
      <div className={styles["container"]}></div>
      <NavBarBot />
    </>
  );
};

export default Clientes;
