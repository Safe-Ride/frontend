import React from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "../../../components/Formulario/Formulario";
import styles from "../Cadastro.module.css";

function DadosPessoais({ onSubmit, show }) {

  const navigate = useNavigate()

  const handleSubmit = (data) => {
    data.action = "continuar"
    onSubmit(data);
  };

  const onBack = () => {
    navigate("/cadastrar")
  }

  const dadosPessoaisFields = [
    {
      name: "nome",
      label: "Nome",
      type: "text",
      placeholder: "Digite seu nome"
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "Digite seu e-mail"
    },
    {
      name: "telefone",
      label: "Telefone",
      type: "tel",
      placeholder: "(xx) xxxxx-xxxx"
    },
    {
      name: "cpfDataContainer",
      type: "container",
      children: [
        {
          name: "cpf",
          label: "CPF",
          type: "text",
          placeholder: "Digite seu CPF",
          className: styles["input-medium-left"]
        },
        {
          name: "dataNascimento",
          label: "Data de Nascimento",
          type: "date",
          placeholder: "",
          className: styles["input-medium-right"]
        }
      ]
    },
    {
      name: "senhaContainer",
      type: "container",
      children: [
        {
          name: "senha",
          label: "Senha",
          type: "password",
          placeholder: "Digite sua Senha",
          className: styles["input-medium-left"]
        },
        {
          name: "confirmaSenha",
          label: "Confirmar Senha",
          type: "password",
          placeholder: "Digite sua Senha",
          className: styles["input-medium-right"]
        }
      ]
    }
  ];

  if (show) {
  return (
    
    <>
      <Formulario show={show} onBack={onBack} onSubmit={handleSubmit} fields={dadosPessoaisFields} action={{name: "Avançar"}} />
    </>
  );
}
}

export default DadosPessoais;
