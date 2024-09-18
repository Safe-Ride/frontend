import React from "react";
import styles from "./Motorista.module.css";
import FotoPerfil from "../../../utils/functions/FotoPerfil";

const Motorista = ({ motorista }) => {
  return (
    <div className={styles["motorista"]}>
      <img src={FotoPerfil(motorista.foto)} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{motorista.nome || "null"}</h2>
        <p className={styles["mensagem"]}>{motorista.mensagem || "null"}</p>
      </div>
      <div className={styles["infos"]}>
        <p className={styles["horario"]}>{motorista.horario || "null"}</p>
        <p className={styles["qtd-mensagens"]}>
          {motorista.qtdMensagens || "null"}
        </p>
      </div>
    </div>
  );
};

export default Motorista;
