import React, {ChangeEvent} from 'react';
import s from './Editor.module.css';

type EditorPropsType = {
   changeText: (e: ChangeEvent<HTMLTextAreaElement>) => void
   text: string
}

export function Editor(props: EditorPropsType) {

   return (
      <div className={s.markdownEditor}>
         <textarea id='editor'
                   className={s.editor}
                   onChange={props.changeText}
                   value={props.text}
         />
      </div>
   );
}