import React, { createContext, useContext, useState } from 'react';

const ParrafoGlobal = createContext();

export const UseEditorGlobalContext = () => {
  return useContext(ParrafoGlobal);
};

export const EditorTextContextProvider = ({ children }) => {
  const [parrafo, setParrafo] = useState('');

  const addParagraph = (content) => {
    setParrafo(content);
  };

  return (
    <ParrafoGlobal.Provider value={{ parrafo, addParagraph }}>
      {children}
    </ParrafoGlobal.Provider>
  );
};
