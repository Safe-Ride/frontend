import { useNavigate } from "react-router-dom";
import CardDependente from "../../../components/responsavel/dependentes/CardDependente/CardDependente";
import { useEffect, useState } from "react";
import api from "../../../api";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import mapboxgl from "mapbox-gl";
import FotoPerfil from "../../../utils/functions/FotoPerfil";

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
  });

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