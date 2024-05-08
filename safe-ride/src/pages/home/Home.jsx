import React from "react";
// import styles from "./Home.module.css";
import NavBarTop from "../../components/NavBar/NavBarTop";
import NavBarBot from "../../components/NavBar/NavBarBot";

const titulo = "clientes";

const Home = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />

      <NavBarBot />
    </>
  );
};
export default Home;
