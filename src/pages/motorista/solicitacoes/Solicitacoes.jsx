import { useNavigate } from "react-router-dom"
import OpcaoCliente from "../../../components/Clientes/OpcaoCliente"
import Pesquisa from "../../../components/Clientes/Pesquisa"
import NavBarBot from "../../../components/NavBar/NavBarBot"
import NavBarTop from "../../../components/NavBar/NavBarTop"

const Solicitacoes = () => {
    const titulo = "Solicitações"
    const navigate = useNavigate();
    
    return (
        <>
            <NavBarTop titulo={titulo}/>
            <Pesquisa />
            <div onClick={() => navigate(`/motorista/solicitacoes/1`)}>
                <OpcaoCliente nome={"TESTE"}/>
            </div>
            <div onClick={() => navigate(`/motorista/clientes/1`)}>
                <OpcaoCliente nome={"TESTE"}/>
            </div>
            <div onClick={() => navigate(`/motorista/clientes/1`)}>
                <OpcaoCliente nome={"TESTE"}/>
            </div>
            <NavBarBot />
        </>
    )
}

export default Solicitacoes