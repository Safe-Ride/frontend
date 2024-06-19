import axios from "axios";

const apiLine = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:8080/pagamentos/renda-bruta-mes",
});

export default apiLine;
