import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import ContainerFullWidth from '../common/ContainerFullWidth';
import { Grid } from '@mui/material';
import "../styles/articleStyles.css"
import API_BASE_URL from '../api/config';
import { useNavigate } from 'react-router-dom';
import { getLastFourArticulos } from '../api/articulos';
import "../styles/theme.css";
import { useGlobalTheme } from '../../context/GlobalTheme';

const ArticuloPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [listaArt, setListaArt] = useState([])
  const navigate = useNavigate();
  const { data: articulos, error, isLoading } = getLastFourArticulos(); 
  const {theme, darkMode ,toggleTheme} = useGlobalTheme()
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  useEffect(() => {
    // Reemplaza con la URL de tu API
    axios.get(`${API_BASE_URL}/api/articulos/${id}`)
    .then(response => {
      // Decodificar el contenido HTML escapado
      const decodedContent = decodeHtml(response.data.parrafo);
      setArticle({ ...response.data, parrafo: decodedContent });
    })
      .catch(error => console.error('Error fetching article:', error));
  }, [id]);


  const toLink = (id) =>{
    navigate(`/api/articulos/${id}`)
  }

  if (!article) {
    return <div>Cargando...</div>;
  }

  return (
    <ContainerFullWidth sx={{ display:"flex", flexDirection:{xs:"column",md:"row"}}}>

      <Grid  sx={{width:{ md:"75%", xs:"90%"}, margin: {xs:"0 auto",md:'50px'} }}className="article-content">{parse(article.paragraph)}</Grid>

      <Grid className='listaSide' sx={{  width: { md:"25%", xs:"90%"}, marginRight: "20px", padding:"2rem 2rem",}}>
        <h2>Articulos Recientes</h2>
        {articulos && articulos.length > 0 ? (
          articulos.map((lista, index) => (

            <ul key={index} >

              <li className='border' onClick={()=>toLink(lista.id)}
                style={{ fontWeight:"700", cursor:"pointer", marginTop:"15px"}}
                >
                  
                  {lista.title}
                </li>
             
            </ul>
          ))
        ) : (
          <p>No hay artículos disponibles.</p>
        )}
      </Grid>

    </ContainerFullWidth>

  );
};
const decodeHtml = (html) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = html;
  return textArea.value;
};
export default ArticuloPage;
