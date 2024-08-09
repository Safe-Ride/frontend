import React, {useEffect}from "react";
import api from "../../../api";
import styles from "./Trajetos.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import TrajetosAtivos from "../../../components/Motorista/Trajetos/TrajetosAtivos"
import TrajetosGerais from "../../../components/Motorista/Trajetos/TrajetosGerais"

const titulo = "trajetos";
const id = sessionStorage.getItem('ID_USUARIO')
const token = sessionStorage.getItem('token')

const requi = () => {
  api
    .get(`/trajetos/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

const Clientes = () => {
  useEffect(()=>{
    requi()
  })

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}></div>
        <TrajetosAtivos />
        <TrajetosGerais />
      </div>
      <NavBarBot />
    </>
  );
};

export default Clientes;
