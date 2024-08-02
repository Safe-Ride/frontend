import React, { useState } from 'react';
import style from './Modal.module.css';

const Modal = ({ isOpen, onClose, nome }) => {
    const [selectedLegenda, setSelectedLegenda] = useState(null);

    const handleLegendaClick = (index) => {
        setSelectedLegenda(index);
    };

    if (!isOpen) return null;

    return (
        <div className={style['modal-overlay']} onClick={onClose}>
            <div className={style["modal-content"]} onClick={(e) => e.stopPropagation()}>
                <h3 className={style['titulo']}>Alterar status</h3>

                <div
                    className={style["legenda"]}
                    style={{
                        backgroundColor: selectedLegenda === 0 ? '#F2C718' : '',
                        borderRadius: '16px'
                    }}
                    onClick={() => handleLegendaClick(0)}
                >
                    <p className={style["leg-0"]}></p>
                    <p>{nome}</p>
                </div>

                <div
                    className={style["legenda"]}
                    style={{
                        backgroundColor: selectedLegenda === 1 ? '#F2C718' : '',
                        borderRadius: '16px'
                    }}
                    onClick={() => handleLegendaClick(1)}
                >
                    <p className={style["leg-1"]}></p>
                    <p>Na van!</p>
                </div>

                <div
                    className={style["legenda"]}
                    style={{
                        backgroundColor: selectedLegenda === 2 ? '#F2C718' : '',
                        borderRadius: '16px'
                    }}
                    onClick={() => handleLegendaClick(2)}
                >
                    <p className={style["leg-2"]}></p>
                    <p>Não compareceu!</p>
                </div>

                <div
                    className={style["legenda"]}
                    style={{
                        backgroundColor: selectedLegenda === 3 ? '#F2C718' : '',
                        borderRadius: '16px'
                    }}
                    onClick={() => handleLegendaClick(3)}
                >
                    <p className={style["leg-3"]}></p>
                    <p>Não irá!</p>
                </div>

                <div
                    className={style["legenda"]}
                    style={{
                        backgroundColor: selectedLegenda === 4 ? '#F2C718' : '',
                        borderRadius: '16px'
                    }}
                    onClick={() => handleLegendaClick(4)}
                >
                    <p className={style["leg-4"]}></p>
                    <p>A caminho!</p>
                </div>

                <button className={style["login-button"]} onClick={onClose}>
                    Salvar
                </button>
            </div>
        </div>
    );
};

export default Modal;
