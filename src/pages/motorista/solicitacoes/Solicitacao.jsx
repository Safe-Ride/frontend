import styles from "./Solicitacao.module.css"
import NavBarBot from "../../../components/NavBar/NavBarBot"
import NavBarTop from "../../../components/NavBar/NavBarTop"
import Box from "../../../components/responsavel/dependentes/Box/Box"
import CardInfo from "../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo"
import icoCasa from "../../../utils/assets/dependentes/casa.png"
import icoContrato from "../../../utils/assets/dependentes/contrato.png"
import { useState } from "react"

const Solicitacao = () => {
    const titulo = "Solicitações"
    const [inputValue, setInputValue] = useState();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        // <div className={styles['container']}>
        <>
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
                        <h2 className={styles["nome"]}>Bruno Henrique</h2>
                        <p className={styles["dependente"]}>
                            Dependente: Lucas Neves
                        </p>
                        <CardInfo
                            icone={icoCasa}
                            categoria={"Endereço:"}
                            info={"Rua Haddock Lobo, 595 São Paulo - SP"}
                        />
                        <div className={styles['card']}>
                            <div className={styles['icone']}>
                                <img className={styles['icone-img']} src={icoContrato} alt="ico" />
                            </div>
                            <div className={styles['content']}>
                                <span className={styles['categoria']}>Vigência do contrato: </span>
                                <div style={{ width: 100 + "%" }}>

                                    <div className={styles['ipt']}>
                                        <span>De:</span>
                                        <input
                                            placeholder="dd/MM/YYYY"
                                            className={styles['ipt-contrato']}
                                            onChange={handleInputChange}
                                            type="date"
                                        />
                                    </div>
                                    <div className={styles['ipt']}>
                                        <span>Até:</span>
                                        <input
                                            placeholder="dd/MM/YYYY"
                                            className={styles['ipt-contrato']}
                                            onChange={handleInputChange}
                                            type="date"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles['card']}>
                            <div className={styles['icone']}>
                                <img className={styles['icone-img']} src={icoContrato} alt="ico" />
                            </div>
                            <div className={styles['content']}>
                                <span className={styles['categoria']}>Valor:</span>
                                <div style={{ width: 100 + "%" }}>

                                    <div className={styles['campo-editar']}>
                                        <input
                                            id={styles['ipt-valor']}
                                            onChange={handleInputChange}
                                            type="number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['botoes']}>
                            <button className={styles['btn-aceitar']}>Enviar</button>
                            <button className={styles['btn-recusar']}>Recusar</button>
                        </div>
                    </div>
                </Box>
            </div>
            <NavBarBot />
        </>
        //</div>
    )
}

export default Solicitacao