import React from 'react';
import style from './OnOff.module.css';



const OnOff = ({ setAtivo, isAtivo }) => {

  const alterarValor = () => {
    const novoStatus = isAtivo === 'INICIADO' ? 'NAO_INICIADO' : 'INICIADO';
    setAtivo(novoStatus);
    sessionStorage.setItem('isAtivo', novoStatus);
  }

  return (
    <label className={style['switch']}>
      <input type="checkbox" checked={isAtivo === 'INICIADO'} onChange={alterarValor} />
      <span className={style["slider"]}></span>
    </label>
  );
};

export default OnOff;
