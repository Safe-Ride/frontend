import React from "react";
import styles from "./CardTrajeto.module.css";
import OnOff from "./OnOff";

const CardTrajeto = ({ trajeto, onAtivoChange }) => {
  return (
    <div className={styles["container"]}>
      <h3 className={styles["escola"]}>{trajeto.escola.nome}</h3>
      <h3 className={styles["turno"]}>{FormatarHorario(trajeto.horario)}</h3>
      <h3 className={styles["tipo"]}>{trajeto.tipo}</h3>
      <OnOff
        trajetoId={trajeto.id}
        ativo={trajeto.ativo}
        onAtivoChange={onAtivoChange}
      />
    </div>
  );
};

export default CardTrajeto;

function FormatarHorario(horario) {
  return horario === "MANHA" ? "M" : "T";
}
