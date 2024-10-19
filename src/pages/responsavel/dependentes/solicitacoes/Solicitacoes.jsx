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
import { useEffect, useState } from "react"
import api from "../../../../api"
import { useParams } from "react-router-dom"

const Solicitacoes = () => {

    const titulo = "SOLICITAÇÕES"
    const { idDependente } = useParams("idDependente");
    const { idMotorista } = useParams("idMotorista");
    const [dependente, setDependente] = useState({});
    const [motorista, setMotorista] = useState({});
    const [enderecos, setEnderecos] = useState([]);
    const [loading, setLoading] =
        useState({
            "dependente": false,
            "motorista": false,
            "enderecos": false
        });
    const [solicitacao, setSolicitacao] = useState(
        {
            responsavelId: '', 
            motoristaId: '',
            dependenteId: '',
            periodo: '',
            tipo: '',
            diaSemana: '',
            enderecoId: '',
            status: ''
        }
    );

    // Motorista
    useEffect(() => {
        async function getData() {
            await api
                .get(`/usuarios/${idMotorista}`)
                .then((res) => {
                    const data = res.data;
                    console.log(data);
                    setMotorista(data);
                })
                .catch((err) => console.error(err))
                .finally(() => setLoading((prev) => ({ ...prev, "motorista": true })));
        }
        getData();
    }, [idMotorista]);

    // Dependente
    useEffect(() => {
        async function getData() {
            await api
                .get(`/dependentes/${idDependente}`)
                .then((res) => {
                    const data = res.data;
                    console.log(data);
                    setDependente(data);
                })
                .catch((err) => console.error(err))
                .finally(() => setLoading((prev) => ({ ...prev, "dependente": true })));
        }
        getData();
    }, [idDependente])

    // Endereços
    useEffect(() => {
        async function getData() {
            await api
                .get(`/enderecos/usuario/${sessionStorage.ID_USUARIO}`)
                .then((res) => {
                    const data = res.data;
                    console.log(data);
                    setEnderecos(data);
                })
                .catch((err) => console.error(err))
                .finally(() => setLoading((prev) => ({ ...prev, "enderecos": true })));
        }
        getData();
    }, [])

    function enviarSolicitacao() {

        setSolicitacao({
            responsavelId: Number(sessionStorage.ID_USUARIO),
            motoristaId: Number(idMotorista),
            dependenteId: Number(idDependente),
            periodo: enviarPeriodo(),
            tipo: enviarTipoTrajetoNum(),
            diaSemana: enviarDiaSemana().trim(),
            enderecoId: Number(document.getElementById("select-endereco").value),
            status: "PENDENTE"
        });

        console.log(solicitacao);

        api.post(`/solicitacoes`, solicitacao, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                const data = res.data;
                console.log(data);
            })
            .catch((err) => console.error(err));
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

    function tipoTrajetoTexto(tipoTrajetoNum) {
        switch (tipoTrajetoNum) {
            case 0: return 'Ida'
            case 1: return 'Volta'
            case 2: return 'Ida e Volta'
            default: return null
        }
    }

    const exibirSolicitacao = (status) => {
        if (status == 0) {
            return <>
                {/* Enviar solicitação inicial */}
                <div className={styles['card']}> { /* Select de endereço */}
                    <div className={styles['icone']}>
                        <img className={styles['icone-img']} src={icoCasa} alt="ico" />
                    </div>
                    <div className={styles['content']}>
                        <span className={styles['categoria']}>Endereço</span>
                        <div className={styles['container-checkbox']}>
                            <select name="" className={styles['ipt-select']} id="select-endereco">
                                {enderecos.map((endereco) => {
                                    return <option value={endereco.id}>{endereco.nome}</option>
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
                                <option value="MANHA">Manhã</option>
                                <option value="TARDE">Tarde</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles['botoes']}>
                    <button onClick={enviarSolicitacao} className={styles['btn-preto']}>Enviar Socitação</button>
                </div>
            </>
        } else {
            return <>
                {/* Enviar solicitação final */}
                <CardInfo
                    icone={icoCasa}
                    categoria={"Endereço"}
                    info={solicitacao.endereco}
                />
                <CardInfo
                    icone={icoRua}
                    categoria={'Ida e/ou Volta'}
                    info={tipoTrajetoTexto(solicitacao.tipoTrajeto)}
                />
                <CardInfo
                    icone={icoCalendario}
                    categoria={'Dias da Semana'}
                    info={solicitacao.diaSemana.toString().replace(' ', ', ')}
                />
                <CardInfo
                    icone={icoRelogio}
                    categoria={'Período'}
                    info={solicitacao.periodo}
                />
                <div className={styles['card']}>
                    <div className={styles['icone']}>
                        <img className={styles['icone-img']} src={icoRelogio} alt="ico" />
                    </div>
                    <div className={styles['content']}>
                        <span className={styles['categoria']}>Horário</span>
                        <div className={styles['content-horario']}>
                            <div>
                                <span className={styles['categoria']}>Ida: </span>
                                <span className={styles['info']}>{solicitacao.horario[0]}</span>
                            </div>
                            <div>
                                <span className={styles['categoria']}>Volta: </span>
                                <span className={styles['info']}>{solicitacao.horario[1]}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <CardInfo
                    icone={icoContrato}
                    categoria={'Vigência do Contrato'}
                    info={solicitacao.dataInicio + " - " + solicitacao.dataFim}
                />
                <CardInfo
                    icone={icoDinheiro}
                    categoria={'Valor'}
                    info={'R$' + solicitacao.valor.toFixed(2).replace('.', ',')}
                />

                <div className={styles['botoes']}>
                    <button className={styles['btn-amarelo']}>Aceitar</button>
                    <button className={styles['btn-preto']}>Recusar</button>
                </div>
            </>
        }
    }

    if (!loading.dependente || !loading.motorista || !loading.enderecos) {
        return (<div className={styles['loading']}>Loading...</div>)
    }

    return (
        <div>
            <NavBarTop titulo={titulo} />

            <div className={styles["wrapper"]}>
                <Box>
                    <div className={styles['container']}>
                        <img className={styles["foto-perfil"]} src={FotoPerfil(motorista.imagem.caminho)} alt="Foto de Perfil" />
                        <div>
                            <h2 className={styles["nome"]}>{motorista.nome}</h2>
                            <p className={styles["dependente"]}>
                                Dependente: {dependente.nome}
                            </p>
                        </div>

                        <CardInfo
                            icone={icoEscola}
                            categoria={"Escola"}
                            info={dependente.escola.nome}
                        />

                        {exibirSolicitacao(solicitacao.status)}
                    </div>
                </Box>
            </div>

            <NavBarBot />
        </div>
    )
}

export default Solicitacoes