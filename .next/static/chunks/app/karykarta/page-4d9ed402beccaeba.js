(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{4808:function(e,t,a){Promise.resolve().then(a.bind(a,3573))},3573:function(e,t,a){"use strict";let l;a.r(t),a.d(t,{default:function(){return f}});var n=a(4357),s=a(6439),r=a(9337),o=a(111),c=a.n(o);let d="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var i={randomUUID:d};let x=new Uint8Array(16),h=[];for(let e=0;e<256;++e)h.push((e+256).toString(16).slice(1));var m=function(e,t,a){if(i.randomUUID&&!t&&!e)return i.randomUUID();e=e||{};let n=e.random||(e.rng||function(){if(!l&&!(l="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(x)})();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(let e=0;e<16;++e)t[a+e]=n[e];return t}return function(e,t=0){return h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]}(n)},u=a(5333),p=a(9462),j=a(9720);function y(e){let{data:t,url:a}=e;console.log(t),console.log(a);let[l,r]=(0,s.useState)(null),{register:o,handleSubmit:d,formState:{errors:i}}=(0,j.cI)();function x(e){console.log(e);let t="/karykarta"===a?"".concat(a,"?download=true&&type=").concat(e):"".concat(a,"&&download=true&&type=").concat(e);u.hi.get(t,{responseType:"blob"}).then(e=>{let t=e.headers["content-disposition"],a="bjp__karykarta__".concat(m());if(t&&-1!==t.indexOf("attachment")){let e=/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(t);null!=e&&e[1]&&(a=e[1].replace(/['"]/g,""))}let l=new Blob([e.data],{type:e.headers["content-type"]}),n=window.URL.createObjectURL(l),s=document.createElement("a");s.href=n,s.download=a,document.body.appendChild(s),s.click(),s.remove()}).catch(e=>{console.error(e)})}return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[(0,n.jsxs)("div",{className:"flex justify-center",children:[(0,n.jsx)("button",{onClick:()=>x("pdf"),className:"px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400 text-sm",children:"PDF"}),(0,n.jsx)("button",{onClick:()=>x("Excel"),className:"px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400 text-sm",children:"Excel"}),(0,n.jsx)("button",{className:"px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400",children:(0,n.jsx)(c(),{href:"../form",children:(0,n.jsx)("button",{className:"w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 text-sm",children:"Add New Karykarta"})})})]}),(0,n.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,n.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-6 py-3",children:"S.no"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"ID"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Name"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Address"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Mobile Number"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Date of Birth"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Religion"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Gender"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Previous Party"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Mundal ID"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Role"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Edit"}),(0,n.jsx)("th",{className:"px-6 py-3",children:"Delete"})]})}),(0,n.jsx)("tbody",{children:t.map((e,t)=>(0,n.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:[(0,n.jsx)("td",{className:"px-6 py-4",children:t}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.id}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.name}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.address}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.mobileNumber}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.dob}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.religion}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.gender}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.previousParty?e.previousParty:"None"}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.mundal.name}),(0,n.jsx)("td",{className:"px-6 py-4",children:e.role}),(0,n.jsx)("td",{className:"px-6 py-4 ",children:(0,n.jsx)(c(),{href:{pathname:"../karykartaformedit",query:{data:JSON.stringify(e)}},children:(0,n.jsx)("button",{className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})}),(0,n.jsx)("td",{className:"px-6 py-4 ",children:(0,n.jsx)("button",{onClick:()=>(function(e){let t=u.hi.delete("karykarta/".concat(e)).then(e=>{(0,p.ZP)(e.data.message,{icon:"\uD83D\uDC4F",style:{borderRadius:"10px",background:"#333",color:"#fff"}}),setTimeout(()=>{window.location.reload()},1e3)}).catch(function(e){p.ZP.error(e.response.data.message),console.log(e.response.data.message)});console.log(t)})(e.id),className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Delete"})}),(0,n.jsx)(p.x7,{})]},e.id))})]})]})})}var g=a(7712),b=a(897),f=()=>{let[e,t]=(0,s.useState)(),[a,l]=(0,s.useState)(!0),[o,c]=(0,s.useState)(null),[d,i]=(0,s.useState)("/karykarta"),x=async()=>{try{var e;let a=await u.hi.get(d);console.log("DSfds",a.data.data),i((null==a?void 0:null===(e=a.config)||void 0===e?void 0:e.url)||""),t(a.data.data),l(!1)}catch(e){console.log(e),c(e.code),l(!1),console.log(o)}};(0,s.useEffect)(()=>{x()},[d]);let{data:h,error:m,isLoading:p}=(0,b.ZP)("".concat(u.v2,"/karykarta/previous"),function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch(t).then(e=>e.json())});console.log(h);let{handleSubmit:f,control:N}=(0,j.cI)();return m?(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-base font-semibold text-black",children:"404"}),(0,n.jsx)("h1",{className:"mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl",children:"Data cannot load !!!!"}),(0,n.jsx)("p",{className:"mt-4 text-base leading-7 text-gray-600",children:"Sorry, we could not fetch data at this moment"})]})}):p?(0,n.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,n.jsxs)("div",{role:"status",children:[(0,n.jsxs)("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,n.jsx)("span",{className:"sr-only",children:"Loading..."})]})}):(console.log(h.data),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-[100vw]  z-10",children:(0,n.jsx)(r.NavbarLogout,{})}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"min-[1440px]:fixed",children:(0,n.jsx)(g.Y,{})}),(0,n.jsx)("div",{className:"w-[80vw] relative top-10 min-[1440px]:left-64",children:a?(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("p",{children:"Loading..."})}):o?(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-base font-semibold text-black",children:"404"}),(0,n.jsx)("h1",{className:"mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl",children:"Data cannot load !!!!"}),(0,n.jsx)("p",{className:"mt-4 text-base leading-7 text-gray-600",children:"Sorry, we could not fetch data at this moment"})]})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("h1",{className:"text-2xl font-extrabold mt-10",children:"कार्यकर्ता विवरण"})}),(0,n.jsxs)("form",{className:"w-full text-center mt-12",onSubmit:f(e=>{let t=(e=>{let t=[];for(let a in e)e[a]&&"None"!==e[a]&&t.push("".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(e[a])));return console.log(t),t.join("&&")})(e),a="".concat("/karykarta").concat(t?"?".concat(t):"");i(a),console.log(a)}),children:[(0,n.jsx)(j.Qr,{name:"religion",control:N,defaultValue:"",render:e=>{let{field:t}=e;return(0,n.jsxs)("select",{...t,className:"w-auto mx-5 my-2 bg-black text-white p-2 mb-4 border rounded-lg",children:[(0,n.jsx)("option",{value:"None",children:"Religion select"}),(0,n.jsx)("option",{value:"hindu",children:"Hindu"}),(0,n.jsx)("option",{value:"muslim",children:"Muslim"}),(0,n.jsx)("option",{value:"christian",children:"Christian"}),(0,n.jsx)("option",{value:"sikh",children:"Sikh"}),(0,n.jsx)("option",{value:"jain",children:"Jain"}),(0,n.jsx)("option",{value:"jews",children:"Jews"}),(0,n.jsx)("option",{value:"Other",children:"Other"})]})}}),(0,n.jsx)(j.Qr,{name:"gender",control:N,defaultValue:"",render:e=>{let{field:t}=e;return(0,n.jsxs)("select",{...t,className:"w-auto mx-5 bg-black text-white p-2 mb-4 border rounded-lg",children:[(0,n.jsx)("option",{value:"None",children:"Gender Select"}),(0,n.jsx)("option",{value:"Male",children:"Male"}),(0,n.jsx)("option",{value:"Female",children:"Female"}),(0,n.jsx)("option",{value:"Other",children:"Other"})]})}}),!p&&0!==h.data.length&&(0,n.jsx)(j.Qr,{name:"previousParty",control:N,defaultValue:"",render:e=>{let{field:t}=e;return(0,n.jsxs)("select",{...t,className:"w-auto mx-5 bg-black text-white p-2 mb-4 border rounded-lg",children:[(0,n.jsx)("option",{value:"None",children:"Choose Party"}),p?(0,n.jsx)("option",{value:"",children:"Loading..."},"loading"):h.data.filteredData.map((e,t)=>(0,n.jsx)("option",{value:e.previousParty,children:e.previousParty},t))]})}}),(0,n.jsx)(j.Qr,{name:"mundalId",control:N,defaultValue:"",render:e=>{let{field:t}=e;return(0,n.jsxs)("select",{...t,className:"w-auto mx-5 bg-black text-white p-2 mb-4 border rounded-lg",children:[(0,n.jsx)("option",{value:"None",children:"Mundal Select"}),h.data.info.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]})}}),(0,n.jsxs)("select",{className:"w-auto mx-5 bg-black text-white p-2 mb-4 border rounded-lg",children:[(0,n.jsx)("option",{children:"Role Select"}),(0,n.jsx)("option",{})]}),(0,n.jsx)("button",{type:"submit",className:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",children:"Submit"})]}),(0,n.jsx)("div",{className:"w-full",children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("h1",{className:"text-2xl font-extrabold mt-10",children:"Mundal Master"}),(0,n.jsx)(y,{data:e,url:d})]})})]})})]})]}))}}},function(e){e.O(0,[265,695,75,373,234,702,431,744],function(){return e(e.s=4808)}),_N_E=e.O()}]);