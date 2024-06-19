import React from "react";
import Formulario from "../../../../components/Formulario/Formulario";
import styles from "../../Cadastro.module.css";

function Veiculo({ onSubmit, show }) {

  const handleSubmit = (data) => {
    data.action = "salvar"
    onSubmit(data);
  };

  const veiculoFields = [
    {
      name: "cnpj",
      label: "CNPJ",
      type: "text",
      placeholder: "Digite o CNPJ"
    },
    {
      name: "nomeFantasia",
      label: "Nome Fantasia",
      type: "text",
      isDisabled: true
    },
    {
      name: "placaCnhContainer",
      type: "container",
      children: [
        {
            name: "placa",
            label: "Placa",
            placeholder: "Digite a placa",
            className: styles["input-medium-left"]
        },
        {
            name: "cnh",
            label: "CNH",
            placeholder: "Digite a CNH",
            className: styles["input-medium-right"]
        }
      ]
    },
    {
      name: "crmPfCrmcContainer",
      type: "container",
      children: [
        {
            name: "crmPf",
            label: "CRM/PF",
            placeholder: "Digite a CRM",
            className: styles["input-medium-left"]
        },
        {
            name: "crmc",
            label: "CRMC",
            placeholder: "Digite a CRMC",
            className: styles["input-medium-right"]
        }
      ]
    }
  ];

  return (
    <>
      <Formulario show={show} onSubmit={handleSubmit} fields={veiculoFields} action={{name: "Concluir"}} />
    </>
  );
}

export default Veiculo;
