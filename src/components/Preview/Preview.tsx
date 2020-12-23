import React from 'react';
import s from './Preview.module.css';
import marked from 'marked';
import {Box, Typography} from '@material-ui/core';

type propsType = {
   text: string
}

export function Preview(props: propsType) {
   const getMarkdownText = () => {
      let rawMarkup = marked(props.text, {sanitize: true, breaks: true});
      return { __html: rawMarkup};
   }

   return (
      <div className={s.markdownPreview}>
         <Typography variant="h6">
            <Box textAlign='center' fontWeight='fontWeightBold' mt={2}>
               Markdown Preview
            </Box>
         </Typography>
         <div id='preview' className={s.preview} dangerouslySetInnerHTML={getMarkdownText()}/>
      </div>
   );
}