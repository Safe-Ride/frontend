import React, { useState } from "react";
import style from "./OnOff.module.css";
import api from "../../../api";

const OnOff = ({ trajetoId, ativo: inicialAtivo, onAtivoChange }) => {
  const [ativo, setAtivo] = useState(inicialAtivo);

  const alterarAtivo = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const novoAtivo = !ativo;

      await api.patch(
        `/trajetos/alterarAtivo/${trajetoId}?ativo=${novoAtivo}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAtivo(novoAtivo);
      onAtivoChange(trajetoId, novoAtivo); // Notifica o componente pai
    } catch (e) {
      console.error("Erro ao fazer o PATCH:", e.response?.data || e.message);
    }
  };

  return (
    <label className={style["switch"]}>
      <input type="checkbox" checked={ativo} onChange={alterarAtivo} />
      <span className={style["slider"]}></span>
    </label>
  );
};

export default OnOff;
