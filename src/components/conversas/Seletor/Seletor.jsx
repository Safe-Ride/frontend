import React from "react";
import styles from "./Seletor.module.css";
    

function Seletor({ opcoes, campo, change }) {

  const onChange = (event) => {
    event.preventDefault()
    change(event.target.value)
  }

  return (
    <>
      <select name="" id="" className={styles["seletor"]} onChange={onChange}>
        <option disabled selected value>{campo}</option>
        {opcoes.map((opc) => {
          return (
            <option value={opc.value} name={opc.name}>
              {opc.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Seletor;
