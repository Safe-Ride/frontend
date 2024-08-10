import React from 'react';
import style from './OnOff.module.css';
// import api from "../../../api";


const OnOff = ({ setAtivo, isAtivo }) => {
  // const atualizaTrajeto = async () => {
  //   const novoStatus = isAtivo === 'INICIADO' ? 'NAO_INICIADO' : 'INICIADO';
  //   const dados = {
  //     "trajetoId": 0,
  //     "dependenteId": 0,
  //     "enderecoId": 0,
  //     "status": novoStatus
  //   }
  //   const token = sessionStorage.getItem('token')
  
  //   try {
  //     const res = await api.patch('/trajetos/status', dados, {
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //         }
  //       });
  //     setAtivo(novoStatus)
  //     console.log(res.data)
  //   } catch (e) {
  //     console.error('Erro ao fazer o PATCH:', e)
  //   }
  // }

  const alterarValor = () => {
    const novoStatus = isAtivo === 'INICIADO' ? 'NAO_INICIADO' : 'INICIADO';
    setAtivo(novoStatus);
  };

  return (
    <label className={style['switch']}>
      <input type="checkbox" checked={isAtivo === 'INICIADO'} onChange={alterarValor} />
      <span className={style["slider"]}></span>
    </label>
  );
};

export default OnOff;
