import React from "react";
import styles from "./NavBarBot.module.css";
import imgUsuarios from "../../utils/assets/navbar/usuarios.png";
import imgTempoReal from "../../utils/assets/navbar/tempo-real.png";
import imgConversas from "../../utils/assets/navbar/conversas.png";
import imgPagamentos from "../../utils/assets/navbar/pagamentos.png";

const NavBarBot = () => {
  return (
    <nav className={styles["navbarbot"]}>
      <div className={styles["campos"]}>
        <div className={styles["campo-img"]}>
          <img src={imgUsuarios} alt="clientes" />
        </div>
        <p>clientes</p>
      </div>
      <div className={styles["campos"]}>
        <div className={styles["campo-img"]}>
          <img src={imgTempoReal} alt="tempo real" />
        </div>
        <p>tempo real</p>
      </div>
      <div className={styles["campos"]}>
        <div className={styles["campo-img"]}>
          <img src={imgConversas} alt="conversas" />
        </div>

        <p>conversas</p>
      </div>
      <div className={styles["campos"]}>
        <div className={styles["campo-img"]}>
          <img src={imgPagamentos} alt="pagamentos" />
        </div>

        <p>pagamentos</p>
      </div>
    </nav>
  );
};

export default NavBarBot;
