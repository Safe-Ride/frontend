import React from "react";
import styles from "./Responsavel.module.css";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import FormatarData from "../../../utils/functions/FormatarData";
import Imagem from "../../../utils/assets/perfil/usuario.png"
const Responsavel = ({ responsavel, pagamento }) => {
  
  const handleImageError = (e) => {
    e.target.src = Imagem;
  } 

  return (
    <div className={styles["responsavel"]}>
      <img
        src={FotoPerfil(responsavel.foto)}
        alt=""
        className={styles["foto"]}
        onError={handleImageError}
      />
      <div className={styles["campos"]}>
        <h2 className={styles["nome"]}>{responsavel.nome}</h2>
        <p className={styles["ultimo-pagamento"]}>
          {FormatarData(pagamento.dataVencimento)} R${pagamento.valor},00
        </p>
      </div>
    </div>
  );
};

export default Responsavel;
