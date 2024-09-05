import styles from "./CardInfo.module.css"
import icoEditar from "../../../../../utils/assets/dependentes/lapis.png"
import icoConfirmar from "../../../../../utils/assets/perfil/done.png"
import { useState } from "react";

const CardInfo = ({ icone, categoria, info, editar = false }) => {

    const [inputValue, setInputValue] = useState(info);
    const [iconeEditar, setIconeEditar] = useState(icoEditar);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const habilitarModoEditar = () => {
            const input = document.getElementById(`info-editar-${categoria.slice(0,categoria.length-1)}`)
            if (input.disabled) {
                setIconeEditar(icoConfirmar);
                input.disabled = false;
                input.focus();
            } else {
                
                // Adicionar a chamada da integração aqui

                setIconeEditar(icoEditar);
                input.disabled = true;
            }
            
    }

    return (

        <div className={styles['card']}>
            <div className={styles['icone']}>
                <img className={styles['icone-img']} src={ icone } alt="ico" />
            </div>
            <div className={styles['content']}>
                <span className={styles['categoria']}>{ categoria }</span>
                <div style={{width: 100 + "%"}}>
                    { editar ?
                        <div className={styles['campo-editar']}>
                            <input
                                id={`info-editar-${categoria.slice(0,categoria.length-1)}`} 
                                className={styles['info-editar']} 
                                value={inputValue}
                                onChange={handleInputChange}
                                disabled
                            />
                            <img 
                                className={styles['img-editar']}
                                src={iconeEditar}
                                onClick={habilitarModoEditar}
                                alt="" 
                            />
                        </div>
                        
                        :
                        <span className={styles['info']}>{ info }</span>
                        
                    }
                </div>
            </div>
        </div>
        
        
    )
}

export default CardInfo