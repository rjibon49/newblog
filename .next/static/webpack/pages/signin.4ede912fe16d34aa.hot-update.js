"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": function() { return /* binding */ getCookie; },\n/* harmony export */   \"removeCookie\": function() { return /* binding */ removeCookie; },\n/* harmony export */   \"setCookie\": function() { return /* binding */ setCookie; },\n/* harmony export */   \"signin\": function() { return /* binding */ signin; },\n/* harmony export */   \"signup\": function() { return /* binding */ signup; }\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\n\nvar signup = function(user) {\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__.API, \"/signup\"), {\n        method: \"POST\",\n        headers: {\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(user)\n    }).then(function(response) {\n        return response.json();\n    }).catch(function(err) {\n        return console.log(err);\n    });\n};\nvar signin = function(user) {\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__.API, \"/signin\"), {\n        method: \"POST\",\n        headers: {\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(user)\n    }).then(function(response) {\n        return response.json();\n    }).catch(function(err) {\n        return console.log(err);\n    });\n};\n// Set Cookiee\nvar setCookie = function(key, value) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(key, value, {\n            expire: 1\n        });\n    }\n};\nvar removeCookie = function(key) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(key, {\n            expire: 1\n        });\n    }\n};\n// Get Cookie\nvar getCookie = function(key) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(key);\n    }\n}; // localstorage\n // Autheticate user by pass data to cookie and localStorage\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb25zL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ1I7QUFDUjtBQUNDO0FBRXZCLElBQU1JLE1BQU0sR0FBR0MsU0FBQUEsSUFBSSxFQUFJO0lBQzFCLE9BQU9KLHVEQUFLLENBQUMsRUFBQyxDQUFNLE1BQU8sQ0FBWEMsd0NBQUcsRUFBQyxTQUFPLENBQUMsRUFBRTtRQUMxQkksTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ0xDLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixJQUFJLENBQUM7S0FDN0IsQ0FBQyxDQUFDTyxJQUFJLENBQUNDLFNBQUFBLFFBQVEsRUFBSTtRQUNoQixPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDO0tBQzFCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxTQUFBQSxHQUFHO2VBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7S0FBQSxDQUFDLENBQUM7Q0FDckMsQ0FBQztBQUdLLElBQU1HLE1BQU0sR0FBR2QsU0FBQUEsSUFBSSxFQUFJO0lBQzFCLE9BQU9KLHVEQUFLLENBQUMsRUFBQyxDQUFNLE1BQU8sQ0FBWEMsd0NBQUcsRUFBQyxTQUFPLENBQUMsRUFBRTtRQUMxQkksTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ0xDLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixJQUFJLENBQUM7S0FDN0IsQ0FBQyxDQUFDTyxJQUFJLENBQUNDLFNBQUFBLFFBQVEsRUFBSTtRQUNoQixPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDO0tBQzFCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxTQUFBQSxHQUFHO2VBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7S0FBQSxDQUFDLENBQUM7Q0FDckMsQ0FBQztBQUVGLGNBQWM7QUFFUCxJQUFNSSxTQUFTLEdBQUcsU0FBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUs7SUFDdEMsSUFBSUMsSUFBZSxFQUFFO1FBQ2pCcEIscURBQVUsQ0FBQ2tCLEdBQUcsRUFBRUMsS0FBSyxFQUFFO1lBQ25CSSxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztLQUNOO0NBQ0osQ0FBQztBQUVLLElBQU1DLFlBQVksR0FBRyxTQUFFTixHQUFHLEVBQUs7SUFDbEMsSUFBSUUsSUFBZSxFQUFFO1FBQ2pCcEIsd0RBQWEsQ0FBQ2tCLEdBQUcsRUFBRTtZQUNmSyxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztLQUNOO0NBQ0osQ0FBQztBQUVGLGFBQWE7QUFFTixJQUFNRyxTQUFTLEdBQUcsU0FBRVIsR0FBRyxFQUFLO0lBQy9CLElBQUlFLElBQWUsRUFBRTtRQUNqQnBCLHFEQUFVLENBQUNrQixHQUFHLENBQUMsQ0FBQztLQUNuQjtDQUNKLENBQUMsQ0FFRixlQUFlO0NBRWYsMkRBQTJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FjdGlvbnMvYXV0aC5qcz8yMTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb2tpZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7QVBJfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cCA9IHVzZXIgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbnVwYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduaW4gPSB1c2VyID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3NpZ25pbmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIFNldCBDb29raWVlXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKCBrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29va2llLnNldChrZXksIHZhbHVlLCB7XHJcbiAgICAgICAgICAgIGV4cGlyZTogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9ICgga2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZShrZXksIHtcclxuICAgICAgICAgICAgZXhwaXJlOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBHZXQgQ29va2llXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKCBrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBjb29raWUuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBsb2NhbHN0b3JhZ2VcclxuXHJcbi8vIEF1dGhldGljYXRlIHVzZXIgYnkgcGFzcyBkYXRhIHRvIGNvb2tpZSBhbmQgbG9jYWxTdG9yYWdlIl0sIm5hbWVzIjpbIkNvb2tpZSIsImZldGNoIiwiQVBJIiwiY29va2llIiwic2lnbnVwIiwidXNlciIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzaWduaW4iLCJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsInByb2Nlc3MiLCJicm93c2VyIiwic2V0IiwiZXhwaXJlIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/auth.js\n");

/***/ })

});