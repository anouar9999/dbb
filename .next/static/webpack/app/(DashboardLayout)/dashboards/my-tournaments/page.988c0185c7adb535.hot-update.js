"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(DashboardLayout)/dashboards/my-tournaments/page",{

/***/ "(app-pages-browser)/./src/app/(DashboardLayout)/TournamentCard.jsx":
/*!******************************************************!*\
  !*** ./src/app/(DashboardLayout)/TournamentCard.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst TournamentCard = (param)=>{\n    let { id, name, startDate, endDate, status, description, maxParticipants, prizePool, tournamentType, image, slug } = param;\n    const startDateObj = new Date(startDate);\n    const endDateObj = new Date(endDate);\n    const now = new Date();\n    const hoursUntilStart = Math.floor((startDateObj - now) / (1000 * 60 * 60));\n    const formatDate = (date)=>{\n        return date.toLocaleDateString(\"en-US\", {\n            month: \"long\",\n            day: \"numeric\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/dashboards/tournament/\".concat(slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-sm  overflow-hidden angular-cut shadow-lg hover:border hover:border-gray-800\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-48\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"http://51.79.24.18/\".concat(image),\n                            alt: name,\n                            layout: \"fill\",\n                            objectFit: \"cover\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-1/2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-white text-lg font-semibold mb-2\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center mb-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs text-gray-900 px-2 py-1  angular-cut font-medium \".concat(status === \"Ouvert aux inscriptions\" ? \"bg-yellow-500\" : status === \"En cours\" ? \"bg-green-500\" : \"bg-red-500\"),\n                                children: status\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-start text-white text-sm mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-2 first:pl-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-semibold\",\n                                            children: formatDate(startDateObj)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs text-gray-400\",\n                                            children: \"Start Date\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-semibold\",\n                                            children: formatDate(endDateObj)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs text-gray-400\",\n                                            children: \"End Date\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-semibold\",\n                                            children: maxParticipants\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs text-gray-400\",\n                                            children: \"Max Participants\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg font-bold text-white\",\n                                            children: [\n                                                prizePool,\n                                                \"DH\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xs text-gray-400\",\n                                            children: \"Prize Pool\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                status === \"Ouvert aux inscriptions\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center angular-cut space-x-2 bg-[#aa2180] hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2  transition duration-300\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Join\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            size: 16\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 14\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ce pc\\\\Desktop\\\\main2\\\\src\\\\app\\\\(DashboardLayout)\\\\TournamentCard.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TournamentCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TournamentCard);\nvar _c;\n$RefreshReg$(_c, \"TournamentCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKERhc2hib2FyZExheW91dCkvVG91cm5hbWVudENhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNXO0FBQ2I7QUFFN0IsTUFBTUksaUJBQWlCO1FBQUMsRUFDdEJDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxTQUFTLEVBQ1RDLE9BQU8sRUFDUEMsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLGVBQWUsRUFDZkMsU0FBUyxFQUNUQyxjQUFjLEVBQ2RDLEtBQUssRUFDTEMsSUFBSSxFQUNMO0lBQ0MsTUFBTUMsZUFBZSxJQUFJQyxLQUFLVjtJQUM5QixNQUFNVyxhQUFhLElBQUlELEtBQUtUO0lBQzVCLE1BQU1XLE1BQU0sSUFBSUY7SUFDaEIsTUFBTUcsa0JBQWtCQyxLQUFLQyxLQUFLLENBQUMsQ0FBQ04sZUFBZUcsR0FBRSxJQUFNLFFBQU8sS0FBSyxFQUFDO0lBRXhFLE1BQU1JLGFBQWEsQ0FBQ0M7UUFDbEIsT0FBT0EsS0FBS0Msa0JBQWtCLENBQUMsU0FBUztZQUFFQyxPQUFPO1lBQVFDLEtBQUs7UUFBVTtJQUMxRTtJQUVBLHFCQUNFLDhEQUFDeEIsa0RBQUlBO1FBQUN5QixNQUFNLDBCQUErQixPQUFMYjtrQkFDcEMsNEVBQUNjO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUM3QixtREFBS0E7NEJBQ0o4QixLQUFLLHNCQUE0QixPQUFOakI7NEJBQzNCa0IsS0FBSzFCOzRCQUNMMkIsUUFBTzs0QkFDUEMsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDTDs0QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUVqQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBR0wsV0FBVTtzQ0FBeUN4Qjs7Ozs7O3NDQUN2RCw4REFBQ3VCOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDTTtnQ0FBS04sV0FBVyw0REFFaEIsT0FEQ3JCLFdBQVcsNEJBQTRCLGtCQUFrQkEsV0FBVyxhQUFhLGlCQUFpQjswQ0FFakdBOzs7Ozs7Ozs7OztzQ0FJTCw4REFBQ29COzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FBRVAsV0FBVTtzREFBaUJQLFdBQVdQOzs7Ozs7c0RBQ3pDLDhEQUFDcUI7NENBQUVQLFdBQVU7c0RBQXdCOzs7Ozs7Ozs7Ozs7OENBRXZDLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFFUCxXQUFVO3NEQUFpQlAsV0FBV0w7Ozs7OztzREFDekMsOERBQUNtQjs0Q0FBRVAsV0FBVTtzREFBd0I7Ozs7Ozs7Ozs7Ozs4Q0FFdkMsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ087NENBQUVQLFdBQVU7c0RBQWlCbkI7Ozs7OztzREFDOUIsOERBQUMwQjs0Q0FBRVAsV0FBVTtzREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJekMsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7O3NEQUNDLDhEQUFDUTs0Q0FBRVAsV0FBVTs7Z0RBQWdDbEI7Z0RBQVU7Ozs7Ozs7c0RBQ3ZELDhEQUFDeUI7NENBQUVQLFdBQVU7c0RBQXdCOzs7Ozs7Ozs7Ozs7Z0NBR3RDckIsV0FBVywwQ0FDViw4REFBQzZCO29DQUNDUixXQUFVOztzREFFViw4REFBQ007c0RBQUs7Ozs7OztzREFDTiw4REFBQ2xDLHNGQUFVQTs0Q0FBQ3FDLE1BQU07Ozs7Ozs7Ozs7OzhEQUdyQiw4REFBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZDtLQWhGTXpCO0FBa0ZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKERhc2hib2FyZExheW91dCkvVG91cm5hbWVudENhcmQuanN4PzQ2Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBBcnJvd1JpZ2h0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFRvdXJuYW1lbnRDYXJkID0gKHsgXHJcbiAgaWQsIFxyXG4gIG5hbWUsIFxyXG4gIHN0YXJ0RGF0ZSwgXHJcbiAgZW5kRGF0ZSwgXHJcbiAgc3RhdHVzLCBcclxuICBkZXNjcmlwdGlvbiwgXHJcbiAgbWF4UGFydGljaXBhbnRzLCBcclxuICBwcml6ZVBvb2wsIFxyXG4gIHRvdXJuYW1lbnRUeXBlLCBcclxuICBpbWFnZSxcclxuICBzbHVnXHJcbn0pID0+IHtcclxuICBjb25zdCBzdGFydERhdGVPYmogPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gIGNvbnN0IGVuZERhdGVPYmogPSBuZXcgRGF0ZShlbmREYXRlKTtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGhvdXJzVW50aWxTdGFydCA9IE1hdGguZmxvb3IoKHN0YXJ0RGF0ZU9iaiAtIG5vdykgLyAoMTAwMCAqIDYwICogNjApKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9kYXNoYm9hcmRzL3RvdXJuYW1lbnQvJHtzbHVnfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSAgb3ZlcmZsb3ctaGlkZGVuIGFuZ3VsYXItY3V0IHNoYWRvdy1sZyBob3Zlcjpib3JkZXIgaG92ZXI6Ym9yZGVyLWdyYXktODAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQ4XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtgaHR0cDovLzUxLjc5LjI0LjE4LyR7aW1hZ2V9YCB9XHJcbiAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ncmF5LTkwMCB0by10cmFuc3BhcmVudCBoLTEvMlwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC14cyB0ZXh0LWdyYXktOTAwIHB4LTIgcHktMSAgYW5ndWxhci1jdXQgZm9udC1tZWRpdW0gJHtcclxuICAgICAgICAgICAgICBzdGF0dXMgPT09ICdPdXZlcnQgYXV4IGluc2NyaXB0aW9ucycgPyAnYmcteWVsbG93LTUwMCcgOiBzdGF0dXMgPT09ICdFbiBjb3VycycgPyAnYmctZ3JlZW4tNTAwJyA6ICdiZy1yZWQtNTAwJ1xyXG4gICAgICAgICAgICB9YH0+XHJcbiAgICAgICAgICAgICAge3N0YXR1c31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgdGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIGZpcnN0OnBsLTBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2Zvcm1hdERhdGUoc3RhcnREYXRlT2JqKX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+U3RhcnQgRGF0ZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Zm9ybWF0RGF0ZShlbmREYXRlT2JqKX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+RW5kIERhdGU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e21heFBhcnRpY2lwYW50c308L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+TWF4IFBhcnRpY2lwYW50czwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57cHJpemVQb29sfURIPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPlByaXplIFBvb2w8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3N0YXR1cyA9PT0gJ091dmVydCBhdXggaW5zY3JpcHRpb25zJyA/IChcclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYW5ndWxhci1jdXQgc3BhY2UteC0yIGJnLVsjYWEyMTgwXSBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1zZW1pYm9sZCBweC00IHB5LTIgIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Kb2luPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHQgc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdXJuYW1lbnRDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQXJyb3dSaWdodCIsIkxpbmsiLCJUb3VybmFtZW50Q2FyZCIsImlkIiwibmFtZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzdGF0dXMiLCJkZXNjcmlwdGlvbiIsIm1heFBhcnRpY2lwYW50cyIsInByaXplUG9vbCIsInRvdXJuYW1lbnRUeXBlIiwiaW1hZ2UiLCJzbHVnIiwic3RhcnREYXRlT2JqIiwiRGF0ZSIsImVuZERhdGVPYmoiLCJub3ciLCJob3Vyc1VudGlsU3RhcnQiLCJNYXRoIiwiZmxvb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1vbnRoIiwiZGF5IiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsImgyIiwic3BhbiIsInAiLCJidXR0b24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(DashboardLayout)/TournamentCard.jsx\n"));

/***/ })

});