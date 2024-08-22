import React from 'react'
import { Formik } from 'formik';
import { validationSchema } from '../common/formValidation/Validation';
import { Form } from 'formik';
import { Box, Button } from '@mui/material';
import { Field } from 'formik';
import UsersApi from '../api/auth';
import { BtnRegister } from '../common/ContainerFullWidth';
const Register = () => {


  const initialValuesRegister = {
    username:"",
    firstname:"",
    lastname:"",
    email: "",
    password: "",
  };

 
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    setSubmitting(false);
    UsersApi.crearUserAdmin(values); // Corrected to pass `values`
  };
 


  return (
                <Formik
                  initialValues={initialValuesRegister}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", gap: "20px"}}>
                      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <label htmlFor="username" style={{fontSize:"1rem",fontFamily:"'Roboto', sans-serif"}}>Username</label>
                        <Field type="text" id="username" name="username" style={{borderRadius:"10px", height:"2rem",padding:"10px",fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif"}}/>
                    
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <label htmlFor="firstname" style={{fontSize:"1rem",fontFamily:"'Roboto', sans-serif"}}>Firstname</label>
                        <Field type="text" id="firstname" name="firstname" style={{borderRadius:"10px", height:"2rem",padding:"10px",fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif"}} />
                    
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <label htmlFor="lastname" style={{fontSize:"1rem",fontFamily:"'Roboto', sans-serif"}}>Lastname</label>
                        <Field type="text" id="lastname" name="lastname" style={{borderRadius:"10px", height:"2rem",padding:"10px",fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif"}}/>
                    
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <label htmlFor="email" style={{fontSize:"1rem",fontFamily:"'Roboto', sans-serif"}}>Correo Electrónico</label>
                        <Field type="email" id="email" name="email" style={{borderRadius:"10px", height:"2rem",padding:"10px",fontSize:"1rem",fontFamily:"'Roboto', sans-serif"}}/>
                    
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <label htmlFor="password" style={{fontSize:"1rem",fontFamily:"'Roboto', sans-serif"}}>Contraseña</label>
                        <Field type="password" id="password" name="password" style={{borderRadius:"10px", height:"2rem",padding:"10px",fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif"}}/>
                        
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
                        <label htmlFor="confirmPassworde" style={{fontSize:"1rem",fontFamily:"'Roboto', sans-serif"}}>Repetir Contraseña</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" style={{borderRadius:"10px", height:"2rem",padding:"10px",fontSize:"1.2rem",fontFamily:"'Roboto', sans-serif"}}/>
                        
                      </Box>
                      <BtnRegister type="submit" disabled={isSubmitting}>
                        registrarse
                      </BtnRegister>
                    </Form>
                  )}
                </Formik>
  )

}

export default Register