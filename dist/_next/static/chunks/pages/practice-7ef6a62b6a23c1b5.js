(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{5861:function(t,e,r){"use strict";r.d(e,{Z:function(){return Z}});var n=r(3366),i=r(7462),a=r(7294),o=r(512),l=r(9707),s=r(4780),c=r(948),h=r(1657),d=r(8216),p=r(1588),u=r(4867);function x(t){return(0,u.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,i.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var Z=a.forwardRef((function(t,e){const r=(0,h.Z)({props:t,name:"MuiTypography"}),a=(t=>j[t]||t)(r.color),c=(0,l.Z)((0,i.Z)({},r,{color:a})),{align:p="inherit",className:u,component:Z,gutterBottom:b=!1,noWrap:y=!1,paragraph:w=!1,variant:N="body1",variantMapping:S=f}=c,O=(0,n.Z)(c,v),W=(0,i.Z)({},c,{align:p,color:a,className:u,component:Z,gutterBottom:b,noWrap:y,paragraph:w,variant:N,variantMapping:S}),M=Z||(w?"p":S[N]||f[N])||"span",k=(t=>{const{align:e,gutterBottom:r,noWrap:n,paragraph:i,variant:a,classes:o}=t,l={root:["root",a,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,s.Z)(l,x,o)})(W);return(0,m.jsx)(g,(0,i.Z)({as:M,ref:e,ownerState:W,className:(0,o.Z)(k.root,u)},O))}))},2434:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice",function(){return r(7547)}])},9019:function(t,e,r){"use strict";var n=r(1799),i=r(5893),a=r(5861),o=r(7357);e.Z=function(t){var e=t.title,r=t.children,l=t.id,s=void 0===l?"":l,c=t.sx;return(0,i.jsxs)(o.Z,{component:"section",id:s,mb:{xs:"30px",md:"40px"},px:{xs:3.5,sm:5,md:7},minWidth:340,maxWidth:{xs:"100%",sm:700,md:1e3,lg:1366},mx:"auto",sx:(0,n.Z)({"& > div":{mt:"7px"},"& > .code":{mt:"13px",mb:"13px"},"& > h2":{mb:"16px"}},c||{}),children:[e&&(0,i.jsx)(a.Z,{variant:"h3",children:e}),r]})}},5471:function(t,e,r){"use strict";var n=r(5893),i=r(7357);e.Z=function(t){var e=t.children,r=t.type;return(0,n.jsx)(i.Z,{sx:{"& a":{color:"primary.main",textDecoration:"underline"},pl:(null==r?void 0:r.includes("list"))?2.5:0,"& li":{mt:.75},"& .keyword":{color:"text.keyword"},"& .variable":{color:"text.variable"},"& .var-blue":{color:"text.var-blue"},"& .var-red":{color:"text.var-red"},"& .var-green":{color:"text.var-green"}},children:e})}},5909:function(t,e,r){"use strict";r.d(e,{Z:function(){return d}});var n=r(1799);function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var o=r(5893);var l=function(t){var e="";return["return","if","pass","def","else","while","for","in"].includes(t)?e="keyword":Number(t).toString()===t||["True","False","None"].includes(t)||'"'===t[0]?e="value":["sum","print","yell","upper","range","say"].includes(t)?e="function":"#"===t[0]?e="comment":["result","user_name","age","access","num","str","num1","num2"].includes(t)?e="variable":"N"===t?e="var-red":"M"===t&&(e="var-green"),e},s=r(5861),c=r(1664),h=r.n(c),d=function(t){var e=t.children,r=t.type,c=t.href,d="";"string"==typeof e&&(d=l(e),"this"===c&&(c=e));var p=(r||d).split(" ");return(0,o.jsx)(s.Z,{component:"link"===r?function(t){var e=t.children,r=a(t,["children"]);return(0,o.jsx)(h(),i((0,n.Z)({href:c},r),{children:e}),c)}:"span",variant:"inherit",className:p[0],sx:{color:"text."+p[0]||0,fontWeight:"bold"===p[1]?"bold":""},children:e})}},6378:function(t,e,r){"use strict";r.d(e,{Z:function(){return B}});var n=r(1799),i=r(5893),a=r(5861),o=r(7357),l=r(1536),s=r(3366),c=r(7462),h=r(7294),d=r(512),p=r(4780),u=r(1796),x=r(948),m=r(1657),v=r(1588),g=r(4867);function f(t){return(0,g.Z)("MuiDivider",t)}(0,v.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const j=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Z=(0,x.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,c.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,u.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>(0,c.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:e})=>(0,c.Z)({},e.children&&"vertical"!==e.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}})),(({theme:t,ownerState:e})=>(0,c.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}})),(({ownerState:t})=>(0,c.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),b=(0,x.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,c.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),y=h.forwardRef((function(t,e){const r=(0,m.Z)({props:t,name:"MuiDivider"}),{absolute:n=!1,children:a,className:o,component:l=(a?"div":"hr"),flexItem:h=!1,light:u=!1,orientation:x="horizontal",role:v=("hr"!==l?"separator":void 0),textAlign:g="center",variant:y="fullWidth"}=r,w=(0,s.Z)(r,j),N=(0,c.Z)({},r,{absolute:n,component:l,flexItem:h,light:u,orientation:x,role:v,textAlign:g,variant:y}),S=(t=>{const{absolute:e,children:r,classes:n,flexItem:i,light:a,orientation:o,textAlign:l,variant:s}=t,c={root:["root",e&&"absolute",s,a&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,p.Z)(c,f,n)})(N);return(0,i.jsx)(Z,(0,c.Z)({as:l,className:(0,d.Z)(S.root,o),role:v,ref:e,ownerState:N},w,{children:a?(0,i.jsx)(b,{className:S.wrapper,ownerState:N,children:a}):null}))}));y.muiSkipListHighlight=!0;var w=y,N=function(){return(0,i.jsx)(w,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",opacity:.5,my:{xs:3.75,md:5}}})},S=function(t){var e=t.imgSrc,r=t.alt,a=t.width,l=t.height,s=t.sx;return(0,i.jsx)(o.Z,{component:"img",src:e,alt:r||"",width:a,height:l,sx:(0,n.Z)({width:"100%",height:"auto",aspectRatio:(a/l+"").slice(0,4),objectFit:"contain",maxWidth:500,borderRight:{md:"1px solid #BBBBBB"}},s)})},O=function(t){var e=t.title,r=t.text,n=t.noPlan;return(0,i.jsxs)(o.Z,{mb:n?0:6,sx:{textAlign:{xs:"center",md:"left"},maxWidth:700,width:"100%"},px:3.5,pt:{md:8},children:[(0,i.jsx)(a.Z,{variant:"h2",mb:2,children:e}),(0,i.jsx)(a.Z,{variant:"subtitle1",children:r})]})},W=r(1664),M=r.n(W),k=function(t){var e=t.title,r=t.points,n=r.length>6,s=r.length>12;return(0,i.jsxs)(o.Z,{component:"section",textAlign:"center",width:"100%",children:[(0,i.jsx)(a.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,i.jsx)(l.Z,{display:"flex",width:n?{xs:"100%",md:"90%",lg:"80%",xl:"75%"}:"fit-content",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:{md:"wrap"},maxHeight:{md:s?415:300},mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:r.map((function(t,e){return(0,i.jsxs)(a.Z,{component:t.href?M():"p",href:t.href||"",color:t.href?"primary.dark":"text.primary",variant:"subtitle1",width:{md:n?"49%":"auto",maxWidth:"fit-content"},sx:{"&:hover":{textDecoration:t.href?"underline":"none"}},children:[e+1,". ",t.title]},e+t.title)}))})]})},B=function(t){var e=t.heading,r=t.descTitle,s=t.description,c=t.planPoints,h=t.planTitle,d=t.illustration,p=t.noPlan,u=t.sx;return(0,i.jsxs)(o.Z,{component:"article",children:[(0,i.jsxs)(l.Z,{direction:{xs:"column",md:"row"},mb:{md:1.5},justifyContent:"center",alignItems:"center",children:[(0,i.jsxs)(o.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:(0,n.Z)({width:"100%",maxHeight:300,maxWidth:600,aspectRatio:(d.width/d.height+"").slice(0,4)},u||{}),children:[(0,i.jsx)(a.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3,zIndex:10},children:e}),(0,i.jsx)(S,(0,n.Z)({},d))]}),(0,i.jsx)(O,{title:r,text:s,noPlan:p})]}),!p&&(0,i.jsx)(k,{title:h||"ПЛАН ОБУЧЕНИЯ",points:c}),(0,i.jsx)(N,{})]})}},287:function(t,e,r){"use strict";var n=r(5893),i=r(2630),a=r(1664),o=r.n(a);e.Z=function(t){var e=t.href;return(0,n.jsx)(i.Z,{"aria-label":"Продолжить обучение",component:o(),href:e,variant:"contained",sx:{px:{xs:3.75,sm:6,lg:8},py:{xs:1.4,sm:1.5,lg:1.75},borderRadius:18,mx:{xs:3.5,sm:"auto"},display:{sm:"flex"},width:"fit-content"},children:"ПРОДОЛЖИТЬ ОБУЧЕНИЕ"})}},7547:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return j}});var n=r(5893),i=r(9008),a=r.n(i),o=r(6378),l=function(){return(0,n.jsx)(o.Z,{heading:"РАЗБОР ЗАДАЧ ОЛИМПИАДЫ И ПРАКТИКА",descTitle:"Разбор задач олимпиады и практика",description:"Практика играет огромную роль в успехе. Именно поэтому мы разберем несколько задач, применив накопленные знания",noPlan:!0,illustration:{imgSrc:"/olimp/dist/illustrations/practice/hero-illustration.png",width:412,height:248,sx:{opacity:.95,mb:-1},alt:""},sx:{mb:7}})},s=r(5861),c=r(7357),h=r(5909),d=function(t){return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{variant:"h3",children:"ФОРМАТ ДАННЫХ"}),(0,n.jsx)(s.Z,{variant:"h4",children:"Входные данные"}),t.in.map((function(t,e){return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(h.Z,{children:t.name})," - ",t.description]},e)})),(0,n.jsx)(s.Z,{variant:"h4",children:"Выходные данные"}),t.out.map((function(t,e){return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(h.Z,{children:t.name})," - ",t.description]},e)}))]})},p=function(t){var e=t.title,r=t.children;return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{variant:"h3",children:e}),(0,n.jsx)(c.Z,{children:r})]})},u=function(t){var e=t.children;return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{variant:"h3",children:"РЕШЕНИЕ"}),(0,n.jsx)(c.Z,{children:e})]})},x=function(t){var e=t.tests;return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{variant:"h3",children:"ТЕСТЫ"}),e.map((function(t,e){return(0,n.jsxs)(c.Z,{children:[t.in.map((function(t,e,r){return(0,n.jsxs)(s.Z,{display:"inline",children:[(0,n.jsx)(h.Z,{type:0===e?"var-red":"var-green",children:t.name})," ","= ",t.value,","," "]},e)})),(0,n.jsxs)(s.Z,{display:"inline",children:[(0,n.jsx)(h.Z,{type:"var-blue",children:t.out.name||"Вывод"})," ="," ",t.out.value]})]},e)}))]})},m=r(9019),v=r(5471),g=function(){return(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(m.Z,{title:"ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ",children:[(0,n.jsxs)(v.Z,{children:["Существует множество различных ресурсов, на которых вы можете легко поучаствовать в олимпиадах и попрактиковаться в решении задач. Я могу порекомендовать"," ",(0,n.jsx)(h.Z,{type:"link",href:"https://codeforces.com",children:"codeforces.com"}),","," ",(0,n.jsx)(h.Z,{type:"link",href:"https://informatics.msk.ru",children:"informatics.msk.ru"})," ","и"," ",(0,n.jsx)(h.Z,{type:"link",href:"https://acm.timus.ru",children:"acm.timus.ru"})]}),(0,n.jsxs)(v.Z,{children:["В этой главе мы разберем пару задач, взятых из школьного этапа ВсОШ 2022 года. Найти больше вы можете на сайте:"," ",(0,n.jsx)(h.Z,{type:"link",href:"this",children:"https://olimpiada.ru/activity/73/tasks"})]})]}),(0,n.jsxs)(m.Z,{sx:{"& > div":{mt:"24px"},"& h3":{mb:"7px"},"& h4":{mb:"5px",mt:"10px"},"& > h2":{mb:-1}},children:[(0,n.jsx)(s.Z,{variant:"h2",align:"center",children:"ЗАДАЧА №1"}),(0,n.jsxs)(p,{title:"ЛЯГУШКА И КУЗНЕЧИК",children:["В крайних клетках полоски шириной в одну клетку и длиной в"," ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," клеток сидят лягушка и кузнечик: лягушка в клетке № 1, кузнечик в клетке № ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"}),". Каждую секунду лягушка прыгает в сторону кузнечика, и одновременно кузнечик прыгает в сторону лягушки. Лягушка может прыгать только на две или на три клетки, кузнечик, только на одну или на две клетки. За какое наименьшее время они смогут оказаться в одной клетке?"]}),(0,n.jsx)(d,{in:[{name:"N",description:"длина клетчатой полосы (целое число, 2 < N < 2 * 10^9)"}],out:[{name:"Вывод",description:"минимальное количество секунд, через которое лягушка и кузнечик встретятся (целое число). Если они не смогут оказаться в одной клетке, вывести число -1"}]}),(0,n.jsx)(x,{tests:[{in:[{name:"N",value:"5"}],out:{value:"1"}},{in:[{name:"N",value:"9"}],out:{value:"2"}}]}),(0,n.jsxs)(u,{children:["Расстояние между лягушкой и кузнечиком ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," = 1 клеток. За одну секунду это расстояние может сократиться на 3, 4 или 5 клеток. Поэтому если ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," − 1 = 1 или"," ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," − 1 = 2 (то есть при"," ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," ","<"," 4) лягушка и кузнечик не смогут встретиться и нужно вывести -1. Во всех остальных случаях им понадобится (",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," − 1) / 5 прыжков, округленное вверх. Это значение можно вычислить по формуле (",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," - 1 + 4) // 5 (где"," //"," - операция целочисленного деления)"]}),(0,n.jsx)(s.Z,{variant:"h2",align:"center",mt:5,children:"ЗАДАЧА №2"}),(0,n.jsxs)(p,{title:"Заказ в магазине",children:["Решив запастись ручками на весь новый учебный год, Игорь подсчитал, что ему нужно ",(0,n.jsx)(h.Z,{type:"var-green",children:"M"})," ручек. В его любимом интернет-магазине есть удобная функция - он может сразу добавить в заказ упаковку из любого числа ручек от 1 до"," ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"}),". Правда, оказалось, что нельзя добавить в заказ две упаковки одного размера. Например, если Игорю нужно купить"," ",(0,n.jsx)(h.Z,{type:"var-green",children:"M"})," = 12 ручек, а максимальное число ручек в упаковке ",(0,n.jsx)(h.Z,{type:"var-red",children:"N"})," = 10, то Игорь может добавить в заказ упаковку из 7 ручек и упаковку из 5 ручек, но не сможет добавить две упаковки из 6 ручек. Сформируйте заказ на"," ",(0,n.jsx)(h.Z,{type:"var-green",children:"M"})," ручек, используя минимальное число различных упаковок."]}),(0,n.jsx)(d,{in:[{name:"N",description:"максимальный размер одной упаковки (1 <= N <= 10^9)"},{name:"M",description:"обходимое количество ручек в заказе (1 <= M <= 10^9)"}],out:[{name:"Вывод",description:"размеры выбранных упаковок (одно или несколько чисел от 1 до N) в любом порядке. Есть имеется несколько возможных решений, то выведите любое из них. Если решения не существует, необходимо вывести одно число 0"}]}),(0,n.jsx)(x,{tests:[{in:[{name:"N",value:"10"},{name:"M",value:"12"}],out:{value:"5; 7"}},{in:[{name:"N",value:"2"},{name:"M",value:"5"}],out:{value:"0"}}]}),(0,n.jsxs)(u,{children:["Сначала проверим, существует ли решение. Максимальное количество ручек, которое можно заказать, равно 1 + 2 + 3 + ... + ",(0,n.jsx)(h.Z,{children:"N"})," ","= ",(0,n.jsx)(h.Z,{children:"N"})," (",(0,n.jsx)(h.Z,{children:"N"})," + 1)/2 (по формуле суммы арифметической прогрессии), и если ",(0,n.jsx)(h.Z,{children:"M"})," ",">"," ",(0,n.jsx)(h.Z,{children:"N"})," ","(",(0,n.jsx)(h.Z,{children:"N"})," + 1)/2, то решения не существует. Если эту сумму вычислять не по формуле, а при помощи цикла, то цикл длины"," ",(0,n.jsx)(h.Z,{children:"N"})," можеть не уложиться в ограничение по времени. В этом случае стоит прервать цикл, если сумма превысит ",(0,n.jsx)(h.Z,{children:"M"}),", либо заметить, что если ",(0,n.jsx)(h.Z,{children:"N"})," ",">"," √2 · 109 ≈ 44721, то 1 + 2 + 3 + ... + ",(0,n.jsx)(h.Z,{children:"N"})," ",">"," 109 и решение существует. Если решение существует, то воспользуемся жадным алгоритмом: будем выбирать упаковки мак- симально возможного размера: ",(0,n.jsx)(h.Z,{children:"N"}),","," ",(0,n.jsx)(h.Z,{children:"N"})," − 1, ",(0,n.jsx)(h.Z,{children:"N"})," − 2 и т.д. Если размер рассматриваемой упаковки s больше или равен ",(0,n.jsx)(h.Z,{children:"M"}),", то выведем значение s и уменьшим ",(0,n.jsx)(h.Z,{children:"M"})," на s"]})]})]})},f=r(287),j=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Практика / Олимп - онлайн пособие по подготовке к олимпиадам по информатике"}),(0,n.jsx)("meta",{name:"description",content:"Практика играет огромную роль в успехе. Именно поэтому мы разберем несколько задач, применив накопленные знания"})]}),(0,n.jsx)(l,{}),(0,n.jsx)(g,{}),(0,n.jsx)(f.Z,{href:"/"})]})}}},function(t){t.O(0,[888],(function(){return e=2434,t(t.s=e);var e}));var e=t.O();_N_E=e}]);