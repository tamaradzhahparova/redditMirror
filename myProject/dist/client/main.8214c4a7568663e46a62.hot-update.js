webpackHotUpdate("main",{

/***/ "./src/redux/commentSlice.ts":
/*!***********************************!*\
  !*** ./src/redux/commentSlice.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.updateComment = exports.commentSlice = void 0;\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nvar initialState = {\n    commentText: ''\n};\nexports.commentSlice = toolkit_1.createSlice({\n    name: 'comment',\n    initialState: initialState,\n    reducers: {\n        updateComment: function (state, action) {\n            state.commentText = action.payload;\n        }\n    }\n});\nexports.updateComment = exports.commentSlice.actions.updateComment;\n\n\n//# sourceURL=webpack:///./src/redux/commentSlice.ts?");

/***/ })

})