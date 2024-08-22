import React from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useAuth } from '../../context/GlobalAuth'


const UseAxiosInterceptors = () => {
    const history = useHistory();
    const { logout } = useAuth();

    axios.interceptors.response.use(
      response => response,
      error => {
          if (error.response.status === 401) {
              // si el token expiro cierra sesion y redirige a login
              logout();
              history.push('/auth');
          }
          return Promise.reject(error);
      }
  );
};

export default UseAxiosInterceptors