import React, {ChangeEvent} from 'react';
import s from './Editor.module.css';
import {Box, Typography} from '@material-ui/core';

type EditorPropsType = {
   changeText: (e: ChangeEvent<HTMLTextAreaElement>) => void
   text: string
}

export function Editor(props: EditorPropsType) {

   return (
      <div className={s.markdownEditor}>
         <Typography variant="h6">
            <Box textAlign='center' fontWeight='fontWeightBold' mt={4}>
               Markdown Editor
            </Box>
         </Typography>
         <textarea id='editor'
                   className={s.editor}
                   onChange={props.changeText}
                   value={props.text}/>
      </div>
   );
}