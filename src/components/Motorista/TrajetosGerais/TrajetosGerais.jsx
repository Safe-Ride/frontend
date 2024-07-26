import React from "react";
import styles from "./TrajetosGerais.module.css";

const TRJG = () => {
    return (
        <div className={styles["card"]}>
            <div className={styles["header"]}>
                <div className={styles["title"]}>TRAJETOS</div>
                <input className={styles["search"]} type="text" placeholder="Pesquisar" />
            </div>
        </div>
    );
};

export default TRJG;
