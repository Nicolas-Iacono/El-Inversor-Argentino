import React, { useState, useEffect } from 'react';
import ContainerFullWidth from '../common/ContainerFullWidth';
import { Grid, Box, Typography, Button } from '@mui/material';
import { AgregarArt } from '../common/ContainerFullWidth';
import TextEditor from '../common/TextEditor';
import { InputArticulo } from '../common/ContainerFullWidth';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { UseEditorGlobalContext } from '../context/EditorGlobal';
import { postArticulo } from '../api/articulos';
import AsideAdmin from '../layout/AsideAdmin';
import { useAuth } from '../../context/GlobalAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../api/config';
const BlogNuevoArticulo = () => {
  const { parrafo, addParagraph } = UseEditorGlobalContext();
  const {isAdmin, user} = useAuth()
  const navigate = useNavigate()

  const [articulo, setArticulo] = useState({
    title: "",
    subtitle: "",
    image: '',
    paragraph: "",
    userAuthorDto:{
        username: user.username,
    }
  });
  useEffect(() => {
    setArticulo(prevState => ({ ...prevState, paragraph: parrafo }));
  }, [parrafo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticulo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const authorization = localStorage.getItem('token')


   const clickSubmit = async () => {
    try {
      const data = articulo;
      const authorization = localStorage.getItem('token');
      if (!authorization) {
        console.error("Token not found");
        return;
      }

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${API_BASE_URL}/api/articulos/crear`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authorization}`
        },
        data: data
      };

      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));

      await Swal.fire({
        title: '¡Artículo creado!',
        text: 'El artículo se creó y se publicó correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });

      // Redirigir al usuario a la página de detalles del artículo recién creado
      navigate(`/api/articulos/${response.data.id}`)
    } catch (error) {
      console.error("Error creating article:", error.response ? error.response.data : error.message);
    }
  };
  return (
    <Box sx={{ padding: "30px", width:"100%", display:"flex", flexDirection:"column" }}>
    <form>
      <Grid sx={{ height: "50px", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "10px", gap: "10px", marginBottom:"20px" }}>
        <InputArticulo
          placeholder='Título'
          name="title"
          value={articulo.title}
          onChange={handleChange}
        />
        <InputArticulo
          placeholder='Subtítulo'
          name="subtitle"
          value={articulo.subtitle}
          onChange={handleChange}
        />
        <InputArticulo
          placeholder='Imagen Portada'
          name="image"
          value={articulo.image}
          onChange={handleChange}
        />
      </Grid>
      <TextEditor />
      <Button
        onClick={clickSubmit}
        variant="contained"
        color="primary"
        sx={{ marginTop: "10px", }}
      >
        Guardar Artículo
      </Button>
    </form>
  </Box>
  )
}

export default BlogNuevoArticulo