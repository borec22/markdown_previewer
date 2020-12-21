import React from 'react';
import s from './Preview.module.css';
import marked from 'marked';

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
         <div className={s.title}>Markdown Preview</div>
         <div id='preview' className={s.preview} dangerouslySetInnerHTML={getMarkdownText()}/>
      </div>
   );
}