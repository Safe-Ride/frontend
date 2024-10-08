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

  useEffect(() => {
    buscarMotoristas();
  }, []);

  return (
    <>
      <NavBarTop titulo={"conversas"} />
      <div className={styles["lista-conversas"]}>
        {motoristas &&
          motoristas.map((m) => {
            return (
              <div
                onClick={() => {
                  sessionStorage.setItem("conversaId", m.conversaId);
                  navigate(`/responsavel/conversas/${m.id}`);
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

