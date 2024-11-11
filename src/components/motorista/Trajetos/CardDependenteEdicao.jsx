import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Imagem from "../../../utils/assets/perfil/usuario.png";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import styles from "./CardDependenteEdicao.module.css";

const CardDependenteEdicao = ({ dependente }) => {
  const handleImageError = (e) => {
    e.target.src = Imagem;
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["legenda"]}>
        <img
          src={FotoPerfil(dependente.foto)}
          alt={`Foto de ${dependente.nome}`}
          onError={handleImageError}
          className={styles["foto"]}
        />
        <h3 className={styles["text"]}>{dependente.nome}</h3>
        <i
          className="fas fa-x"
          style={{ color: "red", fontWeight: "bold" }}
        ></i>
      </div>
    </div>
  );
};

export default CardDependenteEdicao;
