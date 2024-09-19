import React, { useState } from "react";
import styles from "./Card_Dependente.module.css";

const Card_Dependente = (props) => {
    const [isExpanded, setIsExpanded] = useState(false); 

    const handleClick = () => {
        setIsExpanded(!isExpanded); 
    };

    return (
        <div 
            className={`${styles['container']} ${isExpanded ? styles['expanded'] : ''}`} 
            onClick={handleClick}
        >
            <h3 className={styles['text-nome']}>{props.nome}</h3>
            <h3 className={styles['text']}>R:{props.responsavel}</h3>
            {isExpanded && (
                <div className={styles['inputs']}>
                    <input
                        type="text"
                        className={styles['input-horario']}
                        placeholder="Digite algo..."
                    />
                    <input
                        type="text"
                        className={styles['input-endereco']}
                        placeholder="Digite algo..."
                    />
                </div>
            )}
            </div>
    );
};

export default Card_Dependente;
