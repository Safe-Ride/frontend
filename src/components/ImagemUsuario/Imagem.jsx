import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Imagem.module.css'; // Importe seu arquivo de estilos
import ProfilePage from '../../pages/motorista/perfil/Perfil'; // Importe o conteúdo da página do perfil

const ProfileRedirect = ({ foto , idUsuario}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const goProfile = () => {
    console.log(idUsuario)
    navigate('/motorista/perfil', { state: { idUsuario } });
  }


  return (
    <>
      <div className={styles['profile-container']} onClick={goProfile}>
        <img 
          src={foto} 
          alt="Profile" 
          className={styles['profile-image']}
        />
      </div>
    </>
  );
};

export default ProfileRedirect;
