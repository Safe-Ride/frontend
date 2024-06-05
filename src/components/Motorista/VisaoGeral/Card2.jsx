import React from "react";
import styles from "./Card2.module.css";

const Card2 = () => {
  // const mes = "Junho";

  return (
    <div className={styles["card1"]}>
      <p className={styles["texto"]}>Renda bruta por mês</p>
      <div className={styles["grafico"]}></div>
    </div>
  );
};

export default Card2;
