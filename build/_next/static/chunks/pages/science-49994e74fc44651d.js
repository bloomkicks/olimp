(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{1519:function(t,e,r){"use strict";r.d(e,{Z:function(){return Z}});var i=r(3366),n=r(7462),a=r(7294),o=r(6010),l=r(4780),s=r(1796),c=r(948),h=r(1657),p=r(1588),d=r(4867);function g(t){return(0,d.Z)("MuiDivider",t)}(0,p.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var u=r(5893);let m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=t=>{let{absolute:e,children:r,classes:i,flexItem:n,light:a,orientation:o,textAlign:s,variant:c}=t;return(0,l.Z)({root:["root",e&&"absolute",c,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]},g,i)},f=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:t})=>(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),x=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),b=a.forwardRef(function(t,e){let r=(0,h.Z)({props:t,name:"MuiDivider"}),{absolute:a=!1,children:l,className:s,component:c=l?"div":"hr",flexItem:p=!1,light:d=!1,orientation:g="horizontal",role:b="hr"!==c?"separator":void 0,textAlign:Z="center",variant:w="fullWidth"}=r,y=(0,i.Z)(r,m),j=(0,n.Z)({},r,{absolute:a,component:c,flexItem:p,light:d,orientation:g,role:b,textAlign:Z,variant:w}),A=v(j);return(0,u.jsx)(f,(0,n.Z)({as:c,className:(0,o.Z)(A.root,s),role:b,ref:e,ownerState:j},y,{children:l?(0,u.jsx)(x,{className:A.wrapper,ownerState:j,children:l}):null}))});var Z=b},5861:function(t,e,r){"use strict";r.d(e,{Z:function(){return j}});var i=r(3366),n=r(7462),a=r(7294),o=r(6010),l=r(9707),s=r(4780),c=r(948),h=r(1657),p=r(8216),d=r(1588),g=r(4867);function u(t){return(0,g.Z)("MuiTypography",t)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893);let v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=t=>{let{align:e,gutterBottom:r,noWrap:i,paragraph:n,variant:a,classes:o}=t,l={root:["root",a,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,u,o)},x=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,p.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,n.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=t=>Z[t]||t,y=a.forwardRef(function(t,e){let r=(0,h.Z)({props:t,name:"MuiTypography"}),a=w(r.color),s=(0,l.Z)((0,n.Z)({},r,{color:a})),{align:c="inherit",className:p,component:d,gutterBottom:g=!1,noWrap:u=!1,paragraph:Z=!1,variant:y="body1",variantMapping:j=b}=s,A=(0,i.Z)(s,v),W=(0,n.Z)({},s,{align:c,color:a,className:p,component:d,gutterBottom:g,noWrap:u,paragraph:Z,variant:y,variantMapping:j}),C=d||(Z?"p":j[y]||b[y])||"span",R=f(W);return(0,m.jsx)(x,(0,n.Z)({as:C,ref:e,ownerState:W,className:(0,o.Z)(R.root,p)},A))});var j=y},7987:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/science",function(){return r(7364)}])},5266:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var i=r(5893),n=r(5861),a=r(7357),o=r(1519);let l=()=>(0,i.jsx)(o.Z,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",my:3.75}}),s=t=>{let{imgSrc:e,alt:r,sx:n}=t;return(0,i.jsx)(a.Z,{component:"img",src:e,alt:r||"",sx:{width:"100%",maxWidth:500,...n}})},c=t=>{let{title:e,text:r}=t;return(0,i.jsxs)(a.Z,{mb:6,style:{textAlign:"center"},px:3.5,children:[(0,i.jsx)(n.Z,{variant:"h2",mb:2,children:e}),(0,i.jsx)(n.Z,{variant:"subtitle1",children:r})]})};var h=r(1536);let p=t=>{let{title:e,points:r}=t;return(0,i.jsxs)(a.Z,{component:"section",textAlign:"center",children:[(0,i.jsx)(n.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,i.jsx)(h.Z,{display:"inline-flex",alignItems:"flex-start",justifyContent:"flex-start",mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:r.map((t,e)=>(0,i.jsx)(n.Z,{variant:"subtitle1",children:"".concat(e+1,". ").concat(t)},e+t))})]})},d=t=>{let{heading:e,descTitle:r,description:o,planPoints:h,planTitle:d,illustration:g,noPlan:u,sx:m}=t;return(0,i.jsxs)(a.Z,{component:"article",children:[(0,i.jsxs)(a.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:m||{},children:[(0,i.jsx)(n.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3},children:e}),(0,i.jsx)(s,{imgSrc:g.imgSrc,alt:g.alt,sx:g.sx})]}),(0,i.jsx)(c,{title:r,text:o}),!u&&(0,i.jsx)(p,{title:d||"ПЛАН ОБУЧЕНИЯ",points:h}),(0,i.jsx)(l,{})]})};var g=d},7364:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var i=r(5893),n=r(5266);let a=()=>(0,i.jsx)(n.Z,{heading:"КОМПЬЮТЕРНЫЕ НАУКИ И МАТЕМАТИКА",descTitle:"Математика и компьютерные науки",description:"Информатика и математика помогут вам найти наилучшее решение задачи. К тому же, некоторые задачи по-просту требуют знания этих наук для решения",planPoints:["Тригонометрия","Делимость и её свойства","Простые числа и их свойства (Алг. Евклида)","Теория чисел","Прогрессии","Векторная геометрия","Теория вероятности","Устройство компьютера","Системы счисления","Логика и её законы"],illustration:{imgSrc:"./illustrations/science/hero-illustration.png",sx:{mb:-4},alt:""},sx:{mt:5,mb:8}}),o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a,{})});var l=o}},function(t){t.O(0,[774,888,179],function(){return t(t.s=7987)}),_N_E=t.O()}]);