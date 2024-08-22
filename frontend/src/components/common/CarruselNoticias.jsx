
 import { getArticulos, getLastFourArticulos } from '../api/articulos';
import { useGetFetch } from '../api/useFetch';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ContainerFullWidth from './ContainerFullWidth';
import { Box, Grid } from '@mui/material'
import CardCarrusel from './CardCarrusel';





function CarruselNoticias() {
  const { data: articulos, error, isLoading } = getLastFourArticulos(); // Obtener las últimas cuatro noticias
  const navigate = useNavigate(); // Hook de navegación
  // Verificar si articulos no es null antes de intentar mapearlo
  if (!articulos) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,             // Activar el deslizamiento continuo
    autoplaySpeed: 3000,  
  };
  const handleCardClick = (id) => {
    navigate(`/api/articulos/${id}`);
  };
  // Renderiza el carrusel solo si hay articulos disponibles
  return (
    <ContainerFullWidth>
      <Slider {...settings}>
        {articulos.map((articulo, index) => (
          <div key={index} onClick={() => handleCardClick(articulo.id)}>
            
            <CardCarrusel articulo={articulo} /> {/* Pasa el artículo como una prop */}
          

          </div>
        ))}
      </Slider>
    </ContainerFullWidth>
  );
}

export default CarruselNoticias;
