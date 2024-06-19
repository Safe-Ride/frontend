import React from "react";
import styles from "./Card2.module.css";
import LineChart from "./Graficos/LineChart";

const Card2 = () => {
  // const mes = "Junho";

  return (
    <div className={styles["card1"]}>
      <p className={styles["texto"]}>Renda bruta por mês</p>
      <div className={styles["campo-grafico"]}>
        <LineChart></LineChart>
      </div>
    </div>
  );
};

export default Card2;
