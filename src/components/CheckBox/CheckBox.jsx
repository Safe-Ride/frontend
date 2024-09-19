import React, { useState } from "react";
import styles from "./CheckBox.module.css";

const checkbox = () => {
    const [valueOn, setValueOn] = useState('');
    const handleChange = (event) => {
        setValueOn(event.target.value);
      };
    
    return(
<form>
      <label>
        <input
          type="radio"
          className={styles["checkbox"]}
          value="Ida"
          checked={valorSelecionado === 'Ida'}
          onChange={handleChange}
        />
        Ida
      </label>
      <label>
        <input
          type="radio"
          className={styles["checkbox"]}
          value="Volta"
          checked={valorSelecionado === 'Volta'}
          onChange={handleChange}
        />
        Volta
      </label>
      
    </form>
    )
}

export default checkbox;