import React from "react";
import styles from "./KPI2.module.css";

const KPI2 = () => {
  const mes = "Junho";

  return (
    <div className={styles["card1"]}>
      <div className={styles["texto"]}>Lucro bruto do mês de {mes}</div>
      <div className={styles["dado"]}>R$2.000,00</div>
    </div>
  );
};

export default KPI2;
