(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{4174:function(e,t,r){Promise.resolve().then(r.bind(r,3612))},3612:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var l=r(7437);let n=(0,r(9205).Z)("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);var a=r(2265);function c(e){let{thumb:t,onPlay:r,isPlaying:n}=e;return(0,l.jsx)("div",{className:"absolute inset-0 z-10 bg-cover bg-center flex items-center justify-center transition-opacity duration-300 ".concat(n?"opacity-0 pointer-events-none":"opacity-100"),style:{backgroundImage:"url(".concat(t,")"),backgroundColor:"rgba(0, 0, 0, 0.5)"},children:!n&&(0,l.jsx)("button",{onClick:r,className:"text-white text-4xl opacity-90 hover:opacity-100 transition-opacity","aria-label":"Play video",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-12 h-12 drop-shadow-[0_0_4px_rgba(0,0,0,1)]",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.426 1.529-2.333 2.779-1.643l11.54 6.757c1.426.835 1.426 2.927 0 3.762l-11.54 6.757c-1.25.73-2.779-.173-2.779-1.643V5.653z",clipRule:"evenodd",className:""})})})})}function o(e){let{media:t,thumb:r,i:n}=e,[o,i]=(0,a.useState)(!1);return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(c,{thumb:r,onPlay:()=>{i(!0)},isPlaying:o}),(0,l.jsx)("iframe",{src:"".concat(t.url).concat(o?"&autoplay=1":""),title:"Project content ".concat(n+1),className:"aspect-video w-full relative z-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}function i(e){let{src:t,thumb:r}=e,[n,o]=(0,a.useState)(!1);return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(c,{thumb:r,onPlay:()=>{o(!0)},isPlaying:n}),(0,l.jsx)("video",{src:t,controls:n,className:"aspect-video w-full relative z-0",autoPlay:n})]})}function s(e){let{project:t}=e,r=Array.isArray(t.content)?t.content:[,,,,,].fill(t.thumb);return(0,l.jsx)("div",{className:"space-y-4",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4 max-w-screen-lg mx-auto 2xl:mt-6",children:[r.map((e,r)=>{let n="string"==typeof e?e:e.url;return(0,l.jsx)("div",{className:"relative bg-muted rounded-lg overflow-hidden 2xl:border border-muted-foreground/30",children:"object"==typeof e&&"embed"===e.type?(0,l.jsx)(o,{media:e,thumb:t.thumb,i:r}):n.endsWith(".mp4")?(0,l.jsx)(i,{src:n,thumb:t.thumb}):(0,l.jsx)("img",{src:n,alt:"Project content ".concat(Number(r)+1),className:"object-cover w-full h-full"})},r)}),(0,l.jsx)("div",{className:"h-40 flex items-center justify-center",children:(0,l.jsx)("div",{className:"w-12 h-1 rounded-full",children:(0,l.jsx)(n,{className:"w-6 h-6 text-muted-foreground"})})})]})})}},9205:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var l=r(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,l.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:u,iconNode:d,...m}=e;return(0,l.createElement)("svg",{ref:t,...c,width:n,height:n,stroke:r,strokeWidth:i?24*Number(o)/Number(n):o,className:a("lucide",s),...m},[...d.map(e=>{let[t,r]=e;return(0,l.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),i=(e,t)=>{let r=(0,l.forwardRef)((r,c)=>{let{className:i,...s}=r;return(0,l.createElement)(o,{ref:c,iconNode:t,className:a("lucide-".concat(n(e)),i),...s})});return r.displayName="".concat(e),r}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=4174)}),_N_E=e.O()}]);