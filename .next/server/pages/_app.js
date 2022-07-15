/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//HttpLink above from https://brianlovin.com/writing/cookies-authenticate-next-js-apollo-graphql-requests  \n//...after static generation, need a pre-populated ApolloProvider cache to have access to the mutation and query hooks that come w/ @apollo/client\n//..after page renders, it needs to kick off a query to determine the viewer and progressively disclose things\n//..need to instantiate an ApolloClient during build time in getStaticProps\n/** \nconst endpoint = `http://localhost:3000/api/graphql`;\nconst link = new HttpLink({ uri: endpoint });\nconst cache = new InMemoryCache();\nexport async function getStaticApolloClient() {\n  return new ApolloClient({\n    link,\n    cache,\n  });\n}\n*/ //connect our to api @  \n//alternative uri: http://localhost:3001/graphql    https://countries.trevorblades.com\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    uri: \"http://localhost:3001/graphql\",\n    //uri: 'https://countries.trevorblades.com',  //used for https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n});\n//connect client to our app with ApolloProvider.. wrapping our app inside an ApolloProvider\nfunction MyApp({ Component , pageProps  }) {\n    return(//<ApolloProvider client={client}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/minhpham/WorkZone/projects/playground/nextjsPlayground/trialreatctypescript/pages/_app.tsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFeUQ7QUFFdkYsMkdBQTJHO0FBQzNHLGtKQUFrSjtBQUNsSiw4R0FBOEc7QUFDOUcsMkVBQTJFO0FBQzNFOzs7Ozs7Ozs7O0VBVUUsQ0FFRix3QkFBd0I7QUFDeEIsc0ZBQXNGO0FBQ3RGLE1BQU1FLE1BQU0sR0FBRyxJQUFJRix3REFBWSxDQUFDO0lBQzlCRyxHQUFHLEVBQUUsK0JBQStCO0lBQ3BDLDBJQUEwSTtJQUMxSUMsS0FBSyxFQUFFLElBQUlILHlEQUFhLEVBQUU7Q0FDM0IsQ0FBQztBQUVGLDJGQUEyRjtBQUMzRixTQUFTSSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxPQUNFLGtDQUFrQztrQkFDaEMsOERBQUNELFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztZQUFJLEVBRTlCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpYWxyZWF0Y3R5cGVzY3JpcHQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBBcG9sbG9Qcm92aWRlciwgSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbi8vSHR0cExpbmsgYWJvdmUgZnJvbSBodHRwczovL2JyaWFubG92aW4uY29tL3dyaXRpbmcvY29va2llcy1hdXRoZW50aWNhdGUtbmV4dC1qcy1hcG9sbG8tZ3JhcGhxbC1yZXF1ZXN0cyAgXG4vLy4uLmFmdGVyIHN0YXRpYyBnZW5lcmF0aW9uLCBuZWVkIGEgcHJlLXBvcHVsYXRlZCBBcG9sbG9Qcm92aWRlciBjYWNoZSB0byBoYXZlIGFjY2VzcyB0byB0aGUgbXV0YXRpb24gYW5kIHF1ZXJ5IGhvb2tzIHRoYXQgY29tZSB3LyBAYXBvbGxvL2NsaWVudFxuLy8uLmFmdGVyIHBhZ2UgcmVuZGVycywgaXQgbmVlZHMgdG8ga2ljayBvZmYgYSBxdWVyeSB0byBkZXRlcm1pbmUgdGhlIHZpZXdlciBhbmQgcHJvZ3Jlc3NpdmVseSBkaXNjbG9zZSB0aGluZ3Ncbi8vLi5uZWVkIHRvIGluc3RhbnRpYXRlIGFuIEFwb2xsb0NsaWVudCBkdXJpbmcgYnVpbGQgdGltZSBpbiBnZXRTdGF0aWNQcm9wc1xuLyoqIFxuY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmNvbnN0IGxpbmsgPSBuZXcgSHR0cExpbmsoeyB1cmk6IGVuZHBvaW50IH0pO1xuY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY0Fwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbmssXG4gICAgY2FjaGUsXG4gIH0pO1xufVxuKi9cblxuLy9jb25uZWN0IG91ciB0byBhcGkgQCAgXG4vL2FsdGVybmF0aXZlIHVyaTogaHR0cDovL2xvY2FsaG9zdDozMDAxL2dyYXBocWwgICAgaHR0cHM6Ly9jb3VudHJpZXMudHJldm9yYmxhZGVzLmNvbVxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ncmFwaHFsJyxcbiAgLy91cmk6ICdodHRwczovL2NvdW50cmllcy50cmV2b3JibGFkZXMuY29tJywgIC8vdXNlZCBmb3IgaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vYmxvZy9hcG9sbG8tY2xpZW50L25leHQtanMvbmV4dC1qcy1nZXR0aW5nLXN0YXJ0ZWQvXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXG59KTtcblxuLy9jb25uZWN0IGNsaWVudCB0byBvdXIgYXBwIHdpdGggQXBvbGxvUHJvdmlkZXIuLiB3cmFwcGluZyBvdXIgYXBwIGluc2lkZSBhbiBBcG9sbG9Qcm92aWRlclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKCBcbiAgICAvLzxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgLy88L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();