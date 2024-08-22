import React from 'react'
import { Grid, Box, useTheme, useMediaQuery  } from '@mui/material'
import { useGetFetch } from '../api/useFetch';
import { getLastFourArticulos } from '../api/articulos';
import { ParagraphCard } from './ContainerFullWidth';
import { TitleCard } from './ContainerFullWidth'

export const CardCarrusel =  ({ articulo }) => {
  const theme2 = useTheme();
  const isMobile = useMediaQuery(theme2.breakpoints.down("sm"));

  return (
    <>
    {isMobile ? (
      
      <Grid sx={{width:{xs:"100%"},height:"400px",  display:"flex",  justifyContent:"center", alignItems:"center", margin:"50px auto" }}>
        <Grid sx={{display:"flex",flexDirection:"column", width:{xs:"100%"}, margin: "0 auto", height:"100%", position:"relative"}}>
            <Box sx={{ width:"100%",borderRadius:"20px"}}>
              <img src={articulo.image} alt="" width="100%" height="100%" style={{borderRadius:"20px"}} />
            </Box>
            <Box sx={{backgroundColor:"rgba(232, 232, 239, 0.3)", width:{ xs:"100%"}, padding:"20px",borderRadius:"0 0 20px 20px", position:"absolute",height:"49%", left:"0",zIndex:"-1", bottom:"0",display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Box sx={{ width:"100%", borderRadius:"10px 0 0 10px", borderLeft:"20px solid #032248" }}>
              <TitleCard sx={{fontSize:"1.3rem"}}>{articulo.title}</TitleCard>
              </Box>
              <Box >
    
              </Box>
            </Box>
         
        </Grid>
      </Grid>

      ):(<Grid sx={{width:{xs:"100%", sm:"80%"},height:"400px",  display:"flex",  justifyContent:"center", alignItems:"center", marginTop:"30px", margin:"50px auto" }}>
        <Grid sx={{display:"flex",flexDirection:"row-reverse", width:{xs:"100%", sm:"80%"}, margin: "0 auto", height:"100%", position:"relative"}}>
            <Box sx={{ width:"70%",borderRadius:"20px"}}>
              <img src={articulo.image} alt="" width="100%" height="100%" style={{borderRadius:"20px"}} />
            </Box>
            <Box sx={{backgroundColor:"rgba(232, 232, 239, 0.3)", width:{sm:"32%", xs:"11%"}, padding:"20px",borderRadius:"20px 0 0 20px", position:"absolute",height:"100%", left:"0",zIndex:"-1", bottom:"0"}}>
              <Box sx={{ width:"100%", borderRadius:"10px 0 0 10px", borderLeft:"20px solid #032248"}}>
              <TitleCard>{articulo.title}</TitleCard>
              </Box>
              <Box>
              <ParagraphCard>{articulo.subtitle}</ParagraphCard>
    
              </Box>
            </Box>
         
        </Grid>
      </Grid>)

  

    }
    </>
    
  )
}

export default CardCarrusel