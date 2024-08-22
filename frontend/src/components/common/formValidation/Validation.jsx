import React from 'react'
import * as Yup from 'yup';



export const validationLoginSchema = Yup.object({
    username: Yup.string()
      .required('El nombre de usuario es obligatorio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es obligatoria'),
  });

 export const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
      .required('El nombre de usuario es obligatorio'),
      firstname: Yup.string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
      .required('El nombre de usuario es obligatorio'),
      lastname: Yup.string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
      .required('El nombre de usuario es obligatorio'),
    email: Yup.string()
      .email('Correo electrónico inválido')
      .required('El correo electrónico es obligatorio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es obligatoria'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('La confirmación de la contraseña es obligatoria'),
  });