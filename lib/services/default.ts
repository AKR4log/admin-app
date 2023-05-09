import axios from "axios";

const axiosClassic = axios.create({
  baseURL: "https://api.ookat.kg/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClassic;
