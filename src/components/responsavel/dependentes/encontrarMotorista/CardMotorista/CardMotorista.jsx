import styles from "./CardMotorista.module.css"
import { useNavigate } from "react-router-dom"

const CardMotorista = ( { idDependente, motorista } ) => {

    const navigate = useNavigate();

    return (
        <div className={styles.dependente} onClick={() => navigate(`/responsavel/dependentes/${idDependente}/motorista/${motorista.id}`)}>
            <img className={styles['foto']} src={motorista.foto} alt="foto motorista" />
            <div className={styles['info']}>
                <h2 className={styles['nome']}>{motorista.nome}</h2>
                <p>{ motorista.avaliacao } &#9733;</p>            
            </div>
        </div>
    ) 
}

export default CardMotorista