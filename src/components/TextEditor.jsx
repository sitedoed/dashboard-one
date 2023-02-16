import React, { Component, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function TextEditor() {
    const [editorState, setEditorState] = useState(null);
    const onEditorStateChange = (editorState) => {
      setEditorState(editorState);
    };
  
  return (
    <div>
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
        />
    </div>
  )
}
