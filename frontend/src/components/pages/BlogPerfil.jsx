import { Grid, Box, Typography} from '@mui/material'
import React from 'react'
import {ContainerFullWidth} from "../common/ContainerFullWidth"
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../context/GlobalAuth';
import AvatarLogo from '../common/avatar/AvatarLogo';
import BackgroundLetterAvatars from '../common/avatar/StringToColor';
export const BlogPerfil = () => {
const {user, isAdmin} = useAuth()
console.log(user)
  return (
    
    <ContainerFullWidth sx={{backgroundColor:"#2979ff", display:'flex'}}>
          <Grid sx={{width:"100%", height:"100%", display:"flex" ,flexDirection:"column", justifyContent: "center", alignItems:"center",gap:"30px"}}>
          <BackgroundLetterAvatars  />

          <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
          <Typography variant="h4" textAlign={'center'} sx={{color:"white"}}>Bienvenido {user.username}</Typography>
              { isAdmin && (
        <p>Tienes permisos de administrador.</p>
      )}
          </Box>
              
          </Grid>
          
    </ContainerFullWidth>
  )
}

export default BlogPerfil