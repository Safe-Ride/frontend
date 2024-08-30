import React, { useState, useEffect } from "react";
import api from "../../../api";
import styles from "./Conversa.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import ImagemUsuario from "../../../components/ImagemUsuario/Imagem"
// import ImagemUs from "../../../utils/assets/perfil/profile.png"


const MotoristaConversa = () => {
  const titulo = "conversas";
  const [clientes, setClientes] = useState([])
  // const [img_path, setImage] = useState(ImagemUs)
  // const [loading, setLoading] = useState(true);

  const id = sessionStorage.getItem('ID_USUARIO')
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    const requi = async () => {
      api
        .get(`/usuarios/clientes-motorista/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
        .then((res) => {
          console.log(res.data)
          setClientes(res.data);
          // const caminhoImagem = require(`../../../utils/assets/perfil/${res.data.foto}`);
          // setImage(caminhoImagem);
          // setLoading(false)
        })
        .catch((err) => {
          console.log('erro:', err)
          // setLoading(false)
        })
    }
    requi()
  }, [id, token])

  // if (loading) {
  //   return <div>Loading...</div>; // Exibir um indicador de carregamento
  // }

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}>
          {clientes.map(cliente => (
            <div key={cliente.id} className={styles["imagem-container"]}>
              <ImagemUsuario
                foto={cliente.foto}
                idUsuario={cliente.id}
              />
            </div>
          ))}
        </div>
      </div>
      <NavBarBot />
    </>
  );
};

export default MotoristaConversa;
