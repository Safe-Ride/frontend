import axios from "axios";

const apiPerfil = axios.create({
  baseURL: "http://localhost:8080/usuarios/perfil/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiPerfil;
