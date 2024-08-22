import React, { useState, useEffect } from 'react';
import ContainerFullWidth from '../common/ContainerFullWidth';
import { UseAsideContextGlobal } from '../context/AsideContext';
import {BlogPerfil} from "../pages/BlogPerfil"
import BlogLista from './BlogLista';
import BlogNuevoArticulo from './BlogNuevoArticulo';
export const Blog = () => {
 



  const {nuevoArticulo,perfil,lista,handleClickPerfil} = UseAsideContextGlobal();


  return (
    <ContainerFullWidth sx={{ backgroundColor: "white", height: "90vh", display: "flex" }}>
      {nuevoArticulo ? <BlogNuevoArticulo /> : <></>}
      {perfil ? <BlogPerfil /> : <></>}
      {lista ? <BlogLista /> : <></>}


    </ContainerFullWidth>
  );
};

export default Blog;
