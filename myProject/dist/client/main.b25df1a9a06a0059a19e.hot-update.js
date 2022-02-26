webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/PersonalAccount/PersonalAccount.module.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Header/PersonalAccount/PersonalAccount.module.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \".PersonalAccount-module__PersonalAccount--uYElq {\\n\\n}\\n\\n.PersonalAccount-module__userpick--3uuzI {\\n    width: 50px;\\n    height: 50px;\\n    border-radius: 100px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"PersonalAccount\": \"PersonalAccount-module__PersonalAccount--uYElq\",\n\t\"userpick\": \"PersonalAccount-module__userpick--3uuzI\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/PersonalAccount/PersonalAccount.module.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function (url, options) {\n    if (!options) {\n        // eslint-disable-next-line no-param-reassign\n        options = {};\n    } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n    url = url && url.__esModule ? url.default : url;\n    if (typeof url !== 'string') {\n        return url;\n    } // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        // eslint-disable-next-line no-param-reassign\n        url = url.slice(1, -1);\n    }\n    if (options.hash) {\n        // eslint-disable-next-line no-param-reassign\n        url += options.hash;\n    } // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n        return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n    }\n    return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ })

})