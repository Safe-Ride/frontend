import React, { useState } from "react";
import styles from "./Card1.module.css";
import icoEditar from "../../../utils/assets/dependentes/lapis.png";
import icoConfirmar from "../../../utils/assets/perfil/done.png";

const CardVisao = ({ icone }) => {
    const [iconeEditar, setIconeEditar] = useState(icoEditar);
    const [isEditable, setIsEditable] = useState(false);
    const [inputValue, setInputValue] = useState("rua haddock lobo,595 Cerqueira César, São Paulo - SP, 01414-001");

    const habilitarModoEditar = () => {
        setIsEditable(!isEditable); // Alterna o estado de edição
        setIconeEditar(isEditable ? icoEditar : icoConfirmar); // Alterna o ícone entre lápis e confirmar
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Atualiza o valor do input conforme o usuário digita
    };

    return (
        <div className={styles["Card"]}>
            <div className={styles["Information"]}>
                <p className={styles["nameDependent"]}>Bruno Henrique</p>
                <p className={styles["Status"]}>Voltando p casa</p>
            </div>
            <div className={styles["exitBox"]}>
                <div className={styles['icone']}>
                    <img className={styles['icone-img']} src={icone} alt="ico" />
                </div>
                <div className={styles["div-endereco-exit"]}>
                    {isEditable ? (
                        <input 
                            className={styles["input-endereco-exit"]}
                            value={inputValue}
                            onChange={handleInputChange}
                            autoFocus
                        />
                    ) : (
                        <p className={styles["p-endereco-exit"]}>{inputValue}</p>
                    )}
                </div>
                <div className={styles["div-time-exit"]}>
                    <p className={styles["time-exit"]}>12:00</p>
                </div>
            </div>
            <div className={styles["BoxArrow"]}>
                <img className={styles["Arrow"]} src="" alt="" />
            </div>
            <div className={styles["returnBOX"]}>
                <div className={styles["img-status-return"]}>
                    <img src="" alt="" />
                </div>
            </div>
            <div className={styles["footer"]}>
                <img 
                    className={styles["img-editar"]}
                    src={iconeEditar}
                    onClick={habilitarModoEditar}
                    alt="Editar"
                />
                <p>Ver Dependente</p>
            </div>
        </div>
    );
};

export default CardVisao;
