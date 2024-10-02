import React from "react";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import styles from "./Motorista.module.css";

const Motorista = ({ motorista }) => {
  return (
    <div className={styles["motorista"]}>
      <img src={FotoPerfil(motorista.foto)} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{motorista.nome}</h2>
        <p className={styles["mensagem"]}>{motorista.mensagem}</p>
      </div>
      <div className={styles["infos"]}>
        <p className={styles["horario"]}>{motorista.horario}</p>
        <p className={styles["qtd-mensagens"]}>{motorista.qtdMensagens}</p>
      </div>
    </div>
  );
};

export default Motorista;
