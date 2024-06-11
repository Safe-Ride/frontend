import React from "react";
import Formulario from "../../../../components/Formulario/Formulario";

function Dependente({ onSubmit, show, escolas }) {
  const handleSubmit = (data) => {
    data.action = "salvar";
    onSubmit(data);
  };

  const dependenteFields = [
    {
      name: "nomeDependente",
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome do dependente"
    },
    {
      name: "dataNascimentoDependente",
      label: "Data de Nascimento",
      type: "date"
    },
    {
      name: "escola",
      type: "datalist",
      label: "Escola",
      options: [
        escolas.map((escola) => {
          return {
            name: escola.nome,
            value: escola.id
          }
        })
      ]
    },
    {
      name: "serie",
      type: "datalist",
      label: "Série",
      options: [
        {
          name: "",
          value: ""
        },
        {
          name: "1° Ano Fundamental",
          value: "1° Ano Fundamental"
        },
        {
          name: "2° Ano Fundamental",
          value: "2° Ano Fundamental"
        },
        {
          name: "3° Ano Fundamental",
          value: "3° Ano Fundamental"
        },
        {
          name: "4° Ano Fundamental",
          value: "4° Ano Fundamental"
        },
        {
          name: "5° Ano Fundamental",
          value: "5° Ano Fundamental"
        },
        {
          name: "6° Ano Fundamental",
          value: "6° Ano Fundamental"
        },
        {
          name: "7° Ano Fundamental",
          value: "7° Ano Fundamental"
        },
        {
          name: "8° Ano Fundamental",
          value: "8° Ano Fundamental"
        },
        {
          name: "9° Ano Fundamental",
          value: "9° Ano Fundamental"
        },
        {
          name: "1° Ano Ensino Médio",
          value: "1° Ano Ensino Médio"
        },
        {
          name: "2° Ano Ensino Médio",
          value: "2° Ano Ensino Médio"
        },
        {
          name: "3° Ano Ensino Médio",
          value: "3° Ano Ensino Médio"
        }
      ]
    }
  ];

  return (
    <>
      <Formulario
        show={show}
        onSubmit={handleSubmit}
        fields={dependenteFields}
        action={{ name: "Concluir" }}
      />
    </>
  );
}

export default Dependente;
