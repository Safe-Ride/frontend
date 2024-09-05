import React from "react";
import styles from "./Card1.module.css";

const CardVisao = () => {
    return (
        <div className={styles["Card"]}>
            <div className={styles["Information"]}>
                <p className={styles["nameDependent"]}>Bruno Henrique</p>
                <p className={styles["Status"]}> Voltando p casa</p>
            </div>
            <div className={styles["exitBox"]}>
                <div className={styles["img-status-exit"]}>
                    <img src="" alt="" />
                </div>
                <div className={styles["div-endenreco-exit"]}>
                    <p className={styles["p-endereco-exit"]}>rua haddock lobo,595 Cerqueira César, São Paulo - SP, 01414-001</p>
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
                    <img src="" alt="" />
                </div>
            </div>
            <div className={styles["footer"]}>
                <p>Ver Dependente</p>
            </div>

        </div>
    );
};

export default CardVisao;
