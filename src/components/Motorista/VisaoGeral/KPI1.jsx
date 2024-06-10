import React from "react";
import styles from "./KPI1.module.css";

const KPI1 = () => {
  const mes = "Junho";

  return (
    <div className={styles["card1"]}>
      <div className={styles["texto"]}>Total de trajeto {mes}</div>
      <div className={styles["dado"]}>43</div>
    </div>
  );
};

export default KPI1;
