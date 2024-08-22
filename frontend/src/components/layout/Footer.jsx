import { Grid, Box, Link } from "@mui/material";
import React, {useEffect, useState} from "react";
import Logo from '../../assets/logoInversor.png'
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
export const Footer = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 900)


  const handleResize = () => {
    setMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])
  return (
    <>
    {mobile ? (
      <Grid
      sx={{
        backgroundColor: "hsl(233, 26%, 24%)",
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"column"
      }}
    >
      <Grid sx={{ height:"100%", width:"100%",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:'50px'}}>
      
        <img src={Logo} alt="" />
        <Box sx={{width:"48%", display:"flex",justifyContent:'space-between'}}>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </Box>
      </Grid>

      <Grid sx={{ height:"100%", width:"100%"}}>
        <Box sx={{ display: "flex",flexDirection:"column",justifyContent:"center",alignItems:"center", width:"100%"}}>
          <ul style={{
            listStyleType: "none",
            color:"white",
            display:"flex",
            flexDirection:"column",
            gap:"15px",
            width:"100%",
            textAlign:"center",
            padding:"0px"

          }}>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul style={{
            listStyleType: "none",
            color:"white",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            gap:"15px",
            width:"100%",
            textAlign:"center",
            padding:"0px",
            marginTop:"-5px"
          }}>
            <li style={{
        
            width:"100%",
           
          }} >Careers</li>
            <li>Suport</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>
      </Grid>
      <Grid sx={{ height:"100%", width:"100%",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", }}>
       
        <p style={{
            color:"white",
            
          }}>© EasyBank. All Rights Reserved</p>
      </Grid>
    </Grid>

    ) : (
<Grid
      sx={{
        backgroundColor: "hsl(233, 26%, 24%)",
        width: "100%",
        height: "220px",
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}
    >
      <Grid sx={{ height:"100%", width:"20%",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"end", gap:'50px'}}>
      
        <Box sx={{width:"8%", height:'50%', marginLeft:"10px", display:"flex",justifyContent:'space-between', flexDirection:'column'}}>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </Box>
      </Grid>

      <Grid sx={{ height:"100%", width:"35%",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start", gap:'50px',marginRight:"50px"}}>
        <Box sx={{ display: "flex",gap:'50px' }}>
          <ul style={{
            listStyleType: "none",
            color:"white",
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}>
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul style={{
            listStyleType: "none",
            color:"white",
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}>
            <li>Privacy Policy</li>
          </ul>
        </Box>
      </Grid>
      <Grid sx={{ height:"100%", width:"30%",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", }}>
        <img src={Logo} style={{marginRight:"5px"}} alt="" />
        
        <p style={{
            color:"white",
            
          }}>© InversorArgentino | All Rights Reserved.</p>
      </Grid>
    </Grid>


    )}
    
    </>
  )
}

export default Footer