"use strict";(self.webpackChunkdodam_log=self.webpackChunkdodam_log||[]).push([[8242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(n),u=l,d=y["".concat(i,".").concat(u)]||y[u]||m[u]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[y]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const o={date:new Date("2024-02-10T00:00:00.000Z"),authors:"d0dam",title:"styled-components stylelint\uc801\uc6a9\uacfc \uc790\ub3d9\uc218\uc815(feat. yarn berry\uc5d0\uc11c pnpm\uc73c\ub85c)",description:"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4.",keywords:["React","styled-components","css-in-js","vscode-stylelint extension","stylelint"],tags:["React","Stylelint"]},a=void 0,s={permalink:"/blog/react/config-stylelint",source:"@site/blog/react/config-stylelint.mdx",title:"styled-components stylelint\uc801\uc6a9\uacfc \uc790\ub3d9\uc218\uc815(feat. yarn berry\uc5d0\uc11c pnpm\uc73c\ub85c)",description:"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4.",date:"2024-02-10T00:00:00.000Z",formattedDate:"2024\ub144 2\uc6d4 10\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"Stylelint",permalink:"/blog/tags/stylelint"}],readingTime:8.14,hasTruncateMarker:!0,authors:[{name:"minjae Kim",url:"https://github.com/d0dam",email:"smallkdb@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/51052049?v=4",key:"d0dam"}],frontMatter:{date:"2024-02-10T00:00:00.000Z",authors:"d0dam",title:"styled-components stylelint\uc801\uc6a9\uacfc \uc790\ub3d9\uc218\uc815(feat. yarn berry\uc5d0\uc11c pnpm\uc73c\ub85c)",description:"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4.",keywords:["React","styled-components","css-in-js","vscode-stylelint extension","stylelint"],tags:["React","Stylelint"]},prevItem:{title:"tanstack query\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\uba74 \uc88b\uc744\uae4c?",permalink:"/blog/react/tanstack-query-options"},nextItem:{title:"\ub9c8\uc6b0\uc2a4 \ub4dc\ub798\uadf8 \uc2a4\ud06c\ub864 \uad6c\ud604\ud558\uae30",permalink:"/blog/react/implement-drag-scroll"}},i={authorsImageUrls:[void 0]},c=[],p={toc:c},y="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);