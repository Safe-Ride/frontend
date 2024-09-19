import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import Box from "../../../../components/responsavel/dependentes/Box/Box";
import CardInfo from "../../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo";
import styles from "./PerfilMotorista.module.css";
import icoProfile from "../../../../utils/assets/dependentes/profile.png";
import icoTelefone from "../../../../utils/assets/dependentes/telefone.png";
import FotoPerfil from "../../../../utils/functions/FotoPerfil";

const titulo = "PERFIL MOTORISTA";

const motorista = {
  nome: "Bruno Henrique",
  veiculo: {
    modelo: "Mercedes-Benz 413 Van 19+1",
    placa: "ABC1D23",
    qtdLugares: 10,
  },
  telefone: "11 987654321",
  idade: 40,
  avaliacao: 4.5,
  experiencia: 4,
};

const PerfilMotorista = ({ encontrarMotorista = false }) => {
  return (
    <>
      <div className={styles["container"]}>
        <NavBarTop titulo={titulo} />

        <div className={styles["wrapper"]}>
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16 + "px",
              }}
            >
              <img className={styles["foto-perfil"]} src={FotoPerfil()} alt="" />
              <h2 className={styles["nome"]}>{motorista.nome}</h2>
              <p className={styles["veiculo-info"]}>
                {motorista.veiculo.modelo} · {motorista.veiculo.placa}
              </p>
              <div className={styles["container-info"]}>
                <div className={styles["info"]}>
                  <span className={styles["info-nro"]}>
                    {motorista.veiculo.qtdLugares}
                  </span>
                  <span className={styles["info-sub"]}>Lugares Disponíveis</span>
                </div>

                <div className={styles["info"]}>
                  <span className={styles["info-nro"]}>
                    {motorista.avaliacao} &#9733;
                  </span>
                  <span className={styles["info-sub"]}>Avaliação</span>
                </div>

                <div className={styles["info"]}>
                  <span className={styles["info-nro"]}>
                    {motorista.experiencia} Anos
                  </span>
                  <span className={styles["info-sub"]}>Experiência</span>
                </div>
              </div>

              <CardInfo
                icone={icoTelefone}
                categoria={"Telefone:"}
                info={motorista.telefone}
              />
              <CardInfo
                icone={icoProfile}
                categoria={"Idade:"}
                info={motorista.idade}
              />

              <button
                className={styles['botao']}
                id={styles['enviar']}
                onClick={() => {
                }}>Enviar Solicitação</button>
            </div>
          </Box>
        </div>
        <NavBarBot />
      </div>
    </>
  );
};

export default PerfilMotorista;
