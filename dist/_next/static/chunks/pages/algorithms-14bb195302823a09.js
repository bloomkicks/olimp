(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{5861:function(t,e,r){"use strict";r.d(e,{Z:function(){return j}});var i=r(3366),n=r(7462),a=r(7294),l=r(512),o=r(9707),s=r(4780),c=r(948),h=r(1657),d=r(8216),p=r(1588),x=r(4867);function u(t){return(0,x.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(5893);const m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var j=a.forwardRef((function(t,e){const r=(0,h.Z)({props:t,name:"MuiTypography"}),a=(t=>v[t]||t)(r.color),c=(0,o.Z)((0,n.Z)({},r,{color:a})),{align:p="inherit",className:x,component:j,gutterBottom:b=!1,noWrap:y=!1,paragraph:w=!1,variant:O="body1",variantMapping:S=Z}=c,A=(0,i.Z)(c,m),B=(0,n.Z)({},c,{align:p,color:a,className:x,component:j,gutterBottom:b,noWrap:y,paragraph:w,variant:O,variantMapping:S}),W=j||(w?"p":S[O]||Z[O])||"span",k=(t=>{const{align:e,gutterBottom:r,noWrap:i,paragraph:n,variant:a,classes:l}=t,o={root:["root",a,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,s.Z)(o,u,l)})(B);return(0,g.jsx)(f,(0,n.Z)({as:W,ref:e,ownerState:B,className:(0,l.Z)(k.root,x)},A))}))},1926:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/algorithms",function(){return r(4462)}])},9019:function(t,e,r){"use strict";var i=r(1799),n=r(5893),a=r(5861),l=r(7357);e.Z=function(t){var e=t.title,r=t.children,o=t.id,s=void 0===o?"":o,c=t.sx;return(0,n.jsxs)(l.Z,{component:"section",id:s,mb:{xs:"30px",md:"40px"},px:{xs:3.5,sm:5,md:7},minWidth:340,maxWidth:{xs:"100%",sm:700,md:1e3,lg:1366},mx:"auto",sx:(0,i.Z)({"& > div":{mt:"7px"},"& > .code":{mt:"13px",mb:"13px"},"& > h2":{mb:"16px"}},c||{}),children:[e&&(0,n.jsx)(a.Z,{variant:"h3",children:e}),r]})}},5471:function(t,e,r){"use strict";var i=r(5893),n=r(7357);e.Z=function(t){var e=t.children,r=t.type;return(0,i.jsx)(n.Z,{sx:{"& a":{color:"primary.main",textDecoration:"underline"},pl:(null==r?void 0:r.includes("list"))?2.5:0,"& li":{mt:.75},"& .keyword":{color:"text.keyword"},"& .variable":{color:"text.variable"},"& .var-blue":{color:"text.var-blue"},"& .var-red":{color:"text.var-red"},"& .var-green":{color:"text.var-green"}},children:e})}},5909:function(t,e,r){"use strict";r.d(e,{Z:function(){return d}});var i=r(1799);function n(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function a(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=r(5893);var o=function(t){var e="";return["return","if","pass","def","else","while","for","in"].includes(t)?e="keyword":Number(t).toString()===t||["True","False","None"].includes(t)||'"'===t[0]?e="value":["sum","print","yell","upper","range","say"].includes(t)?e="function":"#"===t[0]?e="comment":["result","user_name","age","access","num","str","num1","num2"].includes(t)?e="variable":"N"===t?e="var-red":"M"===t&&(e="var-green"),e},s=r(5861),c=r(1664),h=r.n(c),d=function(t){var e=t.children,r=t.type,c=t.href,d="";"string"==typeof e&&(d=o(e),"this"===c&&(c=e));var p=(r||d).split(" ");return(0,l.jsx)(s.Z,{component:"link"===r?function(t){var e=t.children,r=a(t,["children"]);return(0,l.jsx)(h(),n((0,i.Z)({href:c},r),{children:e}),c)}:"span",variant:"inherit",className:p[0],sx:{color:"text."+p[0]||0,fontWeight:"bold"===p[1]?"bold":""},children:e})}},6378:function(t,e,r){"use strict";r.d(e,{Z:function(){return P}});var i=r(1799),n=r(5893),a=r(5861),l=r(7357),o=r(1536),s=r(3366),c=r(7462),h=r(7294),d=r(512),p=r(4780),x=r(1796),u=r(948),g=r(1657),m=r(1588),f=r(4867);function Z(t){return(0,f.Z)("MuiDivider",t)}(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],j=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,c.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,x.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>(0,c.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:e})=>(0,c.Z)({},e.children&&"vertical"!==e.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}})),(({theme:t,ownerState:e})=>(0,c.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}})),(({ownerState:t})=>(0,c.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),b=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,c.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),y=h.forwardRef((function(t,e){const r=(0,g.Z)({props:t,name:"MuiDivider"}),{absolute:i=!1,children:a,className:l,component:o=(a?"div":"hr"),flexItem:h=!1,light:x=!1,orientation:u="horizontal",role:m=("hr"!==o?"separator":void 0),textAlign:f="center",variant:y="fullWidth"}=r,w=(0,s.Z)(r,v),O=(0,c.Z)({},r,{absolute:i,component:o,flexItem:h,light:x,orientation:u,role:m,textAlign:f,variant:y}),S=(t=>{const{absolute:e,children:r,classes:i,flexItem:n,light:a,orientation:l,textAlign:o,variant:s}=t,c={root:["root",e&&"absolute",s,a&&"light","vertical"===l&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===o&&"vertical"!==l&&"textAlignRight","left"===o&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,p.Z)(c,Z,i)})(O);return(0,n.jsx)(j,(0,c.Z)({as:o,className:(0,d.Z)(S.root,l),role:m,ref:e,ownerState:O},w,{children:a?(0,n.jsx)(b,{className:S.wrapper,ownerState:O,children:a}):null}))}));y.muiSkipListHighlight=!0;var w=y,O=function(){return(0,n.jsx)(w,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",opacity:.5,my:{xs:3.75,md:5}}})},S=function(t){var e=t.imgSrc,r=t.alt,a=t.width,o=t.height,s=t.sx;return(0,n.jsx)(l.Z,{component:"img",src:e,alt:r||"",width:a,height:o,sx:(0,i.Z)({width:"100%",height:"auto",aspectRatio:(a/o+"").slice(0,4),objectFit:"contain",maxWidth:500,borderRight:{md:"1px solid #BBBBBB"}},s)})},A=function(t){var e=t.title,r=t.text,i=t.noPlan;return(0,n.jsxs)(l.Z,{mb:i?0:6,sx:{textAlign:{xs:"center",md:"left"},maxWidth:700,width:"100%"},px:3.5,pt:{md:8},children:[(0,n.jsx)(a.Z,{variant:"h2",mb:2,children:e}),(0,n.jsx)(a.Z,{variant:"subtitle1",children:r})]})},B=r(1664),W=r.n(B),k=function(t){var e=t.title,r=t.points,i=r.length>6,s=r.length>12;return(0,n.jsxs)(l.Z,{component:"section",textAlign:"center",width:"100%",children:[(0,n.jsx)(a.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,n.jsx)(o.Z,{display:"flex",width:i?{xs:"100%",md:"90%",lg:"80%",xl:"75%"}:"fit-content",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:{md:"wrap"},maxHeight:{md:s?415:300},mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:r.map((function(t,e){return(0,n.jsxs)(a.Z,{component:t.href?W():"p",href:t.href||"",color:t.href?"primary.dark":"text.primary",variant:"subtitle1",width:{md:i?"49%":"auto",maxWidth:"fit-content"},sx:{"&:hover":{textDecoration:t.href?"underline":"none"}},children:[e+1,". ",t.title]},e+t.title)}))})]})},P=function(t){var e=t.heading,r=t.descTitle,s=t.description,c=t.planPoints,h=t.planTitle,d=t.illustration,p=t.noPlan,x=t.sx;return(0,n.jsxs)(l.Z,{component:"article",children:[(0,n.jsxs)(o.Z,{direction:{xs:"column",md:"row"},mb:{md:1.5},justifyContent:"center",alignItems:"center",children:[(0,n.jsxs)(l.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:(0,i.Z)({width:"100%",maxHeight:300,maxWidth:600,aspectRatio:(d.width/d.height+"").slice(0,4)},x||{}),children:[(0,n.jsx)(a.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3,zIndex:10},children:e}),(0,n.jsx)(S,(0,i.Z)({},d))]}),(0,n.jsx)(A,{title:r,text:s,noPlan:p})]}),!p&&(0,n.jsx)(k,{title:h||"ПЛАН ОБУЧЕНИЯ",points:c}),(0,n.jsx)(O,{})]})}},287:function(t,e,r){"use strict";var i=r(5893),n=r(2630),a=r(1664),l=r.n(a);e.Z=function(t){var e=t.href;return(0,i.jsx)(n.Z,{"aria-label":"Продолжить обучение",component:l(),href:e,variant:"contained",sx:{px:{xs:3.75,sm:6,lg:8},py:{xs:1.4,sm:1.5,lg:1.75},borderRadius:18,mx:{xs:3.5,sm:"auto"},display:{sm:"flex"},width:"fit-content"},children:"ПРОДОЛЖИТЬ ОБУЧЕНИЕ"})}},4462:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var i=r(5893),n=r(9008),a=r.n(n),l=r(7357),o=r(9019),s=r(5471),c=r(5909),h=function(){return(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(o.Z,{title:"ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ",children:[(0,i.jsx)(s.Z,{children:"Теперь, разобравшись с Питоном, мы можем приступать к изучению алгоритмов и структур данных. Язык программирова ния можно представить как инструмент, а алгоритмы как чертеж, план решения, который мы воплощаем в реальность этим инструментом"}),(0,i.jsx)(s.Z,{children:"Без чертежа не выйдет ничего хорошего, поэтому нам важно тщательно изучить эту область. В этом нам помогут всемирно признанные книги:"}),(0,i.jsx)(s.Z,{children:"1. «Грокаем алгоритмы» от Адитьи Бхагравой - отличная книга для новичков, просто и понятно обьясняющая нужные нам алгоритмы, структуры данных и концепции в программировании. Также, в качестве языка программирования в ней используется Питон, так что мы сможем попрактиковаться"}),(0,i.jsx)(s.Z,{children:"2. «Алгоритмы. Построение и анализ» от Томаса Кортмэн и других - довольно тяжелая книга, тщательно покрывающая широкий диапазон важных для нас алгоритмов. После ее прочтения вы станите намного лучше разбираться в алгоритмах и сильно увеличите свои шансы на успех в олимпиаде"}),(0,i.jsxs)(s.Z,{children:["Также полезно будет посещение разных лекции и курсов. Хорошими примерами будут"," ",(0,i.jsx)(c.Z,{type:"link",href:"https://fintech.tinkoff.ru/school/generation/algo",children:"Tinkoff Образование"})," ","или"," ",(0,i.jsx)(c.Z,{type:"link",href:"https://education.yandex.ru/inf?utm_source=ya_schoolbook&utm_medium=lp&utm_term=menu&utm_campaign=main",children:"Яндекс Учебник"})]})]}),(0,i.jsxs)(o.Z,{title:"1. ПОНЯТНИЕ АЛГОРИТМОВ И СТРУКТУР ДАННЫХ",id:"algorithms-introduction",children:[(0,i.jsx)(s.Z,{children:"Алгоритмы и структуры данных - важные понятия в вычислительных науках, помогающие эффективно решать задачи различного рода"}),(0,i.jsx)(s.Z,{children:"Алгоритм - это набор инструкций, разработанных для решения конкретной проблемы или выполнения определенной задачи. Алгоритмы можно представить как пошаговые процедуры, которые принимают входные данные и производят выходные. Они являются неотъемлемой частью многих компьютерных программ и используются для выполнения операций, таких как поиск, сортировка и анализ данных"}),(0,i.jsx)(s.Z,{children:"Структуры данных, с другой стороны, являются способом организации данных в памяти компьютера. Структуры данных могут быть полезны для оптимизации определенных операций, таких как поиск, сортировка и вставка или удаление данных. Некоторые примеры структур данных включают массивы, связные списки, деревья и графы, которые мы разберем чуть позже"}),(0,i.jsx)(s.Z,{children:"Алгоритмы и структуры данных составляют основу многих компьютерных программ и являются важными инструментами для решения сложных задач в областях, таких как математика, инженерия и наука"})]}),(0,i.jsxs)(o.Z,{title:"2. СЛОЖНОСТЬ АЛГОРИТМОВ",id:"big-o",children:[(0,i.jsx)(s.Z,{children:"Сложность алгоритма относится к тому, как эффективно алгоритм использует вычислительные ресурсы, такие как время и память, для решения проблемы. Обычно это измеряется в терминах временной сложности и пространственной сложности. Временная сложность - это количество времени, необходимое для завершения алгоритма, а пространственная сложность - это количество памяти, которое алгоритм использует."}),(0,i.jsx)(s.Z,{children:"Big O нотация - это способ выражения временной сложности алгоритма в виде функции размера его входных данных. Она используется для описания наихудшего сценария, или верхней границы, временной сложности алгоритма. Например, если алгоритм занимает 2n + 5 шагов для завершения, мы бы выразили его временную сложность в виде большой O-нотации как O(n), где n представляет размер входных данных."}),(0,i.jsx)(s.Z,{children:"Big O имеет различные общие классы временных сложностей, такие как O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n) и O(n!). Эти классы отражают, как растет временная сложность алгоритма при увеличении размера входных данных. В целом, по мере роста размера входных данных мы хотим, чтобы временная сложность алгоритма росла медленнее всего, что означает, что мы хотим выбирать алгоритмы с меньшими классами временной сложности, когда это возможно."}),(0,i.jsx)(s.Z,{children:"В целом, понимание сложности алгоритма и Big O нотации является важным для проектирования и реализации эффективных алгоритмов, которые могут экономить время и вычислительные ресурсы при решении сложных задач."})]}),(0,i.jsxs)(o.Z,{title:"3. ARRAY И LINKED LIST",id:"arrays",children:[(0,i.jsx)(s.Z,{children:"Массивы (Array) и связанные списки (Linked list) - две из наиболее важных и применяемых в компьютерной науке структур данных. Массив - это линейная структура данных, которая хранит элементы данных в фиксированном порядке, в то время как связанный список - нелинейная структура данных, состоящая из узлов, связанных друг с другом."}),(0,i.jsx)(s.Z,{children:"Массивы применяются для хранения информации, которую необходимо обратиться быстро, в то время как связанные списки прекрасно подходят для операций, таких как динамическое распределение памяти, вставки и удаления и общая манипуляция. Массивы также предоставляют больший случайный доступ, чем связанные списки, поскольку элементы в массиве могут быть доступны за постоянное время. Тем не менее связанные списки могут предоставить преимущество в терминах эффективности использования памяти благодаря своему динамическому распределению памяти, позволяя выделять новые узлы по требованию."}),(0,i.jsx)(s.Z,{children:"В заключение, массивы и связанные списки - это две структуры данных, без которых невозможно программирование. Знание того, как эффективно использовать эти структуры данных, необходимо для разработки эффективных алгоритмов и решения сложных задач программирования"})]}),(0,i.jsxs)(o.Z,{title:"4. РЕКУРСИЯ",id:"recursion",children:[(0,i.jsx)(s.Z,{children:"Рекурсия - это концепция программирования, при которой функция вызывает саму себя повторно до тех пор, пока не достигнет базового случая, когда функция перестает вызывать себя и возвращает окончательный результат. Рекурсию можно определить как повторяющийся процесс, в котором проблема разбивается на более мелкие подпроблемы того же типа, пока они не станут достаточно маленькими для прямого решения."}),(0,i.jsx)(s.Z,{children:"Рабочий принцип рекурсии прост - функция вызывает саму себя с менее сложной проблемой, пока проблему нельзя решить без рекурсии. Рекурсия часто используется в алгоритмах, которым требуется повторное выполнение процесса с другим входом или набором входных данных каждый раз."}),(0,i.jsx)(s.Z,{children:"Существуют две основные части рекурсивной функции: базовый случай, который определяет условие остановки (когда функция больше не вызывает себя), и рекурсивный случай (где функция вызывает саму себя с обновленными входными параметрами)."}),(0,i.jsx)(s.Z,{children:"Рекурсия является мощным инструментом для решения сложных проблем, имеющих несколько шагов, где каждый шаг требует того же типа вычислений, что и предыдущий шаг. Она часто используется в структурах данных, таких как деревья и графы, где структура данных естественным образом рекурсивна."})]}),(0,i.jsxs)(o.Z,{title:"5. АЛГОРИТМЫ ПОИСКА",id:"searching",children:[(0,i.jsx)(s.Z,{children:"Алгоритмы поиска в массиве - это набор техник и методов, которые используются для поиска определенных элементов или значений в массиве или списке элементов. Существует несколько популярных алгоритмов поиска в массиве, которые обычно используются, включая линейный поиск, двоичный поиск, интерполяционный поиск и экспоненциальный поиск."}),(0,i.jsx)(s.Z,{children:"1. Линейный поиск: это простейший алгоритм поиска, который ищет каждый элемент массива или списка и сравнивает его с целевым элементом до тех пор, пока не будет найдено соответствие. Линейный поиск имеет временную сложность O(n), где n - размер массива."}),(0,i.jsx)(s.Z,{children:"2. Двоичный поиск: это более эффективный алгоритм, который требует, чтобы массив был отсортирован в порядке. Он начинает свой поиск целевого элемента, рассматривая среднюю точку массива, а затем устраняет половину элементов, сравнивая целевой элемент с серединой. Двоичный поиск имеет временную сложность O(log n), где n - размер массива."}),(0,i.jsx)(s.Z,{children:"3. Интерполяционный поиск: это еще один вариант двоичного поиска, который используется, когда элементы в массиве равномерно распределены. Он использует формулу для оценки местоположения целевого элемента в массиве, а затем выполняет двоичный поиск. Интерполяционный поиск имеет временную сложность O(log log n), что быстрее, чем двоичный поиск."}),(0,i.jsx)(s.Z,{children:"4. Экспоненциальный поиск: это гибридный алгоритм, который объединяет как линейный, так и двоичный поиск. Он начинает поиск, рассматривая первый элемент, а затем увеличивает интервал в степени двойки до тех пор, пока не будет найден целевой элемент. Экспоненциальный поиск имеет временную сложность O(log n), что также совпадает с двоичным поиском."}),(0,i.jsx)(s.Z,{children:"В целом, выбор конкретного алгоритма поиска в массиве зависит от размера массива, распределения элементов в массиве и количества времени, доступного для поиска."})]}),(0,i.jsxs)(o.Z,{title:"8. ЭВРИСТИЧЕСКИЕ МЕТОДЫ",id:"heuristic-methods",children:[(0,i.jsx)(s.Z,{children:"Эвристический методы — это алгоритмы решения задачи, правильность которого для всех возможных случаев не доказана, но про который известно, что он даёт достаточно хорошее решение в большинстве случаев. В действительности может быть даже известно (то есть доказано), что эвристический алгоритм формально неверен. Его всё равно можно применять, если при этом он даёт неверный результат только в отдельных, достаточно редких и хорошо выделяемых случаях или же даёт неточный, но всё же приемлемый результат."}),(0,i.jsx)(s.Z,{children:"Проще говоря, эвристика — это не полностью математически обоснованный (или даже «не совсем корректный»), но при этом практически полезный алгоритм."})]}),(0,i.jsxs)(o.Z,{title:"9. HASH-ТАБЛИЦЫ И HASH-ФУНКЦИИ",id:"hashmap",children:[(0,i.jsx)(s.Z,{children:"Хэш-таблица является важной структурой данных в информатике, которая позволяет разработчикам хранить и извлекать данные эффективным и организованным способом. Хеш-таблицы реализуются с использованием хеш-функций, которые преобразуют ключи в уникальные индексы в массиве, где можно хранить связанные данные."}),(0,i.jsx)(s.Z,{children:"Хеш-функции, как уже упоминалось, являются математическими алгоритмами, которые используются для преобразования входных данных произвольного размера в выходные данные фиксированного размера, известные как хеш-значения или хеши. Хеш-значения выступают в качестве индексов массива, где хранятся данные, связанные с ключом. Использование хеш-функций позволяет быстро находить данные, так как расположение связанных данных непосредственно вычисляется на основе ключа без необходимости линейного поиска."}),(0,i.jsx)(s.Z,{children:"Подводя итоги, хеш-таблицы и хеш-функции - мощная комбинация, которая обеспечивает эффективное хранение и извлечение данных. Они имеют широкое применение, включая управление базами данных, поисковые системы и системы информационного поиска. В этом введении мы исследуем, как эти два концепта работают вместе, чтобы обеспечить практическое решение для хранения и извлечения данных в различных областях вычислительной техники."})]}),(0,i.jsxs)(o.Z,{title:"10. НЕВЗВЕШЕННЫЙ ГРАФ И АЛГОРИТМЫ ПОИСКА",id:"unweighted-graph",children:[(0,i.jsx)(s.Z,{children:"Невзвешенные графы - это структуры данных, которые состоят из узлов (вершин) и соединяющих их ребер, где каждое ребро не имеет назначенного веса или стоимости. Эти графы обычно используются для изображения отношений между объектами в сети или для моделирования связей в системе, таких как сети транспорта, социальные сети или компьютерные сети."}),(0,i.jsx)(s.Z,{children:"В контексте алгоритмического анализа, невзвешенные графы позволяют разрабатывать эффективные алгоритмы для задач, таких как обход графа, поиск пути и анализ соединяемости сети. Эти алгоритмы работают непосредственно с графической структурой и, как правило, не требуют знания стоимости или веса ребер."}),(0,i.jsx)(s.Z,{children:"Некоторые популярные алгоритмы для невзвешенных графов включают поиск в глубину (DFS), поиск в ширину (BFS), связные компоненты и обнаружение циклов. Эти алгоритмы являются важными инструментами для многих приложений, таких как оптимизация сети, кластеризация и майнинг данных."}),(0,i.jsx)(s.Z,{children:"В целом, понимание невзвешенных графов и алгоритмов, которые на них работают, может дать ценное представление о структуре и поведении сетей и систем, а также позволить развивать эффективные методы анализа и оптимизации данных."})]}),(0,i.jsxs)(o.Z,{title:"11. ВЗВЕШЕННЫЙ ГРАФ И АЛГОРИТМЫ НАХОЖДЕНИЯ КРАТЧАЙШЕГО ПУТИ",id:"weighted-graph",children:[(0,i.jsx)(s.Z,{children:"Взвешенные графы - это структура данных, которая тоже состоит из узлов (вершин) и соединяющих их ребер, но каждому ребру назначен вес или стоимость. Эти графы полезны для моделирования реальных отношений между объектами, где ребра представляют количественную меру силы отношений между двумя объектами. Примерами взвешенных графов являются дорожные сети, электрические цепи и социальные сети."}),(0,i.jsx)(s.Z,{children:"В контексте алгоритмического анализа, взвешенные графы позволяют разработку эффективных алгоритмов для решения сложных задач оптимизации. Взвешенные алгоритмы графов могут быть использованы для различных задач, таких как поиск кратчайшего пути между двумя узлами, определение минимального остовного дерева графа или максимизации потока ресурсов в сети."}),(0,i.jsx)(s.Z,{children:"Некоторые популярные взвешенные алгоритмы включают алгоритм Дейкстры, алгоритм Беллмана-Форда, алгоритм Краскала для минимального остовного дерева и алгоритм Форда-Фалкерсона для оптимизации потока. Эти алгоритмы широко используются в различных приложениях, таких как планирование путешествий, оптимизация ресурсов и управление сетями."}),(0,i.jsx)(s.Z,{children:"В целом, понимание взвешенных графов и алгоритмов, используемых для их анализа и оптимизации, является критическим для решения сложных задач в различных областях, включая компьютерные науки, инженерию, экономику и логистику. Реализуя эти алгоритмы, мы можем более эффективно использовать ресурсы, повышать производительность системы и решать задачи более эффективно."})]}),(0,i.jsxs)(o.Z,{title:"12. ДЕРЕВЬЯ И АЛГОРИТМЫ ДЛЯ РАБОТЫ С НИМИ",id:"trees",children:[(0,i.jsx)(s.Z,{children:"Деревья являются одной из наиболее фундаментальных структур данных в информатике, используемых для представления иерархических отношений между объектами. Они часто используются для моделирования реальных явлений, таких как файловые системы, генеалогические деревья и организационные структуры. В информатике деревья обычно представляются в виде коллекции узлов, связанных ребрами, где каждый узел представляет собой объект, а каждое ребро представляет отношение между двумя объектами."}),(0,i.jsx)(s.Z,{children:"Алгоритмы для работы с деревьями критически важны для многих приложений, включая поиск, сортировку и обход данных. Эти алгоритмы могут быть использованы для эффективного управления большими объемами данных и являются важными для многих приложений в области информатики. В этой статье мы рассмотрим основы деревьев и познакомимся с некоторыми распространенными алгоритмами, используемыми для работы с ними. Существует множество видов дерева, но вот оснонвые из них:"}),(0,i.jsx)(s.Z,{type:"ordered-list",children:(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"Двоичное дерево поиска (BST): двоичное дерево, в котором левое поддерево узла содержит только узлы с ключами меньшими, чем вышестоящий ключ, а правое поддерево содержит только узлы с ключами большими, чем ключ вышестоящего узла"}),(0,i.jsx)("li",{children:"AVL-дерево: самобалансирующееся двоичное дерево поиска, в котором высоты двух поддеревьев любого узла различаются не более чем на единицу"}),(0,i.jsx)("li",{children:"Красно-черное дерево: самобалансирующееся двоичное дерево поиска, где каждый узел окрашен либо в красный, либо в черный цвет, и цвет дочерних узлов должен отличаться"}),(0,i.jsx)("li",{children:"Куча: структура данных на основе дерева, удовлетворяющая свойству кучи, где родительский узел всегда больше или равен своим дочерним узлам в максимальной куче или меньше или равен своим дочерним узлам в минимальной куче"})]})})]}),(0,i.jsxs)(o.Z,{title:"13. ЖАДНЫЕ АЛГОРИТМЫ",id:"greedy-algorithms",children:[(0,i.jsx)(s.Z,{children:"Жадные алгоритмы - это важный класс алгоритмов, используемых в компьютерных науках и математике. Они часто используются для задач оптимизации, где цель заключается в поиске лучшего решения из набора возможных решений."}),(0,i.jsx)(s.Z,{children:"Основная идея за жадным алгоритмом заключается в том, чтобы сделать локально оптимальный выбор на каждом шаге в надежде, что это приведет к глобально оптимальному решению. Это означает, что алгоритм не рассматривает всю проблемную область сразу, а делает серию решений на основе информации, доступной на каждом шаге."}),(0,i.jsx)(s.Z,{children:"Одним из ключевых преимуществ жадных алгоритмов является их простота и эффективность. Поскольку они рассматривают только локальную информацию, они часто могут быстро решать сложные проблемы с относительно небольшой вычислительной нагрузкой. Однако, поскольку они не рассматривают всю проблемную область, они могут не всегда производить оптимальное решение."}),(0,i.jsx)(s.Z,{children:"В целом, жадные алгоритмы являются мощным инструментом для решения задач оптимизации в различных областях, включая компьютерные науки, математику и экономику. С тщательным использованием и анализом они могут обеспечивать эффективные и эффективные решения для широкого круга проблем."})]}),(0,i.jsx)(o.Z,{title:"14. ДИНАМИЧЕСКОЕ ПРОГРАММИРОВАНИЕ",id:"dynamic-programming",children:(0,i.jsx)(s.Z,{children:"Динамическое программирование - это мощная техника, широко используемая в компьютерных науках и математике для решения сложных задач оптимизации. В основе динамического программирования лежит разбиение большой проблемы на более мелкие, более управляемые подзадачи, а затем решение этих подзадач систематическим и эффективным способом. Этот подход может привести к значительным улучшениям производительности и использования памяти, что делает его необходимым инструментом для решения многих сложных задач."})})]})},d=r(6378),p=function(){return(0,i.jsx)(d.Z,{heading:"ВАЖНЫЕ АЛГОРИТМЫ И СТРУКТУРЫ ДАННЫХ",descTitle:"Структуры данных и алгоритмы",description:"Знание алгоритмов и структур данных позволяет найти самый эффективный способ решения задачи",planTitle:"ПЛАН ОБУЧЕНИЯ",planPoints:[{title:"Понятие алгоритмов и структур данных",href:"#algorithms-introduction"},{title:"Сложность алгоритмов, Big O нотация",href:"#big-o"},{title:"Array и Linked List",href:"#arrays"},{title:"Рекурсия",href:"#recursion"},{title:"Алгоритмы поиска",href:"#searching"},{title:"Алгоритмы сортировки",href:"#sorting"},{title:"Queue и Stack",href:"#queues"},{title:"Эвристические методы",href:"#heuristic-methods"},{title:"Hash-таблицы и hash-функции",href:"#hashmap"},{title:"Невзвешенный граф и алгоритмы поиска",href:"#unweighted-graph"},{title:"Взвешенный граф и алгоритмы нахождения кратчайшего пути",href:"#weighted-graph"},{title:"Деревья и алгоритмы для работы с ними",href:"#trees"},{title:"Жадные алгоритмы",href:"#greedy-algorithms"},{title:"Динамическое программирование",href:"#dynamic-programming"}],illustration:{imgSrc:"/olimp/dist/illustrations/algorithms/hero-illustration.png",width:412,height:261,alt:"",sx:{}}})},x=r(287),u=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Алгоритмы / Олимп - онлайн пособие по подготовке к олимпиадам по информатике"}),(0,i.jsx)("meta",{name:"description",content:"Знание алгоритмов и структур данных позволяет найти самый эффективный способ решения задачи"})]}),(0,i.jsx)(p,{}),(0,i.jsx)(h,{}),(0,i.jsx)(x.Z,{href:"/science"})]})}}},function(t){t.O(0,[888],(function(){return e=1926,t(t.s=e);var e}));var e=t.O();_N_E=e}]);