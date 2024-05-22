import React from "react";
import styles from "./ClienteId.module.css";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import Card1 from "../../../../components/Clientes/ClienteId/Card1";
import Card2 from "../../../../components/Clientes/ClienteId/Card2";
// import { useNavigate } from "react-router-dom";

const ClienteId = ({ titulo }) => {
  // const navigate = useNavigate();

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <Card1></Card1>
        <Card2></Card2>
      </div>
      <NavBarBot />
    </>
  );
};

export default ClienteId;
