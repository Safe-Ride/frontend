import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Imagem.module.css';
import Imagem from '../../../src/utils/assets/perfil/usuario.png'


const ProfileRedirect = ({ foto , idUsuario}) => {
  const navigate = useNavigate();

  const goProfile = () => {
    navigate('/motorista/perfil', { state: { idUsuario } });
  }

  const handleImageError = (e) => {
    e.target.src = Imagem;
  } 

  return (
    <>
      <div className={styles['profile-container']} onClick={goProfile}>
        <img 
          src={foto} 
          alt="" 
          className={styles['profile-image']}
          onError={handleImageError}
        />
      </div>
    </>
  );
};

export default ProfileRedirect;
