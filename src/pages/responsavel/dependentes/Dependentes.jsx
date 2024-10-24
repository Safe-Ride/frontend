import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import CardDependente from "../../../components/responsavel/dependentes/CardDependente/CardDependente";
import styles from "./Dependentes.module.css";

const titulo = "dependentes";

// const listaDependentes = [
//   {nome: "teste", id: 1, status: "EM CASA",},
//   {nome: "teste2", id: 2, status: "NA ESCOLA",}
// ];

const Dependentes = () => {
  const [listaDependentes, setListaDependentes] = useState([]);
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    api
      .get(`/usuarios/dependentes-responsavel/${sessionStorage.ID_USUARIO}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setListaDependentes(data);
        console.log(listaDependentes);
      });

    api
      .get(`/solicitacoes/responsavel/${sessionStorage.ID_USUARIO}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setSolicitacoes(data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles.dependentes}>
        {listaDependentes.map((dependente) => {
          if (dependente.motorista != null) {
            return (
              <CardDependente
                key={dependente.id}
                dependente={dependente}
                navigateTo={`/responsavel/dependentes/${dependente.id}`}
              />
            );
          } else {
            let retorno = (
              <CardDependente
                key={dependente.id}
                dependente={dependente}
                navigateTo={`/responsavel/dependentes/${dependente.id}/encontrar-motorista`}
              />
            );
            solicitacoes.forEach((solicitacao) => {
              if (
                solicitacao.dependente.id == dependente.id &&
                (solicitacao.status == "PENDENTE_MOTORISTA" ||
                  solicitacao.status == "PENDENTE_RESPONSAVEL")
              ) {
                retorno = (
                  <CardDependente
                    key={dependente.id}
                    dependente={dependente}
                    navigateTo={`/responsavel/dependentes/${solicitacao.dependente.id}/motorista/${solicitacao.motorista.id}/solicitacao`}
                  />
                );
              }
            });

            return retorno;
          }
        })}
        <div className={styles["adicionar"]}>
          <div onClick={() => navigate("/responsavel/dependentes/cadastrar")}>
            <span>+</span>
            <span>Adicionar Dependente</span>
          </div>
        </div>
      </div>

      <NavBarBot />
    </>
  );
};

export default Dependentes;
