import React, { useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import styles from "./Conversas.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Motorista from "../../../components/responsavel/conversas/Motorista";

const Conversas = () => {
  const titulo = "conversas";
  const [motoristas, setMotoristas] = useState([]);

  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const requi = async () => {
      api
        .get(`/usuarios/motoristas-cliente/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setMotoristas(res.data);
        })
        .catch((err) => {
          console.log("erro:", err);
        });
    };
    requi();
  }, [id, token]);

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["lista-conversas"]}>
        {motoristas.map((motorista) => {
          return (
            <div
              onClick={() => navigate(`/responsavel/conversas/${motorista.id}`)}
            >
              <Motorista motorista={motorista} />
            </div>
          );
        })}
      </div>
      <NavBarBot />
    </>
  );
};

export default Conversas;
