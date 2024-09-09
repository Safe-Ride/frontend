import React from "react";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import styles from "./Responsavel.module.css";

const Responsavel = ({ responsavel }) => {
  return (
    <div className={styles["responsavel"]}>
      <img
        src={FotoPerfil(responsavel.foto)}
        alt=""
        className={styles["foto"]}
      />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{responsavel.nome || "null"}</h2>
        <p className={styles["mensagem"]}>{responsavel.mensagem || "null"}</p>
      </div>
      <div className={styles["infos"]}>
        <p className={styles["horario"]}>{responsavel.horario || "null"}</p>
        <p className={styles["qtd-mensagens"]}>
          {responsavel.qtdMensagens || "null"}
        </p>
      </div>
    </div>
  );
};

export default Responsavel;
