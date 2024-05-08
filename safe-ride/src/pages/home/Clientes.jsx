import React from "react";
import styles from "./Clientes.module.css";
import NavBarTop from "../../components/NavBar/NavBarTop";
import NavBarBot from "../../components/NavBar/NavBarBot";
import Pesquisa from "../../components/Clientes/Pesquisa";

const titulo = "clientes";

const Home = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <Pesquisa></Pesquisa>
      </div>
      <NavBarBot />
    </>
  );
};
export default Home;
