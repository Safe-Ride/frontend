import React from "react";
import styles from "./NavBarTop.module.css";
import imgPerfil from "../../utils/assets/navbar/perfil.png";
import imgVoltar from "../../utils/assets/navbar/voltar.png";

const NavBarTop = ({ titulo }) => {
  return (
    <nav className={styles["navbartop"]}>
      <img className={styles["voltar"]} src={imgVoltar} alt="" />
      <p className={styles["titulo"]}>{titulo}</p>
      <img className={styles["perfil"]} src={imgPerfil} alt="" />
    </nav>
  );
};

export default NavBarTop;
