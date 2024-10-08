import React, { useEffect, useState } from "react";
import styles from "./Perfil.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Card1 from "../../../components/motorista/Perfil/Card1";
import Card2 from "../../../components/motorista/Perfil/Card2";
import api from "../../../api";
import { useLocation } from "react-router-dom";

function Perfil() {
  const location = useLocation();
  const idUsuario =
    location.state?.idUsuario || sessionStorage.getItem("ID_USUARIO");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    api
      .get(`/usuarios/${idUsuario}`)
      .then((response) => {
        const { data } = response;
        const { nome, imagem, dataNascimento } = data;
        setNome(nome);
        setImagem(imagem.caminho);
        setDataNascimento(dataNascimento);
        setEmail(sessionStorage.EMAIL_USUARIO);
      })
      .catch((error) => {
        console.log("Erro ao buscar os detalhes da música: ", error);
      });
  }, [idUsuario]);

  return (
    <>
      <NavBarTop titulo={nome} />
      <div className={styles["container"]}>
        <Card1
          nome={nome}
          foto={imagem}
          dataNascimento={dataNascimento}
        ></Card1>
        {sessionStorage.getItem("ID_USUARIO") === idUsuario && (
          <Card2 nome={nome} email={email} />
        )}
      </div>
      <NavBarBot />
    </>
  );
}

export default Perfil;
