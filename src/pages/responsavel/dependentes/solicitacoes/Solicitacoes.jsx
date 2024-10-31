import NavBarBot from "../../../../components/NavBar/NavBarBot"
import NavBarTop from "../../../../components/NavBar/NavBarTop"
import Box from "../../../../components/responsavel/dependentes/Box/Box"
import FotoPerfil from "../../../../utils/functions/FotoPerfil"
import CardInfo from "../../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo"
import styles from "./Solicitacoes.module.css"
import icoContrato from "../../../../utils/assets/dependentes/contrato.png";
import icoCasa from "../../../../utils/assets/dependentes/casa.png";
import icoRua from "../../../../utils/assets/dependentes/road.png";
import icoCalendario from "../../../../utils/assets/dependentes/calendario.png";
import icoRelogio from "../../../../utils/assets/dependentes/relogio.png";
import icoDinheiro from "../../../../utils/assets/dependentes/dinheiro.png";
import icoEscola from "../../../../utils/assets/dependentes/escola.png";
import Imagem from "../../../../utils/assets/perfil/usuario.png"
import { useEffect, useState } from "react"
import api from "../../../../api"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../../../../components/Loader/Loader"
import FormatarData from "../../../../utils/functions/FormatarData"
import ModalConfirmar from "../../../../components/ModalConfirmar/ModalConfirmar"

const Solicitacoes = () => {

    const titulo = "SOLICITAÇÕES"
    const navigate = useNavigate();
    const { idDependente } = useParams("idDependente");
    const { idMotorista } = useParams("idMotorista");
    const [dependente, setDependente] = useState(null);
    const [motorista, setMotorista] = useState(null);
    const [enderecos, setEnderecos] = useState(null);
    const [loading, setLoading] =
        useState({
            "dependente": true,
            "motorista": true,
            "enderecos": true,
            "solicitacao": true
        });
    const [solicitacao, setSolicitacao] = useState({ status: null });
    const [showModal, setShowModal] = useState(false);
    const [respostaModal, setRespostaModal] = useState(null);

    const handleConfirm = (response) => {
        setRespostaModal(response);
    };

    const handleImageError = (e) => {
        e.target.src = Imagem;
    }

    // Solicitação
    useEffect(() => {
        api
            .get(`/solicitacoes/dependente/${idDependente}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                }
            })
            .then((res) => {
                const data = res.data;
                // console.log(data);
                setSolicitacao(data);
            })
            .catch((err) => console.error("Solicitação: ", err))
            .finally(() => setLoading((prev) => ({ ...prev, "solicitacao": false })));
    }, []);

    // Motorista
    useEffect(() => {
        async function getData() {
            await api
                .get(`/usuarios/${idMotorista}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.token}`,
                    }
                })
                .then((res) => {
                    const data = res.data;
                    // console.log(data);
                    setMotorista(data);
                })
                .catch((err) => console.error("Motorista: ", err))
                .finally(() => setLoading((prev) => ({ ...prev, "motorista": false })));
        }
        getData();
    }, [idMotorista]);

    // Dependente
    useEffect(() => {
        async function getData() {
            await api
                .get(`/dependentes/${idDependente}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.token}`,
                    }
                })
                .then((res) => {
                    const data = res.data;
                    // console.log(data);
                    setDependente(data);
                })
                .catch((err) => console.error("Dependente: ", err))
                .finally(() => setLoading((prev) => ({ ...prev, "dependente": false })));
        }
        getData();
    }, [idDependente])

    // Endereços
    useEffect(() => {
        async function getData() {
            await api
                .get(`/enderecos/usuario/${sessionStorage.ID_USUARIO}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.token}`,
                    }
                })
                .then((res) => {
                    const data = res.data;
                    // console.log(data);
                    setEnderecos(data);
                })
                .catch((err) => console.error("Endereços: ", err))
                .finally(() => setLoading((prev) => ({ ...prev, "enderecos": false })));
        }
        getData();
    }, [])

    function aceitarSolicitacao() {
        api.patch(`/solicitacoes/aprovar/${solicitacao.id}`, {}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                const data = res.data;
                // console.log(data)
                setSolicitacao(data);
            })
            .catch((err) => console.error(err))
            .finally(() => {
                if (solicitacao?.id) {
                    navigate(`/responsavel/dependentes`);
                }
            });
    }

    function cancelarSolicitacao() {
        api.patch(`/solicitacoes/${solicitacao.id}`, {}, {
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
            }
        })
            .then((res) => {
                const data = res.data;
                // console.log(data)
                setSolicitacao(data);
                // console.log(solicitacao)
            })
            .catch((err) => console.error(err))
            .finally(() => {
                if (solicitacao?.id) {
                    navigate(`/responsavel/dependentes`);
                }
            });
    }

    useEffect(() => {
        if (respostaModal) {
            setSolicitacao(cancelarSolicitacao)
        }
    }, [respostaModal])

    function enviarSolicitacao() {

        const novaSolicitacao = {
            responsavelId: Number(sessionStorage.ID_USUARIO),
            motoristaId: Number(idMotorista),
            dependenteId: Number(idDependente),
            periodo: enviarPeriodo(),
            tipo: enviarTipoTrajetoNum(),
            diaSemana: enviarDiaSemana().trim(),
            enderecoId: Number(document.getElementById("select-endereco").value),
            status: "PENDENTE_MOTORISTA"
        };

        console.log("Enviar Solicitação: ", novaSolicitacao);

        api.post(`/solicitacoes`, novaSolicitacao, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                const data = res.data;
                console.log(data);
                setSolicitacao(data);
                navigate("/responsavel/dependentes")
            })
            .catch((err) => {
                console.error(err);
                setSolicitacao({ status: null })
            });
    }

    function enviarTipoTrajetoNum() {
        const ida = document.getElementById('chkIda');
        const volta = document.getElementById('chkVolta');

        if (ida.checked) {
            if (volta.checked) {
                return "IDA VOLTA";
            } else {
                return "IDA";
            }
        }

        if (volta.checked) {
            return "VOLTA";
        }


        return null;
    }

    function enviarDiaSemana() {
        var diaSemana = "";

        const checkboxes = document.getElementById('checkboxes')

        for (let i = 0; i < checkboxes.childNodes.length; i++) {
            const element = checkboxes.children[i].children[0];

            if (element.checked) {
                diaSemana += element.value + " ";
            }
        }

        if (diaSemana.length != 0) {
            return diaSemana;
        } else {
            return null;
        }
    }

    function enviarPeriodo() {
        return document.getElementById('select-periodo').value;
    }

    function capitalize(str) {
        return String(str)
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    function formatarDiaSemana(diaSemana) {
        return capitalize(String(diaSemana)).trim().replaceAll(' ', ', ');
    }

    function formatarTipoTrajeto(tipoTrajeto) {
        return capitalize(String(tipoTrajeto)).replaceAll(' ', ' e ');
    }

    function formatarPeriodo(periodo) {
        let str = capitalize(String(periodo));
        return (str == "Manha") ? "Manhã" : str;
    }

    const exibirSolicitacao = (status) => {
        if (status == "PENDENTE_RESPONSAVEL") {
            return <>
                {/* Enviar solicitação final */}
                <CardInfo
                    icone={icoEscola}
                    categoria={"Escola"}
                    info={dependente.escola.nome}
                />
                <CardInfo
                    icone={icoCasa}
                    categoria={"Endereço"}
                    info={solicitacao.endereco.nome}
                />
                <CardInfo
                    icone={icoRua}
                    categoria={'Ida e/ou Volta'}
                    info={formatarTipoTrajeto(solicitacao.tipo)}
                />
                <CardInfo
                    icone={icoCalendario}
                    categoria={'Dias da Semana'}
                    info={formatarDiaSemana(solicitacao.diaSemana)}
                />
                <CardInfo
                    icone={icoRelogio}
                    categoria={'Período'}
                    info={formatarPeriodo(solicitacao.periodo)}
                />
                <div className={styles['card']}>
                    <div className={styles['icone']}>
                        <img className={styles['icone-img']} src={icoRelogio} alt="ico" />
                    </div>
                    <div className={styles['content']}>
                        <span className={styles['categoria']}>Horário</span>
                        <div className={styles['content-horario']}>
                            {String(solicitacao.tipo).includes("IDA") && (
                                <div>
                                    <span className={styles['categoria']}>Ida: </span>
                                    <span className={styles['info']}>{solicitacao.horarioIda}</span>
                                </div>
                            )}
                            {String(solicitacao.tipo).includes("VOLTA") && (
                                <div>
                                    <span className={styles['categoria']}>Volta: </span>
                                    <span className={styles['info']}>{solicitacao.horarioVolta}</span>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
                <CardInfo
                    icone={icoContrato}
                    categoria={'Vigência do Contrato'}
                    info={FormatarData(solicitacao.contratoInicio) + " - " + FormatarData(solicitacao.contratoFim)}
                />
                <CardInfo
                    icone={icoDinheiro}
                    categoria={'Valor (por mês)'}
                    info={'R$' + solicitacao.valor.toFixed(2).replace('.', ',')}
                />

                <div className={styles['botoes']}>
                    <button onClick={aceitarSolicitacao} className={styles['btn-amarelo']}>Aceitar</button>
                    <button onClick={() => { setShowModal(true) }} className={styles['btn-preto']}>Recusar</button>
                </div>
            </>
        } else if (solicitacao.status == "PENDENTE_MOTORISTA") {
            return <div>Aguardando motorista...</div>
        } else {
            return <>
                {/* Enviar solicitação inicial */}
                <CardInfo
                    icone={icoEscola}
                    categoria={"Escola"}
                    info={dependente.escola.nome}
                />
                <div className={styles['card']}> { /* Select de endereço */}
                    <div className={styles['icone']}>
                        <img className={styles['icone-img']} src={icoCasa} alt="ico" />
                    </div>
                    <div className={styles['content']}>
                        <span className={styles['categoria']}>Endereço</span>
                        <div className={styles['container-checkbox']}>
                            <select name="" className={styles['ipt-select']} id="select-endereco">
                                {enderecos.map((endereco) => {
                                    return <option key={"endereco" + endereco.id} value={endereco.id}>{endereco.nome}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles['card']}> {/* Checkbox Ida/Volta */}
                    <div className={styles['icone']}>
                        <img className={styles['icone-img']} src={icoRua} alt="ico" />
                    </div>
                    <div className={styles['content']}>
                        <span className={styles['categoria']}>Ida e/ou Volta</span>
                        <div className={styles['container-checkbox']}>
                            <div className={styles['checkbox']}>
                                <input type="checkbox" name="" id="chkIda" />
                                <label htmlFor="chkIda">Ida</label>
                            </div>
                            <div className={styles['checkbox']}>
                                <input type="checkbox" name="" id="chkVolta" />
                                <label htmlFor="chkIda">Volta</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['card']}> {/* Checkbox Dias da Semana */}
                    <div className={styles['icone']}>
                        <img className={styles['icone-img']} src={icoCalendario} alt="ico" />
                    </div>
                    <div className={styles['content']}>
                        <span className={styles['categoria']}>Dias da Semana</span>
                        <div className={styles['container-checkbox']} id="checkboxes">
                            <div className={styles['checkbox']}>
                                <input type="checkbox" value={"SEGUNDA"} className={styles['chk-dia-semana']} id={styles['chk-segunda']} />
                            </div>
                            <div className={styles['checkbox']}>
                                <input type="checkbox" value={"TERCA"} className={styles['chk-dia-semana']} id={styles['chk-terca']} />
                            </div>
                            <div className={styles['checkbox']}>
                                <input type="checkbox" value={"QUARTA"} className={styles['chk-dia-semana']} id={styles['chk-quarta']} />
                            </div>
                            <div className={styles['checkbox']}>
                                <input type="checkbox" value={"QUINTA"} className={styles['chk-dia-semana']} id={styles['chk-quinta']} />
                            </div>
                            <div className={styles['checkbox']}>
                                <input type="checkbox" value={"SEXTA"} className={styles['chk-dia-semana']} id={styles['chk-sexta']} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['card']}> { /* Select de período */}
                    <div className={styles['icone']}>
                        <img className={styles['icone-img']} src={icoRelogio} alt="ico" />
                    </div>
                    <div className={styles['content']}>
                        <span className={styles['categoria']}>Período</span>
                        <div className={styles['container-checkbox']}>
                            <select name="" className={styles['ipt-select']} id="select-periodo">
                                <option key={"MANHA"} value="MANHA">Manhã</option>
                                <option key={"TARDE"} value="TARDE">Tarde</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles['botoes']}>
                    <button onClick={enviarSolicitacao} className={styles['btn-preto']}>Enviar Socitação</button>
                </div>
            </>
        }
    }

    return (
        <div>
            <NavBarTop titulo={titulo} />
            {
                showModal &&
                <ModalConfirmar
                    mensagem={"Deseja recusar o contrato?"}
                    onConfirm={handleConfirm}
                    onCancel={() => setShowModal(false)}
                />
            }

            <Loader loading={loading.dependente || loading.motorista || loading.enderecos || loading.solicitacao}>
                {motorista && dependente && enderecos && solicitacao &&

                    <div className={styles["wrapper"]}>
                        <Box>
                            <div className={styles['container']}>
                                <img
                                    className={styles["foto-perfil"]}
                                    src={FotoPerfil(motorista.imagem.caminho)}
                                    alt="Foto de Perfil"
                                    onError={handleImageError}
                                />
                                <div>
                                    <h2 className={styles["nome"]}>{motorista.nome}</h2>
                                    <p className={styles["dependente"]}>
                                        Dependente: {dependente.nome}
                                    </p>
                                </div>

                                {exibirSolicitacao(solicitacao?.status)}
                            </div>
                        </Box>
                    </div>
                }
            </Loader>
            <NavBarBot />
        </div>
    )
}

export default Solicitacoes