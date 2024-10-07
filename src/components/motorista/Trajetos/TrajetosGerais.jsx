import React from "react";
import styles from "./TrajetosGerais.module.css";
import Card from "./CardTrajeto";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

const TrajetosGerais = ({ trajetos, onAtivoChange }) => {
  const navigate = useNavigate();

  const baixarTrajetosTxt = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const motoristaId = sessionStorage.getItem("ID_USUARIO");

      const response = await api.get(
        `/trajetos/baixar-trajeto-motorista/${motoristaId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );

      // Cria uma URL para o blob que será baixado
      const blob = new Blob([response.data], { type: "text/plain" }); // Ajuste o tipo se necessário
      const url = window.URL.createObjectURL(blob);

      // Cria um link temporário para fazer o download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `TRAJETOS-MOTORISTA-${motoristaId}.txt`);
      document.body.appendChild(link);
      link.click(); // Simula o clique para iniciar o download

      // Limpa o link temporário após o download
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Erro ao baixar arquivo:", e.response?.data || e.message);
    }
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["title"]}>TRAJETOS</div>
        <button
          className={styles["btn-download"]}
          onClick={baixarTrajetosTxt}
        ></button>
      </div>
      <input className={styles["search"]} type="text" placeholder="Pesquisar" />
      {Array.isArray(trajetos) ? (
        trajetos.map((trajeto) => (
          <Card
            key={trajeto.id}
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
