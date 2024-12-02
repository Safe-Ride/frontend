import styles from "./Solicitacoes.module.css"
import { useNavigate } from "react-router-dom";
import OpcaoCliente from "../../../components/motorista/clientes/OpcaoCliente";
import Pesquisa from "../../../components/motorista/clientes/Pesquisa";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import { useEffect, useState } from "react";
import api from "../../../api";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import { MdOutlineErrorOutline } from "react-icons/md";

const Solicitacoes = () => {
  const titulo = "Solicitações";
  const navigate = useNavigate();
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    api
      .get(`/solicitacoes/motorista/${sessionStorage.ID_USUARIO}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setSolicitacoes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  function exibirSolicitacoes() {
    let solicitacoesMotorista = [];

    solicitacoes.map((solicitacao) => {
      if (solicitacao.status == "PENDENTE_MOTORISTA") {
        solicitacoesMotorista.push(solicitacao);
      }
    });

    if (solicitacoesMotorista.length == 0) {
      return (
        <div className={styles['container-solicitacao']}>
          <div className={styles['content-solicitacao']}>
            <MdOutlineErrorOutline size={64} color='#f2c718' />
            <p>Você não possui solicitações</p>
          </div>
        </div>
      )
    } else {
      return solicitacoes.map(solicitacao => {
        return (
          <div
            key={"solicitacao-" + solicitacao.id}
            onClick={() => navigate(`/motorista/solicitacoes/${solicitacao.id}`)}
          >
            <OpcaoCliente
              foto={FotoPerfil(solicitacao.responsavel.imagem.caminho)}
              nome={solicitacao.responsavel.nome}
            />
          </div>
        );
      })
    }
  }

  return (
    <>
      <NavBarTop titulo={titulo} />
      <Pesquisa />
      {solicitacoes && exibirSolicitacoes()}
      <NavBarBot />
    </>
  );
};

export default Solicitacoes;
