import React from "react";
import Formulario from "../../../components/Formulario/Formulario";
import styles from "../Cadastro.module.css";

function Endereco({ onSubmit, show }) {

  const handleSubmit = (data) => {
    data.action = "continuar"
    onSubmit(data);
  };

  const enderecoFields = [
    {
      name: "cepNumeroContainer",
      type: "container",
      children: [
        {
          name: "cep",
          label: "CEP",
          type: "text",
          placeholder: "Digite o CEP",
          className: styles["input-medium-left"],
        },
        {
          name: "numero",
          label: "Número",
          type: "number",
          placeholder: "Digite o número",
          className: styles["input-medium-right"]
        }
      ]
    },
    {
      name: "complemento",
      label: "Complemento",
      type: "text",
      placeholder: "Digite o complemento"
    },
    {
      name: "logradouro",
      label: "Logradouro",
      type: "text",
      placeholder: "Rua Haddock Lobo",
      isDisabled: true
    },
    {
      name: "bairro",
      label: "Bairro",
      type: "text",
      placeholder: "Cerqueira César",
      isDisabled: true
    },
    {
      name: "ufCidadeContainer",
      type: "container",
      children: [
        {
          name: "uf",
          label: "UF",
          type: "text",
          placeholder: "SP",
          className: styles["input-small-left"],
          isDisabled: true
        },
        {
          name: "cidade",
          label: "Cidade",
          type: "text",
          placeholder: "São Paulo",
          className: styles["input-large-right"],
          isDisabled: true
        }
      ]
    }
  ];

  return (
    <>
      <Formulario show={show} onSubmit={handleSubmit} fields={enderecoFields} action={{name: "Avançar"}} />
    </>
  );
}

export default Endereco;
