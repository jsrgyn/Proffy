import axios from "axios";

const api = axios.create({
  baseURL: "http://128.104.101.1:3333",
});

export default api;
