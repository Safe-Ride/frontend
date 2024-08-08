import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import styles from "../../pages/cadastro/Cadastro.module.css";
function Formulario({ show, onSubmit, fields, action, onBack }) {
  // Use state to manage form data
  const [formData, setFormData] = useState({});

  const cepApi = axios.create({
    baseURL: "https://api-publica.speedio.com.br",
  });

  const handleChange = (event) => {
    if (event.target.name === "cep" && event.target.value.length === 8) {
      api.get(`/enderecos/buscar-cep/${event.target.value}`).then((res) => {
        const { data } = res;
        document.getElementsByName("logradouro")[0].placeholder = data.logradouro;
        document.getElementsByName("bairro")[0].placeholder = data.bairro;
        document.getElementsByName("cidade")[0].placeholder = data.localidade;
        document.getElementsByName("uf")[0].placeholder = data.uf;
      });
    }
    if (event.target.name === "cnpj" && event.target.value.length === 14) {
      cepApi.get(`buscarcnpj?cnpj=${event.target.value}`).then((res) => {
        const { data } = res;

        let nome =
          data["NOME FANTASIA"].length > 0
            ? data["NOME FANTASIA"]
            : data["RAZAO SOCIAL"];
        document.getElementsByName("nomeFantasia")[0].placeholder = nome;
      });
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const navigate = useNavigate();

  if (show) {
    return (
      <form onSubmit={handleSubmit} className={styles["form"]}>
        {fields.map((field) => {
          if (field.type === "container") {
            return (
              <div key={field.name} className={styles["inner-grid"]}>
                {" "}
                {field.children.map((childField) => (
                  <React.Fragment key={childField.name}>
                    <label
                      htmlFor={childField.name}
                      className={childField.className}
                    >
                      {childField.label}
                    </label>
                    <input
                      type={childField.type}
                      aria-label={childField.label}
                      placeholder={childField.placeholder}
                      name={childField.name}
                      value={formData[childField.name] || ""}
                      onChange={handleChange}
                      className={childField.className || ""}
                      disabled={childField.isDisabled}
                    />
                  </React.Fragment>
                ))}
              </div>
            );
          } else if (field.type === "datalist") {
            return (
              <React.Fragment key={field.name}>
                <label htmlFor={field.name} className={field.className}>
                  {field.label}
                </label>
                <input
                  aria-label={field.label}
                  placeholder={field.placeholder}
                  list={field.name}
                  name={field.name}
                  onChange={handleChange}
                />
                <datalist
                  id={field.name}
                  onChange={handleChange}
                  name={field.name}
                >
                  {field.options.map((opt) => (
                    <option name={field.name} value={opt.value}>
                      {opt.name}
                    </option>
                  ))}
                </datalist>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={field.name}>
                <label htmlFor={field.name} className={field.className}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  aria-label={field.label}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className={field.className || ""}
                  disabled={field.isDisabled}
                />
              </React.Fragment>
            );
          }
        })}
        <div className={styles["inner-grid"]}>
          <button
            type="button"
            className={styles["btn-dark"]}
            onClick={() => onBack()}
          >
            Voltar
          </button>
          <button type="submit" className={styles["btn-light"]}>
            {action.name}
          </button>
        </div>
      </form>
    );
  }
  return null;
}

export default Formulario;
