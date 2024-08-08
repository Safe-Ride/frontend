import React from "react";
import styles from "./ListDependente.module.css";
import Dependente from "./Dependente";

const ListDependente = () => {
  return (
    <div className={styles["list-dependente"]}>
      <Dependente></Dependente>
    </div>
  );
};

export default ListDependente;
