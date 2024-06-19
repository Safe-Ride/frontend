import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import NavBarTop from "../../components/NavBar/NavBarTop";
import styles from "./Cadastro.module.css";

function Cadastro() {
  const navigate = useNavigate();

  return (
    <>
      <NavBarTop titulo={"CADASTRO"} />
      <div className={styles["grid-container"]}>
        <div className={styles["card"]}>
          <Logo tamanho={"logo-grande"} />
          <p>Conte-nos um pouco mais sobre você</p>
          <button
            className={styles["btn-light"]}
            onClick={() => navigate("/cadastro/responsavel")}
          >
            Sou Responsável
          </button>
          <button
            className={styles["btn-dark"]}
            onClick={() => navigate("/cadastro/motorista")}
          >
            Sou Motorista
          </button>
          <a href="/login">Já tem uma conta? Entrar!</a>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
