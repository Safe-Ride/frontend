import React from "react";
import styles from "./Card3.module.css";
import BarChart from "./Graficos/BarChart";

const Card3 = () => {
  return (
    <div className={styles["card1"]}>
      <p className={styles["texto"]}>Pagamentos totais e efetuados por mês</p>
      <div className={styles["campo-legendas"]}>
        <div className={styles["legenda"]}>
          <p className={styles["leg-1"]}></p>
          <p>Totais</p>
        </div>
        <div className={styles["legenda"]}>
          <p className={styles["leg-2"]}></p>
          <p>Efetuados</p>
        </div>
      </div>
      <div className={styles["grafico"]}>
        <BarChart></BarChart>
      </div>
    </div>
  );
};

export default Card3;
