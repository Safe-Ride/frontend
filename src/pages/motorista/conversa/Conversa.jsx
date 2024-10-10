import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import Motorista from "../../../components/responsavel/conversas/Motorista";
import styles from "./Conversa.module.css";

const Conversas = () => {
  const titulo = "conversas";

  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const [motoristas, setMotoristas] = useState([]);

  const buscarMotoristas = () => {
    api
      .get(`/conversas/responsaveis-motorista/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setMotoristas(res.data);
      });
  };

  useEffect(() => {
    buscarMotoristas();
  }, []);

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["lista-conversas"]}>
        {motoristas &&
          motoristas.map((m) => {
            return (
              <div
                onClick={() => {
                  sessionStorage.setItem("conversaId", m.conversaId);
                  navigate(`/motorista/conversas/${m.id}`);
                }}
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

