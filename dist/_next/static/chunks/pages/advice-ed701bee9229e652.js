(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{5861:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var i=r(3366),n=r(7462),a=r(7294),o=r(512),l=r(9707),s=r(4780),c=r(948),h=r(1657),d=r(8216),p=r(1588),u=r(4867);function m(t){return(0,u.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var x=r(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=a.forwardRef((function(t,e){const r=(0,h.Z)({props:t,name:"MuiTypography"}),a=(t=>b[t]||t)(r.color),c=(0,l.Z)((0,n.Z)({},r,{color:a})),{align:p="inherit",className:u,component:w,gutterBottom:y=!1,noWrap:j=!1,paragraph:Z=!1,variant:O="body1",variantMapping:S=v}=c,W=(0,i.Z)(c,g),B=(0,n.Z)({},c,{align:p,color:a,className:u,component:w,gutterBottom:y,noWrap:j,paragraph:Z,variant:O,variantMapping:S}),P=w||(Z?"p":S[O]||v[O])||"span",A=(t=>{const{align:e,gutterBottom:r,noWrap:i,paragraph:n,variant:a,classes:o}=t,l={root:["root",a,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,m,o)})(B);return(0,x.jsx)(f,(0,n.Z)({as:P,ref:e,ownerState:B,className:(0,o.Z)(A.root,u)},W))}))},2613:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advice",function(){return r(25)}])},9019:function(t,e,r){"use strict";var i=r(1799),n=r(5893),a=r(5861),o=r(7357);e.Z=function(t){var e=t.title,r=t.children,l=t.id,s=void 0===l?"":l,c=t.sx;return(0,n.jsxs)(o.Z,{component:"section",id:s,mb:{xs:"30px",md:"40px"},px:{xs:3.5,sm:5,md:7},minWidth:340,maxWidth:{xs:"100%",sm:700,md:1e3,lg:1366},mx:"auto",sx:(0,i.Z)({"& > div":{mt:"7px"},"& > .code":{mt:"13px",mb:"13px"},"& > h2":{mb:"16px"}},c||{}),children:[e&&(0,n.jsx)(a.Z,{variant:"h3",children:e}),r]})}},5471:function(t,e,r){"use strict";var i=r(5893),n=r(7357);e.Z=function(t){var e=t.children,r=t.type;return(0,i.jsx)(n.Z,{sx:{"& a":{color:"primary.main",textDecoration:"underline"},pl:(null==r?void 0:r.includes("list"))?2.5:0,"& li":{mt:.75},"& .keyword":{color:"text.keyword"},"& .variable":{color:"text.variable"},"& .var-blue":{color:"text.var-blue"},"& .var-red":{color:"text.var-red"},"& .var-green":{color:"text.var-green"}},children:e})}},5909:function(t,e,r){"use strict";r.d(e,{Z:function(){return d}});var i=r(1799);function n(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function a(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=r(5893);var l=function(t){var e="";return["return","if","pass","def","else","while","for","in"].includes(t)?e="keyword":Number(t).toString()===t||["True","False","None"].includes(t)||'"'===t[0]?e="value":["sum","print","yell","upper","range","say"].includes(t)?e="function":"#"===t[0]?e="comment":["result","user_name","age","access","num","str","num1","num2"].includes(t)?e="variable":"N"===t?e="var-red":"M"===t&&(e="var-green"),e},s=r(5861),c=r(1664),h=r.n(c),d=function(t){var e=t.children,r=t.type,c=t.href,d="";"string"==typeof e&&(d=l(e),"this"===c&&(c=e));var p=(r||d).split(" ");return(0,o.jsx)(s.Z,{component:"link"===r?function(t){var e=t.children,r=a(t,["children"]);return(0,o.jsx)(h(),n((0,i.Z)({href:c},r),{children:e}),c)}:"span",variant:"inherit",className:p[0],sx:{color:"text."+p[0]||0,fontWeight:"bold"===p[1]?"bold":""},children:e})}},6378:function(t,e,r){"use strict";r.d(e,{Z:function(){return k}});var i=r(1799),n=r(5893),a=r(5861),o=r(7357),l=r(1536),s=r(3366),c=r(7462),h=r(7294),d=r(512),p=r(4780),u=r(1796),m=r(948),x=r(1657),g=r(1588),f=r(4867);function v(t){return(0,f.Z)("MuiDivider",t)}(0,g.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const b=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],w=(0,m.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,c.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,u.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>(0,c.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:e})=>(0,c.Z)({},e.children&&"vertical"!==e.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}})),(({theme:t,ownerState:e})=>(0,c.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}})),(({ownerState:t})=>(0,c.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),y=(0,m.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,c.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),j=h.forwardRef((function(t,e){const r=(0,x.Z)({props:t,name:"MuiDivider"}),{absolute:i=!1,children:a,className:o,component:l=(a?"div":"hr"),flexItem:h=!1,light:u=!1,orientation:m="horizontal",role:g=("hr"!==l?"separator":void 0),textAlign:f="center",variant:j="fullWidth"}=r,Z=(0,s.Z)(r,b),O=(0,c.Z)({},r,{absolute:i,component:l,flexItem:h,light:u,orientation:m,role:g,textAlign:f,variant:j}),S=(t=>{const{absolute:e,children:r,classes:i,flexItem:n,light:a,orientation:o,textAlign:l,variant:s}=t,c={root:["root",e&&"absolute",s,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,p.Z)(c,v,i)})(O);return(0,n.jsx)(w,(0,c.Z)({as:l,className:(0,d.Z)(S.root,o),role:g,ref:e,ownerState:O},Z,{children:a?(0,n.jsx)(y,{className:S.wrapper,ownerState:O,children:a}):null}))}));j.muiSkipListHighlight=!0;var Z=j,O=function(){return(0,n.jsx)(Z,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",opacity:.5,my:{xs:3.75,md:5}}})},S=function(t){var e=t.imgSrc,r=t.alt,a=t.width,l=t.height,s=t.sx;return(0,n.jsx)(o.Z,{component:"img",src:e,alt:r||"",width:a,height:l,sx:(0,i.Z)({width:"100%",height:"auto",aspectRatio:(a/l+"").slice(0,4),objectFit:"contain",maxWidth:500,borderRight:{md:"1px solid #BBBBBB"}},s)})},W=function(t){var e=t.title,r=t.text,i=t.noPlan;return(0,n.jsxs)(o.Z,{mb:i?0:6,sx:{textAlign:{xs:"center",md:"left"},maxWidth:700,width:"100%"},px:3.5,pt:{md:8},children:[(0,n.jsx)(a.Z,{variant:"h2",mb:2,children:e}),(0,n.jsx)(a.Z,{variant:"subtitle1",children:r})]})},B=r(1664),P=r.n(B),A=function(t){var e=t.title,r=t.points,i=r.length>6,s=r.length>12;return(0,n.jsxs)(o.Z,{component:"section",textAlign:"center",width:"100%",children:[(0,n.jsx)(a.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,n.jsx)(l.Z,{display:"flex",width:i?{xs:"100%",md:"90%",lg:"80%",xl:"75%"}:"fit-content",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:{md:"wrap"},maxHeight:{md:s?415:300},mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:r.map((function(t,e){return(0,n.jsxs)(a.Z,{component:t.href?P():"p",href:t.href||"",color:t.href?"primary.dark":"text.primary",variant:"subtitle1",width:{md:i?"49%":"auto",maxWidth:"fit-content"},sx:{"&:hover":{textDecoration:t.href?"underline":"none"}},children:[e+1,". ",t.title]},e+t.title)}))})]})},k=function(t){var e=t.heading,r=t.descTitle,s=t.description,c=t.planPoints,h=t.planTitle,d=t.illustration,p=t.noPlan,u=t.sx;return(0,n.jsxs)(o.Z,{component:"article",children:[(0,n.jsxs)(l.Z,{direction:{xs:"column",md:"row"},mb:{md:1.5},justifyContent:"center",alignItems:"center",children:[(0,n.jsxs)(o.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:(0,i.Z)({width:"100%",maxHeight:300,maxWidth:600,aspectRatio:(d.width/d.height+"").slice(0,4)},u||{}),children:[(0,n.jsx)(a.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3,zIndex:10},children:e}),(0,n.jsx)(S,(0,i.Z)({},d))]}),(0,n.jsx)(W,{title:r,text:s,noPlan:p})]}),!p&&(0,n.jsx)(A,{title:h||"ПЛАН ОБУЧЕНИЯ",points:c}),(0,n.jsx)(O,{})]})}},287:function(t,e,r){"use strict";var i=r(5893),n=r(2630),a=r(1664),o=r.n(a);e.Z=function(t){var e=t.href;return(0,i.jsx)(n.Z,{"aria-label":"Продолжить обучение",component:o(),href:e,variant:"contained",sx:{px:{xs:3.75,sm:6,lg:8},py:{xs:1.4,sm:1.5,lg:1.75},borderRadius:18,mx:{xs:3.5,sm:"auto"},display:{sm:"flex"},width:"fit-content"},children:"ПРОДОЛЖИТЬ ОБУЧЕНИЕ"})}},25:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var i=r(5893),n=r(9008),a=r.n(n),o=r(6378),l=function(){return(0,i.jsx)(o.Z,{heading:"ПОЛЕЗНЫЕ СОВЕТЫ ОТ ПОБЕДИТЕЛЕЙ",descTitle:"Советы и наставления",description:"Услышьте советы тех, кто уже прошел тернистый путь подготовки и достиг успехов в олимпиаде",noPlan:!0,illustration:{imgSrc:"/olimp/dist/illustrations/advice/hero-illustration.png",width:412,height:259,alt:"",sx:{mb:-3,opacity:.85}},sx:{mt:5.5,mb:8}})},s=r(7357),c=r(9019),h=r(5471),d=r(5909),p=function(){return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(c.Z,{title:"ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ",children:[(0,i.jsxs)(h.Z,{children:["Различные интервью с участниками и победителями олимпиад, а также просто советы по подготовке вы можете найти в"," ",(0,i.jsx)(d.Z,{type:"link",href:"https://spb.hse.ru/ba/dataanalytics/news/530412202.html",children:"журнале ВШЭ"}),","," ",(0,i.jsx)(d.Z,{type:"link",href:"https://media.foxford.ru/articles/tips-winners",children:"Фоксфорд"})," ","или"," ",(0,i.jsx)(d.Z,{type:"link",href:"https://olimpiada.ru/article/744",children:"Olimpiada.ru"}),"."]}),(0,i.jsx)(h.Z,{children:"Для удобства, я перечислю несколько важных советов по подготвоке на этой странице."})]}),(0,i.jsx)(c.Z,{title:"Советы и наставления",children:(0,i.jsx)(h.Z,{type:"ordered-list",children:(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"Начните участвовать и практиковаться как можно раньше"}),(0,i.jsx)("li",{children:"Не забывайте про отдых и перерывы"}),(0,i.jsx)("li",{children:"Готовьтесь в группе, а не в одиночку"}),(0,i.jsx)("li",{children:"Занимайтесь информатикой при любой возможности"}),(0,i.jsx)("li",{children:"Не сдавайтесь, несмотря на неудачи"}),(0,i.jsx)("li",{children:"Тренируйте логическое мышление и изучайте другие предметы"}),(0,i.jsx)("li",{children:"Создайте себе здоровую конкуренцию"}),(0,i.jsx)("li",{children:"Помните про переполнения памяти в программе. Неправильный выбор типа для целочисленной переменной многим стоил баллов"}),(0,i.jsx)("li",{children:"Смотрите в регламенте олимпиады, что с собой можно принести на соревнование"}),(0,i.jsx)("li",{children:"Внимательнее относитесь к списку принимаемых вузами олимпиад"})]})})})]})},u=r(287),m=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Советы / Олимп - онлайн пособие по подготовке к олимпиадам по информатике"}),(0,i.jsx)("meta",{name:"description",content:"Услышьте советы тех, кто уже прошел тернистый путь подготовки и достиг успехов в олимпиаде"})]}),(0,i.jsx)(l,{}),(0,i.jsx)(p,{}),(0,i.jsx)(u.Z,{href:"/python"})]})}}},function(t){t.O(0,[888],(function(){return e=2613,t(t.s=e);var e}));var e=t.O();_N_E=e}]);