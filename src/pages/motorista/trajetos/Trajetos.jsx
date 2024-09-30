import React, { useState, useEffect } from "react";
import api from "../../../api";
import styles from "./Trajetos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import TrajetosAtivos from "../../../components/motorista/Trajetos/TrajetosAtivos";
import TrajetosGerais from "../../../components/motorista/Trajetos/TrajetosGerais";

const Trajetos = () => {
  const titulo = "trajetos";
  const [dados, setDados] = useState(null);
  const [trajetoAtivo, setTrajetoAtivo] = useState(null);
  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const requi = async () => {
      api
        .get(`/trajetos/motorista/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDados(res.data);

          const trajetoAtivoEncontrado = res.data.find(
            (trajeto) => trajeto.ativo
          );
          setTrajetoAtivo(trajetoAtivoEncontrado || null);
        })
        .catch((err) => {
          console.log("erro:", err);
        });
    };
    requi();
  }, [id, token]);

  const handleAtivoChange = (trajetoId, novoAtivo) => {
    if (novoAtivo) {
      const novoTrajetoAtivo = dados.find(
        (trajeto) => trajeto.id === trajetoId
      );
      setTrajetoAtivo(novoTrajetoAtivo); // Define o trajeto como ativo
    } else {
      setTrajetoAtivo(null); // Remove o trajeto ativo
    }
  };

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}></div>
        <TrajetosAtivos trajetoAtivo={trajetoAtivo} />
        <TrajetosGerais trajetos={dados} onAtivoChange={handleAtivoChange} />
      </div>
      <NavBarBot />
    </>
  );
};

export default Trajetos;
