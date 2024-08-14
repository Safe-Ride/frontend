import NavBarBot from "../../../../components/NavBar/NavBarBot"
import NavBarTop from "../../../../components/NavBar/NavBarTop"
import Box from "../Box/Box"
import CardInfo from "../perfilDependente/CardInfo/CardInfo"
import styles from "./PerfilMotorista.module.css"

const titulo = "PERFIL MOTORISTA"

const motorista = {
    nome: "Bruno Henrique",
    veiculo: {
        modelo: "Mercedes-Benz 413 Van 19+1",
        placa: "ABC1D23",
        qtdLugares: 10
    },
    telefone: "11 987654321",
    idade: 40,
    avaliacao: 4.5,
    experiencia: 4
}

const PerfilMotorista = ({ encontrarMotorista = false }) => {
    return (
        <>
            <div className={styles['container']}>
                <NavBarTop titulo={titulo} />



                <div className={styles['wrapper']}>
                    <Box>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 16 + "px"}} >

                        <img className={styles['foto-perfil']} src="" alt="" />
                        <h2 className={styles['nome']}>{motorista.nome}</h2>
                        <p className={styles['veiculo-info']}>{motorista.veiculo.modelo} · {motorista.veiculo.placa}</p>
                        <div className={styles['container-info']}>
                            <div className={styles['info']}>
                                <p className={styles['info-nro']}>{motorista.veiculo.qtdLugares}</p>
                                <p className={styles['info-sub']}>Lugares Disponíveis</p>
                            </div>

                            <div className={styles['info']}>
                                <p className={styles['info-nro']}>{motorista.avaliacao} &#9733;</p>
                                <p className={styles['info-sub']}>Avaliação</p>
                            </div>

                            <div className={styles['info']}>
                                <p className={styles['info-nro']}>{motorista.experiencia} Anos</p>
                                <p className={styles['info-sub']}>Experiência</p>
                            </div>
                        </div>

                        <CardInfo icone={""} categoria={"Telefone:"} info={motorista.telefone} />
                        <CardInfo icone={""} categoria={"Idade:"} info={motorista.idade} />

                        {encontrarMotorista && <button>aaa</button>}
                        </div>

                    </Box>
                </div>
                <NavBarBot />
            </div>

        </>
    )
}

export default PerfilMotorista