import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from "../styles/tabla.module.css"
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/GlobalAuth';
import {API_BASE_URL} from '../api/config'

export const BlogLista = () => {
  const {user} = useAuth()
  console.log(user.username)
  const [articleToUpdate, setArticleToUpdate]= useState({
    id: '',
    title: '',
    subtitle:'',
    paragraph:'',
    image:'',
    publicDate:'',
    authorSalidaDto: {
            id: 1,
            username: "",
            firstname: "",
            lastname: "",
            email: ""
        }
  })
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/articulos/author/${user.username}`);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };
  console.log(articles)
  
 



  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Estás seguro de que deseas eliminar este artículo?");
    if (confirm) {
      try {
        const authorization = localStorage.getItem('token');
        if (!authorization) {
          console.error("Token not found");
          return;
        }
  
        const config = {
          method: 'delete',
          maxBodyLength: Infinity,
          url: `${API_BASE_URL}/api/articulos/delete/${id}`,
          headers: {
            'Authorization': `Bearer ${authorization}`
          }
        };
  
        const response = await axios.request(config);
        setArticles(articles.filter(article => article.id !== id));
        console.log('Eliminar artículo', id, response.data);
      } catch (error) {
        console.error('Error eliminando el artículo:', error.response ? error.response.data : error.message);
        alert('Error al eliminar el artículo. Por favor, inténtalo de nuevo.');
      }
    }
  };
  

  const handleView = (id) => {
    // Lógica para ver el artículo
    navigate(`/api/articulos/${id}`)
    console.log('Ver artículo', id );
  };
  const handleUpdate = async (id) => {
    navigate(`/editar/${id}`)
    console.log('Ver artículo', id );
  };
  return (

    
    <TableContainer className={styles.noScrollbar} component={Paper} sx={{width:"100%", height:"100%", margin:"0 auto"}}>
      <Table>
        <TableHead sx={{backgroundColor:"black", color:"white"}}>
          <TableRow>
            <TableCell sx={{textAlign:"center", color:"white"}}>Portada</TableCell>
            <TableCell sx={{ color:"white"}}>Título</TableCell>
            <TableCell sx={{ color:"white"}}>Subtítulo</TableCell>
            <TableCell sx={{textAlign:"center",  color:"white"}}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell> <img src={article.image} alt={article.title}  width="100px"/></TableCell>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.subtitle}</TableCell>
              <TableCell sx={{width:"170px"}}>
                <IconButton onClick={() => handleView(article.id)} color="primary">
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => handleUpdate(article.id)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(article.id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BlogLista;
