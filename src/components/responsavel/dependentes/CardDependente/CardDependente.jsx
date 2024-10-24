import FotoPerfil from "../../../../utils/functions/FotoPerfil";
import styles from "./CardDependente.module.css";
import { useNavigate } from "react-router-dom";
import Imagem from "../../../../utils/assets/perfil/usuario.png"

const CardDependente = ({ dependente, navigateTo = null }) => {
  const navigate = useNavigate();

  const handleImageError = (e) => {
    e.target.src = Imagem;
  } 

  return (
    <div className={styles.dependente} onClick={() => navigate(navigateTo)}>
      <img
        className={styles["foto"]}
        src={FotoPerfil(dependente.foto)}
        alt="foto dependente"
        onError={handleImageError}
      />
      <div className={styles["info"]}>
        <h2 className={styles["nome"]}>{dependente.nome}</h2>
        <p className={styles["status"]}>{dependente.status}</p>
      </div>
    </div>
  );
};

export default CardDependente;
