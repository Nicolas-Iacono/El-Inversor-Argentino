import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button"
import { Divider, Grid } from '@mui/material'
import TextEditor from '../common/TextEditor'
import CardHomeArticule from '../common/CardHomeArticule'
import { TitleSectionBlog } from '../common/ContainerFullWidth'
import ContainerFullWidth from '../common/ContainerFullWidth'
import {Articulos} from '../common/infoApi/Articulos'
import { useAuth } from '../../context/GlobalAuth'
import { useGlobalTheme } from "../../context/GlobalTheme";
import "../styles/theme.css"
import fondo from "../../assets/th.jpeg"

const Home = () => {

const {theme, darkMode, toggleTheme} = useGlobalTheme()
const {user} = useAuth();
const [containerHeight, setContainerHeight] = useState('auto'); // Inicializa con 'auto' para manejar la altura

useEffect(() =>{
  document.documentElement.setAttribute("data-theme", theme);
},[theme])

const calculateHeight = (numArticles) => {
  const articleHeight = 300; // Altura aproximada de cada card en px, ajusta según sea necesario
  const margin = 40; // Margen entre los artículos en px, ajusta según sea necesario
  return (numArticles * (articleHeight + margin)) + 'px';
};
const handleResize = (numArticles) => {
  const newHeight = calculateHeight(numArticles);
  setContainerHeight(newHeight);
};

useEffect(() => {
  // Supón que tienes acceso a la cantidad de artículos directamente desde el componente Articulos o mediante un prop
  const numArticles = 6; // Este número debe ser dinámico según los artículos que tengas
  handleResize(numArticles);
}, []);
  return (
    <Grid>
    <Grid className="fondo"  
    sx={{
      height:containerHeight,
      width:{xs:"100%", md : "100%"},
      margin:"0 auto"
    }}
    >

   <Grid container >
    <CardHomeArticule/>
   </Grid>

   
  
      <ContainerFullWidth sx={{width:{xs:"100%", md:"100%"}}}>
      <Grid sx={{width:'90%', margin: "40px auto"}}>
        <TitleSectionBlog className='text' sx={{
         color: theme === 'dark' ? "white" : "black" 
        }}>
          Articulos de blog
        </TitleSectionBlog>
        <Divider/>
        <Articulos/>
        </Grid> 

      </ContainerFullWidth>
   </Grid>

   </Grid>

    
  )
}

export default Home