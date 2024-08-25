import React, { useEffect, useState } from "react";
import styles from "./Perfil.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Card1 from "../../../components/Motorista/Perfil/Card1";
import Card2 from "../../../components/Motorista/Perfil/Card2";
import apiPerfil from "../../../apiPerfil";
import { useParams } from "react-router-dom";

function Perfil({idUsuario}) {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!idUsuario) {
        idUsuario = sessionStorage.ID_USUARIO
    } 

    apiPerfil
      .get(`/${idUsuario}`)
      .then((response) => {
        const { data } = response;
        const { nome, imagem, dataNascimento } = data;
        console.log(data);

        setNome(nome);
        setImagem(imagem);
        setDataNascimento(dataNascimento);
        setEmail(sessionStorage.EMAIL_USUARIO);
      })
      .catch((error) => {
        console.log("Erro ao buscar os detalhes da música: ", error);
      });
  }, [id]);

  return (
    <>
      <NavBarTop titulo={nome} />
      <div className={styles["container"]}>
        <Card1
          nome={nome}
          foto={imagem.caminho}
          dataNascimento={dataNascimento}
        ></Card1>
        <Card2 nome={nome} email={email}></Card2>
      </div>
      <NavBarBot />
    </>
  );
}

export default Perfil;
