import styles from "./Solicitacao.module.css";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import Box from "../../../components/responsavel/dependentes/Box/Box";
import CardInfo from "../../../components/responsavel/dependentes/perfilDependente/CardInfo/CardInfo";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import icoCasa from "../../../utils/assets/dependentes/casa.png";
import icoContrato from "../../../utils/assets/dependentes/contrato.png";
import icoRua from "../../../utils/assets/dependentes/road.png";
import icoRelogio from "../../../utils/assets/dependentes/relogio.png";
import icoCalendario from "../../../utils/assets/dependentes/calendario.png";
import Imagem from "../../../utils/assets/perfil/usuario.png"
import { useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";

const Solicitacao = () => {
  const titulo = "Solicitações";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState({ visivel: false, mensagem: "" });
  const [inputValue, setInputValue] = useState();
  const [solicitacao, setSolicitacao] = useState(null);
  const { id } = useParams("id");
  const dataContratoInicio = new Date();
  const dataContratoFim = new Date(dataContratoInicio.getFullYear(), 11, 31);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleImageError = (e) => {
    e.target.src = Imagem;
  }

  useEffect(() => {
    api.get(`/solicitacoes/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setSolicitacao(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  function mostrarErro() {
    setErro((prevErro) => ({ ...prevErro, visivel: true }));
  }

  function fecharErro() {
    setErro((prevErro) => ({ ...prevErro, visivel: false, mensagem: "" }));
  }

  function atualizarSolicitacao() {
    var horarioIda, horarioVolta = null;

    if (String(solicitacao.tipo).includes("IDA")) {
      horarioIda = document.getElementById("ipt-horario-ida").value;
    }

    if (String(solicitacao.tipo).includes("VOLTA")) {
      horarioVolta = document.getElementById("ipt-horario-volta").value;
    }

    const contratoInicio = document.getElementById("ipt-contrato-inicio").value;
    const contratoFim = document.getElementById("ipt-contrato-fim").value;
    const valor = Number(document.getElementById("ipt-valor").value);

    if (!verificarHorario(horarioIda, horarioVolta)) return null;
    // if (!verificarContrato(contratoInicio, contratoFim)) return null;
    if (valor == 0) {
      mostrarErro();
      setErro((prevErro) => ({
        ...prevErro,
        mensagem: "Valor não pdoe ser 0.",
      }));
      return null;
    }

    setSolicitacao((prev) => {
      const updateSolicitacao = {
        id: prev.id,
        horarioIda: horarioIda,
        horarioVolta: horarioVolta,
        contratoInicio: contratoInicio,
        contratoFim: contratoFim,
        valor: valor,
        status: "PENDENTE_RESPONSAVEL",
      };

      api.put(`/solicitacoes`, updateSolicitacao, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
        }
      })
        .then((res) => {
          const data = res.data;
          setSolicitacao(data);
          console.log(solicitacao);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
          navigate(`/motorista/solicitacoes`);
        });
    });
  }

  function cancelarSolicitacao() {
    setSolicitacao((prev) => {
      api
        .patch(`/solicitacoes/${prev.id}`)
        .then((res) => {
          const data = res.data;
          setSolicitacao(data);
          console.log(solicitacao);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
          navigate(`/motorista/solicitacoes`);
        });
    });
  }

  function verificarHorario(horarioIda = null, horarioVolta = null) {
    if (horarioIda != null && horarioVolta != null) {
      if (horarioIda >= horarioVolta) {
        mostrarErro();
        setErro((prevErro) => ({
          ...prevErro,
          mensagem: "Horário de ida não pode ser após o horário de volta.",
        }));

        return false;
      }

      if (horarioIda == "") {
        mostrarErro();
        setErro((prevErro) => ({
          ...prevErro,
          mensagem: "Necessário preencher o horário de ida.",
        }));

        return false;
      }

      if (horarioVolta == "") {
        mostrarErro();
        setErro((prevErro) => ({
          ...prevErro,
          mensagem: "Necessário preencher o horário de volta.",
        }));

        return false;
      }
    }

    if (horarioVolta == null) {
      if (horarioIda == "") {
        mostrarErro();
        setErro((prevErro) => ({
          ...prevErro,
          mensagem: "Necessário preencher o horário de ida.",
        }));

        return false;
      }
    }

    if (horarioIda == null) {
      if (horarioVolta == "") {
        mostrarErro();
        setErro((prevErro) => ({
          ...prevErro,
          mensagem: "Necessário preencher o horário de volta.",
        }));

        return false;
      }
    }

    return true;
  }

  // function verificarContrato(contratoInicio, contratoFim) {
  //   if (contratoInicio >= contratoFim) {
  //     mostrarErro();
  //     setErro((prevErro) => ({
  //       ...prevErro,
  //       mensagem:
  //         "Data início do contrato não pode ser após o a data fim do contrato.",
  //     }));

  //     return false;
  //   }

  //   if (contratoInicio == "") {
  //     mostrarErro();
  //     setErro((prevErro) => ({
  //       ...prevErro,
  //       mensagem: "Preencha a data de início do contrato.",
  //     }));

  //     return false;
  //   }

  //   if (contratoFim == "") {
  //     mostrarErro();
  //     setErro((prevErro) => ({
  //       ...prevErro,
  //       mensagem: "Preencha a data de fim do contrato.",
  //     }));

  //     return false;
  //   }

  //   return true;
  // }

  function capitalize(str) {
    return String(str)
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function formatarDiaSemana(diaSemana) {
    return capitalize(String(diaSemana)).trim().replaceAll(" ", ", ");
  }

  function formatarTipoTrajeto(tipoTrajeto) {
    return capitalize(String(tipoTrajeto)).replaceAll(" ", " e ");
  }

  function formatarPeriodo(periodo) {
    let str = capitalize(String(periodo));
    return str == "Manha" ? "Manhã" : str;
  }

  return (
    <>
      <NavBarTop titulo={titulo} />
      {erro.visivel && <Error mensagem={erro.mensagem} onClose={fecharErro} />}
      <Loader loading={loading}>
        {solicitacao && (
          <div className={styles["wrapper"]}>
            <Box>
              <div className={styles["container"]}>
                <img
                  className={styles["foto-perfil"]}
                  src={FotoPerfil(solicitacao.responsavel.imagem.caminho)}
                  alt="Foto de perfil"
                  onError={handleImageError}
                />
                <div>
                  <h2 className={styles["nome"]}>
                    {solicitacao.responsavel.nome}
                  </h2>
                  <p className={styles["dependente"]}>
                    Dependente: {solicitacao.dependente.nome}
                  </p>
                </div>

                <CardInfo
                  icone={icoCasa}
                  categoria={"Endereço:"}
                  info={solicitacao.endereco.nome}
                />
                <CardInfo
                  icone={icoRua}
                  categoria={"Ida e/ou Volta:"}
                  info={formatarTipoTrajeto(solicitacao.tipo)}
                />
                <CardInfo
                  icone={icoCalendario}
                  categoria={"Dias da Semana:"}
                  info={formatarDiaSemana(solicitacao.diaSemana)}
                />
                <CardInfo
                  icone={icoRelogio}
                  categoria={"Período:"}
                  info={formatarPeriodo(solicitacao.periodo)}
                />
                <div className={styles["card"]}>
                  {" "}
                  {/* Horário */}
                  <div className={styles["icone"]}>
                    <img
                      className={styles["icone-img"]}
                      src={icoRelogio}
                      alt="ico"
                    />
                  </div>
                  <div className={styles["content"]}>
                    <span className={styles["categoria"]}>Horário: </span>
                    <div className={styles["container-horario"]}>
                      {String(solicitacao.tipo).includes("IDA") && (
                        <div className={styles["ipt-horario"]}>
                          <span>Ida:</span>
                          <input
                            placeholder="dd/MM/YYYY"
                            className={styles["ipt-contrato"]}
                            id="ipt-horario-ida"
                            onChange={handleInputChange}
                            type="time"
                          />
                        </div>
                      )}

                      {String(solicitacao.tipo).includes("VOLTA") && (
                        <div className={styles["ipt-horario"]}>
                          <span>Volta:</span>
                          <input
                            placeholder="dd/MM/YYYY"
                            className={styles["ipt-contrato"]}
                            id="ipt-horario-volta"
                            onChange={handleInputChange}
                            type="time"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles["card"]}>
                  {/* Contrato */}
                  <div className={styles["icone"]}>
                    <img
                      className={styles["icone-img"]}
                      src={icoContrato}
                      alt="ico"
                    />
                  </div>
                  <div className={styles["content"]}>
                    <span className={styles["categoria"]}>
                      Vigência do contrato:{" "}
                    </span>
                    <div style={{ width: 100 + "%" }}>
                      <div className={styles["ipt"]}>
                        <span>De:</span>
                        <input
                          placeholder="dd/MM/YYYY"
                          className={styles["ipt-contrato"]}
                          id="ipt-contrato-inicio"
                          onChange={handleInputChange}
                          type="date"
                          disabled
                          value={dataContratoInicio.toISOString().slice(0, 10)}
                        />
                      </div>
                      <div className={styles["ipt"]}>
                        <span>Até:</span>
                        <input
                          placeholder="dd/MM/YYYY"
                          className={styles["ipt-contrato"]}
                          id="ipt-contrato-fim"
                          onChange={handleInputChange}
                          type="date"
                          disabled
                          value={dataContratoFim.toISOString().slice(0, 10)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["card"]}>
                  {" "}
                  {/* Valor */}
                  <div className={styles["icone"]}>
                    <img
                      className={styles["icone-img"]}
                      src={icoContrato}
                      alt="ico"
                    />
                  </div>
                  <div className={styles["content"]}>
                    <span
                      className={styles["categoria"]}
                      id={styles["categoria-valor"]}
                    >
                      Valor (por mês):
                    </span>
                    <div style={{ width: 100 + "%" }}>
                      <div className={styles["campo-editar"]}>
                        <input
                          className={styles["ipt-valor"]}
                          id="ipt-valor"
                          onChange={handleInputChange}
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["botoes"]}>
                  <button
                    onClick={atualizarSolicitacao}
                    className={styles["btn-aceitar"]}
                  >
                    Enviar
                  </button>
                  <button
                    onClick={cancelarSolicitacao}
                    className={styles["btn-recusar"]}
                  >
                    Recusar
                  </button>
                </div>
              </div>
            </Box>
          </div>
        )}
      </Loader>
      <NavBarBot />
    </>
  );
};

export default Solicitacao;
