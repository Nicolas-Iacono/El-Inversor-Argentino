import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Grid,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { InputArticulo } from "../common/ContainerFullWidth";
import TextEditorActualizable from "../common/TextEditorActulizable";
import { UseAsideContextGlobal } from "../context/AsideContext";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import API_BASE_URL from "../api/config";
const EditarArticulo = () => {
  const [mobile, setMobile] = useState(false);
  const [visible, setVisible] = useState(true);
  const { nuevoArticulo, perfil, lista } = UseAsideContextGlobal();
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [idArt, setIdArt] = useState(0);
  const [article, setArticle] = useState({
    
    title: "",
    subtitle: "",
    image: "",
    paragraph: "",
  });

  const visibleInputsClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/articulos/${id}`)
      .then((response) => {
        setIdArt(response.data.id)
        console.log(idArt)
        setArticle(response.data);
      })
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };

  const handleEditorChange = (content) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      paragraph: content,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        const data = article;
        const authorization = localStorage.getItem('token');
        if(!authorization) {
          console.log("Token not found");
          return;
        }
        const config={
          method: 'put',
          url:`${API_BASE_URL}/api/articulos/update/${article.id}`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authorization}`
          },
          data: data
        };

        const response = await axios.request(config)
        console.log(JSON.stringify(response.data));
        
      alert("Artículo actualizado exitosamente");
      navigate(`/api/articulos/${idArt}`)
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <Box
      sx={{
        padding: "30px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleUpdate}>
        {visible ? (
          <Grid
            container
            sx={{
              height: "70px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
              justifyContent: "space-between",
              borderRadius: "10px",
              paddingLeft: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Button
                onClick={visibleInputsClick}
                sx={{ borderRadius: "10px", height: "48px" }}
              >
                <ExpandLessIcon />
              </Button>
              <InputArticulo
                placeholder="Título"
                name="title"
                value={article.title}
                onChange={handleInputChange}
                label="Titulo"
              />
              <InputArticulo
                placeholder="Subtítulo"
                name="subtitle"
                value={article.subtitle}
                onChange={handleInputChange}
                label="Subtitulo"
              />
              <InputArticulo
                placeholder="Imagen Portada"
                name="image"
                value={article.image}
                onChange={handleInputChange}
                label="Imagen Portada"
              />
            </Box>
          </Grid>
        ) : (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
              
            }}
          >
            <Grid
              container
              sx={{
                height: "30px",
                width: "13rem",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                border: "1px solid black",
                borderRadius: "30px",
                paddingLeft: "5px",
              }}
            >
              <Button
                onClick={visibleInputsClick}
                sx={{ width: "2px", height: "2px" }}
              >
                <ExpandMoreIcon />
              </Button>

              <Typography>Encabezados</Typography>
            </Grid>
            <Grid
              sx={{
                width: "14rem",
                justifyContent: "flex-end",
                display: "flex",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                Actualizar Artículo
              </Button>
            </Grid>
          </Grid>
        )}

        <TextEditorActualizable
          initialContent={article.paragraph}
          onContentChange={handleEditorChange}
        />
      </form>
    </Box>
  );
};

export default EditarArticulo;
