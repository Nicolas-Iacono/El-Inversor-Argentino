import React, { useEffect } from 'react'
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

useEffect(() =>{
  document.documentElement.setAttribute("data-theme", theme);
},[theme])

  return (
    <Grid>
    <Grid className="fondo"  
    sx={{
      height:{xs:"285vh"},
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