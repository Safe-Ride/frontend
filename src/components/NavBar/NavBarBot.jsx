import React from "react";
import styles from "./NavBarBot.module.css";
import imgVisaoGeral from "../../utils/assets/navbar/vg.png";
import imgUsuarios from "../../utils/assets/navbar/usuarios.png";
import imgTempoReal from "../../utils/assets/navbar/tempo-real.png";
import imgConversas from "../../utils/assets/navbar/conversas.png";
import imgPagamentos from "../../utils/assets/navbar/pagamentos.png";
import { useNavigate } from "react-router-dom";

const NavBarBot = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles["navbarbot"]}>
      <div
        className={styles["campos"]}
        onClick={() => navigate("/motorista/visao-geral")}
      >
        <div className={styles["campo-img"]}>
          <img src={imgVisaoGeral} alt="clientes" />
        </div>
        <p>dash</p>
      </div>
      <div
        className={styles["campos"]}
        onClick={() => navigate("/motorista/conversas")}
      >
        <div className={styles["campo-img"]}>
          <img src={imgConversas} alt="conversas" />
        </div>
        <p>conversas</p>
      </div>
      <div
        className={styles["campos"]}
        onClick={() => navigate("/motorista/clientes")}
      >
        <div className={styles["campo-img"]}>
          <img src={imgUsuarios} alt="clientes" />
        </div>
        <p>clientes</p>
      </div>
      <div
        className={styles["campos"]}
        onClick={() => navigate("/motorista/trajetos")}
      >
        <div className={styles["campo-img"]}>
          <img src={imgTempoReal} alt="trajetos" />
        </div>
        <p>tempo real</p>
      </div>

      <div
        className={styles["campos"]}
        onClick={() => navigate("/motorista/pagamentos")}
      >
        <div className={styles["campo-img"]}>
          <img src={imgPagamentos} alt="pagamentos" />
        </div>
        <p>pagamentos</p>
      </div>
    </nav>
  );
};

export default NavBarBot;
