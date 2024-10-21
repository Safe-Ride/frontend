import { useNavigate } from "react-router-dom"
import OpcaoCliente from "../../../components/motorista/clientes/OpcaoCliente"
import Pesquisa from "../../../components/motorista/clientes/Pesquisa"
import NavBarBot from "../../../components/NavBar/NavBarBot"
import NavBarTop from "../../../components/NavBar/NavBarTop"
import { useEffect, useState } from "react"
import api from "../../../api"
import FotoPerfil from "../../../utils/functions/FotoPerfil"

const Solicitacoes = () => {
    const titulo = "Solicitações"
    const navigate = useNavigate();
    const [solicitacoes, setSolicitacoes] = useState([]);

    useEffect(() => {
        api.get(`/solicitacoes/motorista/${sessionStorage.ID_USUARIO}`)
            .then((res) => {
                const data = res.data;
                console.log(data);
                setSolicitacoes(data);
            })
            .catch((err) => console.error(err));
    }, [])

    return (
        <>
            <NavBarTop titulo={titulo} />
            <Pesquisa />
            {solicitacoes.map((solicitacao) => {
                if (solicitacao.status == "PENDENTE_MOTORISTA") {
                    return (
                        <div onClick={() => navigate(`/motorista/solicitacoes/${solicitacao.id}`)}>
                            <OpcaoCliente foto={FotoPerfil(solicitacao.responsavel.imagem.caminho)} nome={solicitacao.responsavel.nome} />
                        </div>
                    )
                }
            })}
            <NavBarBot />
        </>
    )
}

export default Solicitacoes