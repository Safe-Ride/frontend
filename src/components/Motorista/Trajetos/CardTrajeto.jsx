import React from "react";
import styles from "./CardTrajeto.module.css";
import OnOff from "./OnOff"

const CARD = ({escola, tipo, turno, infTrajeto}) => {
    return (
        <div className={styles['container']}>
            <h3 className={styles['text']}>{escola}</h3>
            <h3 className={styles['text']}>{tipo}</h3>
            <h3 className={styles['turno']}>{turno}</h3>
            <OnOff info={infTrajeto}/>
        </div>
    );
};

export default CARD;