import React from "react";
import styles from "./Pesquisa.module.css";

const Pesquisa = () => {
  return (
    <div className={styles["pesquisa"]}>
      <input id={styles["ipt_pesquisa"]} placeholder="Pesquisar"></input>
      <button id={styles["btn_filtro"]}></button>
    </div>
  );
};

export default Pesquisa;
