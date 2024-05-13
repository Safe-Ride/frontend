import React from "react";
import styles from "./Home.module.css";
import NavBarTop from "../../components/NavBar/NavBarTop";
import NavBarBot from "../../components/NavBar/NavBarBot";
import Header from "../../components/Header/Header";


const titulo = "clientes";

const Home = () => {
  return (
    <>
    <Header />
    <div className={styles["banner-main"]}>
      <div className={styles["container"]}>
        <div className={styles["banner-main-text"]}>
        <h1 className={styles["text-uppercase"]}>
              <strong>Segurança em Movimento: Por uma Viagem Mais Segura para
                Todos</strong>
            </h1>
            <p class="pt-2">
              Juntos, fazemos da segurança um caminho compartilhado para todos
              os destinos
            </p>
            <div class="row justify-content-between">
              <a href="responsavel.html" class="btn btn-yellow m-3 col">Sou Reponsavel</a>
              <a href="motorista.html" class="btn btn-black m-3 col">Sou Motorista</a>
            </div>
        </div>
      </div>

    </div>


    </>
  );
};
export default Home;
