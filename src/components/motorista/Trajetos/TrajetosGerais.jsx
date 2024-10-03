import React from "react";
import styles from "./TrajetosGerais.module.css";
import Card from "./CardTrajeto";
import { useNavigate } from "react-router-dom";

const TrajetosGerais = ({ trajetos, onAtivoChange, trajetoAtivo}) => {
  const navigate = useNavigate();
  
  return (
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["title"]}>TRAJETOS</div>
        <input
          className={styles["search"]}
          type="text"
          placeholder="Pesquisar"
        />
      </div>
      {Array.isArray(trajetos) ? (
        (trajetoAtivo != null
          ? trajetos.filter((trajeto) => trajeto.id === trajetoAtivo.id)
          : trajetos
        ).map((trajeto) => (
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
