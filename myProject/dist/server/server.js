/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\nvar usePostsData = function () {\n    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];\n    var token = react_1.useContext(tokenContext_1.tokenContext);\n    react_1.useEffect(function () {\n        axios_1.default.get('https://oauth.reddit.com/best.json', {\n            headers: { Authorization: \"bearer \" + token }\n        }).then(function (res) {\n            console.log(res.data.data.children);\n            var newPosts = res.data.data.children.map(function (post) {\n                return {\n                    title: post.data.title,\n                    author: post.data.author,\n                    photoUrl: post.data.url,\n                    id: post.data.id,\n                    ups: post.data.ups,\n                    created: post.data.created * 1000,\n                    comments: post.data.num_comments\n                };\n            });\n            setPosts(newPosts);\n        });\n    }, []);\n    return [posts];\n};\nexports.usePostsData = usePostsData;\n//to-do - save base URL in axios options\n// to-do - remove all ts-ignore and ANY\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useToken() {\n    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];\n    react_1.useEffect(function () {\n        if (window.__token__) {\n            setToken(window.__token__);\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\nvar useUserData = function () {\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\n    var token = react_1.useContext(tokenContext_1.tokenContext);\n    react_1.useEffect(function () {\n        if (!token || token == '' || token == 'undefined') {\n            return;\n        }\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\n            headers: { Authorization: \"bearer \" + token }\n        }).then(function (res) {\n            var userData = res.data;\n            var iconImgWithoutParams = userData.icon_img.split('?');\n            setData({ name: userData.name, iconImg: iconImgWithoutParams[0] });\n        }).catch(console.log);\n    }, [token]);\n    return [data];\n};\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n    --black: #333;\\n    --orange: #CC6633;\\n    --green: #A4CC33;\\n    --whiteLightness: 100%;\\n    --white: hsl(0, 0%, var(--whiteLightness));\\n    --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n    --grayF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n    --grayD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n    --grayC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n    --gray99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n    --gray66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n    --grayEC: #ECECEC;\\n\\n}\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n    background-color: var(--grayF4);\\n    font-size: 14px;\\n    line-height: 16px;\\n    font-family: 'Roboto', serif;\\n}\\n\\n* {\\n    color: var(--black);\\n    box-sizing: border-box;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n    margin: 0;\\n    padding: 0;\\n    list-style: none;\\n}\\n\\na {\\n    text-decoration: none;\\n}\\n\\nbutton {\\n    padding: 0;\\n    border: none;\\n    cursor: pointer;\\n    background-color: transparent;\\n}\\n\\nh1, h2, h3 {\\n    margin: 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Reddit</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n      window.__token__ = '\" + token + \"'\\n    </script>\\n</head>\\n<body>\\n    <div id=\\\"root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar app = express_1.default();\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\napp.get(\"/\", function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.get(\"/auth\", function (req, res) {\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\n        auth: { username: 'GdMVQapO1hwWBTYtgyOwUw', password: 'q8V7ITMCyvVqDW8QmU-DX-1eLBmDcQ' },\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\n    }).then(function (_a) {\n        var data = _a.data;\n        console.log();\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\n    }).catch(console.log);\n});\napp.listen(3000, function () {\n    console.log(\"server started on http://localhost:3000\");\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ../main.global.css */ \"./src/main.global.css\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Header_1 = __webpack_require__(/*! ./Header/Header */ \"./src/shared/Header/Header.tsx\");\nvar Layout_1 = __webpack_require__(/*! ./Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\nvar Content_1 = __importDefault(__webpack_require__(/*! ./Content/Content */ \"./src/shared/Content/Content.tsx\"));\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\"));\nvar useToken_1 = __webpack_require__(/*! ../hooks/useToken */ \"./src/hooks/useToken.ts\");\nvar tokenContext_1 = __webpack_require__(/*! ./context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\nvar userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/shared/context/userContext.tsx\");\nvar postsContext_1 = __webpack_require__(/*! ./context/postsContext */ \"./src/shared/context/postsContext.tsx\");\nvar AppComponent = function () {\n    var token = useToken_1.useToken()[0];\n    return (react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\n            react_1.default.createElement(Layout_1.Layout, null,\n                react_1.default.createElement(Header_1.Header, null),\n                react_1.default.createElement(Content_1.default, null,\n                    react_1.default.createElement(postsContext_1.PostsContextProvider, null,\n                        react_1.default.createElement(CardsList_1.default, null)))))));\n};\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.module.css":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/Card.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Card\": \"Card-module__Card--14NKH\",\n\t\"cardOptions\": \"Card-module__cardOptions--1LADq\",\n\t\"dropdownMenuWrapper\": \"Card-module__dropdownMenuWrapper--3DjhU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Card_module_css_1 = __importDefault(__webpack_require__(/*! ./Card.module.css */ \"./src/shared/CardsList/Card/Card.module.css\"));\nvar Controls_1 = __importDefault(__webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"));\nvar Preview_1 = __importDefault(__webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"));\nvar TextContent_1 = __importDefault(__webpack_require__(/*! ./TextContent/TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"));\nvar MenuButton_1 = __importDefault(__webpack_require__(/*! ./Menu/MenuButton */ \"./src/shared/CardsList/Card/Menu/MenuButton.tsx\"));\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ../../Dropdown/Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"));\nvar DropdownList_1 = __importDefault(__webpack_require__(/*! ./DropdownList/DropdownList */ \"./src/shared/CardsList/Card/DropdownList/DropdownList.tsx\"));\nvar Card = function (_a) {\n    var post = _a.post;\n    return (react_1.default.createElement(\"li\", { className: Card_module_css_1.default.Card },\n        react_1.default.createElement(Preview_1.default, { img: post.photoUrl }),\n        react_1.default.createElement(TextContent_1.default, { title: post.title, name: post.author, created: post.created }),\n        react_1.default.createElement(\"div\", { className: Card_module_css_1.default.cardOptions },\n            react_1.default.createElement(\"div\", { className: Card_module_css_1.default.dropdownMenuWrapper },\n                react_1.default.createElement(Dropdown_1.default, { button: react_1.default.createElement(MenuButton_1.default, null) },\n                    react_1.default.createElement(DropdownList_1.default, { postId: 1234 }))),\n            react_1.default.createElement(Controls_1.default, { ups: post.ups, comments: post.comments }))));\n};\nexports.default = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.module.css":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"likes\": \"Controls-module__likes--1MzTb\",\n\t\"buttonDown\": \"Controls-module__buttonDown--2aaXw\",\n\t\"count\": \"Controls-module__count--2aHrc\",\n\t\"comments\": \"Controls-module__comments--3ZK33\",\n\t\"share\": \"Controls-module__share--XNQWI\",\n\t\"addPost\": \"Controls-module__addPost--1Y4mz\",\n\t\"Controls\": \"Controls-module__Controls--3g0bH\",\n\t\"buttonsRight\": \"Controls-module__buttonsRight--NiE-2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Controls_module_css_1 = __importDefault(__webpack_require__(/*! ./Controls.module.css */ \"./src/shared/CardsList/Card/Controls/Controls.module.css\"));\nvar Controls = function (_a) {\n    var ups = _a.ups, comments = _a.comments;\n    return (react_1.default.createElement(\"div\", { className: Controls_module_css_1.default.Controls },\n        react_1.default.createElement(\"div\", { className: Controls_module_css_1.default.likes },\n            react_1.default.createElement(\"button\", null,\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\n            react_1.default.createElement(\"span\", { className: Controls_module_css_1.default.count }, ups),\n            react_1.default.createElement(\"button\", { className: Controls_module_css_1.default.buttonDown },\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))),\n        react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"button\", { className: Controls_module_css_1.default.comments },\n                react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\n                react_1.default.createElement(\"span\", null, comments))),\n        react_1.default.createElement(\"div\", { className: Controls_module_css_1.default.buttonsRight },\n            react_1.default.createElement(\"button\", { className: Controls_module_css_1.default.share },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\n            react_1.default.createElement(\"button\", { className: Controls_module_css_1.default.addPost },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\n};\nexports.default = Controls;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/DropdownList/DropdownList.module.css":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/DropdownList/DropdownList.module.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"DropdownList\": \"DropdownList-module__DropdownList--3mvtS\",\n\t\"menuItem\": \"DropdownList-module__menuItem--3gzT4\",\n\t\"menuItemText\": \"DropdownList-module__menuItemText--1pfB3\",\n\t\"menuItemIcon\": \"DropdownList-module__menuItemIcon--13cKR\",\n\t\"menuCloseButton\": \"DropdownList-module__menuCloseButton---i4lJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/DropdownList/DropdownList.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/DropdownList/DropdownList.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/DropdownList/DropdownList.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar DropdownList_module_css_1 = __importDefault(__webpack_require__(/*! ./DropdownList.module.css */ \"./src/shared/CardsList/Card/DropdownList/DropdownList.module.css\"));\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\nvar LIST = [\n    {\n        icon: react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })),\n        text: 'Комментарии',\n    },\n    {\n        icon: react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })),\n        text: 'Поделиться',\n    },\n    {\n        icon: react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })),\n        text: 'Скрыть',\n    },\n    {\n        icon: react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })),\n        text: 'Сохранить',\n    },\n    {\n        icon: react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })),\n        text: 'Пожаловаться',\n    }\n].map(generateRandomIndex_1.generateId);\nvar DropdownList = function (_a) {\n    var postId = _a.postId;\n    var list = react_1.useState(LIST)[0];\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(\"ul\", { className: DropdownList_module_css_1.default.DropdownList },\n            list.map(function (item) { return react_1.default.createElement(MenuDropdownItem, { postId: postId, icon: item.icon, key: item.id, text: item.text }); }),\n            react_1.default.createElement(\"button\", { className: DropdownList_module_css_1.default.menuCloseButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))));\n};\nvar MenuDropdownItem = function (_a) {\n    var text = _a.text, icon = _a.icon, postId = _a.postId;\n    return (react_1.default.createElement(\"li\", { className: DropdownList_module_css_1.default.menuItem, onClick: function () { console.log(postId); } },\n        react_1.default.createElement(\"div\", { className: DropdownList_module_css_1.default.menuItemIcon }, icon),\n        react_1.default.createElement(\"button\", { className: DropdownList_module_css_1.default.menuItemText }, text)));\n};\nexports.default = DropdownList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/DropdownList/DropdownList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuButton.module.css":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuButton.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuButton\": \"MenuButton-module__menuButton--2R3tD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuButton.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuButton.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuButton.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar MenuButton_module_css_1 = __importDefault(__webpack_require__(/*! ./MenuButton.module.css */ \"./src/shared/CardsList/Card/Menu/MenuButton.module.css\"));\nvar MenuButton = function () { return (react_1.default.createElement(\"button\", { className: MenuButton_module_css_1.default.menuButton },\n    react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })))); };\nexports.default = MenuButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.module.css":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Preview\": \"Preview-module__Preview--cqBqh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Preview_module_css_1 = __importDefault(__webpack_require__(/*! ./Preview.module.css */ \"./src/shared/CardsList/Card/Preview/Preview.module.css\"));\nvar Preview = function (_a) {\n    var img = _a.img;\n    var isImage = img.slice(img.length - 3, img.length) == 'jpg';\n    return (react_1.default.createElement(\"div\", { className: Preview_module_css_1.default.Preview },\n        react_1.default.createElement(\"img\", { src: isImage ? img : 'https://srisovki.one/wp-content/uploads/2021/07/2dc87a4b6139f778befe1ee92a17ae6a.jpg', alt: \"preview image\" })));\n};\nexports.default = Preview;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.module.css":
/*!************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.module.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"CardMetaData\": \"CardMetaData-module__CardMetaData--3D7ql\",\n\t\"publishedAt\": \"CardMetaData-module__publishedAt--3Y2Kv\",\n\t\"userLink\": \"CardMetaData-module__userLink--ZZUxD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar CardMetaData_module_css_1 = __importDefault(__webpack_require__(/*! ./CardMetaData.module.css */ \"./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.module.css\"));\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar tokenContext_1 = __webpack_require__(/*! ../../../../context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\nfunction declOfNum(number, titles) {\n    var cases = [2, 0, 1, 1, 1, 2];\n    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];\n}\nvar CardMetaData = function (_a) {\n    var name = _a.name, created = _a.created;\n    var _b = react_1.useState(''), iconImg = _b[0], setIconImg = _b[1];\n    var token = react_1.useContext(tokenContext_1.tokenContext);\n    var date = new Date();\n    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());\n    var createdAgo = Math.round((now_utc - created) / 3600000);\n    react_1.useEffect(function () {\n        if (token == 'undefined') {\n            return;\n        }\n        axios_1.default.get(\"https://oauth.reddit.com/user/\" + name + \"/about\", {\n            headers: { Authorization: \"bearer \" + token }\n        }).then(function (res) {\n            setIconImg(res.data.data.icon_img.split('?')[0]);\n        });\n    }, [name, token]);\n    return (react_1.default.createElement(\"div\", { className: CardMetaData_module_css_1.default.CardMetaData },\n        react_1.default.createElement(\"span\", { className: CardMetaData_module_css_1.default.publishedAt },\n            react_1.default.createElement(\"span\", null, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"), createdAgo + \" \" + declOfNum(createdAgo, ['час', 'часа', 'часов']) + \" \\u043D\\u0430\\u0437\\u0430\\u0434\"),\n        react_1.default.createElement(\"div\", { className: CardMetaData_module_css_1.default.userLink },\n            iconImg ? react_1.default.createElement(\"img\", { src: iconImg, alt: 'avatar' }) : react_1.default.createElement(\"img\", { src: \"https://cdn-icons-png.flaticon.com/512/147/147144.png\", alt: \"avatar\" }),\n            react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/user/\" + name + \"/\" }, name))));\n};\nexports.default = CardMetaData;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.module.css":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"TextContent\": \"TextContent-module__TextContent--186pA\",\n\t\"title\": \"TextContent-module__title--TiHxz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar TextContent_module_css_1 = __importDefault(__webpack_require__(/*! ./TextContent.module.css */ \"./src/shared/CardsList/Card/TextContent/TextContent.module.css\"));\nvar CardMetaData_1 = __importDefault(__webpack_require__(/*! ./CardMetaData/CardMetaData */ \"./src/shared/CardsList/Card/TextContent/CardMetaData/CardMetaData.tsx\"));\nvar TextContent = function (_a) {\n    var title = _a.title, name = _a.name, created = _a.created;\n    return (react_1.default.createElement(\"div\", { className: TextContent_module_css_1.default.TextContent },\n        react_1.default.createElement(\"h2\", { className: TextContent_module_css_1.default.title }, title),\n        react_1.default.createElement(CardMetaData_1.default, { name: name, created: created })));\n};\nexports.default = TextContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.module.css":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/CardsList.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"CardsList\": \"CardsList-module__CardsList--2-am5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.module.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\"));\nvar CardsList_module_css_1 = __importDefault(__webpack_require__(/*! ./CardsList.module.css */ \"./src/shared/CardsList/CardsList.module.css\"));\nvar postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\nvar CardsList = function () {\n    var data = react_1.useContext(postsContext_1.postsContext);\n    return (react_1.default.createElement(\"ul\", { className: CardsList_module_css_1.default.CardsList }, data.map(function (post) { return react_1.default.createElement(Card_1.default, { key: post.id, post: post }); })));\n};\nexports.default = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/Content/Content.module.css":
/*!***********************************************!*\
  !*** ./src/shared/Content/Content.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Content\": \"Content-module__Content--3B79w\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.module.css?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Content_module_css_1 = __importDefault(__webpack_require__(/*! ./Content.module.css */ \"./src/shared/Content/Content.module.css\"));\nvar Content = function (_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: Content_module_css_1.default.Content }, children));\n};\nexports.default = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.module.css":
/*!*************************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Dropdown\": \"Dropdown-module__Dropdown--Z9wI-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.module.css?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Dropdown_module_css_1 = __importDefault(__webpack_require__(/*! ./Dropdown.module.css */ \"./src/shared/Dropdown/Dropdown.module.css\"));\nvar noop = function () {\n};\nvar Dropdown = function (_a) {\n    var button = _a.button, children = _a.children, _b = _a.onOpen, onOpen = _b === void 0 ? noop : _b, isOpen = _a.isOpen, _c = _a.onClose, onClose = _c === void 0 ? noop : _c;\n    var _d = react_1.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\n    react_1.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\n    react_1.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\n    var handleOpen = function () {\n        if (isOpen === undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n    };\n    return (react_1.default.createElement(\"div\", { className: Dropdown_module_css_1.default.Dropdown },\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: Dropdown_module_css_1.default.listContainer },\n            react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(false); }, className: Dropdown_module_css_1.default.list }, children)))));\n};\nexports.default = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar header_module_css_1 = __importDefault(__webpack_require__(/*! ./header.module.css */ \"./src/shared/Header/header.module.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar ThreadTitle_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"));\nvar SortBlock_1 = __importDefault(__webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"));\nvar Mails_1 = __importDefault(__webpack_require__(/*! ./Mails/Mails */ \"./src/shared/Header/Mails/Mails.tsx\"));\nvar PersonalAccount_1 = __importDefault(__webpack_require__(/*! ./PersonalAccount/PersonalAccount */ \"./src/shared/Header/PersonalAccount/PersonalAccount.tsx\"));\nfunction HeaderComponent() {\n    return (React.createElement(\"header\", { className: header_module_css_1.default.header },\n        React.createElement(\"div\", { className: header_module_css_1.default.headerLeft },\n            React.createElement(ThreadTitle_1.default, null),\n            React.createElement(SortBlock_1.default, null)),\n        React.createElement(\"div\", { className: header_module_css_1.default.headerRight },\n            React.createElement(Mails_1.default, null),\n            React.createElement(SearchBlock_1.SearchBlock, null),\n            React.createElement(PersonalAccount_1.default, null))));\n}\nexports.Header = root_1.hot(HeaderComponent);\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/Mails/Mails.module.css":
/*!**************************************************!*\
  !*** ./src/shared/Header/Mails/Mails.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Mails\": \"Mails-module__Mails--aX7Ey\",\n\t\"count\": \"Mails-module__count--1GP12\",\n\t\"button\": \"Mails-module__button--Q0fhn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/Mails/Mails.module.css?");

/***/ }),

/***/ "./src/shared/Header/Mails/Mails.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Header/Mails/Mails.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Mails_module_css_1 = __importDefault(__webpack_require__(/*! ./Mails.module.css */ \"./src/shared/Header/Mails/Mails.module.css\"));\nvar Mails = function () { return (react_1.default.createElement(\"div\", { className: Mails_module_css_1.default.Mails },\n    react_1.default.createElement(\"div\", { className: Mails_module_css_1.default.count }, \"4\"),\n    react_1.default.createElement(\"button\", { className: Mails_module_css_1.default.button },\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"16\", viewBox: \"0 0 20 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z\", fill: \"#D9D9D9\" }))))); };\nexports.default = Mails;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Mails/Mails.tsx?");

/***/ }),

/***/ "./src/shared/Header/PersonalAccount/PersonalAccount.module.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Header/PersonalAccount/PersonalAccount.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"PersonalAccount\": \"PersonalAccount-module__PersonalAccount--uYElq\",\n\t\"username\": \"PersonalAccount-module__username--2gzug\",\n\t\"userpick\": \"PersonalAccount-module__userpick--3uuzI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/PersonalAccount/PersonalAccount.module.css?");

/***/ }),

/***/ "./src/shared/Header/PersonalAccount/PersonalAccount.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/PersonalAccount/PersonalAccount.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar PersonalAccount_module_css_1 = __importDefault(__webpack_require__(/*! ./PersonalAccount.module.css */ \"./src/shared/Header/PersonalAccount/PersonalAccount.module.css\"));\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\nvar PersonalAccount = function () {\n    var data = react_1.useContext(userContext_1.userContext);\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\" + 'GdMVQapO1hwWBTYtgyOwUw' + \"&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: PersonalAccount_module_css_1.default.PersonalAccount },\n        react_1.default.createElement(\"div\", { className: PersonalAccount_module_css_1.default.userpick }, data.iconImg ? react_1.default.createElement(\"img\", { src: data.iconImg, alt: 'avatar' }) : react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" }))),\n        react_1.default.createElement(\"span\", { className: PersonalAccount_module_css_1.default.username }, data.name || 'Aноним')));\n};\nexports.default = PersonalAccount;\n\n\n//# sourceURL=webpack:///./src/shared/Header/PersonalAccount/PersonalAccount.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.module.css":
/*!**************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"SearchBlock\": \"SearchBlock-module__SearchBlock--1jPxw\",\n\t\"input\": \"SearchBlock-module__input--1S2-i\",\n\t\"form\": \"SearchBlock-module__form--1ASbL\",\n\t\"button\": \"SearchBlock-module__button--257Br\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.module.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar SearchBlock_module_css_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.module.css */ \"./src/shared/Header/SearchBlock/SearchBlock.module.css\"));\nvar SearchBlock = function () {\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_module_css_1.default.SearchBlock },\n        react_1.default.createElement(\"form\", { className: SearchBlock_module_css_1.default.form },\n            react_1.default.createElement(\"input\", { className: SearchBlock_module_css_1.default.input, type: \"text\", placeholder: \"\\u041F\\u043E\\u0438\\u0441\\u043A\" }),\n            react_1.default.createElement(\"button\", { type: \"submit\", className: SearchBlock_module_css_1.default.button },\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z\", fill: \"#C4C4C4\" }))))));\n};\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.module.css":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"SortBlock\": \"SortBlock-module__SortBlock--2kHqH\",\n\t\"title\": \"SortBlock-module__title--1xFtA\",\n\t\"arrow\": \"SortBlock-module__arrow--12QLR\",\n\t\"rocketIcon\": \"SortBlock-module__rocketIcon--1ddDm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.module.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar SortBlock_module_css_1 = __importDefault(__webpack_require__(/*! ./SortBlock.module.css */ \"./src/shared/Header/SortBlock/SortBlock.module.css\"));\nvar SortBlock = function () { return (react_1.default.createElement(\"div\", { className: SortBlock_module_css_1.default.SortBlock },\n    react_1.default.createElement(\"svg\", { className: SortBlock_module_css_1.default.rocketIcon, width: \"14\", height: \"16\", viewBox: \"0 0 14 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M14 16L10.6225 14.76C11.235 13.536 11.6725 12.272 11.9437 10.984L14 16ZM3.3775 14.76L0 16L2.05625 10.984C2.3275 12.272 2.765 13.536 3.3775 14.76ZM7 0C7 0 11.375 1.6 11.375 8C11.375 10.48 10.7188 12.6 9.91375 14.264C9.625 14.84 9.00375 15.2 8.3125 15.2H5.6875C4.99625 15.2 4.375 14.84 4.08625 14.264C3.29 12.6 2.625 10.48 2.625 8C2.625 1.6 7 0 7 0ZM7 8C7.9625 8 8.75 7.28 8.75 6.4C8.75 5.52 7.9625 4.8 7 4.8C6.0375 4.8 5.25 5.52 5.25 6.4C5.25 7.28 6.0375 8 7 8Z\", fill: \"#CC6633\" })),\n    react_1.default.createElement(\"span\", { className: SortBlock_module_css_1.default.title }, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\"),\n    react_1.default.createElement(\"svg\", { className: SortBlock_module_css_1.default.arrow, width: \"14\", height: \"8\", viewBox: \"0 0 14 8\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M7 8L-3.16551e-07 0.712163L0.757932 2.72853e-07L7 6.49874L13.2421 1.36425e-06L14 0.712164L7 8Z\", fill: \"#CC6633\" })))); };\nexports.default = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.module.css":
/*!**************************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ThreadTitle\": \"ThreadTitle-module__ThreadTitle--EE8PT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.module.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar ThreadTitle_module_css_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle.module.css */ \"./src/shared/Header/ThreadTitle/ThreadTitle.module.css\"));\nvar ThreadTitle = function () { return (react_1.default.createElement(\"div\", { className: ThreadTitle_module_css_1.default.ThreadTitle }, \"\\u0414\\u0438\\u0441\\u043A\\u0443\\u0441\\u0441\\u0438\\u0438\")); };\nexports.default = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.module.css":
/*!*********************************************!*\
  !*** ./src/shared/Header/header.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header-module__header--2Ruz5\",\n\t\"headerLeft\": \"header-module__headerLeft--dSeM1\",\n\t\"headerRight\": \"header-module__headerRight--1hDX_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.module.css?");

/***/ }),

/***/ "./src/shared/Layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./src/shared/Layout/Layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"Layout-module__wrapper--2R3qz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.module.css?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Layout_module_css_1 = __importDefault(__webpack_require__(/*! ./Layout.module.css */ \"./src/shared/Layout/Layout.module.css\"));\nvar Layout = function (_a) {\n    var children = _a.children;\n    return react_1.default.createElement(\"div\", { className: Layout_module_css_1.default.wrapper }, children);\n};\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostsContextProvider = exports.postsContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\n// export interface IUserContextData {\n//   name?: string\n//   iconImg?: string\n// }\nexports.postsContext = react_1.default.createContext([]);\nfunction PostsContextProvider(_a) {\n    var children = _a.children;\n    var data = usePostsData_1.usePostsData()[0];\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));\n}\nexports.PostsContextProvider = PostsContextProvider;\n//to-do - add typing\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.tokenContext = react_1.default.createContext('');\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserContextProvider = exports.userContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\nexports.userContext = react_1.default.createContext({});\nfunction UserContextProvider(_a) {\n    var children = _a.children;\n    var data = useUserData_1.useUserData()[0];\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\n}\nexports.UserContextProvider = UserContextProvider;\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\nfunction assoc(key, value) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\n    };\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/generateRandomIndex.ts":
/*!*********************************************!*\
  !*** ./src/utils/js/generateRandomIndex.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateId = exports.generateRandomString = void 0;\nvar assoc_1 = __webpack_require__(/*! ./assoc */ \"./src/utils/js/assoc.ts\");\nvar generateRandomString = function () {\n    return Math.random().toString(36).substring(2, 15);\n};\nexports.generateRandomString = generateRandomString;\nvar generateId = function (obj) {\n    return assoc_1.assoc(\"id\", exports.generateRandomString())(obj);\n};\nexports.generateId = generateId;\n\n\n//# sourceURL=webpack:///./src/utils/js/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });