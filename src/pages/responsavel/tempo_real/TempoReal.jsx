import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import CardDependente from "../../../components/responsavel/dependentes/CardDependente/CardDependente";

const titulo = "tempo real";

const TempoReal = () => {

  const titulo = "Tempo Real"
  const [listaDependentes, setListaDependentes] = useState([]);

  useEffect(() => {
    api
      .get(`/usuarios/dependentes-responsavel/${sessionStorage.ID_USUARIO}`)
      .then((res) => {
        const data = res.data;
        setListaDependentes(data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <NavBarTop titulo={titulo} />

      <div>
        {listaDependentes.map((dependente) => {
          return (
            <div
              key={dependente.id}
              onClick={() => {
                // Armazena o ID no sessionStorage
                sessionStorage.setItem("DEPENDENTE_ID", dependente.id);
                sessionStorage.setItem("MOTORISTA_ID", dependente.motorista.id);
                // Redireciona para a página
                navigate(`/responsavel/tempo-real/${dependente.id}`);
              }}
            >
              <CardDependente dependente={dependente} />
            </div>
          );
        })}
      </div>

      <NavBarBot />
    </>
  );
}

export default TempoReal