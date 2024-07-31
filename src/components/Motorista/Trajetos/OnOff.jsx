import React, { useState } from 'react';
import style from './OnOff.module.css'

const OnOff = () => {
    const [ligado, setLigado] = useState(false);

    const alternarEstado = () => {
        setLigado(prevLigado => !prevLigado);
    };

    return (
        <label className={style['switch']}>
            <input type="checkbox" checked={ligado} onChange={alternarEstado} />
            <span className={style["slider"]}></span>
        </label>
    );
};

export default OnOff;
