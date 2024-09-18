import React, { useState } from "react";
import styles from "./Pesquisa.module.css";

const Pesquisa = ({ setTermoPesquisa }) => {
  const [showModal, setShowModal] = useState(false);
  const [escolaSelecionada, setEscolaSelecionada] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEscolaChange = (e) => {
    setEscolaSelecionada(e.target.value);
  };

  return (
    <div className={styles["pesquisa"]}>
      <input
        id={styles["ipt_pesquisa"]}
        placeholder="Pesquisar"
        onChange={(e) => setTermoPesquisa(e.target.value)}
      />
      <button id={styles["btn_filtro"]} onClick={toggleModal}></button>

      {showModal && (
        <div className={styles["fundo-modal"]}>
          <div className={styles["modal"]}>
            <h2>Escola</h2>
            <select value={escolaSelecionada} onChange={handleEscolaChange}>
              <option value="">Selecione uma escola</option>
              <option value="Escola 1">Escola 1</option>
              <option value="Escola 2">Escola 2</option>
              <option value="Escola 3">Escola 3</option>
              <option value="Escola 4">Escola 4</option>
            </select>
            <button onClick={toggleModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pesquisa;
