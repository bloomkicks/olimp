"use strict";
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 5266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero_section_HeroSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: ./src/components/layout/hero-section/HeroDivider.tsx


const HeroDivider = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
        component: "hr",
        sx: {
            display: "block",
            height: 2,
            bgcolor: "#000000",
            my: 3.75
        }
    });
};
/* harmony default export */ const hero_section_HeroDivider = (HeroDivider);

;// CONCATENATED MODULE: ./src/components/layout/hero-section/HeroIllustration.tsx


const HeroIllustration = ({ imgSrc , alt , sx  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "img",
        src: imgSrc,
        alt: alt || "",
        sx: {
            width: "100%",
            maxWidth: 500,
            ...sx
        }
    });
};
/* harmony default export */ const hero_section_HeroIllustration = (HeroIllustration);

;// CONCATENATED MODULE: ./src/components/layout/hero-section/Description.tsx



const Description = ({ title , text  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        mb: 6,
        style: {
            textAlign: "center"
        },
        px: 3.5,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h2",
                mb: 2,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle1",
                children: text
            })
        ]
    });
};
/* harmony default export */ const hero_section_Description = (Description);

// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
;// CONCATENATED MODULE: ./src/components/layout/hero-section/Plan.tsx




const Plan = ({ title , points  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        component: "section",
        textAlign: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h2",
                mb: 2,
                children: title || "ПЛАН ОБУЧЕНИЯ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                display: "inline-flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                mx: "auto",
                spacing: 1.25,
                textAlign: "left",
                px: 4,
                minWidth: 340,
                children: points.map((point, i)=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle1",
                        children: `${i + 1}. ${point}`
                    }, i + point))
            })
        ]
    });
};
/* harmony default export */ const hero_section_Plan = (Plan);

;// CONCATENATED MODULE: ./src/components/layout/hero-section/HeroSection.tsx







const HeroSection = ({ heading , descTitle , description , planPoints , planTitle , illustration , noPlan , sx  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        component: "article",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                mt: 7.5,
                mb: 6,
                sx: sx || {},
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h1",
                        textAlign: "center",
                        sx: {
                            position: "absolute",
                            top: "58%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "100%",
                            px: 3
                        },
                        children: heading
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(hero_section_HeroIllustration, {
                        imgSrc: illustration.imgSrc,
                        alt: illustration.alt,
                        sx: illustration.sx
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_section_Description, {
                title: descTitle,
                text: description
            }),
            !noPlan && /*#__PURE__*/ jsx_runtime_.jsx(hero_section_Plan, {
                title: planTitle || "ПЛАН ОБУЧЕНИЯ",
                points: planPoints
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_section_HeroDivider, {})
        ]
    });
};
/* harmony default export */ const hero_section_HeroSection = (HeroSection);


/***/ })

};
;