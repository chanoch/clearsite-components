(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("clearsite-components", ["react"], factory);
	else if(typeof exports === 'object')
		exports["clearsite-components"] = factory(require("react"));
	else
		root["clearsite-components"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
    var title = _ref.title,
        strapline = _ref.strapline;

    return _react2.default.createElement(
        "header",
        { className: "header__header" },
        _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
                "span",
                { className: "header__strapline order-2 order-md-1" },
                strapline
            ),
            _react2.default.createElement(
                "a",
                { href: "/", className: "header__title mr-0 order-1 order-md-2" },
                title
            )
        )
    );
}

exports.default = Header;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * Create a list of menu items from the menuItems prop. 
 * 
 * The "active" prop identifies which page the user is currently at.
 * 
 * Will output:
 * 
    <nav className="navigation__nav">
        <a class="navigation__link navigation__active" href={item.link}>{item.linkText}</a>
        <a class="navigation__link" href={item.link}>{item.linkText}</a>
        <a class="navigation__link" href={item.link}>{item.linkText}</a>
    </nav>
 */

var Navigation = function Navigation(_ref) {
    var active = _ref.active,
        menuItems = _ref.menuItems;

    return _react2.default.createElement(
        "nav",
        { className: "navigation__nav" },
        menuItems.map(function (item) {
            console.log(item);
            var classes = "navigation__link";
            classes += item.key === active ? " navigation__active" : "";
            return _react2.default.createElement(NavItem, { key: item.key, classes: classes, link: item.link, linkText: item.linkText });
        })
    );
};

exports.default = Navigation;


var NavItem = function NavItem(_ref2) {
    var classes = _ref2.classes,
        link = _ref2.link,
        linkText = _ref2.linkText;

    return _react2.default.createElement(
        "a",
        { className: classes, href: link },
        linkText
    );
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Divider;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Divider line (like <hr>)
 * 
 * Will output <div class="divider__line"></div>
 */
function Divider() {
    return _react2.default.createElement("div", { className: "divider__line" });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DefaultLayout = __webpack_require__(5);

var _DefaultLayout2 = _interopRequireDefault(_DefaultLayout);

var _Declaration = __webpack_require__(6);

var _Declaration2 = _interopRequireDefault(_Declaration);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _Divider = __webpack_require__(3);

var _Divider2 = _interopRequireDefault(_Divider);

var _ImageLink = __webpack_require__(7);

var _ImageLink2 = _interopRequireDefault(_ImageLink);

var _PhoneLink = __webpack_require__(8);

var _PhoneLink2 = _interopRequireDefault(_PhoneLink);

var _Navigation = __webpack_require__(2);

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//components


// sections
var Csc = {
    DefaultLayout: _DefaultLayout2.default,

    Declaration: _Declaration2.default,
    Header: _Header2.default,

    Divider: _Divider2.default,
    ImageLink: _ImageLink2.default,
    PhoneLink: _PhoneLink2.default,
    Navigation: _Navigation2.default
}; // page components


module.exports = Csc;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = __webpack_require__(2);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Divider = __webpack_require__(3);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a general page layout with a header, a navigation section and 
 * a wrapper for the main body of the page.
 * 
 * Any children of this component will be included insite the main body wrapper
 * 
 * It takes a config which contains a site name {config.title} and website {config.strapline} 
 * plus a list of {config.menuItems} and the currently {active} menu item.
 */
var DefaultLayout = function DefaultLayout(_ref) {
    var active = _ref.active,
        config = _ref.config,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { title: config.title,
            strapline: config.strapline }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_Navigation2.default, { active: active, menuItems: config.menuItems }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
            'section',
            { className: 'section' },
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        children
                    )
                )
            )
        )
    );
};

exports.default = DefaultLayout;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A block containing a title and text
 * 
 * Styles:
 *   As defined below plus it is assumed that 'block' is defined at global level
 * 
 * The resultant component will output:
 * 
 * <div class="block">
 *  <div class="declaration__container">
 *    <h2>{title}</h2>
 *    <p class="declaration__text">{text}</p>
 *    <div>
 *    if(bg) {
 *      <div class="declaration__bg_highlight"/>
 *    } else {
 *      <div class="declaration__bg_standard"/>
 *    }
 *  </div>
 * </div>
 * 
 * @prop {string} title - the block heading
 * @prop {string} text - a paragraph of text
 * @prop {boolean} bg - whether to have a background color
 */
var Declaration = function Declaration(_ref) {
    var title = _ref.title,
        text = _ref.text,
        bg = _ref.bg;

    return _react2.default.createElement(
        "div",
        { className: "block" },
        _react2.default.createElement(
            "div",
            { className: "declaration__container" },
            _react2.default.createElement(
                "h2",
                null,
                title
            ),
            _react2.default.createElement(
                "p",
                { className: "declaration__text" },
                text
            )
        ),
        bg && _react2.default.createElement("div", { className: "declaration__bg_highlight" }),
        !bg && _react2.default.createElement("div", { className: "declaration__bg_standard" })
    );
};

exports.default = Declaration;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders an image with a surrounding hyperlink
 * 
 * Styles used are:
 * 
 * a {
 * }
 * 
 * img {
 * }
 * 
 * This will output the following block:
 * 
 *  <a href={link} title={linkTitle}>
        <img src={src} alt={altText} />
    </a>
 */
var ImageLink = function ImageLink(_ref) {
    var link = _ref.link,
        linkTitle = _ref.linkTitle,
        src = _ref.src,
        altText = _ref.altText;

    return _react2.default.createElement(
        'a',
        { href: link, title: linkTitle },
        _react2.default.createElement('img', { src: src, alt: altText })
    );
};

exports.default = ImageLink;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhoneLink = function PhoneLink(_ref) {
    var number = _ref.number;

    var telLink = "tel:" + number;
    return _react2.default.createElement(
        "a",
        { href: telLink },
        number
    );
};

exports.default = PhoneLink;

/***/ })
/******/ ]);
});
//# sourceMappingURL=clearsite-components.js.map