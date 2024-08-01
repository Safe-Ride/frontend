import React, { useState } from 'react';
import style from './OnOff.module.css';
import api from "../../../api";

const atualizaTrajeto = async (data) => {
    const dados = {
      "trajetoId": 0,
      "dependenteId": 0,
      "enderecoId": 0,
      "status": 'NAO_INICIADO'
    }
  
    try {
      const res = await api.patch('/trajetos/status', dados);
      console.log(res.data)
    } catch (e){
      console.error('Erro ao fazer o PATCH:', e)
    }
  }

const OnOff = ({info}) => {
    const [status, setStatus] = useState('INICIADO');

    const alternarEstado = () => {
        const novoStatus = status === 'INICIADO'?'NAO_INICIADO':'INICIADO';
        setStatus(novoStatus);
        atualizaTrajeto(info);
    };

    return (
        <label className={style['switch']}>
            <input type="checkbox" checked={status === 'NAO_INICIADO'} onChange={alternarEstado} />
            <span className={style["slider"]}></span>
        </label>
    );
};

export default OnOff;
