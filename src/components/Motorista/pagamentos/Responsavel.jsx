import React from "react";
import styles from "./Responsavel.module.css";
import FormatarData from "../../../utils/functions/FormatarData";

const Responsavel = ({ responsavel, pagamento }) => {
  return (
    <div className={styles["responsavel"]}>
      <img src={responsavel.foto} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{responsavel.nome}</h2>
        <p className={styles["ultimo-pagamento"]}>
          {FormatarData(pagamento.dataVencimento)} R${pagamento.valor},00
        </p>
      </div>
    </div>
  );
};

export default Responsavel;
