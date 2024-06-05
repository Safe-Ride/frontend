import axios from "axios";

// const api = axios.create({
//   // baseURL: process.env.REACT_APP_API_URL,
//   baseURL: "https://661ef2e016358961cd932dc5.mockapi.io/usuarios",
// });

const apiDonut = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://661ef2e016358961cd932dc5.mockapi.io/musicas",
});

export default apiDonut;
