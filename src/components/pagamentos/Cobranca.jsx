import React from "react";
import styles from "./Cobranca.module.css";
import FormatarData from "../../utils/functions/FormatarData";
import ObterMesData from "../../utils/functions/ObterMesData";

const Cobranca = ({ dataVencimento, valor, status }) => {
  const dataCompleta = new Date(dataVencimento);
  const mes = ObterMesData(dataCompleta);

  return (
    <div className={styles["cobranca"]}>
      <div className={styles["status"]}>{statusCobranca(status)}</div>
      <div className={styles["campos"]}>
        <div className={styles["infos"]}>
          <div className={styles["mes"]}>
            {mes.charAt(0).toUpperCase() + mes.slice(1)}/
            {dataCompleta.getFullYear()}
          </div>
          <div className={styles["data-valor"]}>
            {FormatarData(dataVencimento)} - R${valor},00
          </div>
        </div>
        <div className={styles["gerar-boleto"]}>
          <button className={styles["btn-gerar-boleto"]}>Gerar Pix</button>
        </div>
      </div>
    </div>
  );
};

function statusCobranca(status) {
  if (status === "PAGO") {
    return <p className={styles["leg-1"]}></p>;
  } else if (status === "PENDENTE") {
    return <p className={styles["leg-2"]}></p>;
  } else {
    return <p className={styles["leg-3"]}></p>;
  }
}

export default Cobranca;
