import React from "react";
import styles from "./CardTrajeto.module.css";
import OnOff from "./OnOff"

const CARD = () => {
    return (
        <div className={styles['container']}>
            <h3 className={styles['text']}>Etec Getúlio Vargas</h3>
            <h3 className={styles['text']}>IDA</h3>
            <h3 className={styles['turno']}>M</h3>
            <OnOff/>
        </div>
    );
};

export default CARD;