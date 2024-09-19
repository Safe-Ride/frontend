import React, { useState } from 'react';
import styles from './Pesquisa.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function CampoPesquisa({ onSearch }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);

  const escolasFicticias = [
    'Escola A',
    'Escola B',
    'Escola C',
    'Escola D',
  ];

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleChange = (event) => {
    const novoTermo = event.target.value;
    setTermo(novoTermo);

    // Filtra os resultados com base no termo digitado
    const resultadosFiltrados = escolasFicticias.filter(escola =>
      escola.toLowerCase().includes(novoTermo.toLowerCase())
    );
    
    setResultados(resultadosFiltrados);
  };

  const handleSelection = (escola) => {
    setTermo(escola); // Atualiza o valor do input com o nome da escola selecionada
    closeModal(); // Fecha o modal
    onSearch(escola); // Envia o valor selecionado para o componente pai
  };

  return (
    <div>
      <input
        className={`${styles["barraPesquisa"]} ${termo ? styles["barraPesquisaSelected"] : ""}`}
        type="text"
        placeholder="Selecione uma escola..."
        value={termo}
        onClick={openModal}
        readOnly // Torna o campo não editável diretamente
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selecione uma escola"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <button onClick={closeModal} className={styles['buttom']}>
          X
        </button>
        <div className={styles['modal']}>
          <h3 className={styles['text']}>Selecione uma escola</h3>
          <input
            className={styles["barraPesquisa"]}
            type="text"
            value={termo}
            onChange={handleChange}
            placeholder="Pesquise uma escola..."
          />
          <ul>
            {resultados.map((escola, index) => (
              <li
                key={index}
                onClick={() => handleSelection(escola)} // Seleciona a escola ao clicar
                className={styles['resultadoItem']}
              >
                {escola}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default CampoPesquisa;
