import { useGetFetch, postFetch, putFetch } from "./useFetch";
import API_BASE_URL from "./config";

const URL_ARTICULOS = `${API_BASE_URL}/api/articulos/listar`
const URL_ARTICULOS_CREAR = `${API_BASE_URL}/api/articulos/crear`
const URL_LAST_FOUR_ARTICLES =  `${API_BASE_URL}/api/articulos/ultimos-cuatro`
const URL_ARTICLE_BY_ID = `${API_BASE_URL}/api/articulos/{id}`

export const getArticulos = () =>{
  return useGetFetch(URL_ARTICULOS)
}

export const getLastFourArticulos = () =>{
  return useGetFetch(URL_LAST_FOUR_ARTICLES)
}

export const postArticulo = (payload) => { 
  return postFetch(URL_ARTICULOS_CREAR, payload)
}


