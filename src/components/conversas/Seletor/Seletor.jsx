import React from "react";
import styles from "./Seletor.module.css";
    

function Seletor({ opcoes, campo }) {
  return (
    <>
      <select name="" id="" className={styles["seletor"]}>
        <option value="">{campo}</option>
        {opcoes.map((opc) => {
          return (
            <option value={opc.value} name={"Mensagem"}>
              {opc.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Seletor;
