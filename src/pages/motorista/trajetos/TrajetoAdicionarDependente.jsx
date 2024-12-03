import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import CardDependenteAdicionar from "../../../components/motorista/Trajetos/CardDependenteAdicionar";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import styles from "./TrajetoAdicionarDependente.module.css";
const TrajetoAdicionarDependente = () => {
  const [dependentes, setDependentes] = useState([]);
  const [atualizarTela, setAtualizarTela] = useState(false);
  const params = useParams();
  const idTrajeto = params.id
  const idMotorista = sessionStorage.getItem("ID_USUARIO");
  const [trajeto, setTrajeto] = useState({})

  useEffect(() => {
    api.get(`/trajetos/${idTrajeto}`).then((res) => {
        const {data} = res
        setTrajeto(data)
        api.get(`/dependentes/motoristas/${idMotorista}/trajetos/${idTrajeto}/escolas/${data.escola.id}`).then((res) => {
            const { data } = res;
            setDependentes(data);
          });
    })
    console.log(trajeto)
    
    setAtualizarTela(false);
  }, [idTrajeto, atualizarTela]);

  return (
    <>
      <NavBarTop titulo={"TRAJETOS"} />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["title"]}>{`DEPENDENTES DISPONIVEIS`}</div>
          {(
              dependentes.map((dependente, index) => (
                <CardDependenteAdicionar
                  key={index}
                  dependente={dependente}
                  atualizarTela={setAtualizarTela}
                  trajeto={trajeto}
                />
              ))
            )}
        </div>
      </div>
      <NavBarBot />
    </>
  );
};

export default TrajetoAdicionarDependente;

