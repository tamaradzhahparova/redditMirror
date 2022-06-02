webpackHotUpdate("main",{

/***/ "./src/redux/commentSlice.ts":
/*!***********************************!*\
  !*** ./src/redux/commentSlice.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: ENOENT: no such file or directory, open '/Users/personal/code/gitlab/reactjs/myProject/src/redux/commentSlice.ts'\");\n\n//# sourceURL=webpack:///./src/redux/commentSlice.ts?");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nvar commentSlice_1 = __webpack_require__(/*! ./commentSlice */ \"./src/redux/commentSlice.ts\");\nvar tokenSlice_1 = __webpack_require__(/*! ./tokenSlice */ \"./src/redux/tokenSlice.ts\");\nvar postsSlice_1 = __webpack_require__(/*! ./postsSlice */ \"./src/redux/postsSlice.ts\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\nvar meSlice_1 = __webpack_require__(/*! ./meSlice */ \"./src/redux/meSlice.ts\");\nvar store = toolkit_1.configureStore({\n    reducer: {\n        commentSlice: commentSlice_1.commentSlice.reducer,\n        tokenSlice: tokenSlice_1.tokenSlice.reducer,\n        postsSlice: postsSlice_1.postsSlice.reducer,\n        meSlice: meSlice_1.meSlice.reducer\n    },\n    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware().concat(redux_thunk_1.default); }\n});\nexports.default = store;\n\n\n//# sourceURL=webpack:///./src/redux/store.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Post/CommentForm/CommentFormContainer.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Post/CommentForm/CommentFormContainer.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar reduxHooks_1 = __webpack_require__(/*! ../../../../hooks/reduxHooks */ \"./src/hooks/reduxHooks.ts\");\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CardsList/Post/CommentForm/CommentForm.tsx\"));\nvar commentSlice_1 = __webpack_require__(/*! ../../../../redux/commentSlice */ \"./src/redux/commentSlice.ts\");\nvar CommentFormContainer = function (_a) {\n    var name = _a.name;\n    var value = reduxHooks_1.useAppSelector(function (state) { return state.commentSlice.commentText; });\n    var dispatch = reduxHooks_1.useAppDispatch();\n    var handleSubmit = function (data) {\n        dispatch(commentSlice_1.updateComment(data.comment));\n    };\n    return react_1.default.createElement(CommentForm_1.default, { name: name, value: value, setComment: handleSubmit });\n};\nexports.default = CommentFormContainer;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Post/CommentForm/CommentFormContainer.tsx?");

/***/ })

})