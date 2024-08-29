import React from "react";
import styles from "./Card1.module.css";
import FotoPerfil from "../../../utils/functions/FotoPerfil.jsx";

const Card1 = ({ foto, nome, status, horario }) => {
  return (
    <div className={styles["card1"]}>
      <img src={FotoPerfil(foto)} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{nome}</h2>
        <p className={styles["status"]}>{status}</p>
        <p className={styles["horario"]}>{horario}</p>
      </div>
    </div>
  );
};

export default Card1;
