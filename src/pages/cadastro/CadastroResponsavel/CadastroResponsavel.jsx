import React, { useState } from "react";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import Bullet from "../Bullet/Bullet";
import styles from "../Cadastro.module.css";
import DadosPessoais from "../DadosPessoais/DadosPessoais";
import Endereco from "../Endereco/Endereco";
import Dependente from "./Dependente/Dependente";

function CadastroResponsavel() {

    const [estagioCadastro, setEstagioCadastro] = useState(1);

    const [dados, setDados] = useState({});
    const [bullet1, setBullet1] = useState(true);
    const [bullet2, setBullet2] = useState(false);
    const [bullet3, setBullet3] = useState(false);
  
    const [form1, setForm1] = useState(true);
    const [form2, setForm2] = useState(false);
    const [form3, setForm3] = useState(false);
  
    const onSubmit = (data) => {
      if (data.action === "continuar") {
        atualizarEstagioCadastro();
      } else if (data.action === "salvar") {
      }
      console.log(data);
    };
  
    const idsEstagios = [setBullet1, setBullet2, setBullet3];
    const formularios = [setForm1, setForm2, setForm3];
  
    const atualizarEstagioCadastro = () => {
      formularios[estagioCadastro-1](false)
  
      setEstagioCadastro(estagioCadastro + 1);
      idsEstagios[estagioCadastro](true)
      formularios[estagioCadastro](true)
    }
  
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
