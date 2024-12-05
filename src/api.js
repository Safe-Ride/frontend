import axios from "axios";
const token = sessionStorage.getItem("token");
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
