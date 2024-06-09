import api from "./../../api";
import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import Card4 from "../../components/Login/Card4";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import NavBarTop from "../../components/NavBar/NavBarTop";


const Clientes = () => {
    const[email, setEmail] = useState('')
    const titulo = "login"
    const[senha,setSenha] = useState('')
    const navigate = useNavigate();
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
        return (
    <div className={styles["login-page"]}>
      <h2>Digite suas credenciais para poder acessar nosso serviço</h2>
      <div className={styles["input-container"]}>
        <input 
          type="text" 
          className={styles["input-field"]} 
          placeholder="Email"
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
        />
      </div>
      <div className={styles["input-container"]}>
        <input 
          type="password" 
          className={styles["input-field"]} 
          placeholder="Senha"
          value={senha} 
          onChange={(event) => setSenha(event.target.value)} 
        />
      </div>
      <button className={styles["login-button"]} onClick={handleLogin}>Login</button>
      <div className={styles["bottom-links"]}>
        <p>Não possui uma conta?</p>
        <p>Esqueci minha senha</p>
      </div>
    </div>
  ); 
      </>
    );
  };
  
  export default Clientes;
  