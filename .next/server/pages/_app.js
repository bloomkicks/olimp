(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/layout/UpButton.tsx




const UpButton = ({ sx  })=>{
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY >= 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }), [];
    });
    function clickHandler() {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        onClick: clickHandler,
        color: "inherit",
        centerRipple: true,
        sx: {
            borderRadius: "100px",
            width: {
                xs: 57.5,
                md: 70
            },
            height: {
                xs: 57.5,
                md: 70
            },
            minWidth: 57.5,
            position: "fixed",
            right: {
                xs: 30,
                md: 70,
                lg: 80
            },
            bottom: {
                xs: 37.5,
                md: 42.5,
                lg: 50
            },
            opacity: isVisible ? {
                xs: 0.925,
                md: 1
            } : 0,
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgb(210, 210, 210)",
            boxShadow: "1px 2px 4px rgba(0,0,0,0.25)",
            transition: "opacity 350ms ease-out",
            "&:hover, &:focus-visible, &.Mui-focused": {
                bgcolor: "rgb(200, 200, 200)"
            },
            zIndex: 200,
            ...sx
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            component: "img",
            src: "./general/up-arrow.svg",
            alt: "Наверх",
            width: "80%",
            height: "80%",
            sx: {
                transform: "translateY(-4%)"
            }
        })
    });
};
/* harmony default export */ const layout_UpButton = (UpButton);

;// CONCATENATED MODULE: external "@mui/material/LinearProgress"
const LinearProgress_namespaceObject = require("@mui/material/LinearProgress");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_namespaceObject);
;// CONCATENATED MODULE: ./src/components/layout/ProgressBar.tsx



const ProgressBar = ()=>{
    const [progress, setProgress] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        function scrollHandler() {
            let timeout = null;
            return function() {
                clearTimeout(timeout);
                timeout = setTimeout(()=>{
                    const docHeight = document.documentElement.scrollHeight;
                    const viewHeight = window.innerHeight;
                    const scroll = window.scrollY;
                    const progressVal = Math.ceil(scroll / (docHeight - viewHeight) * 100);
                    setProgress(Math.ceil(progressVal));
                }, 50);
            };
        }
        document.addEventListener("scroll", scrollHandler());
        window.addEventListener("resize", scrollHandler());
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
        variant: "determinate",
        color: "primary",
        value: progress,
        sx: {
            position: "fixed",
            zIndex: 81,
            bottom: 0,
            left: 0,
            height: 10,
            width: "100%",
            "& .MuiLinearProgress-bar": {
                transition: "transform 300ms linear"
            }
        }
    });
};
/* harmony default export */ const layout_ProgressBar = (ProgressBar);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
;// CONCATENATED MODULE: ./src/components/layout/header/Roadmap.tsx





let links = [
    {
        title: "Программирование на языке Python",
        href: "/python"
    },
    {
        title: "Алгоритмы и структуры данных",
        href: "/algorithms"
    },
    {
        title: "Разборы задач и практика",
        href: "/practice"
    },
    {
        title: "Технические науки и математика",
        href: "/science"
    },
    {
        title: "Советы от победителей",
        href: "/advice"
    }
];
const Roadmap = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
        id: "roadmap",
        alignItems: "center",
        spacing: 1.5,
        sx: {
            maxWidth: {
                xs: 350,
                md: 300
            },
            mx: "auto",
            mt: 8,
            width: "90%"
        },
        children: links.map((link, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                component: (link_default()),
                href: link.href,
                sx: {
                    position: "relative",
                    width: "100%",
                    alignSelf: i % 2 === 1 ? "flex-end" : "flex-start",
                    px: 2,
                    py: 1.25,
                    maxWidth: {
                        xs: 250,
                        md: "none"
                    },
                    fontSize: "16px",
                    textAlign: "center",
                    borderRadius: "10px",
                    border: "1px solid black",
                    bgcolor: "white",
                    cursor: "pointer",
                    color: router.pathname === link.href ? "primary.main" : "black",
                    textDecoration: "none"
                },
                children: [
                    link.title,
                    i !== 4 && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        position: "absolute",
                        sx: {
                            left: i % 2 === 0 ? "100%" : "",
                            right: i % 2 === 0 ? "" : "100%",
                            top: "50%",
                            width: {
                                xs: "19%",
                                md: 35
                            },
                            height: {
                                xs: 50,
                                md: 58
                            },
                            borderTopRightRadius: i % 2 === 0 ? "20px" : 0,
                            borderTopLeftRadius: i % 2 === 0 ? 0 : "20px",
                            borderBottomLeftRadius: i % 2 === 0 ? 0 : {
                                md: "20px"
                            },
                            borderBottomRightRadius: i % 2 === 1 ? 0 : {
                                md: "20px"
                            },
                            borderTop: "2px solid black",
                            borderBottom: {
                                md: "2px solid black"
                            },
                            borderRight: i % 2 === 0 ? "2px solid black" : 0,
                            borderLeft: i % 2 === 0 ? 0 : "2px solid black",
                            pointerEvents: "none"
                        }
                    })
                ]
            }, link.title))
    });
};
/* harmony default export */ const header_Roadmap = (Roadmap);

;// CONCATENATED MODULE: external "react-transition-group/Transition"
const Transition_namespaceObject = require("react-transition-group/Transition");
var Transition_default = /*#__PURE__*/__webpack_require__.n(Transition_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
;// CONCATENATED MODULE: ./src/components/layout/header/NavMenu.tsx






const NavMenu = ({ open , onClose  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
        open: open,
        onClose: onClose,
        keepMounted: true,
        anchor: "right",
        sx: {
            zIndex: 78,
            "& .MuiPaper-root": {
                width: {
                    xs: "100%",
                    md: 500
                },
                zIndex: 79,
                borderLeft: "none"
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
            sx: {
                position: "relative",
                bgcolor: "white",
                width: "100%",
                height: "100%",
                pt: 8,
                pl: "5px"
            },
            onClick: onClose,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header_Roadmap, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Transition_default()), {
                    in: open,
                    timeout: 300,
                    children: (state)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: 7,
                            height: "100%",
                            sx: {
                                bgcolor: "#75C997",
                                left: state === "entered" ? 0 : -7,
                                transition: "left 0.1s ease-in"
                            }
                        })
                })
            ]
        })
    });
};
/* harmony default export */ const header_NavMenu = (NavMenu);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/layout/header/MenuSetter.tsx


const MenuSetter = ({ onClick , isCross  })=>{
    const bars = [
        "#A84D4D",
        "#75C997",
        "#726BCB"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "button",
        onClick: onClick,
        sx: {
            display: "block",
            p: "3px",
            bgcolor: "white",
            transition: "transform 0.1s ease-out",
            cursor: "pointer",
            "&:hover, &:focus-visible": {
                transform: "scaleX(1.1)"
            }
        },
        children: bars.map((color, i)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                width: 40,
                height: 5,
                sx: {
                    bgcolor: color,
                    mb: i === 2 ? 0 : "5px",
                    transition: "transform 0.4s ease-out",
                    userSelect: "none",
                    transform: isCross ? i == 0 ? "translateY(10px) rotate(45deg)" : i == 2 ? "translateY(-10px) rotate(-45deg)" : {
                        xs: "translateX(100px)",
                        lg: "translateX(200px)",
                        xl: "translateX(500px)"
                    } : ""
                }
            }, "bar" + color))
    });
};
/* harmony default export */ const header_MenuSetter = (MenuSetter);

;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: ./src/components/layout/header/Header.tsx









const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    function setMenuHandler() {
        setIsMenuOpen((prev)=>!prev);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        sx: {
            bgcolor: "#FFFFFF",
            alignItems: "center",
            height: "68px",
            position: "fixed"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                sx: {
                    width: "100%",
                    zIndex: 100,
                    height: "100%",
                    maxWidth: "1366px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3.5
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: (link_default()),
                        href: "/main",
                        sx: {
                            position: "relative",
                            bottom: 1.5,
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "2rem",
                            textDecoration: "underline"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            unoptimized: true,
                            src: "./long-logo.png",
                            alt: "ОЛИМП",
                            width: 149.5,
                            height: 42.5
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(header_MenuSetter, {
                        onClick: setMenuHandler,
                        isCross: isMenuOpen
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_NavMenu, {
                open: isMenuOpen,
                onClose: setMenuHandler
            })
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        pt: "68px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "main",
                pb: 8,
                maxWidth: 1300,
                mx: "auto",
                px: {
                    md: 2
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_ProgressBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_UpButton, {
                sx: {}
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./src/components/layout/ThemeProvider.jsx



const heroFontFam = "Manrope, sans-serif";
const headingFontFam = "Inter, sans-serif";
const bodyFontFam = "Roboto, sans-serif";
const theme = (0,styles_namespaceObject.createTheme)({
    typography: {
        h1: {
            fontFamily: heroFontFam,
            // fontSize: "40px",
            fontSize: "2.86rem",
            fontWeight: 800,
            lineHeight: 1.365
        },
        h2: {
            fontFamily: headingFontFam,
            // fontSize: "28px",
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: 1.2
        },
        h3: {
            fontFamily: headingFontFam,
            // fontSize: "20px",
            fontSize: "1.44rem",
            fontWeight: 600,
            lineHeight: 1.21,
            textTransform: "uppercase"
        },
        h4: {
            fontFamily: headingFontFam,
            // fontSize: "20px",
            fontSize: "1.44rem",
            fontWeight: 300,
            lineHeight: 1.21
        },
        subtitle1: {
            fontFamily: bodyFontFam,
            // fontSize: "24px",
            fontSize: "1.72rem",
            fontWeight: 300,
            lineHeight: 1.17
        },
        body1: {
            fontFamily: bodyFontFam,
            // fontSize: "16px",
            fontSize: "1.14rem",
            fontWeight: 400,
            lineHeight: 1.21
        }
    },
    palette: {
        primary: {
            main: "#074FA5"
        },
        text: {
            default: "#000000",
            highlight: "#CF7A16",
            variable: "#074FA5",
            result: "#AE3E3E",
            keyword: "#A06CDF"
        },
        code: {
            default: "#FFFFFF",
            variable: "#B9D4FD",
            function: "#F0FDA3",
            value: "#92E277",
            keyword: "#D0B8FF",
            comment: "#B7FFF2"
        },
        background: {
            default: "#FFFFFF",
            paper: "#777777"
        }
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    opacity: 0.8
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {}
            }
        }
    }
});
const ThemeProvider = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            children
        ]
    });
};
/* harmony default export */ const layout_ThemeProvider = (ThemeProvider);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_ThemeProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8742:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675], () => (__webpack_exec__(3517)));
module.exports = __webpack_exports__;

})();