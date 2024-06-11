import apiLogin from "./../../apiLogin";
import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import NavBarTop from "../../components/NavBar/NavBarTop";

const titulo = "Entrar";
const Clientes = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await apiLogin.post(
        "/login",
        {
          email,
          senha,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYXJsb3NAZW1haWwuY29tIiwiaWF0IjoxNzE0NDUyMDk0LCJleHAiOjE3MTgwNTIwOTR9.Wc_k08Pidr5Fbrcsi3oV6i_rl1yANNCjZjderjGIKTENJ-d0KBcR1-ITsPyG5kbRQDyKPgv1Vrizcri8ACRYVA",
          },
        }
      );
      if (response.status === 200 && response.data && response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("id", response.data.UserId);

        if (response.data.tipo === "MOTORISTA") {
          navigate("/motorista/visao-geral");
        } else {
          navigate("/responsavel/visao-geral");
        }
      } else {
        console.error("Resposta inesperada do servidor:", response);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };
  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["login-page"]}>
          <h3 className={styles["text-introduction"]}>
            Digite suas credenciais para poder acessar nosso serviço
          </h3>
          <div className={styles["text-input"]}>
            <p>Email</p>
          </div>
          <div className={styles["input-container"]}>
            <input
              type="text"
              className={styles["input-field"]}
              placeholder="Digite seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles["text-input"]}>
            <p>Senha</p>
          </div>
          <div className={styles["input-container"]}>
            <input
              type="password"
              className={styles["input-field"]}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>

          <div className={styles["div-checkbox"]}>
            <input type="checkbox" className={styles["checkBox"]} id="" />
            <p>Manter Conectado</p>
          </div>

          <div className={styles["container-but"]}>
            <button className={styles["login-button"]} onClick={handleLogin}>
              Entrar
            </button>
          </div>
          <div className={styles["bottom-links"]}>
            <a href="/cadastro">Não possui uma conta? Cadastrar!</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;
