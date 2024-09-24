import React from "react";
import styles from "./DadosResponsavel.module.css";
import FormatarData from "../../../../utils/functions/FormatarData";

const DadosResponsavel = ({ responsavel }) => {
  return (
    <div className={styles["card2"]}>
      <div className={styles["inicio"]}>
        <p>Dados do responsável</p>
      </div>
      <div className={styles["campo"]}>
        <div className={styles["dados"]}>
          <p>Nome:</p>
          {responsavel.nome}
        </div>
        <div className={styles["dados"]}>
          <p>Email:</p>
          {responsavel.email}
        </div>
        <div className={styles["dados"]}>
          <p>CPF:</p>
          {responsavel.cpf}
        </div>
        <div className={styles["dados"]}>
          <p>Telefone:</p>
          {responsavel.telefone}
        </div>
        <div className={styles["dados"]}>
          <p>Nascimento:</p>
          {FormatarData(responsavel.dataNascimento)}
        </div>
      </div>
    </div>
  );
};

export default DadosResponsavel;
