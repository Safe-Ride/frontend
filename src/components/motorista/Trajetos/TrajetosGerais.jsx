import React from "react";
import styles from "./TrajetosGerais.module.css";
import Card from './CardTrajeto'


const TrajetosGerais = ({ res, setAtivo, isAtivo}) => {

    return (
        <div className={styles["card"]}>
            <div className={styles["header"]}>
                <div className={styles["title"]}>TRAJETOS</div>
                <input className={styles["search"]} type="text" placeholder="Pesquisar" />
            </div>
            {res ? (
                <Card escola={res.escola.nome} tipo={res.tipo} turno={"M"} setAtivo={setAtivo} isAtivo={isAtivo}/>
            ) : (
                <p>Carregando trajetos...</p>
            )}

            <div className={styles['container']}>
                <h3 className={styles['text']}>+ Adicionar novo trajeto</h3>
            </div>
        </div>
    );
};

export default TrajetosGerais;
