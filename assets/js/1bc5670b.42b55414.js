"use strict";(self.webpackChunkdodam_log=self.webpackChunkdodam_log||[]).push([[6904],{5042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>m,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),l=a(9178),p=a(294),o=a(2004);const m={date:new Date("2023-11-08T00:00:00.000Z"),authors:"d0dam",title:"React.memo\uc640 \uc9c0\ub3c4 \ucee4\uc2a4\ud140 \ub9c8\ucee4",description:"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",keywords:["React","react \uc9c0\ub3c4","react memo","memo","\uba54\ubaa8\uc774\uc81c\uc774\uc158"],tags:["React"]},s=void 0,i={permalink:"/blog/react/apply-react-memo-to-map",source:"@site/blog/react/apply-react-memo-to-map.mdx",title:"React.memo\uc640 \uc9c0\ub3c4 \ucee4\uc2a4\ud140 \ub9c8\ucee4",description:"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",date:"2023-11-08T00:00:00.000Z",formattedDate:"2023\ub144 11\uc6d4 8\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:11.82,hasTruncateMarker:!0,authors:[{name:"minjae Kim",url:"https://github.com/d0dam",email:"smallkdb@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/51052049?v=4",key:"d0dam"}],frontMatter:{date:"2023-11-08T00:00:00.000Z",authors:"d0dam",title:"React.memo\uc640 \uc9c0\ub3c4 \ucee4\uc2a4\ud140 \ub9c8\ucee4",description:"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",keywords:["React","react \uc9c0\ub3c4","react memo","memo","\uba54\ubaa8\uc774\uc81c\uc774\uc158"],tags:["React"]},prevItem:{title:"\ub9c8\uc6b0\uc2a4 \ub4dc\ub798\uadf8 \uc2a4\ud06c\ub864 \uad6c\ud604\ud558\uae30",permalink:"/blog/react/implement-drag-scroll"},nextItem:{title:"\ub9ac\uc561\ud2b8 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ud0d0\uad6c\ud558\uae30",permalink:"/blog/react/react-side-effect"}},c={authorsImageUrls:[void 0]},u=[{value:"\uc9c0\ub3c4 \ub9c8\ucee4 \ub9cc\ub4e4\uae30",id:"\uc9c0\ub3c4-\ub9c8\ucee4-\ub9cc\ub4e4\uae30",level:2},{value:"\ubb38\uc81c \ud655\uc778",id:"\ubb38\uc81c-\ud655\uc778",level:2},{value:"React.memo \uc0ac\uc6a9\ud558\uae30",id:"reactmemo-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"props\ub85c \uc804\ub2ec\ub418\ub294 celeb\uacfc restaurant\uc740 \uac1d\uccb4\uc785\ub2c8\ub2e4.",id:"props\ub85c-\uc804\ub2ec\ub418\ub294-celeb\uacfc-restaurant\uc740-\uac1d\uccb4\uc785\ub2c8\ub2e4",level:3},{value:"props\ub85c \uc804\ub2ec\ub418\ub294 map\uc774 \ub0b4\ubd80\uc801\uc73c\ub85c \ubc14\ub014 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",id:"props\ub85c-\uc804\ub2ec\ub418\ub294-map\uc774-\ub0b4\ubd80\uc801\uc73c\ub85c-\ubc14\ub014-\uc218\ub3c4-\uc788\uc2b5\ub2c8\ub2e4",level:3},{value:"\uadf8\ub7fc\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0",id:"\uadf8\ub7fc\uc5d0\ub3c4-\ubd88\uad6c\ud558\uace0",level:2}],k={toc:u},d="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\uc9c0\ub3c4\uc5d0 \uc5ec\ub7ec \uc704\uce58\ub97c \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c \uc800\ud76c\ub294 \ub9c8\ucee4\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc9c0\ub3c4\uac00 \ubcc0\ud560 \ub54c \ub9c8\ub2e4 \uc9c0\ub3c4\uc5d0 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ub9c8\ucee4\ub97c \uc804\ubd80 \uc0c8\ub85c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc774 \uae30\ubcf8\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"\uc9c0\ub3c4-\ub9c8\ucee4-\ub9cc\ub4e4\uae30"},"\uc9c0\ub3c4 \ub9c8\ucee4 \ub9cc\ub4e4\uae30"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://celuveat.com/map"},"\uc140\ub7fd\uc787 \ud504\ub85c\uc81d\ud2b8")," (\uc720\uba85\uc778\uc774 \ub2e4\ub140\uac04 \uc74c\uc2dd\uc810 \uc548\ub0b4 \uc11c\ube44\uc2a4)\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uacaa\uc740 \uc77c\uc785\ub2c8\ub2e4. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/woowacourse-teams/2023-celuveat/pull/497"},"\ud574\ub2f9 PR")),(0,n.kt)("p",null,"\uc74c\uc2dd\uc810 \uc704\uce58\ub97c \uc9c0\ub3c4\uc0c1\uc5d0\uc11c \ub9c8\ucee4\ub85c \ubcf4\uc5ec\uc8fc\ub294 \uc791\uc5c5\uc744 \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4.\n\uc9c0\ub3c4\ub294 google map api\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4.\ngoogle map api\uc5d0\uc11c\ub294 \ubcc4\ub3c4\uc758 ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/markers?hl=ko"},"\ub9c8\ucee4 \uae30\ub2a5\uc744 \uc9c0\uc6d0"),"\ud558\uc9c0\ub9cc \uc774 \ub9c8\ucee4\ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc11c\ube44\uc2a4\uc5d0\uc11c \uc81c\uacf5\ud558\ub824\ub294 \ub9c8\ucee4\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ud2b9\uc9d5\uc744 \uac16\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud638\ubc84 \ubc0f \ud074\ub9ad\uc2dc \uc774\ubca4\ud2b8\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc870\uac74\uc5d0 \ub530\ub77c \ub9c8\ucee4\ub97c \ub2e4\ub974\uac8c \uadf8\ub824\uc57c \ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\ub530\ub77c\uc11c \ub9c8\ucee4\uac00 \uc544\uc774\ucf58\uc774\ub098 \uc774\ubbf8\uc9c0\uac00 \uc544\ub2cc \ucef4\ud3ec\ub10c\ud2b8 \ud615\ud0dc\uc5ec\uc57c \ud588\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uadf8\ub798\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 OverlayMarker\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc9c0\ub3c4\uc5d0 \uc785\ud600\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="OverlayMarker.tsx"',title:'"OverlayMarker.tsx"'},'// \uae30\uc874 \ucf54\ub4dc\ub97c \uc774\ud574\ub97c \uc704\ud574 \uac04\uc18c\ud654\ud558\uace0 \ubcc0\ud615\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\ninterface OverlayMarkerProps {\n  celeb: { id: number; name: string; profileImageUrl: string };\n  map: google.maps.Map;\n  restaurant: { id: number; name: string; lat: number; lng: number };\n}\n\nfunction OverlayMarker({ celeb, map, restaurant }: OverlayMarkerProps) {\n  const { id, name, lat, lng } = restaurant;\n  const [isClicked, setIsClicked] = useState(false);\n  const ref = useRef();\n  const hoveredId = useHoveredRestaurantState((state) => state.id);\n\n  const clickMarker = () => setIsClicked(true);\n\n  return (\n    map && (\n      //Overlay \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc790\uc2dd\uc694\uc18c\uac00 props\ub85c \uc804\ub2ec\ud55c position\uc5d0 \ub9de\uac8c \uc9c0\ub3c4\uc5d0 Overlay\ub429\ub2c8\ub2e4.\n      <Overlay position={{ lat, lng }} map={map} zIndex={isClicked || hoveredId === restaurantId ? 10 : 0}>\n        <StyledMarkerContainer ref={ref}>\n          <StyledMarker\n            onClick={clickMarker}\n            isClicked={isClicked}\n            isRestaurantHovered={hoveredId === restaurantId}\n            data-cy={`${restaurant.name} \ub9c8\ucee4`}\n          >\n            <ProfileImage name={celeb.name} imageUrl={celeb.profileImageUrl} size="32px" />\n          </StyledMarker>\n        </StyledMarkerContainer>\n      </Overlay>\n    )\n  );\n}\n\nexport default OverlayMarker;\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Overlay \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc81c\uc791\ud560 \ub54c\ub294 \uc544\ub798\uc758 \uae00\uc744 \ucc38\uace0\ud588\uc2b5\ub2c8\ub2e4.\n\ub9cc\ub4dc\ub294 \uacfc\uc815\uc774 \uad81\uae08\ud558\ub2e4\uba74 \uc77d\uc5b4\ubcf4\uc138\uc694:)"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/building-a-custom-google-maps-marker-react-component-like-airbnb-in-next-js-52fb37ccfabb"},"Building a Custom Google Maps Marker React Component Like Airbnb in Next.js"))),(0,n.kt)("h2",{id:"\ubb38\uc81c-\ud655\uc778"},"\ubb38\uc81c \ud655\uc778"),(0,n.kt)("p",null,"\uc774\uc81c \ud55c \ubc88 \uc9c0\ub3c4\uc5d0\uc11c \ub9c8\ucee4\uac00 \uc5b4\ub5bb\uac8c \ud45c\uc2dc \ub418\ub294\uc9c0 \ud655\uc778\ud574\ubcfc\uae4c\uc694?"),(0,n.kt)(o.Z,{controls:!0,playing:!0,loop:!0,url:l.Z,style:{marginBottom:"20px"},mdxType:"ReactPlayer"}),(0,n.kt)("p",null,"\ubcf4\ub2e4\uc2dc\ud53c \uc9c0\ub3c4\uac00 \uc6c0\uc9c1\uc77c \ub54c \ub9c8\ub2e4 \ub9c8\ucee4 \uc804\ubd80\ub97c \uc0c8\ub85c \uadf8\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\ubb38\uc81c\ub294 2\uac00\uc9c0 \uc785\ub2c8\ub2e4."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\ub2e8\uc21c fetch\ub97c \uc0ac\uc6a9\ud574 \ub9c8\ucee4\uc5d0 \ub370\uc774\ud130\ub97c \ubc1b\uace0 \uc788\uc73c\uba70, \uce90\uc2f1 \ub85c\uc9c1\uc774 \uc544\uc9c1 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \uc9c0\ub3c4\uc758 \uc601\uc5ed\uc774 \ubc14\ub014 \ub54c \ub9c8\ub2e4 \ub370\uc774\ud130\ub97c fetch \ud574\uc640\uc11c \uc0c8\ub85c \uc785\ud788\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\uc9c0\ub3c4\uc758 \uc601\uc5ed\uc774 \ubc14\ub00c\uba74 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc778 Map \uc790\uccb4\uac00 \ub9ac\ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \uc790\uc2dd \uc694\uc18c\uc778 OverlayMarker\ub3c4 \ub9ac\ub80c\ub354\ub9c1\uc774 \uc77c\uc5b4\ub0a9\ub2c8\ub2e4.")),(0,n.kt)("p",null,"fetch \ub85c\uc9c1\uc758 \uacbd\uc6b0 \uc55e\uc73c\ub85c tanstack-query\ub97c \ub3c4\uc785\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\ntanstack-query\ub97c \ub3c4\uc785\ud558\uac8c \ub418\uba74 \uc790\uc5f0\uc2a4\ub7fd\uac8c \uce90\uc2f1\uc744 \ud574\uc8fc\uae30 \ub54c\ubb38\uc5d0 \uccab \ubc88\uc9f8 \ubb38\uc81c\ub294 \uc6b0\uc120\uc21c\uc704\ub97c \ub4a4\ub85c \ub450\uc5c8\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uadf8\ub798\uc11c \uc774\ubc88 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c\ub294 \ub450 \ubc88\uc9f8 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"reactmemo-\uc0ac\uc6a9\ud558\uae30"},"React.memo \uc0ac\uc6a9\ud558\uae30"),(0,n.kt)("p",null,"\uc81c\uac00 \uc6d0\ud558\ub294 \ub3d9\uc791\uc740 props\uac00 \ub3d9\uc77c\ud55c marker\ub4e4\uc740 \ub9ac\ub80c\ub354\ub9c1\uc774 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uac8c \ub9c9\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub807\uac8c \ub418\uba74 \uc9c0\ub3c4\uc5d0 \uc0c8\ub86d\uac8c \uadf8\ub824\uc9c0\ub294 \ub9c8\ucee4\ub9cc \uc0c8\ub86d\uac8c \ub80c\ub354\ub9c1\uc774 \ub418\uace0, \uc9c0\ub3c4 \uc601\uc5ed\uc5d0 \uc774\ubbf8 \uadf8\ub824\uc9c4 \ub9c8\ucee4\ub294 \ub80c\ub354\ub9c1\uc774 \ub2e4\uc2dc \uc77c\uc5b4\ub098\uc9c0 \uc54a\uace0 \ub0a8\uc544\uc788\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub3d9\uc77c\ud55c props\uac00 \ub4e4\uc5b4\uc62c \ub54c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\uace0 \uc2f6\uc73c\uba74 ",(0,n.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/memo"},"React.memo"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uadf8\ub7fc \ud55c\ubc88 react memo\ub97c \uc801\uc6a9\ud574 \ubcf4\ub3c4\ub85d \ud558\uc8e0."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="OverlayMarker.tsx"',title:'"OverlayMarker.tsx"'},"interface OverlayMarkerProps {\n  celeb: { id: number; name: string; profileImageUrl: string };\n  map: google.maps.Map;\n  restaurant: { id: number; name: string; lat: number; lng: number };\n}\n\n//highlight-next-line\nfunction OverlayMarker({ celeb, map, restaurant }: OverlayMarkerProps) {...} // \uc0dd\ub7b5\n\nexport default React.memo(OverlayMarker); // React.memo\ub85c OverlayMarker\ub97c \uac10\uc2f8\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.\n")),(0,n.kt)("p",null,"\uc774\ub807\uac8c \ud574\ub3c4 \uc9c0\ub3c4\uc758 \ub9c8\ucee4\ub4e4\uc740 \uc5ec\uc804\ud788 \uc0c8\ub85c \uadf8\ub824\uc9d1\ub2c8\ub2e4.\n\uc0dd\uac01\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294 \uc774\uc720\uac00 \ub450 \uac00\uc9c0\uc815\ub3c4 \uc0dd\uac01\ub0a9\ub2c8\ub2e4."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"props\ub85c \uc804\ub2ec\ub418\ub294 celeb\uacfc restaurant\uc740 \uac1d\uccb4\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"props\ub85c \uc804\ub2ec\ub418\ub294 map\uc774 \ub0b4\ubd80\uc801\uc73c\ub85c \ubc14\ub014 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("h3",{id:"props\ub85c-\uc804\ub2ec\ub418\ub294-celeb\uacfc-restaurant\uc740-\uac1d\uccb4\uc785\ub2c8\ub2e4"},"props\ub85c \uc804\ub2ec\ub418\ub294 celeb\uacfc restaurant\uc740 \uac1d\uccb4\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"props\ub85c \uac1d\uccb4\uac00 \uc804\ub2ec"),"\ub41c\ub2e4\ub294 \uc810\uc744 \uc8fc\ubaa9\ud574\ubcfc\uae4c\uc694?"),(0,n.kt)("p",null,"React.memo\ub294 props\uac00 \ubc14\ub00c\uc5c8\ub2e4\ub294 \uac83\uc744 \ud310\ub2e8\ud560 \ub54c ",(0,n.kt)("strong",{parentName:"p"},"\uc595\uc740 \ube44\uad50"),"\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc774\uc804\uc758 props\uc640\uc758 \uc595\uc740 \ube44\uad50 \uacb0\uacfc\uac00 \uac19\uc9c0 \uc54a\uc744 \ub54c\ub9c8\ub2e4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1 \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uad6c\uccb4\uc801\uc73c\ub85c \uc774\uc57c\uae30\ud558\uc790\uba74 React\ub294 ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is"},"Object.is")," \ube44\uad50\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubaa8\ub4e0 prop\uc744 \uc774\uc804 \uac12\uacfc \ube44\uad50\ud569\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"Object.is(3, 3); // true\nObject.is(NaN, NaN); // true\nObject.is(-0, 0); // false\nObject.is('1', 1); // false\nObject.is({}, {}); // false\n")),(0,n.kt)("p",null,"\ub530\ub77c\uc11c \uc0c1\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uac1d\uccb4\ub97c \uc804\ub2ec\ud574 \uc904\ub54c useMemo\ub97c \uc0ac\uc6a9\ud574\uc11c \uae30\uc874\uc758 \uac1d\uccb4 \uc0c1\ud0dc\ub97c \ubcf4\uc804\ud574 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc608\uc2dc\ub85c celeb \uac1d\uccb4 \uc0c1\ud0dc\ub97c \ubcf4\uc804\ud574\uc8fc\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc9e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Map.tsx"',title:'"Map.tsx"'},"// \uc774\ud574\ub97c \uc704\ud574\uc11c \ub85c\uc9c1\uc744 \uac04\uc18c\ud654 \ud588\uc2b5\ub2c8\ub2e4.\n\nfunction Map() {\n    const [celebId, setCelebId] = useState(1);\n    const [celebName, setCelebName] = useState('\ub3c4\ub2f4');\n    const [profileImageUrl, setProfileImageUrl] = useState('\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \uacbd\ub85c');\n\n  // google maps \uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.\n  // \uc9c0\ub3c4\uc758 \ubcf4\uc774\ub294 \uc601\uc5ed\uc5d0 \ubcc0\ud654\uac00 \uc0dd\uae30\uba74 \ud638\ucd9c\ub429\ub2c8\ub2e4.\n    const onIdle = () => {...} // fetch\ub97c \ud1b5\ud574 \uc751\ub2f5\ubc1b\uc740 \ub370\uc774\ud130\ub97c state\uc5d0 \uc800\uc7a5\ud558\ub294 \ub85c\uc9c1\uc774 \ub4e4\uc5b4\uac11\ub2c8\ub2e4.\n\n  // highlight-start\n  const celeb = useMemo(\n    () => ({ celebId, celebName, profileImageUrl }),\n    [celebId, celebName, profileImageUrl]\n  );\n  // highlight-end\n\n    return <Map onIdle={onIdle}><OverlayMarker celeb={celeb} ... /></Map>\n}\n\nfunction OverlayMarker({ celeb, map, restaurant }: OverlayMarkerProps) {...} // \uc0dd\ub7b5\n\nexport default React.memo(OverlayMarker);\n")),(0,n.kt)("h3",{id:"props\ub85c-\uc804\ub2ec\ub418\ub294-map\uc774-\ub0b4\ubd80\uc801\uc73c\ub85c-\ubc14\ub014-\uc218\ub3c4-\uc788\uc2b5\ub2c8\ub2e4"},"props\ub85c \uc804\ub2ec\ub418\ub294 map\uc774 \ub0b4\ubd80\uc801\uc73c\ub85c \ubc14\ub014 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud558\uc9c0\ub9cc \uc804\ub2ec\ub418\ub294 \uac1d\uccb4\uac00 celeb\uacfc restaurant\ub85c \uc774\ub97c \ub2e4 useMemo\ub85c \uad00\ub9ac\ud574\uc8fc\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.\nMap\uc5d0 OverlayMarker\uac00 \uc5ec\ub7ec\uac1c \ub4e4\uc5b4\uac00\uac8c \ub418\uba74 \ub354\uc6b1 \uad00\ub9ac\uac00 \uc5b4\ub824\uc6cc\uc9c0\uaca0\uc8e0."),(0,n.kt)("p",null,"\uc5ec\uae30\uc11c \ucd94\uac00\uc801\uc73c\ub85c OverlayMarker\uc5d0\ub294 map \uc774\ub77c\ub294 prop\ub3c4 \uc804\ub2ec\uc774 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.\nmap\uc758 \uacbd\uc6b0 google maps \uac1d\uccb4 \ud615\ud0dc\ub85c \uc804\ub2ec\uc774 \ub429\ub2c8\ub2e4. \ub0b4\ubd80\uc801\uc73c\ub85c \uac12\uc774 \uc5b4\ub5bb\uac8c \ubc14\ub00c\ub294\uc9c0\ub3c4 \ud30c\uc545\ud558\uae30 \uc5b4\ub835\uae30 \ub54c\ubb38\uc5d0 \ub354\ub354\uc6b1 \ub2e4\ub978 \ubc29\ubc95\uc744 \ucc3e\uc544\ubd10\uc57c\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"React.memo\uc758 \ub450 \ubc88\uc9f8 \uc778\uc790\uc5d0 \uc8fc\ubaa9\ud574 \ubd05\uc2dc\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="React.memo \ud615\uc2dd"',title:'"React.memo','\ud615\uc2dd"':!0},"const MemoizedComponent = memo(SomeComponent, arePropsEqual?)\n")),(0,n.kt)("p",null,"arePropsEqual\uc740 \uc0ac\uc6a9\uc790 \uc815\uc758 \ud568\uc218\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc9c0\uae08\uacfc \uac19\uc774 \uba54\ubaa8\ud654\ub41c \ucef4\ud3ec\ub10c\ud2b8\uc758 props \ubcc0\uacbd\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \ud798\ub4e4 \ub54c(\ubd88\uac00\ub2a5 \ud560 \ub54c) \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \uacbd\uc6b0 React\uac00 \uc595\uc740 \ube44\uad50\ub97c \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0\uc5d0 \uc774\uc804 props\uc640 \uc0c8\ub85c\uc6b4 props\ub97c \ube44\uad50\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"OverlayMarker\ub294 \uc774\uc804 props\uc640 \uac19\ub2e4\ub294 \uac83\uc744 celeb.id\uc640 restaurant.id\ub97c \uc774\uc6a9\ud574 \ud45c\ud604\ud574 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="OverlayMarker.tsx"',title:'"OverlayMarker.tsx"'},"interface OverlayMarkerProps {\n  celeb: { id: number; name: string; profileImageUrl: string };\n  map: google.maps.Map;\n  restaurant: { id: number; name: string; lat: number; lng: number };\n}\n\nfunction OverlayMarker({ celeb, map, restaurant }: OverlayMarkerProps) {...} // \uc0dd\ub7b5\n\n//highlight-start\nfunction areEqual(prevProps: OverlayMarkerProps, nextProps: OverlayMarkerProps) {\n  const { restaurant: prevRestaurant, celeb: prevCeleb } = prevProps;\n  const { restaurant: nextRestaurant, celeb: nextCeleb } = nextProps;\n\n  // \uc774\uc804 props\uc640 \ud604\uc7ac props\uac00 \ub3d9\uc77c\ud55c restaurant.id, celeb.id\ub97c \uac16\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.\n  return prevRestaurant.id === nextRestaurant.id && prevCeleb.id === nextCeleb.id;\n}\n\nexport default React.memo(OverlayMarker, areEqual);\n//highlight-end\n")),(0,n.kt)("admonition",{title:"\ucda9\ubd84\ud788 \uace0\ub824\ud574\ubd05\uc2dc\ub2e4.",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc815\ub9d0 \ub9c8\uc9c0\ub9c9 \uc218\ub2e8\uc785\ub2c8\ub2e4.\n\uc624\ud788\ub824 \uc0ac\uc6a9\uc790 \uc815\uc758 \ud568\uc218\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc18d\ub3c4\uac00 \ub354\uc6b1 \ub290\ub824\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c React\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 ",(0,n.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/memo#specifying-a-custom-comparison-function"},"\ubaa8\ub4e0 props\ub97c \ube44\uad50\ud574\uc57c \ud55c\ub2e4"),"\uace0 \uba85\uc2dc\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",{parentName:"admonition"},"\uc704\uc640 \uac19\uc774 \uc0ac\uc6a9\ud558\ub294\uac83\uc740 \uc0ac\uc2e4 \uad49\uc7a5\ud788 \uc704\ud5d8\ud558\uc8e0. \uc815\ub9d0 \ud2b9\ubcc4\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\ub77c\uba74 \uc9c0\uc591\ud574 \uc8fc\uc138\uc694.")),(0,n.kt)("p",null,"\uc774\uc81c \uc6d0\ud558\ub294\ub300\ub85c \ub3d9\uc791\uc744 \uc798 \ud558\ub294\uad70\uc694!"),(0,n.kt)(o.Z,{controls:!0,playing:!0,loop:!0,url:p.Z,style:{marginBottom:"20px"},mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"\uadf8\ub7fc\uc5d0\ub3c4-\ubd88\uad6c\ud558\uace0"},"\uadf8\ub7fc\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0"),(0,n.kt)("p",null,"\uc65c \uc0ac\uc6a9\uc790 \uc815\uc758 \ud568\uc218\ub97c \uc0ac\uc6a9\ud588\ub0d0\uad6c\uc694?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc6b0\uc120 \uc774\ubbf8\uc9c0\uac00 \uc0ac\uc6a9\ub418\uc5c8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub9ce\uc73c\uba74 \ud55c\ubc88\uc758 \uc9c0\ub3c4 \uc774\ub3d9\uc73c\ub85c 18\uac1c\uc758 \uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub9ac\ub80c\ub354\ub9c1\ud558\ub294 \uac83 \ubcf4\ub2e4\ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 \ud568\uc218\ub97c \uc0ac\uc6a9\ud55c memo\uac00 \uc18d\ub3c4\uba74\uc5d0\uc11c\ub3c4, \uc0ac\uc6a9\uc790 \uce21\uba74\uc5d0\uc11c\ub3c4 \uc774\uc810\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4\uace0 \ubcf4\uc558\uc2b5\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uad6c\uc870\uc5d0 \ub300\ud55c \ud655\uc2e0\uc744 \uac00\uc9c0\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OverlayMarker\uac00 \uac16\ub294 restaurant.id\uc640 celeb.id \uc30d\uc5d0 \ub300\ud574 \uace0\uc720\ud558\ub2e4\uace0 \ud655\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\ucd94\ud6c4\uc5d0 tanstack-query\ub97c \ub3c4\uc785\ud558\uac8c\ub418\uba74 \ud574\ub2f9 \ub85c\uc9c1 \uc81c\uac70\ub97c \uace0\ub824\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uce90\uc2f1\uc774 \uac00\ub2a5\ud574\uc9c0\uace0 \ub9ac\ub80c\ub354\ub9c1 \ubc29\uc9c0\uc5d0 \ub530\ub978 \ud070 \uc774\uc810\uc774 \uc5c6\uc5b4\uc9c0\uba74 \ud574\ub2f9 \ub85c\uc9c1\uc744 \ucd94\ud6c4\uc5d0 \uc81c\uac70\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,n.kt)("p",null,"\uc0c1\ub2f9\ud788 \ubaa8\ud5d8\uc801\uc778 \ub3c4\uc804\uc774\uc5c8\uc9c0\ub9cc, memo\ub97c \uc880 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\ud5a5\uc744 \uc0dd\uac01\ud574 \ubcfc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc5ec\ub7ec\ubd84\ub3c4 \uc81c \uacbd\ud5d8\uc744 \ud1b5\ud574 React.memo\ub97c \uc880 \ub354 \uc790\uc138\ud788 \ub4e4\uc5ec\ub2e4\ubcf4\ub294 \uc2dc\uac04\uc774 \ub418\uc5c8\uae30\ub97c \uae30\ub300\ud569\ub2c8\ub2e4."))}g.isMDXComponent=!0},294:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/medias/marker-after-c1f868a48e5537bd2fe7f1ed79cf2909.mp4"},9178:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/medias/marker-before-0e9b38d76ee20a156f258fcdca393b7d.mp4"}}]);