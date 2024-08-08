import React, { useEffect, useState } from "react";
import api from "../../../../api";
import Formulario from "../../../../components/Formulario/Formulario";

function Dependente({ onSubmit, show, onBack }) {
  const [escolas, setEscolas] = useState([]);

  const handleSubmit = (data) => {
    data.action = "salvar";
    onSubmit(data);
  };

  const updateEscolas = () => {
    api.get(`/escolas`).then((res) => {
      const { data } = res;
      let escolasFields =
        data &&
        data.map((escola) => {
          return {
            name: escola.nome,
            value: escola.id,
          };
        });
      setEscolas(escolasFields);
      console.log(escolas);
    });
  };

  const dependenteFields = [
    {
      name: "nomeDependente",
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome do dependente",
    },
    {
      name: "dataNascimentoDependente",
      label: "Data de Nascimento",
      type: "date",
    },
    {
      name: "escola",
      type: "datalist",
      label: "Escola",
      options: escolas,
    },
    {
      name: "serie",
      type: "datalist",
      label: "Série",
      options: [
        {
          name: "",
          value: "",
        },
        {
          name: "1° Ano Fundamental",
          value: "1° Ano Fundamental",
        },
        {
          name: "2° Ano Fundamental",
          value: "2° Ano Fundamental",
        },
        {
          name: "3° Ano Fundamental",
          value: "3° Ano Fundamental",
        },
        {
          name: "4° Ano Fundamental",
          value: "4° Ano Fundamental",
        },
        {
          name: "5° Ano Fundamental",
          value: "5° Ano Fundamental",
        },
        {
          name: "6° Ano Fundamental",
          value: "6° Ano Fundamental",
        },
        {
          name: "7° Ano Fundamental",
          value: "7° Ano Fundamental",
        },
        {
          name: "8° Ano Fundamental",
          value: "8° Ano Fundamental",
        },
        {
          name: "9° Ano Fundamental",
          value: "9° Ano Fundamental",
        },
        {
          name: "1° Ano Ensino Médio",
          value: "1° Ano Ensino Médio",
        },
        {
          name: "2° Ano Ensino Médio",
          value: "2° Ano Ensino Médio",
        },
        {
          name: "3° Ano Ensino Médio",
          value: "3° Ano Ensino Médio",
        },
      ],
    },
  ];

  useEffect(() => {
    updateEscolas();
  });

  return (
    <>
      <Formulario
        show={show}
        onSubmit={handleSubmit}
        fields={dependenteFields}
        action={{ name: "Concluir" }}
        onBack={{onBack}}
      />
    </>
  );
}

export default Dependente;
