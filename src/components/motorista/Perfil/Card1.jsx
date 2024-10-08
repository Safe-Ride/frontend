import React from "react";
import styles from "./Card1.module.css";
import FotoPerfil from "../../../utils/functions/FotoPerfil";

const Card1 = ({ nome, foto, dataNascimento }) => {
  return (
    <div className={styles["card1"]}>
      <img src={FotoPerfil(foto)} alt="" className={styles["foto"]} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{nome}</h2>
        <p className={styles["idade"]}>{calcularIdade(dataNascimento)} anos</p>
      </div>
    </div>
  );
};

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

export default Card1;
