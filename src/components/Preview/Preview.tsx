import React from 'react';
import s from './Preview.module.css';

type propsType = {
   text: string
}

export function Preview(props: propsType) {
   return (
      <div className={s.markdownPreview}>
         <div id='preview' className={s.preview}>
            {props.text}
         </div>
      </div>
   );
}