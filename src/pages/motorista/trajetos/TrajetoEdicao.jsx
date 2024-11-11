import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import CardDependenteEdicao from "../../../components/motorista/Trajetos/CardDependenteEdicao";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import styles from "./TrajetoEdicao.module.css";

const TrajetoEdicao = () => {
  const [trajeto, setTrajeto] = useState({});
  const params = useParams();
  const idTrajeto = params["id"];
  

  useEffect(() => {
    api.get(`/trajetos/${idTrajeto}`).then((res) => {
      const { data } = res;
      setTrajeto(data);
    });
  }, [idTrajeto]);

  return (
    <>
      <NavBarTop titulo={"TRAJETOS"} />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["title"]}>
            {trajeto && `TRAJETO SELECIONADO: ${trajeto?.escola?.nome}`}
          </div>
          {trajeto !== null && trajeto?.rotas?.length > 0 ? (
            trajeto.rotas.map((rota, index) => (
              <CardDependenteEdicao
                key={index}
                rotaId={rota.id}
                dependente={rota.dependente}
                enderecoId={rota.endereco.id}
              />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <NavBarBot />
    </>
  );
};

export default TrajetoEdicao;

