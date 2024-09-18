import React, { useState } from "react";
import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const [valorSelecionado, setValorSelecionado] = useState(false);

  const handleChange = () => {
    setValorSelecionado(!valorSelecionado);
  };

  return (
    <form>
      <label className={styles["container"]}>
        {props.sentido}
        <input
          type="checkbox"
          className={styles["checkbox"]}
          checked={valorSelecionado}
          onChange={handleChange}
        />
        <span className={styles["checkmark"]}></span>
      </label>
    </form>
  );
}

export default Checkbox;
