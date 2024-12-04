import React, { useState } from "react";
import style from "./Modal.module.css";

const Modal = ({ isOpen, onClose, salvar, setStatus, tipoTrajeto }) => {
  const [selectedLegenda, setSelectedLegenda] = useState(null);

  const handleLegendaClick = (index) => {
    const statusMap = {
      1: "INICIADO",
      2: "INDO_PARA_ESCOLA",
      3: "NAO_IRA",
    };
    if(tipoTrajeto === "VOLTA") statusMap["2"] = "VOLTANDO_PARA_CASA"
    setSelectedLegenda(index);
    setStatus(statusMap[index]);
  };

  if (!isOpen) return null;

  return (
    <div className={style["modal-overlay"]} onClick={onClose}>
      <div
        className={style["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={style["titulo"]}>Alterar status</h3>

        <div
          className={style["legenda"]}
          style={{
            backgroundColor: selectedLegenda === 1 ? "#F2C718" : "",
            borderRadius: "16px",
          }}
          onClick={() => handleLegendaClick(1)}
        >
          <p className={style["leg-1"]}></p>
          <p>Iniciado</p>
        </div>

        <div
          className={style["legenda"]}
          style={{
            backgroundColor: selectedLegenda === 2 ? "#F2C718" : "",
            borderRadius: "16px",
          }}
          onClick={() => handleLegendaClick(2)}
        >
          <p className={style["leg-2"]}></p>
          <p>Na Van</p>
        </div>

        <div
          className={style["legenda"]}
          style={{
            backgroundColor: selectedLegenda === 3 ? "#F2C718" : "",
            borderRadius: "16px",
          }}
          onClick={() => handleLegendaClick(3)}
        >
          <p className={style["leg-3"]}></p>
          <p>Não irá</p>
        </div>

        <button className={style["login-button"]} onClick={salvar}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Modal;
