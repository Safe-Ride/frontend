import React from "react";
import styles from "./SeletorAno.module.css";

function SeletorAno({ handler }) {
  const onChange = (event) => {
    event.preventDefault();
    handler(event.target.value);
  };

  const anoAtual = new Date(Date.now()).getFullYear();
  const anos = () => {
    let a = [];
    for (let i = anoAtual; i >= 2010; i--) {
      a.push(i);
    }
    console.log(a);
    return a;
  };
  return (
    <>
      <select
        onChange={onChange}
        id="anos"
        name={"anos"}
        defaultValue={anoAtual}
        className={styles["seletor"]}
      >
        {anos().map((ano) => {
          return <option value={ano}>{ano}</option>;
        })}
      </select>
    </>
  );
}

export default SeletorAno;
