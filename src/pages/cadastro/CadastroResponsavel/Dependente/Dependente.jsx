import React, { useState } from "react";
import Formulario from "../../../../components/Formulario/Formulario";

function Dependente({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const handleSubmit = (data) => {
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
      type: "date",
    },
    {
      name: "escola",
      label: "Escola",
      type: "text",
      placeholder: "Digite o nome da escola",
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
        }
      ]
    }
  ];

  return (
    <>
      <Formulario onSubmit={handleSubmit} fields={dependenteFields} action={{name: "Concluir"}} />
    </>
  );
}

export default Dependente;
