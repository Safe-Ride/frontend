import React from "react";
import styles from "./NavBarTop.module.css";
import imgPerfil from "../../utils/assets/navbar/perfil.png";
import imgVoltar from "../../utils/assets/navbar/voltar.png";
import { useNavigate } from 'react-router-dom';

const NavBarTop = ({ titulo }) => {
  const idUsuario = sessionStorage.getItem('ID_USUARIO')
  const navigate = useNavigate();

  const goProfile = () => {
    navigate('/motorista/perfil', { state: { idUsuario } });
  }

  const handleGoBack = () => {
    navigate(-1); 
  };


  return (
    <>
      <div className={styles["espaco-inicio"]}></div>
      <nav className={styles["navbartop"]}>
        <img className={styles["voltar"]} src={imgVoltar} alt="" onClick={handleGoBack}/>
        <p className={styles["titulo"]}>{titulo}</p>
        <a href="" onClick={goProfile}>
          <img className={styles["perfil"]} src={imgPerfil} alt="" />
        </a>
      </nav>
    </>
  );
};

export default NavBarTop;
