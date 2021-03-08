import axios from "axios";
const API_KEY = "aca9901b145ed7dbc1e3e24972c75cd3"
const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public/",
});

api.interceptors.request.use((config) => {
    config.params = { apikey: API_KEY };
    return config;
  });

export default api;
