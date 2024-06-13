import React from "react";
import styles from "./Card1.module.css";

const Card1 = ({ foto }) => {
  const imgPerfil = sessionStorage.getItem("FOTO_USUARIO");

  return (
    <div className={styles["card1"]}>
      <img
        src={`../../../utils/assets/perfil/${imgPerfil}`}
        alt=""
        className={styles["foto"]}
      />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{sessionStorage.NOME_USUARIO}</h2>
        <p className={styles["status"]}>
          {calcularIdade(sessionStorage.DATA_NASCIMENTO_USUARIO)} anos
        </p>
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
