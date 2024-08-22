import React, { useState, useEffect } from 'react';
import ContainerFullWidth from '../common/ContainerFullWidth';
import { Grid, Box, Typography, Button, IconButton } from '@mui/material';
import { AgregarArt } from '../common/ContainerFullWidth';
import TextEditor from '../common/TextEditor';
import { InputArticulo } from '../common/ContainerFullWidth';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { UseEditorGlobalContext } from '../context/EditorGlobal';
import { postArticulo } from '../api/articulos';
import { Outlet } from 'react-router-dom';
import { AsideContextProvider, UseAsideContextGlobal } from '../context/AsideContext';
import { useNavigate } from 'react-router-dom';
import "../styles/theme.css";
import { useGlobalTheme } from '../../context/GlobalTheme';

export const AsideAdmin = () => {


  const {nuevoArticulo, handleClickNuevo, perfil, handleClickPerfil, lista, handleClickLista} = UseAsideContextGlobal()
  const {theme} = useGlobalTheme()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ContainerFullWidth sx={{  height: "90vh", display: "flex" }}>
    <Grid item sx={{ width: '5%', height: "100%", display: "flex", alignItems: "center", flexDirection: "column", borderRight:"1px solid grey", justifyContent:"center", gap:"50px"}}>
      <IconButton onClick={handleClickNuevo}>
         <AddRoundedIcon  sx={{
         color: theme === 'dark' ? "white" : "black" 
        }}/>
      </IconButton>
      <IconButton onClick={handleClickPerfil}>
        <PersonIcon sx={{
         color: theme === 'dark' ? "white" : "black" 
        }}/>
      </IconButton>
      <IconButton onClick={handleClickLista}>
        <ListAltIcon sx={{
         color: theme === 'dark' ? "white" : "black" 
        }}/>
      </IconButton>
    </Grid>
    <Outlet/>
  </ContainerFullWidth>
  )
}

export default AsideAdmin