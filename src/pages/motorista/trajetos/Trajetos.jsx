import React, { useEffect, useState } from "react";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import TrajetosAtivos from "../../../components/motorista/Trajetos/TrajetosAtivos";
import TrajetosGerais from "../../../components/motorista/Trajetos/TrajetosGerais";
import styles from "./Trajetos.module.css";

const Trajetos = () => {
  const titulo = "trajetos";
  const [dados, setDados] = useState({});
  const [trajetoAtivo, setTrajetoAtivo] = useState(false);
  const [statusTrajeto, setStatusTrajeto] = useState(false);
  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  useEffect(() =>{
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
  }, [id, token, statusTrajeto]);

  const handleAtivoChange = (trajetoId) => {
    if (trajetoAtivo && trajetoAtivo.id === trajetoId) {
      setTrajetoAtivo(null);
    } else {
      const novoTrajetoAtivo = dados.find((trajeto) => trajeto.id === trajetoId);
      if (novoTrajetoAtivo) {
        setTrajetoAtivo(novoTrajetoAtivo);
      }
    }
  };

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}></div>
        <TrajetosAtivos trajetoAtivo={trajetoAtivo} statusTrajeto={setStatusTrajeto} />
        <TrajetosGerais trajetos={dados} onAtivoChange={handleAtivoChange} trajetoAtivo={trajetoAtivo} />
      </div>
      <NavBarBot />
    </>
  );
};

export default Trajetos;
