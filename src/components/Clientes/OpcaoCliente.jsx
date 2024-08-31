import React from "react";
import styles from "./OpcaoCliente.module.css";
import FotoPerfil from "../../utils/functions/FotoPerfil.jsx";

const OpcaoCliente = ({ foto, nome, responsavel }) => {
  return (
    <div className={styles["opcao"]}>
      <img src={FotoPerfil(foto)} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <div className={styles["campo-infos"]}>
          <h2 className={styles["nome"]}>{nome}</h2>
          {/* <p className={styles["responsavel"]}>Responsável:{responsavel}</p> */}
        </div>
      </div>
    </div>
  );
};

export default OpcaoCliente;
