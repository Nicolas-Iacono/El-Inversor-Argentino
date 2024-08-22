import axios from "axios";
import { useGetFetch, postFetch, putFetch } from "./useFetch";
import API_BASE_URL from "./config";

const URL_USER = `${API_BASE_URL}/user`;


export const UsersApi = {
  getUsuarios: () => {
    return useGetFetch(`${URL_USER}/all`);
  },
  crearUsuario:async(user) => {
    try {
      const response = await axios.post(`${URL_USER}/registrar`, user);
      return response.data;
    } catch (error) {
      throw new Error("Error al crear usuario administrador", error);
    }
  },
  crearUserAdmin: async (adminUser) => {
    try {
      const response = await axios.post(`${URL_USER}/registrar-admin`, adminUser);
      return response.data;
    } catch (error) {
      throw new Error("Error al crear usuario administrador", error);
    }
  },
  login: async (user) => {
    try {
      const response = await axios.post(`${URL_USER}/login`, user);
      return response.data;
    } catch (error) {
      throw new Error("Error de login", error);
    }
  },
};

export default UsersApi;