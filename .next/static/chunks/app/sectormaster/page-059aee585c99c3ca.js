(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{6259:function(e,t,a){Promise.resolve().then(a.bind(a,4682))},4682:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=a(4357),s=a(6439),o=a(9337),i=a(7712),n=a(111),l=a.n(n),c=a(9462),d=a(5333);function p(e){let{data:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400",children:(0,r.jsx)(l(),{className:"w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",href:"../sectormasterform",children:"Add New SectorMaster"})})}),(0,r.jsxs)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[(0,r.jsx)(c.x7,{}),(0,r.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,r.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Sr.No"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Sector Id"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Sector Master"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"SECTOR SANYOJAK"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"SECTOR PRABHARI"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Action"}),(0,r.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Delete"})]})}),(0,r.jsx)("tbody",{children:t.map((e,t)=>(0,r.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:[(0,r.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:t+1}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.id}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.name}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.karykarta.some(e=>"shaktikendraSanyojak"===e.role)?e.karykarta.find(e=>"shaktikendraSanyojak"===e.role).name:"None"}),(0,r.jsx)("td",{className:"px-6 py-4",children:e.karykarta.some(e=>"shaktikendraprabhari"===e.role)?e.karykarta.find(e=>"shaktikendraprabhari"===e.role).name:"None"}),(0,r.jsx)("td",{className:"px-6 py-4",children:(0,r.jsx)(l(),{href:"../sectormasterformedit",className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})}),(0,r.jsx)("td",{className:"px-6 py-4",children:(0,r.jsx)("button",{onClick:()=>(function(e){d.h.delete("/sector/".concat(e)).then(e=>{(0,c.ZP)(e.data.message,{icon:"\uD83D\uDC4F",style:{borderRadius:"10px",background:"#333",color:"#fff"}}),setTimeout(()=>{window.location.reload()},1e3)}).catch(e=>{console.log("dd")})})(e.id),className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Delete"})})]},e.id))})]})]})]})}var u=function(){let[e,t]=(0,s.useState)({}),[a,n]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!0);async function u(){await d.h.get("/sector").then(e=>{t(e.data.data),c(!1)}).catch(e=>{n(e)})}return((0,s.useEffect)(()=>{u()},[]),console.log(e),a)?(0,r.jsx)("div",{children:"error..... !!!!!"}):l?(0,r.jsx)("div",{children:"loading...."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"w-[100vw]  z-10",children:(0,r.jsx)(o.NavbarLogout,{})}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{children:(0,r.jsx)(i.Y,{})}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("h1",{className:"text-2xl font-extrabold mt-10",children:"Sector Master"})}),(0,r.jsx)(p,{data:e})]})]})]})}},9462:function(e,t,a){"use strict";let r,s;a.d(t,{x7:function(){return es},ZP:function(){return eo}});var o,i=a(6439);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?u(i,o):o+"{"+u(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=u(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=u.p?u.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,s)=>{var o;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(p," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(p," ").trim();return r[0]})(e);m[n]=u(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),o=m[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),n},x=(e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?x(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let g,b,v,w=y.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(l),n.className=y.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),g(c,n)}return t?t(s):s}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,E=(r=0,()=>(++r).toString()),$=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},O=new Map,C=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),z({type:4,toastId:e})},1e3);O.set(e,t)},S=e=>{let t=O.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&S(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?A(e,{type:1,toast:a}):A(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?C(r):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},D=[],P={toasts:[],pausedAt:void 0},z=e=>{P=A(P,e),D.forEach(e=>{e(P)})},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=(e={})=>{let[t,a]=(0,i.useState)(P);(0,i.useEffect)(()=>(D.push(a),()=>{let e=D.indexOf(a);e>-1&&D.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},T=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||E()}),_=e=>(t,a)=>{let r=T(t,e,a);return z({type:2,toast:r}),r.id},F=(e,t)=>_("blank")(e,t);F.error=_("error"),F.success=_("success"),F.loading=_("loading"),F.custom=_("custom"),F.dismiss=e=>{z({type:3,toastId:e})},F.remove=e=>z({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(N(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(N(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var H=(e,t)=>{z({type:1,toast:{id:e,height:t}})},R=()=>{z({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=M(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&z({type:6,time:Date.now()})},[a]),s=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:R,endPause:r,calculateOffset:s}}},Y=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Z=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=j("div")`
  position: absolute;
`,q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(J,null,t):t:"blank"===a?null:i.createElement(q,null,i.createElement(Z,{...r}),"loading"!==a&&i.createElement(U,null,"error"===a?i.createElement(Y,{...r}):i.createElement(B,{...r})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),Q(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(K,{toast:e}),n=i.createElement(W,{...e.ariaProps},N(e.message,e));return i.createElement(V,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,u.p=void 0,g=o,b=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:a},s)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:c}=L(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let o=a.position||t,n=ea(o,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?N(a.message,a):s?s(a):i.createElement(ee,{toast:a,position:o}))}))},eo=F}},function(e){e.O(0,[265,158,234,702,431,744],function(){return e(e.s=6259)}),_N_E=e.O()}]);