(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{5861:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var i=r(3366),n=r(7462),a=r(7294),o=r(512),l=r(9707),s=r(4780),h=r(948),c=r(1657),d=r(8216),p=r(1588),x=r(4867);function g(t){return(0,x.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893);const u=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=a.forwardRef((function(t,e){const r=(0,c.Z)({props:t,name:"MuiTypography"}),a=(t=>b[t]||t)(r.color),h=(0,l.Z)((0,n.Z)({},r,{color:a})),{align:p="inherit",className:x,component:w,gutterBottom:Z=!1,noWrap:j=!1,paragraph:y=!1,variant:S="body1",variantMapping:W=f}=h,B=(0,i.Z)(h,u),A=(0,n.Z)({},h,{align:p,color:a,className:x,component:w,gutterBottom:Z,noWrap:j,paragraph:y,variant:S,variantMapping:W}),R=w||(y?"p":W[S]||f[S])||"span",N=(t=>{const{align:e,gutterBottom:r,noWrap:i,paragraph:n,variant:a,classes:o}=t,l={root:["root",a,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,g,o)})(A);return(0,m.jsx)(v,(0,n.Z)({as:R,ref:e,ownerState:A,className:(0,o.Z)(N.root,x)},B))}))},2613:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advice",function(){return r(25)}])},287:function(t,e,r){"use strict";var i=r(5893),n=r(2630),a=r(1664),o=r.n(a);e.Z=t=>{let{href:e}=t;return(0,i.jsx)(n.Z,{component:o(),href:e,variant:"contained",sx:{px:3.75,py:1.2,borderRadius:18,mx:3.5},children:"ПРОДОЛЖИТЬ ОБУЧЕНИЕ"})}},702:function(t,e,r){"use strict";r.d(e,{Z:function(){return N}});var i=r(5893),n=r(5861),a=r(7357),o=r(1536),l=r(3366),s=r(7462),h=r(7294),c=r(512),d=r(4780),p=r(1796),x=r(948),g=r(1657),m=r(1588),u=r(4867);function v(t){return(0,u.Z)("MuiDivider",t)}(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],b=(0,x.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,s.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,p.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>(0,s.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:e})=>(0,s.Z)({},e.children&&"vertical"!==e.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}})),(({theme:t,ownerState:e})=>(0,s.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}})),(({ownerState:t})=>(0,s.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),w=(0,x.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,s.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),Z=h.forwardRef((function(t,e){const r=(0,g.Z)({props:t,name:"MuiDivider"}),{absolute:n=!1,children:a,className:o,component:h=(a?"div":"hr"),flexItem:p=!1,light:x=!1,orientation:m="horizontal",role:u=("hr"!==h?"separator":void 0),textAlign:Z="center",variant:j="fullWidth"}=r,y=(0,l.Z)(r,f),S=(0,s.Z)({},r,{absolute:n,component:h,flexItem:p,light:x,orientation:m,role:u,textAlign:Z,variant:j}),W=(t=>{const{absolute:e,children:r,classes:i,flexItem:n,light:a,orientation:o,textAlign:l,variant:s}=t,h={root:["root",e&&"absolute",s,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,d.Z)(h,v,i)})(S);return(0,i.jsx)(b,(0,s.Z)({as:h,className:(0,c.Z)(W.root,o),role:u,ref:e,ownerState:S},y,{children:a?(0,i.jsx)(w,{className:W.wrapper,ownerState:S,children:a}):null}))}));Z.muiSkipListHighlight=!0;var j=Z;var y=()=>(0,i.jsx)(j,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",my:3.75}});var S=t=>{let{imgSrc:e,alt:r,width:n,height:o,sx:l}=t;return(0,i.jsx)(a.Z,{component:"img",src:e,alt:r||"",width:n,height:o,sx:{width:"100%",height:"auto",aspectRatio:(n/o+"").slice(0,4),objectFit:"contain",maxWidth:500,borderRight:{md:"1px solid #BBBBBB"},...l}})};var W=t=>{let{title:e,text:r,noPlan:o}=t;return(0,i.jsxs)(a.Z,{mb:o?0:6,sx:{textAlign:{xs:"center",md:"left"},maxWidth:700,width:"100%"},px:3.5,pt:{md:8},children:[(0,i.jsx)(n.Z,{variant:"h2",mb:2,children:e}),(0,i.jsx)(n.Z,{variant:"subtitle1",children:r})]})},B=r(1664),A=r.n(B);var R=t=>{let{title:e,points:r}=t;const l=r.length>6,s=r.length>12;return(0,i.jsxs)(a.Z,{component:"section",textAlign:"center",width:"100%",children:[(0,i.jsx)(n.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,i.jsx)(o.Z,{display:"flex",width:l?{xs:"100%",md:"90%",lg:"80%",xl:"75%"}:"fit-content",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:{md:"wrap"},maxHeight:{md:s?415:300},mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:r.map(((t,e)=>(0,i.jsxs)(n.Z,{component:t.href?A():"p",href:t.href||"",color:t.href?"primary.dark":"text.primary",variant:"subtitle1",width:{md:l?"49%":"auto",maxWidth:"fit-content"},sx:{"&:hover":{textDecoration:t.href?"underline":"none"}},children:[e+1,". ",t.title]},e+t.title)))})]})};var N=t=>{let{heading:e,descTitle:r,description:l,planPoints:s,planTitle:h,illustration:c,noPlan:d,sx:p}=t;return(0,i.jsxs)(a.Z,{component:"article",children:[(0,i.jsxs)(o.Z,{direction:{xs:"column",md:"row"},mb:{md:1.5},justifyContent:"center",alignItems:"center",children:[(0,i.jsxs)(a.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:{width:"100%",maxHeight:300,maxWidth:600,aspectRatio:(c.width/c.height+"").slice(0,4),...p||{}},children:[(0,i.jsx)(n.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3,zIndex:10},children:e}),(0,i.jsx)(S,{...c})]}),(0,i.jsx)(W,{title:r,text:l,noPlan:d})]}),!d&&(0,i.jsx)(R,{title:h||"ПЛАН ОБУЧЕНИЯ",points:s}),(0,i.jsx)(y,{})]})}},4192:function(t,e,r){"use strict";var i=r(5893),n=r(5861),a=r(7357);e.Z=t=>{let{title:e,children:r,id:o="",sx:l}=t;return(0,i.jsxs)(a.Z,{component:"article",id:o,mb:"30px",px:3.5,minWidth:340,sx:{"& > div":{mt:"7px"},"& > .code":{mt:"13px",mb:"13px"},"& > h2":{mb:"16px"},...l||{}},children:[e&&(0,i.jsx)(n.Z,{variant:"h3",children:e}),r]})}},3810:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var i=r(5893);var n=function(t){let e="";return["return","if","pass","def","else","while","for","in"].includes(t)?e="keyword":Number(t).toString()===t||["True","False","None"].includes(t)||'"'===t[0]?e="value":["sum","print","yell","upper","range","say"].includes(t)?e="function":"#"===t[0]?e="comment":["result","user_name","age","access","num","str","num1","num2"].includes(t)?e="variable":"N"===t?e="var-red":"M"===t&&(e="var-green"),e},a=r(5861),o=r(1664),l=r.n(o);var s=t=>{let{children:e,type:r,href:o}=t,s="";"string"==typeof e&&(s=n(e),"this"===o&&(o=e));const h=(r||s).split(" ");return(0,i.jsx)(a.Z,{component:"link"===r?t=>{let{children:e,...r}=t;return(0,i.jsx)(l(),{href:o,...r,children:e},o)}:"span",variant:"inherit",className:h[0],sx:{color:"text."+h[0]||0,fontWeight:"bold"===h[1]?"bold":""},children:e})}},2895:function(t,e,r){"use strict";var i=r(5893),n=r(7357);r(7294);e.Z=t=>{let{children:e,type:r}=t;return(0,i.jsx)(n.Z,{sx:{"& a":{color:"primary.main",textDecoration:"underline"},pl:(null==r?void 0:r.includes("list"))?2.5:0,"& li":{mt:.75},"& .keyword":{color:"text.keyword"},"& .variable":{color:"text.variable"},"& .var-blue":{color:"text.var-blue"},"& .var-red":{color:"text.var-red"},"& .var-green":{color:"text.var-green"}},children:e})}},25:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var i=r(5893),n=r(702);var a=()=>(0,i.jsx)(n.Z,{heading:"ПОЛЕЗНЫЕ СОВЕТЫ ОТ ПОБЕДИТЕЛЕЙ",descTitle:"Советы и наставления",description:"Услышьте советы тех, кто уже прошел тернистый путь подготовки и достиг успехов в олимпиаде",noPlan:!0,illustration:{imgSrc:"/illustrations/advice/hero-illustration.png",width:412,height:259,alt:"",sx:{mb:-3,opacity:.85}},sx:{mt:5.5,mb:8}}),o=r(7357),l=r(4192),s=r(3810),h=r(2895);var c=()=>(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)(l.Z,{title:"ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ",children:[(0,i.jsxs)(h.Z,{children:["Различные интервью с участниками и победителями олимпиад, а также просто советы по подготовке вы можете найти в"," ",(0,i.jsx)(s.Z,{type:"link",href:"https://spb.hse.ru/ba/dataanalytics/news/530412202.html",children:"журнале ВШЭ"}),","," ",(0,i.jsx)(s.Z,{type:"link",href:"https://media.foxford.ru/articles/tips-winners",children:"Фоксфорд"})," ","или"," ",(0,i.jsx)(s.Z,{type:"link",href:"https://olimpiada.ru/article/744",children:"Olimpiada.ru"}),"."]}),(0,i.jsx)(h.Z,{children:"Для удобства, я перечислю несколько важных советов по подготвоке на этой странице."})]}),(0,i.jsx)(l.Z,{title:"Советы и наставления",children:(0,i.jsx)(h.Z,{type:"ordered-list",children:(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"Начните участвовать и практиковаться как можно раньше"}),(0,i.jsx)("li",{children:"Не забывайте про отдых и перерывы"}),(0,i.jsx)("li",{children:"Готовьтесь в группе, а не в одиночку"}),(0,i.jsx)("li",{children:"Занимайтесь информатикой при любой возможности"}),(0,i.jsx)("li",{children:"Не сдавайтесь, несмотря на неудачи"}),(0,i.jsx)("li",{children:"Тренируйте логическое мышление и изучайте другие предметы"}),(0,i.jsx)("li",{children:"Создайте себе здоровую конкуренцию"}),(0,i.jsx)("li",{children:"Помните про переполнения памяти в программе. Неправильный выбор типа для целочисленной переменной многим стоил баллов"}),(0,i.jsx)("li",{children:"Смотрите в регламенте олимпиады, что с собой можно принести на соревнование"}),(0,i.jsx)("li",{children:"Внимательнее относитесь к списку принимаемых вузами олимпиад"})]})})})]}),d=r(287);var p=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{}),(0,i.jsx)(c,{}),(0,i.jsx)(d.Z,{href:"/python"})]})}},function(t){t.O(0,[888],(function(){return e=2613,t(t.s=e);var e}));var e=t.O();_N_E=e}]);