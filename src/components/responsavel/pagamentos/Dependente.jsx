import React from "react";
import styles from "./Dependente.module.css";
import FormatarData from "../../../utils/functions/FormatarData";

const Dependente = ({ dependente, pagamento }) => {
  return (
    <div className={styles["dependente"]}>
      <img src={dependente.foto} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{dependente.nome}</h2>
        <p className={styles["ultimo-pagamento"]}>
          {FormatarData(pagamento.dataVencimento)} R${pagamento.valor},00
        </p>
      </div>
    </div>
  );
};

export default Dependente;
