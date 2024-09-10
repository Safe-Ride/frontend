import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import Bullet from "../Bullet/Bullet";
import styles from "../Cadastro.module.css";
import DadosPessoais from "../DadosPessoais/DadosPessoais";
import Endereco from "../Endereco/Endereco";
import Veiculo from "./Veiculo/Veiculo";

function CadastroMotorista() {
  const [estagioCadastro, setEstagioCadastro] = useState(1);

  const [dados, setDados] = useState({});
  const [bullet1, setBullet1] = useState(true);
  const [bullet2, setBullet2] = useState(false);
  const [bullet3, setBullet3] = useState(false);

  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);

  const navigate = useNavigate();

  const handleSave = () => {
    let idUsuario = 0;
    const clienteRequest = {
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha,
      cpf: dados.cpf,
      telefone: dados.telefone,
      dataNascimento: dados.dataNascimento,
      tipo: "MOTORISTA",
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
            const veiculoRequest = {
              placa: dados.placa,
              cnpj: dados.cnpj,
              cnh: dados.cnh,
              crm: dados.crm,
              crmc: dados.crmc,
              usuarioId: idUsuario,
            };

            api
              .post(`/transportes`, veiculoRequest)
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
    formularios[estagioCadastro-1](false);

    setEstagioCadastro(estagioCadastro + 1);
    idsEstagios[estagioCadastro](true);
    formularios[estagioCadastro](true);
  };

  const onBack = () => {
      voltarEstagioCadastro()
      console.log("voltando")
  }

  const voltarEstagioCadastro = () => {
    formularios[estagioCadastro-1](false);
    idsEstagios[estagioCadastro-1](false);

    setEstagioCadastro(estagioCadastro - 1);
    idsEstagios[estagioCadastro-2](true);
    formularios[estagioCadastro-2](true);
  }

  return (
    <>
      <NavBarTop titulo="CADASTRO" />

      <ol>
        <Bullet titulo={"Dados Pessoais"} ativo={bullet1} />
        <Bullet titulo={"Endereço"} ativo={bullet2} />
        <Bullet titulo={"Veículo"} ativo={bullet3} />
      </ol>
      <div className={styles["grid-container"]} id={"formContainer"}>
        <DadosPessoais onBack={onBack} onSubmit={onSubmit} show={form1} />
        <Endereco onBack={onBack}onSubmit={onSubmit} show={form2} />
        <Veiculo onBack={onBack}onSubmit={onSubmit} show={form3} />
      </div>
    </>
  );
}

export default CadastroMotorista;
