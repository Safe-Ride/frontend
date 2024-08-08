import React from "react";
import styles from "./Dependente.module.css";

const Dependente = ({ nome, foto }) => {
  return (
    <div className={styles["dependente"]}>
      <img src={foto} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{nome}</h2>
        <p className={styles["ultimo-pagamento"]}>00/00/00 R$200,00</p>
      </div>
    </div>
  );
};

export default Dependente;
