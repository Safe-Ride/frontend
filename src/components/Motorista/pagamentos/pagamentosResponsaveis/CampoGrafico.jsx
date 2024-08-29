import React from "react";
import styles from "./CampoGrafico.module.css";
import DonutChart from "./DonutChart";

const CampoGrafico = () => {
  return (
    <div className={styles["card1"]}>
      <p className={styles["texto"]}>
        Quantidade de pagamentos por status de pagamento no ano de
        {" " + new Date().getFullYear()}
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

export default CampoGrafico;
