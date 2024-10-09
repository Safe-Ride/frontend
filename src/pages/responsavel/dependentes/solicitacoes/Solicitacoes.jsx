import NavBarBot from "../../../../components/NavBar/NavBarBot"
import NavBarTop from "../../../../components/NavBar/NavBarTop"
import Box from "../../../../components/responsavel/dependentes/Box/Box"
import FotoPerfil from "../../../../utils/functions/FotoPerfil"
import CardInfo from "../../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo"
import styles from "./Solicitacoes.module.css"
import icoContrato from "../../../../utils/assets/dependentes/contrato.png";
import icoPagamento from "../../../../utils/assets/dependentes/pagamento.png";
import icoCasa from "../../../../utils/assets/dependentes/casa.png";
import icoRua from "../../../../utils/assets/dependentes/road.png";
import icoCalendario from "../../../../utils/assets/dependentes/calendario.png";
import icoRelogio from "../../../../utils/assets/dependentes/relogio.png";
import icoDinheiro from "../../../../utils/assets/dependentes/dinheiro.png";
import { useRef } from "react"

const Solicitacoes = () => {

    const titulo = "SOLICITAÇÕES"

    const solicitacao = {
        nomeMotorista: "Bruno Henrique",
        endereco: "Rua Haddock Lobo, 595 São Paulo - SP",
        tipoTrajeto: 0,
        diasSemana: ["Segunda", "Quarta"],
        periodo: "manhã",
        horario: ["06:45", "12:30"],
        dataInicio: "10/01/2024",
        dataFim: "10/01/2025",
        valor: 1000.00,
        status: 0,
    };

    function enviarSolicitacao() {

        const solicitacao = {};

        solicitacao.tipoTrajeto = enviarTipoTrajetoNum();
        solicitacao.diaSemana = enviarDiaSemana();
        solicitacao.periodo = enviarPeriodo();

        console.log(solicitacao);
    }

    function enviarTipoTrajetoNum() {
        const ida = document.getElementById('chkIda');
        const volta = document.getElementById('chkVolta');

        if (ida.checked) {
            if (volta.checked) {
                return ["IDA", "VOLTA"];
            } else {
                return ["VOLTA"];
            }
        }

        if (volta.checked) {
            return ["IDA"];
        }


        return null;
    }

    function enviarDiaSemana() {
        const diaSemana = [];

        const checkboxes = document.getElementById('checkboxes')

        for (let i = 0; i < checkboxes.childNodes.length; i++) {
            const element = checkboxes.children[i].children[0]; 
            
            if (element.checked) {
                diaSemana.push(element.value);
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
                    icone={icoRua}
                    categoria={'Ida e/ou Volta'}
                    info={tipoTrajetoTexto(solicitacao.tipoTrajeto)}
                />
                <CardInfo
                    icone={icoCalendario}
                    categoria={'Dias da Semana'}
                    info={solicitacao.diasSemana.toString()}
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



    return (
        <div>
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
                        <img className={styles["foto-perfil"]} src={FotoPerfil()} alt="" />
                        <div>
                            <h2 className={styles["nome"]}>{solicitacao.nomeMotorista}</h2>
                            <p className={styles["dependente"]}>
                                Dependente: Lucas Neves
                            </p>
                        </div>

                        <CardInfo
                            icone={icoCasa}
                            categoria={"Endereço:"}
                            info={solicitacao.endereco}
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