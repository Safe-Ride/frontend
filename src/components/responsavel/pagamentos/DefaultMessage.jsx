import React from "react";
import styles from "./DefaultMessage.module.css";

const DefaultMessage = ({ tipo }) => {
  return (
    <div className={styles["default-message"]}>
      <p>Clique em um {tipo} para ver o histórico completo</p>
    </div>
  );
};

export default DefaultMessage;
