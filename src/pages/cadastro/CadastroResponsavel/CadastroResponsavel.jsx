import React, { useState } from "react";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import styles from "../Cadastro.module.css";
import Endereco from "../Endereco/Endereco";
function CadastroResponsavel() {
  const [estagioCadastro, setEstagioCadasto] = useState(1);

  const [dadosPessoais, setDadosPessoais] = useState({});

  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState(0);
  const [complemento, setComplemento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");

  const [nomeDependente, setNomeDependente] = useState("");
  const [dataNascimentoDependente, setDataNascimentoDependente] = useState("");
  const [escola, setEscola] = useState("");
  const [serie, setSerie] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

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

  return (
    <>
      <NavBarTop titulo="CADASTRO" />

      <ol>
        <li className={styles["bullet-active"]}>Dados Pessoais</li>
        <li className={styles["bullet-inactive"]}>Endereço</li>
        <li className={styles["bullet-inactive"]}>Dependente</li>
      </ol>
      <div className={styles["grid-container"]}>
        {/* <DadosPessoais onSubmit={onSubmit} /> */}
        <Endereco onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default CadastroResponsavel;
