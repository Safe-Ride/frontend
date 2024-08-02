import React, { useState } from "react";
import styles from "./CardAtivo.module.css";
import Modal from "./Modal"; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const CARD = ({ nome, hora, status }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
            <Modal isOpen={isModalOpen} onClose={closeModal} nome={nome} />
        </div>
    );
};

export default CARD;
