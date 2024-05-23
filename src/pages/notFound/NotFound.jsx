import React from "react";
import styles from "./NotFound.module.css";
import NavBarTop from "../../components/NavBar/NavBarTop";
import NavBarBot from "../../components/NavBar/NavBarBot";

const titulo = "not found";

const NotFound = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["content"]}>
        <h1>Página não encontrada</h1>
      </div>
      <NavBarBot />
    </>
  );
};

export default NotFound;
