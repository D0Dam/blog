"use strict";(self.webpackChunkdodam_log=self.webpackChunkdodam_log||[]).push([[9721],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var s=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,s,l=function(t,e){if(null==t)return{};var n,s,l={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=s.createContext({}),p=function(t){var e=s.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return s.createElement(o.Provider,{value:e},t.children)},y="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),y=p(n),d=l,u=y["".concat(o,".").concat(d)]||y[d]||m[d]||a;return n?s.createElement(u,r(r({ref:e},c),{},{components:n})):s.createElement(u,r({ref:e},c))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[y]="string"==typeof t?t:l,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},967:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var s=n(7462),l=(n(7294),n(3905));const a={date:new Date("2024-02-10T00:00:00.000Z"),authors:"d0dam",title:"styled-components stylelint\uc801\uc6a9\uacfc \uc790\ub3d9\uc218\uc815(feat. yarn berry\uc5d0\uc11c pnpm\uc73c\ub85c)",description:"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4.",keywords:["React","styled-components","css-in-js","vscode-stylelint extension","stylelint"],tags:["React","Stylelint"]},r=void 0,i={permalink:"/blog/react/config-stylelint",source:"@site/blog/react/config-stylelint.mdx",title:"styled-components stylelint\uc801\uc6a9\uacfc \uc790\ub3d9\uc218\uc815(feat. yarn berry\uc5d0\uc11c pnpm\uc73c\ub85c)",description:"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4.",date:"2024-02-10T00:00:00.000Z",formattedDate:"2024\ub144 2\uc6d4 10\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"Stylelint",permalink:"/blog/tags/stylelint"}],readingTime:8.14,hasTruncateMarker:!0,authors:[{name:"minjae Kim",url:"https://github.com/d0dam",email:"smallkdb@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/51052049?v=4",key:"d0dam"}],frontMatter:{date:"2024-02-10T00:00:00.000Z",authors:"d0dam",title:"styled-components stylelint\uc801\uc6a9\uacfc \uc790\ub3d9\uc218\uc815(feat. yarn berry\uc5d0\uc11c pnpm\uc73c\ub85c)",description:"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4.",keywords:["React","styled-components","css-in-js","vscode-stylelint extension","stylelint"],tags:["React","Stylelint"]},prevItem:{title:"tanstack query\ub97c \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\uba74 \uc88b\uc744\uae4c?",permalink:"/blog/react/tanstack-query-options"},nextItem:{title:"\ub9c8\uc6b0\uc2a4 \ub4dc\ub798\uadf8 \uc2a4\ud06c\ub864 \uad6c\ud604\ud558\uae30",permalink:"/blog/react/implement-drag-scroll"}},o={authorsImageUrls:[void 0]},p=[{value:"stylelint\ub97c \uc4f0\uac8c \ub41c \uc774\uc720",id:"stylelint\ub97c-\uc4f0\uac8c-\ub41c-\uc774\uc720",level:2},{value:"\uac1c\ubc1c \ud658\uacbd",id:"\uac1c\ubc1c-\ud658\uacbd",level:2},{value:"stylelint \uc138\ud305",id:"stylelint-\uc138\ud305",level:2},{value:"vscode-stylelint extension \uc5f0\uacb0\ud558\uae30",id:"vscode-stylelint-extension-\uc5f0\uacb0\ud558\uae30",level:2}],c={toc:p},y="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(y,(0,s.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"styled-components\uc640 \uac19\uc740 css in js\ub97c \uc4f8 \ub54c stylelint\uc640 \uc790\ub3d9\uc218\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ub420\uae4c\uc694? \ucd5c\uc2e0 \ubc84\uc804 \uae30\uc900\uc73c\ub85c stylelint\ub97c \uc801\uc6a9\ud558\uba70 \uacaa\uc5c8\ub358 \uc774\uc57c\uae30\ub97c \ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"stylelint\ub97c-\uc4f0\uac8c-\ub41c-\uc774\uc720"},"stylelint\ub97c \uc4f0\uac8c \ub41c \uc774\uc720"),(0,l.kt)("p",null,"\ud68c\uc0ac\uc5d0\uc11c \ub300\uaddc\ubaa8 \uac1c\ud3b8\uc774 \uc608\uc815 \ub418\uc5b4 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n\uadf8\ub798\uc11c \uc0c8\ub86d\uac8c \uac1c\ud3b8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \uac1c\ubc1c \ud658\uacbd \uc138\ud305\uc744 \ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc790\uc138\ud55c \uac1c\ud3b8 \ub0b4\uc6a9\uacfc \ub514\uc790\uc778\uc774 \ub098\uc624\uae30 \uc804\uae4c\uc9c0 \ub0a8\ub294 \uc2dc\uac04\uc774 \uc788\uc5b4\uc11c \uac1c\ud3b8\uc744 \uc2dc\uc791\ud560 \ub54c \ucd5c\ub300\ud55c \ud3b8\ud558\uace0 \ube60\ub974\uac8c \uc791\uc5c5\ud560 \uc218 \uc788\ub3c4\ub85d \ud658\uacbd\uc744 \ubbf8\ub9ac \uad6c\ucd95\ud574 \ub450\uace0 \uc2f6\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\uc911\uc5d0\uc11c\ub3c4 css \ucf54\ub4dc \uc2a4\ud0c0\uc77c \ucee8\ubca4\uc158\uc744 stylelint\uc5d0 \uc778\uac00\ud558\uace0 vscode-stylelint extension\uc744 \uc0ac\uc6a9\ud574 DX\ub97c \ub192\ud600\ubcf4\ub824 \ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uac1c\ubc1c-\ud658\uacbd"},"\uac1c\ubc1c \ud658\uacbd"),(0,l.kt)("p",null,"\uac1c\ubc1c\ud658\uacbd\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"typescript v5.2.2"),(0,l.kt)("li",{parentName:"ul"},"react v18.2.0"),(0,l.kt)("li",{parentName:"ul"},"styled-components v6.1.8"),(0,l.kt)("li",{parentName:"ul"},"stylelint v16.2.1"),(0,l.kt)("li",{parentName:"ul"},"vscode-stylelint extension v1.3.0")),(0,l.kt)("h2",{id:"stylelint-\uc138\ud305"},"stylelint \uc138\ud305"),(0,l.kt)("p",null,"react\uc640 styled-components\ub97c \uc124\uce58\ud588\ub2e4\ub294 \uac00\uc815 \ud558\uc5d0 \uc9c4\ud589\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"styled-components \uacf5\uc2dd\ubb38\uc11c\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/tooling#stylelint"},"tooling"),"\uc744 \ucc38\uace0\ud558\uba74 \ucd08\uae30 \uc124\uc815\uc740 \uc27d\uac8c \uad6c\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nstyled-components\uc5d0\uc11c\ub294 stylelint v15 \uc774\uc0c1\uc744 \uc4f0\ub77c\uace0 \ucd94\ucc9c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. stylelint\ub97c v14\ub098 \uadf8 \uc774\ud558\uc758 \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\uc2e4 \ubd84\ub4e4\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/tooling#for-stylelint-v14-and-below"},"\uc774 \uacfc\uc815"),"\uc744 \uac70\uce58\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc6b0\uc120 stylelint\ub97c \uc124\uce58\ud574 \ubcfc\uae4c\uc694?\nstylelint\uc758 \uae30\ubcf8\uc801\uc778 lint \uc124\uc815\uc744 \uc801\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"stylelint-config-standard"),"\ub3c4 \uc124\uce58\ud574 \uc90d\uc2dc\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// npm\nnpm install --save-dev stylelint stylelint-config-standard\n\n// yarn\nyarn add -D stylelint stylelint-config-standard\n\n// pnpm\npnpm add -D stylelint stylelint-config-standard\n")),(0,l.kt)("p",null,"styled-components\uc758 \ubb38\ubc95\uc744 \ud30c\uc2f1\ud558\uace0 \ud574\uc11d\ud558\uae30 \uc704\ud574\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"postcss-styled-syntax"),"\ub97c \uc124\uce58\ud574 \uc90d\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// npm\nnpm install --save-dev postcss-styled-syntax\n\n// yarn\nyarn add -D postcss-styled-syntax\n\n// pnpm\npnpm add -D postcss-styled-syntax\n")),(0,l.kt)("p",null,"\uc774\ubc88 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kutsan/stylelint-config-clean-order"},"stylelint-config-clean-order")," \uc5d0\uc11c \uc81c\uacf5\ud558\ub294 css \uc18d\uc131 \ub098\uc5f4 \uaddc\uce59\uc744 \ubc14\ud0d5\uc73c\ub85c \ucd94\uac00\uc801\uc778 \ucee8\ubca4\uc158\uc744 \uad6c\ucd95\ud558\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4.\n\uadf8\ub798\uc11c \uc800\ub294 \uc774 \ud328\ud0a4\uc9c0\ub3c4 \uc124\uce58\ud574 \uc904\uac8c\uc694."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"yarn berry\uc758 \uacbd\uc6b0 postcss-styled-syntax\ub97c \uc124\uce58\ud558\uba74 \uc774 \uc758\uc874\uc131\uc778 postcss\ub97c \uac19\uc774 \uc124\uce58\ud574 \ub2ec\ub77c\uace0 \ud558\ub2c8 \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,l.kt)("img",{src:"/img/blog/config-stylelint/yarn-postcss-install.png",alt:"\uc774\ubbf8\uc9c0",style:{marginBottom:"20px"}}),(0,l.kt)("p",{parentName:"admonition"},"\ub610\ud55c postcss\ub97c \uc124\uce58\ud558\uac8c \ub418\uba74 v8 \uc774\uc0c1\uc774 \uc124\uce58\ub420 \ud150\ub370, \uc774\ub807\uac8c \ub418\uba74 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stylelint-scss/stylelint-config-standard-scss/issues/2"},"stylelint\uc5d0\uc11c \uc4f0\ub294 postcss\uc640 \uc124\uce58\ud55c postcss\ub791 \ubc84\uc804\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc544 \ubb38\uc81c"),"\uac00 \uc0dd\uae41\ub2c8\ub2e4.\npackage.json\uc5d0\uc11c postcss\ub97c resolution\uc5d0 \ub123\uc5b4\uc8fc\uc138\uc694."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "devDependencies": {\n    ...\n    "postcss": "^8.4.35",\n  },\n  "resolutions": {\n    "postcss": "^8.4.35"\n  },\n}\n'))),(0,l.kt)("p",null,"\uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"p"},".stylelintrc")," \ud30c\uc77c\uc744 \ud504\ub85c\uc81d\ud2b8 root\uc5d0 \ub9cc\ub4e4\uc5b4 \uc90d\uc2dc\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".stylelintrc"',title:'".stylelintrc"'},'{\n  "extends": ["stylelint-config-standard", "stylelint-config-clean-order"],\n  "customSyntax": "postcss-styled-syntax"\n}\n')),(0,l.kt)("p",null,"\uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc5d0 stylelint\ub97c \uc2e4\ud589\uc2dc\ud0a4\uae30 \uc704\ud55c script\ub97c \uc791\uc131\ud574 \ubd05\uc2dc\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "scripts": {\n    "lint:css":"stylelint \'./src/**/*.{ts,tsx,js,jsx}\'"\n    "lint:css:fix":"stylelint \'./src/**/*.{ts,tsx,js,jsx}\' --fix"\n  }\n}\n')),(0,l.kt)("p",null,"\uc774\uc81c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud574 \ubcf4\uba74 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run lint:css\n\nnpm run lint:css:fix\n")),(0,l.kt)("h2",{id:"vscode-stylelint-extension-\uc5f0\uacb0\ud558\uae30"},"vscode-stylelint extension \uc5f0\uacb0\ud558\uae30"),(0,l.kt)("p",null,"vscode\uc5d0\uc11c stylelint extension\uc744 \uc124\uce58\ud574 \uc8fc\uc138\uc694."),(0,l.kt)("img",{src:"/img/blog/config-stylelint/vscode-stylelint-extension.png",alt:"\uc774\ubbf8\uc9c0",style:{marginBottom:"20px"}}),(0,l.kt)("p",null,"\uc124\uce58\uac00 \ub05d\ub098\uba74 \ud504\ub85c\uc81d\ud2b8 root\uc5d0 .vscode \ud3f4\ub354\ub97c \ub9cc\ub4e0 \ud6c4 settings.json \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud560 vscode \uc138\ud305\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "editor.codeActionsOnSave": {\n    // \uc120\ud0dd\uc801\uc73c\ub85c always\ub97c \uc4f0\uc11c\ub3c4 \ub429\ub2c8\ub2e4.\n    "source.fixAll.stylelint": "explicit",\n  },\n  // user\uc758 \uae30\ubcf8 \uc138\ud305\uc774 true\ub77c\uba74 \uc124\uc815\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4.\n  "stylelint.enable": true,\n  // css-in-js \ubc29\uc2dd\uc774\ubbc0\ub85c typescript\ub098 typescriptreact\uc5d0\uc11c\ub3c4 stylelint\uac00 \ub3d9\uc791\ud558\uac8c \ud569\ub2c8\ub2e4. js \ud658\uacbd\uc758 \uacbd\uc6b0 javascript, javascriptreact\ub97c \ucd94\uac00\ud574 \uc8fc\uc138\uc694.\n  "stylelint.validate": ["css", "scss", "postcss", "typescript", "typescriptreact"],\n  // css in js\uc5d0 \ub9de\ub294 stylelint \ubb38\ubc95\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4.\n  "stylelint.customSyntax": "postcss-styled-syntax"\n}\n')),(0,l.kt)("p",null,"\uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"p"},"ts, tsx"),"\ud30c\uc77c\uc5d0 \uc791\uc131\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"css in js"),"\uac00 \ud30c\uc77c\uc774 \uc800\uc7a5\ub420 \ub54c \ub9c8\ub2e4 fix \ub429\ub2c8\ub2e4!"),(0,l.kt)("p",null,"\uc790\ub3d9\uc218\uc815\uc774 \uc548\ub41c\ub2e4\uba74 \uc0ac\uc6a9\uc790 \uc124\uc815\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694.\nstylelint.config\uac00 \ube44\uc5b4 \uc788\uac70\ub098 stylelint\uc640 \uad00\ub828\ub41c \ub2e4\ub978 \uc720\uc800 \uc138\ud305\uc5d0 \uc758\ud574 \uc791\ub3d9\uc774 \uc548\ub418\ub294 \uacbd\uc6b0\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"yarn berry\uc758 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"post-styled-syntax"),"\ub97c \ucc3e\uc9c0 \ubabb\ud558\ub294 \ubb38\uc81c\uac00 \uc0dd\uae41\ub2c8\ub2e4.\n\uadf8\ub798\uc11c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stylelint/stylelint/issues/5632#issuecomment-972374915"},"rc \ud30c\uc77c\uc744 js\ub85c \ubc14\uafb8\uc5b4\uc11c customSyntax\ub97c require\ub85c \uac00\uc838\uc624\ub294 \ubc29\ubc95"),"\uc73c\ub85c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"admonition"},"\ud558\uc9c0\ub9cc stylelint\uc758 \uacbd\uc6b0 ",(0,l.kt)("a",{parentName:"p",href:"https://stylelint.io/migration-guide/to-16/"},"v16 \ubd80\ud130 cjs\ubc29\uc2dd\uc744 \uc5c6\uc574\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",{parentName:"admonition"},"\uadf8\ub9ac\uace0 vscode-stylelint\uc5d0\uc11c yarn berry\uc758 pnp \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 yarn esm pnp api\ub97c \uc4f0\uae30 \ub54c\ubb38\uc5d0 pnp \ubc29\uc2dd\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \ud798\ub4ed\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"admonition"},"\uc774 \uacbd\uc6b0\uc5d0\ub294(\ud604\uc7ac\ub85c\uc368\ub294) stylelint\uc640 vscode-stylelint \ubc84\uc804\uc744 \ub0ae\ucd94\uc5b4 \ub9de\ucd94\uac70\ub098, \ub2e4\ub978 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\ub97c \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc800\uc758 \uacbd\uc6b0\uc5d0\ub3c4 yarn berry v4.1.0\uc744 \uc0ac\uc6a9\ud558\ub2e4\uac00 \ud574\ub2f9 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\nyarn berry\uc758 pnp\ub97c \ub9ce\uc740 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc774 \uc9c0\uc6d0\ud55c\ub2e4\uace0\ub4e4 \ud558\uc9c0\ub9cc, \uc544\uc9c1\uae4c\uc9c0\ub3c4 \ub2e4\ub978 \ud328\ud0a4\uc9c0\uc640 \ud638\ud658\uc774 \uc548\ub418\uac70\ub098 \uc9c0\uc6d0\uc774 \uc548\ub418\ub294 \uacbd\uc6b0 \ub4f1 \uc790\uc798\ud55c \ubb38\uc81c\uac00 \ub9ce\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\n\uc774\ub7f4 \ub54c \ub9c8\ub2e4 \uc774\ub7f0 \uc790\uc798\ud55c \ubc84\uadf8\ub4e4\uc5d0 \uc9c0\uccd0 \uacfc\uc5f0 yarn berry\uc758 zero install\uacfc pnp\ub97c \ud1b5\ud574 \uc5bb\ub294 \uc7a5\uc810\uc774 \uadf8\ub807\uac8c \ud074\uae4c \uc0dd\uac01\ud574 \ubcf4\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 pnpm\uc744 \ub3c4\uc785\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. pnpm\ub3c4 yarn berry \uc774\uc0c1\uc73c\ub85c \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 \uc885\uc18d\uc131 \uad00\ub9ac\uc640 \ub514\uc2a4\ud06c \uc808\uc57d\uc774 \uac00\ub2a5\ud588\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 zero-install\uc774 \uac00\uc9c0\ub294 \uc7a5\uc810\uc744 \uc774\ubc88 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0b4\ub9b4 \uc218 \uc5c6\ub2e4\uace0 \ud310\ub2e8\ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n\ud504\ub85c\uc81d\ud2b8\uc758 \ud2b9\uc131\uc0c1 \ube0c\ub79c\uce58\ub9c8\ub2e4 \ub2e4\ub978 \uc758\uc874\uc131\uc744 \ub744\ub294 \uc77c\uc740 \ub4dc\ubb3c\uc5c8\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \uae38\uc5b4\ub3c4 2~3\ub144\uc774\uba74 \uc0c8\ub85c \ubc14\ub014 \ud504\ub85c\uc81d\ud2b8\uc600\uae30 \ub54c\ubb38\uc5d0 \uc758\uc874\uc131 \uad00\ub9ac \uce21\uba74\uc5d0\uc11c \ucd94\uac00\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uac8c \ub420 \ud328\ud0a4\uc9c0\uac00 \uc801\uc5b4 \uc758\uc874\uc131\uc774 \uc0dd\uae30\ub294 \uc77c\uc774 \ub4dc\ubb3c\ub2e4\uace0 \ud310\ub2e8\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubb3c\ub860 \uc774 \uc120\ud0dd\uc5d0 \ub300\ud574 \ubb3c\uc74c\ud45c\ub97c \ub358\uc9c8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. pnp\ub97c \ucc98\uc74c \uc54c\uc558\uc744 \ub54c\ub294 \uc815\ub9d0 \uc88b\uc740 \ubc29\ud5a5\uc774\ub77c\uace0 \uc0dd\uac01\ud588\uac70\ub4e0\uc694.\n\ub098\uc911\uc5d0\ub294 \ub610 \uc5b4\ub5bb\uac8c \uc0dd\uac01\uc774 \ubcc0\ud560\uc9c0 \ubaa8\ub974\uaca0\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc9c0\uae08\uc73c\ub85c\uc368\ub294 \uc774 \uc120\ud0dd\uc5d0 \ub9cc\uc871\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("p",null,"stylelint\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c \uc5b4\uca4c\ub2e4 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 \uc774\uc57c\uae30\uae4c\uc9c0 \ud558\uac8c \ub418\uc5c8\ub124\uc694.\n\uc774\ubc88 \uae30\ud68c\ub97c \ud1b5\ud574 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uc758 \ub3c4\uc785\ub3c4 \ud504\ub85c\uc81d\ud2b8\uc758 \ud2b9\uc131\uacfc \uc5f0\uad00\uc9c0\uc5b4\uc11c \uc0dd\uac01\ud574\ubcf4\uac8c \ub418\uc5b4 \uc88b\uc558\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);