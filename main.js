(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/shared/src/lib/HOC/index.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/HOC/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: likesHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _likesHOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesHOC */ "../../../libs/shared/src/lib/HOC/likesHOC/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likesHOC", function() { return _likesHOC__WEBPACK_IMPORTED_MODULE_0__["likesHOC"]; });



/***/ }),

/***/ "../../../libs/shared/src/lib/HOC/likesHOC/index.tsx":
/*!***************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/HOC/likesHOC/index.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: likesHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likesHOC", function() { return likesHOC; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/HOC/likesHOC/index.tsx";


function likesHOC(WrappedComponent) {
  return function () {
    const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);

    const incrementLikes = () => {
      setCount(count + 1);
    };

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(WrappedComponent, {
      likesCount: count,
      incrementLikes: incrementLikes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  };
}

/***/ }),

/***/ "../../../libs/shared/src/lib/components/AppBar/AppBar.tsx":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/AppBar/AppBar.tsx ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppBarComponent; });
/* harmony import */ var _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vam/shared/styles/theme/config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/AppBar/AppBar.tsx";



const AppBarWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AppBar__AppBarWrapper",
  componentId: "sc-3u6c5b-0"
})(["display:flex;width:100%;background:", ";padding:10px 30px;"], props => props.backgroundColor);
const TitleWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AppBar__TitleWrapper",
  componentId: "sc-3u6c5b-1"
})(["display:flex;justify-content:flex-end;width:55%;color:", ";font-size:", ";"], _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__["Colour"].whiteColor, _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontmd);
const CounterWrapper = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(TitleWrapper).withConfig({
  displayName: "AppBar__CounterWrapper",
  componentId: "sc-3u6c5b-2"
})(["width:45%;"]);
function AppBarComponent({
  title,
  backgroundColor,
  count
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(AppBarWrapper, {
    backgroundColor: backgroundColor,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TitleWrapper, {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CounterWrapper, {
      children: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "../../../libs/shared/src/lib/components/AppBar/index.tsx":
/*!********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/AppBar/index.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: AppBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return AppBar; });
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "../../../libs/shared/src/lib/components/AppBar/AppBar.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/AppBar/index.tsx";


function AppBar({
  title,
  backgroundColor,
  count
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AppBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title,
    backgroundColor,
    count
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ }),

/***/ "../../../libs/shared/src/lib/components/Header/index.tsx":
/*!********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Header/index.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vam/shared/styles/theme/config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Header/index.tsx";



const HeaderBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "Header__HeaderBar",
  componentId: "vsolgg-0"
})(["padding:20px;background:", ";display:flex;justify-content:space-between;align-items:center;"], _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_1__["Colour"].lightGreyColor);
const LogoWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Header__LogoWrapper",
  componentId: "vsolgg-1"
})(["display:flex;align-content:flex-start;"]);
const NavWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Header__NavWrapper",
  componentId: "vsolgg-2"
})(["display:flex;align-content:flex-end;"]);
function Header({
  logo,
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderBar, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(LogoWrapper, {
      children: logo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NavWrapper, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "../../../libs/shared/src/lib/components/Likes/Likes.tsx":
/*!*******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Likes/Likes.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: LikesComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesComponent", function() { return LikesComponent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Likes/Likes.tsx";


const LikesWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Likes__LikesWrapper",
  componentId: "sc-2ljpp7-0"
})(["display:flex;position:relative;text-align:center;flex-direction:column;justify-content:center;align-items:center;height:calc(100vh - 142px);"]);
const LikesButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Likes__LikesButton",
  componentId: "sc-2ljpp7-1"
})(["border:0;background:transparent;outline:0;box-shadow:none;cursor:pointer;-webkit-appearance:none;"]);
const LikesCountWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Likes__LikesCountWrapper",
  componentId: "sc-2ljpp7-2"
})(["display:block;padding:5px 10px;text-align:center;background:", ";color:", ";margin-top:-22px;"], props => props.likesCountBackground, props => props.likesCountColor);
function LikesComponent({
  likesImageSource,
  likesCount,
  likesCountBackground,
  likesCountColor,
  clickHandler
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LikesWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LikesButton, {
      type: "button",
      onClick: clickHandler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: likesImageSource,
        alt: "Likes Thumbs up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LikesCountWrapper, {
      likesCountBackground,
      likesCountColor,
      children: likesCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (LikesComponent);

/***/ }),

/***/ "../../../libs/shared/src/lib/components/Likes/index.tsx":
/*!*******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Likes/index.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: Likes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Likes", function() { return Likes; });
/* harmony import */ var _Likes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Likes */ "../../../libs/shared/src/lib/components/Likes/Likes.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Likes/index.tsx";


function Likes({
  likesImageSource,
  likesCountBackground,
  likesCount,
  likesCountColor,
  clickHandler
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Likes__WEBPACK_IMPORTED_MODULE_0__["default"], {
    likesCount,
    likesCountBackground,
    likesCountColor,
    likesImageSource,
    clickHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Likes);

/***/ }),

/***/ "../../../libs/shared/src/lib/components/Nav/index.tsx":
/*!*****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Nav/index.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: Nav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/Nav/index.tsx";




const NavWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "Nav__NavWrapper",
  componentId: "kptcwt-0"
})(["display:flex;"]);
const NavList = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Nav__NavList",
  componentId: "kptcwt-1"
})(["display:flex;justify-content:space-between;align-content:center;list-style:none;margin:0;padding:0;"]);
const NavListItem = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Nav__NavListItem",
  componentId: "kptcwt-2"
})(["display:flex;a{display:block;padding:10px 5px;padding-left:0;&:after{content:'|';padding-left:5px;}}&:last-child{a{&:after{display:none;}}}"]);
function Nav() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavList, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_0__["NavLink"],
          end: true,
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/context",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_0__["NavLink"],
          children: "Context"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/hooks",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_0__["NavLink"],
          children: "Hooks"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/redux",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_0__["NavLink"],
          children: "Redux"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(NavListItem, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/hoc",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_0__["NavLink"],
          children: "HOC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "../../../libs/shared/src/lib/components/index.ts":
/*!************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/components/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: AppBar, Header, Nav, Likes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "../../../libs/shared/src/lib/components/AppBar/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return _AppBar__WEBPACK_IMPORTED_MODULE_0__["AppBar"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "../../../libs/shared/src/lib/components/Header/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["Header"]; });

/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "../../../libs/shared/src/lib/components/Nav/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_2__["Nav"]; });

/* harmony import */ var _Likes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Likes */ "../../../libs/shared/src/lib/components/Likes/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Likes", function() { return _Likes__WEBPACK_IMPORTED_MODULE_3__["Likes"]; });






/***/ }),

/***/ "../../../libs/shared/src/lib/context/Likes/context.tsx":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/context/Likes/context.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  likes: 0,
  incrementLikes: () => {}
};
const LikesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState);
LikesContext.displayName = 'LikesContext';
/* harmony default export */ __webpack_exports__["default"] = (LikesContext);

/***/ }),

/***/ "../../../libs/shared/src/lib/context/Likes/index.tsx":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/context/Likes/index.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: LikesProvider, useLikesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesProvider", function() { return LikesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLikesContext", function() { return useLikesContext; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../../../libs/shared/src/lib/context/Likes/context.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "../../../libs/shared/src/lib/context/Likes/types.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "../../../libs/shared/src/lib/context/Likes/reducer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/context/Likes/index.tsx";





function LikesProvider({
  children
}) {
  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], _context__WEBPACK_IMPORTED_MODULE_3__["initialState"]);
  const {
    likes
  } = state;

  const incrementLikes = () => dispatch(_types__WEBPACK_IMPORTED_MODULE_4__["LikesAction"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_context__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      likes,
      incrementLikes
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
const useLikesContext = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

/***/ }),

/***/ "../../../libs/shared/src/lib/context/Likes/reducer.tsx":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/context/Likes/reducer.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vaibhavshringarpure_Projects_VAM_Nx_Projects_VAM_Base_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../../libs/shared/src/lib/context/Likes/types.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../../../libs/shared/src/lib/context/Likes/context.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_vaibhavshringarpure_Projects_VAM_Nx_Projects_VAM_Base_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




const likesReducer = (state = _context__WEBPACK_IMPORTED_MODULE_2__["initialState"], action) => {
  const {
    type
  } = action;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["ActionKind"].INCREMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        likes: state.likes + 1
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (likesReducer);

/***/ }),

/***/ "../../../libs/shared/src/lib/context/Likes/types.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/context/Likes/types.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ActionKind, LikesAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionKind", function() { return ActionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesAction", function() { return LikesAction; });
let ActionKind;

(function (ActionKind) {
  ActionKind["INCREMENT"] = "likes/increment";
})(ActionKind || (ActionKind = {}));

const LikesAction = {
  type: ActionKind.INCREMENT
};

/***/ }),

/***/ "../../../libs/shared/src/lib/context/index.tsx":
/*!**********************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/context/index.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: LikesProvider, useLikesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Likes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Likes */ "../../../libs/shared/src/lib/context/Likes/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LikesProvider", function() { return _Likes__WEBPACK_IMPORTED_MODULE_0__["LikesProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLikesContext", function() { return _Likes__WEBPACK_IMPORTED_MODULE_0__["useLikesContext"]; });



/***/ }),

/***/ "../../../libs/shared/src/lib/hooks/LikesHook/index.tsx":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/hooks/LikesHook/index.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: useLikes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLikes", function() { return useLikes; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const useLikes = () => {
  const [likes, setLikes] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);

  const incrementLikes = () => {
    setLikes(likes => likes + 1);
  };

  return {
    likes,
    incrementLikes
  };
};

/***/ }),

/***/ "../../../libs/shared/src/lib/hooks/index.tsx":
/*!********************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/hooks/index.tsx ***!
  \********************************************************************************************************/
/*! exports provided: useLikes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LikesHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LikesHook */ "../../../libs/shared/src/lib/hooks/LikesHook/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLikes", function() { return _LikesHook__WEBPACK_IMPORTED_MODULE_0__["useLikes"]; });



/***/ }),

/***/ "../../../libs/shared/src/lib/store/actions/index.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/actions/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: likesIncrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes */ "../../../libs/shared/src/lib/store/actions/likes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likesIncrement", function() { return _likes__WEBPACK_IMPORTED_MODULE_0__["likesIncrement"]; });



/***/ }),

/***/ "../../../libs/shared/src/lib/store/actions/likes/index.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/actions/likes/index.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: likesIncrement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likesIncrement", function() { return likesIncrement; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "../../../libs/shared/src/lib/store/types/index.ts");

const likesIncrement = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LIKES_INCREMENT"]
  };
};
/* harmony default export */ __webpack_exports__["default"] = (likesIncrement);

/***/ }),

/***/ "../../../libs/shared/src/lib/store/index.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "../../../node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "../../../node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "../../../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "../../../libs/shared/src/lib/store/reducers/index.ts");






const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(...middlewares)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "../../../libs/shared/src/lib/store/reducers/index.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/reducers/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../../node_modules/redux/es/redux.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes */ "../../../libs/shared/src/lib/store/reducers/likes/index.ts");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  likes: _likes__WEBPACK_IMPORTED_MODULE_1__["likesReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "../../../libs/shared/src/lib/store/reducers/likes/index.ts":
/*!**********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/reducers/likes/index.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: initialState, likesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likesReducer", function() { return likesReducer; });
/* harmony import */ var _Users_vaibhavshringarpure_Projects_VAM_Nx_Projects_VAM_Base_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ "../../../libs/shared/src/lib/store/types/index.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_vaibhavshringarpure_Projects_VAM_Nx_Projects_VAM_Base_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const initialState = {
  count: 0
};
const likesReducer = (state = initialState, action) => {
  const {
    type
  } = action;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["LIKES_INCREMENT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count + 1
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "../../../libs/shared/src/lib/store/selectors/index.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/selectors/index.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: likesSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes */ "../../../libs/shared/src/lib/store/selectors/likes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likesSelector", function() { return _likes__WEBPACK_IMPORTED_MODULE_0__["likesSelector"]; });



/***/ }),

/***/ "../../../libs/shared/src/lib/store/selectors/likes/index.ts":
/*!***********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/selectors/likes/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: likesSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likesSelector", function() { return likesSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "../../../node_modules/reselect/es/index.js");


const likesState = state => state.likes;

const likesSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(likesState, likes => likes.count);

/***/ }),

/***/ "../../../libs/shared/src/lib/store/types/index.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/store/types/index.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LIKES_INCREMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKES_INCREMENT", function() { return LIKES_INCREMENT; });
const LIKES_INCREMENT = 'likes/increment';

/***/ }),

/***/ "../../../libs/shared/src/lib/styles/theme/config.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/styles/theme/config.ts ***!
  \***************************************************************************************************************/
/*! exports provided: Font, Colour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return Colour; });
/** Fonts */
const Font = {
  fontFamily: ['KoHo', 'sans-serif'].join(','),
  fontxs: '0.5rem',
  fontsm: '0.75rem',
  fontBaseSize: '16px',
  fontmd: '1.125rem',
  fontlg: '1.5rem',
  fontxl: '2rem',
  fontNormal: 400,
  fontBold: 500
};
/** Config for Custom Colors  */

const Colour = {
  primary: '#1d70b8',
  secondary: '#912b88',
  primaryTextColor: '#0b0c0c',
  secondaryTextColor: '#0b0c0c',
  linkColor: '#1d70b8',
  hoverLinkColor: '#003078',
  visitedLinkColor: '#4c2c92',
  activeLinkColor: '#0b0c0c',
  borderColor: '#b1b4b6',
  inputBorderColor: '#0b0c0c',
  focusColor: '#ffdd00',
  focusTextColor: '#0b0c0c',
  errorColor: '#d4351c',
  successColor: '#00703c',
  helpColor: '#28a197',
  calloutColor: '#4c2c92',
  blackColor: '#0b0c0c',
  whiteColor: '#ffffff',
  darkGreyColor: '#505a5f',
  midGreyColor: '#b1b4b6',
  lightGreyColor: '#f3f2f1',
  alertColor: '#f47738'
};

/***/ }),

/***/ "../../../libs/shared/src/lib/styles/theme/index.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/styles/theme/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "../../../libs/shared/src/lib/styles/theme/palette.ts");
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overrides */ "../../../libs/shared/src/lib/styles/theme/overrides.ts");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props */ "../../../libs/shared/src/lib/styles/theme/props.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography */ "../../../libs/shared/src/lib/styles/theme/typography.ts");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape */ "../../../libs/shared/src/lib/styles/theme/shape.ts");






let theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  breakpoints: {},
  overrides: _overrides__WEBPACK_IMPORTED_MODULE_2__["overrides"],
  palette: _palette__WEBPACK_IMPORTED_MODULE_1__["palette"],
  props: _props__WEBPACK_IMPORTED_MODULE_3__["props"],
  typography: _typography__WEBPACK_IMPORTED_MODULE_4__["typography"],
  shape: _shape__WEBPACK_IMPORTED_MODULE_5__["shape"]
});
theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(theme);

/***/ }),

/***/ "../../../libs/shared/src/lib/styles/theme/overrides.ts":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/styles/theme/overrides.ts ***!
  \******************************************************************************************************************/
/*! exports provided: overrides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrides", function() { return overrides; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../../libs/shared/src/lib/styles/theme/config.ts");

const overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        WebkitFontSmoothing: 'auto',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }
  },
  MuiButton: {
    root: {
      textTransform: 'none'
    }
  },
  MuiLink: {
    root: {
      fontSize: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontmd,
      color: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].linkColor,
      '&:hover': {
        color: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].hoverLinkColor
      },
      '&:active': {
        color: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].activeLinkColor
      },
      '&:focus': {
        color: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].focusTextColor
      },
      '&.active': {
        color: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].activeLinkColor
      }
    }
  }
};

/***/ }),

/***/ "../../../libs/shared/src/lib/styles/theme/palette.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/styles/theme/palette.ts ***!
  \****************************************************************************************************************/
/*! exports provided: palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/** Custom Palette for Application */

const palette = {
  primary: {
    main: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].primary
  },
  secondary: {
    main: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].secondary
  },
  primaryTextColor: {
    main: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].primaryTextColor
  },
  secondaryTextColor: {
    main: _config__WEBPACK_IMPORTED_MODULE_0__["Colour"].secondaryTextColor
  }
};


/***/ }),

/***/ "../../../libs/shared/src/lib/styles/theme/props.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/styles/theme/props.ts ***!
  \**************************************************************************************************************/
/*! exports provided: props */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
const props = {
  MuiButton: {
    disableElevation: true,
    disableRipple: true
  },
  MuiCheckbox: {
    disableRipple: true
  },
  MuiTextField: {
    InputLabelProps: {
      shrink: true
    }
  }
};

/***/ }),

/***/ "../../../libs/shared/src/lib/styles/theme/shape.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/styles/theme/shape.ts ***!
  \**************************************************************************************************************/
/*! exports provided: shape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shape", function() { return shape; });
const shape = {
  borderRadius: 0
};

/***/ }),

/***/ "../../../libs/shared/src/lib/styles/theme/typography.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/libs/shared/src/lib/styles/theme/typography.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../../libs/shared/src/lib/styles/theme/config.ts");

const typography = {
  fontFamily: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontFamily,
  h1: {
    fontSize: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontxl,
    fontWeight: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontBold,
    lineHeight: 1.09375
  },
  h2: {
    fontSize: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontlg,
    fontWeight: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontBold,
    lineHeight: 1.04167
  },
  h3: {
    fontSize: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontmd,
    fontWeight: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontBold,
    lineHeight: 1.1111
  },
  h4: {
    fontSize: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontBaseSize,
    fontWeight: _config__WEBPACK_IMPORTED_MODULE_0__["Font"].fontBold,
    lineHeight: 1.25
  }
};

/***/ }),

/***/ "../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/a-possible-prototype.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/add-to-unscopables.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/an-object.js":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/an-object.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-includes.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/array-includes.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/classof-raw.js":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/classof-raw.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/create-property-descriptor.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/define-iterator.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/define-iterator.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/descriptors.js":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/descriptors.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/document-create-element.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/document-create-element.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/dom-iterables.js":
/*!********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/dom-iterables.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-user-agent.js":
/*!************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/engine-user-agent.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-v8-version.js":
/*!************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/engine-v8-version.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/enum-bug-keys.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../../node_modules/core-js/internals/export.js":
/*!*************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/export.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/fails.js":
/*!************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/fails.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/get-built-in.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/get-built-in.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../../../node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/global.js":
/*!*************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/global.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../../node_modules/core-js/internals/has.js":
/*!**********************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/has.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/hidden-keys.js":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/hidden-keys.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/html.js":
/*!***********************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/html.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/ie8-dom-define.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/indexed-object.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/indexed-object.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../../node_modules/core-js/internals/inspect-source.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/inspect-source.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-state.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/internal-state.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-forced.js":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/is-forced.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-object.js":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/is-object.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-pure.js":
/*!**************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/is-pure.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators-core.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/iterators-core.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators.js":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/iterators.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-symbol.js":
/*!********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/native-symbol.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-weak-map.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/native-weak-map.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-create.js":
/*!********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-create.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-properties.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-define-properties.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-property.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-define-property.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys-internal.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-keys-internal.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys.js":
/*!******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-keys.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../../node_modules/core-js/internals/own-keys.js":
/*!***************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/own-keys.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/path.js":
/*!***********************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/path.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine.js":
/*!***************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/redefine.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/require-object-coercible.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/require-object-coercible.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-global.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/set-global.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/set-to-string-tag.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-key.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/shared-key.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-store.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/shared-store.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared.js":
/*!*************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/shared.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.13.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-absolute-index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/to-absolute-index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-indexed-object.js":
/*!************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/to-indexed-object.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-integer.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/to-integer.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-length.js":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/to-length.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-object.js":
/*!****************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/to-object.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-primitive.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/to-primitive.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/uid.js":
/*!**********************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/uid.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../../node_modules/core-js/internals/well-known-symbol.js":
/*!************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/internals/well-known-symbol.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.iterator.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/modules/es.array.iterator.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/index.js");
/* harmony import */ var _pages_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Context */ "./pages/Context/index.tsx");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Home */ "./pages/Home/index.tsx");
/* harmony import */ var _pages_Hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Hooks */ "./pages/Hooks/index.tsx");
/* harmony import */ var _pages_Redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Redux */ "./pages/Redux/index.tsx");
/* harmony import */ var _pages_HOC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/HOC */ "./pages/HOC/index.tsx");
/* harmony import */ var _vam_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vam/shared/components */ "../../../libs/shared/src/lib/components/index.ts");
/* harmony import */ var _assets_icons_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/logo.svg */ "./assets/icons/logo.svg");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/NotFound */ "./pages/NotFound/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/app/app.tsx";

/** Packages */

/**Pages  */






/** Components */


/** Assets */





function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["HashRouter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        logo: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_assets_icons_logo_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 23
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_6__["Nav"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Routes"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          path: "/",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 36
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          path: "/context",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_Context__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          path: "/hooks",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_Hooks__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          path: "/redux",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_Redux__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          path: "/hoc",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_HOC__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 39
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          path: "/*",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_pages_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./assets/icons/404.png":
/*!******************************!*\
  !*** ./assets/icons/404.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "404.d45c26e.png";

/***/ }),

/***/ "./assets/icons/logo.svg":
/*!*******************************!*\
  !*** ./assets/icons/logo.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLogo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 134,
    height: 57,
    viewBox: "0 0 134 57",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15 45L12.825 42.842C5.1 35.2071 0 30.1717 0 23.9918C0 18.9564 3.63 15 8.25 15C10.86 15 13.365 16.3243 15 18.4169C16.635 16.3243 19.14 15 21.75 15C26.37 15 30 18.9564 30 23.9918C30 30.1717 24.9 35.2071 17.175 42.8583L15 45Z",
    fill: "#1D70B8"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M63.3672 32.6328C63.3672 32.9453 63.3125 33.2031 63.2031 33.4062C63.1094 33.5938 63 33.8125 62.875 34.0625C62.8438 34.0469 62.8047 34.0391 62.7578 34.0391C62.6641 34.0391 62.5781 34.0625 62.5 34.1094C62.4219 34.1562 62.3438 34.1953 62.2656 34.2266C61.8125 34.7266 61.3438 35.2109 60.8594 35.6797C60.3906 36.1484 59.8672 36.5625 59.2891 36.9219C59.1328 37.0156 58.9766 37.1094 58.8203 37.2031C58.6641 37.2812 58.5 37.3594 58.3281 37.4375C58.2656 37.4688 58.2031 37.5 58.1406 37.5312C58.0938 37.5469 58.0469 37.5703 58 37.6016C57.8906 37.6641 57.7734 37.7656 57.6484 37.9062C57.5391 38.0469 57.4062 38.1875 57.25 38.3281C57.1094 38.4844 56.9531 38.6094 56.7812 38.7031C56.6094 38.8125 56.4219 38.8594 56.2188 38.8438C56.0938 38.9219 55.9844 39.0234 55.8906 39.1484C55.7969 39.2734 55.6875 39.3984 55.5625 39.5234C54.8906 39.7578 54.2734 40.0625 53.7109 40.4375C53.1641 40.8281 52.5938 41.2031 52 41.5625C51.6406 41.7969 51.2812 41.9844 50.9219 42.125C50.8438 42.1562 50.75 42.1797 50.6406 42.1953C50.5469 42.2109 50.4453 42.2344 50.3359 42.2656C49.8203 42.3906 49.2969 42.4922 48.7656 42.5703C48.25 42.6484 47.7266 42.6875 47.1953 42.6875C46.5391 42.6875 45.9062 42.6094 45.2969 42.4531C45.2969 42.4062 45.2812 42.375 45.25 42.3594C45.2188 42.3438 45.1797 42.3281 45.1328 42.3125C45.1016 42.2969 45.0703 42.2734 45.0391 42.2422C45.0078 42.2266 45.0078 42.1875 45.0391 42.125C44.6953 42.0938 44.3906 42.0078 44.125 41.8672C43.875 41.7266 43.7109 41.4766 43.6328 41.1172C43.5859 41.1484 43.5469 41.1875 43.5156 41.2344C43.4844 41.2812 43.4297 41.2969 43.3516 41.2812C43.1328 40.9688 42.8906 40.6797 42.625 40.4141C42.3594 40.1484 42.1641 39.8281 42.0391 39.4531C42.0078 39.375 41.9844 39.2969 41.9688 39.2188C41.9688 39.1562 41.9609 39.0859 41.9453 39.0078C41.8672 38.7891 41.7266 38.6797 41.5234 38.6797C41.5547 38.6172 41.5703 38.5391 41.5703 38.4453C41.5703 38.3984 41.5625 38.3516 41.5469 38.3047C41.5469 38.2578 41.5469 38.2109 41.5469 38.1641C41.5469 38.0859 41.5703 38.0078 41.6172 37.9297C41.4609 37.5703 41.3516 37.2188 41.2891 36.875C41.2266 36.5156 41.1953 36.1484 41.1953 35.7734C41.1953 35.2891 41.2188 34.8125 41.2656 34.3438C41.3125 33.8594 41.3359 33.375 41.3359 32.8906C41.4297 32.7031 41.5 32.4844 41.5469 32.2344C41.6094 31.9844 41.7109 31.7812 41.8516 31.625C41.8359 31.5312 41.8047 31.4844 41.7578 31.4844C41.7109 31.4688 41.6875 31.4219 41.6875 31.3438C41.6875 31.0625 41.7422 30.7578 41.8516 30.4297C41.9609 30.1016 42.0156 29.7656 42.0156 29.4219C42.1562 29.3438 42.2422 29.2266 42.2734 29.0703C42.3203 28.9141 42.4062 28.7891 42.5312 28.6953V28.5781C42.5312 28.3438 42.5547 28.1094 42.6016 27.875C42.6641 27.6406 42.7188 27.4141 42.7656 27.1953C42.8281 26.9609 42.875 26.7344 42.9062 26.5156C42.9531 26.2812 42.9688 26.0547 42.9531 25.8359C42.9844 25.7891 43.0234 25.7031 43.0703 25.5781C43.1328 25.4375 43.1875 25.2969 43.2344 25.1562C43.2969 25 43.3438 24.8516 43.375 24.7109C43.4219 24.5703 43.4453 24.4688 43.4453 24.4062C43.4453 24.3125 43.4297 24.2266 43.3984 24.1484C43.3672 24.0703 43.3516 23.9844 43.3516 23.8906C43.3516 23.8125 43.375 23.7031 43.4219 23.5625C43.4688 23.4062 43.5078 23.2812 43.5391 23.1875C43.6016 22.9219 43.6562 22.6484 43.7031 22.3672C43.7656 22.0703 43.8203 21.7891 43.8672 21.5234C44.0078 20.6641 44.1094 19.8047 44.1719 18.9453C44.2344 18.0703 44.2734 17.1953 44.2891 16.3203C44.5078 16.1953 44.7344 16.0781 44.9688 15.9688C45.2188 15.8594 45.4766 15.8047 45.7422 15.8047C45.8203 15.8047 45.8984 15.8125 45.9766 15.8281C46.0547 15.8438 46.1328 15.8672 46.2109 15.8984C46.2891 16.2109 46.4141 16.4609 46.5859 16.6484C46.7578 16.8359 46.9141 17.0625 47.0547 17.3281C46.9609 17.5781 46.8984 17.8359 46.8672 18.1016L46.7969 18.8984C46.7812 19.1641 46.75 19.4297 46.7031 19.6953C46.6562 19.9453 46.5781 20.1875 46.4688 20.4219C46.5 20.5 46.5156 20.5781 46.5156 20.6562V20.8906C46.5156 21.1094 46.4922 21.3203 46.4453 21.5234C46.4141 21.7266 46.375 21.9375 46.3281 22.1562C46.2812 22.3594 46.2422 22.5625 46.2109 22.7656C46.1797 22.9688 46.1797 23.1719 46.2109 23.375C46.1641 23.4531 46.1172 23.5156 46.0703 23.5625C46.0234 23.5938 45.9922 23.6484 45.9766 23.7266L45.9297 24.1719C45.8984 24.3438 45.8672 24.5156 45.8359 24.6875C45.8203 24.8438 45.7969 25.0078 45.7656 25.1797C45.6562 25.6484 45.5312 26.1172 45.3906 26.5859C45.2656 27.0547 45.2031 27.5391 45.2031 28.0391V28.1797C45.0625 28.3984 44.9531 28.6719 44.875 29C44.7969 29.3125 44.7734 29.6016 44.8047 29.8672C44.6328 30.3203 44.4688 30.7656 44.3125 31.2031C44.1562 31.6406 44.0781 32.0938 44.0781 32.5625C44.0781 32.6406 44.0781 32.7266 44.0781 32.8203C44.0938 32.8984 44.1094 32.9766 44.125 33.0547C44 33.3672 43.9219 33.6875 43.8906 34.0156C43.8594 34.3281 43.8438 34.6406 43.8438 34.9531C43.8438 35.1719 43.8516 35.4297 43.8672 35.7266C43.8984 36.0078 43.9375 36.3047 43.9844 36.6172C44.0469 36.9141 44.1172 37.2031 44.1953 37.4844C44.2734 37.7656 44.3594 37.9922 44.4531 38.1641C44.8125 38.7422 45.2812 39.1953 45.8594 39.5234C46.4531 39.8672 47.0781 40.0859 47.7344 40.1797C48 40.0859 48.2109 40.0312 48.3672 40.0156C48.5391 40 48.7734 40 49.0703 40.0156C49.3203 39.8906 49.5703 39.7969 49.8203 39.7344C50.0859 39.6719 50.3516 39.6016 50.6172 39.5234C50.6953 39.4922 50.7734 39.4609 50.8516 39.4297C50.9453 39.3984 51.0234 39.3672 51.0859 39.3359C51.1641 39.3047 51.25 39.2344 51.3438 39.125C51.4375 39.0156 51.5234 38.9219 51.6016 38.8438C51.9297 38.75 52.2422 38.6172 52.5391 38.4453C52.8359 38.2891 53.125 38.125 53.4062 37.9531L54.2734 37.4375C54.5703 37.2656 54.8828 37.1172 55.2109 36.9922C55.3359 36.9453 55.4062 36.8828 55.4219 36.8047C55.4531 36.7109 55.5 36.6016 55.5625 36.4766C55.5938 36.5078 55.6406 36.5234 55.7031 36.5234C55.8906 36.5234 56.0234 36.4688 56.1016 36.3594C56.1797 36.2344 56.2734 36.1094 56.3828 35.9844C56.5859 35.9531 56.7812 35.8984 56.9688 35.8203C57.1562 35.7266 57.2969 35.5859 57.3906 35.3984C57.7812 35.3203 58.125 35.1797 58.4219 34.9766C58.7188 34.7734 59.0078 34.5547 59.2891 34.3203C59.5703 34.0703 59.8516 33.8359 60.1328 33.6172C60.4141 33.3828 60.7344 33.1953 61.0938 33.0547C61.1406 32.9766 61.1719 32.9062 61.1875 32.8438C61.2031 32.7812 61.2266 32.7109 61.2578 32.6328C61.5234 32.6016 61.7344 32.5312 61.8906 32.4219C62.0469 32.2969 62.2266 32.1719 62.4297 32.0469C62.8672 32.0938 63.1797 32.2891 63.3672 32.6328ZM66.1094 34.7891C66.0312 34.9141 65.9375 35.0312 65.8281 35.1406C65.7188 35.2344 65.6172 35.3359 65.5234 35.4453C65.4141 35.4922 65.2891 35.5156 65.1484 35.5156C65.0234 35.5156 64.8984 35.5156 64.7734 35.5156C64.6641 35.5 64.5547 35.5 64.4453 35.5156C64.3516 35.5156 64.2734 35.5469 64.2109 35.6094C64.0859 35.5781 63.9922 35.5234 63.9297 35.4453C63.8672 35.3516 63.7578 35.2969 63.6016 35.2812C63.5391 35.2656 63.4766 35.2656 63.4141 35.2812C63.1797 35.0156 62.9609 34.7344 62.7578 34.4375C62.5703 34.1406 62.3906 33.8594 62.2188 33.5938C62.2031 33.0156 62.1562 32.4297 62.0781 31.8359C62.0625 31.6953 62.0391 31.5547 62.0078 31.4141C61.9766 31.2734 61.9531 31.1406 61.9375 31.0156C61.9375 30.8594 61.9453 30.7109 61.9609 30.5703C61.9922 30.4141 62.0156 30.2734 62.0312 30.1484C62.0938 29.6953 62.1641 29.25 62.2422 28.8125C62.3203 28.375 62.3906 27.9297 62.4531 27.4766C62.5156 27.0703 62.5469 26.6484 62.5469 26.2109C62.5469 25.7578 62.4766 25.3359 62.3359 24.9453L62.3125 24.8281C62.3438 24.7031 62.375 24.6016 62.4062 24.5234C62.4531 24.4297 62.4844 24.3281 62.5 24.2188C62.5312 24.0469 62.4922 23.9219 62.3828 23.8438C62.4297 23.7188 62.5078 23.6406 62.6172 23.6094C62.7266 23.5625 62.7891 23.4688 62.8047 23.3281C62.8203 23.2656 62.8203 23.2031 62.8047 23.1406C62.9297 23.0938 63.0547 23.0547 63.1797 23.0234C63.3203 22.9766 63.4531 22.9688 63.5781 23C63.7812 23.0312 63.9609 23.1016 64.1172 23.2109C64.2734 23.3047 64.4219 23.4141 64.5625 23.5391C64.8125 24.2891 64.9141 25.0859 64.8672 25.9297C64.8203 26.7578 64.7422 27.5938 64.6328 28.4375C64.5234 29.2812 64.4531 30.1094 64.4219 30.9219C64.3906 31.7188 64.5156 32.4609 64.7969 33.1484L64.8438 33.1719C64.9219 33.1875 64.9844 33.1641 65.0312 33.1016C65.0781 33.0234 65.1406 32.9922 65.2188 33.0078C65.2812 33.0391 65.3203 33.0547 65.3359 33.0547C65.3984 33.3672 65.5 33.6641 65.6406 33.9453C65.7812 34.2266 65.9375 34.5078 66.1094 34.7891ZM86.875 36.8047C86.875 36.9297 86.8203 37.0312 86.7109 37.1094C86.6016 37.1875 86.4766 37.2656 86.3359 37.3438L85.9141 37.5547C85.7734 37.6172 85.6797 37.7031 85.6328 37.8125C85.4609 37.7656 85.2891 37.7344 85.1172 37.7188C84.9609 37.7031 84.8047 37.6953 84.6484 37.6953C84.4453 37.6953 84.2344 37.7188 84.0156 37.7656C83.7969 37.7969 83.625 37.8984 83.5 38.0703C83.4219 38.0391 83.3516 38.0234 83.2891 38.0234H83.1016C82.8672 38.0234 82.625 38.0391 82.375 38.0703C82.1406 38.1172 81.9062 38.1406 81.6719 38.1406C81.5469 38.1406 81.4219 38.1328 81.2969 38.1172C81.1875 38.1016 81.0859 38.0547 80.9922 37.9766C80.8516 38.0234 80.7031 38.0469 80.5469 38.0469C80.3438 38.0469 80.1484 38.0156 79.9609 37.9531C79.7734 37.8906 79.5859 37.8203 79.3984 37.7422C79.2266 37.6484 79.0469 37.5625 78.8594 37.4844C78.6719 37.4062 78.4844 37.3438 78.2969 37.2969L78.1328 36.9688C77.8828 36.9219 77.6484 36.8516 77.4297 36.7578C77.2266 36.6484 77.0234 36.5312 76.8203 36.4062C76.6172 36.2812 76.4141 36.1641 76.2109 36.0547C76.0234 35.9297 75.8281 35.8438 75.625 35.7969C75.5469 35.7344 75.4766 35.6797 75.4141 35.6328C75.3516 35.5703 75.3047 35.4844 75.2734 35.375C75.0703 35.3281 74.8828 35.2656 74.7109 35.1875L74.2188 34.9297C74.0625 34.8359 73.8828 34.7578 73.6797 34.6953C73.4922 34.6172 73.2656 34.5703 73 34.5547C72.9062 34.4141 72.7734 34.2812 72.6016 34.1562C72.4297 34.0312 72.2578 33.9688 72.0859 33.9688C71.9766 33.9688 71.8906 33.9922 71.8281 34.0391V34.1562C71.8281 34.3438 71.8828 34.5312 71.9922 34.7188C72.1016 34.9062 72.2422 35.0391 72.4141 35.1172C72.3984 35.1484 72.3906 35.1953 72.3906 35.2578C72.3906 35.3516 72.4062 35.4453 72.4375 35.5391C72.4844 35.6328 72.5625 35.6953 72.6719 35.7266C72.6094 35.8984 72.5312 36.0781 72.4375 36.2656C72.3438 36.4375 72.2266 36.6016 72.0859 36.7578C71.9453 36.9141 71.7891 37.0469 71.6172 37.1562C71.4609 37.25 71.2812 37.2969 71.0781 37.2969C71.0156 37.3281 70.9688 37.375 70.9375 37.4375C70.9219 37.5 70.9062 37.5703 70.8906 37.6484C70.8906 37.7109 70.875 37.7734 70.8438 37.8359C70.8281 37.8984 70.7969 37.9453 70.75 37.9766C70.6875 37.9922 70.6016 38 70.4922 38C70.3359 38 70.2031 37.9766 70.0938 37.9297C69.9844 37.8828 69.8672 37.8203 69.7422 37.7422V37.6484C69.7422 37.4609 69.7031 37.3125 69.625 37.2031C69.5625 37.0938 69.4844 36.9922 69.3906 36.8984C69.3125 36.7891 69.2344 36.6797 69.1562 36.5703C69.0938 36.4609 69.0625 36.3125 69.0625 36.125C69.0156 36.1562 68.9609 36.1797 68.8984 36.1953C68.8516 36.2109 68.8203 36.2422 68.8047 36.2891C68.7734 36.1328 68.7578 36 68.7578 35.8906C68.7578 35.5781 68.8047 35.2812 68.8984 35C69.0078 34.7188 69.0625 34.4219 69.0625 34.1094V33.7578C69.0625 33.3984 69.0547 33.0469 69.0391 32.7031C69.0234 32.3594 69.0156 32.0156 69.0156 31.6719C69.0156 31.375 69.0234 31.0859 69.0391 30.8047C69.0547 30.5078 69.0859 30.2109 69.1328 29.9141C69.3047 28.8828 69.4453 27.8594 69.5547 26.8438C69.6797 25.8125 69.875 24.7891 70.1406 23.7734C70.125 23.6953 70.1016 23.6172 70.0703 23.5391C70.0547 23.4609 70.0469 23.3828 70.0469 23.3047C70.0469 23.2422 70.0547 23.2031 70.0703 23.1875C70.1328 22.875 70.2734 22.6172 70.4922 22.4141C70.7109 22.1953 70.9922 22.0859 71.3359 22.0859H71.4062C71.5938 22.1641 71.7344 22.2812 71.8281 22.4375C71.9375 22.5781 72.1016 22.6328 72.3203 22.6016C72.3203 22.6328 72.3125 22.6641 72.2969 22.6953C72.2969 22.7266 72.2969 22.7578 72.2969 22.7891C72.2969 22.9609 72.3438 23.0859 72.4375 23.1641C72.5312 23.2422 72.6406 23.3281 72.7656 23.4219C72.6875 23.5781 72.6328 23.7578 72.6016 23.9609C72.5859 24.1641 72.5703 24.3672 72.5547 24.5703C72.5391 24.7734 72.5078 24.9688 72.4609 25.1562C72.4297 25.3438 72.3594 25.5 72.25 25.625C72.3125 25.7812 72.3516 25.9375 72.3672 26.0938C72.3828 26.25 72.3906 26.4141 72.3906 26.5859C72.3906 26.7578 72.3828 26.9375 72.3672 27.125C72.3516 27.2969 72.3438 27.4766 72.3438 27.6641C72.3438 27.8359 72.3672 27.9922 72.4141 28.1328C72.7578 28.1328 72.9531 27.9688 73 27.6406C73.4062 27.5312 73.7656 27.3828 74.0781 27.1953C74.4062 26.9922 74.7188 26.7812 75.0156 26.5625C75.3125 26.3438 75.6016 26.1172 75.8828 25.8828C76.1797 25.6484 76.5078 25.4453 76.8672 25.2734V25.2266C76.8672 25.1484 76.8906 25.1016 76.9375 25.0859C76.9844 25.0547 76.9922 24.9844 76.9609 24.875C77.1953 24.7969 77.3906 24.6953 77.5469 24.5703C77.7188 24.4297 77.875 24.2812 78.0156 24.125L78.4609 23.6328C78.6172 23.4609 78.7891 23.3125 78.9766 23.1875C79.1016 22.9219 79.2109 22.6406 79.3047 22.3438C79.4141 22.0469 79.5547 21.7734 79.7266 21.5234C80.0234 21.5234 80.3438 21.5469 80.6875 21.5938C81.0469 21.6406 81.3516 21.75 81.6016 21.9219C81.5703 22.0469 81.625 22.1328 81.7656 22.1797C81.5938 22.8359 81.3359 23.4297 80.9922 23.9609C80.6484 24.4766 80.2031 24.9141 79.6562 25.2734C79.5781 25.4453 79.4766 25.5938 79.3516 25.7188C79.2266 25.8438 79.1016 25.9688 78.9766 26.0938C78.8516 26.2031 78.7266 26.3203 78.6016 26.4453C78.4766 26.5703 78.375 26.7188 78.2969 26.8906C78.1094 26.9219 77.9453 26.9766 77.8047 27.0547C77.6797 27.1328 77.5547 27.2266 77.4297 27.3359C77.3203 27.4297 77.1953 27.5234 77.0547 27.6172C76.9297 27.6953 76.7891 27.7578 76.6328 27.8047C76.5078 27.9609 76.3594 28.0938 76.1875 28.2031C76.0312 28.3125 75.8672 28.4219 75.6953 28.5312C75.5391 28.625 75.3906 28.7344 75.25 28.8594C75.1094 28.9688 75.0078 29.1172 74.9453 29.3047H74.3359C74.1641 29.6016 73.9375 29.8516 73.6562 30.0547C73.3906 30.2422 73.1172 30.4219 72.8359 30.5938C72.8828 30.7812 72.9688 30.9375 73.0938 31.0625C73.2188 31.1719 73.3516 31.2734 73.4922 31.3672C73.6484 31.4609 73.7969 31.5625 73.9375 31.6719C74.0938 31.7656 74.2266 31.8828 74.3359 32.0234C74.9922 32.2734 75.625 32.5625 76.2344 32.8906C76.8438 33.2031 77.4219 33.5859 77.9688 34.0391C78 34.0234 78.0391 34.0156 78.0859 34.0156C78.2109 34.0156 78.3125 34.0547 78.3906 34.1328C78.4688 34.1953 78.5781 34.2188 78.7188 34.2031C78.7812 34.3594 78.8672 34.4688 78.9766 34.5312C79.0859 34.5781 79.1953 34.6172 79.3047 34.6484C79.4297 34.6797 79.5469 34.7266 79.6562 34.7891C79.7656 34.8516 79.8438 34.9609 79.8906 35.1172C80.125 35.1328 80.3359 35.1797 80.5234 35.2578C80.7266 35.3359 80.9062 35.4609 81.0625 35.6328H81.3438C81.8438 35.6328 82.3281 35.6797 82.7969 35.7734C83.2656 35.8672 83.7422 35.9141 84.2266 35.9141C84.4766 35.9141 84.7188 35.8984 84.9531 35.8672C85.1875 35.8203 85.4141 35.7422 85.6328 35.6328C85.7109 35.6797 85.7969 35.7266 85.8906 35.7734C85.9844 35.8203 86.0859 35.8438 86.1953 35.8438C86.2734 35.8438 86.3906 35.8281 86.5469 35.7969C86.5625 35.9688 86.6172 36.1328 86.7109 36.2891C86.8203 36.4453 86.875 36.6172 86.875 36.8047ZM98.1719 23.0938V23.1875C98.0625 23.2188 98.0078 23.2969 98.0078 23.4219C97.8359 23.5 97.6562 23.5625 97.4688 23.6094C97.2812 23.6406 97.1016 23.6953 96.9297 23.7734C96.7578 23.7578 96.5781 23.75 96.3906 23.75C96.2188 23.7344 96.0469 23.7266 95.875 23.7266C95.4062 23.7266 94.9375 23.7422 94.4688 23.7734C94 23.8047 93.5312 23.8047 93.0625 23.7734C92.8438 23.8984 92.6016 24 92.3359 24.0781C92.0859 24.1406 91.8438 24.1719 91.6094 24.1719C91.4219 24.1719 91.2578 24.1484 91.1172 24.1016C90.7422 24.2891 90.3281 24.4453 89.875 24.5703C89.4375 24.6953 88.9922 24.8203 88.5391 24.9453C88.0859 25.0547 87.6484 25.1875 87.2266 25.3438C86.8203 25.4844 86.4609 25.6875 86.1484 25.9531C86.1172 26.1719 86.0938 26.3906 86.0781 26.6094C86.0625 26.8125 86.0547 27.0156 86.0547 27.2188C86.0547 27.4375 86.0625 27.6406 86.0781 27.8281C86.1094 28.0156 86.1641 28.2031 86.2422 28.3906C86.3203 28.4219 86.4062 28.4453 86.5 28.4609C86.6094 28.4766 86.7031 28.4844 86.7812 28.4844C86.8594 28.4844 86.9375 28.4766 87.0156 28.4609C87.0938 28.4297 87.1484 28.375 87.1797 28.2969C87.4141 28.2656 87.6484 28.2578 87.8828 28.2734C88.1172 28.2734 88.3516 28.2734 88.5859 28.2734C88.8203 28.2734 89.0469 28.2656 89.2656 28.25C89.5 28.2344 89.7266 28.1953 89.9453 28.1328C90.1953 28.0703 90.4375 28.0312 90.6719 28.0156C90.9219 28 91.1641 27.9844 91.3984 27.9688C91.6328 27.9531 91.875 27.9297 92.125 27.8984C92.375 27.8516 92.6328 27.7656 92.8984 27.6406C93.1016 27.7188 93.3047 27.7578 93.5078 27.7578C93.7266 27.7578 93.9375 27.7734 94.1406 27.8047C94.25 27.8828 94.3359 27.9688 94.3984 28.0625C94.4766 28.1562 94.5156 28.2656 94.5156 28.3906C94.5156 28.6094 94.4375 28.8281 94.2812 29.0469C94.125 29.2656 94 29.4688 93.9062 29.6562H93.6484C93.2734 29.6562 92.9062 29.7109 92.5469 29.8203C92.2031 29.9141 91.8516 30.0312 91.4922 30.1719C91.1484 30.2969 90.7969 30.4141 90.4375 30.5234C90.0938 30.6172 89.7344 30.6641 89.3594 30.6641C89.2969 30.6641 89.2578 30.7031 89.2422 30.7812C89.2422 30.8438 89.2266 30.8906 89.1953 30.9219C89.1172 30.9062 89 30.8984 88.8438 30.8984C88.4844 30.8984 88.1406 30.9375 87.8125 31.0156C87.4844 31.0938 87.1484 31.1328 86.8047 31.1328C86.7109 31.1328 86.6172 31.1328 86.5234 31.1328C86.4297 31.1172 86.3359 31.1016 86.2422 31.0859C86.1641 31.2109 86.0625 31.2969 85.9375 31.3438C85.8125 31.375 85.6953 31.4375 85.5859 31.5312C85.5391 31.6719 85.5078 31.8438 85.4922 32.0469C85.4922 32.25 85.4844 32.4609 85.4688 32.6797C85.4688 32.8828 85.4531 33.0781 85.4219 33.2656C85.3906 33.4531 85.3281 33.6016 85.2344 33.7109C85.25 33.7891 85.3125 33.8203 85.4219 33.8047C85.5312 33.7734 85.5859 33.8203 85.5859 33.9453C85.5859 34.0859 85.5703 34.2344 85.5391 34.3906C85.5078 34.5469 85.4922 34.7031 85.4922 34.8594C85.4922 35.1562 85.5234 35.4844 85.5859 35.8438C85.6641 36.1875 85.7734 36.5078 85.9141 36.8047C86.0703 37.1016 86.2734 37.3516 86.5234 37.5547C86.7734 37.7422 87.0859 37.8359 87.4609 37.8359C87.7109 37.8359 87.9453 37.7891 88.1641 37.6953C88.3828 37.6016 88.5625 37.4453 88.7031 37.2266L88.8203 37.2031C88.8828 37.2031 88.9375 37.2109 88.9844 37.2266C89.0469 37.2422 89.1094 37.25 89.1719 37.25C89.2656 37.25 89.3828 37.1953 89.5234 37.0859C89.6797 36.9609 89.8438 36.8203 90.0156 36.6641C90.2031 36.5078 90.3906 36.3594 90.5781 36.2188C90.7656 36.0625 90.9453 35.9531 91.1172 35.8906C91.2266 35.6719 91.3281 35.4531 91.4219 35.2344C91.5312 35.0156 91.6875 34.8438 91.8906 34.7188V34.0391C92.0469 33.8672 92.2109 33.7109 92.3828 33.5703C92.5703 33.4297 92.7109 33.25 92.8047 33.0312C92.8828 33.0625 92.9531 33.0859 93.0156 33.1016C93.0938 33.1172 93.1719 33.125 93.25 33.125C93.3281 33.125 93.4062 33.1172 93.4844 33.1016C93.5781 33.0859 93.6641 33.0625 93.7422 33.0312C93.8672 33.2031 93.9609 33.3984 94.0234 33.6172C94.1016 33.8203 94.1953 34.0156 94.3047 34.2031C94.1641 34.4844 94 34.8203 93.8125 35.2109C93.625 35.6016 93.4219 35.9922 93.2031 36.3828C92.9844 36.7734 92.75 37.1484 92.5 37.5078C92.2656 37.8516 92.0312 38.1172 91.7969 38.3047C91.75 38.3516 91.6484 38.4062 91.4922 38.4688C91.3203 38.5938 91.1641 38.7109 91.0234 38.8203C90.8828 38.9453 90.75 39.0859 90.625 39.2422C90.1719 39.3828 89.7344 39.5703 89.3125 39.8047C88.9062 40.0391 88.5 40.2656 88.0938 40.4844C87.9062 40.4375 87.7031 40.4141 87.4844 40.4141C87.2969 40.4141 87.1094 40.4219 86.9219 40.4375C86.7344 40.4688 86.5312 40.4844 86.3125 40.4844C86.25 40.4062 86.1562 40.3516 86.0312 40.3203C85.9219 40.3047 85.8828 40.2266 85.9141 40.0859C85.3828 40.0547 84.9531 39.9062 84.625 39.6406C84.2969 39.3906 84.0156 39.0781 83.7812 38.7031C83.5625 38.3281 83.3828 37.9219 83.2422 37.4844C83.1016 37.0469 82.9531 36.625 82.7969 36.2188V36.1484C82.7969 36.0703 82.8281 36.0234 82.8906 36.0078C82.9531 35.9922 82.9844 35.9453 82.9844 35.8672C82.9844 35.8359 82.9766 35.8125 82.9609 35.7969C82.9141 35.625 82.875 35.4766 82.8438 35.3516C82.8125 35.2266 82.7969 35.0781 82.7969 34.9062C82.7969 34.6562 82.8125 34.4141 82.8438 34.1797C82.875 33.9297 82.8906 33.6797 82.8906 33.4297C82.8906 33.1797 82.8594 32.9609 82.7969 32.7734C82.8594 32.6953 82.9141 32.5938 82.9609 32.4688C82.9922 32.3281 83.0156 32.1875 83.0312 32.0469C83.0469 31.9062 83.0547 31.7656 83.0547 31.625C83.0703 31.4844 83.0938 31.3594 83.125 31.25C83.0625 31.0781 83.0078 30.9297 82.9609 30.8047C82.9141 30.6641 82.8906 30.5 82.8906 30.3125V30.1484C83.0469 29.8828 83.1797 29.6094 83.2891 29.3281C83.3984 29.0469 83.5156 28.7578 83.6406 28.4609V28.3906C83.6406 27.9375 83.625 27.4844 83.5938 27.0312C83.5625 26.5781 83.5469 26.125 83.5469 25.6719V25.2266C83.5469 25.0703 83.5547 24.9219 83.5703 24.7812C83.6953 24.7188 83.7891 24.6328 83.8516 24.5234C83.9141 24.4141 84.0078 24.3281 84.1328 24.2656H84.9062L85.0469 24.0312C85.0938 23.9531 85.125 23.8672 85.1406 23.7734C85.3125 23.7266 85.4766 23.6641 85.6328 23.5859C85.8047 23.4922 85.9609 23.3984 86.1016 23.3047C86.3203 23.1797 86.5156 23.0703 86.6875 22.9766C86.875 22.8672 87.0547 22.7812 87.2266 22.7188C87.4141 22.6406 87.6094 22.5781 87.8125 22.5312C88.0156 22.4844 88.25 22.4453 88.5156 22.4141C88.6406 22.4141 88.7188 22.3906 88.75 22.3438C88.7969 22.2969 88.8594 22.2422 88.9375 22.1797C89.125 22.2109 89.3125 22.2422 89.5 22.2734C89.6875 22.2891 89.875 22.2969 90.0625 22.2969C90.4375 22.2969 90.7891 22.2266 91.1172 22.0859C91.5859 22.0859 92.0469 22.0781 92.5 22.0625C92.9688 22.0469 93.4375 22.0391 93.9062 22.0391C94.3125 22.0391 94.7188 22.0547 95.125 22.0859C95.5312 22.1172 95.9297 22.1719 96.3203 22.25C96.4609 22.2031 96.6172 22.1797 96.7891 22.1797C96.9766 22.1797 97.1641 22.2031 97.3516 22.25C97.5547 22.2812 97.75 22.2812 97.9375 22.25C97.9531 22.4219 97.9922 22.5703 98.0547 22.6953C98.1328 22.8047 98.1719 22.9375 98.1719 23.0938ZM127.023 33.9219C126.992 34.1562 126.906 34.3359 126.766 34.4609C126.641 34.5859 126.492 34.7031 126.32 34.8125C126.242 34.7969 126.164 34.7891 126.086 34.7891C126.023 34.7734 125.953 34.7656 125.875 34.7656C125.391 34.75 124.93 34.8125 124.492 34.9531C124.07 35.0938 123.633 35.1953 123.18 35.2578C123.023 35.2891 122.875 35.3047 122.734 35.3047C122.609 35.2891 122.477 35.2969 122.336 35.3281C121.836 35.4062 121.305 35.4688 120.742 35.5156C120.18 35.5625 119.617 35.625 119.055 35.7031C118.492 35.7656 117.938 35.8516 117.391 35.9609C116.859 36.0547 116.359 36.1953 115.891 36.3828C115.844 36.3516 115.797 36.3203 115.75 36.2891C115.703 36.2422 115.648 36.2188 115.586 36.2188C115.43 36.2188 115.281 36.2422 115.141 36.2891C115 36.3359 114.859 36.3516 114.719 36.3359C114.562 36.4297 114.391 36.5 114.203 36.5469C114.031 36.5781 113.852 36.6094 113.664 36.6406C113.492 36.6562 113.32 36.6875 113.148 36.7344C112.977 36.7812 112.812 36.8672 112.656 36.9922C112.531 36.9297 112.375 36.8984 112.188 36.8984C112.016 36.8828 111.898 36.8203 111.836 36.7109C111.477 36.8828 111.094 36.9922 110.688 37.0391C110.297 37.0859 109.898 37.1016 109.492 37.0859C109.227 37.0703 108.922 37.0312 108.578 36.9688C108.234 36.9062 107.891 36.8203 107.547 36.7109C107.203 36.5859 106.883 36.4453 106.586 36.2891C106.289 36.1172 106.062 35.9141 105.906 35.6797C105.797 35.5234 105.719 35.3516 105.672 35.1641C105.625 34.9766 105.516 34.8359 105.344 34.7422C105.391 34.3828 105.445 34.0312 105.508 33.6875C105.57 33.3438 105.633 32.9922 105.695 32.6328C106.008 32.3672 106.305 32.0859 106.586 31.7891C106.867 31.4922 107.133 31.1797 107.383 30.8516C107.68 30.7109 107.953 30.5391 108.203 30.3359C108.469 30.1328 108.727 29.9297 108.977 29.7266C109.242 29.5078 109.5 29.2969 109.75 29.0938C110.016 28.8906 110.297 28.7109 110.594 28.5547C110.641 28.4453 110.703 28.3594 110.781 28.2969C110.875 28.2188 110.969 28.1484 111.062 28.0859C111.156 28.0078 111.242 27.9297 111.32 27.8516C111.398 27.7578 111.453 27.6484 111.484 27.5234C112.031 27.1953 112.508 26.7812 112.914 26.2812C113.32 25.7812 113.586 25.2188 113.711 24.5938C113.445 24.375 113.141 24.2344 112.797 24.1719C112.469 24.0938 112.125 24.0391 111.766 24.0078C111.453 23.9922 111.125 23.9922 110.781 24.0078C110.453 24.0234 110.117 24.0156 109.773 23.9844C109.43 24.0938 109.07 24.1641 108.695 24.1953C108.336 24.2266 107.977 24.2578 107.617 24.2891C107.258 24.3047 106.898 24.3516 106.539 24.4297C106.195 24.4922 105.859 24.6172 105.531 24.8047C105.469 24.8047 105.406 24.7969 105.344 24.7812C105.297 24.7656 105.242 24.7578 105.18 24.7578C104.68 24.7422 104.211 24.8438 103.773 25.0625C103.336 25.2656 102.906 25.4688 102.484 25.6719C102.453 25.7344 102.438 25.7812 102.438 25.8125C102.438 25.9062 102.453 26 102.484 26.0938C102.531 26.1719 102.555 26.2578 102.555 26.3516C102.539 26.3672 102.531 26.3828 102.531 26.3984C102.531 26.4141 102.523 26.4297 102.508 26.4453C102.492 26.5234 102.469 26.5938 102.438 26.6562C102.422 26.7188 102.398 26.7891 102.367 26.8672C102.195 27.3672 102.102 27.8594 102.086 28.3438C102.07 28.75 102.07 29.1484 102.086 29.5391C102.102 29.9297 102.102 30.3281 102.086 30.7344C102.055 31.2344 101.977 31.7031 101.852 32.1406C101.93 32.5156 102 32.9141 102.062 33.3359C102.125 33.7422 102.203 34.1484 102.297 34.5547C102.391 34.9609 102.5 35.3594 102.625 35.75C102.766 36.125 102.945 36.4844 103.164 36.8281C103.148 36.8594 103.156 36.8828 103.188 36.8984C103.219 36.9141 103.25 36.9219 103.281 36.9219H103.469C103.547 36.9219 103.578 36.9531 103.562 37.0156C103.594 37.0625 103.617 37.1094 103.633 37.1562C103.648 37.1875 103.68 37.2188 103.727 37.25C103.758 37.2969 103.758 37.3594 103.727 37.4375C103.711 37.75 103.633 38.0391 103.492 38.3047C103.352 38.5703 103.266 38.8594 103.234 39.1719C103.047 39.2188 102.875 39.2422 102.719 39.2422C102.453 39.2266 102.219 39.1484 102.016 39.0078C101.812 38.8828 101.625 38.7266 101.453 38.5391C101.281 38.3516 101.117 38.1641 100.961 37.9766C100.805 37.7734 100.633 37.6016 100.445 37.4609C100.336 37.0234 100.227 36.5391 100.117 36.0078C100.023 35.4766 99.8594 35.0234 99.625 34.6484C99.6875 34.5078 99.7188 34.3359 99.7188 34.1328C99.7344 33.8203 99.7031 33.5156 99.625 33.2188C99.5625 32.9062 99.5469 32.5938 99.5781 32.2812C99.5781 32.1094 99.5938 31.9375 99.625 31.7656C99.6719 31.5938 99.7031 31.4219 99.7188 31.25C99.7344 30.9844 99.7031 30.7266 99.625 30.4766C99.5625 30.2266 99.5391 29.9688 99.5547 29.7031C99.5703 29.5781 99.5938 29.4609 99.625 29.3516C99.6719 29.2266 99.7344 29.1172 99.8125 29.0234C99.7344 28.8359 99.7109 28.6562 99.7422 28.4844C99.7578 28.2188 99.7891 27.9688 99.8359 27.7344C99.8828 27.5 99.9141 27.2656 99.9297 27.0312C99.9297 26.9062 99.9219 26.7891 99.9062 26.6797C99.8906 26.5547 99.8672 26.4375 99.8359 26.3281L99.625 26.2578C99.5312 26.2578 99.4375 26.2812 99.3438 26.3281C99.2656 26.375 99.1953 26.4297 99.1328 26.4922C99.0703 26.5547 99.0156 26.6094 98.9688 26.6562C98.9219 26.6875 98.875 26.7031 98.8281 26.7031C98.7969 26.7031 98.7578 26.7031 98.7109 26.7031C98.6797 26.6875 98.6484 26.6797 98.6172 26.6797C98.5859 26.6797 98.5234 26.7109 98.4297 26.7734C98.3516 26.8359 98.25 26.9062 98.125 26.9844C98.0156 27.0469 97.9062 27.1172 97.7969 27.1953C97.6875 27.2578 97.6016 27.2969 97.5391 27.3125C97.3672 27.2812 97.2266 27.2266 97.1172 27.1484C97.0234 27.0547 96.9297 26.9688 96.8359 26.8906C96.7578 26.7969 96.6719 26.7188 96.5781 26.6562C96.4844 26.5781 96.3672 26.5469 96.2266 26.5625C96.1797 26.4688 96.1562 26.3672 96.1562 26.2578C96.1406 26.1484 96.1406 26.0391 96.1562 25.9297V25.5547C96.2656 25.3516 96.4141 25.1875 96.6016 25.0625C96.7734 24.9219 96.9609 24.8047 97.1641 24.7109L97.7734 24.4297C97.9766 24.3359 98.1641 24.2188 98.3359 24.0781H98.5469C98.8281 24.0938 99.0703 24.0391 99.2734 23.9141C99.4922 23.7891 99.6953 23.6484 99.8828 23.4922C100.07 23.3203 100.258 23.1484 100.445 22.9766C100.648 22.8047 100.867 22.6719 101.102 22.5781C101.273 22.6562 101.453 22.7266 101.641 22.7891C101.828 22.8359 102.023 22.8672 102.227 22.8828C102.43 22.8828 102.641 22.8516 102.859 22.7891C103.078 22.7266 103.25 22.6094 103.375 22.4375C103.453 22.4688 103.516 22.4922 103.562 22.5078C103.625 22.5078 103.695 22.5078 103.773 22.5078C104.008 22.5234 104.242 22.4922 104.477 22.4141C104.711 22.3203 104.938 22.2109 105.156 22.0859C105.469 22.1016 105.773 22.0859 106.07 22.0391C106.383 21.9766 106.688 21.9141 106.984 21.8516C107.297 21.7891 107.602 21.7344 107.898 21.6875C108.211 21.625 108.523 21.6016 108.836 21.6172C109.352 21.6328 109.859 21.5859 110.359 21.4766C110.859 21.3672 111.367 21.3281 111.883 21.3594C112.242 21.375 112.594 21.4062 112.938 21.4531C113.297 21.4844 113.656 21.4922 114.016 21.4766C114.219 21.5703 114.398 21.6562 114.555 21.7344C114.727 21.7969 114.938 21.8125 115.188 21.7812C115.688 22.2031 116.141 22.6953 116.547 23.2578V23.6562C116.531 24.0156 116.469 24.3672 116.359 24.7109C116.25 25.0547 116.117 25.3984 115.961 25.7422C115.82 26.0703 115.664 26.3984 115.492 26.7266C115.32 27.0391 115.156 27.3516 115 27.6641C113.984 28.5859 112.969 29.5 111.953 30.4062C110.938 31.3125 109.891 32.1875 108.812 33.0312C108.781 33.1875 108.734 33.3281 108.672 33.4531C108.625 33.5781 108.594 33.7109 108.578 33.8516C108.578 33.9297 108.586 33.9922 108.602 34.0391C108.711 34.0703 108.805 34.1328 108.883 34.2266C108.977 34.3047 109.008 34.4141 108.977 34.5547H109.188C109.266 34.5547 109.305 34.5859 109.305 34.6484L109.68 34.6719C110.273 34.7031 110.867 34.6875 111.461 34.625C112.055 34.5625 112.648 34.4922 113.242 34.4141C113.852 34.3359 114.453 34.2656 115.047 34.2031C115.641 34.125 116.234 34.0781 116.828 34.0625C116.969 34.0156 117.117 33.9766 117.273 33.9453C117.43 33.9141 117.57 33.8516 117.695 33.7578H117.766C117.875 33.7578 117.953 33.7891 118 33.8516C118.062 33.9141 118.148 33.9531 118.258 33.9688C118.336 33.9688 118.414 33.9531 118.492 33.9219C118.586 33.8906 118.68 33.8672 118.773 33.8516C118.992 33.7891 119.219 33.75 119.453 33.7344C119.703 33.7188 119.945 33.6953 120.18 33.6641C121.086 33.5859 121.984 33.5391 122.875 33.5234C123.766 33.4922 124.656 33.375 125.547 33.1719C125.625 33.2812 125.734 33.3594 125.875 33.4062C126.016 33.4375 126.164 33.4766 126.32 33.5234C126.477 33.5547 126.617 33.5938 126.742 33.6406C126.883 33.6875 126.977 33.7812 127.023 33.9219ZM132.039 35.0469C132.039 35.3125 131.969 35.5469 131.828 35.75C131.703 35.9375 131.656 36.1719 131.688 36.4531C131.469 36.5781 131.289 36.7422 131.148 36.9453C131.008 37.1484 130.875 37.3594 130.75 37.5781C129.719 38.25 128.609 38.7891 127.422 39.1953C126.25 39.6172 125.039 39.8281 123.789 39.8281C123.711 39.8281 123.641 39.7891 123.578 39.7109C123.516 39.6484 123.453 39.5781 123.391 39.5C123.328 39.4219 123.258 39.3438 123.18 39.2656C123.117 39.2031 123.039 39.1719 122.945 39.1719C122.836 39.1719 122.75 39.1953 122.688 39.2422C122.688 39.2109 122.688 39.1797 122.688 39.1484C122.703 39.1328 122.711 39.1094 122.711 39.0781C122.711 38.8906 122.688 38.6953 122.641 38.4922C122.594 38.3047 122.57 38.1172 122.57 37.9297C122.57 37.7109 122.609 37.5312 122.688 37.3906H122.969C123.125 37.3906 123.273 37.3828 123.414 37.3672C123.57 37.3359 123.734 37.3203 123.906 37.3203C124.078 37.3203 124.234 37.3672 124.375 37.4609C125.234 37.4297 126.047 37.2734 126.812 36.9922C127.594 36.6953 128.383 36.4062 129.18 36.125C129.305 35.9531 129.375 35.7656 129.391 35.5625C129.422 35.3438 129.484 35.1406 129.578 34.9531C129.172 34.6094 128.758 34.3438 128.336 34.1562C127.93 33.9531 127.453 33.8828 126.906 33.9453C126.578 33.7422 126.227 33.625 125.852 33.5938C125.492 33.5625 125.125 33.5156 124.75 33.4531C124.656 33.4375 124.555 33.4219 124.445 33.4062C124.352 33.375 124.25 33.3594 124.141 33.3594C124.062 33.3594 123.984 33.3828 123.906 33.4297C123.844 33.4609 123.828 33.5156 123.859 33.5938C123.781 33.4688 123.672 33.3984 123.531 33.3828C123.406 33.3516 123.297 33.2891 123.203 33.1953C122.703 33.1641 122.266 33.0781 121.891 32.9375C121.516 32.7812 121.102 32.6094 120.648 32.4219C120.523 32.375 120.398 32.3438 120.273 32.3281C120.164 32.2969 120.055 32.25 119.945 32.1875C119.664 32.0469 119.438 31.8594 119.266 31.625C119.094 31.3906 118.961 31.1328 118.867 30.8516C118.758 30.5547 118.68 30.25 118.633 29.9375C118.586 29.625 118.539 29.3359 118.492 29.0703C118.633 28.8203 118.766 28.5625 118.891 28.2969C119 28.0312 119.094 27.75 119.172 27.4531C119.266 27.4062 119.359 27.3672 119.453 27.3359C119.547 27.3047 119.648 27.2656 119.758 27.2188C119.742 27.1875 119.734 27.1484 119.734 27.1016C119.734 27.0234 119.758 26.9453 119.805 26.8672C119.867 26.7891 119.883 26.7109 119.852 26.6328C120.195 26.3203 120.523 26 120.836 25.6719C121.164 25.3281 121.445 24.9531 121.68 24.5469C121.914 24.4688 122.102 24.3516 122.242 24.1953C122.383 24.0391 122.523 23.8828 122.664 23.7266C122.805 23.5547 122.961 23.4062 123.133 23.2812C123.305 23.1406 123.523 23.0547 123.789 23.0234C123.852 22.9141 123.938 22.8281 124.047 22.7656C124.156 22.6875 124.266 22.6172 124.375 22.5547C124.484 22.4922 124.586 22.4219 124.68 22.3438C124.773 22.2656 124.844 22.1562 124.891 22.0156C125.141 22.0156 125.367 21.9688 125.57 21.875C125.789 21.7812 126 21.6797 126.203 21.5703C126.406 21.4609 126.609 21.3594 126.812 21.2656C127.031 21.1719 127.266 21.125 127.516 21.125C127.578 21.125 127.641 21.1328 127.703 21.1484C127.766 21.1484 127.836 21.1562 127.914 21.1719C128.023 21.2812 128.094 21.4141 128.125 21.5703C128.172 21.7109 128.203 21.8672 128.219 22.0391C128.234 22.2109 128.242 22.3828 128.242 22.5547C128.258 22.7266 128.289 22.8828 128.336 23.0234C128.195 23.2891 128.039 23.5547 127.867 23.8203C127.711 24.0859 127.5 24.2891 127.234 24.4297H127.188C127.078 24.4453 126.977 24.4219 126.883 24.3594C126.789 24.2969 126.68 24.2656 126.555 24.2656C126.477 24.2656 126.414 24.2891 126.367 24.3359L126.25 24.4531C126.219 24.4844 126.172 24.5156 126.109 24.5469C126.062 24.5781 125.992 24.5781 125.898 24.5469C125.68 24.625 125.594 24.7578 125.641 24.9453C125.344 24.9766 125.094 25.0703 124.891 25.2266C124.688 25.3672 124.5 25.5312 124.328 25.7188C124.156 25.8906 123.984 26.0547 123.812 26.2109C123.641 26.3516 123.438 26.4297 123.203 26.4453C122.938 26.9141 122.609 27.3281 122.219 27.6875C121.844 28.0469 121.531 28.4531 121.281 28.9062C121.328 29.0312 121.359 29.1641 121.375 29.3047C121.391 29.4453 121.414 29.5938 121.445 29.75C121.586 29.9375 121.75 30.1016 121.938 30.2422C122.141 30.3828 122.336 30.5234 122.523 30.6641H122.594C122.906 30.6641 123.195 30.7266 123.461 30.8516C123.727 30.9609 124.008 31.0156 124.305 31.0156C124.461 31.0156 124.594 30.9844 124.703 30.9219C125.109 31.0156 125.508 31.0938 125.898 31.1562C126.305 31.2188 126.711 31.2656 127.117 31.2969C127.32 31.3281 127.523 31.3438 127.727 31.3438C127.945 31.3438 128.148 31.3672 128.336 31.4141C128.508 31.4609 128.68 31.5234 128.852 31.6016C129.023 31.6641 129.195 31.7344 129.367 31.8125C129.727 31.9688 130.062 32.1406 130.375 32.3281C130.703 32.5156 130.992 32.7422 131.242 33.0078C131.492 33.2578 131.688 33.5547 131.828 33.8984C131.969 34.2266 132.039 34.6094 132.039 35.0469Z",
    fill: "black"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgLogo);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo.8305d83.svg");


/***/ }),

/***/ "./assets/icons/thumbs.svg":
/*!*********************************!*\
  !*** ./assets/icons/thumbs.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _circle, _mask, _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgThumbs(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 141,
    height: 141,
    viewBox: "0 0 141 141",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 70.5,
    cy: 70.5,
    r: 70.5,
    fill: "#B1B4B6"
  })), _mask || (_mask = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 141,
    height: 141
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 70.5,
    cy: 70.5,
    r: 70.5,
    fill: "#4C2C92"
  }))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    mask: "url(#mask0)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0 99H12.7273V61.2H0V99ZM70 64.35C70 60.885 67.1364 58.05 63.6364 58.05H43.5591L46.5818 43.6545L46.6773 42.6465C46.6773 41.355 46.1364 40.158 45.2773 39.3075L41.9045 36L20.9682 56.7585C19.7909 57.8925 19.0909 59.4675 19.0909 61.2V92.7C19.0909 96.165 21.9545 99 25.4545 99H54.0909C56.7318 99 58.9909 97.425 59.9454 95.157L69.5545 72.9495C69.8409 72.225 70 71.469 70 70.65V64.35Z",
    fill: "white"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgThumbs);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQxIiBoZWlnaHQ9IjE0MSIgdmlld0JveD0iMCAwIDE0MSAxNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjcwLjUiIGN5PSI3MC41IiByPSI3MC41IiBmaWxsPSIjQjFCNEI2Ii8+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE0MSIgaGVpZ2h0PSIxNDEiPgo8Y2lyY2xlIGN4PSI3MC41IiBjeT0iNzAuNSIgcj0iNzAuNSIgZmlsbD0iIzRDMkM5MiIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTAgOTlIMTIuNzI3M1Y2MS4ySDBWOTlaTTcwIDY0LjM1QzcwIDYwLjg4NSA2Ny4xMzY0IDU4LjA1IDYzLjYzNjQgNTguMDVINDMuNTU5MUw0Ni41ODE4IDQzLjY1NDVMNDYuNjc3MyA0Mi42NDY1QzQ2LjY3NzMgNDEuMzU1IDQ2LjEzNjQgNDAuMTU4IDQ1LjI3NzMgMzkuMzA3NUw0MS45MDQ1IDM2TDIwLjk2ODIgNTYuNzU4NUMxOS43OTA5IDU3Ljg5MjUgMTkuMDkwOSA1OS40Njc1IDE5LjA5MDkgNjEuMlY5Mi43QzE5LjA5MDkgOTYuMTY1IDIxLjk1NDUgOTkgMjUuNDU0NSA5OUg1NC4wOTA5QzU2LjczMTggOTkgNTguOTkwOSA5Ny40MjUgNTkuOTQ1NCA5NS4xNTdMNjkuNTU0NSA3Mi45NDk1QzY5Ljg0MDkgNzIuMjI1IDcwIDcxLjQ2OSA3MCA3MC42NVY2NC4zNVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "../../../node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../../../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _vam_shared_styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vam/shared/styles/theme */ "../../../libs/shared/src/lib/styles/theme/index.ts");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/main.tsx";







react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _vam_shared_styles_theme__WEBPACK_IMPORTED_MODULE_4__["theme"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ "./pages/Context/ContextPage.tsx":
/*!***************************************!*\
  !*** ./pages/Context/ContextPage.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextPage; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _vam_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vam/shared/components */ "../../../libs/shared/src/lib/components/index.ts");
/* harmony import */ var _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vam/shared/styles/theme/config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/* harmony import */ var _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/thumbs.svg */ "./assets/icons/thumbs.svg");
/* harmony import */ var _vam_shared_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vam/shared/context */ "../../../libs/shared/src/lib/context/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Context/ContextPage.tsx";







function ContextPage() {
  const {
    likes,
    incrementLikes
  } = Object(_vam_shared_context__WEBPACK_IMPORTED_MODULE_4__["useLikesContext"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
      title: 'Context Page',
      backgroundColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].primary,
      count: likes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_1__["Likes"], {
        likesCount: likes,
        likesImageSource: _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
        likesCountBackground: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].primary,
        likesCountColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].whiteColor,
        clickHandler: () => incrementLikes()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/Context/index.tsx":
/*!*********************************!*\
  !*** ./pages/Context/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
/* harmony import */ var _ContextPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextPage */ "./pages/Context/ContextPage.tsx");
/* harmony import */ var _vam_shared_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vam/shared/context */ "../../../libs/shared/src/lib/context/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Context/index.tsx";



function Context() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_vam_shared_context__WEBPACK_IMPORTED_MODULE_1__["LikesProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ContextPage__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/HOC/HOCPage.tsx":
/*!*******************************!*\
  !*** ./pages/HOC/HOCPage.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HOCPage; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _vam_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vam/shared/components */ "../../../libs/shared/src/lib/components/index.ts");
/* harmony import */ var _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vam/shared/styles/theme/config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/* harmony import */ var _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/thumbs.svg */ "./assets/icons/thumbs.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/HOC/HOCPage.tsx";






function HOCPage({
  likesCount,
  incrementLikes
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
      title: 'HOC Page',
      backgroundColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].visitedLinkColor,
      count: likesCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_1__["Likes"], {
        likesCount,
        likesImageSource: _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
        likesCountBackground: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].visitedLinkColor,
        likesCountColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].whiteColor,
        clickHandler: () => incrementLikes()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/HOC/index.tsx":
/*!*****************************!*\
  !*** ./pages/HOC/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HOC; });
/* harmony import */ var _HOCPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HOCPage */ "./pages/HOC/HOCPage.tsx");
/* harmony import */ var _vam_shared_HOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vam/shared/HOC */ "../../../libs/shared/src/lib/HOC/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/HOC/index.tsx";



function HOC() {
  const EnhanceHOCComponent = Object(_vam_shared_HOC__WEBPACK_IMPORTED_MODULE_1__["likesHOC"])(_HOCPage__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EnhanceHOCComponent, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./pages/Home/Home.tsx":
/*!*****************************!*\
  !*** ./pages/Home/Home.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _vam_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vam/shared/components */ "../../../libs/shared/src/lib/components/index.ts");
/* harmony import */ var _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vam/shared/styles/theme/config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Home/Home.tsx";





function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
      title: 'Home Page',
      backgroundColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].secondary
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        children: "This is a Home page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/Home/index.tsx":
/*!******************************!*\
  !*** ./pages/Home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./pages/Home/Home.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Home/index.tsx";


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./pages/Hooks/HooksPage.tsx":
/*!***********************************!*\
  !*** ./pages/Hooks/HooksPage.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HooksPage; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _vam_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vam/shared/components */ "../../../libs/shared/src/lib/components/index.ts");
/* harmony import */ var _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vam/shared/styles/theme/config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/* harmony import */ var _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/thumbs.svg */ "./assets/icons/thumbs.svg");
/* harmony import */ var _vam_shared_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vam/shared/hooks */ "../../../libs/shared/src/lib/hooks/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Hooks/HooksPage.tsx";







function HooksPage() {
  const {
    likes,
    incrementLikes
  } = Object(_vam_shared_hooks__WEBPACK_IMPORTED_MODULE_4__["useLikes"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
      title: 'Hooks Page',
      backgroundColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].successColor,
      count: likes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_1__["Likes"], {
        likesCount: likes,
        likesImageSource: _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
        likesCountBackground: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].successColor,
        likesCountColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_2__["Colour"].whiteColor,
        clickHandler: () => incrementLikes()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/Hooks/index.tsx":
/*!*******************************!*\
  !*** ./pages/Hooks/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hooks; });
/* harmony import */ var _HooksPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HooksPage */ "./pages/Hooks/HooksPage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Hooks/index.tsx";


function Hooks() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_HooksPage__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./pages/NotFound/index.tsx":
/*!**********************************!*\
  !*** ./pages/NotFound/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var _assets_icons_404_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/404.png */ "./assets/icons/404.png");
/* harmony import */ var _assets_icons_404_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_404_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/NotFound/index.tsx";



const NotFoundWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NotFound__NotFoundWrapper",
  componentId: "sc-11kg18a-0"
})(["display:flex;flex-direction:column;width:100%;height:calc(100vh - 96px);justify-content:center;align-items:center;"]);
function NotFound() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NotFoundWrapper, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      src: _assets_icons_404_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      alt: "Page Not Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/Redux/ReduxPage.tsx":
/*!***********************************!*\
  !*** ./pages/Redux/ReduxPage.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReduxPage; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _vam_shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vam/shared/components */ "../../../libs/shared/src/lib/components/index.ts");
/* harmony import */ var _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vam/shared/styles/theme/config */ "../../../libs/shared/src/lib/styles/theme/config.ts");
/* harmony import */ var _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/thumbs.svg */ "./assets/icons/thumbs.svg");
/* harmony import */ var _vam_shared_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vam/shared/actions */ "../../../libs/shared/src/lib/store/actions/index.ts");
/* harmony import */ var _vam_shared_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vam/shared/selectors */ "../../../libs/shared/src/lib/store/selectors/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Redux/ReduxPage.tsx";









function ReduxPage() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const count = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(_vam_shared_selectors__WEBPACK_IMPORTED_MODULE_6__["likesSelector"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
      title: 'Redux Page',
      backgroundColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_3__["Colour"].alertColor,
      count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_vam_shared_components__WEBPACK_IMPORTED_MODULE_2__["Likes"], {
        likesCount: count,
        likesImageSource: _assets_icons_thumbs_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
        likesCountBackground: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_3__["Colour"].alertColor,
        likesCountColor: _vam_shared_styles_theme_config__WEBPACK_IMPORTED_MODULE_3__["Colour"].whiteColor,
        clickHandler: () => dispatch(Object(_vam_shared_actions__WEBPACK_IMPORTED_MODULE_5__["likesIncrement"])())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./pages/Redux/index.tsx":
/*!*******************************!*\
  !*** ./pages/Redux/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Redux; });
/* harmony import */ var _ReduxPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReduxPage */ "./pages/Redux/ReduxPage.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _vam_shared_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vam/shared/store */ "../../../libs/shared/src/lib/store/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/pages/Redux/index.tsx";




function Redux() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _vam_shared_store__WEBPACK_IMPORTED_MODULE_2__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ReduxPage__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vaibhavshringarpure/Projects/VAM/Nx-Projects/VAM-Base/apps/starter/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map