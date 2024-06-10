import React, { useState } from "react";
import styles from "../../pages/cadastro/Cadastro.module.css";

function Formulario({ onSubmit, fields }) {
  // Use state to manage form data
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass form data to onSubmit prop function
  };

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
        } else {
          // Render individual fields as before
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
        <button className={styles["btn-dark"]}>Voltar</button>
        <button type="submit" className={styles["btn-light"]}>
          Avançar
        </button>
      </div>
    </form>
  );
}

export default Formulario;
