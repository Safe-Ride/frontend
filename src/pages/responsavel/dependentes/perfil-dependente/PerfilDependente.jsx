import styles from "./PerfilDependente.module.css";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import Box from "../../../../components/responsavel/dependentes/Box/Box";
import CardInfo from "../../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo";
import icoProfile from "../../../../utils/assets/dependentes/profile.png";
import icoEscola from "../../../../utils/assets/dependentes/escola.png";
import icoVeiculo from "../../../../utils/assets/dependentes/veiculo.png";
import icoTelefone from "../../../../utils/assets/dependentes/telefone.png";
import icoCasa from "../../../../utils/assets/dependentes/casa.png";
import Imagem from "../../../../utils/assets/perfil/usuario.png";
import FotoPerfil from "../../../../utils/functions/FotoPerfil";
import api from "../../../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PerfilDependente = () => {
  const titulo = "MEUS DEPENDENTES";
  const { id } = useParams();
  const [dependenteInfo, setDependenteInfo] = useState({});
  const opcoesSerie = [
    {
      id: 0,
      value: "",
    },
    {
      id: 1,
      value: "1° Ano Fundamental",
    },
    {
      id: 2,
      value: "2° Ano Fundamental",
    },
    {
      id: 3,
      value: "3° Ano Fundamental",
    },
    {
      id: 4,
      value: "4° Ano Fundamental",
    },
    {
      id: 5,
      value: "5° Ano Fundamental",
    },
    {
      id: 6,
      value: "6° Ano Fundamental",
    },
    {
      id: 7,
      value: "7° Ano Fundamental",
    },
    {
      id: 8,
      value: "8° Ano Fundamental",
    },
    {
      id: 9,
      value: "9° Ano Fundamental",
    },
    {
      id: 10,
      value: "1ª série",
    },
    {
      id: 11,
      value: "2ª série",
    },
    {
      id: 12,
      value: "3ª série",
    },
  ];
  const [opcoesEscolas, setOpcoesEscolas] = useState([]);
  const [historico, setHistorico] = useState([]);

  function getEscolas() {
    api
      .get(`/escolas`)
      .then((res) => {
        const data = res.data;
        const nomesEscolas = data.map((e) => ({ id: e.id, value: e.nome }));
        console.log(nomesEscolas); // Verifica o resultado
        setOpcoesEscolas(nomesEscolas); // Agora setOpcoesEscolas terá apenas os nomes
      })
      .catch((err) => console.error("erro escola: " + err));
  }

  function getHistorico() {
    api
      .get(`/usuarios/status-dependentes/dependente/${id}`, {
        headers: { Authorization: `Bearer ${sessionStorage.token}` }
      })
      .then((res) => {
        setHistorico(res.data);
        console.log("Historico: ", res.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar histórico:", error);
      });
  };

  useEffect(() => {
    api
      .get(`/dependentes/${id}/perfil`)
      .then((res) => {
        const data = res.data;
        console.info(data);
        setDependenteInfo(data);
      })
      .catch((err) => console.error(err));

    getEscolas();
    getHistorico();
  }, [id]);

  const historico1 = [
    {
      id: 1,
      status: "Na Escola",
      horario: "12:52",
    },
    {
      id: 2,
      status: "Indo Para Escola",
      horario: "12:29",
    },
    {
      id: 3,
      status: "Em Casa",
      horario: "Ontem, 18:16",
    },
    {
      id: 4,
      status: "Voltando Para Casa",
      horario: "Ontem, 17:43",
    },
  ];

  function formatarHistorico(historico) {
    switch (historico.mensagemStatus) {
      case "Na escola":
        return (
          <CardInfo
            key={`historico-${historico.historicoId}-${historico.horarioInicio}-${historico.horarioFim}-${historico.mensagemStatus}`}
            icone={icoEscola}
            categoria={historico.mensagemStatus}
            info={historico.horarioFim}
          />
        );
      case "Indo para escola":
        return (
          <CardInfo
            key={`historico-${historico.historicoId}-${historico.horarioInicio}-${historico.horarioFim}-${historico.mensagemStatus}`}
            icone={icoVeiculo}
            categoria={historico.mensagemStatus}
            info={historico.horarioInicio}
          />
        );
      case "Em casa":
        return (
          <CardInfo
            key={`historico-${historico.historicoId}-${historico.horarioInicio}-${historico.horarioFim}-${historico.mensagemStatus}`}
            icone={icoCasa}
            categoria={historico.mensagemStatus}
            info={historico.horarioFim}
          />
        );
      case "Voltando para casa":
        return (
          <CardInfo
            key={`historico-${historico.historicoId}-${historico.horarioInicio}-${historico.horarioFim}-${historico.mensagemStatus}`}
            icone={icoVeiculo}
            categoria={historico.mensagemStatus}
            info={historico.horarioInicio}
          />
        );
    }
  }

  const handleImageError = (e) => {
    e.target.src = Imagem;
  };

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["wrapper"]}>
        {/* Card */}
        <Box>
          <div className={styles.dependente}>
            <img
              className={styles["foto"]}
              src={FotoPerfil(dependenteInfo.foto)}
              alt="foto dependente"
              onError={handleImageError}
            />
            <div className={styles["info"]}>
              <h2 className={styles["nome"]}>{dependenteInfo.nome}</h2>
              {/* <p className={styles["status"]}>{dependente.status}</p> */}
            </div>
          </div>
        </Box>
      </div>
      {/* Info Dep */}
      <div className={styles["wrapper"]}>
        <Box titulo={"Dados do Dependente"}>
          <CardInfo
            idDependente={id}
            editar
            key={"nomeDependente"}
            icone={icoProfile}
            categoria={"Nome:"}
            info={dependenteInfo.nome}
          />
          <CardInfo
            idDependente={id}
            editar
            key={"dataNascimento"}
            icone={icoProfile}
            categoria={"Data de Nascimento:"}
            info={dependenteInfo.dataNascimento}
            tipo="date"
          />
          <CardInfo
            idDependente={id}
            editar
            key={"serie"}
            icone={icoProfile}
            categoria={"Série:"}
            info={dependenteInfo.serie}
            opcoes={opcoesSerie}
          />
          <CardInfo
            idDependente={id}
            editar
            key={"escola"}
            icone={icoEscola}
            categoria={"Escola:"}
            info={dependenteInfo.nomeEscola}
            opcoes={opcoesEscolas}
          />
        </Box>
      </div>

      <div className={styles["wrapper"]}>
        <Box
          titulo={"Dados do Motorista"}
          link={`/responsavel/dependentes/${id}/motorista/${dependenteInfo.idMotorista}`}
          linkDisplayName={"ver perfil"}
        >
          {/* Info Mot */}
          <CardInfo
            key={"nomeMotorista"}
            icone={icoProfile}
            categoria={"Nome:"}
            info={dependenteInfo.nomeMotorista}
          />
          <CardInfo
            key={"placa"}
            icone={icoVeiculo}
            categoria={"Placa:"}
            info={dependenteInfo.placaTransporte}
          />
          <CardInfo
            key={"telefone"}
            icone={icoTelefone}
            categoria={"Telefone:"}
            info={dependenteInfo.telefoneMotorista}
          />
        </Box>
      </div>
      <div className={styles["wrapper"]}>
        <Box titulo={"Histórico"}>
          {/* Hist */}
          {historico && historico.map(h => {
            return formatarHistorico(h);
          })}
        </Box>
      </div>
      <NavBarBot />
    </>
  );
};

export default PerfilDependente;
