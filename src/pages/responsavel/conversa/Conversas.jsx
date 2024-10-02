import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import Motorista from "../../../components/responsavel/conversas/Motorista";
import styles from "./Conversas.module.css";

const Conversas = () => {
  const navigate = useNavigate();
  const [motoristas, setMotoristas] = useState([]);

  const buscarMotoristas = () => {
    api
      .get(`/conversas/motoristas-responsavel/${sessionStorage.ID_USUARIO}`, {
        headers: { Authorization: `Bearer ${sessionStorage.token}` }
      })
      .then((res) => {
        setMotoristas(res.data);
      });
  };

  const motorista = {
    id: 1,
    foto: "profile.png",
    nome: "teste",
    mensagem: "teste",
    horario: "2024/08/28 10:34",
    qtdMensagens: 2
  };

  useEffect(() => {
    buscarMotoristas();
  });

  return (
    <>
      <NavBarTop titulo={"conversas"} />
      <div className={styles["lista-conversas"]}>
        <div onClick={() => navigate(`/responsavel/conversas/${motorista.id}`)}>
          <Motorista motorista={motorista}></Motorista>
          <Motorista motorista={motorista}></Motorista>
        </div>
        {motoristas &&
          motoristas.map((m) => {
            return (
              <div
                onClick={() =>
                  navigate(`/responsavel/conversas/${m.id}`)
                }
              >
                <Motorista motorista={m}></Motorista>
              </div>
            );
          })}
      </div>
      <NavBarBot />
    </>
  );
};

export default Conversas;

