(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],[,,function(e,t,n){e.exports={markdownPreview:"Preview_markdownPreview__28w-O",preview:"Preview_preview__1B3xD",title:"Preview_title__unOsw"}},function(e,t,n){e.exports={markdownEditor:"Editor_markdownEditor__3qM7R",editor:"Editor_editor__2aEyo",title:"Editor_title__3QYWH"}},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n.n(i),o=n(5),s=n.n(o),c=(n(13),n(7)),d=(n(14),n(2)),l=n.n(d),u=n(6),w=n.n(u);function h(e){return Object(r.jsxs)("div",{className:l.a.markdownPreview,children:[Object(r.jsx)("div",{className:l.a.title,children:"Markdown Preview"}),Object(r.jsx)("div",{id:"preview",className:l.a.preview,dangerouslySetInnerHTML:{__html:w()(e.text,{sanitize:!0,breaks:!0})}})]})}var m=n(3),v=n.n(m);function f(e){return Object(r.jsxs)("div",{className:v.a.markdownEditor,children:[Object(r.jsx)("div",{className:v.a.title,children:"Markdown Editor"}),Object(r.jsx)("textarea",{id:"editor",className:v.a.editor,onChange:e.changeText,value:e.text})]})}var b=function(){var e=Object(i.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{changeText:function(e){return a(e.currentTarget.value)},text:n}),Object(r.jsx)(h,{text:n})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),_()}],[[15,1,2]]]);
//# sourceMappingURL=main.bad03538.chunk.js.map