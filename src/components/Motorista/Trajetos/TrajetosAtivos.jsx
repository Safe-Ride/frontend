import React from "react";
import styles from "./TrajetosAtivos.module.css";
import CardAtivo from "./CardAtivo"

const TrajetosAtivos = ({ res, ativo }) => {
  const statusMap = {
    'NAO_INICIADO': 0,
    'INICIADO': 1,
    'NAO_IRA': 2,
    'NA_VAN': 3,
    'NA_ESCOLA': 4
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["title"]}>
        {ativo === 'INICIADO' ? `TRAJETO ATIVO: ${res?.escola?.nome || 'Desconhecido'}` : `NENHUM TRAJETO ATIVO`}
      </div>
      {ativo === 'INICIADO' && res?.dependentes?.length > 0 ? (
        res.dependentes.map((dependente, index) => (
          <CardAtivo
            key={index}
            nome={dependente.nome}
            hora={'12:00'}
            status={statusMap[dependente.status] || 0}
          />
        ))
      ) : (
        <div></div>
      )}

    </div>
  );
};

export default TrajetosAtivos;
