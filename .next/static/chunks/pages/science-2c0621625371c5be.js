(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{5861:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var i=r(3366),n=r(7462),a=r(7294),o=r(6010),l=r(9707),s=r(4780),c=r(948),h=r(1657),d=r(8216),p=r(1588),m=r(4867);function u(t){return(0,m.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(5893);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=a.forwardRef((function(t,e){const r=(0,h.Z)({props:t,name:"MuiTypography"}),a=(t=>w[t]||t)(r.color),c=(0,l.Z)((0,n.Z)({},r,{color:a})),{align:p="inherit",className:m,component:b,gutterBottom:Z=!1,noWrap:y=!1,paragraph:j=!1,variant:W="body1",variantMapping:k=v}=c,B=(0,i.Z)(c,x),S=(0,n.Z)({},c,{align:p,color:a,className:m,component:b,gutterBottom:Z,noWrap:y,paragraph:j,variant:W,variantMapping:k}),A=b||(j?"p":k[W]||v[W])||"span",_=(t=>{const{align:e,gutterBottom:r,noWrap:i,paragraph:n,variant:a,classes:o}=t,l={root:["root",a,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,u,o)})(S);return(0,g.jsx)(f,(0,n.Z)({as:A,ref:e,ownerState:S,className:(0,o.Z)(_.root,m)},B))}))},7987:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/science",function(){return r(1577)}])},702:function(t,e,r){"use strict";r.d(e,{Z:function(){return A}});var i=r(5893),n=r(5861),a=r(7357),o=r(1536),l=r(3366),s=r(7462),c=r(7294),h=r(6010),d=r(4780),p=r(1796),m=r(948),u=r(1657),g=r(1588),x=r(4867);function f(t){return(0,x.Z)("MuiDivider",t)}(0,g.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],w=(0,m.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,s.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,p.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:t,ownerState:e})=>(0,s.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:t,ownerState:e})=>(0,s.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:t})=>(0,s.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),b=(0,m.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,s.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})));var Z=c.forwardRef((function(t,e){const r=(0,u.Z)({props:t,name:"MuiDivider"}),{absolute:n=!1,children:a,className:o,component:c=(a?"div":"hr"),flexItem:p=!1,light:m=!1,orientation:g="horizontal",role:x=("hr"!==c?"separator":void 0),textAlign:Z="center",variant:y="fullWidth"}=r,j=(0,l.Z)(r,v),W=(0,s.Z)({},r,{absolute:n,component:c,flexItem:p,light:m,orientation:g,role:x,textAlign:Z,variant:y}),k=(t=>{const{absolute:e,children:r,classes:i,flexItem:n,light:a,orientation:o,textAlign:l,variant:s}=t,c={root:["root",e&&"absolute",s,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,d.Z)(c,f,i)})(W);return(0,i.jsx)(w,(0,s.Z)({as:c,className:(0,h.Z)(k.root,o),role:x,ref:e,ownerState:W},j,{children:a?(0,i.jsx)(b,{className:k.wrapper,ownerState:W,children:a}):null}))}));var y=()=>(0,i.jsx)(Z,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",my:3.75}});var j=t=>{let{imgSrc:e,alt:r,width:n,height:o,sx:l}=t;return(0,i.jsx)(a.Z,{component:"img",src:e,alt:r||"",width:n,height:o,sx:{width:"100%",maxWidth:500,borderRight:{md:"1px solid #BBBBBB"},...l}})};var W=t=>{let{title:e,text:r,noPlan:o}=t;return(0,i.jsxs)(a.Z,{mb:o?0:6,sx:{textAlign:{xs:"center",md:"left"},maxWidth:700,width:"100%"},px:3.5,pt:{md:8},children:[(0,i.jsx)(n.Z,{variant:"h2",mb:2,children:e}),(0,i.jsx)(n.Z,{variant:"subtitle1",children:r})]})},k=r(1664),B=r.n(k);var S=t=>{let{title:e,points:r}=t;const l=r.length>6,s=r.length>12;return(0,i.jsxs)(a.Z,{component:"section",textAlign:"center",width:"100%",children:[(0,i.jsx)(n.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,i.jsx)(o.Z,{display:"flex",width:l?{xs:"100%",md:"90%",lg:"80%",xl:"75%"}:"fit-content",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:{md:"wrap"},maxHeight:{md:s?415:300},mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:r.map(((t,e)=>(0,i.jsxs)(n.Z,{component:t.href?B():"p",href:t.href||"",color:t.href?"primary.dark":"text.primary",variant:"subtitle1",width:{md:l?"49%":"auto",maxWidth:"fit-content"},sx:{"&:hover":{textDecoration:t.href?"underline":"none"}},children:[e+1,". ",t.title]},e+t.title)))})]})};var A=t=>{let{heading:e,descTitle:r,description:l,planPoints:s,planTitle:c,illustration:h,noPlan:d,sx:p}=t;return(0,i.jsxs)(a.Z,{component:"article",children:[(0,i.jsxs)(o.Z,{direction:{xs:"column",md:"row"},mb:{md:1.5},justifyContent:"center",alignItems:"center",children:[(0,i.jsxs)(a.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:{width:"100%",maxHeight:300,maxWidth:600,aspectRatio:(h.width/h.height+"").slice(0,4),...p||{}},children:[(0,i.jsx)(n.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3,zIndex:10},children:e}),(0,i.jsx)(j,{...h})]}),(0,i.jsx)(W,{title:r,text:l,noPlan:d})]}),!d&&(0,i.jsx)(S,{title:c||"ПЛАН ОБУЧЕНИЯ",points:s}),(0,i.jsx)(y,{})]})}},4192:function(t,e,r){"use strict";var i=r(5893),n=r(5861),a=r(7357);r(7294);e.Z=t=>{let{title:e,children:r,id:o="",sx:l}=t;return(0,i.jsxs)(a.Z,{component:"article",id:o,mb:"30px",px:3.5,minWidth:340,sx:{"& > div":{mt:"7px"},"& > .code":{mt:"13px",mb:"13px"},"& > h2":{mb:"16px"},...l||{}},children:[e&&(0,i.jsx)(n.Z,{variant:"h3",children:e}),r]})}},3810:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var i=r(5893);var n=function(t){let e="";return["return","if","pass","def","else","while","for","in"].includes(t)?e="keyword":Number(t).toString()===t||["True","False","None"].includes(t)||'"'===t[0]?e="value":["sum","print","yell","upper","range","say"].includes(t)?e="function":"#"===t[0]?e="comment":["result","user_name","age","access","num","str","num1","num2"].includes(t)&&(e="variable"),e},a=r(1664),o=r.n(a),l=r(5861);var s=t=>{let{children:e,type:r,href:a}=t,s="";"string"==typeof e&&(s=n(e),"this"===a&&(a=e));const c=(r||s).split(" ");return(0,i.jsx)(l.Z,{component:"link"===r?t=>{let{children:e,...r}=t;return(0,i.jsx)(o(),{href:a,...r,children:e})}:"span",variant:"inherit",className:c[0],sx:{color:"text."+c[0]||0,fontWeight:"bold"===c[1]?"bold":""},children:e})}},2895:function(t,e,r){"use strict";var i=r(5893),n=r(7357);r(7294);e.Z=t=>{let{children:e,type:r}=t;return(0,i.jsx)(n.Z,{sx:{"& a":{color:"primary.main",textDecoration:"underline"},pl:(null==r?void 0:r.includes("list"))?2.5:0,"& li":{mt:.75},"& .var-blue":{color:"code.variable"},"& .var-red":{color:"code.keyword"},"& .keyword":{color:"code.keyword"}},children:e})}},1577:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var i=r(5893),n=r(1664),a=r.n(n),o=r(2630),l=r(4192),s=r(2895),c=r(3810),h=r(7357);var d=()=>(0,i.jsx)(h.Z,{children:(0,i.jsxs)(l.Z,{title:"ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ",children:[(0,i.jsxs)(s.Z,{children:["Информатику и математику вы можете изучать на таких ресурсах как:"," ",(0,i.jsx)(c.Z,{type:"link",href:"this",children:"https://khanacademy.com"}),"или"," ",(0,i.jsx)(c.Z,{type:"link",href:"this",children:"https://www.coursera.org/learn/what-is-a-proof"})]}),(0,i.jsxs)(s.Z,{children:["К тому же, нередко и в курсах по алгоритмам затрагиваются математика и информатика, поэтому некоторые из тем вы можете найти в"," ",(0,i.jsx)(c.Z,{type:"link",href:"https://fintech.tinkoff.ru/school/generation/algo",children:"Tinkoff Образование"})," ","или"," ",(0,i.jsx)(c.Z,{type:"link",href:"https://education.yandex.ru/inf?utm_source=ya_schoolbook&utm_medium=lp&utm_term=menu&utm_campaign=main",children:"Яндекс Учебник"})]})]})}),p=r(702);var m=()=>(0,i.jsx)(p.Z,{heading:"ТЕХНИЧЕСКИЕ НАУКИ И МАТЕМАТИКА",descTitle:"Математика и компьютерные науки",description:"Ознакомленность с понятиями этих наук очень поможет вам в решении задач большинства олимпиад по информатике",planPoints:[{title:"Простые числа и их свойства"},{title:"Арифметические алгоритмы"},{title:"Прогрессии и последовательности"},{title:"Теория вероятности"},{title:"Вычислительная геометрия"},{title:"Системы счисления"},{title:"Законы логики"}],illustration:{imgSrc:"./illustrations/science/hero-illustration.png",width:412,height:307,sx:{mb:-4},alt:""},sx:{mt:5,mb:8}});var u=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{}),(0,i.jsx)(d,{}),(0,i.jsx)(o.Z,{component:a(),href:"/practice",variant:"contained",sx:{px:3.75,py:1.2,borderRadius:18,mx:3.5},children:"ПРОДОЛЖИТЬ ПОДГОТОВКУ"})]})}},function(t){t.O(0,[888],(function(){return e=7987,t(t.s=e);var e}));var e=t.O();_N_E=e}]);