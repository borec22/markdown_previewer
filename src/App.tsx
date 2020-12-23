import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Preview} from './components/Preview/Preview';
import {Editor} from './components/Editor/Editor';
import {Box, Container, Grid} from '@material-ui/core';

function App() {
   let defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

   const [editorText, setEditorText] = useState<string>(defaultText);

   const changeEditorText = (e: ChangeEvent<HTMLTextAreaElement>) => setEditorText(e.currentTarget.value);

   return (
      <div className="App">
         <Container fixed maxWidth="lg">
            <Grid container spacing={3}>
               <Grid item xs={8} style={{margin: '0 auto'}}>
                  <Editor changeText={changeEditorText} text={editorText}/>
               </Grid>
               <Grid item xs={12} style={{marginBottom: '50px'}}>
                  <Preview text={editorText}/>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
}

export default App;

