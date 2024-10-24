import React from "react";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import styles from "./Motorista.module.css";
import Imagem from "../../../utils/assets/perfil/usuario.png"

const Motorista = ({ motorista }) => {
  const handleImageError = (e) => {
    e.target.src = Imagem;
  } 

  if (motorista.qtdMensagens > 0) {
    return (
      <div className={styles["motorista"]}>
        <img
          src={FotoPerfil(motorista.foto)}
          alt="Foto do usuario"
          className={styles["foto"]}
          onError={handleImageError}
        />
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
  } else {
    return (
      <div className={styles["motorista"]}>
        <img
          src={FotoPerfil(motorista.foto)}
          alt="Foto do usuario"
          className={styles["foto"]}
          onError={handleImageError}
        />
        <div className={styles["campos"]}>
          <h2 className={styles["nome"]}>{motorista.nome}</h2>
          <p className={styles["mensagem"]}>{motorista.mensagem}</p>
        </div>
        <div className={styles["infos"]}>
          <p className={styles["horario"]}>{motorista.horario}</p>
        </div>
      </div>
    )
  }
};

export default Motorista;

