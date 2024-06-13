import React, { useState } from "react";
import styles from "./Card2.module.css";
import imgEditar from "../../../utils/assets/perfil/editar.png";
import imgSalvar from "../../../utils/assets/perfil/done.png";
import imgExcluir from "../../../utils/assets/perfil/excluir.png";

const Card2 = ({ nome, email }) => {
  const [editandoCampo, setEditandoCampo] = useState(null);
  const [campos, setCampos] = useState({
    nome: sessionStorage.NOME_USUARIO || "",
    email: sessionStorage.EMAIL_USUARIO || "",
    cpf: sessionStorage.CPF_USUARIO || "",
    telefone: sessionStorage.TELEFONE_USUARIO || "",
    data_nascimento: sessionStorage.DATA_NASCIMENTO_USUARIO || "",
  });

  const iniciarEdicao = (campo) => {
    setEditandoCampo(campo);
  };

  const salvarEdicao = () => {
    console.log("Salvando alterações:", campos[editandoCampo]);
    sessionStorage.setItem(
      editandoCampo.toUpperCase() + "_USUARIO",
      campos[editandoCampo]
    );
    setEditandoCampo(null);
  };

  const cancelarEdicao = () => {
    setCampos((prevCampos) => ({
      ...prevCampos,
      [editandoCampo]:
        sessionStorage.getItem(editandoCampo.toUpperCase() + "_USUARIO") || "",
    }));
    setEditandoCampo(null);
  };

  const alterarCampo = (event) => {
    const valor = event.target.value;
    setCampos((prevCampos) => ({
      ...prevCampos,
      [editandoCampo]: valor,
    }));
  };

  const campoEditavel = (campo, valorAtual) => {
    if (editandoCampo === campo) {
      return (
        <>
          <input
            type="text"
            value={campos[campo]}
            onChange={alterarCampo}
            className={styles["input-campo"]}
          />
          <div className={styles["opcoes"]}>
            <img
              src={imgSalvar}
              alt="salvar"
              className={styles["salvar"]}
              onClick={salvarEdicao}
            />
            <img
              src={imgExcluir}
              alt="excluir"
              className={styles["excluir"]}
              onClick={cancelarEdicao}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <span>{valorAtual}</span>
          <img
            src={imgEditar}
            alt="editar"
            onClick={() => iniciarEdicao(campo)}
          />
        </>
      );
    }
  };

  return (
    <div className={styles["card2"]}>
      <div className={styles["inicio"]}>
        <p>Meus dados</p>
      </div>
      <div className={styles["campo"]}>
        <div className={styles["dados"]}>
          <p>Nome:</p>
          {campoEditavel("nome", sessionStorage.NOME_USUARIO || "")}
        </div>
        <div className={styles["dados"]}>
          <p>Email:</p>
          {campoEditavel("email", sessionStorage.EMAIL_USUARIO || "")}
        </div>
        <div className={styles["dados"]}>
          <p>CPF:</p>
          {campoEditavel("cpf", sessionStorage.CPF_USUARIO || "")}
        </div>
        <div className={styles["dados"]}>
          <p>Telefone:</p>
          {campoEditavel("telefone", sessionStorage.TELEFONE_USUARIO || "")}
        </div>
        <div className={styles["dados"]}>
          <p>Nascimento:</p>
          {campoEditavel(
            "data_nascimento",
            sessionStorage.DATA_NASCIMENTO_USUARIO || ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Card2;
