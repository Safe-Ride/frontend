import React from "react";
import styles from "./Card2.module.css";

const Card2 = () => {
  return (
    <div className={styles["card2"]}>
      <div className={styles["inicio"]}>
        <p>Dados do Responsável:</p>
        <p className={styles["ver-perfil"]}>ver perfil</p>
      </div>
    </div>
  );
};

export default Card2;
