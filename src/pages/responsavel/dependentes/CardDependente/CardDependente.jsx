import styles from "./CardDependente.module.css"
import { useNavigate } from "react-router-dom"

const CardDependente = ( { dependente } ) => {

    const navigate = useNavigate();

    return (
        <div className={styles.dependente} onClick={() => navigate(`/responsavel/dependentes/${dependente.id}`)}>
            <img className={styles['foto']} src={dependente.foto} alt="foto dependente" />
            <div className={styles['info']}>
                <h2 className={styles['nome']}>{dependente.nome}</h2>
                <p className={styles['status']}>{dependente.status}</p>            
            </div>
        </div>
    ) 
}

export default CardDependente