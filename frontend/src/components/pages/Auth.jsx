import React, { useEffect, useState } from "react";
import ContainerFullWidth from "../common/ContainerFullWidth";
import { Grid, Button, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import fondoFinanzas from "../../assets/El Inversor Argentino.png";
import Login from "./Login";
import Register from "./Register";
import "../styles/theme.css";
import { useNavigate } from "react-router-dom";
import back from "../../assets/atras.png";
import { useGlobalTheme } from '../../context/GlobalTheme';

const Auth = () => {
  const [loginMode, setLoginMode] = useState(false);
  const theme2 = useTheme();
  const isMobile = useMediaQuery(theme2.breakpoints.down("sm"));

  const formChange = () => {
    setLoginMode(!loginMode);
  };

  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  const { theme } = useGlobalTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ContainerFullWidth sx={{ height: "100vh", display: "flex" }}>
      {isMobile ? (
        <>
        
          <Grid item sx={{ width: "100%" }}>
            <div>
              {loginMode ? (
                <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "90vh" }}>
                  <Box sx={{ width: "70%", height: "4rem", display: "flex", justifyContent: "start", alignItems: "center", margin: "0 auto", gap: "30px", marginLeft: "2.6rem" }}>
                    <IconButton onClick={backHome}>
                      <img src={back} alt="atras" width={"30px"} style={{ filter: theme === 'dark' ? "invert(1)" : "invert(0)" }} />
                    </IconButton>
                    <h1 style={{ fontFamily: "'Roboto', sans-serif", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>Register</h1>
                  </Box>
                  <Register />
                </Grid>
              ) : (
                <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "90vh", gap: "10rem" }}>
                  <Box sx={{ width: "70%", height: "4rem", display: "flex", justifyContent: "start", alignItems: "center", margin: "0 auto", gap: "30px", marginLeft: "2.6rem" }}>
                    <IconButton onClick={backHome}>
                      <img src={back} alt="atras" width={"30px"} style={{ filter: theme === 'dark' ? "invert(1)" : "invert(0)" }} />
                    </IconButton>
                    <h1 style={{ fontFamily: "'Roboto', sans-serif", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>Login</h1>
                  </Box>
                  <Login />
                </Grid>
              )}
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {loginMode ? (
                  <Button onClick={formChange}>Ya tengo una cuenta</Button>
                ) : (
                  <Button onClick={formChange}>Necesito una cuenta</Button>
                )}
              </Box>
            </div>
          </Grid>
        </>
      ) : (
        <>
          <Grid item sx={{ width: "60%", backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Box sx={{
              backgroundImage: `url(${fondoFinanzas})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "500px",
              height: "400px",
              borderRadius: "10px"
            }}>
            </Box>
          </Grid>
          <Grid item sx={{ width: "40%" }}>
            <div>
              {loginMode ? (
                <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "90vh" }}>
                  <Box sx={{ width: "70%", height: "4rem", display: "flex", justifyContent: "start", alignItems: "center", margin: "0 auto", gap: "30px", marginLeft: "2.6rem" }}>
                    <IconButton onClick={backHome}>
                      <img src={back} alt="atras" width={"30px"} style={{ filter: theme === 'dark' ? "invert(1)" : "invert(0)" }} />
                    </IconButton>
                    <h1 style={{ fontFamily: "'Roboto', sans-serif", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>Register</h1>
                  </Box>
                  <Register />
                </Grid>
              ) : (
                <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "90vh", gap: "10rem" }}>
                  <Box sx={{ width: "70%", height: "4rem", display: "flex", justifyContent: "start", alignItems: "center", margin: "0 auto", gap: "30px", marginLeft: "2.6rem" }}>
                    <IconButton onClick={backHome}>
                      <img src={back} alt="atras" width={"30px"} style={{ filter: theme === 'dark' ? "invert(1)" : "invert(0)" }} />
                    </IconButton>
                    <h1 style={{ fontFamily: "'Roboto', sans-serif", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>Login</h1>
                  </Box>
                  <Login />
                </Grid>
              )}
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {loginMode ? (
                  <Button onClick={formChange}>Ya tengo una cuenta</Button>
                ) : (
                  <Button onClick={formChange}>Necesito una cuenta</Button>
                )}
              </Box>
            </div>
          </Grid>
        </>
      )}
    </ContainerFullWidth>
  );
};

export default Auth;
