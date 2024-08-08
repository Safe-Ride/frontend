import React from "react";
import styles from "./LegendaStatus.module.css";

const LegendaStatus = () => {
  return (
    <div className={styles["legenda"]}>
      <p className={styles["leg-1"]}></p>
      <p>Pago</p>
      <p className={styles["leg-2"]}></p>
      <p>Pendente</p>
      <p className={styles["leg-3"]}></p>
      <p>Atrasado</p>
    </div>
  );
};

export default LegendaStatus;
