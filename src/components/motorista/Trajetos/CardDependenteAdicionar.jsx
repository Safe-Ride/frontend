import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import Modal from "react-modal";
import api from "../../../api";
import Imagem from "../../../utils/assets/perfil/usuario.png";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import styles from "./CardDependenteAdicionar.module.css";

const CardDependenteAdicionar = ({ dependente, atualizarTela, trajeto }) => {
  const [modalAberto, setModalAberto] = useState(false)
  const handleImageError = (e) => {
    e.target.src = Imagem;
  };


  Modal.setAppElement("#root");

  const adicionar = () => {
    console.log(trajeto)
    const json = {
        trajetoId: trajeto.id,
        dependenteId: dependente.id,
        enderecoId: 0
      }
    
    if(trajeto.tipo === "IDA") {
        json.enderecoId = trajeto.escola.id
    } else if(trajeto.tipo === "VOLTA") {
        json.enderecoId = dependente.endereco.id
    }
    
    api.post(`/rotas`, json).then(() => {
      alert("Dependente adicionado ao trajeto")
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
          className="fas fa-check"
          style={{ color: "green", fontWeight: "bold" }}
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
        <p>Tem certeza de que deseja adicionar este dependente ao trajeto?</p>
        <button onClick={fecharModal}>Cancelar</button>
        <button onClick={adicionar} className={styles["confirm"]}>Confirmar</button>
      </Modal>
      </div>
    </div>
  );
};

export default CardDependenteAdicionar;
