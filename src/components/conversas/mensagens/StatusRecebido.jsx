import React from "react";
import FormatarData from "../../../utils/functions/FormatarData";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import styles from "./StatusRecebido.module.css";
import Imagem from "../../../utils/assets/perfil/usuario.png"

const StatusRecebido = ({ mensagem }) => {
  const handleImageError = (e) => {
    e.target.src = Imagem;
  }

  return (
    <div className={styles["container-enviado"]}>
        <img
        src={FotoPerfil(sessionStorage.FOTO_USUARIO)}
        alt="Foto responsável"
        className={styles["foto"]}
        onError={handleImageError}
      />
      <div className={styles["status-enviado"]}>
        <div className={styles["campos"]}>
          <h2 className={styles["dependente"]}>{mensagem.nome}</h2>
          <p
            className={`${styles["status"]}`}
            style={{ color: AlterarCorPeloStatus(mensagem.status) }}
          >
            {mensagem.status}
          </p>
        </div>
        <div className={styles["campo-horario"]}>
          <p className={styles["horario"]}>
            {CalcularHorarioMensagem(mensagem.horario)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusRecebido;

function CalcularHorarioMensagem(horario) {
  const hoje = new Date();
  hoje.setDate(hoje.getDate() - 1);
  const data = new Date(horario);
  data.setDate(data.getDate() - 1);
  const ontem = new Date();
  ontem.setDate(hoje.getDate() - 1);

  if (FormatarData(data) === FormatarData(hoje)) {
    return `${data.getHours()}:${data.getMinutes()}`;
  } else if (FormatarData(data) === FormatarData(ontem)) {
    return `ontem ${data.getHours()}:${data.getMinutes()}`;
  } else {
    return `${FormatarData(data)}`;
  }
}

function AlterarCorPeloStatus(status) {
  if (status === "NÃO VAI") {
    return "red";
  }
}
