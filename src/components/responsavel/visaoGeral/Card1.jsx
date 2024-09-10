import React from "react";
import styles from "./Card1.module.css";
import icoCasa from "../../../utils/assets/dependentes/casa.png";
import icoEscola from "../../../utils/assets/dependentes/escola.png";

const CardVisao = () => {
  return (
    <div className={styles["Card"]}>
      <div className={styles["Information"]}>
        <p className={styles["nameDependent"]}>Bruno Henrique</p>
        <p className={styles["Status"]}>Voltando para casa</p>
      </div>

      <div className={styles["exitBox"]}>
        <div className={styles["icone"]}>
          {/* Exibe o ícone da casa */}
          <img className={styles["icone-img"]} src={icoCasa} alt="Ícone da casa" />
        </div>
        <div className={styles["div-endereco-exit"]}>
          <p className={styles["p-endereco-exit"]}>
            Rua Haddock Lobo, 595, Cerqueira César, São Paulo - SP, 01414-001
          </p>
        </div>
        <div className={styles["div-time-exit"]}>
          <p className={styles["time-exit"]}>12:00</p>
        </div>
      </div>

      <div className={styles["BoxArrow"]}>
        <img className={styles["Arrow"]} src="" alt="" />
      </div>

      <div className={styles["returnBOX"]}>
        <div className={styles["img-status-return"]}>
        <div className={styles["icone"]}>
          <img src={icoEscola} alt="Ícone da escola" />
          </div>
        </div>
      </div>

      <div className={styles["footer"]}>
        <p>Ver Dependente</p>
      </div>
    </div>
  );
};

export default CardVisao;
