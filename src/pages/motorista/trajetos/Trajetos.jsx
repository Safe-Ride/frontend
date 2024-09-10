import React, { useState, useEffect } from "react";
import api from "../../../api";
import styles from "./Trajetos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import TrajetosAtivos from "../../../components/motorista/Trajetos/TrajetosAtivos";
import TrajetosGerais from "../../../components/motorista/Trajetos/TrajetosGerais";

const Clientes = () => {
  const titulo = "trajetos";
  const [dados, setDados] = useState(null);
  const [trajetoAtivo, setAtivo] = useState(() => {
    return sessionStorage.getItem("isAtivo") || "NAO_INICIADO";
  });
  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const requi = async () => {
      api
        .get(`/trajetos/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDados(res.data);
        })
        .catch((err) => {
          console.log("erro:", err);
        });
    };
    requi();
  }, [id, token]);

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}></div>
        <TrajetosAtivos res={dados} ativo={trajetoAtivo} />
        <TrajetosGerais
          res={dados}
          setAtivo={setAtivo}
          isAtivo={trajetoAtivo}
        />
      </div>
      <NavBarBot />
    </>
  );
};

export default Clientes;
