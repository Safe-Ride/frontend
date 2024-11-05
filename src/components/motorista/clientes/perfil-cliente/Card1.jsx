import React from "react";
import styles from "./Card1.module.css";
import FotoPerfil from "../../../../utils/functions/FotoPerfil.jsx";
import Imagem from "../../../../utils/assets/perfil/usuario.png";

const Card1 = ({ foto, nome, status, horario }) => {
  const handleImageError = (e) => {
    e.target.src = Imagem;
  };

  return (
    <div className={styles["card1"]}>
      <img
        src={FotoPerfil(foto)}
        alt=""
        className={styles["foto"]}
        onError={handleImageError}
      />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{nome}</h2>
        <p className={styles["status"]}>{status}</p>
        <p className={styles["horario"]}>{horario}</p>
      </div>
    </div>
  );
};

export default Card1;
