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
import icoStart from "../../../../utils/assets/dependentes/start.png";
import Imagem from "../../../../utils/assets/perfil/usuario.png";
import FotoPerfil from "../../../../utils/functions/FotoPerfil";
import api from "../../../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormatarData from "../../../../utils/functions/FormatarData";

const PerfilDependente = () => {
  const titulo = "MEUS DEPENDENTES";
  const { id } = useParams();
  const [dependenteInfo, setDependenteInfo] = useState({});
  const [historico, setHistorico] = useState([]);
  const idUsuario = sessionStorage.getItem("ID_USUARIO");

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
      value: "1° Ano Ensino Médio",
    },
    {
      id: 11,
      value: "2° Ano Ensino Médio",
    },
    {
      id: 12,
      value: "3° Ano Ensino Médio",
    },
  ];
  const [opcoesEscolas, setOpcoesEscolas] = useState([]);

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

  useEffect(() => {
    api
      .get(`/dependentes/${id}/perfil`)
      .then((res) => {
        const data = res.data;
        console.info(data);
        setDependenteInfo(data);
        getHistorico(data.idMotorista);
      })
      .catch((err) => console.error(err));

    getEscolas();
  }, [id]);

  function getHistorico(idMotorista) {
    api
      .get(`/conversas?responsavelId=${idUsuario}&motoristaId=${idMotorista}`, {
        headers: { Authorization: `Bearer ${sessionStorage.token}` },
      })
      .then((res) => {
        const data = res.data;
        console.info(data);
        setHistorico(data.mensagens);
      })
      .catch((err) => console.error(err));
  }

  function returnIconeStatus(status) {
    switch (status) {
      case "Na escola":
        return icoEscola;
      case "Indo para escola":
        return icoVeiculo;
      case "Em casa":
        return icoCasa;
      case "Voltando para casa":
        return icoVeiculo;
      case "":
        return icoStart;
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
          {Array.isArray(historico) &&
            historico.map((h) => {
              const icone = returnIconeStatus(h.status);
              return (
                <CardInfo
                  key={h.id}
                  icone={icone}
                  categoria={h.status}
                  info={FormatarData(h.horario)}
                />
              );
            })}
        </Box>
      </div>
      <NavBarBot />
    </>
  );
};

export default PerfilDependente;
