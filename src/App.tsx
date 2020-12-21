import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Preview} from './components/Preview/Preview';
import {Editor} from './components/Editor/Editor';

function App() {
   const [editorText, setEditorText] = useState<string>('');

   const changeEditorText = (e: ChangeEvent<HTMLTextAreaElement>) => setEditorText(e.currentTarget.value);

   return (
      <div className="App">
         <Editor changeText={changeEditorText} text={editorText}/>
         <Preview text={editorText} />
      </div>
   );
}

export default App;

