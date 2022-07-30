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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//HttpLink above from https://brianlovin.com/writing/cookies-authenticate-next-js-apollo-graphql-requests  \n//...after static generation, need a pre-populated ApolloProvider cache to have access to the mutation and query hooks that come w/ @apollo/client\n//..after page renders, it needs to kick off a query to determine the viewer and progressively disclose things\n//..need to instantiate an ApolloClient during build time in getStaticProps\n/** \nconst endpoint = `http://localhost:3000/api/graphql`;\nconst link = new HttpLink({ uri: endpoint });\nconst cache = new InMemoryCache();\nexport async function getStaticApolloClient() {\n  return new ApolloClient({\n    link,\n    cache,\n  });\n}\n*/ //https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/  ...goes over Static/SSR/client side grapql\n//connect our to api @  \n//alternative uri: http://localhost:3001/graphql    https://countries.trevorblades.com\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    uri: \"http://localhost:3001/graphql\",\n    //uri: 'https://countries.trevorblades.com',  //used for https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n});\n//ApolloProvider is a React component for client-side graphql data retrieval after page renders\n//connect client to our app with ApolloProvider.. wrapping our app inside an ApolloProvider\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/minhpham/WorkZone/projects/playground/nextjsPlayground/trialreatctypescript/pages/_app.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/minhpham/WorkZone/projects/playground/nextjsPlayground/trialreatctypescript/pages/_app.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFeUQ7QUFFdkYsMkdBQTJHO0FBQzNHLGtKQUFrSjtBQUNsSiw4R0FBOEc7QUFDOUcsMkVBQTJFO0FBQzNFOzs7Ozs7Ozs7O0VBVUUsQ0FHRiwrSEFBK0g7QUFDL0gsd0JBQXdCO0FBQ3hCLHNGQUFzRjtBQUN0RixNQUFNRyxNQUFNLEdBQUcsSUFBSUgsd0RBQVksQ0FBQztJQUM5QkksR0FBRyxFQUFFLCtCQUErQjtJQUNwQywwSUFBMEk7SUFDMUlDLEtBQUssRUFBRSxJQUFJSix5REFBYSxFQUFFO0NBQzNCLENBQUM7QUFFRiwrRkFBK0Y7QUFDL0YsMkZBQTJGO0FBQzNGLFNBQVNLLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDTiwwREFBYztRQUFDQyxNQUFNLEVBQUVBLE1BQU07a0JBQzVCLDRFQUFDSSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2IsQ0FDakI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlhbHJlYXRjdHlwZXNjcmlwdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuLy9IdHRwTGluayBhYm92ZSBmcm9tIGh0dHBzOi8vYnJpYW5sb3Zpbi5jb20vd3JpdGluZy9jb29raWVzLWF1dGhlbnRpY2F0ZS1uZXh0LWpzLWFwb2xsby1ncmFwaHFsLXJlcXVlc3RzICBcbi8vLi4uYWZ0ZXIgc3RhdGljIGdlbmVyYXRpb24sIG5lZWQgYSBwcmUtcG9wdWxhdGVkIEFwb2xsb1Byb3ZpZGVyIGNhY2hlIHRvIGhhdmUgYWNjZXNzIHRvIHRoZSBtdXRhdGlvbiBhbmQgcXVlcnkgaG9va3MgdGhhdCBjb21lIHcvIEBhcG9sbG8vY2xpZW50XG4vLy4uYWZ0ZXIgcGFnZSByZW5kZXJzLCBpdCBuZWVkcyB0byBraWNrIG9mZiBhIHF1ZXJ5IHRvIGRldGVybWluZSB0aGUgdmlld2VyIGFuZCBwcm9ncmVzc2l2ZWx5IGRpc2Nsb3NlIHRoaW5nc1xuLy8uLm5lZWQgdG8gaW5zdGFudGlhdGUgYW4gQXBvbGxvQ2xpZW50IGR1cmluZyBidWlsZCB0aW1lIGluIGdldFN0YXRpY1Byb3BzXG4vKiogXG5jb25zdCBlbmRwb2ludCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyYXBocWxgO1xuY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogZW5kcG9pbnQgfSk7XG5jb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluayxcbiAgICBjYWNoZSxcbiAgfSk7XG59XG4qL1xuXG5cbi8vaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vYmxvZy9hcG9sbG8tY2xpZW50L25leHQtanMvbmV4dC1qcy1nZXR0aW5nLXN0YXJ0ZWQvICAuLi5nb2VzIG92ZXIgU3RhdGljL1NTUi9jbGllbnQgc2lkZSBncmFwcWxcbi8vY29ubmVjdCBvdXIgdG8gYXBpIEAgIFxuLy9hbHRlcm5hdGl2ZSB1cmk6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ncmFwaHFsICAgIGh0dHBzOi8vY291bnRyaWVzLnRyZXZvcmJsYWRlcy5jb21cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvZ3JhcGhxbCcsXG4gIC8vdXJpOiAnaHR0cHM6Ly9jb3VudHJpZXMudHJldm9yYmxhZGVzLmNvbScsICAvL3VzZWQgZm9yIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2Jsb2cvYXBvbGxvLWNsaWVudC9uZXh0LWpzL25leHQtanMtZ2V0dGluZy1zdGFydGVkL1xuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxufSk7XG5cbi8vQXBvbGxvUHJvdmlkZXIgaXMgYSBSZWFjdCBjb21wb25lbnQgZm9yIGNsaWVudC1zaWRlIGdyYXBocWwgZGF0YSByZXRyaWV2YWwgYWZ0ZXIgcGFnZSByZW5kZXJzXG4vL2Nvbm5lY3QgY2xpZW50IHRvIG91ciBhcHAgd2l0aCBBcG9sbG9Qcm92aWRlci4uIHdyYXBwaW5nIG91ciBhcHAgaW5zaWRlIGFuIEFwb2xsb1Byb3ZpZGVyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoIFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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