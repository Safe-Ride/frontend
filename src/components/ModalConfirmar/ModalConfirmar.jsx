import React from 'react';
import styles from './ModalConfirmar.module.css';

const ModalConfirmar = ({ mensagem, onConfirm, onCancel }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onCancel}>X</button>
        </div>
        <div className={styles.modalBody}>
          <p>{mensagem}</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.confirmButton} onClick={() => {onConfirm(true); onCancel()}}>Sim</button>
          <button className={styles.cancelButton} onClick={() => {onConfirm(false); onCancel()}}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmar;