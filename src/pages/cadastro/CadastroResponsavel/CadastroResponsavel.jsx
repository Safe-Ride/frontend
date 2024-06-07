import React, { useState } from "react";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import DadosPessoais from "../DadosPessoais/DadosPessoais";

function CadastroResponsavel() {
  const [estagioCadastro, setEstagioCadasto] = useState(1);

  const [dadosPessoais, setDadosPessoais] = useState({})

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

  return (
    <>
      <NavBarTop titulo="CADASTRO" />
      <DadosPessoais />
    </>
  );
}

export default CadastroResponsavel;
