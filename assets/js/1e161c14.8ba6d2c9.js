"use strict";(self.webpackChunkdodam_log=self.webpackChunkdodam_log||[]).push([[7123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[s]="string"==typeof e?e:n,c[1]=m;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));r(3768),r(9728);const o={date:new Date("2023-11-08T00:00:00.000Z"),authors:"d0dam",title:"React.memo\uc640 \uc9c0\ub3c4 \ucee4\uc2a4\ud140 \ub9c8\ucee4",description:"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",keywords:["React","react \uc9c0\ub3c4","react memo","memo","\uba54\ubaa8\uc774\uc81c\uc774\uc158"],tags:["React"]},c=void 0,m={permalink:"/blog/react/apply-react-memo-to-map",source:"@site/blog/react/apply-react-memo-to-map.mdx",title:"React.memo\uc640 \uc9c0\ub3c4 \ucee4\uc2a4\ud140 \ub9c8\ucee4",description:"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",date:"2023-11-08T00:00:00.000Z",formattedDate:"2023\ub144 11\uc6d4 8\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:11.81,hasTruncateMarker:!0,authors:[{name:"minjae Kim",url:"https://github.com/d0dam",email:"smallkdb@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/51052049?v=4",key:"d0dam"}],frontMatter:{date:"2023-11-08T00:00:00.000Z",authors:"d0dam",title:"React.memo\uc640 \uc9c0\ub3c4 \ucee4\uc2a4\ud140 \ub9c8\ucee4",description:"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",keywords:["React","react \uc9c0\ub3c4","react memo","memo","\uba54\ubaa8\uc774\uc81c\uc774\uc158"],tags:["React"]},nextItem:{title:"\ub9ac\uc561\ud2b8 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ud0d0\uad6c\ud558\uae30",permalink:"/blog/react/react-side-effect"}},i={authorsImageUrls:[void 0]},l=[],p={toc:l},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4."))}u.isMDXComponent=!0},9728:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/medias/marker-after-c1f868a48e5537bd2fe7f1ed79cf2909.mp4"},3768:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/medias/marker-before-0e9b38d76ee20a156f258fcdca393b7d.mp4"}}]);