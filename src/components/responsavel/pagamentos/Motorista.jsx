import React from "react";
import styles from "./Motorista.module.css";
import FormatarData from "../../../utils/functions/FormatarData";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import Imagem from "../../../utils/assets/perfil/usuario.png";

const Motorista = ({ motorista, pagamento }) => {

  const handleImageError = (e) => {
    e.target.src = Imagem;
  } 

  // console.log(motorista);
  return (
    <div className={styles["motorista"]}>
      <img src={FotoPerfil(motorista.foto)} alt="" className={styles["foto"]} onError={handleImageError} />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{motorista.nome}</h2>
        <p className={styles["ultimo-pagamento"]}>
          {FormatarData(pagamento.dataVencimento)} R${pagamento.valor},00
        </p>
      </div>
    </div>
  );
};

export default Motorista;
