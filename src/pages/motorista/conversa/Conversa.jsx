import React, { useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import styles from "./Conversa.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import Responsavel from "../../../components/motorista/conversas/Responsavel";

const Conversas = () => {
  const titulo = "conversas";
  const [responsaveis, setResponsaveis] = useState([]);

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
          setResponsaveis(res.data);
          console.log(res);
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
        {responsaveis.map((responsavel) => {
          return (
            <>
              <div
                onClick={() =>
                  navigate(`/motorista/conversas/${responsavel.id}`)
                }
              >
                <Responsavel responsavel={responsavel}></Responsavel>{" "}
              </div>
            </>
          );
        })}
      </div>
      <NavBarBot />
    </>
  );
};

export default Conversas;
