import { Grid, TextField, Typography, styled, Button } from '@mui/material'
import React from 'react'
<style>
@import url('https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>


export const ContainerFullWidth = styled(Grid)(() => ({
  width:"100%",
  backgroundColor:"var(--main)",
  color:"var(--font)",
  margin:"0 auto",
})) 
  

export default ContainerFullWidth

export const ParagraphCard = styled(Typography)(() => ({
  fontSize:"15px",
  color:"var(--font)",
  fontFamily:  "'Libre Caslon Text', serif", // Usa comillas simples
  fontWeight: 400,
  fontStyle: "normal",
  padding:"15px"

})) 
export const TitleCard = styled(Typography)(() => ({
  fontSize: "20px",
  color: "var(--font)",
  fontFamily:  "'Libre Caslon Text', serif", // Usa comillas simples
  fontWeight: 700,
  fontStyle: "normal",
  padding:"15px"
})) 

export const TitleSectionBlog = styled(Typography)(() => ({
  fontSize:"30px",
  color: 'var(--font)',

})) 
export const AgregarArt = styled(Button)(() => ({
  fontSize:"6px",
  color:"black",
  width:"20px",
  height:"50px",
  borderRadius:"50%",
  border:"3px solid blue",
  ":hover":{
    backgroundColor:"#DB2B2E",
    color:"white"
  }
})) 

export const InputArticulo = styled(TextField)(() => ({
  fontSize:"10px",
  height:'100%',
  color:"black",
  width:"30%",
  borderRadius:"5px",
  placeHolder:"Titulo",
  ":hover":{
    color:"white"
  }
})) 

export const BtnRegister = styled(Button)(() => ({
  fontSize:"15px",
  height:'100%',
  color:"white",
  width:"30%",
  borderRadius:"5px",
  backgroundColor:"#1338B4",
  placeHolder:"Titulo",
  ":hover":{
    color:"white",
    backgroundColor:"#123199"
  }
})) 