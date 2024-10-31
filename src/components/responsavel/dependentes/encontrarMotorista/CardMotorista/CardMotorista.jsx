import FotoPerfil from "../../../../../utils/functions/FotoPerfil";
import styles from "./CardMotorista.module.css"
import { useNavigate } from "react-router-dom"
import Imagem from "../../../../../utils/assets/perfil/usuario.png"

const CardMotorista = ( { idDependente, motorista } ) => {

    const navigate = useNavigate();

    const handleImageError = (e) => {
        e.target.src = Imagem;
      } 

    return (
        <div className={styles.dependente} onClick={() => navigate(`/responsavel/dependentes/${idDependente}/encontrar-motorista/${motorista.id}`)}>
            <img 
                className={styles['foto']} 
                src={FotoPerfil(motorista.foto)} 
                alt="foto motorista"
                onError={handleImageError}
            />
            <div className={styles['info']}>
                <h2 className={styles['nome']}>{motorista.nome}</h2>
            </div>
        </div>
    )
}

export default CardMotorista