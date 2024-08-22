import React, { useState } from "react";
import { Box } from "@mui/material";
import { validationLoginSchema } from "../common/formValidation/Validation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BtnRegister } from "../common/ContainerFullWidth";
import { UsersApi } from "../api/auth";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../context/GlobalAuth";
import "../styles/theme.css"

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  const initialValuesLogin = {
    username: "",
    password: "",

  };

  const handleSubmitLogin = async (values, { setSubmitting }) => {
    console.log('Form data', values);
    try {
      const response = await UsersApi.login(values);

      if (response && response.jwt && response.username) {
        console.log('Login successful:', response);
        
        login(response.jwt, response.username);
        // Guardar los datos en localStorage
        // localStorage.setItem('token', response.jwt);
        // localStorage.setItem('username', response.username);
        swal(
          '¡Inicio de sesión exitoso!',
          'Has iniciado sesión correctamente',
          'success'
        );

        // Redirigir a la página de inicio después de un segundo
        setTimeout(() => {
          navigate('/blog');
        }, 1000);
      } else {
        console.error('Inicio de sesión fallido:', response);
        swal(
          'Error al iniciar sesión',
          response.message || 'Credenciales incorrectas',
          'error'
        );
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      swal(
        'Error al iniciar sesión',
        error.message || 'Ocurrió un error',
        'error'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationLoginSchema}
      onSubmit={handleSubmitLogin}
    >
      {({ isSubmitting }) => (
        <Form style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", gap: "40px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
            <label htmlFor="username" className="labeles" style={{fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif", }}>Username</label>
            <Field type="text" id="username" name="username"  style={{borderRadius:"10px", height:"2rem", padding:"10px"}} />
            <ErrorMessage name="username" component="div" style={{ color: "red", fontWeight: "500",fontFamily:"'Roboto', sans-serif" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
            <label htmlFor="password"  className="labeles" style={{fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif"}}>Contraseña</label>
            <Field type="password" id="password" name="password" style={{borderRadius:"10px", height:"2rem",padding:"10px",fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif"}}/>
            <ErrorMessage name="password" component="div" style={{ color: "red", fontWeight: "500",fontSize:"1rem",fontFamily:"'Roboto', sans-serif" }} />
          </Box>
          <BtnRegister type="submit" disabled={isSubmitting}>
            Iniciar sesión
          </BtnRegister>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
