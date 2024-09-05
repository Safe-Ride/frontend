import React, { useState } from "react";
import styles from "./CardAtivo.module.css";
import Modal from "./Modal";
import '@fortawesome/fontawesome-free/css/all.min.css';
import api from "../../../api";

const CardAtivo = ({ nome, hora, status, id, dependenteId, enderecoId }) => {

    const [novoStatus, setAtivo] = useState('NAO_INICIADO');
    

    const atualizaTrajeto = async () => {

        const dados = {
            "trajetoId": id,
            "dependenteId": dependenteId,
            "enderecoId": enderecoId,
            "status": novoStatus
        }
        const token = sessionStorage.getItem('token')

        try {
            const res = await api.patch('/trajetos/status', dados, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            setAtivo(novoStatus)
            closeModal()
            console.log(res.data)
        } catch (e) {
            console.error('Erro ao fazer o PATCH:', e)
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        window.location.reload();
    };

    return (
        <div className={styles['container']}>
            <div className={styles["legenda"]}>
                <p
                    className={styles[`leg-${status}`]}
                    onClick={openModal}
                ></p>
                <h3 className={styles['text']}>{nome}</h3>
                <h3 className={styles['text']}>{hora}</h3>
                <i className="fas fa-comment"></i>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} salvar={atualizaTrajeto} setStatus={setAtivo} />
        </div>
    );
};

export default CardAtivo;
