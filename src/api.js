import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${sessionStorage.token}`,
    'Content-Type': 'application/json'
  }
  // baseURL: "https://661ef2e016358961cd932dc5.mockapi.io/usuarios",
});

export default api;
