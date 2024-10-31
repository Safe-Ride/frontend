import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import Box from "../../../../components/responsavel/dependentes/Box/Box";
import CardInfo from "../../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo";
import styles from "./PerfilMotorista.module.css";
import icoProfile from "../../../../utils/assets/dependentes/profile.png";
import icoTelefone from "../../../../utils/assets/dependentes/telefone.png";
import icoVeiculo from "../../../../utils/assets/dependentes/veiculo.png";
import icoEmail from "../../../../utils/assets/dependentes/email.png";
import FotoPerfil from "../../../../utils/functions/FotoPerfil";
import Imagem from "../../../../utils/assets/perfil/usuario.png"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../api";
import FormatarData from "../../../../utils/functions/FormatarData";
import FormatarTelefone from "../../../../utils/functions/FormatarTelefone";
import FormatarCnpj from "../../../../utils/functions/FormatarCnpj";
import Imagem from "../../../../utils/assets/dependentes/profile.png";

const titulo = "PERFIL MOTORISTA";

const PerfilMotorista = ({ encontrarMotorista = false }) => {

	const navigate = useNavigate();
	const { idDependente } = useParams("idDependente");
	var { idMotorista } = useParams("idMotorista");

	const [motorista, setMotorista] = useState({ imagem: { caminho: '' } });

	const handleImageError = (e) => {
		e.target.src = Imagem;
	}

	useEffect(() => {
		api.get(`/usuarios/perfil-motorista/${idMotorista}`)
			.then((res) => {
				const data = res.data;
				setMotorista(data);
				console.log(motorista)
			})
			.catch((err) => {
				console.error(err);
			});
	}, [idDependente])

	return (
		<>
			<NavBarTop titulo={titulo} />

			<div className={styles["wrapper"]}>
				<Box>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 16 + "px",
							width: 100 + "%"
						}}
					>
						<img
							className={styles["foto-perfil"]}
							src={FotoPerfil(motorista.imagem.caminho)}
							alt="Foto de Perfil do Motorista"
							onError={handleImageError}
						/>
						<h2 className={styles["nome"]}>{motorista.nome}</h2>

						{/* <div className={styles["container-info"]}>
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
						</div> */}

						<CardInfo
							icone={icoTelefone}
							categoria={"Telefone:"}
							info={FormatarTelefone(motorista.telefone)}
						/>

						<CardInfo
							icone={icoEmail}
							categoria={"Email:"}
							info={motorista.email}
						/>

						<CardInfo
							icone={icoProfile}
							categoria={"Data de Nascimento:"}
							info={FormatarData(motorista.dataNascimento)}
						/>

						<CardInfo
							icone={icoVeiculo}
							categoria={"Placa:"}
							info={motorista.placa}
						/>

						<CardInfo
							icone={icoProfile}
							categoria={"CNPJ:"}
							info={FormatarCnpj(motorista.cnpj)}
						/>

						{encontrarMotorista && <button
							className={styles['botao']}
							id={styles['enviar']}
							onClick={() => navigate(`/responsavel/dependentes/${idDependente}/motorista/${idMotorista}/solicitacao`)}
						>Enviar Solicitação</button>
						}
					</div>
				</Box>
			</div>
			<NavBarBot />
		</>
	);
};

export default PerfilMotorista;
