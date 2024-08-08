import React from "react";
import styles from "./Dependente.module.css";

const Dependente = () => {
  return (
    <div className={styles["dependente"]}>
      <img
        src={`../../../utils/assets/perfil/`}
        alt=""
        className={styles["foto"]}
      />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{sessionStorage.NOME_USUARIO}</h2>
        <p className={styles["ultimo-pagamento"]}>00/00/00 R$200,00</p>
      </div>
    </div>
  );
};

export default Dependente;
