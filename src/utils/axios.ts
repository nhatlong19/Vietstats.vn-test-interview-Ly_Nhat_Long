import axios from "axios";

const apiURL = "https://66fede042b9aac9c997da806.mockapi.io";

const axiosBase = axios.create({ baseURL: apiURL });

export { axiosBase };
