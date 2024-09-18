import React, { useState } from "react";
import styles from "./Cad_Trajeto.module.css";
import Checkbox from "../../../components/motorista/Trajetos/Checkbox";
import CampoPesquisa from "../../../components/motorista/Trajetos/Pesquisa";
import Card_Dependente from "../../../components/motorista/Trajetos/Card_Dependente";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";


const Cad_Trajeto = () => {
    const titulo = "trajetos";
    const [diaSelecionado, setDiaSelecionado] = useState("Segunda-feira"); // Estado para o dia selecionado
    const [escolaSelecionada, setEscolaSelecionada] = useState(""); // Estado para a escola selecionada

    const handleSearch = (termo) => {
        setEscolaSelecionada(termo); // Atualiza o estado com o termo selecionado
        console.log(`Escola selecionada: ${termo}`);
    };

    const handleChange = (event) => {
        setDiaSelecionado(event.target.value); // Atualiza o estado com o dia selecionado
    };

    return (
        <>
            <NavBarTop titulo={titulo} />
            <div className={styles["container"]}>
                <div className={styles["title"]}>
                    <h2>Adicionar novo trajeto</h2>
                </div>
                <div className={styles["escolha-escola"]}>
                    <h1 className={styles["text"]}>Escola do Trajeto:</h1>
                    <CampoPesquisa onSearch={handleSearch} />
                </div>
                <div className={styles["choices"]}>
                    <div className={styles["choice-item"]}>
                        <h1 className={styles["text"]}>Tipo do Trajeto:</h1>
                        <Checkbox value="ida" sentido="Ida" />
                        <Checkbox value="volta" sentido="Volta" />
                    </div>

                    <div className={styles["choice-item"]}>
                        <h1 className={styles["text"]}> Período: </h1>
                        <Checkbox value="manha" sentido="Manha" />
                        <Checkbox value="tarde" sentido="Tarde" />
                    </div>
                    <div className={styles["choice-item"]}>
                        <h1 className={styles["text"]}> Dia da semana: </h1>
                        <select id="dia-semana" value={diaSelecionado} onChange={handleChange}>
                            <option value="Segunda-feira">Segunda-feira</option>
                            <option value="Terça-feira">Terça-feira</option>
                            <option value="Quarta-feira">Quarta-feira</option>
                            <option value="Quinta-feira">Quinta-feira</option>
                            <option value="Sexta-feira">Sexta-feira</option>
                            <option value="Sábado">Sábado</option>
                            <option value="Domingo">Domingo</option>
                        </select>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <div className={styles["header"]}>
                        <div className={styles["title"]}>Clientes</div>
                        <input className={styles["search"]} type="text" placeholder="Pesquisar" />
                    </div>
                    {(escolaSelecionada ? (
                        <Card_Dependente nome="Danilo" responsavel="Lucas" />
                    ) : (
                        <h3>Selecione uma escola para buscar por clientes...</h3>
                    ))}

                </div>
                <div className={styles["btn-cadastro"]}>
                    <button className={styles["btn"]}>Cadastrar</button>
                </div>
            </div>
            < NavBarBot />
        </>
    );
}


export default Cad_Trajeto;
