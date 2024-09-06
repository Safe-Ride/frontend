import NavBarBot from "../../../../components/NavBar/NavBarBot"
import NavBarTop from "../../../../components/NavBar/NavBarTop"
import Box from "../../../../components/responsavel/dependentes/Box/Box"
import CardInfo from "../../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo"
import styles from "./Solicitacoes.module.css"
import icoContrato from "../../../../utils/assets/dependentes/contrato.png";
import icoPagamento from "../../../../utils/assets/dependentes/pagamento.png";

const Solicitacoes = () => {

    const titulo = "SOLICITAÇÕES"

    const solicitacao = {
        nomeMotorista: "Bruno Henrique",
        dataInicio: "10/01/2024",
        dataFim: "10/01/2025",
        valor: 1000.00,
        status: 0,
    };

    return (
        <div className={styles['container']}>
            <NavBarTop titulo={titulo} />
            <div className={styles["wrapper"]}>
                <Box>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: 100 + "%",
                            gap: 16 + "px",
                        }}
                    >
                        <img className={styles["foto-perfil"]} src="" alt="" />
                        <h2 className={styles["nome"]}>{solicitacao.nomeMotorista}</h2>
                        <p className={styles["dependente"]}>
                            Dependente: Lucas Neves
                        </p>

                        <CardInfo
                            icone={icoContrato}
                            categoria={"Vigência do contrato:"}
                            info={solicitacao.dataInicio}
                        />
                        <CardInfo
                            icone={icoPagamento}
                            categoria={"Valor:"}
                            info={"R$" + solicitacao.valor.toFixed(2)}
                        />

                        <div className={styles['botoes']}>
                            {solicitacao.status == 0 &&
                                <button className={styles['btn-aceitar']}>Aceitar</button>                        
                            }
                            <button className={styles['btn-recusar']}>Recusar</button>
                        </div>
                    </div>
                </Box>
            </div>
            <NavBarBot />
        </div>
    )
}

export default Solicitacoes