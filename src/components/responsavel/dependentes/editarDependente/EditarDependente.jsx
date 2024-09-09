import { useState } from "react";
import Formulario from "../../../Formulario/Formulario";
import NavBarBot from "../../../NavBar/NavBarBot";
import NavBarTop from "../../../NavBar/NavBarTop";
import styles from "./EditarDependente.module.css";
import api from "../../../../api";

const EditarDependente = () => {
  const titulo = "EDITAR DEPENDENTE";

  const [escolas, setEscolas] = useState([]);

  const handleSubmit = (data) => {
    data.action = "salvar";
    onsubmit(data);
  };

  const updateEscolas = () => {
    api.get(`/escolas`).then((res) => {
      const { data } = res;
      let escolasFields =
        data &&
        data.map((escola) => {
          return {
            name: escola.nome,
            value: escola.id,
          };
        });
      setEscolas(escolasFields);
      console.log(escolas);
    });
  };

  const dependenteFields = [
    {
      name: "nomeDependente",
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome do dependente",
    },
    {
      name: "dataNascimentoDependente",
      label: "Data de Nascimento",
      type: "date",
    },
    {
      name: "escola",
      type: "datalist",
      label: "Escola",
      options: escolas,
    },
    {
      name: "serie",
      type: "datalist",
      label: "Série",
      options: [
        {
          name: "",
          value: "",
        },
        {
          name: "1° Ano Fundamental",
          value: "1° Ano Fundamental",
        },
        {
          name: "2° Ano Fundamental",
          value: "2° Ano Fundamental",
        },
        {
          name: "3° Ano Fundamental",
          value: "3° Ano Fundamental",
        },
        {
          name: "4° Ano Fundamental",
          value: "4° Ano Fundamental",
        },
        {
          name: "5° Ano Fundamental",
          value: "5° Ano Fundamental",
        },
        {
          name: "6° Ano Fundamental",
          value: "6° Ano Fundamental",
        },
        {
          name: "7° Ano Fundamental",
          value: "7° Ano Fundamental",
        },
        {
          name: "8° Ano Fundamental",
          value: "8° Ano Fundamental",
        },
        {
          name: "9° Ano Fundamental",
          value: "9° Ano Fundamental",
        },
        {
          name: "1° Ano Ensino Médio",
          value: "1° Ano Ensino Médio",
        },
        {
          name: "2° Ano Ensino Médio",
          value: "2° Ano Ensino Médio",
        },
        {
          name: "3° Ano Ensino Médio",
          value: "3° Ano Ensino Médio",
        },
      ],
    },
  ];

  const dependente = {
    nome: "teste",
    dataNascimento: "2010-01-01",
    serie: dependenteFields[3].options[8].name,
    escola: "Escola Teste",
  };

  // useEffect(() => {
  //     updateEscolas();
  // });

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <Formulario
          show
          onSubmit={handleSubmit}
          fields={dependenteFields}
          action={{ name: "Concluir" }}
        />
        <NavBarBot />
      </div>
    </>
  );
};

export default EditarDependente;
