webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\nvar _jsxFileName = \"/home/devbrian/portfolio/pages/blog.js\",\n    _this = undefined;\n\n\n\n\nvar PostCard = function PostCard(_ref) {\n  var post = _ref.post;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-md-4\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"overflow\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: post.imageUrl,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"card-body\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: post.tile\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: post.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = PostCard;\n\nvar Blog = function Blog() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    footer: false,\n    dark: true,\n    title: \"My Blog\",\n    children: _profile__WEBPACK_IMPORTED_MODULE_2__[\"posts\"].map(function (post, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PostCard, {\n        post: post\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c2, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz82MWI4Il0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImltYWdlVXJsIiwidGlsZSIsImNvbnRlbnQiLCJCbG9nIiwicG9zdHMiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLHNCQUNmO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxRQUFmO0FBQXlCLGFBQUcsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRCxJQUFJLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZTtBQUFBLENBQWpCOztLQUFNSixROztBQWFOLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsc0JBQ1gscUVBQUMsMERBQUQ7QUFBUSxVQUFNLEVBQUUsS0FBaEI7QUFBdUIsUUFBSSxNQUEzQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBQSxjQUNHQyw4Q0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ04sSUFBRCxFQUFPTyxDQUFQO0FBQUEsMEJBQ1QscUVBQUMsUUFBRDtBQUFVLFlBQUksRUFBRVA7QUFBaEIsU0FBMkJPLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFc7QUFBQSxDQUFiOztNQUFNSCxJO0FBUVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gXCIuLi9wcm9maWxlXCI7XG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDE+e3Bvc3QudGlsZX08L2gxPlxuICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5jb25zdCBCbG9nID0gKCkgPT4gKFxuICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IGRhcmsgdGl0bGU9XCJNeSBCbG9nXCI+XG4gICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IGtleT17aX0gLz5cbiAgICApKX1cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})