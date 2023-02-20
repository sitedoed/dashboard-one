import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
//import 'tinymce/tinymce.css';


export default function TinyEditor() {

    const [content, setContent] = useState('');
    
    const handleEditorChange = (value, editor) => {
        setContent(value);
    };
      
  return (
    <div>
          <Editor
            apiKey="xs6bljd1ov6qibm2y2ohre8xg49xg5105m2thbnw88tjcn2r"
            initialValue={content}
            value={content}
            init={{
                height: 500,
                menubar: true,
                plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help | image',
                images_upload_url: 'http://localhost:3000/upload-image',
                images_upload_handler: function (blobInfo, success, failure) {
                  const xhr = new XMLHttpRequest();
                  xhr.withCredentials = false;
                  xhr.open('POST', 'YOUR_UPLOAD_URL');
        
                  xhr.onload = function() {
                    if (xhr.status === 200) {
                      const response = JSON.parse(xhr.responseText);
                      success(response.url);
                    } else {
                      failure('HTTP Error: ' + xhr.status);
                    }
                  };
                  const formData = new FormData();
                  formData.append('file', blobInfo.blob(), blobInfo.filename());
        
                  xhr.send(formData);
                },
            }}
            onEditorChange={handleEditorChange}
        />
    </div>
  )
}
