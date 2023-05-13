"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 3810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ text_content_Span)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/features/get-text-span-type.ts
function getTextSpanType(text) {
    let type = "";
    if ([
        "return",
        "if",
        "pass",
        "def",
        "else",
        "while",
        "for",
        "in"
    ].includes(text)) {
        type = "keyword";
    } else if (Number(text).toString() === text || [
        "True",
        "False",
        "None"
    ].includes(text) || text[0] === '"') {
        type = "value";
    } else if ([
        "sum",
        "print",
        "yell",
        "upper",
        "range",
        "say"
    ].includes(text)) {
        type = "function";
    } else if (text[0] === "#") {
        type = "comment";
    } else if ([
        "result",
        "user_name",
        "age",
        "access",
        "num",
        "str",
        "num1",
        "num2"
    ].includes(text)) {
        type = "variable";
    }
    return type;
}
/* harmony default export */ const get_text_span_type = (getTextSpanType);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./src/components/text-content/Span.tsx




const Span = ({ children , type , href  })=>{
    let defaultType = "";
    if (typeof children === "string") {
        defaultType = get_text_span_type(children);
        if (href === "this") href = children;
    }
    const types = (type || defaultType).split(" ");
    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
        component: type === "link" ? ({ children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                ...props,
                children: children
            }) : "span",
        variant: "inherit",
        className: types[0],
        sx: {
            color: "text." + types[0],
            fontWeight: types[1] === "bold" ? "bold" : ""
        },
        children: children
    });
};
/* harmony default export */ const text_content_Span = (Span);


/***/ })

};
;