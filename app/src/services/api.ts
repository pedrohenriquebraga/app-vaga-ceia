import axios from "axios";
import configs from "../../configs.json";

const api = axios.create({
  baseURL: configs.api_url,
});

export default api;