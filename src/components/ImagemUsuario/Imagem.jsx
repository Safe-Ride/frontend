import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './Imagem.module.css'; // Importe seu arquivo de estilos
import ProfilePage from '../../pages/motorista/perfil/Perfil'; // Importe o conteúdo da página do perfil


Modal.setAppElement('#root'); // Defina o elemento raiz da sua aplicação

const ProfileRedirect = ({ img_path }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles['profile-container']} onClick={openModal}>
        <img 
          src={img_path} 
          alt="Profile" 
          className={styles['profile-image']}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal} // Fecha o modal ao clicar fora
        className={styles['custom-modal']} // Estilização personalizada
        overlayClassName={styles['custom-overlay']} // Estilização do fundo escuro
      >
        <button onClick={closeModal} className={styles['close-button']}>X</button>
        <div className={styles['modal-content']}>
          {/* Aqui, utilize o conteúdo do perfil do motorista */}
          {/* Pode ser um componente que renderiza a tela de perfil */}
          <ProfilePage /> {/* Substitua por seu componente de perfil */}
        </div>
      </Modal>
    </>
  );
};

export default ProfileRedirect;
