import { useParams } from "react-router-dom";
import api from "../../../../api";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import CardMotorista from "../../../../components/responsavel/dependentes/encontrarMotorista/CardMotorista/CardMotorista";
import styles from "./EncontrarMotorista.module.css";
import { useState, useEffect } from "react"; 

const titulo = "ENCONTRAR MOTORISTA";

const EncontrarMotorista = () => {
  
  const { idDependente } = useParams();
  const [motoristas, setMotoristas] = useState([]);

  useEffect(() => {
    api.get(`/usuarios/motorista/escola/${idDependente}`)
      .then((res) => {
        const data = res.data;
        console.info(data);
        setMotoristas(data);
      })
      .catch(err => console.error(err));

  }, [idDependente]);

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["motoristas"]}>
        {motoristas.map((motorista) => {
          return (
            <CardMotorista
              idDependente={idDependente}
              key={motorista.id}
              motorista={motorista}
            />
          );
        })}
      </div>
      <NavBarBot />
    </>
  );
};

export default EncontrarMotorista;
