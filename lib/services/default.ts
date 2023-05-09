import axios from "axios";

const axiosClassic = axios.create({
  baseURL: "http://localhost:4200/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClassic;
