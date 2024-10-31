
import React from "react";
import styles from "./ButtomDownloadCsv.module.css";
import api from "../../../api";

const PagamentosGerais = () => {
  const baixarTrajetosCsv = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const motoristaId = sessionStorage.getItem("ID_USUARIO");

      const response = await api.get(
        `/pagamentos/baixar-pagamento-motorista/${motoristaId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );

      // Cria uma URL para o blob que será baixado em formato CSV
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);

      // Cria um link temporário para fazer o download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `PAGAMENTOS-MOTORISTA-${motoristaId}.csv`);
      document.body.appendChild(link);
      link.click(); // Simula o clique para iniciar o download

      // Limpa o link temporário após o download
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Erro ao baixar arquivo:", e.response?.data || e.message);
    }
  };

  return (
    <div className={styles["container"]}>
      <button className={styles["btn-download"]} onClick={baixarTrajetosCsv}>
      </button>
    </div>
  );
};

export default PagamentosGerais;
