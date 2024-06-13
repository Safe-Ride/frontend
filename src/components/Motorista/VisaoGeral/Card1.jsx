import React from "react";
import styles from "./Card1.module.css";
import DonutChart from "../Graficos/DonutChart";

const Card1 = () => {
  const mes = "Junho";

  return (
    <div className={styles["card1"]}>
      <p className={styles["texto"]}>
        Quantidade de boletos por situação de pagamento no mês de {mes}
      </p>
      <div className={styles["campo-grafico"]}>
        <div className={styles["campo-legendas"]}>
          <div className={styles["legenda"]}>
            <p className={styles["leg-1"]}></p>
            <p>Pago</p>
          </div>
          <div className={styles["legenda"]}>
            <p className={styles["leg-2"]}></p>
            <p>Pendente</p>
          </div>
          <div className={styles["legenda"]}>
            <p className={styles["leg-3"]}></p>
            <p>Atrasado</p>
          </div>
        </div>
        <div className={styles["grafico"]}>
          <DonutChart></DonutChart>
        </div>
      </div>
    </div>
  );
};

export default Card1;
