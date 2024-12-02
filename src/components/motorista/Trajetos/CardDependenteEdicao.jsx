import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import Modal from "react-modal";
import api from "../../../api";
import Imagem from "../../../utils/assets/perfil/usuario.png";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import styles from "./CardDependenteEdicao.module.css";

const CardDependenteEdicao = ({ dependente, rotaId, atualizarTela }) => {
  const [modalAberto, setModalAberto] = useState(false)
  const handleImageError = (e) => {
    e.target.src = Imagem;
  };


  Modal.setAppElement("#root");

  const excluir = () => {
    api.delete(`/rotas/${rotaId}`).then(() => {
      alert("Dependente removido do trajeto")
    }).catch((err) => {console.error(err)})
    atualizarTela(true)
    fecharModal()
  }

  const mostrarModal = () => {
    setModalAberto(true)
  }

  const fecharModal = () => {
    setModalAberto(false)
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["legenda"]}>
        <img
          src={FotoPerfil(dependente.foto)}
          alt={`Foto de ${dependente.nome}`}
          onError={handleImageError}
          className={styles["foto"]}
        />
        <h3 className={styles["text"]}>{dependente.nome}</h3>
        <i
          className="fas fa-x"
          style={{ color: "red", fontWeight: "bold" }}
          onClick={mostrarModal}
          
        ></i>
        <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal} 
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          },
          content: {
            width: "80%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Confirmação</h2>
        <p>Tem certeza de que deseja remover este dependente do trajeto?</p>
        <button onClick={fecharModal}>Cancelar</button>
        <button onClick={excluir} className={styles["confirm"]}>Confirmar</button>
      </Modal>
      </div>
    </div>
  );
};

export default CardDependenteEdicao;
