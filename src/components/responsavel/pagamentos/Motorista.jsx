import React from "react";
import styles from "./Motorista.module.css";
import FormatarData from "../../../utils/functions/FormatarData";

const Motorista = ({ motorista, pagamento }) => {
  return (
    <div className={styles["motorista"]}>
      <img src={motorista.foto} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{motorista.nome}</h2>
        <p className={styles["ultimo-pagamento"]}>
          {FormatarData(pagamento.dataVencimento)} R${pagamento.valor},00
        </p>
      </div>
    </div>
  );
};

export default Motorista;
