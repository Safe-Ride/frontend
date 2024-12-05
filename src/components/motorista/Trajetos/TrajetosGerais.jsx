import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import Card from "./CardTrajeto";
import styles from "./TrajetosGerais.module.css";

const TrajetosGerais = ({ trajetos, onAtivoChange, trajetoAtivo}) => {
  const navigate = useNavigate();
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [mostrarTrajetosDoDia, setMostrarTrajetosDoDia] = useState(false);

  const diasDaSemana = {
    "SEGUNDA": 1,
    "TERCA": 2, 
    "QUARTA": 3, 
    "QUINTA": 4, 
    "SEXTA": 5
  }

  const handleChange = () => {
    setMostrarTrajetosDoDia(!mostrarTrajetosDoDia)

    mostrarTrajetos()
  }

  const mostrarTrajetos = () => {
    let hoje = new Date().getDay()
    if(mostrarTrajetosDoDia) {
      return trajetos.filter(t => diasDaSemana[t.diaSemana] === hoje)
    }
    return trajetos
  }

  const baixarTrajetosTxt = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const motoristaId = sessionStorage.getItem("ID_USUARIO");

      const response = await api.get(
        `/trajetos/baixar-trajeto-motorista/${motoristaId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          responseType: "blob"
        }
      );

      const blob = new Blob([response.data], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `TRAJETOS-MOTORISTA-${motoristaId}.txt`);
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Erro ao baixar arquivo:", e.response?.data || e.message);
    }
  };

  const trajetosFiltrados = Array.isArray(mostrarTrajetos())
    ? mostrarTrajetos().filter((trajeto) =>
        trajeto.escola.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
      )
    : [];

  return (
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["title"]}>TRAJETOS</div>
        <p className={styles["title"]}>HOJE</p>
        <label className={styles["switch"]}>
          <input type="checkbox" checked={mostrarTrajetosDoDia} onChange={handleChange} />
          <span className={styles["slider"]}></span>
        </label>
        <button
          className={styles["btn-download"]}
          onClick={baixarTrajetosTxt}
        ></button>
      </div>
      <input
        className={styles["search"]}
        type="text"
        placeholder="Pesquisar"
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
      />

      {Array.isArray(trajetos) ? (
        (trajetoAtivo != null
          ? trajetosFiltrados.filter(
              (trajeto) => trajeto.id === trajetoAtivo.id
            )
          : trajetosFiltrados
        ).map((trajeto) => (
          <Card
            key={trajeto.id}
            id={trajeto.id}
            trajeto={trajeto}
            onAtivoChange={onAtivoChange}
          />
        ))
      ) : (
        <p>Nenhum trajeto encontrado</p>
      )}
      <div
        className={styles["container"]}
        onClick={() => navigate("/motorista/trajetos/cadastro")}
      >
        <h3 className={styles["text"]}>+ Adicionar novo trajeto</h3>
      </div>
    </div>
  );
};

export default TrajetosGerais;

