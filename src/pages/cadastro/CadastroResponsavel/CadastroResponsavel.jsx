import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import Bullet from "../Bullet/Bullet";
import styles from "../Cadastro.module.css";
import DadosPessoais from "../DadosPessoais/DadosPessoais";
import Endereco from "../Endereco/Endereco";
import Dependente from "./Dependente/Dependente";

function CadastroResponsavel() {
  const navigate = useNavigate();

  const [estagioCadastro, setEstagioCadastro] = useState(1);

  const [dados, setDados] = useState({});
  const [bullet1, setBullet1] = useState(true);
  const [bullet2, setBullet2] = useState(false);
  const [bullet3, setBullet3] = useState(false);

  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);

  const handleSave = () => {
    console.log(dados);
    let idUsuario = 0;
    const clienteRequest = {
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha,
      cpf: dados.cpf,
      telefone: dados.telefone,
      dataNascimento: dados.dataNascimento,
      tipo: "RESPONSAVEL",
    };

    api
      .post(`/usuarios`, clienteRequest)
      .then((res) => {
        const { data } = res;
        console.log("Resposta: " + data["id"]);
        idUsuario = data.id;

        const enderecoRequest = {
          latitude: dados.latitude,
          longitude: dados.longitude,
          cep: dados.cep,
          numero: dados.numero,
          complemento: dados.complemento,
          usuarioId: idUsuario,
        };
        api
          .post(`/enderecos`, enderecoRequest)
          .then((res) => {
            const dependenteRequest = {
              nome: dados.nomeDependente,
              dataNascimento: dados.dataNascimento,
              serie: dados.serie,
              responsavelId: idUsuario,
              escolaId: dados.escola,
            };

            api
              .post(`/dependentes`, dependenteRequest)
              .then((res) => {
                navigate("/login");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    if (data.action === "continuar") {
      delete data.action;
      console.log("continuando");
      atualizarEstagioCadastro();
      setDados({ ...dados, ...data });
    } else if (data.action === "salvar") {
      setDados({ ...dados, ...data });
      console.log("salvando");
      handleSave();
      console.log(dados);
    }
    console.log(data);
  };

  const idsEstagios = [setBullet1, setBullet2, setBullet3];
  const formularios = [setForm1, setForm2, setForm3];

  const atualizarEstagioCadastro = () => {
    formularios[estagioCadastro - 1](false);

    setEstagioCadastro(estagioCadastro + 1);
    idsEstagios[estagioCadastro](true);
    formularios[estagioCadastro](true);
  };

  return (
    <>
      <NavBarTop titulo="CADASTRO" />

      <ol>
        <Bullet titulo={"Dados Pessoais"} ativo={bullet1} />
        <Bullet titulo={"Endereço"} ativo={bullet2} />
        <Bullet titulo={"Dependente"} ativo={bullet3} />
      </ol>
      <div className={styles["grid-container"]}>
        <DadosPessoais onSubmit={onSubmit} show={form1} />
        <Endereco onSubmit={onSubmit} show={form2} />
        <Dependente onSubmit={onSubmit} show={form3} />
      </div>
    </>
  );
}

export default CadastroResponsavel;
