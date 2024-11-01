import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardTrajeto.module.css";
import OnOff from "./OnOff";

const CardTrajeto = ({ id, trajeto, onAtivoChange }) => {
  const navigate = useNavigate();
  return (
    <div className={styles["container"]}>
      <div
        className={styles["container"]}
        onClick={() => navigate(`/motorista/trajetos/${id}`)}
      >
        <h3 className={styles["escola"]}>{trajeto.escola.nome}</h3>
        <h3 className={styles["turno"]}>{FormatarHorario(trajeto.horario)}</h3>
        <h3 className={styles["tipo"]}>{trajeto.tipo}</h3>
      </div>
      <div className={styles["campo-onoff"]}>
        <OnOff
          trajetoId={trajeto.id}
          ativo={trajeto.ativo}
          onAtivoChange={onAtivoChange}
        />
      </div>
    </div>
  );
};

export default CardTrajeto;

function FormatarHorario(horario) {
  return horario === "MANHA" ? "M" : "T";
}
