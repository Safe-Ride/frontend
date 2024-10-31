import React from "react";
import styles from "./VisaoGeral.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Card1 from "../../../components/motorista/VisaoGeral/Card1";
import KPI1 from "../../../components/motorista/VisaoGeral/KPI1";
import KPI2 from "../../../components/motorista/VisaoGeral/KPI2";
import Card2 from "../../../components/motorista/VisaoGeral/Card2";
import Card3 from "../../../components/motorista/VisaoGeral/Card3";

const titulo = "visão geral ";

const Clientes = () => {
  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        {/* <div className={styles["kpis"]}>
          <KPI1></KPI1>
          <KPI2></KPI2>
        </div> */}
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
      </div>
      <NavBarBot />
    </>
  );
};

export default Clientes;
