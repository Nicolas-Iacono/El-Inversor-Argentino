import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import ContainerFullWidth from './ContainerFullWidth';

const TextEditorActualizable = ({ initialContent, onContentChange }) => {
  return (
    <ContainerFullWidth sx={{ height: "400px" }}>
      <Editor
        apiKey="yk10ygeb6q71ucxlc2kqvhzpliekkdjmjgw8bxrxbxmvbl6y"
        initialValue={initialContent}
        init={{
          width: "100%",
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'image',
            'table',
            'media'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | removeformat | help | ' +
            'image | media | table',
          media_live_embeds: true,
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
        onEditorChange={onContentChange}
      />
    </ContainerFullWidth>
  );
};

export default TextEditorActualizable;