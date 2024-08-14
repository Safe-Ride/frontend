import styles from "./PerfilDependente.module.css"
import NavBarBot from "../../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../../components/NavBar/NavBarTop";
import Box from "../Box/Box";
import CardInfo from "./CardInfo/CardInfo";

const PerfilDependente = ({ }) => {

    const titulo = "MEUS DEPENDENTES"

    const dependente = {
        id: 2,
        nome: "teste2",
        dataNascimento: "01-01-2010",
        serie: "8º ano",
        escola: "Escola Teste"
    };

    const motorista = {
        nome: "Tio Julio",
        placa: "ABC1D23",
        telefone: "11 987654321"
    }

    const historico = [{
        status: "Na Escola",
        horario: "12:52"
    }, {
        status: "Indo Para Escola",
        horario: "12:29"
    }, {
        status: "Em Casa",
        horario: "Ontem, 18:16"
    }, {
        status: "Voltando Para Casa",
        horario: "Ontem, 17:43"
    }]

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

                    <CardInfo icone={""} categoria={"Nome:"} info={ dependente.nome } />
                    <CardInfo icone={""} categoria={"Data de Nascimento:"} info={ dependente.dataNascimento } />
                    <CardInfo icone={""} categoria={"Série:"} info={ dependente.serie } />
                    <CardInfo icone={""} categoria={"Escola:"} info={ dependente.escola } />

                </Box>
            </div>

            <div className={styles['wrapper']}>
                <Box titulo={"Dados do Motorista"} link={"/teste"} linkDisplayName={"ver perfil"} >
                    {/* Info Mot */}
                    <CardInfo icone={""} categoria={"Nome:"} info={ motorista.nome } />
                    <CardInfo icone={""} categoria={"Placa:"} info={ motorista.placa } />
                    <CardInfo icone={""} categoria={"Placa:"} info={ motorista.telefone } />
                </Box>
            </div>
            <div className={styles['wrapper']}>
                <Box titulo={"Histórico"}>
                    {/* Hist */}
                    {
                        historico.map(v => {
                            return <CardInfo icone={""} categoria={ v.status } info={ v.horario } />
                        }

                        )
                    }
                </Box>

            </div>
            <NavBarBot />
        </>

    )
}

export default PerfilDependente