import React from "react";
import styles from "./OpcaoCliente.module.css";
import FotoPerfil from "../../../utils/functions/FotoPerfil.jsx";
import Imagem from "../../../utils/assets/perfil/usuario.png"

const OpcaoCliente = ({ foto, nome, responsavel }) => {
  const handleImageError = (e) => {
    e.target.src = Imagem;
  } 

  return (
    <div className={styles["opcao"]}>
      <img src={FotoPerfil(foto)} alt="" className={styles["foto"]} onError={handleImageError}/>
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
