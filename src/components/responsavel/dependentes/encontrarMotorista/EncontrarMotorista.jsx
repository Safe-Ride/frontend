import NavBarBot from "../../../NavBar/NavBarBot";
import NavBarTop from "../../../NavBar/NavBarTop";
import CardMotorista from "./CardMotorista/CardMotorista";
import styles from "./EncontrarMotorista.module.css";

const titulo = "ENCONTRAR MOTORISTA";

const EncontrarMotorista = ({ idDependente }) => {
  const listaMotorista = [
    { nome: "teste", id: 1, avaliacao: 4.3 },
    { nome: "teste2", id: 2, avaliacao: 4.5 },
  ];

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["motoristas"]}>
        {listaMotorista.map((motorista) => {
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
