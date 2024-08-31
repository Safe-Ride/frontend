import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Imagem.module.css';


const ProfileRedirect = ({ foto , idUsuario}) => {
  const navigate = useNavigate();

  const goProfile = () => {
    navigate('/motorista/perfil', { state: { idUsuario } });
  }


  return (
    <>
      <div className={styles['profile-container']} onClick={goProfile}>
        <img 
          src={foto} 
          alt="" 
          className={styles['profile-image']}
        />
      </div>
    </>
  );
};

export default ProfileRedirect;
