import React from "react";
import CardAtivo from "./CardAtivo";
import styles from "./TrajetosAtivos.module.css";

const TrajetosAtivos = ({ trajetoAtivo, statusTrajeto }) => {
  const statusMap = {
    NAO_INICIADO: 0,
    INICIADO: 1,
    NAO_IRA: 2,
    INDO_PARA_ESCOLA: 3,
    VOLTANDO_PARA_CASA: 4,
    NA_ESCOLA: 5,
    CONVERSA_CRIADA: 6,
    EM_CASA: 7,
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["title"]}>
        {trajetoAtivo !== null
          ? `TRAJETO ATIVO: ${trajetoAtivo?.escola?.nome || "Desconhecido"}`
          : `NENHUM TRAJETO ATIVO`}
      </div>
      {trajetoAtivo !== null && trajetoAtivo?.rotas?.length > 0 ? (
        trajetoAtivo.rotas.map((rota, index) => (
          <CardAtivo
            key={index}
            nome={rota.dependente.nome}
            hora={rota.horario}
            status={statusMap[rota.status] || 0}
            rotaId={rota.id}
            dependenteId={rota.dependente.id}
            enderecoId={rota.endereco.id}
            statusTrajeto={statusTrajeto}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TrajetosAtivos;
