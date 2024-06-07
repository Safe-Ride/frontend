import React, { useState } from "react";
import { handleInputChange } from "../../../handlers";
import styles from "../Cadastro.module.css";

function DadosPessoais({ setDadosPessoais }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  return (
    <>
      <ol>
        <li className={styles["bullet-active"]}>Dados Pessoais</li>
        <li className={styles["bullet-inactive"]}>Endereço</li>
        <li className={styles["bullet-inactive"]}>Dependente</li>

        <form action="" className={styles["form"]}>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            aria-label="Nome"
            placeholder="Digite seu nome"
            onChange={(e) => handleInputChange(e, setNome)}
          />
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            aria-label="E-mail"
            placeholder="Digite seu e-mail"
            onChange={(e) => handleInputChange(e, setEmail)}
          />
          <label htmlFor="">Telefone</label>
          <input
            type="tel"
            aria-label="Telefone"
            placeholder="(xx) xxxxx-xxxx"
            onChange={(e) => handleInputChange(e, setTelefone)}
          />
          <div className={styles["inner-grid"]}>
            <div className={styles["input-medium-left"]}>
              <label htmlFor="">CPF</label>
              <input
                type="text"
                aria-label="CPF"
                placeholder="Digite seu CPF"
                onChange={(e) => handleInputChange(e, setCpf)}
              />
            </div>
            <div className={styles["input-medium-right"]}>
              <label htmlFor="">Nascimento</label>
              <input
                className={styles["input-medium-right"]}
                type="date"
                aria-label="Data de Nascimento"
                onChange={(e) => handleInputChange(e, setDataNascimento)}
              />
            </div>
          </div>
          <div className={styles["inner-grid"]}>
            <div className={styles["input-medium-left"]}>
              <label htmlFor="">Senha</label>
              <input
                type="password"
                aria-label="Senha"
                placeholder="********"
                onChange={(e) => handleInputChange(e, setSenha)}
              />
            </div>
            <div className={styles["input-medium-right"]}>
              <label htmlFor="">Confirmar</label>
              <input
                className={styles["input-medium-right"]}
                type="password"
                placeholder="********"
                aria-label="Confirmar Senha"
                onChange={(e) => handleInputChange(e, setConfirmaSenha)}
              />
            </div>
          </div>
          <div className={styles["inner-grid"]}>
            <button className={styles["btn-dark"]}>Voltar</button>

            <button
              className={styles["btn-light"]}
              type="submit"
              onSubmit={(e) => handleInputChange={e, setDadosPessoais}}
            >
              Avançar
            </button>
          </div>
        </form>
      </ol>
    </>
  );
}

export default DadosPessoais;
