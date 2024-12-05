import React from "react";
import styles from "./Card1.module.css";
import icoCasa from "../../../utils/assets/dependentes/casa.png";
import icoEscola from "../../../utils/assets/dependentes/escola.png";
import setaAmarela from "../../../utils/assets/dependentes/Arrow 2.png";
import { useNavigate } from "react-router-dom";

const CardVisao = ({ id, nomeDependente, status, enderecoSaida, horarioSaida, enderecoRetorno, horarioRetorno }) => {
  const navigate = useNavigate();


  const statusConfig = {
    "Voltando para casa": {
      firstIcon: icoEscola,
      firstAddress: enderecoRetorno,
      firstTime: horarioSaida,
      secondIcon: icoCasa,
      secondAddress: enderecoSaida,
      secondTime: horarioRetorno,
    },
    "Indo para escola": {
      firstIcon: icoCasa,
      firstAddress: enderecoSaida,
      firstTime: horarioSaida,
      secondIcon: icoEscola,
      secondAddress: enderecoRetorno,
      secondTime: horarioRetorno,
    },
    "Na escola": {
      firstIcon: icoCasa,
      firstAddress: enderecoSaida,
      firstTime: horarioSaida,
      secondIcon: icoEscola,
      secondAddress: enderecoRetorno,
      secondTime: horarioRetorno,
    },
    "Em casa": {
      firstIcon: icoEscola,
      firstAddress: enderecoRetorno,
      firstTime: horarioSaida,
      secondIcon: icoCasa,
      secondAddress: enderecoSaida,
      secondTime: horarioRetorno,
    }
  };

  const defaultConfig = {
    firstIcon: '',
    firstAddress: '',
    firstTime: '',
    secondIcon: '',
    secondAddress: '',
    secondTime: ''
  };
  const { firstIcon, firstAddress, firstTime, secondIcon, secondAddress, secondTime } = statusConfig[status] || defaultConfig;


  // const { firstIcon, firstAddress, firstTime, secondIcon, secondAddress, secondTime } = statusConfig[status];

  return (
    <div className={styles["Card"]}>
      <div className={styles["Information"]}>
        <p className={styles["nameDependent"]}>{nomeDependente}</p>
        <p className={styles["Status"]}>{status}</p>
      </div>

      {/* Primeira seção com o primeiro ícone e endereço */}
      <div className={styles["exitBox"]}>
        <div className={styles["icone"]}>
          <img className={styles["icone-img"]} src={firstIcon} alt="Ícone" />
        </div>
        <div className={styles["div-endereco-exit"]}>
          <p className={styles["p-endereco-exit"]}>{firstAddress}</p>
        </div>
        <div className={styles["div-time-exit"]}>
          <p className={styles["time-exit"]}>{firstTime}</p>
        </div>
      </div>

      {/* Seta entre os dois ícones */}
      <div className={styles["BoxArrow"]}>
        <img className={styles["Arrow"]} src={setaAmarela} alt="Seta" />
      </div>

      {/* Segunda seção com o segundo ícone e endereço */}
      <div className={styles["returnBox"]}>
        <div className={styles["icone"]}>
          <img className={styles["icone-img"]} src={secondIcon} alt="Ícone" />
        </div>
        <div className={styles["div-endereco-return"]}>
          <p className={styles["p-endereco-return"]}>{secondAddress}</p>
        </div>
        <div className={styles["div-time-return"]}>
          <p className={styles["time-return"]}>{secondTime}</p>
        </div>
      </div>

      <div className={styles["footer"]}>
        <p onClick={() => navigate(`/responsavel/dependentes/${id}`)}>Ver Dependente</p>
      </div>
    </div>
  );
};

export default CardVisao;
