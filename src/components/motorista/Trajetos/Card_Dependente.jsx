import React, { useState } from "react";
import styles from "./Card_Dependente.module.css";

const Card_Dependente = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCptoClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`${styles["container"]} ${
        isExpanded ? styles["expanded"] : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles["campo-text"]}>
        <h3 className={styles["text-nome"]}>{props.nome}</h3>
        <h3 className={styles["text"]}>R:{props.responsavel}</h3>
      </div>
      {isExpanded && (
        <div className={styles["inputs"]}>
          <input
            type="text"
            className={styles["input-horario"]}
            placeholder="Digite algo..."
            onClick={handleCptoClick}
          />
          <input
            type="text"
            className={styles["input-endereco"]}
            placeholder="Digite algo..."
            onClick={handleCptoClick}
          />
        </div>
      )}
    </div>
  );
};

export default Card_Dependente;
