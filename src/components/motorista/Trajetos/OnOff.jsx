import React, { useState } from "react";
import style from "./OnOff.module.css";
import api from "../../../api";
import Modal from "react-modal";

const OnOff = ({ trajetoId, ativo: inicialAtivo, onAtivoChange }) => {
  const [ativo, setAtivo] = useState(inicialAtivo); // Estado inicial do trajeto
  const [modalAberto, setModalAberto] = useState(false); // Estado para controlar a visibilidade do modal
  const [novoAtivo, setNovoAtivo] = useState(!ativo); // Estado temporário para armazenar o valor que será aplicado

  Modal.setAppElement("#root");

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setNovoAtivo(ativo); // Restaurar o valor de novoAtivo ao fechar o modal sem confirmar
  };

  const handleConfirmar = async () => {
    if (novoAtivo !== null) {
      try {
        const token = sessionStorage.getItem("token");

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
        onAtivoChange(trajetoId, novoAtivo);
        fecharModal(); 
      } catch (e) {
        console.error("Erro ao fazer o PATCH:", e.response?.data || e.message);
      }
    }
  };

  const alterarAtivo = () => {
    const proximoAtivo = !ativo;
    setNovoAtivo(proximoAtivo);

    if (ativo && !proximoAtivo) {
      abrirModal();
    } else {
      handleConfirmar();
    }
  };

  return (
    <div>
      <label className={style["switch"]}>
        <input type="checkbox" checked={ativo} onChange={alterarAtivo} />
        <span className={style["slider"]}></span>
      </label>

      {/* Modal de confirmação */}
      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal} 
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          },
          content: {
            width: "80%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Confirmação</h2>
        <p>Tem certeza de que deseja desativar este trajeto?</p>
        <button onClick={fecharModal}>Cancelar</button>
        <button onClick={handleConfirmar} className={style["confirm"]}>Confirmar</button>
      </Modal>
    </div>
  );
};

export default OnOff;