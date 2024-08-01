import React from "react";
import styles from "./TrajetosGerais.module.css";
import Card from './CardTrajeto'
import api from "../../../api";

var trajetos 
api
.get(`/trajetos`)
.then((res)=> {
    trajetos = res.data
})
.catch((err)=>{
  console.log(err)
})

const TRJG = () => {
    return (
        <div className={styles["card"]}>
            <div className={styles["header"]}>
                <div className={styles["title"]}>TRAJETOS</div>
                <input className={styles["search"]} type="text" placeholder="Pesquisar" />
            </div>
            <Card escola={"Etec Getulio Vargas"} tipo={"IDA"} turno={"M"} ativo={trajetos}/>
            <div className={styles['container']}>
                <h3 className={styles['text']}>+ Adicionar novo trajeto</h3>
            </div>
        </div>
    );
};

export default TRJG;