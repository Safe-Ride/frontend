import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import api from "../../../api";
import styles from "./CardAtivo.module.css";
import Modal from "./Modal";

const CardAtivo = ({
  nome,
  hora,
  status,
  rotaId,
  dependenteId,
  enderecoId,
  statusTrajeto
}) => {
  const [novoStatus, setAtivo] = useState(status);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const atualizaTrajeto = async () => {
    const dados = {
      status: novoStatus,
    };
    const token = sessionStorage.getItem("token");

    try {
      const res = await api.patch(`/rotas/status/${rotaId}`, dados, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAtivo(res.data.status);
      statusTrajeto(true)
      closeModal();
    } catch (e) {
      console.error("Erro ao fazer o PATCH:", e);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["legenda"]}>
        <p className={styles[`leg-${status}`]} onClick={openModal}></p>
        <h3 className={styles["text"]}>{nome}</h3>
        <h3 className={styles["text"]}>{hora}</h3>
        <i className="fas fa-comment"></i>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        salvar={atualizaTrajeto}
        setStatus={setAtivo}
      />
    </div>
  );
};

export default CardAtivo;