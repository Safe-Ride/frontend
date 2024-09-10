import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import ImagemUsuario from "../../../components/ImagemUsuario/Imagem";
import Responsavel from "../../../components/motorista/conversas/Responsavel";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import styles from "./Conversa.module.css";

const MotoristaConversa = () => {
  const titulo = "conversas";
  const [clientes, setClientes] = useState([]);

  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const requi = async () => {
      api
        .get(`/usuarios/clientes-motorista/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setClientes(res.data);
        })
        .catch((err) => {
          console.log("erro:", err);
        });
    };
    requi();
  }, [id, token]);

  const responsavel = {
    id: 1,
    foto: "profile.png",
    nome: "teste",
    mensagem: "teste",
    horario: "2024/08/28 10:34",
    qtdMensagens: 2,
  };

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["trajeto"]}>
        {clientes.map((cliente) => (
          <div key={cliente.id} className={styles["imagem-container"]}>
            <ImagemUsuario foto={cliente.foto} idUsuario={cliente.id} />
          </div>
        ))}
      </div>
      <div className={styles["lista-conversas"]}>
        <div onClick={() => navigate(`/motorista/conversas/${responsavel.id}`)}>
          <Responsavel responsavel={responsavel}></Responsavel>
        </div>
      </div>
      <NavBarBot />
    </>
  );
};

export default MotoristaConversa;
