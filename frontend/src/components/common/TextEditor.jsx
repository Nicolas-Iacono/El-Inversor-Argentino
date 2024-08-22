import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Grid } from '@mui/material';
import { UseEditorGlobalContext } from '../context/EditorGlobal';
import ContainerFullWidth from './ContainerFullWidth';

const TextEditor = () => {
  const { parrafo, addParagraph } = UseEditorGlobalContext();
  const [contenido, setContenido] = useState(parrafo);

  const handleEditorChange = (content) => {
    setContenido(content);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    addParagraph(contenido);
  };

  return (
    <ContainerFullWidth sx={{ height: "400px" }}>
      <Editor
        apiKey="yk10ygeb6q71ucxlc2kqvhzpliekkdjmjgw8bxrxbxmvbl6y"
        initialValue="<h1>Nuevo articulo</h1>"
        init={{
          width: "100%",
          height: 400,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'image',
            'table',
            'media' // Agregar el plugin 'media'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | removeformat | help | ' +
            'image | media | table', // Agregar el botón 'media' a la barra de herramientas
          media_live_embeds: true, // Permitir la inserción de videos en vivo
          content_style: `
            .mce-content-body img,
            .mce-content-body iframe,
            .mce-content-body video {
              max-width: 100%;
              height: auto;
            }

            .mce-content-body {
              overflow-wrap: break-word;
            }

            @media (min-width: 600px) {
              .mce-content-body img,
              .mce-content-body iframe,
              .mce-content-body video {
                max-width: 100%;
                height: auto;
              }

              .mce-content-body {
                font-size: 14px;
              }
            }
          `
        }}
        onEditorChange={handleEditorChange}
      />
      <Grid sx={{ width: "100%", justifyContent: "flex-end", display: 'flex', padding: "10px" }}>
        <Button onClick={handlerSubmit} variant="contained" color="primary">
          Guardar
        </Button>
      </Grid>
    </ContainerFullWidth>
  );
};

export default TextEditor;
