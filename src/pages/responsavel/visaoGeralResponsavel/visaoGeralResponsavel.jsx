import React, { useEffect, useState } from "react";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import CardVisao from "../../../components/responsavel/visaoGeral/Card1";
import styles from "./visaoGeralResponsavel.module.css";


const fetchDependentes = async () => {
  return [
    {
      id: 1,
      nome: "BRUNO HENRIQUE",
      status: "Voltando para Casa",
      enderecoSaida: "Escola São Judas - São Paulo - SP",
      horarioSaida: "12:00",
      enderecoRetorno: "Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP",
      horarioRetorno: "13:00",
    },
    {
      id: 2,
      nome: "MARIA FERNANDA",
      status: "Indo para Escola",
      enderecoSaida: "Rua Augusta, 200 - Consolação, São Paulo - SP",
      horarioSaida: "07:30",
      enderecoRetorno: "Escola São Judas - São Paulo - SP",
      horarioRetorno: "08:00",
    },
    // Outros dependentes...
  ];
};



const VisaoGeralResponsavel = () => {
  const titulo = "Visão Geral";
  
  // Estado para armazenar os dados dos dependentes
  const [dependentes, setDependentes] = useState([]);

  // Simula a chamada de API para buscar os dependentes
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDependentes();
      setDependentes(data); // Armazena os dados recebidos no estado
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBarTop titulo={titulo} />
      {/* Div de contêiner para os cards */}
      <div className={styles["cardsContainer"]}>
        {/* Renderiza um CardVisao para cada dependente */}
        {dependentes.map((dependente, index) => (
          <CardVisao
            key={index}
            id={dependente.id}
            nomeDependente={dependente.nome}
            status={dependente.status}
            enderecoSaida={dependente.enderecoSaida}
            horarioSaida={dependente.horarioSaida}
            enderecoRetorno={dependente.enderecoRetorno}
            horarioRetorno={dependente.horarioRetorno}
          />
        ))}
      </div>
      <NavBarBot />
    </>
  );
};

export default VisaoGeralResponsavel;