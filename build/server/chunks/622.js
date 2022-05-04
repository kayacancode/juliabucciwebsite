"use strict";
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 1622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Project)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/j6.png
/* harmony default export */ const j6 = ({"src":"/_next/static/media/j6.a852672a.png","height":3024,"width":4032,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAgElEQVR42mPgZGNkY2Xk5GQTEOATFxcXEBBgZmZiY2NhYGdm4OHmZEACgoICTEyMDAJ8PBB+Xl7Oxo3rKyrKgGwZaWmQkL+/79Spk6dOnbhvz/bNm9aampowQEBOdmZRUVFYWOiypQsa66vcXJ1BogICfBBpZhYGYUEhCFtIgBcA29kYNEGdhMkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Project.js




const Project = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            class: "container mx-auto flex flex-col flex-wrap items-center justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "content-center pb-20 font-['acumin-pro'] ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            class: "text-center text-4xl py-10",
                            children: props.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            class: "text-center text-2xl",
                            children: props.year
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            class: "text-center text-2xl pt-10",
                            children: props.instructors
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: props.img1,
                    width: props.width1,
                    height: props.height1
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "border-b-2 border-[#F6882D]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        class: "pb-10 font-['acumin-pro']",
                        children: props.text1
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Project = (Project);


/***/ })

};
;