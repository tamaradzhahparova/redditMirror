webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar header_module_css_1 = __importDefault(__webpack_require__(/*! ./header.module.css */ \"./src/shared/Header/header.module.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar ThreadTitle_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"));\nvar SortBlock_1 = __importDefault(__webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"));\nvar Mails_1 = __importDefault(__webpack_require__(/*! ./Mails/Mails */ \"./src/shared/Header/Mails/Mails.tsx\"));\nvar PersonalAccount_1 = __importDefault(__webpack_require__(/*! ./PersonalAccount/PersonalAccount */ \"./src/shared/Header/PersonalAccount/PersonalAccount.tsx\"));\nfunction HeaderComponent() {\n    return (React.createElement(\"header\", { className: header_module_css_1.default.header },\n        React.createElement(\"div\", null,\n            React.createElement(ThreadTitle_1.default, null),\n            React.createElement(SortBlock_1.default, null)),\n        React.createElement(\"div\", null,\n            React.createElement(Mails_1.default, null),\n            React.createElement(SearchBlock_1.SearchBlock, null),\n            React.createElement(PersonalAccount_1.default, null))));\n}\nexports.Header = root_1.hot(HeaderComponent);\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/Mails/Mails.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Header/Mails/Mails.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar Mails_module_css_1 = __importDefault(__webpack_require__(/*! ./Mails.module.css */ \"./src/shared/Header/Mails/Mails.module.css\"));\nvar Mails = function () { return (react_1.default.createElement(\"div\", { cl: true },\n    react_1.default.createElement(\"div\", { className: Mails_module_css_1.default.count }, \"1\"))); };\nexports.default = Mails;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Mails/Mails.tsx?");

/***/ })

})