(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{1519:function(t,e,i){"use strict";i.d(e,{Z:function(){return Z}});var r=i(3366),n=i(7462),a=i(7294),l=i(6010),o=i(4780),s=i(1796),c=i(948),h=i(1657),d=i(1588),p=i(4867);function u(t){return(0,p.Z)("MuiDivider",t)}(0,d.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var g=i(5893);let x=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=t=>{let{absolute:e,children:i,classes:r,flexItem:n,light:a,orientation:l,textAlign:s,variant:c}=t;return(0,o.Z)({root:["root",e&&"absolute",c,a&&"light","vertical"===l&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===l&&"withChildrenVertical","right"===s&&"vertical"!==l&&"textAlignRight","left"===s&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]},u,r)},v=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:t})=>(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),b=a.forwardRef(function(t,e){let i=(0,h.Z)({props:t,name:"MuiDivider"}),{absolute:a=!1,children:o,className:s,component:c=o?"div":"hr",flexItem:d=!1,light:p=!1,orientation:u="horizontal",role:b="hr"!==c?"separator":void 0,textAlign:Z="center",variant:j="fullWidth"}=i,w=(0,r.Z)(i,x),y=(0,n.Z)({},i,{absolute:a,component:c,flexItem:d,light:p,orientation:u,role:b,textAlign:Z,variant:j}),N=m(y);return(0,g.jsx)(v,(0,n.Z)({as:c,className:(0,l.Z)(N.root,s),role:b,ref:e,ownerState:y},w,{children:o?(0,g.jsx)(f,{className:N.wrapper,ownerState:y,children:o}):null}))});var Z=b},5861:function(t,e,i){"use strict";i.d(e,{Z:function(){return y}});var r=i(3366),n=i(7462),a=i(7294),l=i(6010),o=i(9707),s=i(4780),c=i(948),h=i(1657),d=i(8216),p=i(1588),u=i(4867);function g(t){return(0,u.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var x=i(5893);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=t=>{let{align:e,gutterBottom:i,noWrap:r,paragraph:n,variant:a,classes:l}=t,o={root:["root",a,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,i&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,s.Z)(o,g,l)},f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,i.variant&&e[i.variant],"inherit"!==i.align&&e[`align${(0,d.Z)(i.align)}`],i.noWrap&&e.noWrap,i.gutterBottom&&e.gutterBottom,i.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,n.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=t=>Z[t]||t,w=a.forwardRef(function(t,e){let i=(0,h.Z)({props:t,name:"MuiTypography"}),a=j(i.color),s=(0,o.Z)((0,n.Z)({},i,{color:a})),{align:c="inherit",className:d,component:p,gutterBottom:u=!1,noWrap:g=!1,paragraph:Z=!1,variant:w="body1",variantMapping:y=b}=s,N=(0,r.Z)(s,m),A=(0,n.Z)({},s,{align:c,color:a,className:d,component:p,gutterBottom:u,noWrap:g,paragraph:Z,variant:w,variantMapping:y}),D=p||(Z?"p":y[w]||b[w])||"span",W=v(A);return(0,x.jsx)(f,(0,n.Z)({as:D,ref:e,ownerState:A,className:(0,l.Z)(W.root,d)},N))});var y=w},5206:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return i(5553)}])},5266:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var r=i(5893),n=i(5861),a=i(7357),l=i(1519);let o=()=>(0,r.jsx)(l.Z,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",my:3.75}}),s=t=>{let{imgSrc:e,alt:i,sx:n}=t;return(0,r.jsx)(a.Z,{component:"img",src:e,alt:i||"",sx:{width:"100%",maxWidth:500,...n}})},c=t=>{let{title:e,text:i}=t;return(0,r.jsxs)(a.Z,{mb:6,style:{textAlign:"center"},px:3.5,children:[(0,r.jsx)(n.Z,{variant:"h2",mb:2,children:e}),(0,r.jsx)(n.Z,{variant:"subtitle1",children:i})]})};var h=i(1536);let d=t=>{let{title:e,points:i}=t;return(0,r.jsxs)(a.Z,{component:"section",textAlign:"center",children:[(0,r.jsx)(n.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,r.jsx)(h.Z,{display:"inline-flex",alignItems:"flex-start",justifyContent:"flex-start",mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:i.map((t,e)=>(0,r.jsx)(n.Z,{variant:"subtitle1",children:"".concat(e+1,". ").concat(t)},e+t))})]})},p=t=>{let{heading:e,descTitle:i,description:l,planPoints:h,planTitle:p,illustration:u,noPlan:g,sx:x}=t;return(0,r.jsxs)(a.Z,{component:"article",children:[(0,r.jsxs)(a.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:x||{},children:[(0,r.jsx)(n.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3},children:e}),(0,r.jsx)(s,{imgSrc:u.imgSrc,alt:u.alt,sx:u.sx})]}),(0,r.jsx)(c,{title:i,text:l}),!g&&(0,r.jsx)(d,{title:p||"ПЛАН ОБУЧЕНИЯ",points:h}),(0,r.jsx)(o,{})]})};var u=p},4192:function(t,e,i){"use strict";var r=i(5893),n=i(5861),a=i(7357);i(7294);let l=t=>{let{title:e,children:i}=t;return(0,r.jsxs)(a.Z,{component:"article",mb:"30px",px:3.5,minWidth:340,sx:{"& > div":{mt:"7px"},"& > .code":{mt:"13px",mb:"13px"}},children:[(0,r.jsx)(n.Z,{variant:"h3",children:e}),i]})};e.Z=l},2895:function(t,e,i){"use strict";var r=i(5893),n=i(7357);i(7294);let a=t=>{let{children:e,type:i}=t,a="string"==typeof e&&(null==i?void 0:i.includes("list")),l=null;return a&&(l=e.split("=END=")),(0,r.jsx)(n.Z,{component:"ordered-list"===i?"ol":"bullet-list"===i?"ul":"div",sx:{"& a":{color:"primary.main",textDecoration:"underline"},pl:(null==i?void 0:i.includes("list"))?2.5:0,"& li":{mt:.75}},children:a?l.map((t,e,i)=>(0,r.jsx)(n.Z,{component:"li",children:t},"item"+e)):e})};e.Z=a},5553:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return d}});var r=i(5893),n=i(4192),a=i(2895),l=i(7357);let o=()=>(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(n.Z,{title:"СТРУКТУРА ПОСОБИЯ",children:[(0,r.jsx)(a.Z,{children:"Пособие делится на 5 глав - областей, знание которых необходимо при участии в олимпиаде. Они перечислены выше"}),(0,r.jsx)(a.Z,{children:"В любой главе пособия вы найдете план обучения с темами, нужными в олимпиаде по информатике. Чуть ниже идет список основных учебных ресурсов, на которых вы можете изучить эти темы. А дальше вы увидите относительно короткое представление каждой из тем, чтобы вам было проще начать обучение"})]}),(0,r.jsxs)(n.Z,{title:"ВЫБОР ОЛИМПИАДЫ",children:[(0,r.jsx)(a.Z,{children:"Типа существует много разных олимпиад. Если вы хотите в определенный вуз - проверьте список олимпиад, которые он засчитывает. *список олимпиад* - чистая копия"}),(0,r.jsx)(a.Z,{type:"bullet-list",children:"IOI — ежегодная международная олимпиада по информатике среди школьников (Межнар). =END=ВсОШ по информатике — индивидуальная всероссийская олимпиада школьников по информатике (Всерос). =END=ВКОШП — всероссийская командная олимпиада школьников по программированию. =END=Технокубок — ежегодная олимпиада по программированию для учащихся 8–11 классов, организованная МФТИ, МГТУ им. Н. Э. Баумана и компанией Mail.ru Group. =END=Всесибирская открытая олимпиада школьников по информатике =END=Московская олимпиада школьников =END=Олимпиада школьников \xabЛомоносов\xbb =END=Открытая Олимпиада Университета Иннополис для школьников =END=Межрегиональная олимпиада школьников \xabВысшая проба\xbb =END=Открытая олимпиада школьников по программированию \xabКогнитивные технологии\xbb"})]}),(0,r.jsxs)(n.Z,{title:"ГДЕ ГОТОВИТЬСЯ",children:[(0,r.jsx)(a.Z,{children:"Готовиться в одиночку намного сложнее, а школьных уроков по информатике недостаточно для успешного выступления на олимпиадах. Нужно иметь хорошую алгоритмическую подготовку, а не только уметь решать стандартные задачи, и безупречно владеть языками программирования, которые используются на олимпиадах. Большинство победителей олимпиад посещают различные факультативы, участвуют в выездных школах, где можно пообщаться с преподавателями, единомышленниками и получить от них новые знания. Это веселее, интереснее и, что важно, продуктивнее."}),(0,r.jsx)(a.Z,{children:"На codeforces.com участвовать в соревнованиях могут даже новички, на acm.timus.ru тоже можно найти интересные задачи для подготовки. Также рекомендую курс на Stepik \xabБыстрый старт в спортивное программирование\xbb, который прошли уже свыше 9 тысяч человек."})]})]});var s=i(5266);let c=()=>(0,r.jsx)(s.Z,{heading:"КАК ПОКОРИТЬ ОЛИМПИАДУ ПО ИНФОРМАТИКЕ",descTitle:"Пособие по подготвке к олимпиаде",description:"В этом пособии вы узнаете какие навыки и знания нужны для решения задач олимпиады и как им научиться",planTitle:"ПЛАН ОБУЧЕНИЯ",planPoints:["Программирование на языке Python","Важные алгоритмы и структуры данных","Компьютерные науки и математика","Разбор задач олимпиады и практика","Советы от победителей олимпиад"],illustration:{imgSrc:"./illustrations/main/hero-illustration.png",sx:{},alt:""}}),h=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(o,{})]});var d=h}},function(t){t.O(0,[774,888,179],function(){return t(t.s=5206)}),_N_E=t.O()}]);