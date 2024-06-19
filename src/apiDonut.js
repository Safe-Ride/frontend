import axios from "axios";

const apiDonut = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://localhost:8080/pagamentos/pagamento-status",
});

export default apiDonut;
