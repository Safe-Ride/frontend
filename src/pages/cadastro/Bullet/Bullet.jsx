import React from "react";
import styles from "../Cadastro.module.css";

function Bullet({ id, titulo, ativo }) {
  if (ativo) {
    return (
      <>
        <li className={styles["bullet-active"]} id={id}>
          {titulo}
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className={styles["bullet-inactive"]} id={id}>
          {titulo}
        </li>
      </>
    );
  }
}

export default Bullet;
