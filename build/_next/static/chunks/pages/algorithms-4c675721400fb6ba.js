(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{5861:function(t,e,i){"use strict";i.d(e,{Z:function(){return j}});var r=i(3366),n=i(7462),l=i(7294),a=i(6010),o=i(9707),s=i(4780),h=i(948),c=i(1657),d=i(8216),p=i(1588),x=i(4867);function g(t){return(0,x.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=i(5893);const u=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.variant&&e[i.variant],"inherit"!==i.align&&e[`align${(0,d.Z)(i.align)}`],i.noWrap&&e.noWrap,i.gutterBottom&&e.gutterBottom,i.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var j=l.forwardRef((function(t,e){const i=(0,c.Z)({props:t,name:"MuiTypography"}),l=(t=>v[t]||t)(i.color),h=(0,o.Z)((0,n.Z)({},i,{color:l})),{align:p="inherit",className:x,component:j,gutterBottom:w=!1,noWrap:b=!1,paragraph:y=!1,variant:S="body1",variantMapping:A=Z}=h,B=(0,r.Z)(h,u),W=(0,n.Z)({},h,{align:p,color:l,className:x,component:j,gutterBottom:w,noWrap:b,paragraph:y,variant:S,variantMapping:A}),k=j||(y?"p":A[S]||Z[S])||"span",O=(t=>{const{align:e,gutterBottom:i,noWrap:r,paragraph:n,variant:l,classes:a}=t,o={root:["root",l,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,i&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,s.Z)(o,g,a)})(W);return(0,m.jsx)(f,(0,n.Z)({as:k,ref:e,ownerState:W,className:(0,a.Z)(O.root,x)},B))}))},1926:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/algorithms",function(){return i(4462)}])},702:function(t,e,i){"use strict";i.d(e,{Z:function(){return k}});var r=i(5893),n=i(5861),l=i(7357),a=i(1536),o=i(3366),s=i(7462),h=i(7294),c=i(6010),d=i(4780),p=i(1796),x=i(948),g=i(1657),m=i(1588),u=i(4867);function f(t){return(0,u.Z)("MuiDivider",t)}(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Z=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,x.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,s.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,p.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:t,ownerState:e})=>(0,s.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:t,ownerState:e})=>(0,s.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:t})=>(0,s.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),j=(0,x.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,s.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})));var w=h.forwardRef((function(t,e){const i=(0,g.Z)({props:t,name:"MuiDivider"}),{absolute:n=!1,children:l,className:a,component:h=(l?"div":"hr"),flexItem:p=!1,light:x=!1,orientation:m="horizontal",role:u=("hr"!==h?"separator":void 0),textAlign:w="center",variant:b="fullWidth"}=i,y=(0,o.Z)(i,Z),S=(0,s.Z)({},i,{absolute:n,component:h,flexItem:p,light:x,orientation:m,role:u,textAlign:w,variant:b}),A=(t=>{const{absolute:e,children:i,classes:r,flexItem:n,light:l,orientation:a,textAlign:o,variant:s}=t,h={root:["root",e&&"absolute",s,l&&"light","vertical"===a&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===a&&"withChildrenVertical","right"===o&&"vertical"!==a&&"textAlignRight","left"===o&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,d.Z)(h,f,r)})(S);return(0,r.jsx)(v,(0,s.Z)({as:h,className:(0,c.Z)(A.root,a),role:u,ref:e,ownerState:S},y,{children:l?(0,r.jsx)(j,{className:A.wrapper,ownerState:S,children:l}):null}))}));var b=()=>(0,r.jsx)(w,{component:"hr",sx:{display:"block",height:2,bgcolor:"#000000",my:3.75}});var y=t=>{let{imgSrc:e,alt:i,width:n,height:a,sx:o}=t;return(0,r.jsx)(l.Z,{component:"img",src:e,alt:i||"",width:n,height:a,sx:{width:"100%",maxWidth:500,borderRight:{md:"1px solid #BBBBBB"},aspectRatio:(n/a+"").slice(0,4),...o}})};var S=t=>{let{title:e,text:i,noPlan:a}=t;return(0,r.jsxs)(l.Z,{mb:a?0:6,sx:{textAlign:{xs:"center",md:"left"},maxWidth:700,width:"100%"},px:3.5,pt:{md:8},children:[(0,r.jsx)(n.Z,{variant:"h2",mb:2,children:e}),(0,r.jsx)(n.Z,{variant:"subtitle1",children:i})]})},A=i(1664),B=i.n(A);var W=t=>{let{title:e,points:i}=t;const o=i.length>6,s=i.length>12;return(0,r.jsxs)(l.Z,{component:"section",textAlign:"center",width:"100%",children:[(0,r.jsx)(n.Z,{variant:"h2",mb:2,children:e||"ПЛАН ОБУЧЕНИЯ"}),(0,r.jsx)(a.Z,{display:"flex",width:o?{xs:"100%",md:"90%",lg:"80%",xl:"75%"}:"fit-content",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:{md:"wrap"},maxHeight:{md:s?415:300},mx:"auto",spacing:1.25,textAlign:"left",px:4,minWidth:340,children:i.map(((t,e)=>(0,r.jsxs)(n.Z,{component:t.href?B():"p",href:t.href||"",color:t.href?"primary.dark":"text.primary",variant:"subtitle1",width:{md:o?"49%":"auto",maxWidth:"fit-content"},sx:{"&:hover":{textDecoration:t.href?"underline":"none"}},children:[e+1,". ",t.title]},e+t.title)))})]})};var k=t=>{let{heading:e,descTitle:i,description:o,planPoints:s,planTitle:h,illustration:c,noPlan:d,sx:p}=t;return(0,r.jsxs)(l.Z,{component:"article",children:[(0,r.jsxs)(a.Z,{direction:{xs:"column",md:"row"},mb:{md:1.5},justifyContent:"center",alignItems:"center",children:[(0,r.jsxs)(l.Z,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mt:7.5,mb:6,sx:{width:"100%",maxHeight:300,maxWidth:600,aspectRatio:(c.width/c.height+"").slice(0,4),...p||{}},children:[(0,r.jsx)(n.Z,{variant:"h1",textAlign:"center",sx:{position:"absolute",top:"58%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",px:3,zIndex:10},children:e}),(0,r.jsx)(y,{...c})]}),(0,r.jsx)(S,{title:i,text:o,noPlan:d})]}),!d&&(0,r.jsx)(W,{title:h||"ПЛАН ОБУЧЕНИЯ",points:s}),(0,r.jsx)(b,{})]})}},4192:function(t,e,i){"use strict";var r=i(5893),n=i(5861),l=i(7357);i(7294);e.Z=t=>{let{title:e,children:i,id:a="",sx:o}=t;return(0,r.jsxs)(l.Z,{component:"article",id:a,mb:"30px",px:3.5,minWidth:340,sx:{"& > div":{mt:"7px"},"& > .code":{mt:"13px",mb:"13px"},"& > h2":{mb:"16px"},...o||{}},children:[e&&(0,r.jsx)(n.Z,{variant:"h3",children:e}),i]})}},3810:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(5893);var n=function(t){let e="";return["return","if","pass","def","else","while","for","in"].includes(t)?e="keyword":Number(t).toString()===t||["True","False","None"].includes(t)||'"'===t[0]?e="value":["sum","print","yell","upper","range","say"].includes(t)?e="function":"#"===t[0]?e="comment":["result","user_name","age","access","num","str","num1","num2"].includes(t)?e="variable":"N"===t?e="var-red":"M"===t&&(e="var-green"),e},l=i(1664),a=i.n(l),o=i(5861);var s=t=>{let{children:e,type:i,href:l}=t,s="";"string"==typeof e&&(s=n(e),"this"===l&&(l=e));const h=(i||s).split(" ");return(0,r.jsx)(o.Z,{component:"link"===i?t=>{let{children:e,...i}=t;return(0,r.jsx)(a(),{href:l,...i,children:e})}:"span",variant:"inherit",className:h[0],sx:{color:"text."+h[0]||0,fontWeight:"bold"===h[1]?"bold":""},children:e})}},2895:function(t,e,i){"use strict";var r=i(5893),n=i(7357);i(7294);e.Z=t=>{let{children:e,type:i}=t;return(0,r.jsx)(n.Z,{sx:{"& a":{color:"primary.main",textDecoration:"underline"},pl:(null==i?void 0:i.includes("list"))?2.5:0,"& li":{mt:.75},"& .var-blue":{color:"code.variable"},"& .var-red":{color:"code.keyword"},"& .keyword":{color:"code.keyword"}},children:e})}},4462:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return g}});var r=i(5893),n=i(1664),l=i.n(n),a=i(2630),o=i(3810),s=i(2895),h=i(4192),c=i(7357);var d=()=>(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(h.Z,{title:"ОСНОВНЫЕ УЧЕБНЫЕ РЕСУРСЫ",children:[(0,r.jsx)(s.Z,{children:"Теперь, разобравшись с Питоном, мы можем приступать к изучению алгоритмов и структур данных. Язык программирова ния можно представить как инструмент, а алгоритмы как чертеж, план решения, который мы воплощаем в реальность этим инструментом"}),(0,r.jsx)(s.Z,{children:"Без чертежа не выйдет ничего хорошего, поэтому нам важно тщательно изучить эту область. В этом нам помогут всемирно признанные книги:"}),(0,r.jsx)(s.Z,{children:"1. «Грокаем алгоритмы» от Адитьи Бхагравой - отличная книга для новичков, просто и понятно обьясняющая нужные нам алгоритмы, структуры данных и концепции в программировании. Также, в качестве языка программирования в ней используется Питон, так что мы сможем попрактиковаться"}),(0,r.jsx)(s.Z,{children:"2. «Алгоритмы. Построение и анализ» от Томаса Кортмэн и других - довольно тяжелая книга, тщательно покрывающая широкий диапазон важных для нас алгоритмов. После ее прочтения вы станите намного лучше разбираться в алгоритмах и сильно увеличите свои шансы на успех в олимпиаде"}),(0,r.jsxs)(s.Z,{children:["Также полезно будет посещение разных лекции и курсов. Хорошими примерами будут"," ",(0,r.jsx)(o.Z,{type:"link",href:"https://fintech.tinkoff.ru/school/generation/algo",children:"Tinkoff Образование"})," ","или"," ",(0,r.jsx)(o.Z,{type:"link",href:"https://education.yandex.ru/inf?utm_source=ya_schoolbook&utm_medium=lp&utm_term=menu&utm_campaign=main",children:"Яндекс Учебник"})]})]}),(0,r.jsxs)(h.Z,{title:"1. ПОНЯТНИЕ АЛГОРИТМОВ И СТРУКТУР ДАННЫХ",id:"algorithms-introduction",children:[(0,r.jsx)(s.Z,{children:"Алгоритмы и структуры данных - важные понятия в вычислительных науках, помогающие эффективно решать задачи различного рода"}),(0,r.jsx)(s.Z,{children:"Алгоритм - это набор инструкций, разработанных для решения конкретной проблемы или выполнения определенной задачи. Алгоритмы можно представить как пошаговые процедуры, которые принимают входные данные и производят выходные. Они являются неотъемлемой частью многих компьютерных программ и используются для выполнения операций, таких как поиск, сортировка и анализ данных"}),(0,r.jsx)(s.Z,{children:"Структуры данных, с другой стороны, являются способом организации данных в памяти компьютера. Структуры данных могут быть полезны для оптимизации определенных операций, таких как поиск, сортировка и вставка или удаление данных. Некоторые примеры структур данных включают массивы, связные списки, деревья и графы, которые мы разберем чуть позже"}),(0,r.jsx)(s.Z,{children:"Алгоритмы и структуры данных составляют основу многих компьютерных программ и являются важными инструментами для решения сложных задач в областях, таких как математика, инженерия и наука"})]}),(0,r.jsxs)(h.Z,{title:"2. СЛОЖНОСТЬ АЛГОРИТМОВ",id:"big-o",children:[(0,r.jsx)(s.Z,{children:"Сложность алгоритма относится к тому, как эффективно алгоритм использует вычислительные ресурсы, такие как время и память, для решения проблемы. Обычно это измеряется в терминах временной сложности и пространственной сложности. Временная сложность - это количество времени, необходимое для завершения алгоритма, а пространственная сложность - это количество памяти, которое алгоритм использует."}),(0,r.jsx)(s.Z,{children:"Big O нотация - это способ выражения временной сложности алгоритма в виде функции размера его входных данных. Она используется для описания наихудшего сценария, или верхней границы, временной сложности алгоритма. Например, если алгоритм занимает 2n + 5 шагов для завершения, мы бы выразили его временную сложность в виде большой O-нотации как O(n), где n представляет размер входных данных."}),(0,r.jsx)(s.Z,{children:"Big O имеет различные общие классы временных сложностей, такие как O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n) и O(n!). Эти классы отражают, как растет временная сложность алгоритма при увеличении размера входных данных. В целом, по мере роста размера входных данных мы хотим, чтобы временная сложность алгоритма росла медленнее всего, что означает, что мы хотим выбирать алгоритмы с меньшими классами временной сложности, когда это возможно."}),(0,r.jsx)(s.Z,{children:"В целом, понимание сложности алгоритма и Big O нотации является важным для проектирования и реализации эффективных алгоритмов, которые могут экономить время и вычислительные ресурсы при решении сложных задач."})]}),(0,r.jsxs)(h.Z,{title:"3. ARRAY И LINKED LIST",id:"arrays",children:[(0,r.jsx)(s.Z,{children:"Массивы (Array) и связанные списки (Linked list) - две из наиболее важных и применяемых в компьютерной науке структур данных. Массив - это линейная структура данных, которая хранит элементы данных в фиксированном порядке, в то время как связанный список - нелинейная структура данных, состоящая из узлов, связанных друг с другом."}),(0,r.jsx)(s.Z,{children:"Массивы применяются для хранения информации, которую необходимо обратиться быстро, в то время как связанные списки прекрасно подходят для операций, таких как динамическое распределение памяти, вставки и удаления и общая манипуляция. Массивы также предоставляют больший случайный доступ, чем связанные списки, поскольку элементы в массиве могут быть доступны за постоянное время. Тем не менее связанные списки могут предоставить преимущество в терминах эффективности использования памяти благодаря своему динамическому распределению памяти, позволяя выделять новые узлы по требованию."}),(0,r.jsx)(s.Z,{children:"В заключение, массивы и связанные списки - это две структуры данных, без которых невозможно программирование. Знание того, как эффективно использовать эти структуры данных, необходимо для разработки эффективных алгоритмов и решения сложных задач программирования"})]}),(0,r.jsxs)(h.Z,{title:"4. РЕКУРСИЯ",id:"recursion",children:[(0,r.jsx)(s.Z,{children:"Рекурсия - это концепция программирования, при которой функция вызывает саму себя повторно до тех пор, пока не достигнет базового случая, когда функция перестает вызывать себя и возвращает окончательный результат. Рекурсию можно определить как повторяющийся процесс, в котором проблема разбивается на более мелкие подпроблемы того же типа, пока они не станут достаточно маленькими для прямого решения."}),(0,r.jsx)(s.Z,{children:"Рабочий принцип рекурсии прост - функция вызывает саму себя с менее сложной проблемой, пока проблему нельзя решить без рекурсии. Рекурсия часто используется в алгоритмах, которым требуется повторное выполнение процесса с другим входом или набором входных данных каждый раз."}),(0,r.jsx)(s.Z,{children:"Существуют две основные части рекурсивной функции: базовый случай, который определяет условие остановки (когда функция больше не вызывает себя), и рекурсивный случай (где функция вызывает саму себя с обновленными входными параметрами)."}),(0,r.jsx)(s.Z,{children:"Рекурсия является мощным инструментом для решения сложных проблем, имеющих несколько шагов, где каждый шаг требует того же типа вычислений, что и предыдущий шаг. Она часто используется в структурах данных, таких как деревья и графы, где структура данных естественным образом рекурсивна."})]}),(0,r.jsxs)(h.Z,{title:"5. АЛГОРИТМЫ ПОИСКА",id:"searching",children:[(0,r.jsx)(s.Z,{children:"Алгоритмы поиска в массиве - это набор техник и методов, которые используются для поиска определенных элементов или значений в массиве или списке элементов. Существует несколько популярных алгоритмов поиска в массиве, которые обычно используются, включая линейный поиск, двоичный поиск, интерполяционный поиск и экспоненциальный поиск."}),(0,r.jsx)(s.Z,{children:"1. Линейный поиск: это простейший алгоритм поиска, который ищет каждый элемент массива или списка и сравнивает его с целевым элементом до тех пор, пока не будет найдено соответствие. Линейный поиск имеет временную сложность O(n), где n - размер массива."}),(0,r.jsx)(s.Z,{children:"2. Двоичный поиск: это более эффективный алгоритм, который требует, чтобы массив был отсортирован в порядке. Он начинает свой поиск целевого элемента, рассматривая среднюю точку массива, а затем устраняет половину элементов, сравнивая целевой элемент с серединой. Двоичный поиск имеет временную сложность O(log n), где n - размер массива."}),(0,r.jsx)(s.Z,{children:"3. Интерполяционный поиск: это еще один вариант двоичного поиска, который используется, когда элементы в массиве равномерно распределены. Он использует формулу для оценки местоположения целевого элемента в массиве, а затем выполняет двоичный поиск. Интерполяционный поиск имеет временную сложность O(log log n), что быстрее, чем двоичный поиск."}),(0,r.jsx)(s.Z,{children:"4. Экспоненциальный поиск: это гибридный алгоритм, который объединяет как линейный, так и двоичный поиск. Он начинает поиск, рассматривая первый элемент, а затем увеличивает интервал в степени двойки до тех пор, пока не будет найден целевой элемент. Экспоненциальный поиск имеет временную сложность O(log n), что также совпадает с двоичным поиском."}),(0,r.jsx)(s.Z,{children:"В целом, выбор конкретного алгоритма поиска в массиве зависит от размера массива, распределения элементов в массиве и количества времени, доступного для поиска."})]}),(0,r.jsxs)(h.Z,{title:"8. ЭВРИСТИЧЕСКИЕ МЕТОДЫ",id:"heuristic-methods",children:[(0,r.jsx)(s.Z,{children:"Эвристический алгоритм — это алгоритм решения задачи, правильность которого для всех возможных случаев не доказана, но про который известно, что он даёт достаточно хорошее решение в большинстве случаев. В действительности может быть даже известно (то есть доказано), что эвристический алгоритм формально неверен. Его всё равно можно применять, если при этом он даёт неверный результат только в отдельных, достаточно редких и хорошо выделяемых случаях или же даёт неточный, но всё же приемлемый результат."}),(0,r.jsx)(s.Z,{children:"Проще говоря, эвристика — это не полностью математически обоснованный (или даже «не совсем корректный»), но при этом практически полезный алгоритм."}),(0,r.jsx)(s.Z,{children:"Важно понимать, что эвристика, в отличие от корректного алгоритма решения задачи, обладает следующими особенностями:"})]}),(0,r.jsxs)(h.Z,{title:"9. HASH-ТАБЛИЦЫ И HASH-ФУНКЦИИ",id:"hashmap",children:[(0,r.jsx)(s.Z,{children:"Хэш-таблица является важной структурой данных в информатике, которая позволяет разработчикам хранить и извлекать данные эффективным и организованным способом. Хеш-таблицы реализуются с использованием хеш-функций, которые преобразуют ключи в уникальные индексы в массиве, где можно хранить связанные данные."}),(0,r.jsx)(s.Z,{children:"Хеш-функции, как уже упоминалось, являются математическими алгоритмами, которые используются для преобразования входных данных произвольного размера в выходные данные фиксированного размера, известные как хеш-значения или хеши. Хеш-значения выступают в качестве индексов массива, где хранятся данные, связанные с ключом. Использование хеш-функций позволяет быстро находить данные, так как расположение связанных данных непосредственно вычисляется на основе ключа без необходимости линейного поиска."}),(0,r.jsx)(s.Z,{children:"Подводя итоги, хеш-таблицы и хеш-функции - мощная комбинация, которая обеспечивает эффективное хранение и извлечение данных. Они имеют широкое применение, включая управление базами данных, поисковые системы и системы информационного поиска. В этом введении мы исследуем, как эти два концепта работают вместе, чтобы обеспечить практическое решение для хранения и извлечения данных в различных областях вычислительной техники."})]}),(0,r.jsxs)(h.Z,{title:"10. НЕВЗВЕШЕННЫЙ ГРАФ И АЛГОРИТМЫ ПОИСКА",id:"unweighted-graph",children:[(0,r.jsx)(s.Z,{children:"Невзвешенные графы - это структуры данных, которые состоят из узлов (вершин) и соединяющих их ребер, где каждое ребро не имеет назначенного веса или стоимости. Эти графы обычно используются для изображения отношений между объектами в сети или для моделирования связей в системе, таких как сети транспорта, социальные сети или компьютерные сети."}),(0,r.jsx)(s.Z,{children:"В контексте алгоритмического анализа, невзвешенные графы позволяют разрабатывать эффективные алгоритмы для задач, таких как обход графа, поиск пути и анализ соединяемости сети. Эти алгоритмы работают непосредственно с графической структурой и, как правило, не требуют знания стоимости или веса ребер."}),(0,r.jsx)(s.Z,{children:"Некоторые популярные алгоритмы для невзвешенных графов включают поиск в глубину (DFS), поиск в ширину (BFS), связные компоненты и обнаружение циклов. Эти алгоритмы являются важными инструментами для многих приложений, таких как оптимизация сети, кластеризация и майнинг данных."}),(0,r.jsx)(s.Z,{children:"В целом, понимание невзвешенных графов и алгоритмов, которые на них работают, может дать ценное представление о структуре и поведении сетей и систем, а также позволить развивать эффективные методы анализа и оптимизации данных."})]}),(0,r.jsxs)(h.Z,{title:"11. ВЗВЕШЕННЫЙ ГРАФ И АЛГОРИТМЫ НАХОЖДЕНИЯ КРАТЧАЙШЕГО ПУТИ",id:"weighted-graph",children:[(0,r.jsx)(s.Z,{children:"Взвешенные графы - это структура данных, которая тоже состоит из узлов (вершин) и соединяющих их ребер, но каждому ребру назначен вес или стоимость. Эти графы полезны для моделирования реальных отношений между объектами, где ребра представляют количественную меру силы отношений между двумя объектами. Примерами взвешенных графов являются дорожные сети, электрические цепи и социальные сети."}),(0,r.jsx)(s.Z,{children:"В контексте алгоритмического анализа, взвешенные графы позволяют разработку эффективных алгоритмов для решения сложных задач оптимизации. Взвешенные алгоритмы графов могут быть использованы для различных задач, таких как поиск кратчайшего пути между двумя узлами, определение минимального остовного дерева графа или максимизации потока ресурсов в сети."}),(0,r.jsx)(s.Z,{children:"Некоторые популярные взвешенные алгоритмы включают алгоритм Дейкстры, алгоритм Беллмана-Форда, алгоритм Краскала для минимального остовного дерева и алгоритм Форда-Фалкерсона для оптимизации потока. Эти алгоритмы широко используются в различных приложениях, таких как планирование путешествий, оптимизация ресурсов и управление сетями."}),(0,r.jsx)(s.Z,{children:"В целом, понимание взвешенных графов и алгоритмов, используемых для их анализа и оптимизации, является критическим для решения сложных задач в различных областях, включая компьютерные науки, инженерию, экономику и логистику. Реализуя эти алгоритмы, мы можем более эффективно использовать ресурсы, повышать производительность системы и решать задачи более эффективно."})]}),(0,r.jsxs)(h.Z,{title:"12. ДЕРЕВЬЯ И АЛГОРИТМЫ ДЛЯ РАБОТЫ С НИМИ",id:"trees",children:[(0,r.jsx)(s.Z,{children:"Деревья являются одной из наиболее фундаментальных структур данных в информатике, используемых для представления иерархических отношений между объектами. Они часто используются для моделирования реальных явлений, таких как файловые системы, генеалогические деревья и организационные структуры. В информатике деревья обычно представляются в виде коллекции узлов, связанных ребрами, где каждый узел представляет собой объект, а каждое ребро представляет отношение между двумя объектами."}),(0,r.jsx)(s.Z,{children:"Алгоритмы для работы с деревьями критически важны для многих приложений, включая поиск, сортировку и обход данных. Эти алгоритмы могут быть использованы для эффективного управления большими объемами данных и являются важными для многих приложений в области информатики. В этой статье мы рассмотрим основы деревьев и познакомимся с некоторыми распространенными алгоритмами, используемыми для работы с ними. Существует множество видов дерева, но вот оснонвые из них:"}),(0,r.jsx)(s.Z,{type:"ordered-list",children:(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"Двоичное дерево поиска (BST): двоичное дерево, в котором левое поддерево узла содержит только узлы с ключами меньшими, чем вышестоящий ключ, а правое поддерево содержит только узлы с ключами большими, чем ключ вышестоящего узла"}),(0,r.jsx)("li",{children:"AVL-дерево: самобалансирующееся двоичное дерево поиска, в котором высоты двух поддеревьев любого узла различаются не более чем на единицу"}),(0,r.jsx)("li",{children:"Красно-черное дерево: самобалансирующееся двоичное дерево поиска, где каждый узел окрашен либо в красный, либо в черный цвет, и цвет дочерних узлов должен отличаться"}),(0,r.jsx)("li",{children:"Куча: структура данных на основе дерева, удовлетворяющая свойству кучи, где родительский узел всегда больше или равен своим дочерним узлам в максимальной куче или меньше или равен своим дочерним узлам в минимальной куче"})]})})]}),(0,r.jsxs)(h.Z,{title:"13. ЖАДНЫЕ АЛГОРИТМЫ",id:"greedy-algorithms",children:[(0,r.jsx)(s.Z,{children:"Жадные алгоритмы - это важный класс алгоритмов, используемых в компьютерных науках и математике. Они часто используются для задач оптимизации, где цель заключается в поиске лучшего решения из набора возможных решений."}),(0,r.jsx)(s.Z,{children:"Основная идея за жадным алгоритмом заключается в том, чтобы сделать локально оптимальный выбор на каждом шаге в надежде, что это приведет к глобально оптимальному решению. Это означает, что алгоритм не рассматривает всю проблемную область сразу, а делает серию решений на основе информации, доступной на каждом шаге."}),(0,r.jsx)(s.Z,{children:"Одним из ключевых преимуществ жадных алгоритмов является их простота и эффективность. Поскольку они рассматривают только локальную информацию, они часто могут быстро решать сложные проблемы с относительно небольшой вычислительной нагрузкой. Однако, поскольку они не рассматривают всю проблемную область, они могут не всегда производить оптимальное решение."}),(0,r.jsx)(s.Z,{children:"В целом, жадные алгоритмы являются мощным инструментом для решения задач оптимизации в различных областях, включая компьютерные науки, математику и экономику. С тщательным использованием и анализом они могут обеспечивать эффективные и эффективные решения для широкого круга проблем."})]}),(0,r.jsx)(h.Z,{title:"14. ДИНАМИЧЕСКОЕ ПРОГРАММИРОВАНИЕ",id:"dynamic-programming",children:(0,r.jsx)(s.Z,{children:"Динамическое программирование - это мощная техника, широко используемая в компьютерных науках и математике для решения сложных задач оптимизации. В основе динамического программирования лежит разбиение большой проблемы на более мелкие, более управляемые подзадачи, а затем решение этих подзадач систематическим и эффективным способом. Этот подход может привести к значительным улучшениям производительности и использования памяти, что делает его необходимым инструментом для решения многих сложных задач. В этом введении мы рассмотрим основные принципы динамического программирования и обсудим некоторые из его ключевых применений в таких областях, как компьютерные науки, экономика и инженерия."})})]}),p=i(702);var x=()=>(0,r.jsx)(p.Z,{heading:"ВАЖНЫЕ АЛГОРИТМЫ И СТРУКТУРЫ ДАННЫХ",descTitle:"Структуры данных и алгоритмы",description:"Знание алгоритмов и структур данных позволяет найти самый эффективный способ решения задачи",planTitle:"ПЛАН ОБУЧЕНИЯ",planPoints:[{title:"Понятие алгоритмов и структур данных",href:"#algorithms-introduction"},{title:"Сложность алгоритмов, Big O нотация",href:"#big-o"},{title:"Array и Linked List",href:"#arrays"},{title:"Рекурсия",href:"#recursion"},{title:"Алгоритмы поиска",href:"#searching"},{title:"Алгоритмы сортировки",href:"#sorting"},{title:"Queue и Stack",href:"#queues"},{title:"Эвристические методы",href:"#heuristic-methods"},{title:"Hash-таблицы и hash-функции",href:"#hashmap"},{title:"Невзвешенный граф и алгоритмы поиска",href:"#unweighted-graph"},{title:"Взвешенный граф и алгоритмы нахождения кратчайшего пути",href:"#weighted-graph"},{title:"Деревья и алгоритмы для работы с ними",href:"#trees"},{title:"Жадные алгоритмы",href:"#greedy-algorithms"},{title:"Динамическое программирование",href:"#dynamic-programming"}],illustration:{imgSrc:"./illustrations/algorithms/hero-illustration.png",width:412,height:261,alt:"",sx:{}}});var g=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(d,{}),(0,r.jsx)(a.Z,{component:l(),href:"/science",variant:"contained",sx:{px:3.75,py:1.2,borderRadius:18,mx:3.5},children:"ПРОДОЛЖИТЬ ПОДГОТОВКУ"})]})}},function(t){t.O(0,[888],(function(){return e=1926,t(t.s=e);var e}));var e=t.O();_N_E=e}]);