import { useNavigate } from "react-router-dom";
import CardDependente from "../../../components/responsavel/dependentes/CardDependente/CardDependente";
import { useEffect, useState } from "react";
import api from "../../../api";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";

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
            <div onClick={() => navigate(`/responsavel/tempo-real/${dependente.id}`)}>
              <CardDependente key={dependente.id} dependente={dependente} />
            </div>
          )
        })}
      </div>

      <NavBarBot />
    </>
  );
}

export default TempoReal