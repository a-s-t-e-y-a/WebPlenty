(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{841:function(e,l,s){Promise.resolve().then(s.bind(s,3090))},3090:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return u}});var a=s(4357),r=s(6439),n=s(9337),t=s(9720),d=s(5333),i=s(897),o=s(9462),c=()=>{let[e,l]=(0,r.useState)(!1),{register:s,handleSubmit:n,formState:{errors:c}}=(0,t.cI)();async function m(e){return d.hi.post("/karykarta",{...e}).then(function(e){(0,o.ZP)(e.data.message,{icon:"\uD83D\uDC4F",style:{borderRadius:"10px",background:"#333",color:"#fff"}})}).catch(function(e){o.ZP.error(e.response.data.message)})}let{data:u,error:x,isLoading:h}=(0,i.ZP)("".concat(d.v2,"/mundal"),function(){for(var e=arguments.length,l=Array(e),s=0;s<e;s++)l[s]=arguments[s];return fetch(l).then(e=>e.json())});return x?(0,a.jsx)("div",{children:"failed to load"}):h?(0,a.jsxs)("div",{role:"status",children:[(0,a.jsxs)("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Loading..."})]}):(0,a.jsxs)("form",{onSubmit:n(e=>{m(e)}),className:"max-w-md mx-auto mt-8 p-4 bg-gray-300 rounded-md",children:[(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Name:"}),(0,a.jsx)("input",{type:"text",...s("name",{required:!0}),className:"w-full p-2 mb-4 border rounded-md"}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Address:"}),(0,a.jsx)("input",{type:"text",...s("address",{required:!0}),className:"w-full p-2 mb-4 border rounded-md"}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Mobile Number:"}),(0,a.jsx)("input",{type:"text",...s("mobileNumber",{required:!0}),className:"w-full p-2 mb-4 border rounded-md"}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Date of Birth:"}),(0,a.jsx)("input",{type:"date",...s("dob",{required:!0}),className:"w-full p-2 mb-4 border rounded-md"}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Religion:"}),(0,a.jsxs)("select",{...s("religion",{required:!0}),className:"w-full p-2 mb-4 border rounded-md",children:[(0,a.jsx)("option",{value:"hindu",children:"Hindu"}),(0,a.jsx)("option",{value:"muslim",children:"Muslim"}),(0,a.jsx)("option",{value:"christian",children:"Christian"}),(0,a.jsx)("option",{value:"christian",children:"Skih"}),(0,a.jsx)("option",{value:"christian",children:"Jain"}),(0,a.jsx)("option",{value:"christian",children:"Jews"}),(0,a.jsx)("option",{value:"other",children:"Other"})]}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Gender:"}),(0,a.jsxs)("select",{...s("gender",{required:!0}),className:"w-full p-2 mb-4 border rounded-md",children:[(0,a.jsx)("option",{value:"Male",children:"Male"}),(0,a.jsx)("option",{value:"Female",children:"Female"}),(0,a.jsx)("option",{value:"Other",children:"Other"})]}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Previous Party:"}),(0,a.jsx)("input",{type:"text",...s("previousParty"),className:"w-full p-2 mb-4 border rounded-md"}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Mundal:"}),(0,a.jsx)("select",{...s("mundalId",{required:!0}),className:"w-full p-2 mb-4 border rounded-md",children:h?(0,a.jsx)("option",{value:"",children:"Loading..."},"loading"):u.data.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id))}),(0,a.jsx)("label",{className:"block mb-2 font-bold text-gray-700",children:"Role:"}),(0,a.jsx)("div",{className:"flex space-x-4",children:(0,a.jsx)("label",{className:"flex items-center",children:(0,a.jsxs)("select",{...s("role",{required:!0}),className:"w-full p-2 mb-4 border rounded-md",children:[(0,a.jsx)("option",{value:"karyakarta",children:"कार्यकर्ता"}),(0,a.jsx)("option",{value:"adhyaksha",children:"अध्यक्ष"}),(0,a.jsx)("option",{value:"upaadhyaksha",children:"उपाध्यक्ष"}),(0,a.jsx)("option",{value:"mahamantri",children:"महामन्त्री"}),(0,a.jsx)("option",{value:"mantri",children:"मंत्री"}),(0,a.jsx)("option",{value:"koshadhyaksha",children:"कोषाध्यक्ष"})]})})}),(0,a.jsx)("button",{type:"submit",className:"mt-4 p-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800",children:"Submit"}),(0,a.jsx)(o.x7,{})]})},m=s(7712),u=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"w-[100vw] fixed z-10",children:(0,a.jsx)(n.NavbarLogout,{})}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"fixed",children:(0,a.jsx)(m.Y,{})})}),(0,a.jsx)("div",{className:" sm:mx-0 md:mx-8 lg:mx-16 xl:mx-32 max-w-7xl px-4 mx-auto",style:{overflowX:"hidden"},children:(0,a.jsx)("div",{className:"center max-w-7xl  py-12 md:py-24",children:(0,a.jsx)("div",{className:"grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2",children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsxs)("div",{className:"px-2 md:px-12",children:[(0,a.jsx)("p",{className:"text-2xl mt-2 font-bold text-gray-900 md:text-4xl",children:"कार्यकर्त्ता प्रपत्र"}),(0,a.jsx)(c,{onSubmit:e=>{console.log(e)}})]})})})})}),(0,a.jsx)("hr",{className:"mt-6"})]})}}},function(e){e.O(0,[265,695,75,373,234,702,431,744],function(){return e(e.s=841)}),_N_E=e.O()}]);