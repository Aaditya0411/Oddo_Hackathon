import axios from "axios";

const api = axios.create({
  baseURL: "https://traveloop-pf2s.onrender.com",
});

export default api;