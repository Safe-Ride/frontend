import React, { useEffect, useState } from "react";
import api from "../../../api";
import arrow from "../../../utils/assets/play-button.png";
import Seletor from "../Seletor/Seletor";
import styles from "./Enviar.module.css";

function Enviar() {

  const idUsuario = sessionStorage.getItem("ID_USUARIO")

  const opcoesMensagem = [
    { name: "Não vai!", value: "NAO_VAI" }
  ];

  const [dependentes, setDependentes] = useState([])

  const loadDependentes = () => {
    api.get(`/usuarios/dependentes-responsavel/${idUsuario}`, {
      headers: { Authorization: `Bearer ${sessionStorage.token}` }
    }).then((res) => {
      const data = res.data
      const seletorDependentes = (data) => {
        let dependentes = []
        for (let i = 0; i < data.length; i++) {
           dependentes.push({name: data[i].nome, id: data[i].id})
        }
        return dependentes
      }
      setDependentes(seletorDependentes(data))
    })
  }

  useEffect(() => {
    loadDependentes()
  })

  return (
    <div className={styles["container"]}>
      <div className={styles["enviar"]}>
        <Seletor opcoes={opcoesMensagem} campo={"Mensagem"} />
        <Seletor opcoes={dependentes} campo={"Dependente"} />
        <img className={styles["icone"]} src={arrow} alt="Icone de enviar" />
      </div>
    </div>
  );
}

export default Enviar;

