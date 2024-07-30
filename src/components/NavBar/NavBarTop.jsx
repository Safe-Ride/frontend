import React from "react";
import styles from "./NavBarTop.module.css";
import imgPerfil from "../../utils/assets/navbar/perfil.png";
import imgVoltar from "../../utils/assets/navbar/voltar.png";

const NavBarTop = ({ titulo }) => {
  return (
    <>
      <div className={styles["espaco-inicio"]}></div>
      <nav className={styles["navbartop"]}>
        <img className={styles["voltar"]} src={imgVoltar} alt="" />
        <p className={styles["titulo"]}>{titulo}</p>
        <a href="/motorista/perfil">
          <img className={styles["perfil"]} src={imgPerfil} alt="" />
        </a>
      </nav>
    </>
  );
};

export default NavBarTop;
