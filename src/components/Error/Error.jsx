import React, { useState } from 'react';
import styles from './Error.module.css';
import { MdOutlineErrorOutline } from "react-icons/md";

const Error = ({ mensagem, onClose }) => {
    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['error-modal']}>
                <div className={styles['error-header']}>
                    <button className={styles['btn-fechar']} onClick={onClose}>X</button>
                </div>
                <div className={styles['icon-container']}>
                    <MdOutlineErrorOutline size={64} color='#f2c718' />
                </div>
                <span>{mensagem}</span>
            </div>
        </div>
    );
};

export default Error;
