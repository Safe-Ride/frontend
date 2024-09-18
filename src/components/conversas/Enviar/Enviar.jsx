import React from "react";
import arrow from "../../../utils/assets/play-button.png";
import Seletor from "../Seletor/Seletor";
import styles from "./Enviar.module.css";
function Enviar() {
  const opcoesMensagem = [
    { name: "NÃO VAI", value: "NÃO VAI" },
    { name: "VAI", value: "VAI" },
  ];

  const dependentes = [
    {name: "Joao", value: 1},
    {name: "Pedro", value: 1}
  ]

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

