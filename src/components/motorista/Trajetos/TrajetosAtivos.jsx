import React from "react";
import CardAtivo from "./CardAtivo";
import styles from "./TrajetosAtivos.module.css";

const TrajetosAtivos = ({ trajetoAtivo, statusTrajeto }) => {
  const statusMap = {
    NAO_INICIADO: 0,
    INICIADO: 1,
    NA_VAN: 2,
    NAO_IRA: 3,
    NA_ESCOLA: 4,
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
            hora={"12:00"}
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
