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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = __webpack_require__(10);
// Use throughout your app instead of plain `useDispatch` and `useSelector`
var useAppDispatch = function () { return react_redux_1.useDispatch(); };
exports.useAppDispatch = useAppDispatch;
exports.useAppSelector = react_redux_1.useSelector;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsApi = exports.userApi = exports.instance = void 0;
var axios_1 = __importDefault(__webpack_require__(12));
exports.instance = axios_1.default.create({
    baseURL: "https://oauth.reddit.com/",
});
exports.userApi = {
    authMe: function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.instance.get('api/v1/me', {
                            headers: { Authorization: "bearer " + token }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    },
};
exports.postsApi = {
    getComments: function (token, postId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.instance.get("comments/" + postId + ".json?limit=25", {
                            headers: { Authorization: "bearer " + token }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    },
    getBestPosts: function (token, after) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.instance.get('best.json?sr_detail=true', {
                            headers: { Authorization: "bearer " + token },
                            params: { limit: 10, after: after }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAfter = exports.setErrorMessage = exports.postsIsFetching = exports.setPosts = exports.savePostsData = exports.postsSlice = void 0;
var toolkit_1 = __webpack_require__(2);
var api_1 = __webpack_require__(4);
var initialState = {
    posts: [],
    isFetching: false,
    errorLoading: null,
    after: null
};
exports.postsSlice = toolkit_1.createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        setPosts: function (state, action) {
            var _a;
            state.posts = (_a = state.posts).concat.apply(_a, action.payload);
        },
        postsIsFetching: function (state, action) {
            state.isFetching = action.payload;
        },
        setErrorMessage: function (state, action) {
            state.errorLoading = action.payload;
        },
        setAfter: function (state, action) {
            state.after = action.payload;
        },
    }
});
var savePostsData = function () { return function (dispatch, getState) {
    var token = getState().tokenSlice.token;
    var after = getState().postsSlice.after;
    if (!token || token == 'undefined')
        return;
    dispatch(exports.postsIsFetching(true));
    api_1.postsApi.getBestPosts(token, after).then(function (res) {
        var newPosts = res.data.children.map(function (post) {
            var imgUrl = post.data.url.slice(post.data.url.length - 3, post.data.url.length);
            var isImage = imgUrl == 'jpg' || imgUrl == 'png';
            return {
                title: post.data.title,
                author: post.data.author,
                photoUrl: isImage ? post.data.url : undefined,
                id: post.data.id,
                ups: post.data.ups,
                created: post.data.created * 1000,
                comments: post.data.num_comments,
                icon_img: post.data.sr_detail.icon_img
            };
        });
        dispatch(exports.setPosts(newPosts));
        dispatch(exports.setAfter(res.data.after));
        dispatch(exports.postsIsFetching(false));
    }).catch(function (error) {
        dispatch(exports.postsIsFetching(false));
        dispatch(exports.setErrorMessage(error.toString()));
    });
}; };
exports.savePostsData = savePostsData;
exports.setPosts = (_a = exports.postsSlice.actions, _a.setPosts), exports.postsIsFetching = _a.postsIsFetching, exports.setErrorMessage = _a.setErrorMessage, exports.setAfter = _a.setAfter;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Likes_module_css_1 = __importDefault(__webpack_require__(42));
var Likes = function (_a) {
    var ups = _a.ups, inCard = _a.inCard;
    return (react_1.default.createElement("div", { className: inCard ? Likes_module_css_1.default.Likes + " " + Likes_module_css_1.default.LikesInCard : Likes_module_css_1.default.Likes },
        react_1.default.createElement("button", null,
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" }))),
        ups ? react_1.default.createElement("span", { className: inCard ? Likes_module_css_1.default.count + " " + Likes_module_css_1.default.countInCard : Likes_module_css_1.default.count }, ups) : react_1.default.createElement("span", { className: Likes_module_css_1.default.space }, " "),
        react_1.default.createElement("button", { className: Likes_module_css_1.default.buttonDown },
            react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })))));
};
exports.default = Likes;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var CardMetaData_module_css_1 = __importDefault(__webpack_require__(47));
function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
var CardMetaData = function (_a) {
    var name = _a.name, created = _a.created, iconImg = _a.iconImg, inModal = _a.inModal;
    var date = new Date();
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    var createdAgo = Math.round((now_utc - created) / 3600000);
    return (react_1.default.createElement("div", { className: inModal ? CardMetaData_module_css_1.default.CardMetaData + " " + CardMetaData_module_css_1.default.inModal : CardMetaData_module_css_1.default.CardMetaData },
        react_1.default.createElement("span", { className: CardMetaData_module_css_1.default.publishedAt },
            react_1.default.createElement("span", null, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E"), " " + createdAgo + " " + declOfNum(createdAgo, ['час', 'часа', 'часов']) + " \u043D\u0430\u0437\u0430\u0434"),
        react_1.default.createElement("div", { className: CardMetaData_module_css_1.default.userLink },
            iconImg ? react_1.default.createElement("img", { src: iconImg, alt: 'avatar' }) : react_1.default.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/147/147144.png", alt: "avatar" }),
            react_1.default.createElement("a", { href: "https://www.reddit.com/user/" + name + "/" }, name))));
};
exports.default = CardMetaData;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosePost = exports.WarningIcon = exports.ShareIcon = exports.CommentIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var CommentIcon = function () { return (react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M12.75 0.416504H1.41667C0.6375 0.416504 0 1.054 0 1.83317V10.3332C0 11.1123 0.6375 11.7498 1.41667 11.7498H11.3333L14.1667 14.5832V1.83317C14.1667 1.054 13.5292 0.416504 12.75 0.416504ZM11.3333 8.9165H2.83333V7.49984H11.3333V8.9165ZM11.3333 6.7915H2.83333V5.37484H11.3333V6.7915ZM11.3333 4.6665H2.83333V3.24984H11.3333V4.6665Z", fill: "#999999" }))); };
exports.CommentIcon = CommentIcon;
var ShareIcon = function () { return (react_1.default.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" }))); };
exports.ShareIcon = ShareIcon;
var WarningIcon = function () { return (react_1.default.createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1.default.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" }))); };
exports.WarningIcon = WarningIcon;
var ClosePost = function () { return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 20 20" },
    react_1.default.createElement("path", { d: "M12,11.2928932 L16.1464466,7.14644661 C16.3417088,6.95118446 16.6582912,6.95118446 16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 L12.7071068,12 L16.8535534,16.1464466 C17.0488155,16.3417088 17.0488155,16.6582912 16.8535534,16.8535534 C16.6582912,17.0488155 16.3417088,17.0488155 16.1464466,16.8535534 L12,12.7071068 L7.85355339,16.8535534 C7.65829124,17.0488155 7.34170876,17.0488155 7.14644661,16.8535534 C6.95118446,16.6582912 6.95118446,16.3417088 7.14644661,16.1464466 L11.2928932,12 L7.14644661,7.85355339 C6.95118446,7.65829124 6.95118446,7.34170876 7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 L12,11.2928932 Z", fill: "#999999" }))); };
exports.ClosePost = ClosePost;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.setIsAuthorize = exports.setErrorMessage = exports.setIsFetching = exports.setMyData = exports.meSlice = void 0;
var toolkit_1 = __webpack_require__(2);
var api_1 = __webpack_require__(4);
var initialState = {
    data: {
        name: '',
        iconImg: '',
    },
    isAuthorize: false,
    isFetching: false,
    errorMessage: ''
};
exports.meSlice = toolkit_1.createSlice({
    name: 'me',
    initialState: initialState,
    reducers: {
        setMyData: function (state, action) {
            state.data = action.payload;
        },
        setIsAuthorize: function (state) {
            state.isAuthorize = true;
        },
        setIsFetching: function (state, action) {
            state.isFetching = action.payload;
        },
        setErrorMessage: function (state, action) {
            state.errorMessage = action.payload;
        },
    }
});
exports.setMyData = (_a = exports.meSlice.actions, _a.setMyData), exports.setIsFetching = _a.setIsFetching, exports.setErrorMessage = _a.setErrorMessage, exports.setIsAuthorize = _a.setIsAuthorize;
var meRequestAsync = function (token) { return function (dispatch) {
    dispatch(exports.setIsFetching(true));
    api_1.userApi.authMe(token).then(function (res) {
        var iconImgWithoutParams = res.icon_img.split('?');
        var userData = { name: res.name, iconImg: iconImgWithoutParams[0] };
        dispatch(exports.setMyData(userData));
        dispatch(exports.setIsFetching(false));
        dispatch(exports.setIsAuthorize());
    }).catch(function (error) {
        dispatch(exports.setIsFetching(false));
        dispatch(exports.setErrorMessage(error));
        console.log(error);
    });
}; };
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.setToken = exports.tokenSlice = void 0;
var toolkit_1 = __webpack_require__(2);
var initialState = {
    token: ''
};
exports.tokenSlice = toolkit_1.createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {
        setToken: function (state, action) {
            state.token = action.payload;
        }
    }
});
exports.setToken = exports.tokenSlice.actions.setToken;
var saveToken = function () { return function (dispatch) {
    var token = window.__token__ == 'undefined' ? localStorage.getItem('token') : window.__token__;
    if (token != 'undefined' && token != null) {
        dispatch(exports.setToken(token));
        localStorage.setItem('token', token);
    }
}; };
exports.saveToken = saveToken;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComment = exports.commentSlice = void 0;
var toolkit_1 = __webpack_require__(2);
var initialState = {
    commentText: ''
};
exports.commentSlice = toolkit_1.createSlice({
    name: 'comment',
    initialState: initialState,
    reducers: {
        updateComment: function (state, action) {
            state.commentText = action.payload;
        }
    }
});
exports.updateComment = exports.commentSlice.actions.updateComment;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(17));
var server_1 = __importDefault(__webpack_require__(18));
var App_1 = __webpack_require__(19);
var indexTemplate_1 = __webpack_require__(76);
var axios_1 = __importDefault(__webpack_require__(12));
var PORT = process.env.PORT || 3000;
var app = express_1.default();
var IS_DEV = "production" === "development";
var URI = IS_DEV ? 'http://localhost:3000/auth' : 'https://my-own-reddit.herokuapp.com/auth';
app.use("/static", express_1.default.static("./dist/client"));
app.get("/auth", function (req, res) {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=" + URI, {
        auth: { username: 'undefined', password: process.env.SECRET },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }).then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    }).catch(console.log);
});
app.get("*", function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(PORT, function () {
    console.log("server started on http://localhost:" + PORT);
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(20);
var root_1 = __webpack_require__(9);
var Header_1 = __webpack_require__(22);
var Layout_1 = __webpack_require__(33);
var Content_1 = __importDefault(__webpack_require__(35));
var CardsList_1 = __importDefault(__webpack_require__(37));
var react_redux_1 = __webpack_require__(10);
var store_1 = __importDefault(__webpack_require__(59));
var react_router_dom_1 = __webpack_require__(3);
var Post_1 = __importDefault(__webpack_require__(61));
var react_router_dom_2 = __webpack_require__(3);
var AppComponent = function () {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.default, null,
                react_1.default.createElement(react_router_dom_2.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/posts', element: react_1.default.createElement(CardsList_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id', element: react_1.default.createElement(Post_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(react_router_dom_2.Navigate, { to: "/posts", replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/auth", element: react_1.default.createElement(react_router_dom_2.Navigate, { to: "/posts", replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430!") }))))))));
};
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap);"]);
// Module
exports.push([module.i, ":root {\n    --black: #333;\n    --orange: #c0581d;\n    --green: #A4CC33;\n    --whiteLightness: 100%;\n    --white: hsl(0, 0%, var(--whiteLightness));\n    --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\n    --grayF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\n    --grayD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\n    --grayC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\n    --gray99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n    --gray66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n    --grayEC: #ECECEC;\n\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: var(--grayF4);\n    font-size: 14px;\n    line-height: 16px;\n    font-family: 'Roboto', serif;\n}\n\n* {\n    color: var(--black);\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\nbutton {\n    padding: 0;\n    border: none;\n    cursor: pointer;\n    background-color: transparent;\n}\n\nh1, h2, h3 {\n    margin: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var root_1 = __webpack_require__(9);
var React = __importStar(__webpack_require__(0));
var header_module_css_1 = __importDefault(__webpack_require__(23));
var SearchBlock_1 = __webpack_require__(24);
var ThreadTitle_1 = __importDefault(__webpack_require__(26));
var Mails_1 = __importDefault(__webpack_require__(28));
var PersonalAccount_1 = __importDefault(__webpack_require__(30));
var HeaderComponent = function () {
    return (React.createElement("header", { className: header_module_css_1.default.header },
        React.createElement("div", { className: header_module_css_1.default.headerLeft },
            React.createElement(ThreadTitle_1.default, null)),
        React.createElement("div", { className: header_module_css_1.default.headerRight },
            React.createElement(Mails_1.default, null),
            React.createElement(SearchBlock_1.SearchBlock, null),
            React.createElement(PersonalAccount_1.default, null))));
};
exports.Header = root_1.hot(HeaderComponent);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header-module__header--2Ruz5",
	"headerLeft": "header-module__headerLeft--dSeM1",
	"headerRight": "header-module__headerRight--1hDX_"
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var SearchBlock_module_css_1 = __importDefault(__webpack_require__(25));
var SearchBlock = function () {
    return (react_1.default.createElement("div", { className: SearchBlock_module_css_1.default.SearchBlock },
        react_1.default.createElement("form", { className: SearchBlock_module_css_1.default.form },
            react_1.default.createElement("input", { className: SearchBlock_module_css_1.default.input, type: "text", placeholder: "\u041F\u043E\u0438\u0441\u043A" }),
            react_1.default.createElement("button", { type: "submit", className: SearchBlock_module_css_1.default.button },
                react_1.default.createElement("svg", { width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z", fill: "#C4C4C4" }))))));
};
exports.SearchBlock = SearchBlock;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"SearchBlock": "SearchBlock-module__SearchBlock--1jPxw",
	"input": "SearchBlock-module__input--1S2-i",
	"form": "SearchBlock-module__form--1ASbL",
	"button": "SearchBlock-module__button--257Br"
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var ThreadTitle_module_css_1 = __importDefault(__webpack_require__(27));
var ThreadTitle = function () { return (react_1.default.createElement("div", { className: ThreadTitle_module_css_1.default.ThreadTitle }, "\u0414\u0438\u0441\u043A\u0443\u0441\u0441\u0438\u0438")); };
exports.default = ThreadTitle;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ThreadTitle": "ThreadTitle-module__ThreadTitle--EE8PT"
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Mails_module_css_1 = __importDefault(__webpack_require__(29));
var Mails = function () { return (react_1.default.createElement("div", { className: Mails_module_css_1.default.Mails },
    react_1.default.createElement("div", { className: Mails_module_css_1.default.count }, "4"),
    react_1.default.createElement("button", { className: Mails_module_css_1.default.button },
        react_1.default.createElement("svg", { width: "20", height: "16", viewBox: "0 0 20 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z", fill: "#D9D9D9" }))))); };
exports.default = Mails;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Mails": "Mails-module__Mails--aX7Ey",
	"count": "Mails-module__count--1GP12",
	"button": "Mails-module__button--Q0fhn"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var PersonalAccount_module_css_1 = __importDefault(__webpack_require__(31));
var useUserData_1 = __webpack_require__(32);
var URI =  false ? undefined : 'https://my-own-reddit.herokuapp.com/auth';
var PersonalAccount = function () {
    var _a = useUserData_1.useUserData(), data = _a.data, isFetching = _a.isFetching;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=" + 'undefined' + "&response_type=code&state=RANDOM_STRING&redirect_uri=" + URI + "&duration=permanent&scope=read submit identity", className: PersonalAccount_module_css_1.default.PersonalAccount },
        react_1.default.createElement("div", { className: PersonalAccount_module_css_1.default.userpick }, data.iconImg ? react_1.default.createElement("img", { src: data.iconImg, alt: 'avatar' }) : react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" }))),
        isFetching ? (react_1.default.createElement("span", { className: PersonalAccount_module_css_1.default.username }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement("span", { className: PersonalAccount_module_css_1.default.username }, data.name || 'Aноним'))));
};
exports.default = PersonalAccount;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"PersonalAccount": "PersonalAccount-module__PersonalAccount--uYElq",
	"username": "PersonalAccount-module__username--2gzug",
	"userpick": "PersonalAccount-module__userpick--3uuzI"
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var reduxHooks_1 = __webpack_require__(1);
var meSlice_1 = __webpack_require__(11);
var useUserData = function () {
    var data = reduxHooks_1.useAppSelector(function (state) { return state.meSlice.data; });
    var token = reduxHooks_1.useAppSelector(function (state) { return state.tokenSlice.token; });
    var isFetching = reduxHooks_1.useAppSelector(function (state) { return state.meSlice.isFetching; });
    var dispatch = reduxHooks_1.useAppDispatch();
    react_1.useEffect(function () {
        if (!token || token == '' || token == 'undefined')
            return;
        dispatch(meSlice_1.meRequestAsync(token));
    }, [token]);
    return { data: data, isFetching: isFetching };
};
exports.useUserData = useUserData;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importStar(__webpack_require__(0));
var Layout_module_css_1 = __importDefault(__webpack_require__(34));
var reduxHooks_1 = __webpack_require__(1);
var tokenSlice_1 = __webpack_require__(13);
var postsSlice_1 = __webpack_require__(5);
var Layout = function (_a) {
    var children = _a.children;
    var dispatch = reduxHooks_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(tokenSlice_1.saveToken());
        dispatch(postsSlice_1.savePostsData());
    }, []);
    return react_1.default.createElement("div", { className: Layout_module_css_1.default.wrapper }, children);
};
exports.Layout = Layout;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Layout-module__wrapper--2R3qz"
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Content_module_css_1 = __importDefault(__webpack_require__(36));
var Content = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: Content_module_css_1.default.Content }, children));
};
exports.default = Content;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Content": "Content-module__Content--3B79w"
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var Card_1 = __importDefault(__webpack_require__(38));
var CardsList_module_css_1 = __importDefault(__webpack_require__(56));
var reduxHooks_1 = __webpack_require__(1);
var postsSlice_1 = __webpack_require__(5);
var Login_1 = __importDefault(__webpack_require__(57));
var CardsList = function () {
    var isAuthorized = reduxHooks_1.useAppSelector(function (state) { return state.meSlice.isAuthorize; });
    var meIsFetching = reduxHooks_1.useAppSelector(function (state) { return state.meSlice.isFetching; });
    var isFetching = reduxHooks_1.useAppSelector(function (state) { return state.postsSlice.isFetching; });
    var errorLoading = reduxHooks_1.useAppSelector(function (state) { return state.postsSlice.errorLoading; });
    var posts = reduxHooks_1.useAppSelector(function (state) { return state.postsSlice.posts; });
    var bottomOfList = react_1.useRef(null);
    var dispatch = reduxHooks_1.useAppDispatch();
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var isThirdLoad = page % 3 === 0;
    var handleClick = function () {
        setPage(function (prevState) { return prevState + 1; });
    };
    var loadMore = function (isIntersecting) {
        if (isIntersecting && posts.length > 0 && !isThirdLoad && !isFetching) {
            dispatch(postsSlice_1.savePostsData());
            setPage(function (prevState) { return prevState + 1; });
        }
    };
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (entries) {
            loadMore(entries[0].isIntersecting);
        }, {
            rootMargin: '100px'
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, posts, page, isFetching]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        isAuthorized && react_1.default.createElement("ul", { className: CardsList_module_css_1.default.CardsList },
            errorLoading && react_1.default.createElement("div", { style: { textAlign: 'center' } }, errorLoading),
            !errorLoading && posts.map(function (post) { return react_1.default.createElement(Card_1.default, { key: post.id, post: post }); }),
            react_1.default.createElement("div", { ref: bottomOfList }),
            isThirdLoad && !isFetching && react_1.default.createElement("div", { className: CardsList_module_css_1.default.loadMoreWrapper },
                react_1.default.createElement("button", { onClick: handleClick, className: CardsList_module_css_1.default.loadMoreButton }, "Load More")),
            isFetching && react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        !isAuthorized && !meIsFetching && react_1.default.createElement(Login_1.default, null));
};
exports.default = CardsList;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var Card_module_css_1 = __importDefault(__webpack_require__(39));
var Controls_1 = __importDefault(__webpack_require__(40));
var Preview_1 = __importDefault(__webpack_require__(43));
var TextContent_1 = __importDefault(__webpack_require__(45));
var MenuButton_1 = __importDefault(__webpack_require__(48));
var Dropdown_1 = __importDefault(__webpack_require__(50));
var DropdownList_1 = __importDefault(__webpack_require__(52));
var Card = function (_a) {
    var post = _a.post;
    var _b = react_1.useState({ x: 0, y: 0 }), offset = _b[0], setOffset = _b[1];
    var setOffsetCallback = function (value) {
        setOffset(value);
    };
    var dropdownStyle = function () {
        if (window.screen.width <= 1100) {
            return {
                top: offset.y + "px",
                right: '10px'
            };
        }
        return {
            top: offset.y + "px",
            left: offset.x + "px"
        };
    };
    return (react_1.default.createElement("li", { className: Card_module_css_1.default.Card },
        react_1.default.createElement(Preview_1.default, { img: post.photoUrl }),
        react_1.default.createElement(TextContent_1.default, { postId: post.id, title: post.title, name: post.author, created: post.created, iconImg: post.icon_img }),
        react_1.default.createElement("div", { className: Card_module_css_1.default.cardOptions },
            react_1.default.createElement("div", { className: Card_module_css_1.default.dropdownMenuWrapper },
                react_1.default.createElement(Dropdown_1.default, { button: react_1.default.createElement(MenuButton_1.default, null), setOffsetCallback: setOffsetCallback },
                    react_1.default.createElement(DropdownList_1.default, { postId: 1234, style: dropdownStyle() }))),
            react_1.default.createElement(Controls_1.default, { ups: post.ups, comments: post.comments }))));
};
exports.default = Card;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Card": "Card-module__Card--14NKH",
	"cardOptions": "Card-module__cardOptions--1LADq",
	"dropdownMenuWrapper": "Card-module__dropdownMenuWrapper--3DjhU"
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Controls_module_css_1 = __importDefault(__webpack_require__(41));
var Likes_1 = __importDefault(__webpack_require__(6));
var Controls = function (_a) {
    var ups = _a.ups, comments = _a.comments;
    return (react_1.default.createElement("div", { className: Controls_module_css_1.default.Controls },
        react_1.default.createElement(Likes_1.default, { ups: ups, inCard: true }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { className: Controls_module_css_1.default.comments },
                react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
                react_1.default.createElement("span", null, comments))),
        react_1.default.createElement("div", { className: Controls_module_css_1.default.buttonsRight },
            react_1.default.createElement("button", { className: Controls_module_css_1.default.share },
                react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                    react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
            react_1.default.createElement("button", { className: Controls_module_css_1.default.addPost },
                react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                    react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))))));
};
exports.default = Controls;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comments": "Controls-module__comments--3ZK33",
	"share": "Controls-module__share--XNQWI",
	"addPost": "Controls-module__addPost--1Y4mz",
	"Controls": "Controls-module__Controls--3g0bH",
	"buttonsRight": "Controls-module__buttonsRight--NiE-2"
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Likes": "Likes-module__Likes--k0FB8",
	"buttonDown": "Likes-module__buttonDown--3QyUO",
	"count": "Likes-module__count--3npkJ",
	"space": "Likes-module__space--1pWjb",
	"LikesInCard": "Likes-module__LikesInCard--31i61",
	"countInCard": "Likes-module__countInCard--3yVlO"
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Preview_module_css_1 = __importDefault(__webpack_require__(44));
var Preview = function (_a) {
    var img = _a.img;
    return (react_1.default.createElement("div", { className: Preview_module_css_1.default.Preview },
        react_1.default.createElement("img", { src: img || 'https://srisovki.one/wp-content/uploads/2021/07/2dc87a4b6139f778befe1ee92a17ae6a.jpg', alt: "preview image" })));
};
exports.default = Preview;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Preview": "Preview-module__Preview--cqBqh"
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var TextContent_module_css_1 = __importDefault(__webpack_require__(46));
var CardMetaData_1 = __importDefault(__webpack_require__(7));
var react_router_dom_1 = __webpack_require__(3);
var TextContent = function (_a) {
    var postId = _a.postId, title = _a.title, name = _a.name, created = _a.created, iconImg = _a.iconImg;
    return (react_1.default.createElement("div", { className: TextContent_module_css_1.default.TextContent },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/" + postId, className: TextContent_module_css_1.default.title }, title),
        react_1.default.createElement(CardMetaData_1.default, { name: name, created: created, iconImg: iconImg })));
};
exports.default = TextContent;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"TextContent": "TextContent-module__TextContent--186pA",
	"title": "TextContent-module__title--TiHxz"
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CardMetaData": "CardMetaData-module__CardMetaData--3D7ql",
	"inModal": "CardMetaData-module__inModal--2LuEn",
	"userLink": "CardMetaData-module__userLink--ZZUxD",
	"publishedAt": "CardMetaData-module__publishedAt--3Y2Kv"
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var MenuButton_module_css_1 = __importDefault(__webpack_require__(49));
var MenuButton = function () { return (react_1.default.createElement("button", { className: MenuButton_module_css_1.default.menuButton },
    react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })))); };
exports.default = MenuButton;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuButton": "MenuButton-module__menuButton--2R3tD"
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var Dropdown_module_css_1 = __importDefault(__webpack_require__(51));
var Dropdown = function (_a) {
    var button = _a.button, children = _a.children, setOffsetCallback = _a.setOffsetCallback, isOpen = _a.isOpen;
    var _b = react_1.useState(isOpen), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var ref = react_1.useRef(null);
    var handleOpen = function (e) {
        var top = document.body.getBoundingClientRect().top;
        var _a = e.target.getBoundingClientRect(), x = _a.x, y = _a.y;
        setOffsetCallback({ x: x - 20, y: -top + y + 50 });
        setIsDropdownOpen(!isDropdownOpen);
    };
    react_1.useEffect(function () {
        var handleClose = function (e) {
            var _a;
            if (e.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)))
                setIsDropdownOpen(false);
        };
        document.addEventListener('click', handleClose);
        return function () {
            document.removeEventListener('click', handleClose);
        };
    }, []);
    return (react_1.default.createElement("div", { className: Dropdown_module_css_1.default.Dropdown, ref: ref },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: Dropdown_module_css_1.default.listContainer },
            react_1.default.createElement("div", { onClick: function () { return setIsDropdownOpen(false); }, className: Dropdown_module_css_1.default.list }, children)))));
};
exports.default = Dropdown;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Dropdown": "Dropdown-module__Dropdown--Z9wI-"
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var DropdownList_module_css_1 = __importDefault(__webpack_require__(53));
var generateRandomIndex_1 = __webpack_require__(54);
var react_dom_1 = __importDefault(__webpack_require__(14));
var icons_1 = __webpack_require__(8);
var LIST = [
    {
        icon: react_1.default.createElement(icons_1.CommentIcon, null),
        text: 'Комментарии',
    },
    {
        icon: react_1.default.createElement(icons_1.ShareIcon, null),
        text: 'Поделиться',
    },
    {
        icon: react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" })),
        text: 'Скрыть',
    },
    {
        icon: react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })),
        text: 'Сохранить',
    },
    {
        icon: react_1.default.createElement(icons_1.WarningIcon, null),
        text: 'Пожаловаться',
    }
].map(generateRandomIndex_1.generateId);
var DropdownList = function (_a) {
    var postId = _a.postId, style = _a.style;
    var list = react_1.useState(LIST)[0];
    var node = document.querySelector('#dropdownRoot');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: DropdownList_module_css_1.default.DropdownList, style: style },
            list.map(function (item) { return react_1.default.createElement(MenuDropdownItem, { postId: postId, icon: item.icon, key: item.id, text: item.text }); }),
            react_1.default.createElement("button", { className: DropdownList_module_css_1.default.menuCloseButton }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))), node);
};
var MenuDropdownItem = function (_a) {
    var text = _a.text, icon = _a.icon, postId = _a.postId;
    return (react_1.default.createElement("li", { className: DropdownList_module_css_1.default.menuItem, onClick: function () {
        } },
        react_1.default.createElement("div", { className: DropdownList_module_css_1.default.menuItemIcon }, icon),
        react_1.default.createElement("button", { className: DropdownList_module_css_1.default.menuItemText }, text)));
};
exports.default = DropdownList;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"DropdownList": "DropdownList-module__DropdownList--3mvtS",
	"menuItem": "DropdownList-module__menuItem--3gzT4",
	"menuItemText": "DropdownList-module__menuItemText--1pfB3",
	"menuItemIcon": "DropdownList-module__menuItemIcon--13cKR",
	"menuCloseButton": "DropdownList-module__menuCloseButton---i4lJ"
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.generateRandomString = void 0;
var assoc_1 = __webpack_require__(55);
var generateRandomString = function () {
    return Math.random().toString(36).substring(2, 15);
};
exports.generateRandomString = generateRandomString;
var generateId = function (obj) {
    return assoc_1.assoc("id", exports.generateRandomString())(obj);
};
exports.generateId = generateId;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    };
}
exports.assoc = assoc;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CardsList": "CardsList-module__CardsList--2-am5",
	"loadMoreWrapper": "CardsList-module__loadMoreWrapper--2fvLy",
	"loadMoreButton": "CardsList-module__loadMoreButton--3hu1F"
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Login_module_css_1 = __importDefault(__webpack_require__(58));
var URI =  false ? undefined : 'https://my-own-reddit.herokuapp.com/auth';
var Login = function () {
    return react_1.default.createElement("div", { className: Login_module_css_1.default.Login },
        react_1.default.createElement("div", { className: Login_module_css_1.default.text }, "\u0414\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u043F\u043E\u0441\u0442\u043E\u0432 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 reddit.com"),
        react_1.default.createElement("div", null,
            react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=" + 'undefined' + "&response_type=code&state=RANDOM_STRING&redirect_uri=" + URI + "&duration=permanent&scope=read submit identity", className: Login_module_css_1.default.link }, "\u0412\u043E\u0439\u0442\u0438")));
};
exports.default = Login;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Login": "Login-module__Login--17QFM",
	"text": "Login-module__text--3QJYV",
	"link": "Login-module__link--3PKWT"
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = __webpack_require__(2);
var commentSlice_1 = __webpack_require__(15);
var tokenSlice_1 = __webpack_require__(13);
var postsSlice_1 = __webpack_require__(5);
var redux_thunk_1 = __importDefault(__webpack_require__(60));
var meSlice_1 = __webpack_require__(11);
var store = toolkit_1.configureStore({
    reducer: {
        commentSlice: commentSlice_1.commentSlice.reducer,
        tokenSlice: tokenSlice_1.tokenSlice.reducer,
        postsSlice: postsSlice_1.postsSlice.reducer,
        meSlice: meSlice_1.meSlice.reducer
    },
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware().concat(redux_thunk_1.default); }
});
exports.default = store;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var Post_module_css_1 = __importDefault(__webpack_require__(62));
var react_dom_1 = __importDefault(__webpack_require__(14));
var CardMetaData_1 = __importDefault(__webpack_require__(7));
var Likes_1 = __importDefault(__webpack_require__(6));
var CommentsList_1 = __importDefault(__webpack_require__(63));
var CommentFormContainer_1 = __importDefault(__webpack_require__(71));
var react_router_dom_1 = __webpack_require__(3);
var usePostData_1 = __webpack_require__(75);
var icons_1 = __webpack_require__(8);
var Post = function () {
    var node = document.querySelector('#modalRoot');
    if (!node)
        return null;
    var ref = react_1.useRef(null);
    var navigate = react_router_dom_1.useNavigate();
    var location = react_router_dom_1.useLocation();
    var postId = location.pathname.split('/').reverse()[0];
    var _a = usePostData_1.usePostData(postId), comments = _a.comments, postData = _a.postData;
    react_1.useEffect(function () {
        var handleClick = function (event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)))
                navigate('/');
        };
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: Post_module_css_1.default.Post },
        !postData && react_1.default.createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),
        postData && (react_1.default.createElement("div", { className: Post_module_css_1.default.PostContent, ref: ref },
            react_1.default.createElement("div", { className: Post_module_css_1.default.PostHeader },
                react_1.default.createElement("div", { className: Post_module_css_1.default.postHeaderWrapper },
                    react_1.default.createElement(Likes_1.default, { ups: postData.ups }),
                    react_1.default.createElement("div", { className: Post_module_css_1.default.PostHeaderRight },
                        react_1.default.createElement("h2", { className: Post_module_css_1.default.modalTitle }, postData.title),
                        react_1.default.createElement(CardMetaData_1.default, { name: postData.author, created: postData.created, iconImg: postData.icon_img }))),
                react_1.default.createElement("button", { onClick: function () { return navigate('/'); }, className: Post_module_css_1.default.closeBtn },
                    react_1.default.createElement(icons_1.ClosePost, null))),
            postData.photoUrl && react_1.default.createElement("img", { src: postData.photoUrl, alt: 'post photo', className: Post_module_css_1.default.PostImg }),
            react_1.default.createElement(CommentFormContainer_1.default, { name: postData.author }),
            react_1.default.createElement(CommentsList_1.default, { comments: comments }))))), node);
};
exports.default = Post;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Post": "Post-module__Post--2YpaA",
	"PostContent": "Post-module__PostContent--1rVNz",
	"modalTitle": "Post-module__modalTitle--2S6NR",
	"postHeaderWrapper": "Post-module__postHeaderWrapper--dTeSw",
	"PostHeader": "Post-module__PostHeader--IRmOH",
	"PostHeaderRight": "Post-module__PostHeaderRight--2xTc-",
	"PostImg": "Post-module__PostImg--2K8YY",
	"closeBtn": "Post-module__closeBtn--2CHCZ"
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Comment_1 = __importDefault(__webpack_require__(64));
var CommentsList_module_css_1 = __importDefault(__webpack_require__(70));
var renderCommentTee = function (commentData) {
    if (commentData.body) {
        return react_1.default.createElement(Comment_1.default, { key: commentData.id, text: commentData.body, author: commentData.author, created: commentData.created * 1000 }, commentData.replies && commentData.replies.data.children.length > 0 &&
            react_1.default.createElement(CommentsList, { comments: commentData.replies.data.children }));
    }
    return null;
};
var CommentsList = function (_a) {
    var comments = _a.comments;
    return (react_1.default.createElement("ul", { className: CommentsList_module_css_1.default.CommentsList }, comments.map(function (item) {
        return renderCommentTee(item.data);
    })));
};
exports.default = CommentsList;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var Comment_module_css_1 = __importDefault(__webpack_require__(65));
var Likes_1 = __importDefault(__webpack_require__(6));
var CardMetaData_1 = __importDefault(__webpack_require__(7));
var CommentControls_1 = __importDefault(__webpack_require__(66));
var Comment = function (_a) {
    var children = _a.children, author = _a.author, text = _a.text, created = _a.created;
    return (react_1.default.createElement("li", { className: Comment_module_css_1.default.Comment },
        react_1.default.createElement("div", { style: { height: '35px', width: '100%' } }, " "),
        react_1.default.createElement("div", { className: Comment_module_css_1.default.wrapper },
            react_1.default.createElement("div", { className: Comment_module_css_1.default.controls },
                react_1.default.createElement(Likes_1.default, null),
                react_1.default.createElement("div", { className: Comment_module_css_1.default.line }, " ")),
            react_1.default.createElement("div", { className: Comment_module_css_1.default.textContent },
                react_1.default.createElement(CardMetaData_1.default, { name: author, created: created, inModal: true }),
                react_1.default.createElement("p", { className: Comment_module_css_1.default.commentText }, text),
                react_1.default.createElement(CommentControls_1.default, { author: author }),
                children))));
};
exports.default = Comment;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Comment-module__wrapper--3Fsxn",
	"textContent": "Comment-module__textContent--221ct",
	"controls": "Comment-module__controls--2VFtx",
	"line": "Comment-module__line--1g2gz",
	"commentText": "Comment-module__commentText--2m2y1",
	"Comment": "Comment-module__Comment--8m0LU"
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var CommentControls_module_css_1 = __importDefault(__webpack_require__(67));
var icons_1 = __webpack_require__(8);
var ReplyForm_1 = __importDefault(__webpack_require__(68));
var CommentControls = function (_a) {
    var author = _a.author;
    var _b = react_1.useState(false), isReplyFormOpened = _b[0], setIsReplyFormOpened = _b[1];
    var handleClick = function () {
        setIsReplyFormOpened(!isReplyFormOpened);
    };
    return (react_1.default.createElement("div", { className: CommentControls_module_css_1.default.wrapper },
        react_1.default.createElement("div", { className: CommentControls_module_css_1.default.CommentControls },
            react_1.default.createElement("button", { onClick: handleClick },
                react_1.default.createElement(icons_1.CommentIcon, null),
                react_1.default.createElement("span", { className: CommentControls_module_css_1.default.controlsText }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")),
            react_1.default.createElement("button", null,
                react_1.default.createElement(icons_1.ShareIcon, null),
                react_1.default.createElement("span", { className: CommentControls_module_css_1.default.controlsText }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"))),
        isReplyFormOpened && react_1.default.createElement(ReplyForm_1.default, { author: author })));
};
exports.default = CommentControls;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CommentControls": "CommentControls-module__CommentControls--15E4m",
	"controlsText": "CommentControls-module__controlsText--2vlHj"
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var ReplyForm_module_css_1 = __importDefault(__webpack_require__(69));
var ReplyForm = function (_a) {
    var author = _a.author;
    var name = author + ", ";
    var _b = react_1.useState(name), value = _b[0], setValue = _b[1];
    var ref = react_1.useRef(null);
    var handleChange = function (e) {
        setValue(e.target.value);
    };
    react_1.useEffect(function () {
        if (ref.current) {
            ref.current.focus();
            ref.current.value = '';
            ref.current.value = value;
        }
    }, []);
    return (react_1.default.createElement("div", { className: ReplyForm_module_css_1.default.ReplyForm },
        react_1.default.createElement("textarea", { value: value, className: ReplyForm_module_css_1.default.textarea, onChange: handleChange, ref: ref }),
        react_1.default.createElement("button", { className: ReplyForm_module_css_1.default.replyButton }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")));
};
exports.default = ReplyForm;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ReplyForm": "ReplyForm-module__ReplyForm--zmuSd",
	"textarea": "ReplyForm-module__textarea--1ND3E",
	"replyButton": "ReplyForm-module__replyButton--L0ONv"
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CommentsList": "CommentsList-module__CommentsList--2BRqC"
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var reduxHooks_1 = __webpack_require__(1);
var CommentForm_1 = __importDefault(__webpack_require__(72));
var commentSlice_1 = __webpack_require__(15);
var CommentFormContainer = function (_a) {
    var name = _a.name;
    var value = reduxHooks_1.useAppSelector(function (state) { return state.commentSlice.commentText; });
    var dispatch = reduxHooks_1.useAppDispatch();
    var handleSubmit = function (data) {
        dispatch(commentSlice_1.updateComment(data.comment));
    };
    return react_1.default.createElement(CommentForm_1.default, { name: name, value: value, setComment: handleSubmit });
};
exports.default = CommentFormContainer;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var CommentForm_module_css_1 = __importDefault(__webpack_require__(73));
var react_hook_form_1 = __webpack_require__(74);
var CommentForm = function (_a) {
    var name = _a.name, value = _a.value, setComment = _a.setComment;
    var _b = react_1.useState(true), isLabelVisible = _b[0], setIsLabelVisible = _b[1];
    var _c = react_hook_form_1.useForm(), register = _c.register, handleSubmit = _c.handleSubmit, getValues = _c.getValues, errors = _c.formState.errors;
    var onSubmit = function (data) { return setComment(data); };
    var handleBlur = function () {
        getValues('comment') != '' ? setIsLabelVisible(false) : setIsLabelVisible(true);
    };
    return (react_1.default.createElement("form", { id: 'commentForm', className: CommentForm_module_css_1.default.CommentForm, onSubmit: handleSubmit(onSubmit) },
        react_1.default.createElement("textarea", __assign({ defaultValue: value, className: CommentForm_module_css_1.default.CommentTextarea }, register("comment", { required: true }), { onBlur: handleBlur })),
        isLabelVisible && react_1.default.createElement("label", { htmlFor: 'commentForm' },
            react_1.default.createElement("span", null, name),
            ", \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),
        react_1.default.createElement("div", { className: CommentForm_module_css_1.default.CommentOptions },
            errors.comment && react_1.default.createElement("span", { className: CommentForm_module_css_1.default.error }, "\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),
            react_1.default.createElement("button", { className: CommentForm_module_css_1.default.commentButton, type: 'submit' }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
};
exports.default = CommentForm;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CommentForm": "CommentForm-module__CommentForm--1YkBl",
	"CommentTextarea": "CommentForm-module__CommentTextarea--3IwjO",
	"error": "CommentForm-module__error--1HyzS",
	"commentButton": "CommentForm-module__commentButton--3MoKh",
	"CommentOptions": "CommentForm-module__CommentOptions--TggLq"
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostData = void 0;
var react_1 = __webpack_require__(0);
var reduxHooks_1 = __webpack_require__(1);
var api_1 = __webpack_require__(4);
var usePostData = function (postId) {
    var _a = react_1.useState([]), comments = _a[0], setComments = _a[1];
    var token = reduxHooks_1.useAppSelector(function (state) { return state.tokenSlice.token; });
    var posts = reduxHooks_1.useAppSelector(function (state) { return state.postsSlice.posts; });
    var postData = posts.find(function (item) { return item.id == postId; });
    react_1.useEffect(function () {
        if (token == 'undefined')
            return;
        api_1.postsApi.getComments(token, postId).then(function (res) {
            var list = res[1].data.children;
            setComments(list);
        });
    }, [token]);
    return { comments: comments, postData: postData };
};
exports.usePostData = usePostData;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Reddit</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>\n      window.__token__ = '" + token + "'\n    </script>\n</head>\n<body>\n    <div id=\"root\">" + content + "</div>\n    <div id=\"modalRoot\"></div>\n     <div id=\"dropdownRoot\"></div>\n</body>\n</html>\n"; };
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);