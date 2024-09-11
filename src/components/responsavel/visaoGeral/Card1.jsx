import React from "react";
import styles from "./Card1.module.css";
import icoCasa from "../../../utils/assets/dependentes/casa.png"; // ícone de casa
import icoEscola from "../../../utils/assets/dependentes/escola.png"; // ícone de escola
import setaAmarela from "../../../utils/assets/dependentes/Arrow 2.png"; //

const CardVisao = () => {
  return (
    <div className={styles["Card"]}>
      <div className={styles["Information"]}>
        <p className={styles["nameDependent"]}>BRUNO HENRIQUE</p>
        <p className={styles["Status"]}>Voltando para Casa</p>
      </div>

      <div className={styles["exitBox"]}>
        <div className={styles["icone"]}>
         
          <img className={styles["icone-img"]} src={icoEscola} alt="Ícone da escola" />
        </div>
        <div className={styles["div-endereco-exit"]}>
          <p className={styles["p-endereco-exit"]}>
            Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001
          </p>
        </div>
        <div className={styles["div-time-exit"]}>
          <p className={styles["time-exit"]}>12:00</p>
        </div>
      </div>

      <div className={styles["BoxArrow"]}>
        
        <img className={styles["Arrow"]} src={setaAmarela} alt="Seta" />
      </div>

      <div className={styles["returnBox"]}>
        <div className={styles["icone"]}>
          {/* Ícone da casa */}
          <img className={styles["icone-img"]} src={icoCasa} alt="Ícone da casa" />
        </div>
        <div className={styles["div-endereco-return"]}>
          <p className={styles["p-endereco-return"]}>
            Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP
          </p>
        </div>
        <div className={styles["div-time-return"]}>
          <p className={styles["time-return"]}>12:00</p>
        </div>
      </div>

      <div className={styles["footer"]}>
        <p>Ver Dependente</p>
      </div>
    </div>
  );
};

export default CardVisao;
