import styles from "./PerfilDependente.module.css";
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import Box from "../Box/Box";
import CardInfo from "./CardInfo/CardInfo";
import icoProfile from "../../../../utils/assets/dependentes/profile.png";
import icoEscola from "../../../../utils/assets/dependentes/escola.png";
import icoVeiculo from "../../../../utils/assets/dependentes/veiculo.png";
import icoTelefone from "../../../../utils/assets/dependentes/telefone.png";
import icoCasa from "../../../../utils/assets/dependentes/casa.png";
import FotoPerfil from "../../../../utils/functions/FotoPerfil";

const PerfilDependente = ({}) => {
  const titulo = "MEUS DEPENDENTES";

  const dependente = {
    id: 2,
    nome: "teste2",
    dataNascimento: "01-01-2010",
    serie: "8º ano",
    escola: "Escola Teste",
  };

  const motorista = {
    nome: "Tio Julio",
    placa: "ABC1D23",
    telefone: "11 987654321",
  };

  const historico = [
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

  function returnIconeStatus(status) {
    switch (status) {
      case "Na Escola":
        return icoEscola;
      case "Indo Para Escola":
        return icoVeiculo;
      case "Em Casa":
        return icoCasa;
      case "Voltando Para Casa":
        return icoVeiculo;
    }
  }

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["wrapper"]}>
        {/* Card */}
        <Box>
          <div className={styles.dependente}>
            <img
              className={styles["foto"]}
              src={FotoPerfil(dependente.foto)}
              alt="foto dependente"
            />
            <div className={styles["info"]}>
              <h2 className={styles["nome"]}>{dependente.nome}</h2>
              <p className={styles["status"]}>{dependente.status}</p>
            </div>
          </div>
        </Box>
      </div>
      {/* Info Dep */}
      <div className={styles["wrapper"]}>
        <Box titulo={"Dados do Dependente"}>
          <CardInfo
            editar
            key={"nomeDependente"}
            icone={icoProfile}
            categoria={"Nome:"}
            info={dependente.nome}
          />
          <CardInfo
            editar
            key={"dataNascimento"}
            icone={icoProfile}
            categoria={"Data de Nascimento:"}
            info={dependente.dataNascimento}
          />
          <CardInfo
            editar
            key={"serie"}
            icone={icoProfile}
            categoria={"Série:"}
            info={dependente.serie}
          />
          <CardInfo
            editar
            key={"escola"}
            icone={icoEscola}
            categoria={"Escola:"}
            info={dependente.escola}
          />
        </Box>
      </div>

      <div className={styles["wrapper"]}>
        <Box
          titulo={"Dados do Motorista"}
          link={`/responsavel/dependentes/${dependente.id}/motorista`}
          linkDisplayName={"ver perfil"}
        >
          {/* Info Mot */}
          <CardInfo
            key={"nomeMotorista"}
            icone={icoProfile}
            categoria={"Nome:"}
            info={motorista.nome}
          />
          <CardInfo
            key={"placa"}
            icone={icoVeiculo}
            categoria={"Placa:"}
            info={motorista.placa}
          />
          <CardInfo
            key={"telefone"}
            icone={icoTelefone}
            categoria={"Telefone:"}
            info={motorista.telefone}
          />
        </Box>
      </div>
      <div className={styles["wrapper"]}>
        <Box titulo={"Histórico"}>
          {/* Hist */}
          {historico.map((h) => {
            var icone = returnIconeStatus(h.status);
            return (
              <CardInfo
                key={h.id}
                icone={icone}
                categoria={h.status}
                info={h.horario}
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
