import React from "react";
import styles from "./TrajetosAtivos.module.css";
import CardAtivo from "./CardAtivo"

const TRJA = ({ ativos }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["title"]}>
        {ativos ? `TRAJETO ATIVO: ${ativos}` : `NENHUM TRAJETO ATIVO`}
      </div>
      <CardAtivo nome={"Lucas Neves"} hora={'12:00'} status={0}/>
      <CardAtivo nome={"Lucas Neves"} hora={'12:00'} status={1}/>
      <CardAtivo nome={"Lucas Neves"} hora={'12:00'} status={2}/>
      <CardAtivo nome={"Lucas Neves"} hora={'12:00'} status={3}/>
    </div>
  );
};

export default TRJA;
