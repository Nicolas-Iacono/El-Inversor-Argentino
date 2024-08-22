import React, { useState, useEffect } from "react";
import { useGetFetch } from "../../api/useFetch";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import ContainerFullWidth from "../ContainerFullWidth";
import { getArticulos } from "../../api/articulos";
import { useNavigate } from "react-router-dom";
import corazon from "../../../assets/heart (1) 3.png"
import plus from "../../../assets/add 1.png"
import share from "../../../assets/share 1.png"
import { useGlobalTheme } from '../../../context/GlobalTheme';

export const Articulos = () => {
  const [mobile, setMobile] = useState(false);
  const { data: articulos, error, isLoading } = getArticulos();
  const navigate = useNavigate(); // Hook de navegación
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);
  const theme2 = useTheme();
  const isMobile = useMediaQuery(theme2.breakpoints.down("sm"));
  const {theme} = useGlobalTheme()

  useEffect(() => {
    if (articulos) {
      setMobile(isMobile);
    }
  }, [articulos, isMobile]);


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los artículos</div>;
  }

  const handleCardClick = (id) => {
    navigate(`/api/articulos/${id}`);
  };

  const totalPages = Math.ceil(articulos.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articulos.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <ContainerFullWidth>
      {isMobile ? (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "10px",
            width: "110%", // Ancho mayor al 100%
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Necesario para el uso de transform
            left: "50%", // Mueve el contenedor al centro de la pantalla
            transform: "translateX(-50%)", 
          }}
        >
          <Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
            {articulos && Array.isArray(articulos) && articulos.length > 0 ? (
              currentArticles.map((articulo, index) => (
                <Card
                  key={index}
                  sx={{
                    width: "100%",
                    maxWidth: "400px", // Ancho máximo para que no sea mayor que la pantalla móvil
                    height: "240px",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "hsl(233, 26%, 24%, 0.5)",
                      color: "white",
                    },
                    position: "relative",
                    margin: "0 auto", // Centra el card en el contenedor
                  }}
                  onClick={() => handleCardClick(articulo.id)}
                >
                  {isMobile && (
                    <CardMedia
                      component="img"
                      image={articulo.image}
                      alt={articulo.title}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "2px",
                        boxShadow: 1,
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  )}
                  <CardContent
                    sx={{
                      width: "100%",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo semitransparente para el texto
                      padding: "10px",
                    }}
                  >
                    <Typography variant="h6" align="center">
                      {articulo.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div>No hay artículos disponibles</div>
            )}
          </Stack>
        </Grid>
      ) : (
        <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px 10px 10px 7%", // Añadir padding para evitar que el contenido quede pegado a los bordes
          gap:"20px",
          // height:"60rem"
        }}
      >
        {articulos && Array.isArray(articulos) && articulos.length > 0 ? (
          currentArticles.map((articulo, index) => (
            <Card
              className="card"
              key={index}
              sx={{
                width: { xs: "100%", sm: "calc(32% - 30px)" },
                height:"30rem",
                backgroundColor:"var(--main)",
                // Ajuste del ancho con margen incluido
                // marginBottom: "20px",
                boxSizing: "border-box",
                border:"#373737 1px solid",
                borderRadius:"10px",
                color:"var(--font)",
                cursor:"pointer",
              }}
              onClick={() => handleCardClick(articulo.id)}
            >
              {!isMobile && (
                <CardMedia
                  component="img"
                  image={articulo.image}
                  alt={articulo.title}
                  sx={{
                    height: { xs: "130px", sm: "55%" },
                    width: { xs: "100%", sm: "90%" }, // Ajusta el ancho para que sea responsivo
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                    margin: { xs: "0 auto", sm: "20px" }, // Centra la imagen en móviles
                  }}
                />
              )}
              <CardContent
                sx={{
                  height: "5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: { xs: "center", sm: "left" }, // Centra el texto en móviles
                  widht:"100%",
                  padding:"0 20px"
                }}
              >
                <Typography variant="h7">{articulo.title}</Typography>
                {/* <Typography variant="body1">{articulo.subtitle}</Typography> */}
              </CardContent>
              <Grid>
                <Grid item xs={12} sm={6} sx={{ width:"90%", height:"2.5rem", margin:"0 auto", display:"flex", justifyContent:"space-between",alignItems:"center", marginTop:"20px"}}>  
                  <IconButton sx={{color: theme === 'dark' ? "white" : "black" }}>
                    <img src={corazon} alt="like" style={{filter: theme === 'dark' ? "invert(0)" : "invert(1)" }}/>
                  </IconButton>
                  <IconButton>
                    <img src={plus} alt="add" style={{filter: theme === 'dark' ? "invert(0)" : "invert(1)" }}/>
                  </IconButton>
                  <IconButton>
                    <img src={share} alt="share" style={{filter: theme === 'dark' ? "invert(0)" : "invert(1)" }}/>
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
          ))
        ) : (
          <div>No hay artículos disponibles</div>
        )}
        </Grid>
      )}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", marginTop: 2,  "& .MuiPaginationItem-previousNext": {
          color: "var(--font)", // Cambia el color de las flechas
        },}}
      />
    </ContainerFullWidth>
  );
};

export default Articulos;
