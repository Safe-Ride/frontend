import React, { useEffect, useState } from "react";
import api from "../../../api";
import arrow from "../../../utils/assets/play-button.png";
import Seletor from "../Seletor/Seletor";
import styles from "./Enviar.module.css";

function Enviar({submit}) {
  const idUsuario = sessionStorage.getItem("ID_USUARIO");

  const opcoesMensagem = [{ name: "Não vai!", value: "NAO_IRA" }];

  const [dependentes, setDependentes] = useState([]);
  const [mensagemEscolhida, setMensagemEscolhida] = useState("");
  const [dependenteEscolhido, setDependenteEscolhido] = useState(0);

  const loadDependentes = () => {
    api
      .get(`/usuarios/dependentes-responsavel/${idUsuario}`, {
        headers: { Authorization: `Bearer ${sessionStorage.token}` }
      })
      .then((res) => {
        const data = res.data;
        const seletorDependentes = (data) => {
          let dependentes = [];
          for (let i = 0; i < data.length; i++) {
            dependentes.push({ name: data[i].nome, value: data[i].id });
          }
          return dependentes;
        };
        setDependentes(seletorDependentes(data));
      });
  };

  const handleSubmit = () => {
    api.post(
      `/mensagens`,
      {
        conversaId: 1,
        usuarioId: idUsuario,
        dependenteId: dependenteEscolhido,
        status: mensagemEscolhida
      },
      {
        headers: { Authorization: `Bearer ${sessionStorage.token}` }
      }
    );
    submit()
  };

  const onChangeMensagem = (data) => {
    setMensagemEscolhida(data);
  };
  const onChangeDependente = (data) => {
    setDependenteEscolhido(data);
  };

  useEffect(() => {
    loadDependentes();
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["enviar"]}>
        <Seletor
          opcoes={opcoesMensagem}
          campo={"Mensagem"}
          change={onChangeMensagem}
        />
        <Seletor
          opcoes={dependentes}
          campo={"Dependente"}
          change={onChangeDependente}
        />
        <img
          className={styles["icone"]}
          src={arrow}
          alt="Icone de enviar"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Enviar;

