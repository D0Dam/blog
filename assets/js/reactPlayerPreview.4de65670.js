(self.webpackChunkdodam_log=self.webpackChunkdodam_log||[]).push([[6353],{4433:(e,t,r)=>{var a,l=Object.create,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,d=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))p.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=i(t,l))||a.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>b}),e.exports=(a=u,d(n({},"__esModule",{value:!0}),a));var h=((e,t,r)=>(r=null!=e?l(s(e)):{},d(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)))(r(758));const m="64px",g={};class b extends h.Component{constructor(){super(...arguments),c(this,"mounted",!1),c(this,"state",{image:null}),c(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:r}){if(!h.default.isValidElement(t))if("string"!=typeof t){if(!g[e])return this.setState({image:null}),window.fetch(r.replace("{url}",e)).then((e=>e.json())).then((t=>{if(t.thumbnail_url&&this.mounted){const r=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),g[e]=r}}));this.setState({image:g[e]})}else this.setState({image:t})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:a,previewAriaLabel:l}=this.props,{image:n}=this.state,i=h.default.isValidElement(e),o={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:{width:"100%",height:"100%",backgroundImage:n&&!i?`url(${n})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...o},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:i?"absolute":void 0,...o},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},p=h.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:s.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress,...l?{"aria-label":l}:{}},i?e:null,r||p)}}}}]);