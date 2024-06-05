import axios from "axios";

const apiLine = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://661ef2e016358961cd932dc5.mockapi.io/usuarios",
});

export default apiLine;
