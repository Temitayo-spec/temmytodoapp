"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _comps_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Header */ \"./comps/Header.jsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/dist/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_5___default()), {\n                startPosition: 0.2,\n                stopDelayMs: 200,\n                height: 3,\n                color: \"#000\",\n                showSpinner: false\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Stack\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Stack\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Stack\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Documents\\\\Stack\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXVDO0FBQ0Y7QUFDUjtBQUNFO0FBQ2dCO0FBRS9DLFNBQVNJLEtBQUssQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBRW5DLHFCQUNFLDhEQUFDTixpREFBUTtRQUFDRSxLQUFLLEVBQUVBLDhDQUFLOzswQkFDcEIsOERBQUNDLDJEQUFhO2dCQUNaSSxhQUFhLEVBQUUsR0FBRztnQkFDbEJDLFdBQVcsRUFBRSxHQUFHO2dCQUNoQkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1RDLEtBQUssRUFBQyxNQUFNO2dCQUNaQyxXQUFXLEVBQUUsS0FBSzs7Ozs7b0JBa0JoQjswQkFDSiw4REFBQ1YscURBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNJLFNBQVMscUZBQUtDLFNBQVM7Ozs7b0JBQUk7Ozs7OztZQUNuQixDQUNYO0NBQ0g7QUFoQ1FGLEtBQUFBLEtBQUs7QUFrQ2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBzL0hlYWRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTmV4dE5Qcm9ncmVzcyBmcm9tIFwibmV4dGpzLXByb2dyZXNzYmFyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxOZXh0TlByb2dyZXNzXG4gICAgICAgIHN0YXJ0UG9zaXRpb249ezAuMn1cbiAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgaGVpZ2h0PXszfVxuICAgICAgICBjb2xvcj1cIiMwMDBcIlxuICAgICAgICBzaG93U3Bpbm5lcj17ZmFsc2V9XG4gICAgICAgIC8vIHJlbmRlcj17KHByb2dyZXNzQmFyUHJvcHMsIHJlZikgPT4gKFxuICAgICAgICAvLyAgIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHpJbmRleDogMSB9fT5cbiAgICAgICAgLy8gICAgIDxMaW5lYXJQcm9ncmVzc1xuICAgICAgICAvLyAgICAgICB7Li4ucHJvZ3Jlc3NCYXJQcm9wc31cbiAgICAgICAgLy8gICAgICAgc3R5bGU9e3tcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAvLyAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgLy8gICAgICAgICB0b3A6IDAsXG4gICAgICAgIC8vICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgLy8gICAgICAgICByaWdodDogMCxcbiAgICAgICAgLy8gICAgICAgICBoZWlnaHQ6IFwiM3B4XCIsXG4gICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyOWRcIixcbiAgICAgICAgLy8gICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCIsXG4gICAgICAgIC8vICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgLy8gICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAvLyAgICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgIC8vIC8+XG4gICAgICAgIC8+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJIZWFkZXIiLCJzdG9yZSIsIk5leHROUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0YXJ0UG9zaXRpb24iLCJzdG9wRGVsYXlNcyIsImhlaWdodCIsImNvbG9yIiwic2hvd1NwaW5uZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});