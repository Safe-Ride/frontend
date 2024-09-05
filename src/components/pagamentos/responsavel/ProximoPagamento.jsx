import React from "react";
import styles from "./ProximoPagamento.module.css";
import FormatarData from "../../../utils/functions/FormatarData";

const ProximoPagamento = ({ pagamento }) => {
  return (
    <div className={styles["proximo-pagamento"]}>
      <div className={styles["titulo"]}>
        <p>Próximo pagamento</p>
        <button>Pagar agora</button>
      </div>
      <div className={styles["campos"]}>
        <div className={styles["vencimento"]}>
          <p>Vencimento</p>
          {/* <p>{FormatarData(pagamento.dataVencimento)}</p> */}
        </div>
        <div className={styles["valor"]}>
          <p>Valor</p>
          {/* <p>R${pagamento.valor},00</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProximoPagamento;
