import React from "react";
import styles from "./NavBarBot.module.css";
import imgVisaoGeral from "../../utils/assets/navbar/vg.png";
import imgUsuarios from "../../utils/assets/navbar/usuarios.png";
import imgTempoReal from "../../utils/assets/navbar/tempo-real.png";
import imgConversas from "../../utils/assets/navbar/conversas.png";
import imgPagamentos from "../../utils/assets/navbar/pagamentos.png";
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBarBot = () => {
  if (sessionStorage.TIPO_USUARIO === "RESPONSAVEL") {
    return (
      <>
        <div className={styles["espaco-fim"]}></div>
        <nav className={styles["navbarbot"]}>
          <NavBarItem navigateTo={"/responsavel/dependentes"} img={imgUsuarios} titulo={"Dependentes"} />
          <NavBarItem navigateTo={"/responsavel/tempo-real"} img={imgTempoReal} titulo={"Tempo Real"} />
          <NavBarItem navigateTo={"/responsavel/visao-geral"} img={imgVisaoGeral} titulo={"Visão Geral"} />
          <NavBarItem navigateTo={"/responsavel/conversas"} img={imgConversas} titulo={"Conversas"} />
          <NavBarItem navigateTo={"/responsavel/pagamentos"} img={imgPagamentos} titulo={"Pagamentos"} />
        </nav>
      </>
    );
  }

  return (
    <>
      <div className={styles["espaco-fim"]}></div>
      <nav className={styles["navbarbot"]}>
        <NavBarItem navigateTo={"/motorista/clientes"} img={imgUsuarios} titulo={"Clientes"} />
        <NavBarItem navigateTo={"/motorista/trajetos"} img={imgTempoReal} titulo={"Trajetos"} />
        <NavBarItem navigateTo={"/motorista/visao-geral"} img={imgVisaoGeral} titulo={"Visão Geral"} />
        <NavBarItem navigateTo={"/motorista/conversas"} img={imgConversas} titulo={"Conversas"} />
        <NavBarItem navigateTo={"/motorista/pagamentos"} img={imgPagamentos} titulo={"Pagamentos"} />
      </nav>
    </>
  );
};

export default NavBarBot;
