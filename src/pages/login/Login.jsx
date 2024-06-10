import api from "./../../api";
import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom'; 
import NavBarTop from "../../components/NavBar/NavBarTop";


const titulo = "Entrar";
const Clientes = () => {
    const[email, setEmail] = useState('')
    const[senha,setSenha] = useState('')
    const navigate = useNavigate();

    const handleNavigate = () =>{
navigate("../cadastro/Cadastro")
    }
const handleLogin = async() => {
    try{
        const response = await api.post('/login',{
            email: email,
            senha: senha
        });
        if((await response).status === 200 && (await response).data && (await response).data.token){
            sessionStorage.setItem("token", response.data.token)
            sessionStorage.setItem("id", response.data.UserId)
            navigate('/home')
        }else{
            console.error('Resposta inesperada do servidor:', response);
        }

    } catch(error){
        console.error('Erro ao fazer login:', error);
    }
}
    return (
      <>
        <NavBarTop titulo={titulo} />
        <div className={styles["container"]}>
    <div className={styles["login-page"]}>
      <h3 className={styles["text-introduction"]}>Digite suas credenciais para poder acessar nosso serviço</h3>
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
      <button className={styles["login-button"]} onClick={handleLogin}>Entrar</button>
      </div>

      <div className={styles["bottom-links"]}>
        <p className={styles["links"]} onClick={handleNavigate}>Não possui uma conta?</p>
        <p className={styles["links"]} >Esqueci minha senha</p>
        
      </div>
    </div>
    </div>
      </>
    );
  };
  
  export default Clientes;
  