import axios from "axios";

const apiLogin = axios.create({
  baseURL: "http://54.91.88.99:8080/usuarios",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiLogin;
