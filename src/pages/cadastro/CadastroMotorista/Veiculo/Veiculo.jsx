import React, { useState } from "react";
import Formulario from "../../../../components/Formulario/Formulario";
import styles from "../../Cadastro.module.css";


function Veiculo({ onSubmit }) {
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
      name: "cnpj",
      label: "CNPJ",
      type: "text",
      placeholder: "Digite o CNPJ"
    },
    {
      name: "nomeFantasia",
      label: "Nome Fantasia",
      type: "text",
      disabled: true
    },
    {
      name: "naturezaJuridica",
      label: "Natureza Juridica",
      placeholder: "Transporte Escola",
      type: "text",
    },
    {
      name: "placaCnhContainer",
      type: "container",
      children: [
        {
            name: "placa",
            label: "Placa",
            placeholder: "Digite a placa",
            className: styles["input-medium-left"]
        },
        {
            name: "cnh",
            label: "CNH",
            placeholder: "Digite a CNH",
            className: styles["input-medium-right"]
        }
      ]
    },
    {
      name: "crmPfCrmcContainer",
      type: "container",
      children: [
        {
            name: "crmPf",
            label: "CRM/PF",
            placeholder: "Digite a CRM",
            className: styles["input-medium-left"]
        },
        {
            name: "crmc",
            label: "CRMC",
            placeholder: "Digite a CRMC",
            className: styles["input-medium-right"]
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

export default Veiculo;
