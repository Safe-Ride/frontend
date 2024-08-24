import React, { useState, useEffect } from "react";
import api from "../../../api";
import styles from "./Conversa.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import ImagemUsuario from "../../../components/ImagemUsuario/Imagem"
import ImagemUs from "../../../utils/assets/perfil/profile.png"


const MotoristaConversa = () => {
  const titulo = "conversas";
  const [dados, setDados] = useState(null);
  const [img_path, setImage] = useState(ImagemUs)
  const id = sessionStorage.getItem('ID_USUARIO')
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    const requi = async () => {
      api
        .get(`/usuarios/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
        .then((res) => {
          setDados(res.data)
          const caminhoImagem = require(`../../../utils/assets/perfil/${res.data.imagem.caminho}`);
          setImage(caminhoImagem);
        })
        .catch((err) => {
          console.log('erro:', err)
        })
    }
    requi();
  }, [id, token])


  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}>
          <ImagemUsuario img_path={img_path}/>
        </div>
      </div>
      <NavBarBot />
    </>
  );
};

export default MotoristaConversa;
