import React, { createContext, useContext, useState, useCallback } from "react";

const AsideContextGlobal = createContext();

export const UseAsideContextGlobal = () => {
  return useContext(AsideContextGlobal);
};

export const AsideContextProvider = ({ children }) => {
  const [nuevoArticulo, setNuevoArticulo] = useState(false);
  const [perfil, setPerfil] = useState(false);
  const [lista, setLista] = useState(false);


  const handleClickNuevo = useCallback(() => {
    setNuevoArticulo(prev => !prev);
    if (perfil || lista) {
      setLista(false);
      setPerfil(false);
    }
  }, [perfil, lista]);

  const handleClickPerfil = useCallback(() => {
    setPerfil(prev => !prev);
    if (nuevoArticulo || lista) {
      setLista(false);
      setNuevoArticulo(false);
    }
  }, [nuevoArticulo, lista]);

  const handleClickLista = useCallback(() => {
    setLista(prev => !prev);
    if (perfil || nuevoArticulo) {
      setPerfil(false);
      setNuevoArticulo(false);
    }
  }, [perfil, nuevoArticulo]);
  return (
    <AsideContextGlobal.Provider value={{ nuevoArticulo, handleClickNuevo, perfil, handleClickPerfil, lista, handleClickLista }}>
      {children}
    </AsideContextGlobal.Provider>
  );
};
