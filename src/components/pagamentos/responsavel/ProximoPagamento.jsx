import React from "react";
import styles from "./ProximoPagamento.module.css";

const ProximoPagamento = () => {
  return (
    <div className={styles["proximo-pagamento"]}>
      <div className={styles["titulo"]}>
        <p>Próximo pagamento</p>
        <button>Pagar agora</button>
      </div>
      <div className={styles["campos"]}>
        <div className={styles["vencimento"]}>
          <p>Vencimento</p>
          <p>XPTO</p>
        </div>
        <div className={styles["valor"]}>
          <p>Valor</p>
          <p>R$</p>
        </div>
      </div>
    </div>
  );
};

export default ProximoPagamento;
