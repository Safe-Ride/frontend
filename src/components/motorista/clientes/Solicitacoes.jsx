import React from "react";
import styles from "./Solicitacoes.module.css";
import srcFoto from "../../../utils/assets/solicitacoes-dependentes.png";

const Solicitacoes = ({ qtdSolicitacoes }) => {
  return (
    <div className={styles["solicitacoes"]}>
      <img src={srcFoto} alt="convite" />
      <div className={styles["campos"]}>
        <p className={styles["texto"]}>Solicitações</p>
        <p className={styles["qtdSolicitacoes"]}>{qtdSolicitacoes}</p>
      </div>
    </div>
  );
};

export default Solicitacoes;
