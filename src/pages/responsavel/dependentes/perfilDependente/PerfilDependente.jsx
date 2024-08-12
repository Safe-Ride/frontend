import styles from "./PerfilDependente.module.css"
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import Box from "./Box/Box";
import CardInfo from "./CardInfo/CardInfo";

const PerfilDependente = ({ }) => {

    const titulo = "MEUS DEPENDENTES"

    const dependente = {
        id: 2,
        nome: "teste2",

    };

    return (

        <>
            <NavBarTop titulo={titulo} />
            <div className={styles['wrapper']}>
                {/* Card */}
                <Box>

                    <div className={styles.dependente}>
                        <img className={styles['foto']} src={dependente.foto} alt="foto dependente" />
                        <div className={styles['info']}>
                            <h2 className={styles['nome']}>{dependente.nome}</h2>
                            <p className={styles['status']}>{dependente.status}</p>
                        </div>
                    </div>
                </Box>

            </div>
            {/* Info Dep */}
            <div className={styles['wrapper']}>

                <Box titulo={"Dados do Dependente"} link={`/responsavel/dependente/${dependente.id}/editar`} linkDisplayName={"editar"}>

                    <CardInfo icone={""} categoria={"Nome:"} info={"TESTE"} />
                    <div>
                        <img src="" alt="ico" />
                        <div>
                            <p>data nascimento:</p>
                            <p>teste</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="ico" />
                        <div>
                            <p>nome:</p>
                            <p>serie</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="ico" />
                        <div>
                            <p>nome:</p>
                            <p>escola</p>
                        </div>
                    </div>

                </Box>
            </div>

            <div className={styles['wrapper']}>
                <Box titulo={"Dados do Motorista"} link={"/teste"} linkDisplayName={"ver perfil"} >
                    {/* Info Mot */}
                    <img src="" alt="ico" /><p>nome</p>
                    <img src="" alt="ico" /><p>placa</p>
                    <img src="" alt="ico" /><p>telefone</p>
                </Box>
            </div>
            <div className={styles['wrapper']}>
                <Box titulo={"Histórico"}>
                    {/* Hist */}
                    <img src="" alt="ico" /><p>nome</p>
                    <img src="" alt="ico" /><p>placa</p>
                    <img src="" alt="ico" /><p>telefone</p>
                </Box>

            </div>
            <NavBarBot />
        </>

    )
}

export default PerfilDependente