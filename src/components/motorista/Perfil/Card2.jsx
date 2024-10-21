import React, { useState } from "react";
import styles from "./Card2.module.css";
import api from "../../../api";
import imgEditar from "../../../utils/assets/perfil/editar.png";
import imgSalvar from "../../../utils/assets/perfil/done.png";
import imgExcluir from "../../../utils/assets/perfil/excluir.png";

const Card2 = ({ nome, email }) => {
  const [imagem, setImagem] = useState(null); // Estado para a imagem
  const [editandoCampo, setEditandoCampo] = useState(null);
  const [campos, setCampos] = useState({
    nome: sessionStorage.NOME_USUARIO || nome,
    email: sessionStorage.EMAIL_USUARIO || email,
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
    salvarBanco(editandoCampo, campos[editandoCampo]);
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

  const selecionarImagem = (event) => {
    setImagem(event.target.files[0]); // Salva a imagem no estado
  };

  const subirImagem = () => {
    const id = sessionStorage.getItem("ID_USUARIO");
    const token = sessionStorage.getItem("token");

    if (imagem) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(imagem); // Lê o arquivo como um ArrayBuffer

      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        api
          .patch(`/usuarios/atualizar-foto-perfil/${id}`, arrayBuffer, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": imagem.type,
            },
          })
          .then((response) => {
            console.log("Imagem enviada com sucesso:", response.data);
          })
          .catch((error) => {
            console.log("Erro ao enviar a imagem:", error);
          });
      };
    } else {
      console.log("Nenhuma imagem selecionada");
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
        <div className={styles["dados"]}>
          <p>Foto:</p>
          <input type="file" accept="image/*" onChange={selecionarImagem} />
          <button
            className={styles["btn-upload"]}
            onClick={subirImagem}
          ></button>
        </div>
      </div>
    </div>
  );
};

function salvarBanco(campo, info) {
  const data = {
    id: sessionStorage.ID_USUARIO,
    campo: campo,
    alteracao: info,
  };
  console.log(data);
  api
    .post(`/usuarios/atualizar-${campo}`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Erro ao salvar dados no banco: ", error);
    });
}

export default Card2;
