import axios from "axios";

const apiBar = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:8080/pagamentos/pagamentos-total-efetuados",
});

export default apiBar;
