"use strict";
(self["webpackChunkbattle_ship"] = self["webpackChunkbattle_ship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/animate-pop.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/animate-pop.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.animate-pop {
  animation-duration: 0.5s;
  animation-name: animate-pop;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
}

@keyframes animate-pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.animate-pop-loop {
  animation-duration: 0.5s;
  animation-name: animate-pop-loop;
  animation-iteration-count: infinite;
}

@keyframes animate-pop-loop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  50% {
    opacity: 1;
    transform: scale(1, 1);
  }

  100% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
}
`, "",{"version":3,"sources":["webpack://./src/animate-pop.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,2BAA2B;EAC3B,+DAA+D;AACjE;;AAEA;EACE;IACE,UAAU;IACV,0BAA0B;EAC5B;;EAEA;IACE,UAAU;IACV,sBAAsB;EACxB;AACF;;AAEA;EACE,wBAAwB;EACxB,gCAAgC;EAChC,mCAAmC;AACrC;;AAEA;EACE;IACE,UAAU;IACV,0BAA0B;EAC5B;;EAEA;IACE,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,UAAU;IACV,0BAA0B;EAC5B;AACF","sourcesContent":[".animate-pop {\n  animation-duration: 0.5s;\n  animation-name: animate-pop;\n  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);\n}\n\n@keyframes animate-pop {\n  0% {\n    opacity: 0;\n    transform: scale(0.5, 0.5);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n}\n\n.animate-pop-loop {\n  animation-duration: 0.5s;\n  animation-name: animate-pop-loop;\n  animation-iteration-count: infinite;\n}\n\n@keyframes animate-pop-loop {\n  0% {\n    opacity: 0;\n    transform: scale(0.5, 0.5);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale(0.5, 0.5);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/battleShipPattern_200px_light65.png */ "./src/img/battleShipPattern_200px_light65.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#app-bg {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
}

.btn-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
  > * {
    flex: none;
    font-family: "Lilita One";
    font-size: 1rem;
  }
  > button,
  a {
    padding: 0.2rem 0.5rem;
    color: var(--blue);
    background-color: white;
    border: 2px solid var(--blue);
    border-radius: 10px;
    margin-left: 0.7rem;
  }
}

#ai-label {
  color: gray;
  border: 2px solid gray;

  margin-left: 0;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;

  background-color: white;
}

#ai-label.on {
  color: var(--red);
  border: 2px solid var(--red);
}

a:link {
  text-decoration: none;
}
`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,yDAAkE;EAClE,yBAAyB;;EAEzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB;IACE,UAAU;IACV,yBAAyB;IACzB,eAAe;EACjB;EACA;;IAEE,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;EACrB;AACF;;AAEA;EACE,WAAW;EACX,sBAAsB;;EAEtB,cAAc;EACd,sBAAsB;EACtB,mBAAmB;;EAEnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["#app-bg {\n  position: relative;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-image: url(\"./img/battleShipPattern_200px_light65.png\");\n  background-repeat: repeat;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.2rem;\n}\n\n.btn-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: -0.5rem;\n  > * {\n    flex: none;\n    font-family: \"Lilita One\";\n    font-size: 1rem;\n  }\n  > button,\n  a {\n    padding: 0.2rem 0.5rem;\n    color: var(--blue);\n    background-color: white;\n    border: 2px solid var(--blue);\n    border-radius: 10px;\n    margin-left: 0.7rem;\n  }\n}\n\n#ai-label {\n  color: gray;\n  border: 2px solid gray;\n\n  margin-left: 0;\n  padding: 0.2rem 0.5rem;\n  border-radius: 10px;\n\n  background-color: white;\n}\n\n#ai-label.on {\n  color: var(--red);\n  border: 2px solid var(--red);\n}\n\na:link {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/color.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/color.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --blue: #0088aa;
  --red: #d44848;
}
`, "",{"version":3,"sources":["webpack://./src/color.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,cAAc;AAChB","sourcesContent":[":root {\n  --blue: #0088aa;\n  --red: #d44848;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/lilitaone/lilitaone.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/lilitaone/lilitaone.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./lilita-one-v15-latin-regular.woff2 */ "./src/fonts/lilitaone/lilita-one-v15-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* lilita-one-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: "Lilita One";
  font-style: normal;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
`, "",{"version":3,"sources":["webpack://./src/fonts/lilitaone/lilitaone.css"],"names":[],"mappings":"AAAA,+BAA+B;AAC/B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,4DAAgE,EAAE,4DAA4D;AAChI","sourcesContent":["/* lilita-one-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Lilita One\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./lilita-one-v15-latin-regular.woff2\") format(\"woff2\"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/gameEnd.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/gameEnd.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/battleShipPattern_200px_dark50.png */ "./src/img/battleShipPattern_200px_dark50.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.win-screen {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  justify-content: center;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: repeat;
}
`, "",{"version":3,"sources":["webpack://./src/gameEnd.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,yDAAiE;EACjE,yBAAyB;AAC3B","sourcesContent":[".win-screen {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"./img/battleShipPattern_200px_dark50.png\");\n  background-repeat: repeat;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/icon/icon.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/icon/icon.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  > svg {
    width: 28px;
    height: 28px;
  }
}

.p1-icon {
  > svg {
    > g {
      > path {
        fill: var(--blue);
      }
    }
  }
}

.p2-icon {
  > svg {
    > g {
      > path {
        fill: var(--red);
      }
    }
  }
}

.github-icon {
  width: 40px;
  height: 40px;
  position: relative;

  > svg {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > path {
      fill: black;
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/icon/icon.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE;IACE;MACE;QACE,iBAAiB;MACnB;IACF;EACF;AACF;;AAEA;EACE;IACE;MACE;QACE,gBAAgB;MAClB;IACF;EACF;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;;EAElB;IACE,SAAS;IACT,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC;MACE,WAAW;IACb;EACF;AACF","sourcesContent":[".icon {\n  > svg {\n    width: 28px;\n    height: 28px;\n  }\n}\n\n.p1-icon {\n  > svg {\n    > g {\n      > path {\n        fill: var(--blue);\n      }\n    }\n  }\n}\n\n.p2-icon {\n  > svg {\n    > g {\n      > path {\n        fill: var(--red);\n      }\n    }\n  }\n}\n\n.github-icon {\n  width: 40px;\n  height: 40px;\n  position: relative;\n\n  > svg {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    > path {\n      fill: black;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modal/modal.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modal/modal.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/battleShipPattern_200px_dark50.png */ "./src/img/battleShipPattern_200px_dark50.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: repeat;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  justify-content: center;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/modal/modal.css"],"names":[],"mappings":"AAAA;EACE,yDAAkE;EAClE,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[".modal {\n  background-image: url(\"../img/battleShipPattern_200px_dark50.png\");\n  background-repeat: repeat;\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  justify-content: center;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/playerDiv.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/playerDiv.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.player-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
#p1-div {
  > .board-container {
    background-color: var(--blue);
    border-right: 4px solid var(--blue);
    border-bottom: 4px solid var(--blue);
  }
}
#p2-div {
  > .board-container {
    background-color: var(--red);
    border-right: 4px solid var(--red);
    border-bottom: 4px solid var(--red);
  }
}

.board-container {
  position: relative;

  width: 22rem;
  height: 22rem;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  border-radius: 10px;
}

.empty {
  grid-area: 1;
}

.xlabel {
  grid-area: 1/2/2/12;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  font-size: 1.2rem;
}

.ylabel {
  grid-area: 2/1/12/2;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
}

.xlabel,
.ylabel {
  color: white;
  font-family: "Lilita One";
}

.cell-container {
  grid-area: 2/2/12/12;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.cell-container {
  gap: 1px;
  > * {
    background-color: white;
  }
}

.label-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cell {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  > * {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
  }
}
`, "",{"version":3,"sources":["webpack://./src/playerDiv.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE;IACE,6BAA6B;IAC7B,mCAAmC;IACnC,oCAAoC;EACtC;AACF;AACA;EACE;IACE,4BAA4B;IAC5B,kCAAkC;IAClC,mCAAmC;EACrC;AACF;;AAEA;EACE,kBAAkB;;EAElB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,QAAQ;EACR,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mCAAmC;AACrC;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,QAAQ;EACR;IACE,uBAAuB;EACzB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,qBAAqB;EACvB;AACF","sourcesContent":[".player-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n#p1-div {\n  > .board-container {\n    background-color: var(--blue);\n    border-right: 4px solid var(--blue);\n    border-bottom: 4px solid var(--blue);\n  }\n}\n#p2-div {\n  > .board-container {\n    background-color: var(--red);\n    border-right: 4px solid var(--red);\n    border-bottom: 4px solid var(--red);\n  }\n}\n\n.board-container {\n  position: relative;\n\n  width: 22rem;\n  height: 22rem;\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: repeat(11, 1fr);\n  border-radius: 10px;\n}\n\n.empty {\n  grid-area: 1;\n}\n\n.xlabel {\n  grid-area: 1/2/2/12;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  font-size: 1.2rem;\n}\n\n.ylabel {\n  grid-area: 2/1/12/2;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.xlabel,\n.ylabel {\n  color: white;\n  font-family: \"Lilita One\";\n}\n\n.cell-container {\n  grid-area: 2/2/12/12;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.cell-container {\n  gap: 1px;\n  > * {\n    background-color: white;\n  }\n}\n\n.label-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cell {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  > * {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/resetStyle.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/resetStyle.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`, "",{"version":3,"sources":["webpack://./src/resetStyle.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;;;;;;;;;EAUE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;AACd","sourcesContent":["html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_resetStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./resetStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/resetStyle.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_lilitaone_lilitaone_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./fonts/lilitaone/lilitaone.css */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/lilitaone/lilitaone.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_playerDiv_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./playerDiv.css */ "./node_modules/css-loader/dist/cjs.js!./src/playerDiv.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_icon_icon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./icon/icon.css */ "./node_modules/css-loader/dist/cjs.js!./src/icon/icon.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./modal/modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/modal/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameEnd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./gameEnd.css */ "./node_modules/css-loader/dist/cjs.js!./src/gameEnd.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_svgText_svgText_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./svgText/svgText.css */ "./node_modules/css-loader/dist/cjs.js!./src/svgText/svgText.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./color.css */ "./node_modules/css-loader/dist/cjs.js!./src/color.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggleSwitch_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./toggleSwitch.css */ "./node_modules/css-loader/dist/cjs.js!./src/toggleSwitch.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animate_pop_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./animate-pop.css */ "./node_modules/css-loader/dist/cjs.js!./src/animate-pop.css");
// Imports













var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_resetStyle_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_lilitaone_lilitaone_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_playerDiv_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_icon_icon_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_gameEnd_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_svgText_svgText_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_toggleSwitch_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animate_pop_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*reset style*/

/*bold font*/

/*Board Container*/

/*icon*/

/*modal*/

/*app, general apperance*/

/*end game msg*/

/*svg font*/

/*color variables*/

/*toggleSwitch*/

/*pop animation*/
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;;AAGd,YAAY;;AAGZ,kBAAkB;;AAGlB,OAAO;;AAGP,QAAQ;;AAGR,yBAAyB;;AAGzB,eAAe;;AAGf,WAAW;;AAGX,kBAAkB;;AAGlB,eAAe;;AAGf,gBAAgB","sourcesContent":["/*reset style*/\n@import \"./resetStyle.css\";\n\n/*bold font*/\n@import \"./fonts/lilitaone/lilitaone.css\";\n\n/*Board Container*/\n@import \"./playerDiv.css\";\n\n/*icon*/\n@import \"./icon/icon.css\";\n\n/*modal*/\n@import \"./modal//modal.css\";\n\n/*app, general apperance*/\n@import \"./app.css\";\n\n/*end game msg*/\n@import \"./gameEnd.css\";\n\n/*svg font*/\n@import \"./svgText/svgText.css\";\n\n/*color variables*/\n@import \"./color.css\";\n\n/*toggleSwitch*/\n@import \"./toggleSwitch.css\";\n\n/*pop animation*/\n@import \"./animate-pop.css\";\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/svgText/svgText.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/svgText/svgText.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.stroke-color {
  flood-color: #fff;
}

.bevel-color {
  flood-color: var(--red);
}

.text-color {
  fill: var(--blue);
}

.svg-text {
  transform: rotate(-3deg);
  font-family: "Lilita One";
  font-size: 4rem;
  text-anchor: middle;
  dominant-baseline: middle;
  filter: url(#bevel);
}
`, "",{"version":3,"sources":["webpack://./src/svgText/svgText.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;AACrB","sourcesContent":[".stroke-color {\n  flood-color: #fff;\n}\n\n.bevel-color {\n  flood-color: var(--red);\n}\n\n.text-color {\n  fill: var(--blue);\n}\n\n.svg-text {\n  transform: rotate(-3deg);\n  font-family: \"Lilita One\";\n  font-size: 4rem;\n  text-anchor: middle;\n  dominant-baseline: middle;\n  filter: url(#bevel);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/toggleSwitch.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/toggleSwitch.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.toggle-div {
  display: flex;
  flex-direction: row;
  > input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  > label {
    cursor: pointer;
    width: 64px;
    height: 32px;
    background: grey;
    display: block;
    border-radius: 32px;
    position: relative;
  }
  > label:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background: white;
    transition: 0.3s;
  }
  > input:checked + label {
    background: var(--red);
  }
  > input:checked + label::after {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
}
`, "",{"version":3,"sources":["webpack://./src/toggleSwitch.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB;IACE,SAAS;IACT,QAAQ;IACR,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,sBAAsB;IACtB,4BAA4B;EAC9B;AACF","sourcesContent":[".toggle-div {\n  display: flex;\n  flex-direction: row;\n  > input[type=\"checkbox\"] {\n    height: 0;\n    width: 0;\n    visibility: hidden;\n  }\n  > label {\n    cursor: pointer;\n    width: 64px;\n    height: 32px;\n    background: grey;\n    display: block;\n    border-radius: 32px;\n    position: relative;\n  }\n  > label:after {\n    content: \"\";\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    width: 24px;\n    height: 24px;\n    border-radius: 24px;\n    background: white;\n    transition: 0.3s;\n  }\n  > input:checked + label {\n    background: var(--red);\n  }\n  > input:checked + label::after {\n    left: calc(100% - 4px);\n    transform: translateX(-100%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/BoardContainer.js":
/*!*******************************!*\
  !*** ./src/BoardContainer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardContainer)
/* harmony export */ });
function BoardContainer(name) {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  const empty = document.createElement("div");
  empty.classList.add("empty");
  const xlabel = document.createElement("div");
  xlabel.classList.add("xlabel");
  const ylabel = document.createElement("div");
  ylabel.classList.add("ylabel");
  const cellContainer = document.createElement("div");
  cellContainer.classList.add("cell-container");
  cellContainer.id = name;
  boardContainer.append(empty, xlabel, ylabel, cellContainer);
  xlabel.append(...xLabelArr());
  ylabel.append(...yLabelArr());
  cellContainer.append(...cellArr());
  return boardContainer;
}

function cellArr(size = 10) {
  const length = size * size;
  const arr = [];
  for (let i = 0; i < length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.dataset.x = i % size;
    cell.dataset.y = Math.floor(i / size);
    arr.push(cell);
  }
  return arr;
}

function xLabelArr() {
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    let item = document.createElement("div");
    item.classList.add("label-container");
    let label = document.createElement("p");
    label.innerHTML = i + 1;
    item.append(label);
    arr.push(item);
  }
  return arr;
}

function yLabelArr() {
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    let item = document.createElement("div");
    item.classList.add("label-container");
    let label = document.createElement("p");
    label.innerHTML = String.fromCharCode(i + 65);
    item.append(label);
    arr.push(item);
  }
  return arr;
}


/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");

function GameBoard(size = 10) {
  if (size >= 0) {
    const length = size * size;
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(null);
    }
    const gameBoardObj = {
      size,
      ships: [],
      board: [...arr],
      resetBoard() {
        this.board = [...arr];
      },
      inBound(x, y) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
      },

      getIndex(x, y) {
        if (this.inBound(x, y)) {
          return parseInt(this.size * y) + parseInt(x);
        } else return undefined;
      },

      setToken(x, y, token) {
        const index = this.getIndex(x, y);
        if (index != undefined) {
          this.board[index] = token;
        }
      },
      getToken(x, y) {
        const index = this.getIndex(x, y);
        if (index != undefined) {
          return this.board[index];
        }
      },
      isEmpty(x, y) {
        return this.getToken(x, y) === null;
      },
      allocateSpace(x, y, shipLength, vertical = true) {
        let indexArr = [];
        if (vertical) {
          for (let i = 0; i < shipLength; i++) {
            if (this.inBound(x, y + i) && this.isEmpty(x, y + i)) {
              indexArr.push(this.getIndex(x, y + i));
            } else return undefined;
          }
        } else {
          for (let i = 0; i < shipLength; i++) {
            if (this.inBound(x + i, y) && this.isEmpty(x + i, y)) {
              indexArr.push(this.getIndex(x + i, y));
            } else return undefined;
          }
        }
        return indexArr;
      },
      placeShip(x, y, shipLength, vertical = true) {
        let indArr = this.allocateSpace(x, y, shipLength, vertical);
        if (indArr !== undefined) {
          const shipIndex = this.ships.length;
          this.ships.push((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength));
          for (let index of indArr) {
            this.board[index] = shipIndex;
          }
          return true;
        } else return false;
      },
      validAttack(x, y) {
        let token = this.getToken(x, y);
        return token != "missed" && token != "hit";
      },
      receiveAttack(x, y) {
        let result = false;
        if (this.inBound(x, y)) {
          if (this.validAttack(x, y)) {
            const index = this.getToken(x, y);
            result = true;
            if (index === null) {
              this.setToken(x, y, "missed");
            } else {
              this.setToken(x, y, "hit");
              this.ships[index].hit();
            }
          }
        }
        return result;
      },
      isDefeated() {
        for (let ship of this.ships) {
          if (!ship.isSunk()) {
            return false;
          }
        }
        return true;
      },
    };
    return gameBoardObj;
  }
  return undefined;
}


/***/ }),

/***/ "./src/NewGame.js":
/*!************************!*\
  !*** ./src/NewGame.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewGame)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _displayShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayShips */ "./src/displayShips.js");
/* harmony import */ var _placeRandShips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeRandShips */ "./src/placeRandShips.js");




function NewGame(gameObj) {
  //newgame routine for data
  //reset board data for both players
  gameObj.p1.resetBoard();
  gameObj.p2.resetBoard();
  //randomly set ships on both boards
  (0,_placeRandShips__WEBPACK_IMPORTED_MODULE_2__["default"])(gameObj.p1);
  (0,_placeRandShips__WEBPACK_IMPORTED_MODULE_2__["default"])(gameObj.p2);
  //set currentPlayer to p1
  gameObj.currentPlayer = gameObj.p1;
  // set game to active
  gameObj.active = true;

  //newgame routine for visual
  //empty all cells
  const cellsArr = document.querySelectorAll(".cell");
  for (let cell of cellsArr) {
    cell.innerHTML = "";
  }
  //populate board with ships
  (0,_displayShips__WEBPACK_IMPORTED_MODULE_1__["default"])("p1-self", gameObj.p1);
  (0,_displayShips__WEBPACK_IMPORTED_MODULE_1__["default"])("p2-self", gameObj.p2);
  //get rid of win screens
  const screens = document.querySelectorAll(".win-screen");
  for (let item of screens) {
    item.style.display = "none";
  }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/GameBoard.js");

function randIndex(length) {
  return Math.floor(Math.random() * length);
}
function Player(name) {
  let playerObj = {
    ...(0,_GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    name,
    AI: false,
    opponent: undefined,
    setOpponent(anotherPlayer) {
      this.opponent = anotherPlayer;
    },
    attack(x, y) {
      let result = this.opponent.receiveAttack(x, y);
      return result;
    },
    AImove() {
      //get a list of valid moves
      const targetBoard = this.opponent.board;
      const movesArr = [];
      for (let index in targetBoard) {
        if (targetBoard[index] != "hit" && targetBoard[index] != "missed") {
          movesArr.push(index);
        }
      }
      const randAttack = movesArr[randIndex(movesArr.length)];
      const x = randAttack % this.opponent.size;
      const y = Math.floor(randAttack / this.opponent.size);
      return { x, y };
    },
  };
  return playerObj;
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  return {
    length,
    hits: 0,
    hit() {
      this.hits += 1;
    },
    isSunk() {
      if (this.hits >= this.length) {
        return true;
      }
      return false;
    },
  };
}


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _NewGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewGame */ "./src/NewGame.js");
/* harmony import */ var _initStaticDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initStaticDOM */ "./src/initStaticDOM.js");
/* harmony import */ var _mkGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mkGame */ "./src/mkGame.js");
/* harmony import */ var _modal_switchPlayerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/switchPlayerModal */ "./src/modal/switchPlayerModal.js");
/* harmony import */ var _icon_mkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/mkIcon */ "./src/icon/mkIcon.js");
/* harmony import */ var _icon_boomSVG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/boomSVG */ "./src/icon/boomSVG.js");
/* harmony import */ var _icon_missCloudSVG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/missCloudSVG */ "./src/icon/missCloudSVG.js");
/* harmony import */ var _svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svgText/mkSVGText */ "./src/svgText/mkSVGText.js");









function app() {
  (0,_initStaticDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const game = (0,_mkGame__WEBPACK_IMPORTED_MODULE_2__["default"])();
  addNewGameEL(game);
  cellsAddEL(game.p1, game);
  cellsAddEL(game.p2, game);
  let appBG = document.getElementById("app-bg");
  appBG.append(_modal_switchPlayerModal__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

function addNewGameEL(gameObj) {
  const newGameBtn = document.getElementById("new-game-btn");
  newGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_NewGame__WEBPACK_IMPORTED_MODULE_0__["default"])(gameObj);
    openSwitchModal(gameObj);
  });
  const toggleAIBtn = document.getElementById("ai-toggle");
  toggleAIBtn.addEventListener("change", (e) => {
    gameObj.setP2AI(e.target.checked);
    let label = document.getElementById("ai-label");
    if (e.target.checked) {
      label.classList.add("on");
    } else {
      label.classList.remove("on");
    }
  });
}

function openSwitchModal(gameObj) {
  const modal = document.getElementById("switch-modal");

  let name = gameObj.currentPlayer.name;
  if (name === "p1") {
    _modal_switchPlayerModal__WEBPACK_IMPORTED_MODULE_3__["default"].innerHTML = "";
    let p1rdy = (0,_svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_7__["default"])("P1 Ready?");
    p1rdy.style.height = "5.5rem";
    _modal_switchPlayerModal__WEBPACK_IMPORTED_MODULE_3__["default"].append(p1rdy);
  } else {
    _modal_switchPlayerModal__WEBPACK_IMPORTED_MODULE_3__["default"].innerHTML = "";
    let p2rdy = (0,_svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_7__["default"])("P2 Ready?");
    p2rdy.style.height = "5.5rem";
    _modal_switchPlayerModal__WEBPACK_IMPORTED_MODULE_3__["default"].append(p2rdy);
  }
  modal.style.display = "flex";
  switchDisplayedBoard(gameObj, name);
}

function switchDisplayedBoard(gameObj, name) {
  const opponent = gameObj.currentPlayer.opponent;
  const current = document.getElementById(`${name}-div`);
  const prev = document.getElementById(`${opponent.name}-div`);
  prev.style.display = "none";
  current.style.display = "flex";
}

function cellsAddEL(player, gameObj) {
  let name = player.name;
  let id = `${name}-enemy`;
  const cells = document.getElementById(id).children;
  for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click", (e) => {
      e.preventDefault();
      if (gameObj.active && gameObj.currentPlayer.name === player.name) {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        const valid = player.attack(x, y);
        if (valid) {
          updateBoards(player, x, y);
          //check for winner, make game inactive is won
          checkForWinner(gameObj);
          if (!gameObj.active) {
            displayWinner(gameObj);
          }
          //switch currentPlayer and continue with game
          else if (gameObj.active) {
            gameObj.togglePlayer();
            //if playing against another player, pull up modal
            if (!gameObj.currentPlayer.AI) {
              setTimeout(() => {
                openSwitchModal(gameObj);
              }, 800);
            }
            //if playing against AI
            else {
              let move = gameObj.currentPlayer.AImove();
              gameObj.currentPlayer.attack(move.x, move.y);
              updateBoards(gameObj.currentPlayer, move.x, move.y);
              checkForWinner(gameObj);
              if (!gameObj.active) {
                displayWinner(gameObj);
              } else if (gameObj.active) {
                gameObj.togglePlayer();
              }
            }
          }
        }
      }
    });
  }
}
function updateBoards(player, x, y) {
  const opponent = player.opponent;
  const token = opponent.getToken(x, y);
  const index = opponent.getIndex(x, y);
  const playerCell = document.getElementById(`${player.name}-enemy`).children[
    index
  ];
  const cell = document.getElementById(`${opponent.name}-self`).children[index];
  //find opponent cell
  if (token === "hit") {
    playerCell.append((0,_icon_mkIcon__WEBPACK_IMPORTED_MODULE_4__["default"])("hit", _icon_boomSVG__WEBPACK_IMPORTED_MODULE_5__["default"]));
    cell.innerHTML = "";
    cell.append((0,_icon_mkIcon__WEBPACK_IMPORTED_MODULE_4__["default"])("hit", _icon_boomSVG__WEBPACK_IMPORTED_MODULE_5__["default"]));
  } else if (token === "missed") {
    playerCell.append((0,_icon_mkIcon__WEBPACK_IMPORTED_MODULE_4__["default"])("missed", _icon_missCloudSVG__WEBPACK_IMPORTED_MODULE_6__["default"]));
    cell.innerHTML = "";
    cell.append((0,_icon_mkIcon__WEBPACK_IMPORTED_MODULE_4__["default"])("missed", _icon_missCloudSVG__WEBPACK_IMPORTED_MODULE_6__["default"]));
  }
}

function checkForWinner(gameObj) {
  if (gameObj.currentPlayer.opponent.isDefeated()) {
    gameObj.active = false;
  }
}

function displayWinner(gameObj) {
  let winner = null;
  let loser = null;
  if (gameObj.p1.isDefeated()) {
    winner = document.getElementById("p2-victory");
    loser = document.getElementById("p1-defeat");
  } else {
    winner = document.getElementById("p1-victory");
    loser = document.getElementById("p2-defeat");
  }
  winner.style.display = "flex";
  loser.style.display = "flex";
  const hits = document.querySelectorAll(".hit");
  for (let item of hits) {
    item.classList.add("animate-pop-loop");
  }
}


/***/ }),

/***/ "./src/displayShips.js":
/*!*****************************!*\
  !*** ./src/displayShips.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayShips)
/* harmony export */ });
/* harmony import */ var _icon_mkIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/mkIcon */ "./src/icon/mkIcon.js");
/* harmony import */ var _icon_shipSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/shipSVG */ "./src/icon/shipSVG.js");


function displayShips(boardID, player) {
  console.log(player);
  const cells = document.getElementById(boardID).children;
  const board = player.board;
  let numRegex = /^\d+$/;
  for (let index = 0; index < cells.length; index++) {
    if (numRegex.test(board[index])) {
      const icon = (0,_icon_mkIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(`${player.name}-icon`, _icon_shipSVG__WEBPACK_IMPORTED_MODULE_1__["default"]);
      cells.item(index).append(icon);
    }
  }
}


/***/ }),

/***/ "./src/icon/boomSVG.js":
/*!*****************************!*\
  !*** ./src/icon/boomSVG.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let boomSVG = `<svg
width="190.08594"
height="177.68819"
viewBox="0 0 50.293569 47.013332"
version="1.1"
id="svg1"
xml:space="preserve"
inkscape:export-filename="bomb.svg"
inkscape:export-xdpi="96"
inkscape:export-ydpi="96"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
  id="namedview1"
  pagecolor="#ffffff"
  bordercolor="#000000"
  borderopacity="0.25"
  inkscape:showpageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="true"
  inkscape:deskcolor="#d1d1d1"
  inkscape:document-units="mm"
  inkscape:zoom="1.6819304"
  inkscape:cx="248.22668"
  inkscape:cy="91.26418"
  inkscape:window-width="1792"
  inkscape:window-height="1120"
  inkscape:window-x="1920"
  inkscape:window-y="0"
  inkscape:window-maximized="0"
  inkscape:current-layer="layer3" /><defs
  id="defs1"><linearGradient
    id="swatch21"
    inkscape:swatch="solid"><stop
      style="stop-color:#ffffff;stop-opacity:1;"
      offset="0"
      id="stop21" /></linearGradient></defs><g
  inkscape:groupmode="layer"
  id="layer3"
  inkscape:label="Effect"
  transform="translate(-2.0494872,-3.3693037)"><path
    id="path36"
    style="fill:#ff5555;fill-opacity:1;stroke:none;stroke-width:3.00876;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
    inkscape:label="path36"
    d="M 7.6196899,5.2281047 9.9926717,20.050972 2.0494873,15.375806 8.4077555,25.583968 3.067513,27.057263 l 4.7190918,1.258321 -1.4944824,1.809192 2.4386108,-0.550871 -0.3932576,4.4049 2.6742554,-2.595708 0.594279,-0.664042 0.839225,1.347205 0.728121,-2.813782 8.544181,-8.385018 0.820622,1.926498 8.981881,0.244429 -1.173055,-4.418852 0.0925,0.100253 1.848466,-1.455209 2.280997,-2.713529 -1.730643,0.471806 1.022676,-2.831352 -3.948596,1.92288 -0.212907,-4.4369385 -1.324467,1.5136025 -1.44694,-5.4503131 -8.102348,7.2915441 z" /><path
    id="path34"
    style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2.38125;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
    d="m -15.833933,17.419377 2.391542,2.002221 1.167961,2.169072 0.05562,1.668518 -1.890988,2.780861 -5.339254,-5.283637 z m 4.115675,16.073379 A 15.294743,15.294743 0 0 1 -27.013,48.787498 15.294743,15.294743 0 0 1 -42.307743,33.492756 15.294743,15.294743 0 0 1 -27.013,18.198013 15.294743,15.294743 0 0 1 -11.718258,33.492756 Z"
    transform="translate(53.709274,0.76746182)" /><path
    style="fill:#ffe680;fill-opacity:1;stroke:none;stroke-width:2.38125;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
    d="m 43.849972,5.3681807 0.235966,3.6377779 -0.668565,0.039327 -0.01966,0.8062102 -1.376457,0.9045292 1.199483,0.58991 -0.393271,1.297802 1.789393,-0.07865 1.651748,3.16585 2.202328,-3.854078 2.202331,0.235964 -1.769729,-1.92704 0.275291,-0.7275554 0.983184,-1.4551112 -3.00854,0.5702461 z"
    id="path44"
    inkscape:label="Spark" /></g><g
  inkscape:groupmode="layer"
  id="layer2"
  inkscape:label="Bomb"
  transform="translate(51.659789,-2.6018419)"><path
    id="path62"
    style="stroke-width:2.38125;stroke-linecap:round"
    d="m -34.99569,27.805471 -0.334863,0.337447 -0.655774,0.711068 0.153479,0.404626 0.588595,-0.223242 0.0078,-0.423747 z m 0.700733,0.374654 -0.584977,0.930176 0.393257,0.936894 0.444934,0.0031 0.179834,-0.221175 -0.03566,-1.245402 z m 25.4997354,-17.405139 -0.7803142,0.537952 -0.4402832,0.557588 2.06344,4.027145 0.605131,-1.146183 z m -3.1755164,-4.3077473 1.894974,3.212207 0.03049,-0.9467122 1.1942428,0.2547648 -0.3576009,-0.848527 z m 9.603031,-0.091467 -5.2110514,1.2872599 0.7503418,0.8283732 3.573942,-0.9684163 z M -2.9454495,7.1235297 -3.2544746,7.5229885 -4.1867174,7.7756863 -5.481212,8.6593532 -4.6316515,9.87685 Z m -8.3069865,2.8887123 -0.753959,2.710946 0.833024,-0.04186 1.3291178,-2.350761 z m 2.9000814,1.189591 -0.2687175,0.05064 0.081132,0.223759 z m -1.3348023,0.252698 -0.8872841,0.167949 -0.59893,1.05885 -0.833024,0.04186 0.04341,-0.155546 -0.154512,0.16123 2.5021724,-0.07648 -0.4004924,-0.781865 z m 3.6566244,-0.592729 -1.3931966,3.679879 0.076481,0.209807 -0.5508708,1.043863 -0.1958537,0.516765 3.2137574,-4.728911 z m -0.6252848,-0.247013 0.5353678,0.484208 0.089917,-0.237195 1.1503174,0.721403 -0.1565796,0.230994 3.0256551,0.348299 -1.2753744,-0.993737 z m 1.2056111,-1.910994 -0.1317749,0.01912 -0.1829345,0.7890991 2.1435384,1.6019689 0.3348632,0.05478 1.2753744,0.993737 -0.243396,-0.0279 0.8883179,0.663525 -2.957959,-3.4235632 -0.3074748,0.5022949 z m -5.0673908,0.2263428 -4.442623,1.5477092 3.545003,0.119889 0.162781,-0.585494 0.07028,0.01602 0.974101,-0.5730917 z m 0.454752,0.3545003 -0.0031,0.086816 0.05994,-0.03514 z m 0.01499,-6.6827962 -0.287838,4.8550008 1.1270629,0.6821289 0.2557983,0.6066813 z m -0.111621,0.015503 0.08733,0.396875 0.01602,-0.2728516 z m 0.145727,0.1746663 0.4418336,2.479952 2.2598104,2.993099 0.2144572,-0.070797 -0.4811076,-0.5312338 1.4035319,-0.3467488 -0.070797,0.00362 z M -15.379833,12.7883 c -0.07466,-0.0014 -0.149188,-0.0014 -0.223759,5.17e-4 -0.596562,0.01499 -1.18702,0.140991 -1.742012,0.469222 -1.109985,0.656457 -1.680182,2.063825 -1.62109,4.081921 0.01519,0.510295 0.440515,0.912038 0.950847,0.898136 0.511328,-0.01491 0.913715,-0.441589 0.898653,-0.952913 -0.04941,-1.687319 0.318255,-2.199908 0.713134,-2.433443 0.394881,-0.233538 1.211105,-0.248903 2.220537,-0.05271 1.009432,0.196196 2.131647,0.552768 3.199288,0.681612 0.53382,0.06442 1.0685654,0.08115 1.6133379,-0.09612 0.3127592,-0.101772 0.6205412,-0.295038 0.8717814,-0.553972 l -0.9203572,-1.795756 c -0.1530192,0.09983 -0.2782376,0.245667 -0.3519165,0.427881 -0.057289,0.141803 -0.043418,0.120397 -0.1720826,0.162264 -0.128664,0.04187 -0.423114,0.06523 -0.818038,0.01757 -0.789846,-0.09532 -1.917787,-0.438308 -3.068546,-0.661975 -0.503459,-0.09785 -1.027131,-0.18265 -1.549777,-0.192236 z m -5.602242,2.569869 -1.278475,0.24753 -2.673221,1.939933 12.232845,9.490377 1.437638,-3.376021 -0.120406,-1.370459 -0.744141,-1.694987 -2.824634,-3.490226 -2.117183,-0.954981 c -1.99e-4,0.0015 -3.19e-4,0.0032 -5.17e-4,0.0047 -0.0072,0.05388 -0.01328,0.111994 -0.01912,0.170015 -0.01084,0.110588 -0.02033,0.224755 -0.02532,0.352434 -0.0012,0.02863 -0.0012,0.06036 -0.0021,0.08992 -0.0044,0.160711 -0.006,0.32993 -5.16e-4,0.518831 0.0019,0.06392 -0.0029,0.126437 -0.01344,0.187069 -0.01056,0.06063 -0.02678,0.11963 -0.04858,0.1757 -0.08719,0.224278 -0.259736,0.406771 -0.478524,0.506945 -0.0547,0.02504 -0.112173,0.04482 -0.172082,0.05891 -0.05991,0.01409 -0.122119,0.02242 -0.186035,0.02429 -0.06379,0.0017 -0.126053,-0.0028 -0.186552,-0.01343 -0.0605,-0.01065 -0.119245,-0.02725 -0.175183,-0.04909 -0.223754,-0.08736 -0.405944,-0.259594 -0.505913,-0.478007 -0.02499,-0.0546 -0.04483,-0.112288 -0.05891,-0.172083 -0.01408,-0.05979 -0.02239,-0.121731 -0.02429,-0.185518 -0.0061,-0.207611 -0.0019,-0.405452 0.0062,-0.59893 0.0027,-0.07409 0.0052,-0.147981 0.0098,-0.220141 0.0098,-0.140004 0.02302,-0.276484 0.03979,-0.409278 0.01462,-0.120474 0.03282,-0.237089 0.05323,-0.351399 z m 5.565552,2.889746 0.786515,0.550354 -1.355989,1.309998 -0.688847,-0.680579 z m 1.28571,0.975651 1.358573,1.954919 0.107487,0.997872 -0.91674,0.915707 -0.558622,-1.21388 -1.249536,-1.449524 z m -13.206429,-2.163175 c -0.387217,0.01319 -0.774085,0.04033 -1.159619,0.08113 -8.941954,0.94579 -15.424249,8.96132 -14.478703,17.9033 0.945783,8.942176 8.961647,15.424554 17.903816,14.478702 8.94197,-0.946047 15.4240487,-8.961829 14.478187,-17.903816 -0.213209,-2.015415 -0.789451,-3.914634 -1.659847,-5.634799 l -0.447518,1.051099 -12.232845,-9.490377 0.452168,-0.328145 c -0.556509,-0.07911 -1.120845,-0.133573 -1.693436,-0.155029 -0.387418,-0.01448 -0.774988,-0.01522 -1.162203,-0.0021 z m -2.391069,2.386417 7.558712,2.746086 1.916679,2.31097 1.56993,8.149373 -0.792717,1.630908 -2.4722,2.775025 -1.436605,0.409277 -3.574976,0.249081 -1.000972,-0.344682 -1.8495,-1.6738 -1.285709,0.0072 -0.709518,0.590145 0.13746,0.695048 -0.404627,0.428914 -1.222147,5.17e-4 -0.512114,-0.590145 -0.716752,0.526583 -0.783415,-0.110588 -0.737422,-0.888318 -0.465088,-0.144694 -0.686263,0.201538 -0.951363,-0.479557 -0.05374,-0.509529 0.03979,-0.842326 -0.68678,0.202055 -1.041797,-0.728121 -0.177767,-1.077454 0.418579,-1.444873 0.75396,-0.781864 -0.858863,0.486792 -0.590145,-0.873332 0.02584,-0.96945 1.442289,-1.570447 0.319877,-1.838647 -0.112138,-1.664498 1.465027,-1.95957 3.03289,-1.738912 z m -3.953764,2.98018 -1.891874,0.393774 -2.155941,1.241785 0.329696,1.747697 0.974101,0.560689 2.615344,-0.494543 1.221114,-1.224732 0.197404,-0.924491 0.05013,-0.861446 z m 3.913457,2.167826 -1.007174,0.841809 -0.712101,1.0542 -0.02377,1.791622 0.512114,1.34152 0.357601,0.957564 1.456758,0.49351 1.208712,-0.269234 0.737423,-1.360124 0.251664,-2.267562 -1.500167,-2.228288 z m 15.885852,11.664921 c 0.6082,-3.2e-5 1.101257,0.493024 1.101224,1.101225 3.3e-5,0.608202 -0.493024,1.101258 -1.101224,1.101225 -0.608202,3.3e-5 -1.101258,-0.493023 -1.101225,-1.101225 -3.3e-5,-0.608201 0.493023,-1.101257 1.101225,-1.101225 z m -1.641244,2.506824 c 0.251384,-0.0063 0.498312,0.06714 0.705383,0.209806 0.54164,0.373102 0.678161,1.114706 0.304891,1.65623 -2.762995,4.00883 -7.184275,6.229648 -12.494327,6.800619 -0.654258,0.07119 -1.242176,-0.401925 -1.312582,-1.056267 -0.07118,-0.654437 0.402234,-1.242439 1.056783,-1.312581 4.810634,-0.517269 8.458878,-2.402329 10.789006,-5.78311 0.216282,-0.313881 0.569781,-0.505232 0.950846,-0.514697 z" /></g></svg>`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boomSVG);


/***/ }),

/***/ "./src/icon/missCloudSVG.js":
/*!**********************************!*\
  !*** ./src/icon/missCloudSVG.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let missCloudSVG = `<svg
width="194.35223"
height="193.5452"
viewBox="0 0 51.42236 51.208833"
version="1.1"
id="svg1"
sodipodi:docname="missCloud.svg"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg">
<sodipodi:namedview
  id="namedview1"
  pagecolor="#ffffff"
  bordercolor="#000000"
  borderopacity="0.25"
  inkscape:showpageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="0"
  inkscape:deskcolor="#d1d1d1"
  inkscape:document-units="mm"
  inkscape:zoom="1.6819304"
  inkscape:cx="65.401041"
  inkscape:cy="88.291405"
  inkscape:window-width="1792"
  inkscape:window-height="1092"
  inkscape:window-x="1920"
  inkscape:window-y="28"
  inkscape:window-maximized="0"
  inkscape:current-layer="layer1" />
<defs
  id="defs1" />
<g
  inkscape:groupmode="layer"
  id="layer4"
  inkscape:label="Layer 2">
 <g
    id="g6"
    inkscape:label="darkSmoke">
   <path
      style="fill:#c8b7b7;stroke-width:2.38125;stroke-linecap:round"
      d="m 42.491575,36.262442 1.334812,3.670739 -0.444936,0.778642 0.889875,3.337034 2.447158,1.112345 2.66963,-1.446048 0.222467,-4.004443 -1.890985,-1.557282 -1.668518,0.22247 z"
      id="path4" />
   <path
      style="fill:#c8b7b7;stroke-width:2.38125;stroke-linecap:round"
      d="M 0.77864141,3.2258002 1.8353691,4.9777432 1.6685173,5.5895329 0.83425865,6.0900883 0.55617244,7.3136677 1.1679621,8.5650556 2.3915415,9.0656107 3.6985466,8.8153331 4.1434847,9.927678 5.8954278,10.122338 7.0355814,8.5928641 9.9832952,9.2324625 9.0656107,5.3392554 10.316999,4.922126 10.539468,3.2258002 8.7875246,1.2235794 6.9799641,0.94549316 5.672959,1.3070052 4.1712933,0.5005552 1.9466035,1.5016656 Z"
      id="path5" />
 </g>
 <path
    style="fill:#e3dbdb;stroke-width:2.38125;stroke-linecap:round"
    d="m 23.359243,4.6718484 6.896538,-2.2246897 3.670737,0.667407 3.781972,1.7797518 1.334815,2.7808621 0.22247,2.5583934 -0.667409,2.002221 -0.889876,0.778641 1.334815,2.335924 0.111234,0.333704 4.004442,0.556172 5.005551,6.117897 -0.333703,3.893207 -2.447157,4.004442 -4.560615,0.333703 0.889876,1.668518 -0.333704,1.446049 -1.779751,0.889875 0.556173,3.2258 v 1.779752 l -4.783085,2.669627 h -2.780861 l -4.449378,-2.558394 0.111233,-2.669627 -2.780862,0.778642 -2.002221,0.556173 -7.67518,8.565055 1.557283,-10.122339 -2.335924,1.112345 -0.111235,-4.004442 -1.557282,1.001112 -3.337035,-2.224691 0.333703,-3.781973 -2.5583929,1.001112 -4.7830829,-3.670739 -1.0011104,-5.561724 3.6707382,-4.894318 6.674069,-0.556172 h 1.334814 l 0.778641,-10.3448075 3.893208,4.8943174 1.00111,-2.780862 1.112345,1.7797517 z"
    id="path1"
    inkscape:label="smoke" />
 <path
    style="fill:#ffe680;stroke-width:2.38125;stroke-linecap:round"
    d="m 4.0900424,37.478946 0.2752912,3.028204 -1.6517479,1.691076 2.005694,1.258475 0.9045287,2.320311 2.280985,-2.005693 H 9.8711598 L 8.4947034,41.490333 9.6351959,38.658765 6.8822828,39.170022 Z"
    id="path6"
    inkscape:label="star" />
 <path
    id="path114"
    style="-inkscape-font-specification:'Arial Black,  Heavy';display:inline;stroke-width:1.005"
    d="m 26.109705,18.728057 c -0.5902,0.0066 -1.177635,0.03877 -1.766215,0.09854 0.228136,4.439893 0.225545,8.281574 0.01649,12.50679 0.780007,0.05525 1.556348,0.0667 2.340558,0.03887 -0.0055,-0.258551 -0.01056,-12.133273 4.02e-4,-12.642231 -0.197546,-0.0035 -0.39449,-0.0041 -0.591226,-0.002 z m 4.853459,0.223769 c -0.541356,-0.02053 -0.997331,0.116272 -1.370495,0.40004 -0.459061,0.345397 -0.808885,0.847302 -1.049757,1.438803 -0.01517,0.03729 -0.02967,0.07511 -0.04397,0.113062 -0.167818,0.447827 -0.272595,0.892383 -0.319559,1.324562 -0.01928,0.177377 -0.02923,0.353307 -0.02945,0.527627 -2.02e-4,0.189021 0.0088,0.366387 0.02709,0.533123 0.04821,0.440451 0.160777,0.813874 0.334476,1.134947 0.07763,0.143337 0.167896,0.276814 0.270487,0.400823 0.414159,0.504542 1.115224,0.904583 2.107367,1.183626 0.608152,0.166976 1.000115,0.34193 1.168708,0.534694 0.168956,0.193175 0.25361,0.415117 0.25557,0.677591 0.0022,0.276171 -0.08294,0.536049 -0.25557,0.780449 -0.169704,0.239563 -0.415328,0.38342 -0.742368,0.412601 -0.439656,0.03923 -0.779479,-0.1763 -1.021882,-0.623025 -0.147709,-0.273849 -0.244099,-0.668057 -0.289725,-1.156539 -0.33727,0.0391 -1.159242,0.135597 -1.496512,0.174699 -0.0053,6.04e-4 -0.325654,0.03782 -0.330943,0.03847 -0.0051,6.02e-4 -0.290126,0.03272 -0.295221,0.03338 0.03192,0.606385 0.129511,1.203765 0.301894,1.776026 0.09599,0.318391 0.215586,0.629459 0.359603,0.926881 0.05943,0.122649 0.122914,0.242901 0.190794,0.360387 0.544701,0.942773 1.473896,1.374874 2.781815,1.120814 0.73293,-0.142367 1.301517,-0.490771 1.727349,-0.950433 0.421179,-0.461576 0.737739,-1.03684 0.96771,-1.642945 0.23197,-0.61138 0.362639,-1.18955 0.365097,-1.77014 0.0021,-0.495883 -0.09486,-0.916299 -0.299145,-1.304148 -0.199091,-0.384534 -0.525502,-0.717257 -0.968099,-1.001863 -0.435701,-0.286385 -1.170643,-0.601925 -2.161542,-0.950042 -0.401784,-0.137097 -0.65417,-0.280758 -0.759642,-0.431051 -0.108774,-0.145377 -0.16191,-0.309405 -0.158994,-0.493473 0.004,-0.252558 0.07572,-0.471563 0.215524,-0.645401 0.140741,-0.180413 0.343664,-0.258938 0.610071,-0.231622 0.323812,0.03321 0.569064,0.18927 0.74315,0.446362 0.176538,0.256067 0.288877,0.638036 0.342331,1.105898 0.726562,-0.01329 1.450871,-0.01801 2.191771,-0.01805 -0.08488,-0.979954 -0.332969,-1.95446 -0.74551,-2.649518 -0.420103,-0.720105 -1.076771,-1.29684 -2.052405,-1.503184 -0.199469,-0.04219 -0.389571,-0.06658 -0.570023,-0.07341 z m -8.199411,0.100502 c -0.337288,0.06191 -0.672422,0.131812 -1.006968,0.21003 -0.117883,0.02754 -0.235484,0.05614 -0.352928,0.08558 -0.552139,0.138581 -1.095546,0.296484 -1.63784,0.467562 0.271375,2.676081 -0.437119,4.965588 -0.723132,6.309141 -0.17502,-0.760641 -0.838875,-4.213525 -1.529488,-5.546753 -0.956721,0.333543 -1.926422,0.667892 -2.878784,0.911568 1.117779,2.487479 1.060425,4.989651 0.02277,7.470392 0.595927,0.1469 1.195574,0.32565 1.790554,0.512709 0.245727,-0.673109 0.2927,-6.099956 0.297967,-6.335444 0.15404,0.725589 1.344801,5.077213 1.089408,6.780628 0.547921,0.176064 1.089959,0.346595 1.646871,0.507605 0.716084,-1.859416 1.615823,-6.630584 1.752474,-7.807223 0.06588,1.462169 0.140066,5.596913 -0.319953,8.185278 0.172328,0.04054 0.345119,0.07925 0.518206,0.115809 0.117276,0.02479 0.234588,0.0485 0.352143,0.07145 0.333616,0.06502 0.667589,0.122572 1.003433,0.171951 0.34944,-3.368233 0.355628,-8.562605 -0.02473,-12.110287 z m 15.294498,1.676707 c -0.321032,0.0019 -0.607474,0.04792 -0.864855,0.146039 -0.501952,0.188764 -0.894162,0.520974 -1.160856,0.966923 -0.261423,0.439311 -0.387482,0.907977 -0.389831,1.382272 -0.0035,0.717016 0.234859,1.2786 0.684264,1.700262 0.450483,0.42592 1.197387,0.750029 2.258511,0.982231 0.6479,0.13849 1.059113,0.283098 1.233484,0.438906 0.174319,0.155763 0.257411,0.332186 0.251249,0.533513 -0.0065,0.211975 -0.105888,0.403133 -0.295611,0.577876 -0.185913,0.170762 -0.448523,0.269547 -0.791047,0.289725 -0.460403,0.02713 -0.814473,-0.119984 -1.062712,-0.45186 -0.151916,-0.204367 -0.247728,-0.503974 -0.290117,-0.891939 -0.770085,0.06679 -1.521304,0.139607 -2.277745,0.220629 0.05944,0.887042 0.361817,1.689864 0.934339,2.299731 0.599237,0.638329 1.536963,0.780392 2.8356,0.56767 0.725397,-0.118824 1.31146,-0.329877 1.761503,-0.597899 0.451224,-0.272693 0.816625,-0.61436 1.091762,-1.027773 0.277513,-0.416981 0.439623,-0.854604 0.45971,-1.335555 0.0171,-0.408735 -0.07666,-0.775947 -0.285012,-1.107074 -0.20453,-0.330709 -0.542531,-0.606097 -1.009709,-0.833838 -0.472123,-0.235346 -1.223984,-0.460953 -2.297769,-0.738049 -0.429671,-0.107766 -0.701267,-0.222784 -0.816173,-0.339189 -0.118428,-0.112827 -0.177661,-0.238279 -0.17784,-0.375305 -2e-4,-0.188087 0.07233,-0.344893 0.215919,-0.464813 0.144395,-0.124561 0.354762,-0.171758 0.633231,-0.146433 0.337688,0.03071 0.599464,0.140818 0.78987,0.322307 0.193313,0.18114 0.326576,0.454304 0.39729,0.809497 0.763364,-0.01749 1.517937,-0.04074 2.277746,-0.0742 -0.130985,-0.770994 -0.45522,-1.366665 -0.923347,-1.783094 -0.463593,-0.41894 -1.162439,-0.758375 -2.110508,-0.949651 -0.394863,-0.07967 -0.750319,-0.122666 -1.071346,-0.120911 z m 4.709776,15.443284 1.527525,5.484333 1.27313,-0.325841 -1.183236,-3.02129 2.302484,1.878885 1.00186,-1.128667 z m 1.303752,4.680723 -0.676806,0.517812 1.170276,4.356061 1.164783,-0.313279 -0.96064,-3.575612 0.594365,-0.454608 -1.068205,0.273236 z m 5.081548,-2.213362 -0.967712,0.719991 1.894197,2.545483 0.967704,-0.71999 z m -0.06632,0.04946 -1.576997,0.264991 0.179804,0.105602 -0.984586,1.109038 0.0069,0.03964 1.871429,-0.314458 -0.397689,-0.534299 z m 1.889875,2.548624 -0.897046,0.667385 -0.277552,-0.37295 -0.107573,3.337708 1.205222,0.03926 0.118557,-3.670225 z m -1.257435,2.860726 -2.547049,1.548332 0.626553,1.030521 2.918825,-1.774066 -1.023065,-0.03338 z m -4.175469,0.623024 0.186078,0.692117 -1.064671,0.286191 3.102942,1.034445 0.02316,-0.06909 -0.619093,-1.018351 0.40632,-0.246932 z M 8.1896391,1.4679139 C 7.5539502,1.4682358 6.8829339,1.6537525 6.2432305,2.0846556 l 0.4977913,0.7384422 c 0.7686685,-0.5177749 1.489623,-0.5611358 2.1493705,-0.359995 0.6597485,0.20114 1.2503517,0.6763478 1.6213517,1.2126771 0.371003,0.5363304 0.49603,1.1124008 0.38473,1.4713873 -0.111303,0.3589876 -0.405172,0.6463516 -1.306112,0.682303 l 0.03573,0.8899773 C 10.75184,6.6745303 11.517522,6.1501094 11.746806,5.4105881 11.976087,4.6710667 11.722711,3.8615321 11.24391,3.169353 10.765099,2.4771739 10.034631,1.8809407 9.1498902,1.6112052 8.9287042,1.5437773 8.6975379,1.4984768 8.4597351,1.4789057 8.3705569,1.471614 8.2804538,1.4678639 8.1896412,1.467916 Z M 5.0466485,0.86687547 4.6277663,1.7804072 6.6687866,2.7159236 6.2432305,2.0846556 C 6.4683175,1.9330372 6.6975578,1.8220661 6.927497,1.7285869 Z M 5.04269,0.85391698 2.1717568,1.9492135 2.5301819,2.8882631 4.9940103,1.9480353 4.627734,1.7804041 5.0466151,0.8668713 l 0.00125,4.0209e-4 z M 2.1140489,1.9841524 1.2853128,4.3223553 2.2326075,4.658402 2.9117698,2.7426156 2.5301819,2.8882631 2.1960978,2.0132037 Z m 0.2622416,2.269501 -0.143683,0.4047486 -0.8923336,-0.3164184 -0.033375,0.01649 1.039551,2.1002989 0.9005764,-0.4455782 z m 0.8318766,1.681417 0.038865,0.078126 L 2.3464557,6.4587735 2.154092,6.0701189 C 1.520575,6.3067373 1.0390984,6.8090528 0.84366173,7.4198069 0.54161124,8.3637452 0.94347542,9.5389842 2.1211155,10.248342 L 2.6397124,9.3874148 C 1.7693791,8.8631658 1.6413859,8.2241102 1.8007712,7.7260189 1.9601543,7.2279285 2.4281557,6.8435635 3.1728355,6.9420387 L 3.3047422,5.9456716 c -0.032406,-0.00427 -0.06448,-0.0076 -0.096574,-0.010594 z M 5.0854812,9.0195666 C 4.5037617,9.0402231 3.9871941,9.2449943 3.5430367,9.3457996 3.0988793,9.446603 2.8006383,9.4562176 2.5431373,9.2825905 l -0.017667,0.026302 c 0.03899,0.026094 0.071772,0.052938 0.11424,0.078511 L 2.1427053,10.212215 C 2.6855399,10.497977 3.277876,10.436368 3.7656278,10.32567 4.3021549,10.2039 4.7851556,10.035709 5.1212043,10.023776 Z M 7.8001667,8.5441527 6.768469,9.1954417 c 0.2424477,0.3840212 0.2087171,0.6056759 0.093428,0.8283423 -0.1152836,0.222666 -0.3846046,0.434921 -0.6811258,0.521739 -0.2965203,0.08682 -0.574809,0.05176 -0.7639592,-0.08794 -0.1121106,-0.0828 -0.22434,-0.215295 -0.2960044,-0.450284 l 4.02e-4,0.01648 c -0.2972389,0.01056 -0.7191367,0.142733 -1.1816641,0.257532 0.1392225,0.498959 0.3990496,0.896212 0.7525757,1.157324 0.5528837,0.408359 1.2421221,0.450474 1.8313822,0.277946 C 7.1127626,11.544052 7.6473065,11.160577 7.9454246,10.584773 8.2435449,10.008969 8.2328198,9.2294264 7.800171,8.5441443 Z M 9.1592767,5.2712188 10.268313,9.5326675 7.8017365,8.5469005 C 8.0595313,8.9564388 8.1514376,9.3956513 8.1322894,9.80865 L 11.639984,11.285534 10.686802,7.0806174 10.299718,6.6220838 c -0.207774,0.051772 -0.4305193,0.087657 -0.6736649,0.097355 l -0.03573,-0.889977 c 0.014468,-5.833e-4 0.022355,-0.00407 0.036511,-0.00468 z m -1.3755976,3.268615 -4.022e-4,0.014917 0.014521,-0.00906 z M 11.305115,39.149244 7.0774279,39.633686 7.3958098,40.748217 9.8502162,39.972873 8.623013,42.54152 9.7139906,42.832423 Z m -2.8045868,3.139062 0.1491799,0.197469 0.076157,-0.159782 z m 0.2080672,0.275984 1.7175346,2.277354 0.962604,0.209243 -1.6507951,-2.274211 -0.023948,0.05575 z m -4.1841105,-5.215022 0.4601034,1.4231 2.5533357,2.09284 v -0.161743 l -0.1421142,0.04475 -0.3183819,-1.114531 0.3344779,-0.03847 z m 0.1672385,0.08362 -0.00354,0.04397 0.033375,0.02591 z m -0.02748,0.348998 -0.2653845,3.376183 -2.6789611,2.050834 3.4743269,1.297866 0.9626052,3.599561 2.4277103,-2.930212 H 11.555972 L 10.963571,44.465157 11.388734,45.050884 10.42613,44.841642 10.001751,44.279075 8.5005293,44.046276 6.5753188,45.76224 6.1568304,43.92065 4.273234,42.832421 5.6543286,41.827809 5.4450834,39.190854 5.4179893,39.127645 4.9845821,38.772363 Z M 48.801577,5.3709376 c -0.505914,0.1622478 -0.974125,0.3564251 -1.412502,0.5731652 -0.648696,0.6854155 -1.14459,1.4207805 -1.586417,2.1658603 -0.253401,0.4637878 -0.48683,0.9304204 -0.721558,1.3916937 0.08222,0.09946 0.16435,0.199168 0.246146,0.2991452 0.900359,-0.9553448 1.750654,-1.923674 2.884678,-2.668361 0.255125,-0.1632311 0.524085,-0.3151153 0.810669,-0.4530367 0.150122,-0.3143891 0.321302,-0.626194 0.516641,-0.9351237 -0.101262,-0.1103555 -0.206491,-0.2185599 -0.315636,-0.3246632 -0.14061,-0.018959 -0.281273,-0.03522 -0.422021,-0.048678 z m 1.084697,3.4888521 c -0.642544,-0.00125 -1.267744,0.028136 -1.877712,0.082439 -1.708636,0.8097263 -3.168367,1.8232973 -4.533897,2.8944873 -0.809629,0.682452 -1.583333,1.38505 -2.356262,2.076352 0.08143,0.245384 0.162338,0.49121 0.242615,0.737264 2.374432,-1.131375 4.664312,-2.32327 7.322389,-2.89174 0.594889,-0.119848 1.207478,-0.208555 1.842767,-0.258317 0.508367,-0.478327 1.054469,-0.936731 1.64334,-1.372065 C 52.060423,9.8486663 51.94192,9.5705149 51.815014,9.2931938 51.56614,9.1558036 51.315163,9.0235031 51.06205,8.8962954 50.663585,8.8723472 50.271793,8.8605449 49.886274,8.8597845 Z M 39.852729,30.473638 c -0.211186,9.82e-4 -0.444521,0.0047 -0.704289,0.0095 l -0.917456,0.361566 c 1.89207,-0.03453 2.482778,0.480681 2.907831,1.100008 0.425061,0.619322 0.754865,1.444675 0.363921,2.159185 -0.390934,0.714508 -1.096455,0.904241 -1.931094,0.99244 -0.83464,0.0882 -1.857888,0.1159 -2.905479,-1.196581 l 0.187653,1.038372 c 1.186148,1.48607 1.611402,1.590366 2.796735,1.465107 1.185331,-0.125264 2.675732,-0.641669 3.199521,-1.598977 0.52379,-0.95731 0.0932,-2.414281 -0.56374,-3.371472 -0.574826,-0.837541 -0.955292,-0.965525 -2.433603,-0.959069 z m 0.197468,-14.610233 c -1.894,1.065791 -3.524488,2.533708 -4.42437,4.235146 1.217458,-1.345212 2.903521,-2.255348 4.69682,-2.828534 -0.09568,-0.467894 -0.186312,-0.937019 -0.27245,-1.406612 z M 13.979006,26.749237 c -0.623046,0.640407 -1.184183,1.257638 -1.796444,1.771709 -0.607385,0.506721 -1.271404,0.939502 -2.013931,1.153399 0.343764,0.573481 0.797166,1.097595 1.327702,1.571102 0.570343,-0.534414 0.988945,-1.130256 1.31475,-1.733629 0.486996,-0.902767 0.790579,-1.817776 1.167923,-2.762581 z m 13.533386,5.971917 c -0.502299,-0.0052 -1.018269,0.07471 -1.51143,0.285405 -0.575431,0.245431 -1.118119,0.69273 -1.472173,1.340657 -0.421347,0.793826 -0.542415,1.779635 -0.45343,2.705658 0.463207,-0.08111 0.923184,-0.172076 1.379524,-0.272058 -0.173947,-0.735339 -0.241944,-1.486232 -0.0106,-2.075959 0.153361,-0.453837 0.492491,-0.85506 0.899398,-1.134161 0.411061,-0.282443 0.909267,-0.450488 1.426633,-0.531946 0.460642,-0.0636 0.912494,-0.06784 1.311607,0.04436 -0.376054,-0.213865 -0.852446,-0.32127 -1.355184,-0.354499 -0.07109,-0.004 -0.14259,-0.0067 -0.214347,-0.0074 z m -10.209025,2.202761 -2.855622,0.872705 0.417704,4.999104 2.298552,-1.1903 -2.089699,12.457326 10.518377,-12.933525 -0.696437,-1.904401 -7.383631,8.569612 2.159188,-10.077116 -3.134355,1.983702 z M 38.28948,13.25825 c -0.06896,0.0021 -0.137328,0.01407 -0.202965,0.03612 -0.176928,0.05951 -0.322955,0.186891 -0.405927,0.354105 -0.1728,0.347989 -0.03079,0.770174 0.317204,0.942977 0.436997,0.217 0.60168,0.47066 0.756893,0.876236 0.108825,0.284372 0.183646,0.639803 0.281479,1.029736 0.328493,-0.222895 0.664677,-0.437427 1.014033,-0.634016 0.08614,0.469591 0.176766,0.93872 0.27245,1.406612 -0.211497,0.06759 -0.42099,0.140746 -0.628913,0.217882 0.116872,0.0267 0.241989,0.02439 0.364707,-0.01375 0.371098,-0.115213 0.57851,-0.509474 0.463243,-0.880555 -0.139627,-0.449201 -0.221622,-1.024113 -0.453035,-1.628812 -0.231416,-0.604698 -0.674357,-1.250799 -1.445085,-1.633522 -0.08275,-0.04112 -0.172801,-0.06553 -0.264991,-0.07184 -0.02302,-0.0016 -0.04611,-0.0019 -0.06909,-0.0013 z m 2.084987,2.755906 c 0.04823,0.20365 0.09371,0.407317 0.147217,0.579447 0.115267,0.371082 -0.09215,0.765342 -0.463243,0.880556 -0.122718,0.03815 -0.247835,0.04044 -0.364707,0.01375 -0.04856,0.01801 -0.09417,0.04192 -0.142506,0.06046 0.08496,0.034 0.176851,0.05472 0.273628,0.05771 l 3.847669,0.118558 c 0.443817,0.01365 0.814674,-0.335058 0.82834,-0.778877 0.01368,-0.443819 -0.33506,-0.814676 -0.778877,-0.828343 z m 1.754434,14.546241 c -0.198795,-0.0074 -0.383277,0.05838 -0.528013,0.172734 0.25205,0.144725 0.45446,0.363033 0.685444,0.699577 0.1567,0.228325 0.29899,0.486436 0.42006,0.758072 l 2.559221,0.095 c 0.443854,0.01657 0.817059,-0.329912 0.833445,-0.773775 0.01633,-0.443702 -0.330069,-0.816658 -0.773772,-0.833053 z m 6.397867,-3.906557 c -0.03502,9.82e-4 -0.06974,0.0041 -0.104427,0.0098 -0.210563,0.03408 -0.398958,0.150455 -0.523697,0.323484 l -2.657767,3.688678 0.08441,0.0031 c 0.443702,0.01641 0.79012,0.389351 0.773772,0.833053 -0.01412,0.382359 -0.297995,0.677113 -0.658749,0.745116 0.313881,0.08517 0.661059,-0.0253 0.862496,-0.304641 l 2.900769,-4.025115 c 0.259569,-0.360339 0.177835,-0.86288 -0.182547,-1.122386 -0.114484,-0.0825 -0.248659,-0.133398 -0.38905,-0.147608 -0.03495,-0.0035 -0.0702,-0.0046 -0.105209,-0.0035 z m 0.628914,-4.380792 c -0.03008,-4.02e-4 -0.06032,6.03e-4 -0.09029,0.0035 -0.373318,0.03633 -0.671913,0.325969 -0.719599,0.698005 l -0.530762,4.128758 0.08362,-0.116206 c 0.124739,-0.17303 0.313134,-0.289395 0.523697,-0.323483 0.03464,-0.0056 0.06944,-0.0087 0.104427,-0.0098 0.03502,-9.82e-4 0.07027,0 0.105209,0.0035 0.140391,0.01422 0.274566,0.06513 0.38905,0.14761 0.248707,0.179092 0.353727,0.473707 0.316418,0.757679 0.03479,-0.07404 0.05933,-0.154329 0.07027,-0.239865 l 0.53273,-4.143285 c 0.05675,-0.440474 -0.254374,-0.843539 -0.694862,-0.900184 -0.02985,-0.0038 -0.05979,-0.0058 -0.0899,-0.0064 z m -8.085564,13.811724 c -0.380923,0.133206 -0.772014,0.212936 -1.149865,0.269311 -0.0788,0.13867 -0.117565,0.301832 -0.101282,0.472665 l 0.354892,3.72911 c 0.04202,0.442111 0.434527,0.766419 0.876627,0.724309 0.442115,-0.04202 0.766418,-0.434529 0.72431,-0.87663 l -0.355284,-3.729109 c -0.02363,-0.248378 -0.157901,-0.459723 -0.349395,-0.589656 z m -0.942582,3.984288 -5.381478,2.773966 c -0.394743,0.203455 -0.549776,0.688416 -0.346256,1.083125 0.203449,0.394514 0.688121,0.549512 1.082734,0.346257 l 5.741866,-2.959657 c 0.121945,-0.06285 0.220963,-0.152695 0.29365,-0.258317 -0.125721,0.119071 -0.281822,0.208079 -0.467565,0.225733 -0.442098,0.04212 -0.834607,-0.2822 -0.876628,-0.724309 z m -9.319048,1.264105 c -0.346298,-0.0067 -0.661801,0.210684 -0.775737,0.543331 -0.143848,0.420079 0.08007,0.877233 0.500146,1.021098 l 4.320728,1.480025 c 0.31496,0.108014 0.650681,0.009 0.859748,-0.224164 l -0.230837,0.118953 c -0.394613,0.203253 -0.879285,0.04825 -1.082734,-0.346257 -0.203519,-0.394709 -0.04849,-0.87967 0.346256,-1.083125 l 0.235547,-0.121308 -3.927756,-1.34537 c -0.05698,-0.01949 -0.115978,-0.03254 -0.175875,-0.03887 -0.02331,-0.0025 -0.0464,-0.0038 -0.06949,-0.0044 z m -2.062612,-1.952688 c -0.21306,0.0092 -0.413729,0.102699 -0.557854,0.259888 -0.30014,0.327366 -0.277993,0.836082 0.04946,1.136123 l 1.82196,1.669639 c -0.07394,-0.175554 -0.09326,-0.375233 -0.0267,-0.569631 0.121532,-0.354821 0.472248,-0.578478 0.845223,-0.539011 0.0599,0.0064 0.118893,0.01936 0.175877,0.03887 l 0.347824,0.119345 -2.077922,-1.904794 c -0.157121,-0.143953 -0.364969,-0.219639 -0.577869,-0.210424 z m 0.527233,-2.427319 c -0.02627,-6.01e-4 -0.05267,-2.4e-5 -0.07891,0.002 -0.382526,0.02864 -0.691544,0.323519 -0.73805,0.704287 l -0.23908,1.959756 c 0.141838,-0.141231 0.327955,-0.23 0.528804,-0.238688 0.212901,-0.0091 0.420749,0.06647 0.577876,0.210421 l 0.464815,0.42595 0.263813,-2.16272 c 0.05378,-0.440789 -0.25996,-0.841717 -0.700754,-0.895472 -0.02611,-0.0032 -0.05224,-0.0049 -0.07852,-0.0055 z m -0.635978,0.30582 -3.185387,0.78241 c -0.08072,0.01979 -0.15572,0.05117 -0.223378,0.09186 l 0.364313,0.995973 -0.327019,0.402002 c 0.168652,0.08989 0.369444,0.121083 0.569633,0.07184 l 2.457547,-0.603787 0.163312,-1.339872 c 0.01879,-0.153817 0.08897,-0.286534 0.180979,-0.400431 z M 24.09499,35.829204 c -0.02324,0.0095 -0.04599,0.02008 -0.06832,0.03181 -0.393041,0.206445 -0.544359,0.69239 -0.338012,1.085482 l 0.548042,1.043868 0.659532,-0.765529 0.332124,0.908428 c 0.06766,-0.0407 0.142663,-0.07208 0.223378,-0.09186 l 0.555895,-0.136625 -0.586513,-1.117281 c -0.44534,0.09711 -0.893898,0.186253 -1.345762,0.265384 -0.03883,-0.403958 -0.02899,-0.817849 0.01964,-1.223669 z m 2.115216,3.681607 -0.374913,0.09227 c -0.200189,0.04924 -0.400981,0.01805 -0.569633,-0.07184 l -0.06516,0.08008 c 0.236487,0.155882 0.548042,0.182179 0.816565,0.04122 0.07312,-0.03836 0.137492,-0.0864 0.193148,-0.141722 z M 16.942193,33.4011 c -0.13844,-2e-6 -0.275041,0.03591 -0.396112,0.104426 l -3.1371,1.775638 c -0.386711,0.218664 -0.522787,0.709519 -0.303857,1.09608 0.218791,0.386333 0.709318,0.522192 1.095688,0.303465 l 0.306213,-0.173521 -0.05928,-0.710568 2.855621,-0.872705 -4.01e-4,0.0013 0.03533,-0.02002 c 0.386569,-0.218802 0.522458,-0.709622 0.303464,-1.096081 -0.105066,-0.185421 -0.279454,-0.321542 -0.484836,-0.378448 -0.05081,-0.0141 -0.102877,-0.02317 -0.155461,-0.02708 -0.01983,-0.0015 -0.0395,-0.0024 -0.05928,-0.0024 z m -5.895754,-0.236332 c -0.05271,-0.0016 -0.105438,0.0022 -0.157426,0.01099 -0.21021,0.03546 -0.397737,0.152938 -0.521344,0.326625 -0.257373,0.361861 -0.172653,0.863853 0.189224,1.121206 l 2.663649,1.894196 c 0.0049,0.0034 0.01,0.0061 0.01492,0.0093 -0.04579,-0.0476 -0.09629,-0.08984 -0.130337,-0.149965 -0.218929,-0.38656 -0.08286,-0.877416 0.303857,-1.096079 l 0.471877,-0.266928 -2.391986,-1.701046 c -0.129564,-0.09212 -0.283531,-0.143759 -0.442436,-0.148396 z m -0.707036,-3.232105 c -0.03605,0.08724 -0.05816,0.181931 -0.06124,0.281871 l -0.118167,3.84767 c -0.01357,0.441292 0.331212,0.809936 0.771418,0.827558 l -0.374519,-0.266169 c -0.361882,-0.257354 -0.446601,-0.759345 -0.189229,-1.121206 0.123607,-0.173687 0.311134,-0.291173 0.521344,-0.326625 0.052,-0.0088 0.104717,-0.0125 0.157425,-0.01099 0.158906,0.0046 0.312873,0.05628 0.442436,0.148395 l 0.296398,0.210816 0.08205,-2.660119 c -0.116659,0.129843 -0.238751,0.257684 -0.370989,0.381588 -0.449093,-0.400817 -0.83809,-0.840188 -1.15693,-1.312785 z m -0.125232,-0.189225 -1.8066511,0.294045 c -0.4383136,0.07141 -0.7357255,0.48465 -0.6642434,0.922952 0.071407,0.438136 0.4843984,0.735487 0.922561,0.664245 l 1.5769905,-0.256747 0.03533,-1.153399 c 0.0031,-0.09994 0.02519,-0.194627 0.06125,-0.281871 -0.04237,-0.0628 -0.08418,-0.125827 -0.125233,-0.189225 z M 3.6785102,26.298164 c -0.035084,1.96e-4 -0.06999,0.0027 -0.1048189,0.0074 -0.2112234,0.02899 -0.4022829,0.140688 -0.5311595,0.31053 -0.2683344,0.353648 -0.199269,0.857851 0.1542831,1.126311 l 4.7235147,3.585065 c -0.08497,-0.105039 -0.1537643,-0.224175 -0.1770531,-0.367062 -0.07148,-0.4383 0.2259298,-0.851549 0.6642434,-0.922952 l 0.3890462,-0.06321 -4.627725,-3.512801 c -0.1123774,-0.08522 -0.2451956,-0.139372 -0.3851202,-0.15703 -0.034876,-0.0044 -0.070126,-0.0065 -0.1052107,-0.0064 z m 5.1628107,5.297857 -0.1754834,0.02865 c -0.084042,0.01367 -0.1646176,0.0024 -0.2445768,-0.0095 0.1398808,0.03105 0.2849086,0.024 0.4200602,-0.01924 z M 2.6872473,20.853482 c -0.03501,0.0021 -0.069918,0.0067 -0.1044262,0.01335 -0.4358917,0.08447 -0.720794,0.506288 -0.6363712,0.94219 l 0.9779148,5.051711 c 0.027052,-0.08514 0.061074,-0.169345 0.1181671,-0.244578 0.1288766,-0.169842 0.3199371,-0.281539 0.5311595,-0.31053 0.069657,-0.0096 0.1402704,-0.01 0.2100296,-0.0013 0.1399246,0.01767 0.2727428,0.07181 0.3851202,0.157033 l 0.3702033,0.281087 -1.0140329,-5.238973 c -0.069105,-0.35728 -0.3695606,-0.623605 -0.7325535,-0.649323 -0.035063,-0.0025 -0.070199,-0.0029 -0.1052107,-8.36e-4 z m 3.3958114,-4.913524 c -0.070272,-0.0029 -0.1406214,0.0034 -0.2092452,0.01884 -0.2080691,0.04691 -0.3889733,0.174574 -0.5028945,0.354892 l -2.9101899,4.603386 c 0.041594,-0.01558 0.077032,-0.04152 0.122092,-0.05025 0.034511,-0.0067 0.069407,-0.01126 0.1044262,-0.01335 0.035011,-0.0021 0.070146,-0.0019 0.1052107,8.35e-4 0.3629929,0.02572 0.6634548,0.292045 0.7325535,0.649325 L 3.634541,22.069344 6.730029,17.173095 C 6.9675027,16.797807 6.8557065,16.301052 6.4803479,16.063675 6.3610641,15.988311 6.2240448,15.945659 6.0830587,15.940013 Z M 13.6936,15.288277 c -0.02717,-2.22e-4 -0.05442,9.11e-4 -0.08205,0.0035 l -7.3172857,0.685836 c 0.065157,0.0207 0.12779,0.04915 0.1860824,0.08598 0.3753587,0.237377 0.4871548,0.734132 0.2496811,1.109429 l -0.2543916,0.402787 7.2858788,-0.683088 c 0.442078,-0.04143 0.766882,-0.433371 0.725487,-0.875454 -0.03884,-0.414447 -0.385927,-0.725824 -0.793403,-0.729018 z m 30.480251,0.9469 c -0.02462,-7.9e-5 -0.04908,0.0014 -0.07338,0.0035 0.243298,0.144579 0.409753,0.404141 0.400431,0.707034 -0.01352,0.437732 -0.375353,0.779858 -0.811065,0.776129 l 4.603774,5.657462 0.05219,-0.404751 c 0.04771,-0.37203 0.346288,-0.661675 0.719598,-0.698005 0.03001,-0.0029 0.06024,-0.004 0.09029,-0.0035 0.03009,4.02e-4 0.06001,0.0024 0.0899,0.0064 0.12193,0.01568 0.229966,0.06223 0.327015,0.124448 l -4.778095,-5.871823 c -0.134533,-0.165418 -0.329264,-0.270622 -0.54136,-0.292471 -0.02651,-0.0027 -0.05288,-0.0042 -0.0793,-0.0044 z M 15.758208,19.229395 V 7.4499906 l 3.669963,4.9130194 0.769509,-3.1964229 0.947089,2.8412639 0.769509,0.651123 0.887894,0.118386 h 0.473543 l -1.065472,-1.302247 -0.0592,-1.065473 1.657406,-3.2556144 7.872664,-2.9004555 1.775789,0.1183869 4.380281,1.9533681 0.828701,1.1246655 0.651124,2.9596494 -0.0592,0.76951 -0.887895,1.894174 -4.084313,1.953368 4.676245,-0.41435 0.947087,-1.065475 0.473543,-0.769507 0.591926,-2.071754 L 40.264099,7.213219 38.784275,4.9046924 34.108029,2.7145528 30.970802,2.5369735 23.571681,5.3190432 21.559119,7.9827282 20.256873,5.6742016 19.783329,5.7334006 19.073014,9.6993302 14.574348,3.4840675 14.100805,13.073331 11.910664,11.297542 11.6147,11.534314 l 0.947087,3.729156 0.828701,1.59821 z"
    inkscape:label="lineArt"
    transform="translate(-0.7471524,-0.85391694)" />
</g>
</svg>`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (missCloudSVG);


/***/ }),

/***/ "./src/icon/mkIcon.js":
/*!****************************!*\
  !*** ./src/icon/mkIcon.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mkIcon)
/* harmony export */ });
function mkIcon(className, svg) {
  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.classList.add("animate-pop");
  icon.classList.add(className);
  icon.innerHTML = svg;
  return icon;
}


/***/ }),

/***/ "./src/icon/shipSVG.js":
/*!*****************************!*\
  !*** ./src/icon/shipSVG.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let shipSVG = `<svg
version="1.1"
id="svg1"
width="200"
height="200"
viewBox="0 0 200 200"
sodipodi:docname="boat.svg"
inkscape:version="1.3 (0e150ed, 2023-07-21)"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg">
<defs
  id="defs1">
 <linearGradient
    id="swatch12"
    inkscape:swatch="solid">
   <stop
      style="stop-color:#000000;stop-opacity:1;"
      offset="0"
      id="stop12" />
 </linearGradient>
</defs>
<sodipodi:namedview
  id="namedview1"
  pagecolor="#ffffff"
  bordercolor="#000000"
  borderopacity="0.25"
  inkscape:showpageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="0"
  inkscape:deskcolor="#d1d1d1"
  inkscape:zoom="1.6978417"
  inkscape:cx="220.57416"
  inkscape:cy="174.63348"
  inkscape:window-width="1792"
  inkscape:window-height="982"
  inkscape:window-x="1919"
  inkscape:window-y="25"
  inkscape:window-maximized="0"
  inkscape:current-layer="layer6" />
<g
  inkscape:groupmode="layer"
  id="layer6"
  inkscape:label="Ship"
  style="opacity:1">
 <path
    id="path2"
    style="opacity:1;stroke-width:6.66219;stroke-linecap:round"
    d="m 133.47654,47.334539 -28.60531,0.0011 -7.85706,6.046351 -3.144302,6.953866 -7.858537,-1.208131 -17.6806,33.850495 -60.5878238,-14.197017 -4.715712,2.115656 0.943437,39.912451 11.9447988,24.18965 9.115961,9.97848 21.374747,13.00164 113.788831,-2.41912 13.51621,-0.30203 10.05792,-8.16343 5.97314,-15.42216 7.23056,-21.77054 -7.56813,-2.25746 3.8622,-10.0196 -15.14512,-5.02538 -3.8961,10.5173 -6.19721,-1.84907 -4.37666,-32.486387 -18.23045,-7.257363 -16.03105,-11.792086 z m -41.611476,22.147736 22.946156,4.534766 0.94345,27.214259 -36.148386,-6.349809 z m 31.118686,8.768906 18.54591,8.16344 2.20086,13.607119 -19.80334,1.81363 z M 14.731712,91.025955 C 76.658269,110.13359 130.067,117.46704 183.06006,127.82872 l -1.2309,3.76196 C 128.94489,121.25027 77.114938,114.19896 14.958727,95.020455 Z m 0.617657,8.791597 C 76.119521,118.92518 128.52994,126.25863 180.53341,136.62032 l -1.20878,3.76054 C 127.42791,130.04044 76.56748,122.99056 15.571961,103.81206 Z" />
</g>
</svg>`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipSVG);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


(0,_app__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/initStaticDOM.js":
/*!******************************!*\
  !*** ./src/initStaticDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initStaticDOM)
/* harmony export */ });
/* harmony import */ var _BoardContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardContainer */ "./src/BoardContainer.js");
/* harmony import */ var _mkDefeatScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mkDefeatScreen */ "./src/mkDefeatScreen.js");
/* harmony import */ var _mkVictoryScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mkVictoryScreen */ "./src/mkVictoryScreen.js");
/* harmony import */ var _svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgText/mkSVGText */ "./src/svgText/mkSVGText.js");
/* harmony import */ var _toggleSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggleSwitch */ "./src/toggleSwitch.js");





function initStaticDOM() {
  const appBG = document.createElement("div");
  appBG.id = "app-bg";

  const svgHeader = (0,_svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_3__["default"])("BattleShip");
  svgHeader.style.marginTop = "0.8rem";
  appBG.append(svgHeader);

  const newGameBtn = document.createElement("button");
  newGameBtn.innerHTML = "New Game";
  newGameBtn.id = "new-game-btn";

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div");
  const toggle = (0,_toggleSwitch__WEBPACK_IMPORTED_MODULE_4__["default"])("ai-toggle");

  const aiLabel = document.createElement("p");
  aiLabel.id = "ai-label";
  aiLabel.innerHTML = "P2 CPU";

  const github = document.createElement("a");
  github.innerHTML = "GitHub";
  github.href = "https://github.com/TCdotmake/battle-ship/tree/main";
  github.target = "_blank";
  btnDiv.append(newGameBtn, toggle, aiLabel, github);

  const p1Div = mkPlayerDiv("p1");
  const p2Div = mkPlayerDiv("p2");
  p2Div.style.display = "none";
  appBG.append(btnDiv, p1Div, p2Div);
  document.body.append(appBG);
}
function mkPlayerDiv(name) {
  const playerDiv = document.createElement("div");
  playerDiv.id = `${name}-div`;
  playerDiv.classList.add("player-div");
  const playerEnemy = (0,_BoardContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(`${name}-enemy`);
  const playerSelf = (0,_BoardContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(`${name}-self`);
  const playerDefeat = (0,_mkDefeatScreen__WEBPACK_IMPORTED_MODULE_1__["default"])();
  playerDefeat.id = `${name}-defeat`;
  const playerVictory = (0,_mkVictoryScreen__WEBPACK_IMPORTED_MODULE_2__["default"])();
  playerVictory.id = `${name}-victory`;
  playerEnemy.append(playerDefeat);
  playerSelf.append(playerVictory);
  playerDiv.append(playerEnemy, playerSelf);
  return playerDiv;
}


/***/ }),

/***/ "./src/mkDefeatScreen.js":
/*!*******************************!*\
  !*** ./src/mkDefeatScreen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mkDefeatScreen)
/* harmony export */ });
/* harmony import */ var _svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgText/mkSVGText */ "./src/svgText/mkSVGText.js");

function mkDefeatScreen() {
  const screen = document.createElement("div");
  screen.classList.add("win-screen");
  const msg = document.createElement("p");
  msg.classList.add("win-msg");
  msg.append((0,_svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_0__["default"])("Defeat!"));
  screen.append(msg);
  return screen;
}


/***/ }),

/***/ "./src/mkGame.js":
/*!***********************!*\
  !*** ./src/mkGame.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mkGame)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Player.js");


function mkGame() {
  let gameObj = {
    active: false,
    toggleP2AI() {
      this.p2.AI = !this.p2.AI;
    },
    setP2AI(val) {
      this.p2.AI = val;
    },
    togglePlayer() {
      if (this.currentPlayer === this.p1) {
        this.currentPlayer = this.p2;
      } else this.currentPlayer = this.p1;
    },
  };
  gameObj.p1 = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])("p1");
  gameObj.p2 = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])("p2");
  gameObj.p1.setOpponent(gameObj.p2);
  gameObj.p2.setOpponent(gameObj.p1);
  gameObj.currentPlayer = gameObj.p1;
  return gameObj;
}


/***/ }),

/***/ "./src/mkVictoryScreen.js":
/*!********************************!*\
  !*** ./src/mkVictoryScreen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mkVictoryScreen)
/* harmony export */ });
/* harmony import */ var _svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgText/mkSVGText */ "./src/svgText/mkSVGText.js");

function mkVictoryScreen() {
  const screen = document.createElement("div");
  screen.classList.add("win-screen");
  const msg = document.createElement("p");
  msg.classList.add("win-msg");
  msg.append((0,_svgText_mkSVGText__WEBPACK_IMPORTED_MODULE_0__["default"])("Victory!"));
  screen.append(msg);
  return screen;
}


/***/ }),

/***/ "./src/modal/mkModal.js":
/*!******************************!*\
  !*** ./src/modal/mkModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mkModal)
/* harmony export */ });
function mkModal() {
  const modalBG = document.createElement("div");
  modalBG.classList.add("modal");
  modalBG.addEventListener("click", () => {
    modalBG.style.display = "none";
  });
  return modalBG;
}


/***/ }),

/***/ "./src/modal/switchPlayerModal.js":
/*!****************************************!*\
  !*** ./src/modal/switchPlayerModal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mkModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mkModal */ "./src/modal/mkModal.js");


const switchModal = (0,_mkModal__WEBPACK_IMPORTED_MODULE_0__["default"])();
switchModal.id = "switch-modal";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchModal);


/***/ }),

/***/ "./src/placeRandShips.js":
/*!*******************************!*\
  !*** ./src/placeRandShips.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeRandShips)
/* harmony export */ });
//takes in a player and place ships randomly on it's board

const shiplengths = [5, 4, 3, 3, 2];
function randPos() {
  return Math.floor(Math.random() * 10);
}
function placeRandShips(player) {
  for (let n of shiplengths) {
    let done = false;
    while (!done) {
      done = player.placeShip(randPos(), randPos(), n, randPos() > 5);
    }
  }
}


/***/ }),

/***/ "./src/svgText/mkSVGText.js":
/*!**********************************!*\
  !*** ./src/svgText/mkSVGText.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mkSVGText)
/* harmony export */ });
function mkSVGText(text) {
  let textDiv = document.createElement("div");
  textDiv.style.width = "20rem";
  textDiv.style.height = "5.7rem";
  textDiv.innerHTML = `<svg width="100%" height="100%">
<filter id="bevel">
  <!-- color for stroke and bevel -->
  <feFlood result="STROKE-color" class="stroke-color"></feFlood>
  <feFlood result="BEVEL-color" class="bevel-color"></feFlood>
  <!-- stroke -->
  <feMorphology
    in="SourceAlpha"
    operator="dilate"
    radius="3"
    result="STROKE_1"
  ></feMorphology>
  <!-- bevel -->
  <feConvolveMatrix
    order="4,4"
    kernelMatrix="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"
    in="STROKE_1"
    result="BEVEL_1"
    divisor="1"
  ></feConvolveMatrix>
  <feOffset dx="4" dy="4" in="BEVEL_1" result="BEVEL_2"></feOffset>
  <!-- apply color -->
  <feComposite
    in="STROKE-color"
    in2="STROKE_1"
    operator="in"
    result="STROKE_2"
  ></feComposite>
  <feComposite
    in="BEVEL-color"
    in2="BEVEL_2"
    operator="in"
    result="BEVEL_3"
  ></feComposite>
  <!-- combine -->
  <feMerge result="final">
    <feMergeNode in="BEVEL_3"></feMergeNode>
    <feMergeNode in="STROKE_2"></feMergeNode>
    <feMergeNode in="SourceGraphic"></feMergeNode>
  </feMerge>
</filter>

<text
x="48%"
y="55%"
  class="text-color svg-text"
>
  ${text}
</text>
</svg>
`;
  return textDiv;
}


/***/ }),

/***/ "./src/toggleSwitch.js":
/*!*****************************!*\
  !*** ./src/toggleSwitch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleSwitch)
/* harmony export */ });
function toggleSwitch(id) {
  const toggleDiv = document.createElement("div");
  toggleDiv.classList.add("toggle-div");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  const label = document.createElement("label");
  label.htmlFor = id;
  toggleDiv.append(input, label);
  return toggleDiv;
}


/***/ }),

/***/ "./src/fonts/lilitaone/lilita-one-v15-latin-regular.woff2":
/*!****************************************************************!*\
  !*** ./src/fonts/lilitaone/lilita-one-v15-latin-regular.woff2 ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "793571c24c118db57c18.woff2";

/***/ }),

/***/ "./src/img/battleShipPattern_200px_dark50.png":
/*!****************************************************!*\
  !*** ./src/img/battleShipPattern_200px_dark50.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a991cc77d3d6bbb83f7e.png";

/***/ }),

/***/ "./src/img/battleShipPattern_200px_light65.png":
/*!*****************************************************!*\
  !*** ./src/img/battleShipPattern_200px_light65.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df6d15da7b4e7f636aa4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsS0FBSztBQUNMO0FBQ0EsZUFBZSxtREFBTTtBQUNyQixlQUFlLG1EQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjRDO0FBQzdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhEQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUGdDOztBQUVoQyxvQkFBb0Isb0RBQU87QUFDM0I7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2FuaW1hdGUtcG9wLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2NvbG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9mb250cy9saWxpdGFvbmUvbGlsaXRhb25lLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lRW5kLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pY29uL2ljb24uY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9wbGF5ZXJEaXYuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3Jlc2V0U3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdmdUZXh0L3N2Z1RleHQuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3RvZ2dsZVN3aXRjaC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvQm9hcmRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL05ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2Rpc3BsYXlTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pY29uL2Jvb21TVkcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaWNvbi9taXNzQ2xvdWRTVkcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaWNvbi9ta0ljb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaWNvbi9zaGlwU1ZHLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2luaXRTdGF0aWNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbWtEZWZlYXRTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbWtHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21rVmljdG9yeVNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2RhbC9ta01vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZGFsL3N3aXRjaFBsYXllck1vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3BsYWNlUmFuZFNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N2Z1RleHQvbWtTVkdUZXh0LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3RvZ2dsZVN3aXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFuaW1hdGUtcG9wIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1wb3A7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI2LCAwLjUzLCAwLjc0LCAxLjQ4KTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlLXBvcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG59XG5cbi5hbmltYXRlLXBvcC1sb29wIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1wb3AtbG9vcDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZS1wb3AtbG9vcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hbmltYXRlLXBvcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFVBQVU7SUFDViwwQkFBMEI7RUFDNUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYW5pbWF0ZS1wb3Age1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGUtcG9wO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjYsIDAuNTMsIDAuNzQsIDEuNDgpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtcG9wIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtcG9wLWxvb3Age1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGUtcG9wLWxvb3A7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlLXBvcC1sb29wIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JhdHRsZVNoaXBQYXR0ZXJuXzIwMHB4X2xpZ2h0NjUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjYXBwLWJnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLmJ0bi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAtMC41cmVtO1xuICA+ICoge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlsaXRhIE9uZVwiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICA+IGJ1dHRvbixcbiAgYSB7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xuICB9XG59XG5cbiNhaS1sYWJlbCB7XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuXG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jYWktbGFiZWwub24ge1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcbn1cblxuYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlEQUFrRTtFQUNsRSx5QkFBeUI7O0VBRXpCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQjtJQUNFLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjtFQUNBOztJQUVFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCOztFQUV0QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjs7RUFFbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjYXBwLWJnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcvYmF0dGxlU2hpcFBhdHRlcm5fMjAwcHhfbGlnaHQ2NS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uYnRuLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjVyZW07XFxuICA+ICoge1xcbiAgICBmbGV4OiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIkxpbGl0YSBPbmVcXFwiO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICA+IGJ1dHRvbixcXG4gIGEge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcXG4gIH1cXG59XFxuXFxuI2FpLWxhYmVsIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG5cXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FpLWxhYmVsLm9uIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcXG59XFxuXFxuYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tYmx1ZTogIzAwODhhYTtcbiAgLS1yZWQ6ICNkNDQ4NDg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb2xvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJsdWU6ICMwMDg4YWE7XFxuICAtLXJlZDogI2Q0NDg0ODtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2xpbGl0YS1vbmUtdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGxpbGl0YS1vbmUtcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXG4gIGZvbnQtZmFtaWx5OiBcIkxpbGl0YSBPbmVcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTsgLyogQ2hyb21lIDM2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KywgU2FmYXJpIDEyKywgaU9TIDEwKyAqL1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9udHMvbGlsaXRhb25lL2xpbGl0YW9uZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsK0JBQStCO0FBQy9CO0VBQ0Usa0JBQWtCLEVBQUUsc0dBQXNHO0VBQzFILHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDREQUFnRSxFQUFFLDREQUE0RDtBQUNoSVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBsaWxpdGEtb25lLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIkxpbGl0YSBPbmVcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2xpbGl0YS1vbmUtdjE1LWxhdGluLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYXR0bGVTaGlwUGF0dGVybl8yMDBweF9kYXJrNTAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud2luLXNjcmVlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nYW1lRW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlEQUFpRTtFQUNqRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpbi1zY3JlZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5ODtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcvYmF0dGxlU2hpcFBhdHRlcm5fMjAwcHhfZGFyazUwLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaWNvbiB7XG4gID4gc3ZnIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cbn1cblxuLnAxLWljb24ge1xuICA+IHN2ZyB7XG4gICAgPiBnIHtcbiAgICAgID4gcGF0aCB7XG4gICAgICAgIGZpbGw6IHZhcigtLWJsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucDItaWNvbiB7XG4gID4gc3ZnIHtcbiAgICA+IGcge1xuICAgICAgPiBwYXRoIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcmVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmdpdGh1Yi1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID4gc3ZnIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICA+IHBhdGgge1xuICAgICAgZmlsbDogYmxhY2s7XG4gICAgfVxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pY29uL2ljb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO01BQ0U7UUFDRSxpQkFBaUI7TUFDbkI7SUFDRjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO01BQ0U7UUFDRSxnQkFBZ0I7TUFDbEI7SUFDRjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEI7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDO01BQ0UsV0FBVztJQUNiO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaWNvbiB7XFxuICA+IHN2ZyB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICB9XFxufVxcblxcbi5wMS1pY29uIHtcXG4gID4gc3ZnIHtcXG4gICAgPiBnIHtcXG4gICAgICA+IHBhdGgge1xcbiAgICAgICAgZmlsbDogdmFyKC0tYmx1ZSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5wMi1pY29uIHtcXG4gID4gc3ZnIHtcXG4gICAgPiBnIHtcXG4gICAgICA+IHBhdGgge1xcbiAgICAgICAgZmlsbDogdmFyKC0tcmVkKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmdpdGh1Yi1pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgPiBzdmcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgID4gcGF0aCB7XFxuICAgICAgZmlsbDogYmxhY2s7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmF0dGxlU2hpcFBhdHRlcm5fMjAwcHhfZGFyazUwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlEQUFrRTtFQUNsRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL2JhdHRsZVNoaXBQYXR0ZXJuXzIwMHB4X2Rhcms1MC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogOTk5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wbGF5ZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuI3AxLWRpdiB7XG4gID4gLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICB9XG59XG4jcDItZGl2IHtcbiAgPiAuYm9hcmQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLXJlZCk7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXJlZCk7XG4gIH1cbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB3aWR0aDogMjJyZW07XG4gIGhlaWdodDogMjJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5lbXB0eSB7XG4gIGdyaWQtYXJlYTogMTtcbn1cblxuLnhsYWJlbCB7XG4gIGdyaWQtYXJlYTogMS8yLzIvMTI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnlsYWJlbCB7XG4gIGdyaWQtYXJlYTogMi8xLzEyLzI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4ueGxhYmVsLFxuLnlsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiTGlsaXRhIE9uZVwiO1xufVxuXG4uY2VsbC1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDIvMi8xMi8xMjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uY2VsbC1jb250YWluZXIge1xuICBnYXA6IDFweDtcbiAgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4ubGFiZWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jZWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGxheWVyRGl2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyxvQ0FBb0M7RUFDdEM7QUFDRjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLG1DQUFtQztFQUNyQztBQUNGOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsUUFBUTtFQUNSO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wbGF5ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbiNwMS1kaXYge1xcbiAgPiAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICB9XFxufVxcbiNwMi1kaXYge1xcbiAgPiAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tcmVkKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXJlZCk7XFxuICB9XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgd2lkdGg6IDIycmVtO1xcbiAgaGVpZ2h0OiAyMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgZ3JpZC1hcmVhOiAxO1xcbn1cXG5cXG4ueGxhYmVsIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMTI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnlsYWJlbCB7XFxuICBncmlkLWFyZWE6IDIvMS8xMi8yO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4ueGxhYmVsLFxcbi55bGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMaWxpdGEgT25lXFxcIjtcXG59XFxuXFxuLmNlbGwtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMi8yLzEyLzEyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5jZWxsLWNvbnRhaW5lciB7XFxuICBnYXA6IDFweDtcXG4gID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5vbCxcbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Ozs7Ozs7RUFVRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0U3R5bGUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9udHMvbGlsaXRhb25lL2xpbGl0YW9uZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGF5ZXJEaXYuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWNvbi9pY29uLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsL21vZGFsLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lRW5kLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N2Z1RleHQvc3ZnVGV4dC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2dnbGVTd2l0Y2guY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGUtcG9wLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEwX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypyZXNldCBzdHlsZSovXG5cbi8qYm9sZCBmb250Ki9cblxuLypCb2FyZCBDb250YWluZXIqL1xuXG4vKmljb24qL1xuXG4vKm1vZGFsKi9cblxuLyphcHAsIGdlbmVyYWwgYXBwZXJhbmNlKi9cblxuLyplbmQgZ2FtZSBtc2cqL1xuXG4vKnN2ZyBmb250Ki9cblxuLypjb2xvciB2YXJpYWJsZXMqL1xuXG4vKnRvZ2dsZVN3aXRjaCovXG5cbi8qcG9wIGFuaW1hdGlvbiovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7QUFHZCxZQUFZOztBQUdaLGtCQUFrQjs7QUFHbEIsT0FBTzs7QUFHUCxRQUFROztBQUdSLHlCQUF5Qjs7QUFHekIsZUFBZTs7QUFHZixXQUFXOztBQUdYLGtCQUFrQjs7QUFHbEIsZUFBZTs7QUFHZixnQkFBZ0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypyZXNldCBzdHlsZSovXFxuQGltcG9ydCBcXFwiLi9yZXNldFN0eWxlLmNzc1xcXCI7XFxuXFxuLypib2xkIGZvbnQqL1xcbkBpbXBvcnQgXFxcIi4vZm9udHMvbGlsaXRhb25lL2xpbGl0YW9uZS5jc3NcXFwiO1xcblxcbi8qQm9hcmQgQ29udGFpbmVyKi9cXG5AaW1wb3J0IFxcXCIuL3BsYXllckRpdi5jc3NcXFwiO1xcblxcbi8qaWNvbiovXFxuQGltcG9ydCBcXFwiLi9pY29uL2ljb24uY3NzXFxcIjtcXG5cXG4vKm1vZGFsKi9cXG5AaW1wb3J0IFxcXCIuL21vZGFsLy9tb2RhbC5jc3NcXFwiO1xcblxcbi8qYXBwLCBnZW5lcmFsIGFwcGVyYW5jZSovXFxuQGltcG9ydCBcXFwiLi9hcHAuY3NzXFxcIjtcXG5cXG4vKmVuZCBnYW1lIG1zZyovXFxuQGltcG9ydCBcXFwiLi9nYW1lRW5kLmNzc1xcXCI7XFxuXFxuLypzdmcgZm9udCovXFxuQGltcG9ydCBcXFwiLi9zdmdUZXh0L3N2Z1RleHQuY3NzXFxcIjtcXG5cXG4vKmNvbG9yIHZhcmlhYmxlcyovXFxuQGltcG9ydCBcXFwiLi9jb2xvci5jc3NcXFwiO1xcblxcbi8qdG9nZ2xlU3dpdGNoKi9cXG5AaW1wb3J0IFxcXCIuL3RvZ2dsZVN3aXRjaC5jc3NcXFwiO1xcblxcbi8qcG9wIGFuaW1hdGlvbiovXFxuQGltcG9ydCBcXFwiLi9hbmltYXRlLXBvcC5jc3NcXFwiO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnN0cm9rZS1jb2xvciB7XG4gIGZsb29kLWNvbG9yOiAjZmZmO1xufVxuXG4uYmV2ZWwtY29sb3Ige1xuICBmbG9vZC1jb2xvcjogdmFyKC0tcmVkKTtcbn1cblxuLnRleHQtY29sb3Ige1xuICBmaWxsOiB2YXIoLS1ibHVlKTtcbn1cblxuLnN2Zy10ZXh0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICBmb250LWZhbWlseTogXCJMaWxpdGEgT25lXCI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgZG9taW5hbnQtYmFzZWxpbmU6IG1pZGRsZTtcbiAgZmlsdGVyOiB1cmwoI2JldmVsKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N2Z1RleHQvc3ZnVGV4dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3Ryb2tlLWNvbG9yIHtcXG4gIGZsb29kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYmV2ZWwtY29sb3Ige1xcbiAgZmxvb2QtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50ZXh0LWNvbG9yIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uc3ZnLXRleHQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMaWxpdGEgT25lXFxcIjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBkb21pbmFudC1iYXNlbGluZTogbWlkZGxlO1xcbiAgZmlsdGVyOiB1cmwoI2JldmVsKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudG9nZ2xlLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gID4gbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYmFja2dyb3VuZDogZ3JleTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICA+IGxhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDRweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbiAgfVxuICA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDRweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9nZ2xlU3dpdGNoLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0VBQzlCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZ2dsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuICA+IGxhYmVsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgPiBsYWJlbDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcbiAgPiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgfVxcbiAgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gNHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZENvbnRhaW5lcihuYW1lKSB7XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbXB0eS5jbGFzc0xpc3QuYWRkKFwiZW1wdHlcIik7XG4gIGNvbnN0IHhsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHhsYWJlbC5jbGFzc0xpc3QuYWRkKFwieGxhYmVsXCIpO1xuICBjb25zdCB5bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB5bGFiZWwuY2xhc3NMaXN0LmFkZChcInlsYWJlbFwiKTtcbiAgY29uc3QgY2VsbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNlbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNlbGwtY29udGFpbmVyXCIpO1xuICBjZWxsQ29udGFpbmVyLmlkID0gbmFtZTtcbiAgYm9hcmRDb250YWluZXIuYXBwZW5kKGVtcHR5LCB4bGFiZWwsIHlsYWJlbCwgY2VsbENvbnRhaW5lcik7XG4gIHhsYWJlbC5hcHBlbmQoLi4ueExhYmVsQXJyKCkpO1xuICB5bGFiZWwuYXBwZW5kKC4uLnlMYWJlbEFycigpKTtcbiAgY2VsbENvbnRhaW5lci5hcHBlbmQoLi4uY2VsbEFycigpKTtcbiAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjZWxsQXJyKHNpemUgPSAxMCkge1xuICBjb25zdCBsZW5ndGggPSBzaXplICogc2l6ZTtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIGNlbGwuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgY2VsbC5kYXRhc2V0LnggPSBpICUgc2l6ZTtcbiAgICBjZWxsLmRhdGFzZXQueSA9IE1hdGguZmxvb3IoaSAvIHNpemUpO1xuICAgIGFyci5wdXNoKGNlbGwpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHhMYWJlbEFycigpIHtcbiAgbGV0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwibGFiZWwtY29udGFpbmVyXCIpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGkgKyAxO1xuICAgIGl0ZW0uYXBwZW5kKGxhYmVsKTtcbiAgICBhcnIucHVzaChpdGVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiB5TGFiZWxBcnIoKSB7XG4gIGxldCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImxhYmVsLWNvbnRhaW5lclwiKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSk7XG4gICAgaXRlbS5hcHBlbmQobGFiZWwpO1xuICAgIGFyci5wdXNoKGl0ZW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoc2l6ZSA9IDEwKSB7XG4gIGlmIChzaXplID49IDApIHtcbiAgICBjb25zdCBsZW5ndGggPSBzaXplICogc2l6ZTtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIucHVzaChudWxsKTtcbiAgICB9XG4gICAgY29uc3QgZ2FtZUJvYXJkT2JqID0ge1xuICAgICAgc2l6ZSxcbiAgICAgIHNoaXBzOiBbXSxcbiAgICAgIGJvYXJkOiBbLi4uYXJyXSxcbiAgICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbLi4uYXJyXTtcbiAgICAgIH0sXG4gICAgICBpbkJvdW5kKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5zaXplICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5zaXplO1xuICAgICAgfSxcblxuICAgICAgZ2V0SW5kZXgoeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5pbkJvdW5kKHgsIHkpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuc2l6ZSAqIHkpICsgcGFyc2VJbnQoeCk7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSxcblxuICAgICAgc2V0VG9rZW4oeCwgeSwgdG9rZW4pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4KHgsIHkpO1xuICAgICAgICBpZiAoaW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldFRva2VuKHgsIHkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4KHgsIHkpO1xuICAgICAgICBpZiAoaW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNFbXB0eSh4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRva2VuKHgsIHkpID09PSBudWxsO1xuICAgICAgfSxcbiAgICAgIGFsbG9jYXRlU3BhY2UoeCwgeSwgc2hpcExlbmd0aCwgdmVydGljYWwgPSB0cnVlKSB7XG4gICAgICAgIGxldCBpbmRleEFyciA9IFtdO1xuICAgICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5Cb3VuZCh4LCB5ICsgaSkgJiYgdGhpcy5pc0VtcHR5KHgsIHkgKyBpKSkge1xuICAgICAgICAgICAgICBpbmRleEFyci5wdXNoKHRoaXMuZ2V0SW5kZXgoeCwgeSArIGkpKTtcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5Cb3VuZCh4ICsgaSwgeSkgJiYgdGhpcy5pc0VtcHR5KHggKyBpLCB5KSkge1xuICAgICAgICAgICAgICBpbmRleEFyci5wdXNoKHRoaXMuZ2V0SW5kZXgoeCArIGksIHkpKTtcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXhBcnI7XG4gICAgICB9LFxuICAgICAgcGxhY2VTaGlwKHgsIHksIHNoaXBMZW5ndGgsIHZlcnRpY2FsID0gdHJ1ZSkge1xuICAgICAgICBsZXQgaW5kQXJyID0gdGhpcy5hbGxvY2F0ZVNwYWNlKHgsIHksIHNoaXBMZW5ndGgsIHZlcnRpY2FsKTtcbiAgICAgICAgaWYgKGluZEFyciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcEluZGV4ID0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKFNoaXAoc2hpcExlbmd0aCkpO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4IG9mIGluZEFycikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0gPSBzaGlwSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHZhbGlkQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgbGV0IHRva2VuID0gdGhpcy5nZXRUb2tlbih4LCB5KTtcbiAgICAgICAgcmV0dXJuIHRva2VuICE9IFwibWlzc2VkXCIgJiYgdG9rZW4gIT0gXCJoaXRcIjtcbiAgICAgIH0sXG4gICAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pbkJvdW5kKHgsIHkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRUb2tlbih4LCB5KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbih4LCB5LCBcIm1pc3NlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4oeCwgeSwgXCJoaXRcIik7XG4gICAgICAgICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdLmhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICAgIGlzRGVmZWF0ZWQoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gZ2FtZUJvYXJkT2JqO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IGRpc3BsYXlTaGlwcyBmcm9tIFwiLi9kaXNwbGF5U2hpcHNcIjtcbmltcG9ydCBwbGFjZVJhbmRTaGlwcyBmcm9tIFwiLi9wbGFjZVJhbmRTaGlwc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdHYW1lKGdhbWVPYmopIHtcbiAgLy9uZXdnYW1lIHJvdXRpbmUgZm9yIGRhdGFcbiAgLy9yZXNldCBib2FyZCBkYXRhIGZvciBib3RoIHBsYXllcnNcbiAgZ2FtZU9iai5wMS5yZXNldEJvYXJkKCk7XG4gIGdhbWVPYmoucDIucmVzZXRCb2FyZCgpO1xuICAvL3JhbmRvbWx5IHNldCBzaGlwcyBvbiBib3RoIGJvYXJkc1xuICBwbGFjZVJhbmRTaGlwcyhnYW1lT2JqLnAxKTtcbiAgcGxhY2VSYW5kU2hpcHMoZ2FtZU9iai5wMik7XG4gIC8vc2V0IGN1cnJlbnRQbGF5ZXIgdG8gcDFcbiAgZ2FtZU9iai5jdXJyZW50UGxheWVyID0gZ2FtZU9iai5wMTtcbiAgLy8gc2V0IGdhbWUgdG8gYWN0aXZlXG4gIGdhbWVPYmouYWN0aXZlID0gdHJ1ZTtcblxuICAvL25ld2dhbWUgcm91dGluZSBmb3IgdmlzdWFsXG4gIC8vZW1wdHkgYWxsIGNlbGxzXG4gIGNvbnN0IGNlbGxzQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuICBmb3IgKGxldCBjZWxsIG9mIGNlbGxzQXJyKSB7XG4gICAgY2VsbC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG4gIC8vcG9wdWxhdGUgYm9hcmQgd2l0aCBzaGlwc1xuICBkaXNwbGF5U2hpcHMoXCJwMS1zZWxmXCIsIGdhbWVPYmoucDEpO1xuICBkaXNwbGF5U2hpcHMoXCJwMi1zZWxmXCIsIGdhbWVPYmoucDIpO1xuICAvL2dldCByaWQgb2Ygd2luIHNjcmVlbnNcbiAgY29uc3Qgc2NyZWVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2luLXNjcmVlblwiKTtcbiAgZm9yIChsZXQgaXRlbSBvZiBzY3JlZW5zKSB7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkXCI7XG5mdW5jdGlvbiByYW5kSW5kZXgobGVuZ3RoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgbGV0IHBsYXllck9iaiA9IHtcbiAgICAuLi5HYW1lQm9hcmQoKSxcbiAgICBuYW1lLFxuICAgIEFJOiBmYWxzZSxcbiAgICBvcHBvbmVudDogdW5kZWZpbmVkLFxuICAgIHNldE9wcG9uZW50KGFub3RoZXJQbGF5ZXIpIHtcbiAgICAgIHRoaXMub3Bwb25lbnQgPSBhbm90aGVyUGxheWVyO1xuICAgIH0sXG4gICAgYXR0YWNrKHgsIHkpIHtcbiAgICAgIGxldCByZXN1bHQgPSB0aGlzLm9wcG9uZW50LnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgQUltb3ZlKCkge1xuICAgICAgLy9nZXQgYSBsaXN0IG9mIHZhbGlkIG1vdmVzXG4gICAgICBjb25zdCB0YXJnZXRCb2FyZCA9IHRoaXMub3Bwb25lbnQuYm9hcmQ7XG4gICAgICBjb25zdCBtb3Zlc0FyciA9IFtdO1xuICAgICAgZm9yIChsZXQgaW5kZXggaW4gdGFyZ2V0Qm9hcmQpIHtcbiAgICAgICAgaWYgKHRhcmdldEJvYXJkW2luZGV4XSAhPSBcImhpdFwiICYmIHRhcmdldEJvYXJkW2luZGV4XSAhPSBcIm1pc3NlZFwiKSB7XG4gICAgICAgICAgbW92ZXNBcnIucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhbmRBdHRhY2sgPSBtb3Zlc0FycltyYW5kSW5kZXgobW92ZXNBcnIubGVuZ3RoKV07XG4gICAgICBjb25zdCB4ID0gcmFuZEF0dGFjayAlIHRoaXMub3Bwb25lbnQuc2l6ZTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKHJhbmRBdHRhY2sgLyB0aGlzLm9wcG9uZW50LnNpemUpO1xuICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBwbGF5ZXJPYmo7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIGhpdCgpIHtcbiAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IE5ld0dhbWUgZnJvbSBcIi4vTmV3R2FtZVwiO1xuaW1wb3J0IGluaXRTdGF0aWNET00gZnJvbSBcIi4vaW5pdFN0YXRpY0RPTVwiO1xuaW1wb3J0IG1rR2FtZSBmcm9tIFwiLi9ta0dhbWVcIjtcbmltcG9ydCBzd2l0Y2hNb2RhbCBmcm9tIFwiLi9tb2RhbC9zd2l0Y2hQbGF5ZXJNb2RhbFwiO1xuaW1wb3J0IG1rSWNvbiBmcm9tIFwiLi9pY29uL21rSWNvblwiO1xuaW1wb3J0IGJvb21TVkcgZnJvbSBcIi4vaWNvbi9ib29tU1ZHXCI7XG5pbXBvcnQgbWlzc0Nsb3VkU1ZHIGZyb20gXCIuL2ljb24vbWlzc0Nsb3VkU1ZHXCI7XG5pbXBvcnQgbWtTVkdUZXh0IGZyb20gXCIuL3N2Z1RleHQvbWtTVkdUZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcCgpIHtcbiAgaW5pdFN0YXRpY0RPTSgpO1xuICBjb25zdCBnYW1lID0gbWtHYW1lKCk7XG4gIGFkZE5ld0dhbWVFTChnYW1lKTtcbiAgY2VsbHNBZGRFTChnYW1lLnAxLCBnYW1lKTtcbiAgY2VsbHNBZGRFTChnYW1lLnAyLCBnYW1lKTtcbiAgbGV0IGFwcEJHID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAtYmdcIik7XG4gIGFwcEJHLmFwcGVuZChzd2l0Y2hNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0dhbWVFTChnYW1lT2JqKSB7XG4gIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1nYW1lLWJ0blwiKTtcbiAgbmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgTmV3R2FtZShnYW1lT2JqKTtcbiAgICBvcGVuU3dpdGNoTW9kYWwoZ2FtZU9iaik7XG4gIH0pO1xuICBjb25zdCB0b2dnbGVBSUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWktdG9nZ2xlXCIpO1xuICB0b2dnbGVBSUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgZ2FtZU9iai5zZXRQMkFJKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWktbGFiZWxcIik7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZShcIm9uXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Td2l0Y2hNb2RhbChnYW1lT2JqKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2gtbW9kYWxcIik7XG5cbiAgbGV0IG5hbWUgPSBnYW1lT2JqLmN1cnJlbnRQbGF5ZXIubmFtZTtcbiAgaWYgKG5hbWUgPT09IFwicDFcIikge1xuICAgIHN3aXRjaE1vZGFsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHAxcmR5ID0gbWtTVkdUZXh0KFwiUDEgUmVhZHk/XCIpO1xuICAgIHAxcmR5LnN0eWxlLmhlaWdodCA9IFwiNS41cmVtXCI7XG4gICAgc3dpdGNoTW9kYWwuYXBwZW5kKHAxcmR5KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2hNb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBwMnJkeSA9IG1rU1ZHVGV4dChcIlAyIFJlYWR5P1wiKTtcbiAgICBwMnJkeS5zdHlsZS5oZWlnaHQgPSBcIjUuNXJlbVwiO1xuICAgIHN3aXRjaE1vZGFsLmFwcGVuZChwMnJkeSk7XG4gIH1cbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBzd2l0Y2hEaXNwbGF5ZWRCb2FyZChnYW1lT2JqLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoRGlzcGxheWVkQm9hcmQoZ2FtZU9iaiwgbmFtZSkge1xuICBjb25zdCBvcHBvbmVudCA9IGdhbWVPYmouY3VycmVudFBsYXllci5vcHBvbmVudDtcbiAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LWRpdmApO1xuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3Bwb25lbnQubmFtZX0tZGl2YCk7XG4gIHByZXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gY2VsbHNBZGRFTChwbGF5ZXIsIGdhbWVPYmopIHtcbiAgbGV0IG5hbWUgPSBwbGF5ZXIubmFtZTtcbiAgbGV0IGlkID0gYCR7bmFtZX0tZW5lbXlgO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNlbGxzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChnYW1lT2JqLmFjdGl2ZSAmJiBnYW1lT2JqLmN1cnJlbnRQbGF5ZXIubmFtZSA9PT0gcGxheWVyLm5hbWUpIHtcbiAgICAgICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcbiAgICAgICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcbiAgICAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIuYXR0YWNrKHgsIHkpO1xuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICB1cGRhdGVCb2FyZHMocGxheWVyLCB4LCB5KTtcbiAgICAgICAgICAvL2NoZWNrIGZvciB3aW5uZXIsIG1ha2UgZ2FtZSBpbmFjdGl2ZSBpcyB3b25cbiAgICAgICAgICBjaGVja0Zvcldpbm5lcihnYW1lT2JqKTtcbiAgICAgICAgICBpZiAoIWdhbWVPYmouYWN0aXZlKSB7XG4gICAgICAgICAgICBkaXNwbGF5V2lubmVyKGdhbWVPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL3N3aXRjaCBjdXJyZW50UGxheWVyIGFuZCBjb250aW51ZSB3aXRoIGdhbWVcbiAgICAgICAgICBlbHNlIGlmIChnYW1lT2JqLmFjdGl2ZSkge1xuICAgICAgICAgICAgZ2FtZU9iai50b2dnbGVQbGF5ZXIoKTtcbiAgICAgICAgICAgIC8vaWYgcGxheWluZyBhZ2FpbnN0IGFub3RoZXIgcGxheWVyLCBwdWxsIHVwIG1vZGFsXG4gICAgICAgICAgICBpZiAoIWdhbWVPYmouY3VycmVudFBsYXllci5BSSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVuU3dpdGNoTW9kYWwoZ2FtZU9iaik7XG4gICAgICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIHBsYXlpbmcgYWdhaW5zdCBBSVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBtb3ZlID0gZ2FtZU9iai5jdXJyZW50UGxheWVyLkFJbW92ZSgpO1xuICAgICAgICAgICAgICBnYW1lT2JqLmN1cnJlbnRQbGF5ZXIuYXR0YWNrKG1vdmUueCwgbW92ZS55KTtcbiAgICAgICAgICAgICAgdXBkYXRlQm9hcmRzKGdhbWVPYmouY3VycmVudFBsYXllciwgbW92ZS54LCBtb3ZlLnkpO1xuICAgICAgICAgICAgICBjaGVja0Zvcldpbm5lcihnYW1lT2JqKTtcbiAgICAgICAgICAgICAgaWYgKCFnYW1lT2JqLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlXaW5uZXIoZ2FtZU9iaik7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU9iai5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBnYW1lT2JqLnRvZ2dsZVBsYXllcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkcyhwbGF5ZXIsIHgsIHkpIHtcbiAgY29uc3Qgb3Bwb25lbnQgPSBwbGF5ZXIub3Bwb25lbnQ7XG4gIGNvbnN0IHRva2VuID0gb3Bwb25lbnQuZ2V0VG9rZW4oeCwgeSk7XG4gIGNvbnN0IGluZGV4ID0gb3Bwb25lbnQuZ2V0SW5kZXgoeCwgeSk7XG4gIGNvbnN0IHBsYXllckNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXIubmFtZX0tZW5lbXlgKS5jaGlsZHJlbltcbiAgICBpbmRleFxuICBdO1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3Bwb25lbnQubmFtZX0tc2VsZmApLmNoaWxkcmVuW2luZGV4XTtcbiAgLy9maW5kIG9wcG9uZW50IGNlbGxcbiAgaWYgKHRva2VuID09PSBcImhpdFwiKSB7XG4gICAgcGxheWVyQ2VsbC5hcHBlbmQobWtJY29uKFwiaGl0XCIsIGJvb21TVkcpKTtcbiAgICBjZWxsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY2VsbC5hcHBlbmQobWtJY29uKFwiaGl0XCIsIGJvb21TVkcpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gXCJtaXNzZWRcIikge1xuICAgIHBsYXllckNlbGwuYXBwZW5kKG1rSWNvbihcIm1pc3NlZFwiLCBtaXNzQ2xvdWRTVkcpKTtcbiAgICBjZWxsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY2VsbC5hcHBlbmQobWtJY29uKFwibWlzc2VkXCIsIG1pc3NDbG91ZFNWRykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yV2lubmVyKGdhbWVPYmopIHtcbiAgaWYgKGdhbWVPYmouY3VycmVudFBsYXllci5vcHBvbmVudC5pc0RlZmVhdGVkKCkpIHtcbiAgICBnYW1lT2JqLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIoZ2FtZU9iaikge1xuICBsZXQgd2lubmVyID0gbnVsbDtcbiAgbGV0IGxvc2VyID0gbnVsbDtcbiAgaWYgKGdhbWVPYmoucDEuaXNEZWZlYXRlZCgpKSB7XG4gICAgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMi12aWN0b3J5XCIpO1xuICAgIGxvc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMS1kZWZlYXRcIik7XG4gIH0gZWxzZSB7XG4gICAgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMS12aWN0b3J5XCIpO1xuICAgIGxvc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMi1kZWZlYXRcIik7XG4gIH1cbiAgd2lubmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgbG9zZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBjb25zdCBoaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaXRcIik7XG4gIGZvciAobGV0IGl0ZW0gb2YgaGl0cykge1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtcG9wLWxvb3BcIik7XG4gIH1cbn1cbiIsImltcG9ydCBta0ljb24gZnJvbSBcIi4vaWNvbi9ta0ljb25cIjtcbmltcG9ydCBzaGlwU1ZHIGZyb20gXCIuL2ljb24vc2hpcFNWR1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVNoaXBzKGJvYXJkSUQsIHBsYXllcikge1xuICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvYXJkSUQpLmNoaWxkcmVuO1xuICBjb25zdCBib2FyZCA9IHBsYXllci5ib2FyZDtcbiAgbGV0IG51bVJlZ2V4ID0gL15cXGQrJC87XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjZWxscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBpZiAobnVtUmVnZXgudGVzdChib2FyZFtpbmRleF0pKSB7XG4gICAgICBjb25zdCBpY29uID0gbWtJY29uKGAke3BsYXllci5uYW1lfS1pY29uYCwgc2hpcFNWRyk7XG4gICAgICBjZWxscy5pdGVtKGluZGV4KS5hcHBlbmQoaWNvbik7XG4gICAgfVxuICB9XG59XG4iLCJsZXQgYm9vbVNWRyA9IGA8c3ZnXG53aWR0aD1cIjE5MC4wODU5NFwiXG5oZWlnaHQ9XCIxNzcuNjg4MTlcIlxudmlld0JveD1cIjAgMCA1MC4yOTM1NjkgNDcuMDEzMzMyXCJcbnZlcnNpb249XCIxLjFcIlxuaWQ9XCJzdmcxXCJcbnhtbDpzcGFjZT1cInByZXNlcnZlXCJcbmlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT1cImJvbWIuc3ZnXCJcbmlua3NjYXBlOmV4cG9ydC14ZHBpPVwiOTZcIlxuaW5rc2NhcGU6ZXhwb3J0LXlkcGk9XCI5NlwiXG54bWxuczppbmtzY2FwZT1cImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcIlxueG1sbnM6c29kaXBvZGk9XCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFwiXG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbnhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHNvZGlwb2RpOm5hbWVkdmlld1xuICBpZD1cIm5hbWVkdmlldzFcIlxuICBwYWdlY29sb3I9XCIjZmZmZmZmXCJcbiAgYm9yZGVyY29sb3I9XCIjMDAwMDAwXCJcbiAgYm9yZGVyb3BhY2l0eT1cIjAuMjVcIlxuICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz1cIjJcIlxuICBpbmtzY2FwZTpwYWdlb3BhY2l0eT1cIjAuMFwiXG4gIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9XCJ0cnVlXCJcbiAgaW5rc2NhcGU6ZGVza2NvbG9yPVwiI2QxZDFkMVwiXG4gIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPVwibW1cIlxuICBpbmtzY2FwZTp6b29tPVwiMS42ODE5MzA0XCJcbiAgaW5rc2NhcGU6Y3g9XCIyNDguMjI2NjhcIlxuICBpbmtzY2FwZTpjeT1cIjkxLjI2NDE4XCJcbiAgaW5rc2NhcGU6d2luZG93LXdpZHRoPVwiMTc5MlwiXG4gIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9XCIxMTIwXCJcbiAgaW5rc2NhcGU6d2luZG93LXg9XCIxOTIwXCJcbiAgaW5rc2NhcGU6d2luZG93LXk9XCIwXCJcbiAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD1cIjBcIlxuICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPVwibGF5ZXIzXCIgLz48ZGVmc1xuICBpZD1cImRlZnMxXCI+PGxpbmVhckdyYWRpZW50XG4gICAgaWQ9XCJzd2F0Y2gyMVwiXG4gICAgaW5rc2NhcGU6c3dhdGNoPVwic29saWRcIj48c3RvcFxuICAgICAgc3R5bGU9XCJzdG9wLWNvbG9yOiNmZmZmZmY7c3RvcC1vcGFjaXR5OjE7XCJcbiAgICAgIG9mZnNldD1cIjBcIlxuICAgICAgaWQ9XCJzdG9wMjFcIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnXG4gIGlua3NjYXBlOmdyb3VwbW9kZT1cImxheWVyXCJcbiAgaWQ9XCJsYXllcjNcIlxuICBpbmtzY2FwZTpsYWJlbD1cIkVmZmVjdFwiXG4gIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMi4wNDk0ODcyLC0zLjM2OTMwMzcpXCI+PHBhdGhcbiAgICBpZD1cInBhdGgzNlwiXG4gICAgc3R5bGU9XCJmaWxsOiNmZjU1NTU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjMuMDA4NzY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjFcIlxuICAgIGlua3NjYXBlOmxhYmVsPVwicGF0aDM2XCJcbiAgICBkPVwiTSA3LjYxOTY4OTksNS4yMjgxMDQ3IDkuOTkyNjcxNywyMC4wNTA5NzIgMi4wNDk0ODczLDE1LjM3NTgwNiA4LjQwNzc1NTUsMjUuNTgzOTY4IDMuMDY3NTEzLDI3LjA1NzI2MyBsIDQuNzE5MDkxOCwxLjI1ODMyMSAtMS40OTQ0ODI0LDEuODA5MTkyIDIuNDM4NjEwOCwtMC41NTA4NzEgLTAuMzkzMjU3Niw0LjQwNDkgMi42NzQyNTU0LC0yLjU5NTcwOCAwLjU5NDI3OSwtMC42NjQwNDIgMC44MzkyMjUsMS4zNDcyMDUgMC43MjgxMjEsLTIuODEzNzgyIDguNTQ0MTgxLC04LjM4NTAxOCAwLjgyMDYyMiwxLjkyNjQ5OCA4Ljk4MTg4MSwwLjI0NDQyOSAtMS4xNzMwNTUsLTQuNDE4ODUyIDAuMDkyNSwwLjEwMDI1MyAxLjg0ODQ2NiwtMS40NTUyMDkgMi4yODA5OTcsLTIuNzEzNTI5IC0xLjczMDY0MywwLjQ3MTgwNiAxLjAyMjY3NiwtMi44MzEzNTIgLTMuOTQ4NTk2LDEuOTIyODggLTAuMjEyOTA3LC00LjQzNjkzODUgLTEuMzI0NDY3LDEuNTEzNjAyNSAtMS40NDY5NCwtNS40NTAzMTMxIC04LjEwMjM0OCw3LjI5MTU0NDEgelwiIC8+PHBhdGhcbiAgICBpZD1cInBhdGgzNFwiXG4gICAgc3R5bGU9XCJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIuMzgxMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjFcIlxuICAgIGQ9XCJtIC0xNS44MzM5MzMsMTcuNDE5Mzc3IDIuMzkxNTQyLDIuMDAyMjIxIDEuMTY3OTYxLDIuMTY5MDcyIDAuMDU1NjIsMS42Njg1MTggLTEuODkwOTg4LDIuNzgwODYxIC01LjMzOTI1NCwtNS4yODM2MzcgeiBtIDQuMTE1Njc1LDE2LjA3MzM3OSBBIDE1LjI5NDc0MywxNS4yOTQ3NDMgMCAwIDEgLTI3LjAxMyw0OC43ODc0OTggMTUuMjk0NzQzLDE1LjI5NDc0MyAwIDAgMSAtNDIuMzA3NzQzLDMzLjQ5Mjc1NiAxNS4yOTQ3NDMsMTUuMjk0NzQzIDAgMCAxIC0yNy4wMTMsMTguMTk4MDEzIDE1LjI5NDc0MywxNS4yOTQ3NDMgMCAwIDEgLTExLjcxODI1OCwzMy40OTI3NTYgWlwiXG4gICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUzLjcwOTI3NCwwLjc2NzQ2MTgyKVwiIC8+PHBhdGhcbiAgICBzdHlsZT1cImZpbGw6I2ZmZTY4MDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6Mi4zODEyNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MVwiXG4gICAgZD1cIm0gNDMuODQ5OTcyLDUuMzY4MTgwNyAwLjIzNTk2NiwzLjYzNzc3NzkgLTAuNjY4NTY1LDAuMDM5MzI3IC0wLjAxOTY2LDAuODA2MjEwMiAtMS4zNzY0NTcsMC45MDQ1MjkyIDEuMTk5NDgzLDAuNTg5OTEgLTAuMzkzMjcxLDEuMjk3ODAyIDEuNzg5MzkzLC0wLjA3ODY1IDEuNjUxNzQ4LDMuMTY1ODUgMi4yMDIzMjgsLTMuODU0MDc4IDIuMjAyMzMxLDAuMjM1OTY0IC0xLjc2OTcyOSwtMS45MjcwNCAwLjI3NTI5MSwtMC43Mjc1NTU0IDAuOTgzMTg0LC0xLjQ1NTExMTIgLTMuMDA4NTQsMC41NzAyNDYxIHpcIlxuICAgIGlkPVwicGF0aDQ0XCJcbiAgICBpbmtzY2FwZTpsYWJlbD1cIlNwYXJrXCIgLz48L2c+PGdcbiAgaW5rc2NhcGU6Z3JvdXBtb2RlPVwibGF5ZXJcIlxuICBpZD1cImxheWVyMlwiXG4gIGlua3NjYXBlOmxhYmVsPVwiQm9tYlwiXG4gIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MS42NTk3ODksLTIuNjAxODQxOSlcIj48cGF0aFxuICAgIGlkPVwicGF0aDYyXCJcbiAgICBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjM4MTI1O3N0cm9rZS1saW5lY2FwOnJvdW5kXCJcbiAgICBkPVwibSAtMzQuOTk1NjksMjcuODA1NDcxIC0wLjMzNDg2MywwLjMzNzQ0NyAtMC42NTU3NzQsMC43MTEwNjggMC4xNTM0NzksMC40MDQ2MjYgMC41ODg1OTUsLTAuMjIzMjQyIDAuMDA3OCwtMC40MjM3NDcgeiBtIDAuNzAwNzMzLDAuMzc0NjU0IC0wLjU4NDk3NywwLjkzMDE3NiAwLjM5MzI1NywwLjkzNjg5NCAwLjQ0NDkzNCwwLjAwMzEgMC4xNzk4MzQsLTAuMjIxMTc1IC0wLjAzNTY2LC0xLjI0NTQwMiB6IG0gMjUuNDk5NzM1NCwtMTcuNDA1MTM5IC0wLjc4MDMxNDIsMC41Mzc5NTIgLTAuNDQwMjgzMiwwLjU1NzU4OCAyLjA2MzQ0LDQuMDI3MTQ1IDAuNjA1MTMxLC0xLjE0NjE4MyB6IG0gLTMuMTc1NTE2NCwtNC4zMDc3NDczIDEuODk0OTc0LDMuMjEyMjA3IDAuMDMwNDksLTAuOTQ2NzEyMiAxLjE5NDI0MjgsMC4yNTQ3NjQ4IC0wLjM1NzYwMDksLTAuODQ4NTI3IHogbSA5LjYwMzAzMSwtMC4wOTE0NjcgLTUuMjExMDUxNCwxLjI4NzI1OTkgMC43NTAzNDE4LDAuODI4MzczMiAzLjU3Mzk0MiwtMC45Njg0MTYzIHogTSAtMi45NDU0NDk1LDcuMTIzNTI5NyAtMy4yNTQ0NzQ2LDcuNTIyOTg4NSAtNC4xODY3MTc0LDcuNzc1Njg2MyAtNS40ODEyMTIsOC42NTkzNTMyIC00LjYzMTY1MTUsOS44NzY4NSBaIG0gLTguMzA2OTg2NSwyLjg4ODcxMjMgLTAuNzUzOTU5LDIuNzEwOTQ2IDAuODMzMDI0LC0wLjA0MTg2IDEuMzI5MTE3OCwtMi4zNTA3NjEgeiBtIDIuOTAwMDgxNCwxLjE4OTU5MSAtMC4yNjg3MTc1LDAuMDUwNjQgMC4wODExMzIsMC4yMjM3NTkgeiBtIC0xLjMzNDgwMjMsMC4yNTI2OTggLTAuODg3Mjg0MSwwLjE2Nzk0OSAtMC41OTg5MywxLjA1ODg1IC0wLjgzMzAyNCwwLjA0MTg2IDAuMDQzNDEsLTAuMTU1NTQ2IC0wLjE1NDUxMiwwLjE2MTIzIDIuNTAyMTcyNCwtMC4wNzY0OCAtMC40MDA0OTI0LC0wLjc4MTg2NSB6IG0gMy42NTY2MjQ0LC0wLjU5MjcyOSAtMS4zOTMxOTY2LDMuNjc5ODc5IDAuMDc2NDgxLDAuMjA5ODA3IC0wLjU1MDg3MDgsMS4wNDM4NjMgLTAuMTk1ODUzNywwLjUxNjc2NSAzLjIxMzc1NzQsLTQuNzI4OTExIHogbSAtMC42MjUyODQ4LC0wLjI0NzAxMyAwLjUzNTM2NzgsMC40ODQyMDggMC4wODk5MTcsLTAuMjM3MTk1IDEuMTUwMzE3NCwwLjcyMTQwMyAtMC4xNTY1Nzk2LDAuMjMwOTk0IDMuMDI1NjU1MSwwLjM0ODI5OSAtMS4yNzUzNzQ0LC0wLjk5MzczNyB6IG0gMS4yMDU2MTExLC0xLjkxMDk5NCAtMC4xMzE3NzQ5LDAuMDE5MTIgLTAuMTgyOTM0NSwwLjc4OTA5OTEgMi4xNDM1Mzg0LDEuNjAxOTY4OSAwLjMzNDg2MzIsMC4wNTQ3OCAxLjI3NTM3NDQsMC45OTM3MzcgLTAuMjQzMzk2LC0wLjAyNzkgMC44ODgzMTc5LDAuNjYzNTI1IC0yLjk1Nzk1OSwtMy40MjM1NjMyIC0wLjMwNzQ3NDgsMC41MDIyOTQ5IHogbSAtNS4wNjczOTA4LDAuMjI2MzQyOCAtNC40NDI2MjMsMS41NDc3MDkyIDMuNTQ1MDAzLDAuMTE5ODg5IDAuMTYyNzgxLC0wLjU4NTQ5NCAwLjA3MDI4LDAuMDE2MDIgMC45NzQxMDEsLTAuNTczMDkxNyB6IG0gMC40NTQ3NTIsMC4zNTQ1MDAzIC0wLjAwMzEsMC4wODY4MTYgMC4wNTk5NCwtMC4wMzUxNCB6IG0gMC4wMTQ5OSwtNi42ODI3OTYyIC0wLjI4NzgzOCw0Ljg1NTAwMDggMS4xMjcwNjI5LDAuNjgyMTI4OSAwLjI1NTc5ODMsMC42MDY2ODEzIHogbSAtMC4xMTE2MjEsMC4wMTU1MDMgMC4wODczMywwLjM5Njg3NSAwLjAxNjAyLC0wLjI3Mjg1MTYgeiBtIDAuMTQ1NzI3LDAuMTc0NjY2MyAwLjQ0MTgzMzYsMi40Nzk5NTIgMi4yNTk4MTA0LDIuOTkzMDk5IDAuMjE0NDU3MiwtMC4wNzA3OTcgLTAuNDgxMTA3NiwtMC41MzEyMzM4IDEuNDAzNTMxOSwtMC4zNDY3NDg4IC0wLjA3MDc5NywwLjAwMzYyIHogTSAtMTUuMzc5ODMzLDEyLjc4ODMgYyAtMC4wNzQ2NiwtMC4wMDE0IC0wLjE0OTE4OCwtMC4wMDE0IC0wLjIyMzc1OSw1LjE3ZS00IC0wLjU5NjU2MiwwLjAxNDk5IC0xLjE4NzAyLDAuMTQwOTkxIC0xLjc0MjAxMiwwLjQ2OTIyMiAtMS4xMDk5ODUsMC42NTY0NTcgLTEuNjgwMTgyLDIuMDYzODI1IC0xLjYyMTA5LDQuMDgxOTIxIDAuMDE1MTksMC41MTAyOTUgMC40NDA1MTUsMC45MTIwMzggMC45NTA4NDcsMC44OTgxMzYgMC41MTEzMjgsLTAuMDE0OTEgMC45MTM3MTUsLTAuNDQxNTg5IDAuODk4NjUzLC0wLjk1MjkxMyAtMC4wNDk0MSwtMS42ODczMTkgMC4zMTgyNTUsLTIuMTk5OTA4IDAuNzEzMTM0LC0yLjQzMzQ0MyAwLjM5NDg4MSwtMC4yMzM1MzggMS4yMTExMDUsLTAuMjQ4OTAzIDIuMjIwNTM3LC0wLjA1MjcxIDEuMDA5NDMyLDAuMTk2MTk2IDIuMTMxNjQ3LDAuNTUyNzY4IDMuMTk5Mjg4LDAuNjgxNjEyIDAuNTMzODIsMC4wNjQ0MiAxLjA2ODU2NTQsMC4wODExNSAxLjYxMzMzNzksLTAuMDk2MTIgMC4zMTI3NTkyLC0wLjEwMTc3MiAwLjYyMDU0MTIsLTAuMjk1MDM4IDAuODcxNzgxNCwtMC41NTM5NzIgbCAtMC45MjAzNTcyLC0xLjc5NTc1NiBjIC0wLjE1MzAxOTIsMC4wOTk4MyAtMC4yNzgyMzc2LDAuMjQ1NjY3IC0wLjM1MTkxNjUsMC40Mjc4ODEgLTAuMDU3Mjg5LDAuMTQxODAzIC0wLjA0MzQxOCwwLjEyMDM5NyAtMC4xNzIwODI2LDAuMTYyMjY0IC0wLjEyODY2NCwwLjA0MTg3IC0wLjQyMzExNCwwLjA2NTIzIC0wLjgxODAzOCwwLjAxNzU3IC0wLjc4OTg0NiwtMC4wOTUzMiAtMS45MTc3ODcsLTAuNDM4MzA4IC0zLjA2ODU0NiwtMC42NjE5NzUgLTAuNTAzNDU5LC0wLjA5Nzg1IC0xLjAyNzEzMSwtMC4xODI2NSAtMS41NDk3NzcsLTAuMTkyMjM2IHogbSAtNS42MDIyNDIsMi41Njk4NjkgLTEuMjc4NDc1LDAuMjQ3NTMgLTIuNjczMjIxLDEuOTM5OTMzIDEyLjIzMjg0NSw5LjQ5MDM3NyAxLjQzNzYzOCwtMy4zNzYwMjEgLTAuMTIwNDA2LC0xLjM3MDQ1OSAtMC43NDQxNDEsLTEuNjk0OTg3IC0yLjgyNDYzNCwtMy40OTAyMjYgLTIuMTE3MTgzLC0wLjk1NDk4MSBjIC0xLjk5ZS00LDAuMDAxNSAtMy4xOWUtNCwwLjAwMzIgLTUuMTdlLTQsMC4wMDQ3IC0wLjAwNzIsMC4wNTM4OCAtMC4wMTMyOCwwLjExMTk5NCAtMC4wMTkxMiwwLjE3MDAxNSAtMC4wMTA4NCwwLjExMDU4OCAtMC4wMjAzMywwLjIyNDc1NSAtMC4wMjUzMiwwLjM1MjQzNCAtMC4wMDEyLDAuMDI4NjMgLTAuMDAxMiwwLjA2MDM2IC0wLjAwMjEsMC4wODk5MiAtMC4wMDQ0LDAuMTYwNzExIC0wLjAwNiwwLjMyOTkzIC01LjE2ZS00LDAuNTE4ODMxIDAuMDAxOSwwLjA2MzkyIC0wLjAwMjksMC4xMjY0MzcgLTAuMDEzNDQsMC4xODcwNjkgLTAuMDEwNTYsMC4wNjA2MyAtMC4wMjY3OCwwLjExOTYzIC0wLjA0ODU4LDAuMTc1NyAtMC4wODcxOSwwLjIyNDI3OCAtMC4yNTk3MzYsMC40MDY3NzEgLTAuNDc4NTI0LDAuNTA2OTQ1IC0wLjA1NDcsMC4wMjUwNCAtMC4xMTIxNzMsMC4wNDQ4MiAtMC4xNzIwODIsMC4wNTg5MSAtMC4wNTk5MSwwLjAxNDA5IC0wLjEyMjExOSwwLjAyMjQyIC0wLjE4NjAzNSwwLjAyNDI5IC0wLjA2Mzc5LDAuMDAxNyAtMC4xMjYwNTMsLTAuMDAyOCAtMC4xODY1NTIsLTAuMDEzNDMgLTAuMDYwNSwtMC4wMTA2NSAtMC4xMTkyNDUsLTAuMDI3MjUgLTAuMTc1MTgzLC0wLjA0OTA5IC0wLjIyMzc1NCwtMC4wODczNiAtMC40MDU5NDQsLTAuMjU5NTk0IC0wLjUwNTkxMywtMC40NzgwMDcgLTAuMDI0OTksLTAuMDU0NiAtMC4wNDQ4MywtMC4xMTIyODggLTAuMDU4OTEsLTAuMTcyMDgzIC0wLjAxNDA4LC0wLjA1OTc5IC0wLjAyMjM5LC0wLjEyMTczMSAtMC4wMjQyOSwtMC4xODU1MTggLTAuMDA2MSwtMC4yMDc2MTEgLTAuMDAxOSwtMC40MDU0NTIgMC4wMDYyLC0wLjU5ODkzIDAuMDAyNywtMC4wNzQwOSAwLjAwNTIsLTAuMTQ3OTgxIDAuMDA5OCwtMC4yMjAxNDEgMC4wMDk4LC0wLjE0MDAwNCAwLjAyMzAyLC0wLjI3NjQ4NCAwLjAzOTc5LC0wLjQwOTI3OCAwLjAxNDYyLC0wLjEyMDQ3NCAwLjAzMjgyLC0wLjIzNzA4OSAwLjA1MzIzLC0wLjM1MTM5OSB6IG0gNS41NjU1NTIsMi44ODk3NDYgMC43ODY1MTUsMC41NTAzNTQgLTEuMzU1OTg5LDEuMzA5OTk4IC0wLjY4ODg0NywtMC42ODA1NzkgeiBtIDEuMjg1NzEsMC45NzU2NTEgMS4zNTg1NzMsMS45NTQ5MTkgMC4xMDc0ODcsMC45OTc4NzIgLTAuOTE2NzQsMC45MTU3MDcgLTAuNTU4NjIyLC0xLjIxMzg4IC0xLjI0OTUzNiwtMS40NDk1MjQgeiBtIC0xMy4yMDY0MjksLTIuMTYzMTc1IGMgLTAuMzg3MjE3LDAuMDEzMTkgLTAuNzc0MDg1LDAuMDQwMzMgLTEuMTU5NjE5LDAuMDgxMTMgLTguOTQxOTU0LDAuOTQ1NzkgLTE1LjQyNDI0OSw4Ljk2MTMyIC0xNC40Nzg3MDMsMTcuOTAzMyAwLjk0NTc4Myw4Ljk0MjE3NiA4Ljk2MTY0NywxNS40MjQ1NTQgMTcuOTAzODE2LDE0LjQ3ODcwMiA4Ljk0MTk3LC0wLjk0NjA0NyAxNS40MjQwNDg3LC04Ljk2MTgyOSAxNC40NzgxODcsLTE3LjkwMzgxNiAtMC4yMTMyMDksLTIuMDE1NDE1IC0wLjc4OTQ1MSwtMy45MTQ2MzQgLTEuNjU5ODQ3LC01LjYzNDc5OSBsIC0wLjQ0NzUxOCwxLjA1MTA5OSAtMTIuMjMyODQ1LC05LjQ5MDM3NyAwLjQ1MjE2OCwtMC4zMjgxNDUgYyAtMC41NTY1MDksLTAuMDc5MTEgLTEuMTIwODQ1LC0wLjEzMzU3MyAtMS42OTM0MzYsLTAuMTU1MDI5IC0wLjM4NzQxOCwtMC4wMTQ0OCAtMC43NzQ5ODgsLTAuMDE1MjIgLTEuMTYyMjAzLC0wLjAwMjEgeiBtIC0yLjM5MTA2OSwyLjM4NjQxNyA3LjU1ODcxMiwyLjc0NjA4NiAxLjkxNjY3OSwyLjMxMDk3IDEuNTY5OTMsOC4xNDkzNzMgLTAuNzkyNzE3LDEuNjMwOTA4IC0yLjQ3MjIsMi43NzUwMjUgLTEuNDM2NjA1LDAuNDA5Mjc3IC0zLjU3NDk3NiwwLjI0OTA4MSAtMS4wMDA5NzIsLTAuMzQ0NjgyIC0xLjg0OTUsLTEuNjczOCAtMS4yODU3MDksMC4wMDcyIC0wLjcwOTUxOCwwLjU5MDE0NSAwLjEzNzQ2LDAuNjk1MDQ4IC0wLjQwNDYyNywwLjQyODkxNCAtMS4yMjIxNDcsNS4xN2UtNCAtMC41MTIxMTQsLTAuNTkwMTQ1IC0wLjcxNjc1MiwwLjUyNjU4MyAtMC43ODM0MTUsLTAuMTEwNTg4IC0wLjczNzQyMiwtMC44ODgzMTggLTAuNDY1MDg4LC0wLjE0NDY5NCAtMC42ODYyNjMsMC4yMDE1MzggLTAuOTUxMzYzLC0wLjQ3OTU1NyAtMC4wNTM3NCwtMC41MDk1MjkgMC4wMzk3OSwtMC44NDIzMjYgLTAuNjg2NzgsMC4yMDIwNTUgLTEuMDQxNzk3LC0wLjcyODEyMSAtMC4xNzc3NjcsLTEuMDc3NDU0IDAuNDE4NTc5LC0xLjQ0NDg3MyAwLjc1Mzk2LC0wLjc4MTg2NCAtMC44NTg4NjMsMC40ODY3OTIgLTAuNTkwMTQ1LC0wLjg3MzMzMiAwLjAyNTg0LC0wLjk2OTQ1IDEuNDQyMjg5LC0xLjU3MDQ0NyAwLjMxOTg3NywtMS44Mzg2NDcgLTAuMTEyMTM4LC0xLjY2NDQ5OCAxLjQ2NTAyNywtMS45NTk1NyAzLjAzMjg5LC0xLjczODkxMiB6IG0gLTMuOTUzNzY0LDIuOTgwMTggLTEuODkxODc0LDAuMzkzNzc0IC0yLjE1NTk0MSwxLjI0MTc4NSAwLjMyOTY5NiwxLjc0NzY5NyAwLjk3NDEwMSwwLjU2MDY4OSAyLjYxNTM0NCwtMC40OTQ1NDMgMS4yMjExMTQsLTEuMjI0NzMyIDAuMTk3NDA0LC0wLjkyNDQ5MSAwLjA1MDEzLC0wLjg2MTQ0NiB6IG0gMy45MTM0NTcsMi4xNjc4MjYgLTEuMDA3MTc0LDAuODQxODA5IC0wLjcxMjEwMSwxLjA1NDIgLTAuMDIzNzcsMS43OTE2MjIgMC41MTIxMTQsMS4zNDE1MiAwLjM1NzYwMSwwLjk1NzU2NCAxLjQ1Njc1OCwwLjQ5MzUxIDEuMjA4NzEyLC0wLjI2OTIzNCAwLjczNzQyMywtMS4zNjAxMjQgMC4yNTE2NjQsLTIuMjY3NTYyIC0xLjUwMDE2NywtMi4yMjgyODggeiBtIDE1Ljg4NTg1MiwxMS42NjQ5MjEgYyAwLjYwODIsLTMuMmUtNSAxLjEwMTI1NywwLjQ5MzAyNCAxLjEwMTIyNCwxLjEwMTIyNSAzLjNlLTUsMC42MDgyMDIgLTAuNDkzMDI0LDEuMTAxMjU4IC0xLjEwMTIyNCwxLjEwMTIyNSAtMC42MDgyMDIsMy4zZS01IC0xLjEwMTI1OCwtMC40OTMwMjMgLTEuMTAxMjI1LC0xLjEwMTIyNSAtMy4zZS01LC0wLjYwODIwMSAwLjQ5MzAyMywtMS4xMDEyNTcgMS4xMDEyMjUsLTEuMTAxMjI1IHogbSAtMS42NDEyNDQsMi41MDY4MjQgYyAwLjI1MTM4NCwtMC4wMDYzIDAuNDk4MzEyLDAuMDY3MTQgMC43MDUzODMsMC4yMDk4MDYgMC41NDE2NCwwLjM3MzEwMiAwLjY3ODE2MSwxLjExNDcwNiAwLjMwNDg5MSwxLjY1NjIzIC0yLjc2Mjk5NSw0LjAwODgzIC03LjE4NDI3NSw2LjIyOTY0OCAtMTIuNDk0MzI3LDYuODAwNjE5IC0wLjY1NDI1OCwwLjA3MTE5IC0xLjI0MjE3NiwtMC40MDE5MjUgLTEuMzEyNTgyLC0xLjA1NjI2NyAtMC4wNzExOCwtMC42NTQ0MzcgMC40MDIyMzQsLTEuMjQyNDM5IDEuMDU2NzgzLC0xLjMxMjU4MSA0LjgxMDYzNCwtMC41MTcyNjkgOC40NTg4NzgsLTIuNDAyMzI5IDEwLjc4OTAwNiwtNS43ODMxMSAwLjIxNjI4MiwtMC4zMTM4ODEgMC41Njk3ODEsLTAuNTA1MjMyIDAuOTUwODQ2LC0wLjUxNDY5NyB6XCIgLz48L2c+PC9zdmc+YDtcbmV4cG9ydCBkZWZhdWx0IGJvb21TVkc7XG4iLCJsZXQgbWlzc0Nsb3VkU1ZHID0gYDxzdmdcbndpZHRoPVwiMTk0LjM1MjIzXCJcbmhlaWdodD1cIjE5My41NDUyXCJcbnZpZXdCb3g9XCIwIDAgNTEuNDIyMzYgNTEuMjA4ODMzXCJcbnZlcnNpb249XCIxLjFcIlxuaWQ9XCJzdmcxXCJcbnNvZGlwb2RpOmRvY25hbWU9XCJtaXNzQ2xvdWQuc3ZnXCJcbnhtbG5zOmlua3NjYXBlPVwiaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZVwiXG54bWxuczpzb2RpcG9kaT1cImh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkXCJcbnhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxueG1sbnM6c3ZnPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxzb2RpcG9kaTpuYW1lZHZpZXdcbiAgaWQ9XCJuYW1lZHZpZXcxXCJcbiAgcGFnZWNvbG9yPVwiI2ZmZmZmZlwiXG4gIGJvcmRlcmNvbG9yPVwiIzAwMDAwMFwiXG4gIGJvcmRlcm9wYWNpdHk9XCIwLjI1XCJcbiAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9XCIyXCJcbiAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9XCIwLjBcIlxuICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPVwiMFwiXG4gIGlua3NjYXBlOmRlc2tjb2xvcj1cIiNkMWQxZDFcIlxuICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz1cIm1tXCJcbiAgaW5rc2NhcGU6em9vbT1cIjEuNjgxOTMwNFwiXG4gIGlua3NjYXBlOmN4PVwiNjUuNDAxMDQxXCJcbiAgaW5rc2NhcGU6Y3k9XCI4OC4yOTE0MDVcIlxuICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9XCIxNzkyXCJcbiAgaW5rc2NhcGU6d2luZG93LWhlaWdodD1cIjEwOTJcIlxuICBpbmtzY2FwZTp3aW5kb3cteD1cIjE5MjBcIlxuICBpbmtzY2FwZTp3aW5kb3cteT1cIjI4XCJcbiAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD1cIjBcIlxuICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPVwibGF5ZXIxXCIgLz5cbjxkZWZzXG4gIGlkPVwiZGVmczFcIiAvPlxuPGdcbiAgaW5rc2NhcGU6Z3JvdXBtb2RlPVwibGF5ZXJcIlxuICBpZD1cImxheWVyNFwiXG4gIGlua3NjYXBlOmxhYmVsPVwiTGF5ZXIgMlwiPlxuIDxnXG4gICAgaWQ9XCJnNlwiXG4gICAgaW5rc2NhcGU6bGFiZWw9XCJkYXJrU21va2VcIj5cbiAgIDxwYXRoXG4gICAgICBzdHlsZT1cImZpbGw6I2M4YjdiNztzdHJva2Utd2lkdGg6Mi4zODEyNTtzdHJva2UtbGluZWNhcDpyb3VuZFwiXG4gICAgICBkPVwibSA0Mi40OTE1NzUsMzYuMjYyNDQyIDEuMzM0ODEyLDMuNjcwNzM5IC0wLjQ0NDkzNiwwLjc3ODY0MiAwLjg4OTg3NSwzLjMzNzAzNCAyLjQ0NzE1OCwxLjExMjM0NSAyLjY2OTYzLC0xLjQ0NjA0OCAwLjIyMjQ2NywtNC4wMDQ0NDMgLTEuODkwOTg1LC0xLjU1NzI4MiAtMS42Njg1MTgsMC4yMjI0NyB6XCJcbiAgICAgIGlkPVwicGF0aDRcIiAvPlxuICAgPHBhdGhcbiAgICAgIHN0eWxlPVwiZmlsbDojYzhiN2I3O3N0cm9rZS13aWR0aDoyLjM4MTI1O3N0cm9rZS1saW5lY2FwOnJvdW5kXCJcbiAgICAgIGQ9XCJNIDAuNzc4NjQxNDEsMy4yMjU4MDAyIDEuODM1MzY5MSw0Ljk3Nzc0MzIgMS42Njg1MTczLDUuNTg5NTMyOSAwLjgzNDI1ODY1LDYuMDkwMDg4MyAwLjU1NjE3MjQ0LDcuMzEzNjY3NyAxLjE2Nzk2MjEsOC41NjUwNTU2IDIuMzkxNTQxNSw5LjA2NTYxMDcgMy42OTg1NDY2LDguODE1MzMzMSA0LjE0MzQ4NDcsOS45Mjc2NzggNS44OTU0Mjc4LDEwLjEyMjMzOCA3LjAzNTU4MTQsOC41OTI4NjQxIDkuOTgzMjk1Miw5LjIzMjQ2MjUgOS4wNjU2MTA3LDUuMzM5MjU1NCAxMC4zMTY5OTksNC45MjIxMjYgMTAuNTM5NDY4LDMuMjI1ODAwMiA4Ljc4NzUyNDYsMS4yMjM1Nzk0IDYuOTc5OTY0MSwwLjk0NTQ5MzE2IDUuNjcyOTU5LDEuMzA3MDA1MiA0LjE3MTI5MzMsMC41MDA1NTUyIDEuOTQ2NjAzNSwxLjUwMTY2NTYgWlwiXG4gICAgICBpZD1cInBhdGg1XCIgLz5cbiA8L2c+XG4gPHBhdGhcbiAgICBzdHlsZT1cImZpbGw6I2UzZGJkYjtzdHJva2Utd2lkdGg6Mi4zODEyNTtzdHJva2UtbGluZWNhcDpyb3VuZFwiXG4gICAgZD1cIm0gMjMuMzU5MjQzLDQuNjcxODQ4NCA2Ljg5NjUzOCwtMi4yMjQ2ODk3IDMuNjcwNzM3LDAuNjY3NDA3IDMuNzgxOTcyLDEuNzc5NzUxOCAxLjMzNDgxNSwyLjc4MDg2MjEgMC4yMjI0NywyLjU1ODM5MzQgLTAuNjY3NDA5LDIuMDAyMjIxIC0wLjg4OTg3NiwwLjc3ODY0MSAxLjMzNDgxNSwyLjMzNTkyNCAwLjExMTIzNCwwLjMzMzcwNCA0LjAwNDQ0MiwwLjU1NjE3MiA1LjAwNTU1MSw2LjExNzg5NyAtMC4zMzM3MDMsMy44OTMyMDcgLTIuNDQ3MTU3LDQuMDA0NDQyIC00LjU2MDYxNSwwLjMzMzcwMyAwLjg4OTg3NiwxLjY2ODUxOCAtMC4zMzM3MDQsMS40NDYwNDkgLTEuNzc5NzUxLDAuODg5ODc1IDAuNTU2MTczLDMuMjI1OCB2IDEuNzc5NzUyIGwgLTQuNzgzMDg1LDIuNjY5NjI3IGggLTIuNzgwODYxIGwgLTQuNDQ5Mzc4LC0yLjU1ODM5NCAwLjExMTIzMywtMi42Njk2MjcgLTIuNzgwODYyLDAuNzc4NjQyIC0yLjAwMjIyMSwwLjU1NjE3MyAtNy42NzUxOCw4LjU2NTA1NSAxLjU1NzI4MywtMTAuMTIyMzM5IC0yLjMzNTkyNCwxLjExMjM0NSAtMC4xMTEyMzUsLTQuMDA0NDQyIC0xLjU1NzI4MiwxLjAwMTExMiAtMy4zMzcwMzUsLTIuMjI0NjkxIDAuMzMzNzAzLC0zLjc4MTk3MyAtMi41NTgzOTI5LDEuMDAxMTEyIC00Ljc4MzA4MjksLTMuNjcwNzM5IC0xLjAwMTExMDQsLTUuNTYxNzI0IDMuNjcwNzM4MiwtNC44OTQzMTggNi42NzQwNjksLTAuNTU2MTcyIGggMS4zMzQ4MTQgbCAwLjc3ODY0MSwtMTAuMzQ0ODA3NSAzLjg5MzIwOCw0Ljg5NDMxNzQgMS4wMDExMSwtMi43ODA4NjIgMS4xMTIzNDUsMS43Nzk3NTE3IHpcIlxuICAgIGlkPVwicGF0aDFcIlxuICAgIGlua3NjYXBlOmxhYmVsPVwic21va2VcIiAvPlxuIDxwYXRoXG4gICAgc3R5bGU9XCJmaWxsOiNmZmU2ODA7c3Ryb2tlLXdpZHRoOjIuMzgxMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmRcIlxuICAgIGQ9XCJtIDQuMDkwMDQyNCwzNy40Nzg5NDYgMC4yNzUyOTEyLDMuMDI4MjA0IC0xLjY1MTc0NzksMS42OTEwNzYgMi4wMDU2OTQsMS4yNTg0NzUgMC45MDQ1Mjg3LDIuMzIwMzExIDIuMjgwOTg1LC0yLjAwNTY5MyBIIDkuODcxMTU5OCBMIDguNDk0NzAzNCw0MS40OTAzMzMgOS42MzUxOTU5LDM4LjY1ODc2NSA2Ljg4MjI4MjgsMzkuMTcwMDIyIFpcIlxuICAgIGlkPVwicGF0aDZcIlxuICAgIGlua3NjYXBlOmxhYmVsPVwic3RhclwiIC8+XG4gPHBhdGhcbiAgICBpZD1cInBhdGgxMTRcIlxuICAgIHN0eWxlPVwiLWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonQXJpYWwgQmxhY2ssICBIZWF2eSc7ZGlzcGxheTppbmxpbmU7c3Ryb2tlLXdpZHRoOjEuMDA1XCJcbiAgICBkPVwibSAyNi4xMDk3MDUsMTguNzI4MDU3IGMgLTAuNTkwMiwwLjAwNjYgLTEuMTc3NjM1LDAuMDM4NzcgLTEuNzY2MjE1LDAuMDk4NTQgMC4yMjgxMzYsNC40Mzk4OTMgMC4yMjU1NDUsOC4yODE1NzQgMC4wMTY0OSwxMi41MDY3OSAwLjc4MDAwNywwLjA1NTI1IDEuNTU2MzQ4LDAuMDY2NyAyLjM0MDU1OCwwLjAzODg3IC0wLjAwNTUsLTAuMjU4NTUxIC0wLjAxMDU2LC0xMi4xMzMyNzMgNC4wMmUtNCwtMTIuNjQyMjMxIC0wLjE5NzU0NiwtMC4wMDM1IC0wLjM5NDQ5LC0wLjAwNDEgLTAuNTkxMjI2LC0wLjAwMiB6IG0gNC44NTM0NTksMC4yMjM3NjkgYyAtMC41NDEzNTYsLTAuMDIwNTMgLTAuOTk3MzMxLDAuMTE2MjcyIC0xLjM3MDQ5NSwwLjQwMDA0IC0wLjQ1OTA2MSwwLjM0NTM5NyAtMC44MDg4ODUsMC44NDczMDIgLTEuMDQ5NzU3LDEuNDM4ODAzIC0wLjAxNTE3LDAuMDM3MjkgLTAuMDI5NjcsMC4wNzUxMSAtMC4wNDM5NywwLjExMzA2MiAtMC4xNjc4MTgsMC40NDc4MjcgLTAuMjcyNTk1LDAuODkyMzgzIC0wLjMxOTU1OSwxLjMyNDU2MiAtMC4wMTkyOCwwLjE3NzM3NyAtMC4wMjkyMywwLjM1MzMwNyAtMC4wMjk0NSwwLjUyNzYyNyAtMi4wMmUtNCwwLjE4OTAyMSAwLjAwODgsMC4zNjYzODcgMC4wMjcwOSwwLjUzMzEyMyAwLjA0ODIxLDAuNDQwNDUxIDAuMTYwNzc3LDAuODEzODc0IDAuMzM0NDc2LDEuMTM0OTQ3IDAuMDc3NjMsMC4xNDMzMzcgMC4xNjc4OTYsMC4yNzY4MTQgMC4yNzA0ODcsMC40MDA4MjMgMC40MTQxNTksMC41MDQ1NDIgMS4xMTUyMjQsMC45MDQ1ODMgMi4xMDczNjcsMS4xODM2MjYgMC42MDgxNTIsMC4xNjY5NzYgMS4wMDAxMTUsMC4zNDE5MyAxLjE2ODcwOCwwLjUzNDY5NCAwLjE2ODk1NiwwLjE5MzE3NSAwLjI1MzYxLDAuNDE1MTE3IDAuMjU1NTcsMC42Nzc1OTEgMC4wMDIyLDAuMjc2MTcxIC0wLjA4Mjk0LDAuNTM2MDQ5IC0wLjI1NTU3LDAuNzgwNDQ5IC0wLjE2OTcwNCwwLjIzOTU2MyAtMC40MTUzMjgsMC4zODM0MiAtMC43NDIzNjgsMC40MTI2MDEgLTAuNDM5NjU2LDAuMDM5MjMgLTAuNzc5NDc5LC0wLjE3NjMgLTEuMDIxODgyLC0wLjYyMzAyNSAtMC4xNDc3MDksLTAuMjczODQ5IC0wLjI0NDA5OSwtMC42NjgwNTcgLTAuMjg5NzI1LC0xLjE1NjUzOSAtMC4zMzcyNywwLjAzOTEgLTEuMTU5MjQyLDAuMTM1NTk3IC0xLjQ5NjUxMiwwLjE3NDY5OSAtMC4wMDUzLDYuMDRlLTQgLTAuMzI1NjU0LDAuMDM3ODIgLTAuMzMwOTQzLDAuMDM4NDcgLTAuMDA1MSw2LjAyZS00IC0wLjI5MDEyNiwwLjAzMjcyIC0wLjI5NTIyMSwwLjAzMzM4IDAuMDMxOTIsMC42MDYzODUgMC4xMjk1MTEsMS4yMDM3NjUgMC4zMDE4OTQsMS43NzYwMjYgMC4wOTU5OSwwLjMxODM5MSAwLjIxNTU4NiwwLjYyOTQ1OSAwLjM1OTYwMywwLjkyNjg4MSAwLjA1OTQzLDAuMTIyNjQ5IDAuMTIyOTE0LDAuMjQyOTAxIDAuMTkwNzk0LDAuMzYwMzg3IDAuNTQ0NzAxLDAuOTQyNzczIDEuNDczODk2LDEuMzc0ODc0IDIuNzgxODE1LDEuMTIwODE0IDAuNzMyOTMsLTAuMTQyMzY3IDEuMzAxNTE3LC0wLjQ5MDc3MSAxLjcyNzM0OSwtMC45NTA0MzMgMC40MjExNzksLTAuNDYxNTc2IDAuNzM3NzM5LC0xLjAzNjg0IDAuOTY3NzEsLTEuNjQyOTQ1IDAuMjMxOTcsLTAuNjExMzggMC4zNjI2MzksLTEuMTg5NTUgMC4zNjUwOTcsLTEuNzcwMTQgMC4wMDIxLC0wLjQ5NTg4MyAtMC4wOTQ4NiwtMC45MTYyOTkgLTAuMjk5MTQ1LC0xLjMwNDE0OCAtMC4xOTkwOTEsLTAuMzg0NTM0IC0wLjUyNTUwMiwtMC43MTcyNTcgLTAuOTY4MDk5LC0xLjAwMTg2MyAtMC40MzU3MDEsLTAuMjg2Mzg1IC0xLjE3MDY0MywtMC42MDE5MjUgLTIuMTYxNTQyLC0wLjk1MDA0MiAtMC40MDE3ODQsLTAuMTM3MDk3IC0wLjY1NDE3LC0wLjI4MDc1OCAtMC43NTk2NDIsLTAuNDMxMDUxIC0wLjEwODc3NCwtMC4xNDUzNzcgLTAuMTYxOTEsLTAuMzA5NDA1IC0wLjE1ODk5NCwtMC40OTM0NzMgMC4wMDQsLTAuMjUyNTU4IDAuMDc1NzIsLTAuNDcxNTYzIDAuMjE1NTI0LC0wLjY0NTQwMSAwLjE0MDc0MSwtMC4xODA0MTMgMC4zNDM2NjQsLTAuMjU4OTM4IDAuNjEwMDcxLC0wLjIzMTYyMiAwLjMyMzgxMiwwLjAzMzIxIDAuNTY5MDY0LDAuMTg5MjcgMC43NDMxNSwwLjQ0NjM2MiAwLjE3NjUzOCwwLjI1NjA2NyAwLjI4ODg3NywwLjYzODAzNiAwLjM0MjMzMSwxLjEwNTg5OCAwLjcyNjU2MiwtMC4wMTMyOSAxLjQ1MDg3MSwtMC4wMTgwMSAyLjE5MTc3MSwtMC4wMTgwNSAtMC4wODQ4OCwtMC45Nzk5NTQgLTAuMzMyOTY5LC0xLjk1NDQ2IC0wLjc0NTUxLC0yLjY0OTUxOCAtMC40MjAxMDMsLTAuNzIwMTA1IC0xLjA3Njc3MSwtMS4yOTY4NCAtMi4wNTI0MDUsLTEuNTAzMTg0IC0wLjE5OTQ2OSwtMC4wNDIxOSAtMC4zODk1NzEsLTAuMDY2NTggLTAuNTcwMDIzLC0wLjA3MzQxIHogbSAtOC4xOTk0MTEsMC4xMDA1MDIgYyAtMC4zMzcyODgsMC4wNjE5MSAtMC42NzI0MjIsMC4xMzE4MTIgLTEuMDA2OTY4LDAuMjEwMDMgLTAuMTE3ODgzLDAuMDI3NTQgLTAuMjM1NDg0LDAuMDU2MTQgLTAuMzUyOTI4LDAuMDg1NTggLTAuNTUyMTM5LDAuMTM4NTgxIC0xLjA5NTU0NiwwLjI5NjQ4NCAtMS42Mzc4NCwwLjQ2NzU2MiAwLjI3MTM3NSwyLjY3NjA4MSAtMC40MzcxMTksNC45NjU1ODggLTAuNzIzMTMyLDYuMzA5MTQxIC0wLjE3NTAyLC0wLjc2MDY0MSAtMC44Mzg4NzUsLTQuMjEzNTI1IC0xLjUyOTQ4OCwtNS41NDY3NTMgLTAuOTU2NzIxLDAuMzMzNTQzIC0xLjkyNjQyMiwwLjY2Nzg5MiAtMi44Nzg3ODQsMC45MTE1NjggMS4xMTc3NzksMi40ODc0NzkgMS4wNjA0MjUsNC45ODk2NTEgMC4wMjI3Nyw3LjQ3MDM5MiAwLjU5NTkyNywwLjE0NjkgMS4xOTU1NzQsMC4zMjU2NSAxLjc5MDU1NCwwLjUxMjcwOSAwLjI0NTcyNywtMC42NzMxMDkgMC4yOTI3LC02LjA5OTk1NiAwLjI5Nzk2NywtNi4zMzU0NDQgMC4xNTQwNCwwLjcyNTU4OSAxLjM0NDgwMSw1LjA3NzIxMyAxLjA4OTQwOCw2Ljc4MDYyOCAwLjU0NzkyMSwwLjE3NjA2NCAxLjA4OTk1OSwwLjM0NjU5NSAxLjY0Njg3MSwwLjUwNzYwNSAwLjcxNjA4NCwtMS44NTk0MTYgMS42MTU4MjMsLTYuNjMwNTg0IDEuNzUyNDc0LC03LjgwNzIyMyAwLjA2NTg4LDEuNDYyMTY5IDAuMTQwMDY2LDUuNTk2OTEzIC0wLjMxOTk1Myw4LjE4NTI3OCAwLjE3MjMyOCwwLjA0MDU0IDAuMzQ1MTE5LDAuMDc5MjUgMC41MTgyMDYsMC4xMTU4MDkgMC4xMTcyNzYsMC4wMjQ3OSAwLjIzNDU4OCwwLjA0ODUgMC4zNTIxNDMsMC4wNzE0NSAwLjMzMzYxNiwwLjA2NTAyIDAuNjY3NTg5LDAuMTIyNTcyIDEuMDAzNDMzLDAuMTcxOTUxIDAuMzQ5NDQsLTMuMzY4MjMzIDAuMzU1NjI4LC04LjU2MjYwNSAtMC4wMjQ3MywtMTIuMTEwMjg3IHogbSAxNS4yOTQ0OTgsMS42NzY3MDcgYyAtMC4zMjEwMzIsMC4wMDE5IC0wLjYwNzQ3NCwwLjA0NzkyIC0wLjg2NDg1NSwwLjE0NjAzOSAtMC41MDE5NTIsMC4xODg3NjQgLTAuODk0MTYyLDAuNTIwOTc0IC0xLjE2MDg1NiwwLjk2NjkyMyAtMC4yNjE0MjMsMC40MzkzMTEgLTAuMzg3NDgyLDAuOTA3OTc3IC0wLjM4OTgzMSwxLjM4MjI3MiAtMC4wMDM1LDAuNzE3MDE2IDAuMjM0ODU5LDEuMjc4NiAwLjY4NDI2NCwxLjcwMDI2MiAwLjQ1MDQ4MywwLjQyNTkyIDEuMTk3Mzg3LDAuNzUwMDI5IDIuMjU4NTExLDAuOTgyMjMxIDAuNjQ3OSwwLjEzODQ5IDEuMDU5MTEzLDAuMjgzMDk4IDEuMjMzNDg0LDAuNDM4OTA2IDAuMTc0MzE5LDAuMTU1NzYzIDAuMjU3NDExLDAuMzMyMTg2IDAuMjUxMjQ5LDAuNTMzNTEzIC0wLjAwNjUsMC4yMTE5NzUgLTAuMTA1ODg4LDAuNDAzMTMzIC0wLjI5NTYxMSwwLjU3Nzg3NiAtMC4xODU5MTMsMC4xNzA3NjIgLTAuNDQ4NTIzLDAuMjY5NTQ3IC0wLjc5MTA0NywwLjI4OTcyNSAtMC40NjA0MDMsMC4wMjcxMyAtMC44MTQ0NzMsLTAuMTE5OTg0IC0xLjA2MjcxMiwtMC40NTE4NiAtMC4xNTE5MTYsLTAuMjA0MzY3IC0wLjI0NzcyOCwtMC41MDM5NzQgLTAuMjkwMTE3LC0wLjg5MTkzOSAtMC43NzAwODUsMC4wNjY3OSAtMS41MjEzMDQsMC4xMzk2MDcgLTIuMjc3NzQ1LDAuMjIwNjI5IDAuMDU5NDQsMC44ODcwNDIgMC4zNjE4MTcsMS42ODk4NjQgMC45MzQzMzksMi4yOTk3MzEgMC41OTkyMzcsMC42MzgzMjkgMS41MzY5NjMsMC43ODAzOTIgMi44MzU2LDAuNTY3NjcgMC43MjUzOTcsLTAuMTE4ODI0IDEuMzExNDYsLTAuMzI5ODc3IDEuNzYxNTAzLC0wLjU5Nzg5OSAwLjQ1MTIyNCwtMC4yNzI2OTMgMC44MTY2MjUsLTAuNjE0MzYgMS4wOTE3NjIsLTEuMDI3NzczIDAuMjc3NTEzLC0wLjQxNjk4MSAwLjQzOTYyMywtMC44NTQ2MDQgMC40NTk3MSwtMS4zMzU1NTUgMC4wMTcxLC0wLjQwODczNSAtMC4wNzY2NiwtMC43NzU5NDcgLTAuMjg1MDEyLC0xLjEwNzA3NCAtMC4yMDQ1MywtMC4zMzA3MDkgLTAuNTQyNTMxLC0wLjYwNjA5NyAtMS4wMDk3MDksLTAuODMzODM4IC0wLjQ3MjEyMywtMC4yMzUzNDYgLTEuMjIzOTg0LC0wLjQ2MDk1MyAtMi4yOTc3NjksLTAuNzM4MDQ5IC0wLjQyOTY3MSwtMC4xMDc3NjYgLTAuNzAxMjY3LC0wLjIyMjc4NCAtMC44MTYxNzMsLTAuMzM5MTg5IC0wLjExODQyOCwtMC4xMTI4MjcgLTAuMTc3NjYxLC0wLjIzODI3OSAtMC4xNzc4NCwtMC4zNzUzMDUgLTJlLTQsLTAuMTg4MDg3IDAuMDcyMzMsLTAuMzQ0ODkzIDAuMjE1OTE5LC0wLjQ2NDgxMyAwLjE0NDM5NSwtMC4xMjQ1NjEgMC4zNTQ3NjIsLTAuMTcxNzU4IDAuNjMzMjMxLC0wLjE0NjQzMyAwLjMzNzY4OCwwLjAzMDcxIDAuNTk5NDY0LDAuMTQwODE4IDAuNzg5ODcsMC4zMjIzMDcgMC4xOTMzMTMsMC4xODExNCAwLjMyNjU3NiwwLjQ1NDMwNCAwLjM5NzI5LDAuODA5NDk3IDAuNzYzMzY0LC0wLjAxNzQ5IDEuNTE3OTM3LC0wLjA0MDc0IDIuMjc3NzQ2LC0wLjA3NDIgLTAuMTMwOTg1LC0wLjc3MDk5NCAtMC40NTUyMiwtMS4zNjY2NjUgLTAuOTIzMzQ3LC0xLjc4MzA5NCAtMC40NjM1OTMsLTAuNDE4OTQgLTEuMTYyNDM5LC0wLjc1ODM3NSAtMi4xMTA1MDgsLTAuOTQ5NjUxIC0wLjM5NDg2MywtMC4wNzk2NyAtMC43NTAzMTksLTAuMTIyNjY2IC0xLjA3MTM0NiwtMC4xMjA5MTEgeiBtIDQuNzA5Nzc2LDE1LjQ0MzI4NCAxLjUyNzUyNSw1LjQ4NDMzMyAxLjI3MzEzLC0wLjMyNTg0MSAtMS4xODMyMzYsLTMuMDIxMjkgMi4zMDI0ODQsMS44Nzg4ODUgMS4wMDE4NiwtMS4xMjg2NjcgeiBtIDEuMzAzNzUyLDQuNjgwNzIzIC0wLjY3NjgwNiwwLjUxNzgxMiAxLjE3MDI3Niw0LjM1NjA2MSAxLjE2NDc4MywtMC4zMTMyNzkgLTAuOTYwNjQsLTMuNTc1NjEyIDAuNTk0MzY1LC0wLjQ1NDYwOCAtMS4wNjgyMDUsMC4yNzMyMzYgeiBtIDUuMDgxNTQ4LC0yLjIxMzM2MiAtMC45Njc3MTIsMC43MTk5OTEgMS44OTQxOTcsMi41NDU0ODMgMC45Njc3MDQsLTAuNzE5OTkgeiBtIC0wLjA2NjMyLDAuMDQ5NDYgLTEuNTc2OTk3LDAuMjY0OTkxIDAuMTc5ODA0LDAuMTA1NjAyIC0wLjk4NDU4NiwxLjEwOTAzOCAwLjAwNjksMC4wMzk2NCAxLjg3MTQyOSwtMC4zMTQ0NTggLTAuMzk3Njg5LC0wLjUzNDI5OSB6IG0gMS44ODk4NzUsMi41NDg2MjQgLTAuODk3MDQ2LDAuNjY3Mzg1IC0wLjI3NzU1MiwtMC4zNzI5NSAtMC4xMDc1NzMsMy4zMzc3MDggMS4yMDUyMjIsMC4wMzkyNiAwLjExODU1NywtMy42NzAyMjUgeiBtIC0xLjI1NzQzNSwyLjg2MDcyNiAtMi41NDcwNDksMS41NDgzMzIgMC42MjY1NTMsMS4wMzA1MjEgMi45MTg4MjUsLTEuNzc0MDY2IC0xLjAyMzA2NSwtMC4wMzMzOCB6IG0gLTQuMTc1NDY5LDAuNjIzMDI0IDAuMTg2MDc4LDAuNjkyMTE3IC0xLjA2NDY3MSwwLjI4NjE5MSAzLjEwMjk0MiwxLjAzNDQ0NSAwLjAyMzE2LC0wLjA2OTA5IC0wLjYxOTA5MywtMS4wMTgzNTEgMC40MDYzMiwtMC4yNDY5MzIgeiBNIDguMTg5NjM5MSwxLjQ2NzkxMzkgQyA3LjU1Mzk1MDIsMS40NjgyMzU4IDYuODgyOTMzOSwxLjY1Mzc1MjUgNi4yNDMyMzA1LDIuMDg0NjU1NiBsIDAuNDk3NzkxMywwLjczODQ0MjIgYyAwLjc2ODY2ODUsLTAuNTE3Nzc0OSAxLjQ4OTYyMywtMC41NjExMzU4IDIuMTQ5MzcwNSwtMC4zNTk5OTUgMC42NTk3NDg1LDAuMjAxMTQgMS4yNTAzNTE3LDAuNjc2MzQ3OCAxLjYyMTM1MTcsMS4yMTI2NzcxIDAuMzcxMDAzLDAuNTM2MzMwNCAwLjQ5NjAzLDEuMTEyNDAwOCAwLjM4NDczLDEuNDcxMzg3MyAtMC4xMTEzMDMsMC4zNTg5ODc2IC0wLjQwNTE3MiwwLjY0NjM1MTYgLTEuMzA2MTEyLDAuNjgyMzAzIGwgMC4wMzU3MywwLjg4OTk3NzMgQyAxMC43NTE4NCw2LjY3NDUzMDMgMTEuNTE3NTIyLDYuMTUwMTA5NCAxMS43NDY4MDYsNS40MTA1ODgxIDExLjk3NjA4Nyw0LjY3MTA2NjcgMTEuNzIyNzExLDMuODYxNTMyMSAxMS4yNDM5MSwzLjE2OTM1MyAxMC43NjUwOTksMi40NzcxNzM5IDEwLjAzNDYzMSwxLjg4MDk0MDcgOS4xNDk4OTAyLDEuNjExMjA1MiA4LjkyODcwNDIsMS41NDM3NzczIDguNjk3NTM3OSwxLjQ5ODQ3NjggOC40NTk3MzUxLDEuNDc4OTA1NyA4LjM3MDU1NjksMS40NzE2MTQgOC4yODA0NTM4LDEuNDY3ODYzOSA4LjE4OTY0MTIsMS40Njc5MTYgWiBNIDUuMDQ2NjQ4NSwwLjg2Njg3NTQ3IDQuNjI3NzY2MywxLjc4MDQwNzIgNi42Njg3ODY2LDIuNzE1OTIzNiA2LjI0MzIzMDUsMi4wODQ2NTU2IEMgNi40NjgzMTc1LDEuOTMzMDM3MiA2LjY5NzU1NzgsMS44MjIwNjYxIDYuOTI3NDk3LDEuNzI4NTg2OSBaIE0gNS4wNDI2OSwwLjg1MzkxNjk4IDIuMTcxNzU2OCwxLjk0OTIxMzUgMi41MzAxODE5LDIuODg4MjYzMSA0Ljk5NDAxMDMsMS45NDgwMzUzIDQuNjI3NzM0LDEuNzgwNDA0MSA1LjA0NjYxNTEsMC44NjY4NzEzIGwgMC4wMDEyNSw0LjAyMDllLTQgeiBNIDIuMTE0MDQ4OSwxLjk4NDE1MjQgMS4yODUzMTI4LDQuMzIyMzU1MyAyLjIzMjYwNzUsNC42NTg0MDIgMi45MTE3Njk4LDIuNzQyNjE1NiAyLjUzMDE4MTksMi44ODgyNjMxIDIuMTk2MDk3OCwyLjAxMzIwMzcgWiBtIDAuMjYyMjQxNiwyLjI2OTUwMSAtMC4xNDM2ODMsMC40MDQ3NDg2IC0wLjg5MjMzMzYsLTAuMzE2NDE4NCAtMC4wMzMzNzUsMC4wMTY0OSAxLjAzOTU1MSwyLjEwMDI5ODkgMC45MDA1NzY0LC0wLjQ0NTU3ODIgeiBtIDAuODMxODc2NiwxLjY4MTQxNyAwLjAzODg2NSwwLjA3ODEyNiBMIDIuMzQ2NDU1Nyw2LjQ1ODc3MzUgMi4xNTQwOTIsNi4wNzAxMTg5IEMgMS41MjA1NzUsNi4zMDY3MzczIDEuMDM5MDk4NCw2LjgwOTA1MjggMC44NDM2NjE3Myw3LjQxOTgwNjkgMC41NDE2MTEyNCw4LjM2Mzc0NTIgMC45NDM0NzU0Miw5LjUzODk4NDIgMi4xMjExMTU1LDEwLjI0ODM0MiBMIDIuNjM5NzEyNCw5LjM4NzQxNDggQyAxLjc2OTM3OTEsOC44NjMxNjU4IDEuNjQxMzg1OSw4LjIyNDExMDIgMS44MDA3NzEyLDcuNzI2MDE4OSAxLjk2MDE1NDMsNy4yMjc5Mjg1IDIuNDI4MTU1Nyw2Ljg0MzU2MzUgMy4xNzI4MzU1LDYuOTQyMDM4NyBMIDMuMzA0NzQyMiw1Ljk0NTY3MTYgYyAtMC4wMzI0MDYsLTAuMDA0MjcgLTAuMDY0NDgsLTAuMDA3NiAtMC4wOTY1NzQsLTAuMDEwNTk0IHogTSA1LjA4NTQ4MTIsOS4wMTk1NjY2IEMgNC41MDM3NjE3LDkuMDQwMjIzMSAzLjk4NzE5NDEsOS4yNDQ5OTQzIDMuNTQzMDM2Nyw5LjM0NTc5OTYgMy4wOTg4NzkzLDkuNDQ2NjAzIDIuODAwNjM4Myw5LjQ1NjIxNzYgMi41NDMxMzczLDkuMjgyNTkwNSBsIC0wLjAxNzY2NywwLjAyNjMwMiBjIDAuMDM4OTksMC4wMjYwOTQgMC4wNzE3NzIsMC4wNTI5MzggMC4xMTQyNCwwLjA3ODUxMSBMIDIuMTQyNzA1MywxMC4yMTIyMTUgQyAyLjY4NTUzOTksMTAuNDk3OTc3IDMuMjc3ODc2LDEwLjQzNjM2OCAzLjc2NTYyNzgsMTAuMzI1NjcgNC4zMDIxNTQ5LDEwLjIwMzkgNC43ODUxNTU2LDEwLjAzNTcwOSA1LjEyMTIwNDMsMTAuMDIzNzc2IFogTSA3LjgwMDE2NjcsOC41NDQxNTI3IDYuNzY4NDY5LDkuMTk1NDQxNyBjIDAuMjQyNDQ3NywwLjM4NDAyMTIgMC4yMDg3MTcxLDAuNjA1Njc1OSAwLjA5MzQyOCwwLjgyODM0MjMgLTAuMTE1MjgzNiwwLjIyMjY2NiAtMC4zODQ2MDQ2LDAuNDM0OTIxIC0wLjY4MTEyNTgsMC41MjE3MzkgLTAuMjk2NTIwMywwLjA4NjgyIC0wLjU3NDgwOSwwLjA1MTc2IC0wLjc2Mzk1OTIsLTAuMDg3OTQgLTAuMTEyMTEwNiwtMC4wODI4IC0wLjIyNDM0LC0wLjIxNTI5NSAtMC4yOTYwMDQ0LC0wLjQ1MDI4NCBsIDQuMDJlLTQsMC4wMTY0OCBjIC0wLjI5NzIzODksMC4wMTA1NiAtMC43MTkxMzY3LDAuMTQyNzMzIC0xLjE4MTY2NDEsMC4yNTc1MzIgMC4xMzkyMjI1LDAuNDk4OTU5IDAuMzk5MDQ5NiwwLjg5NjIxMiAwLjc1MjU3NTcsMS4xNTczMjQgMC41NTI4ODM3LDAuNDA4MzU5IDEuMjQyMTIyMSwwLjQ1MDQ3NCAxLjgzMTM4MjIsMC4yNzc5NDYgQyA3LjExMjc2MjYsMTEuNTQ0MDUyIDcuNjQ3MzA2NSwxMS4xNjA1NzcgNy45NDU0MjQ2LDEwLjU4NDc3MyA4LjI0MzU0NDksMTAuMDA4OTY5IDguMjMyODE5OCw5LjIyOTQyNjQgNy44MDAxNzEsOC41NDQxNDQzIFogTSA5LjE1OTI3NjcsNS4yNzEyMTg4IDEwLjI2ODMxMyw5LjUzMjY2NzUgNy44MDE3MzY1LDguNTQ2OTAwNSBDIDguMDU5NTMxMyw4Ljk1NjQzODggOC4xNTE0Mzc2LDkuMzk1NjUxMyA4LjEzMjI4OTQsOS44MDg2NSBMIDExLjYzOTk4NCwxMS4yODU1MzQgMTAuNjg2ODAyLDcuMDgwNjE3NCAxMC4yOTk3MTgsNi42MjIwODM4IGMgLTAuMjA3Nzc0LDAuMDUxNzcyIC0wLjQzMDUxOTMsMC4wODc2NTcgLTAuNjczNjY0OSwwLjA5NzM1NSBsIC0wLjAzNTczLC0wLjg4OTk3NyBjIDAuMDE0NDY4LC01LjgzM2UtNCAwLjAyMjM1NSwtMC4wMDQwNyAwLjAzNjUxMSwtMC4wMDQ2OCB6IG0gLTEuMzc1NTk3NiwzLjI2ODYxNSAtNC4wMjJlLTQsMC4wMTQ5MTcgMC4wMTQ1MjEsLTAuMDA5MDYgeiBNIDExLjMwNTExNSwzOS4xNDkyNDQgNy4wNzc0Mjc5LDM5LjYzMzY4NiA3LjM5NTgwOTgsNDAuNzQ4MjE3IDkuODUwMjE2MiwzOS45NzI4NzMgOC42MjMwMTMsNDIuNTQxNTIgOS43MTM5OTA2LDQyLjgzMjQyMyBaIG0gLTIuODA0NTg2OCwzLjEzOTA2MiAwLjE0OTE3OTksMC4xOTc0NjkgMC4wNzYxNTcsLTAuMTU5NzgyIHogbSAwLjIwODA2NzIsMC4yNzU5ODQgMS43MTc1MzQ2LDIuMjc3MzU0IDAuOTYyNjA0LDAuMjA5MjQzIC0xLjY1MDc5NTEsLTIuMjc0MjExIC0wLjAyMzk0OCwwLjA1NTc1IHogbSAtNC4xODQxMTA1LC01LjIxNTAyMiAwLjQ2MDEwMzQsMS40MjMxIDIuNTUzMzM1NywyLjA5Mjg0IHYgLTAuMTYxNzQzIGwgLTAuMTQyMTE0MiwwLjA0NDc1IC0wLjMxODM4MTksLTEuMTE0NTMxIDAuMzM0NDc3OSwtMC4wMzg0NyB6IG0gMC4xNjcyMzg1LDAuMDgzNjIgLTAuMDAzNTQsMC4wNDM5NyAwLjAzMzM3NSwwLjAyNTkxIHogbSAtMC4wMjc0OCwwLjM0ODk5OCAtMC4yNjUzODQ1LDMuMzc2MTgzIC0yLjY3ODk2MTEsMi4wNTA4MzQgMy40NzQzMjY5LDEuMjk3ODY2IDAuOTYyNjA1MiwzLjU5OTU2MSAyLjQyNzcxMDMsLTIuOTMwMjEyIEggMTEuNTU1OTcyIEwgMTAuOTYzNTcxLDQ0LjQ2NTE1NyAxMS4zODg3MzQsNDUuMDUwODg0IDEwLjQyNjEzLDQ0Ljg0MTY0MiAxMC4wMDE3NTEsNDQuMjc5MDc1IDguNTAwNTI5Myw0NC4wNDYyNzYgNi41NzUzMTg4LDQ1Ljc2MjI0IDYuMTU2ODMwNCw0My45MjA2NSA0LjI3MzIzNCw0Mi44MzI0MjEgNS42NTQzMjg2LDQxLjgyNzgwOSA1LjQ0NTA4MzQsMzkuMTkwODU0IDUuNDE3OTg5MywzOS4xMjc2NDUgNC45ODQ1ODIxLDM4Ljc3MjM2MyBaIE0gNDguODAxNTc3LDUuMzcwOTM3NiBjIC0wLjUwNTkxNCwwLjE2MjI0NzggLTAuOTc0MTI1LDAuMzU2NDI1MSAtMS40MTI1MDIsMC41NzMxNjUyIC0wLjY0ODY5NiwwLjY4NTQxNTUgLTEuMTQ0NTksMS40MjA3ODA1IC0xLjU4NjQxNywyLjE2NTg2MDMgLTAuMjUzNDAxLDAuNDYzNzg3OCAtMC40ODY4MywwLjkzMDQyMDQgLTAuNzIxNTU4LDEuMzkxNjkzNyAwLjA4MjIyLDAuMDk5NDYgMC4xNjQzNSwwLjE5OTE2OCAwLjI0NjE0NiwwLjI5OTE0NTIgMC45MDAzNTksLTAuOTU1MzQ0OCAxLjc1MDY1NCwtMS45MjM2NzQgMi44ODQ2NzgsLTIuNjY4MzYxIDAuMjU1MTI1LC0wLjE2MzIzMTEgMC41MjQwODUsLTAuMzE1MTE1MyAwLjgxMDY2OSwtMC40NTMwMzY3IDAuMTUwMTIyLC0wLjMxNDM4OTEgMC4zMjEzMDIsLTAuNjI2MTk0IDAuNTE2NjQxLC0wLjkzNTEyMzcgLTAuMTAxMjYyLC0wLjExMDM1NTUgLTAuMjA2NDkxLC0wLjIxODU1OTkgLTAuMzE1NjM2LC0wLjMyNDY2MzIgLTAuMTQwNjEsLTAuMDE4OTU5IC0wLjI4MTI3MywtMC4wMzUyMiAtMC40MjIwMjEsLTAuMDQ4Njc4IHogbSAxLjA4NDY5NywzLjQ4ODg1MjEgYyAtMC42NDI1NDQsLTAuMDAxMjUgLTEuMjY3NzQ0LDAuMDI4MTM2IC0xLjg3NzcxMiwwLjA4MjQzOSAtMS43MDg2MzYsMC44MDk3MjYzIC0zLjE2ODM2NywxLjgyMzI5NzMgLTQuNTMzODk3LDIuODk0NDg3MyAtMC44MDk2MjksMC42ODI0NTIgLTEuNTgzMzMzLDEuMzg1MDUgLTIuMzU2MjYyLDIuMDc2MzUyIDAuMDgxNDMsMC4yNDUzODQgMC4xNjIzMzgsMC40OTEyMSAwLjI0MjYxNSwwLjczNzI2NCAyLjM3NDQzMiwtMS4xMzEzNzUgNC42NjQzMTIsLTIuMzIzMjcgNy4zMjIzODksLTIuODkxNzQgMC41OTQ4ODksLTAuMTE5ODQ4IDEuMjA3NDc4LC0wLjIwODU1NSAxLjg0Mjc2NywtMC4yNTgzMTcgMC41MDgzNjcsLTAuNDc4MzI3IDEuMDU0NDY5LC0wLjkzNjczMSAxLjY0MzM0LC0xLjM3MjA2NSBDIDUyLjA2MDQyMyw5Ljg0ODY2NjMgNTEuOTQxOTIsOS41NzA1MTQ5IDUxLjgxNTAxNCw5LjI5MzE5MzggNTEuNTY2MTQsOS4xNTU4MDM2IDUxLjMxNTE2Myw5LjAyMzUwMzEgNTEuMDYyMDUsOC44OTYyOTU0IDUwLjY2MzU4NSw4Ljg3MjM0NzIgNTAuMjcxNzkzLDguODYwNTQ0OSA0OS44ODYyNzQsOC44NTk3ODQ1IFogTSAzOS44NTI3MjksMzAuNDczNjM4IGMgLTAuMjExMTg2LDkuODJlLTQgLTAuNDQ0NTIxLDAuMDA0NyAtMC43MDQyODksMC4wMDk1IGwgLTAuOTE3NDU2LDAuMzYxNTY2IGMgMS44OTIwNywtMC4wMzQ1MyAyLjQ4Mjc3OCwwLjQ4MDY4MSAyLjkwNzgzMSwxLjEwMDAwOCAwLjQyNTA2MSwwLjYxOTMyMiAwLjc1NDg2NSwxLjQ0NDY3NSAwLjM2MzkyMSwyLjE1OTE4NSAtMC4zOTA5MzQsMC43MTQ1MDggLTEuMDk2NDU1LDAuOTA0MjQxIC0xLjkzMTA5NCwwLjk5MjQ0IC0wLjgzNDY0LDAuMDg4MiAtMS44NTc4ODgsMC4xMTU5IC0yLjkwNTQ3OSwtMS4xOTY1ODEgbCAwLjE4NzY1MywxLjAzODM3MiBjIDEuMTg2MTQ4LDEuNDg2MDcgMS42MTE0MDIsMS41OTAzNjYgMi43OTY3MzUsMS40NjUxMDcgMS4xODUzMzEsLTAuMTI1MjY0IDIuNjc1NzMyLC0wLjY0MTY2OSAzLjE5OTUyMSwtMS41OTg5NzcgMC41MjM3OSwtMC45NTczMSAwLjA5MzIsLTIuNDE0MjgxIC0wLjU2Mzc0LC0zLjM3MTQ3MiAtMC41NzQ4MjYsLTAuODM3NTQxIC0wLjk1NTI5MiwtMC45NjU1MjUgLTIuNDMzNjAzLC0wLjk1OTA2OSB6IG0gMC4xOTc0NjgsLTE0LjYxMDIzMyBjIC0xLjg5NCwxLjA2NTc5MSAtMy41MjQ0ODgsMi41MzM3MDggLTQuNDI0MzcsNC4yMzUxNDYgMS4yMTc0NTgsLTEuMzQ1MjEyIDIuOTAzNTIxLC0yLjI1NTM0OCA0LjY5NjgyLC0yLjgyODUzNCAtMC4wOTU2OCwtMC40Njc4OTQgLTAuMTg2MzEyLC0wLjkzNzAxOSAtMC4yNzI0NSwtMS40MDY2MTIgeiBNIDEzLjk3OTAwNiwyNi43NDkyMzcgYyAtMC42MjMwNDYsMC42NDA0MDcgLTEuMTg0MTgzLDEuMjU3NjM4IC0xLjc5NjQ0NCwxLjc3MTcwOSAtMC42MDczODUsMC41MDY3MjEgLTEuMjcxNDA0LDAuOTM5NTAyIC0yLjAxMzkzMSwxLjE1MzM5OSAwLjM0Mzc2NCwwLjU3MzQ4MSAwLjc5NzE2NiwxLjA5NzU5NSAxLjMyNzcwMiwxLjU3MTEwMiAwLjU3MDM0MywtMC41MzQ0MTQgMC45ODg5NDUsLTEuMTMwMjU2IDEuMzE0NzUsLTEuNzMzNjI5IDAuNDg2OTk2LC0wLjkwMjc2NyAwLjc5MDU3OSwtMS44MTc3NzYgMS4xNjc5MjMsLTIuNzYyNTgxIHogbSAxMy41MzMzODYsNS45NzE5MTcgYyAtMC41MDIyOTksLTAuMDA1MiAtMS4wMTgyNjksMC4wNzQ3MSAtMS41MTE0MywwLjI4NTQwNSAtMC41NzU0MzEsMC4yNDU0MzEgLTEuMTE4MTE5LDAuNjkyNzMgLTEuNDcyMTczLDEuMzQwNjU3IC0wLjQyMTM0NywwLjc5MzgyNiAtMC41NDI0MTUsMS43Nzk2MzUgLTAuNDUzNDMsMi43MDU2NTggMC40NjMyMDcsLTAuMDgxMTEgMC45MjMxODQsLTAuMTcyMDc2IDEuMzc5NTI0LC0wLjI3MjA1OCAtMC4xNzM5NDcsLTAuNzM1MzM5IC0wLjI0MTk0NCwtMS40ODYyMzIgLTAuMDEwNiwtMi4wNzU5NTkgMC4xNTMzNjEsLTAuNDUzODM3IDAuNDkyNDkxLC0wLjg1NTA2IDAuODk5Mzk4LC0xLjEzNDE2MSAwLjQxMTA2MSwtMC4yODI0NDMgMC45MDkyNjcsLTAuNDUwNDg4IDEuNDI2NjMzLC0wLjUzMTk0NiAwLjQ2MDY0MiwtMC4wNjM2IDAuOTEyNDk0LC0wLjA2Nzg0IDEuMzExNjA3LDAuMDQ0MzYgLTAuMzc2MDU0LC0wLjIxMzg2NSAtMC44NTI0NDYsLTAuMzIxMjcgLTEuMzU1MTg0LC0wLjM1NDQ5OSAtMC4wNzEwOSwtMC4wMDQgLTAuMTQyNTksLTAuMDA2NyAtMC4yMTQzNDcsLTAuMDA3NCB6IG0gLTEwLjIwOTAyNSwyLjIwMjc2MSAtMi44NTU2MjIsMC44NzI3MDUgMC40MTc3MDQsNC45OTkxMDQgMi4yOTg1NTIsLTEuMTkwMyAtMi4wODk2OTksMTIuNDU3MzI2IDEwLjUxODM3NywtMTIuOTMzNTI1IC0wLjY5NjQzNywtMS45MDQ0MDEgLTcuMzgzNjMxLDguNTY5NjEyIDIuMTU5MTg4LC0xMC4wNzcxMTYgLTMuMTM0MzU1LDEuOTgzNzAyIHogTSAzOC4yODk0OCwxMy4yNTgyNSBjIC0wLjA2ODk2LDAuMDAyMSAtMC4xMzczMjgsMC4wMTQwNyAtMC4yMDI5NjUsMC4wMzYxMiAtMC4xNzY5MjgsMC4wNTk1MSAtMC4zMjI5NTUsMC4xODY4OTEgLTAuNDA1OTI3LDAuMzU0MTA1IC0wLjE3MjgsMC4zNDc5ODkgLTAuMDMwNzksMC43NzAxNzQgMC4zMTcyMDQsMC45NDI5NzcgMC40MzY5OTcsMC4yMTcgMC42MDE2OCwwLjQ3MDY2IDAuNzU2ODkzLDAuODc2MjM2IDAuMTA4ODI1LDAuMjg0MzcyIDAuMTgzNjQ2LDAuNjM5ODAzIDAuMjgxNDc5LDEuMDI5NzM2IDAuMzI4NDkzLC0wLjIyMjg5NSAwLjY2NDY3NywtMC40Mzc0MjcgMS4wMTQwMzMsLTAuNjM0MDE2IDAuMDg2MTQsMC40Njk1OTEgMC4xNzY3NjYsMC45Mzg3MiAwLjI3MjQ1LDEuNDA2NjEyIC0wLjIxMTQ5NywwLjA2NzU5IC0wLjQyMDk5LDAuMTQwNzQ2IC0wLjYyODkxMywwLjIxNzg4MiAwLjExNjg3MiwwLjAyNjcgMC4yNDE5ODksMC4wMjQzOSAwLjM2NDcwNywtMC4wMTM3NSAwLjM3MTA5OCwtMC4xMTUyMTMgMC41Nzg1MSwtMC41MDk0NzQgMC40NjMyNDMsLTAuODgwNTU1IC0wLjEzOTYyNywtMC40NDkyMDEgLTAuMjIxNjIyLC0xLjAyNDExMyAtMC40NTMwMzUsLTEuNjI4ODEyIC0wLjIzMTQxNiwtMC42MDQ2OTggLTAuNjc0MzU3LC0xLjI1MDc5OSAtMS40NDUwODUsLTEuNjMzNTIyIC0wLjA4Mjc1LC0wLjA0MTEyIC0wLjE3MjgwMSwtMC4wNjU1MyAtMC4yNjQ5OTEsLTAuMDcxODQgLTAuMDIzMDIsLTAuMDAxNiAtMC4wNDYxMSwtMC4wMDE5IC0wLjA2OTA5LC0wLjAwMTMgeiBtIDIuMDg0OTg3LDIuNzU1OTA2IGMgMC4wNDgyMywwLjIwMzY1IDAuMDkzNzEsMC40MDczMTcgMC4xNDcyMTcsMC41Nzk0NDcgMC4xMTUyNjcsMC4zNzEwODIgLTAuMDkyMTUsMC43NjUzNDIgLTAuNDYzMjQzLDAuODgwNTU2IC0wLjEyMjcxOCwwLjAzODE1IC0wLjI0NzgzNSwwLjA0MDQ0IC0wLjM2NDcwNywwLjAxMzc1IC0wLjA0ODU2LDAuMDE4MDEgLTAuMDk0MTcsMC4wNDE5MiAtMC4xNDI1MDYsMC4wNjA0NiAwLjA4NDk2LDAuMDM0IDAuMTc2ODUxLDAuMDU0NzIgMC4yNzM2MjgsMC4wNTc3MSBsIDMuODQ3NjY5LDAuMTE4NTU4IGMgMC40NDM4MTcsMC4wMTM2NSAwLjgxNDY3NCwtMC4zMzUwNTggMC44MjgzNCwtMC43Nzg4NzcgMC4wMTM2OCwtMC40NDM4MTkgLTAuMzM1MDYsLTAuODE0Njc2IC0wLjc3ODg3NywtMC44MjgzNDMgeiBtIDEuNzU0NDM0LDE0LjU0NjI0MSBjIC0wLjE5ODc5NSwtMC4wMDc0IC0wLjM4MzI3NywwLjA1ODM4IC0wLjUyODAxMywwLjE3MjczNCAwLjI1MjA1LDAuMTQ0NzI1IDAuNDU0NDYsMC4zNjMwMzMgMC42ODU0NDQsMC42OTk1NzcgMC4xNTY3LDAuMjI4MzI1IDAuMjk4OTksMC40ODY0MzYgMC40MjAwNiwwLjc1ODA3MiBsIDIuNTU5MjIxLDAuMDk1IGMgMC40NDM4NTQsMC4wMTY1NyAwLjgxNzA1OSwtMC4zMjk5MTIgMC44MzM0NDUsLTAuNzczNzc1IDAuMDE2MzMsLTAuNDQzNzAyIC0wLjMzMDA2OSwtMC44MTY2NTggLTAuNzczNzcyLC0wLjgzMzA1MyB6IG0gNi4zOTc4NjcsLTMuOTA2NTU3IGMgLTAuMDM1MDIsOS44MmUtNCAtMC4wNjk3NCwwLjAwNDEgLTAuMTA0NDI3LDAuMDA5OCAtMC4yMTA1NjMsMC4wMzQwOCAtMC4zOTg5NTgsMC4xNTA0NTUgLTAuNTIzNjk3LDAuMzIzNDg0IGwgLTIuNjU3NzY3LDMuNjg4Njc4IDAuMDg0NDEsMC4wMDMxIGMgMC40NDM3MDIsMC4wMTY0MSAwLjc5MDEyLDAuMzg5MzUxIDAuNzczNzcyLDAuODMzMDUzIC0wLjAxNDEyLDAuMzgyMzU5IC0wLjI5Nzk5NSwwLjY3NzExMyAtMC42NTg3NDksMC43NDUxMTYgMC4zMTM4ODEsMC4wODUxNyAwLjY2MTA1OSwtMC4wMjUzIDAuODYyNDk2LC0wLjMwNDY0MSBsIDIuOTAwNzY5LC00LjAyNTExNSBjIDAuMjU5NTY5LC0wLjM2MDMzOSAwLjE3NzgzNSwtMC44NjI4OCAtMC4xODI1NDcsLTEuMTIyMzg2IC0wLjExNDQ4NCwtMC4wODI1IC0wLjI0ODY1OSwtMC4xMzMzOTggLTAuMzg5MDUsLTAuMTQ3NjA4IC0wLjAzNDk1LC0wLjAwMzUgLTAuMDcwMiwtMC4wMDQ2IC0wLjEwNTIwOSwtMC4wMDM1IHogbSAwLjYyODkxNCwtNC4zODA3OTIgYyAtMC4wMzAwOCwtNC4wMmUtNCAtMC4wNjAzMiw2LjAzZS00IC0wLjA5MDI5LDAuMDAzNSAtMC4zNzMzMTgsMC4wMzYzMyAtMC42NzE5MTMsMC4zMjU5NjkgLTAuNzE5NTk5LDAuNjk4MDA1IGwgLTAuNTMwNzYyLDQuMTI4NzU4IDAuMDgzNjIsLTAuMTE2MjA2IGMgMC4xMjQ3MzksLTAuMTczMDMgMC4zMTMxMzQsLTAuMjg5Mzk1IDAuNTIzNjk3LC0wLjMyMzQ4MyAwLjAzNDY0LC0wLjAwNTYgMC4wNjk0NCwtMC4wMDg3IDAuMTA0NDI3LC0wLjAwOTggMC4wMzUwMiwtOS44MmUtNCAwLjA3MDI3LDAgMC4xMDUyMDksMC4wMDM1IDAuMTQwMzkxLDAuMDE0MjIgMC4yNzQ1NjYsMC4wNjUxMyAwLjM4OTA1LDAuMTQ3NjEgMC4yNDg3MDcsMC4xNzkwOTIgMC4zNTM3MjcsMC40NzM3MDcgMC4zMTY0MTgsMC43NTc2NzkgMC4wMzQ3OSwtMC4wNzQwNCAwLjA1OTMzLC0wLjE1NDMyOSAwLjA3MDI3LC0wLjIzOTg2NSBsIDAuNTMyNzMsLTQuMTQzMjg1IGMgMC4wNTY3NSwtMC40NDA0NzQgLTAuMjU0Mzc0LC0wLjg0MzUzOSAtMC42OTQ4NjIsLTAuOTAwMTg0IC0wLjAyOTg1LC0wLjAwMzggLTAuMDU5NzksLTAuMDA1OCAtMC4wODk5LC0wLjAwNjQgeiBtIC04LjA4NTU2NCwxMy44MTE3MjQgYyAtMC4zODA5MjMsMC4xMzMyMDYgLTAuNzcyMDE0LDAuMjEyOTM2IC0xLjE0OTg2NSwwLjI2OTMxMSAtMC4wNzg4LDAuMTM4NjcgLTAuMTE3NTY1LDAuMzAxODMyIC0wLjEwMTI4MiwwLjQ3MjY2NSBsIDAuMzU0ODkyLDMuNzI5MTEgYyAwLjA0MjAyLDAuNDQyMTExIDAuNDM0NTI3LDAuNzY2NDE5IDAuODc2NjI3LDAuNzI0MzA5IDAuNDQyMTE1LC0wLjA0MjAyIDAuNzY2NDE4LC0wLjQzNDUyOSAwLjcyNDMxLC0wLjg3NjYzIGwgLTAuMzU1Mjg0LC0zLjcyOTEwOSBjIC0wLjAyMzYzLC0wLjI0ODM3OCAtMC4xNTc5MDEsLTAuNDU5NzIzIC0wLjM0OTM5NSwtMC41ODk2NTYgeiBtIC0wLjk0MjU4MiwzLjk4NDI4OCAtNS4zODE0NzgsMi43NzM5NjYgYyAtMC4zOTQ3NDMsMC4yMDM0NTUgLTAuNTQ5Nzc2LDAuNjg4NDE2IC0wLjM0NjI1NiwxLjA4MzEyNSAwLjIwMzQ0OSwwLjM5NDUxNCAwLjY4ODEyMSwwLjU0OTUxMiAxLjA4MjczNCwwLjM0NjI1NyBsIDUuNzQxODY2LC0yLjk1OTY1NyBjIDAuMTIxOTQ1LC0wLjA2Mjg1IDAuMjIwOTYzLC0wLjE1MjY5NSAwLjI5MzY1LC0wLjI1ODMxNyAtMC4xMjU3MjEsMC4xMTkwNzEgLTAuMjgxODIyLDAuMjA4MDc5IC0wLjQ2NzU2NSwwLjIyNTczMyAtMC40NDIwOTgsMC4wNDIxMiAtMC44MzQ2MDcsLTAuMjgyMiAtMC44NzY2MjgsLTAuNzI0MzA5IHogbSAtOS4zMTkwNDgsMS4yNjQxMDUgYyAtMC4zNDYyOTgsLTAuMDA2NyAtMC42NjE4MDEsMC4yMTA2ODQgLTAuNzc1NzM3LDAuNTQzMzMxIC0wLjE0Mzg0OCwwLjQyMDA3OSAwLjA4MDA3LDAuODc3MjMzIDAuNTAwMTQ2LDEuMDIxMDk4IGwgNC4zMjA3MjgsMS40ODAwMjUgYyAwLjMxNDk2LDAuMTA4MDE0IDAuNjUwNjgxLDAuMDA5IDAuODU5NzQ4LC0wLjIyNDE2NCBsIC0wLjIzMDgzNywwLjExODk1MyBjIC0wLjM5NDYxMywwLjIwMzI1MyAtMC44NzkyODUsMC4wNDgyNSAtMS4wODI3MzQsLTAuMzQ2MjU3IC0wLjIwMzUxOSwtMC4zOTQ3MDkgLTAuMDQ4NDksLTAuODc5NjcgMC4zNDYyNTYsLTEuMDgzMTI1IGwgMC4yMzU1NDcsLTAuMTIxMzA4IC0zLjkyNzc1NiwtMS4zNDUzNyBjIC0wLjA1Njk4LC0wLjAxOTQ5IC0wLjExNTk3OCwtMC4wMzI1NCAtMC4xNzU4NzUsLTAuMDM4ODcgLTAuMDIzMzEsLTAuMDAyNSAtMC4wNDY0LC0wLjAwMzggLTAuMDY5NDksLTAuMDA0NCB6IG0gLTIuMDYyNjEyLC0xLjk1MjY4OCBjIC0wLjIxMzA2LDAuMDA5MiAtMC40MTM3MjksMC4xMDI2OTkgLTAuNTU3ODU0LDAuMjU5ODg4IC0wLjMwMDE0LDAuMzI3MzY2IC0wLjI3Nzk5MywwLjgzNjA4MiAwLjA0OTQ2LDEuMTM2MTIzIGwgMS44MjE5NiwxLjY2OTYzOSBjIC0wLjA3Mzk0LC0wLjE3NTU1NCAtMC4wOTMyNiwtMC4zNzUyMzMgLTAuMDI2NywtMC41Njk2MzEgMC4xMjE1MzIsLTAuMzU0ODIxIDAuNDcyMjQ4LC0wLjU3ODQ3OCAwLjg0NTIyMywtMC41MzkwMTEgMC4wNTk5LDAuMDA2NCAwLjExODg5MywwLjAxOTM2IDAuMTc1ODc3LDAuMDM4ODcgbCAwLjM0NzgyNCwwLjExOTM0NSAtMi4wNzc5MjIsLTEuOTA0Nzk0IGMgLTAuMTU3MTIxLC0wLjE0Mzk1MyAtMC4zNjQ5NjksLTAuMjE5NjM5IC0wLjU3Nzg2OSwtMC4yMTA0MjQgeiBtIDAuNTI3MjMzLC0yLjQyNzMxOSBjIC0wLjAyNjI3LC02LjAxZS00IC0wLjA1MjY3LC0yLjRlLTUgLTAuMDc4OTEsMC4wMDIgLTAuMzgyNTI2LDAuMDI4NjQgLTAuNjkxNTQ0LDAuMzIzNTE5IC0wLjczODA1LDAuNzA0Mjg3IGwgLTAuMjM5MDgsMS45NTk3NTYgYyAwLjE0MTgzOCwtMC4xNDEyMzEgMC4zMjc5NTUsLTAuMjMgMC41Mjg4MDQsLTAuMjM4Njg4IDAuMjEyOTAxLC0wLjAwOTEgMC40MjA3NDksMC4wNjY0NyAwLjU3Nzg3NiwwLjIxMDQyMSBsIDAuNDY0ODE1LDAuNDI1OTUgMC4yNjM4MTMsLTIuMTYyNzIgYyAwLjA1Mzc4LC0wLjQ0MDc4OSAtMC4yNTk5NiwtMC44NDE3MTcgLTAuNzAwNzU0LC0wLjg5NTQ3MiAtMC4wMjYxMSwtMC4wMDMyIC0wLjA1MjI0LC0wLjAwNDkgLTAuMDc4NTIsLTAuMDA1NSB6IG0gLTAuNjM1OTc4LDAuMzA1ODIgLTMuMTg1Mzg3LDAuNzgyNDEgYyAtMC4wODA3MiwwLjAxOTc5IC0wLjE1NTcyLDAuMDUxMTcgLTAuMjIzMzc4LDAuMDkxODYgbCAwLjM2NDMxMywwLjk5NTk3MyAtMC4zMjcwMTksMC40MDIwMDIgYyAwLjE2ODY1MiwwLjA4OTg5IDAuMzY5NDQ0LDAuMTIxMDgzIDAuNTY5NjMzLDAuMDcxODQgbCAyLjQ1NzU0NywtMC42MDM3ODcgMC4xNjMzMTIsLTEuMzM5ODcyIGMgMC4wMTg3OSwtMC4xNTM4MTcgMC4wODg5NywtMC4yODY1MzQgMC4xODA5NzksLTAuNDAwNDMxIHogTSAyNC4wOTQ5OSwzNS44MjkyMDQgYyAtMC4wMjMyNCwwLjAwOTUgLTAuMDQ1OTksMC4wMjAwOCAtMC4wNjgzMiwwLjAzMTgxIC0wLjM5MzA0MSwwLjIwNjQ0NSAtMC41NDQzNTksMC42OTIzOSAtMC4zMzgwMTIsMS4wODU0ODIgbCAwLjU0ODA0MiwxLjA0Mzg2OCAwLjY1OTUzMiwtMC43NjU1MjkgMC4zMzIxMjQsMC45MDg0MjggYyAwLjA2NzY2LC0wLjA0MDcgMC4xNDI2NjMsLTAuMDcyMDggMC4yMjMzNzgsLTAuMDkxODYgbCAwLjU1NTg5NSwtMC4xMzY2MjUgLTAuNTg2NTEzLC0xLjExNzI4MSBjIC0wLjQ0NTM0LDAuMDk3MTEgLTAuODkzODk4LDAuMTg2MjUzIC0xLjM0NTc2MiwwLjI2NTM4NCAtMC4wMzg4MywtMC40MDM5NTggLTAuMDI4OTksLTAuODE3ODQ5IDAuMDE5NjQsLTEuMjIzNjY5IHogbSAyLjExNTIxNiwzLjY4MTYwNyAtMC4zNzQ5MTMsMC4wOTIyNyBjIC0wLjIwMDE4OSwwLjA0OTI0IC0wLjQwMDk4MSwwLjAxODA1IC0wLjU2OTYzMywtMC4wNzE4NCBsIC0wLjA2NTE2LDAuMDgwMDggYyAwLjIzNjQ4NywwLjE1NTg4MiAwLjU0ODA0MiwwLjE4MjE3OSAwLjgxNjU2NSwwLjA0MTIyIDAuMDczMTIsLTAuMDM4MzYgMC4xMzc0OTIsLTAuMDg2NCAwLjE5MzE0OCwtMC4xNDE3MjIgeiBNIDE2Ljk0MjE5MywzMy40MDExIGMgLTAuMTM4NDQsLTJlLTYgLTAuMjc1MDQxLDAuMDM1OTEgLTAuMzk2MTEyLDAuMTA0NDI2IGwgLTMuMTM3MSwxLjc3NTYzOCBjIC0wLjM4NjcxMSwwLjIxODY2NCAtMC41MjI3ODcsMC43MDk1MTkgLTAuMzAzODU3LDEuMDk2MDggMC4yMTg3OTEsMC4zODYzMzMgMC43MDkzMTgsMC41MjIxOTIgMS4wOTU2ODgsMC4zMDM0NjUgbCAwLjMwNjIxMywtMC4xNzM1MjEgLTAuMDU5MjgsLTAuNzEwNTY4IDIuODU1NjIxLC0wLjg3MjcwNSAtNC4wMWUtNCwwLjAwMTMgMC4wMzUzMywtMC4wMjAwMiBjIDAuMzg2NTY5LC0wLjIxODgwMiAwLjUyMjQ1OCwtMC43MDk2MjIgMC4zMDM0NjQsLTEuMDk2MDgxIC0wLjEwNTA2NiwtMC4xODU0MjEgLTAuMjc5NDU0LC0wLjMyMTU0MiAtMC40ODQ4MzYsLTAuMzc4NDQ4IC0wLjA1MDgxLC0wLjAxNDEgLTAuMTAyODc3LC0wLjAyMzE3IC0wLjE1NTQ2MSwtMC4wMjcwOCAtMC4wMTk4MywtMC4wMDE1IC0wLjAzOTUsLTAuMDAyNCAtMC4wNTkyOCwtMC4wMDI0IHogbSAtNS44OTU3NTQsLTAuMjM2MzMyIGMgLTAuMDUyNzEsLTAuMDAxNiAtMC4xMDU0MzgsMC4wMDIyIC0wLjE1NzQyNiwwLjAxMDk5IC0wLjIxMDIxLDAuMDM1NDYgLTAuMzk3NzM3LDAuMTUyOTM4IC0wLjUyMTM0NCwwLjMyNjYyNSAtMC4yNTczNzMsMC4zNjE4NjEgLTAuMTcyNjUzLDAuODYzODUzIDAuMTg5MjI0LDEuMTIxMjA2IGwgMi42NjM2NDksMS44OTQxOTYgYyAwLjAwNDksMC4wMDM0IDAuMDEsMC4wMDYxIDAuMDE0OTIsMC4wMDkzIC0wLjA0NTc5LC0wLjA0NzYgLTAuMDk2MjksLTAuMDg5ODQgLTAuMTMwMzM3LC0wLjE0OTk2NSAtMC4yMTg5MjksLTAuMzg2NTYgLTAuMDgyODYsLTAuODc3NDE2IDAuMzAzODU3LC0xLjA5NjA3OSBsIDAuNDcxODc3LC0wLjI2NjkyOCAtMi4zOTE5ODYsLTEuNzAxMDQ2IGMgLTAuMTI5NTY0LC0wLjA5MjEyIC0wLjI4MzUzMSwtMC4xNDM3NTkgLTAuNDQyNDM2LC0wLjE0ODM5NiB6IG0gLTAuNzA3MDM2LC0zLjIzMjEwNSBjIC0wLjAzNjA1LDAuMDg3MjQgLTAuMDU4MTYsMC4xODE5MzEgLTAuMDYxMjQsMC4yODE4NzEgbCAtMC4xMTgxNjcsMy44NDc2NyBjIC0wLjAxMzU3LDAuNDQxMjkyIDAuMzMxMjEyLDAuODA5OTM2IDAuNzcxNDE4LDAuODI3NTU4IGwgLTAuMzc0NTE5LC0wLjI2NjE2OSBjIC0wLjM2MTg4MiwtMC4yNTczNTQgLTAuNDQ2NjAxLC0wLjc1OTM0NSAtMC4xODkyMjksLTEuMTIxMjA2IDAuMTIzNjA3LC0wLjE3MzY4NyAwLjMxMTEzNCwtMC4yOTExNzMgMC41MjEzNDQsLTAuMzI2NjI1IDAuMDUyLC0wLjAwODggMC4xMDQ3MTcsLTAuMDEyNSAwLjE1NzQyNSwtMC4wMTA5OSAwLjE1ODkwNiwwLjAwNDYgMC4zMTI4NzMsMC4wNTYyOCAwLjQ0MjQzNiwwLjE0ODM5NSBsIDAuMjk2Mzk4LDAuMjEwODE2IDAuMDgyMDUsLTIuNjYwMTE5IGMgLTAuMTE2NjU5LDAuMTI5ODQzIC0wLjIzODc1MSwwLjI1NzY4NCAtMC4zNzA5ODksMC4zODE1ODggLTAuNDQ5MDkzLC0wLjQwMDgxNyAtMC44MzgwOSwtMC44NDAxODggLTEuMTU2OTMsLTEuMzEyNzg1IHogbSAtMC4xMjUyMzIsLTAuMTg5MjI1IC0xLjgwNjY1MTEsMC4yOTQwNDUgYyAtMC40MzgzMTM2LDAuMDcxNDEgLTAuNzM1NzI1NSwwLjQ4NDY1IC0wLjY2NDI0MzQsMC45MjI5NTIgMC4wNzE0MDcsMC40MzgxMzYgMC40ODQzOTg0LDAuNzM1NDg3IDAuOTIyNTYxLDAuNjY0MjQ1IGwgMS41NzY5OTA1LC0wLjI1Njc0NyAwLjAzNTMzLC0xLjE1MzM5OSBjIDAuMDAzMSwtMC4wOTk5NCAwLjAyNTE5LC0wLjE5NDYyNyAwLjA2MTI1LC0wLjI4MTg3MSAtMC4wNDIzNywtMC4wNjI4IC0wLjA4NDE4LC0wLjEyNTgyNyAtMC4xMjUyMzMsLTAuMTg5MjI1IHogTSAzLjY3ODUxMDIsMjYuMjk4MTY0IGMgLTAuMDM1MDg0LDEuOTZlLTQgLTAuMDY5OTksMC4wMDI3IC0wLjEwNDgxODksMC4wMDc0IC0wLjIxMTIyMzQsMC4wMjg5OSAtMC40MDIyODI5LDAuMTQwNjg4IC0wLjUzMTE1OTUsMC4zMTA1MyAtMC4yNjgzMzQ0LDAuMzUzNjQ4IC0wLjE5OTI2OSwwLjg1Nzg1MSAwLjE1NDI4MzEsMS4xMjYzMTEgbCA0LjcyMzUxNDcsMy41ODUwNjUgYyAtMC4wODQ5NywtMC4xMDUwMzkgLTAuMTUzNzY0MywtMC4yMjQxNzUgLTAuMTc3MDUzMSwtMC4zNjcwNjIgLTAuMDcxNDgsLTAuNDM4MyAwLjIyNTkyOTgsLTAuODUxNTQ5IDAuNjY0MjQzNCwtMC45MjI5NTIgbCAwLjM4OTA0NjIsLTAuMDYzMjEgLTQuNjI3NzI1LC0zLjUxMjgwMSBjIC0wLjExMjM3NzQsLTAuMDg1MjIgLTAuMjQ1MTk1NiwtMC4xMzkzNzIgLTAuMzg1MTIwMiwtMC4xNTcwMyAtMC4wMzQ4NzYsLTAuMDA0NCAtMC4wNzAxMjYsLTAuMDA2NSAtMC4xMDUyMTA3LC0wLjAwNjQgeiBtIDUuMTYyODEwNyw1LjI5Nzg1NyAtMC4xNzU0ODM0LDAuMDI4NjUgYyAtMC4wODQwNDIsMC4wMTM2NyAtMC4xNjQ2MTc2LDAuMDAyNCAtMC4yNDQ1NzY4LC0wLjAwOTUgMC4xMzk4ODA4LDAuMDMxMDUgMC4yODQ5MDg2LDAuMDI0IDAuNDIwMDYwMiwtMC4wMTkyNCB6IE0gMi42ODcyNDczLDIwLjg1MzQ4MiBjIC0wLjAzNTAxLDAuMDAyMSAtMC4wNjk5MTgsMC4wMDY3IC0wLjEwNDQyNjIsMC4wMTMzNSAtMC40MzU4OTE3LDAuMDg0NDcgLTAuNzIwNzk0LDAuNTA2Mjg4IC0wLjYzNjM3MTIsMC45NDIxOSBsIDAuOTc3OTE0OCw1LjA1MTcxMSBjIDAuMDI3MDUyLC0wLjA4NTE0IDAuMDYxMDc0LC0wLjE2OTM0NSAwLjExODE2NzEsLTAuMjQ0NTc4IDAuMTI4ODc2NiwtMC4xNjk4NDIgMC4zMTk5MzcxLC0wLjI4MTUzOSAwLjUzMTE1OTUsLTAuMzEwNTMgMC4wNjk2NTcsLTAuMDA5NiAwLjE0MDI3MDQsLTAuMDEgMC4yMTAwMjk2LC0wLjAwMTMgMC4xMzk5MjQ2LDAuMDE3NjcgMC4yNzI3NDI4LDAuMDcxODEgMC4zODUxMjAyLDAuMTU3MDMzIGwgMC4zNzAyMDMzLDAuMjgxMDg3IC0xLjAxNDAzMjksLTUuMjM4OTczIGMgLTAuMDY5MTA1LC0wLjM1NzI4IC0wLjM2OTU2MDYsLTAuNjIzNjA1IC0wLjczMjU1MzUsLTAuNjQ5MzIzIC0wLjAzNTA2MywtMC4wMDI1IC0wLjA3MDE5OSwtMC4wMDI5IC0wLjEwNTIxMDcsLTguMzZlLTQgeiBtIDMuMzk1ODExNCwtNC45MTM1MjQgYyAtMC4wNzAyNzIsLTAuMDAyOSAtMC4xNDA2MjE0LDAuMDAzNCAtMC4yMDkyNDUyLDAuMDE4ODQgLTAuMjA4MDY5MSwwLjA0NjkxIC0wLjM4ODk3MzMsMC4xNzQ1NzQgLTAuNTAyODk0NSwwLjM1NDg5MiBsIC0yLjkxMDE4OTksNC42MDMzODYgYyAwLjA0MTU5NCwtMC4wMTU1OCAwLjA3NzAzMiwtMC4wNDE1MiAwLjEyMjA5MiwtMC4wNTAyNSAwLjAzNDUxMSwtMC4wMDY3IDAuMDY5NDA3LC0wLjAxMTI2IDAuMTA0NDI2MiwtMC4wMTMzNSAwLjAzNTAxMSwtMC4wMDIxIDAuMDcwMTQ2LC0wLjAwMTkgMC4xMDUyMTA3LDguMzVlLTQgMC4zNjI5OTI5LDAuMDI1NzIgMC42NjM0NTQ4LDAuMjkyMDQ1IDAuNzMyNTUzNSwwLjY0OTMyNSBMIDMuNjM0NTQxLDIyLjA2OTM0NCA2LjczMDAyOSwxNy4xNzMwOTUgQyA2Ljk2NzUwMjcsMTYuNzk3ODA3IDYuODU1NzA2NSwxNi4zMDEwNTIgNi40ODAzNDc5LDE2LjA2MzY3NSA2LjM2MTA2NDEsMTUuOTg4MzExIDYuMjI0MDQ0OCwxNS45NDU2NTkgNi4wODMwNTg3LDE1Ljk0MDAxMyBaIE0gMTMuNjkzNiwxNS4yODgyNzcgYyAtMC4wMjcxNywtMi4yMmUtNCAtMC4wNTQ0Miw5LjExZS00IC0wLjA4MjA1LDAuMDAzNSBsIC03LjMxNzI4NTcsMC42ODU4MzYgYyAwLjA2NTE1NywwLjAyMDcgMC4xMjc3OSwwLjA0OTE1IDAuMTg2MDgyNCwwLjA4NTk4IDAuMzc1MzU4NywwLjIzNzM3NyAwLjQ4NzE1NDgsMC43MzQxMzIgMC4yNDk2ODExLDEuMTA5NDI5IGwgLTAuMjU0MzkxNiwwLjQwMjc4NyA3LjI4NTg3ODgsLTAuNjgzMDg4IGMgMC40NDIwNzgsLTAuMDQxNDMgMC43NjY4ODIsLTAuNDMzMzcxIDAuNzI1NDg3LC0wLjg3NTQ1NCAtMC4wMzg4NCwtMC40MTQ0NDcgLTAuMzg1OTI3LC0wLjcyNTgyNCAtMC43OTM0MDMsLTAuNzI5MDE4IHogbSAzMC40ODAyNTEsMC45NDY5IGMgLTAuMDI0NjIsLTcuOWUtNSAtMC4wNDkwOCwwLjAwMTQgLTAuMDczMzgsMC4wMDM1IDAuMjQzMjk4LDAuMTQ0NTc5IDAuNDA5NzUzLDAuNDA0MTQxIDAuNDAwNDMxLDAuNzA3MDM0IC0wLjAxMzUyLDAuNDM3NzMyIC0wLjM3NTM1MywwLjc3OTg1OCAtMC44MTEwNjUsMC43NzYxMjkgbCA0LjYwMzc3NCw1LjY1NzQ2MiAwLjA1MjE5LC0wLjQwNDc1MSBjIDAuMDQ3NzEsLTAuMzcyMDMgMC4zNDYyODgsLTAuNjYxNjc1IDAuNzE5NTk4LC0wLjY5ODAwNSAwLjAzMDAxLC0wLjAwMjkgMC4wNjAyNCwtMC4wMDQgMC4wOTAyOSwtMC4wMDM1IDAuMDMwMDksNC4wMmUtNCAwLjA2MDAxLDAuMDAyNCAwLjA4OTksMC4wMDY0IDAuMTIxOTMsMC4wMTU2OCAwLjIyOTk2NiwwLjA2MjIzIDAuMzI3MDE1LDAuMTI0NDQ4IGwgLTQuNzc4MDk1LC01Ljg3MTgyMyBjIC0wLjEzNDUzMywtMC4xNjU0MTggLTAuMzI5MjY0LC0wLjI3MDYyMiAtMC41NDEzNiwtMC4yOTI0NzEgLTAuMDI2NTEsLTAuMDAyNyAtMC4wNTI4OCwtMC4wMDQyIC0wLjA3OTMsLTAuMDA0NCB6IE0gMTUuNzU4MjA4LDE5LjIyOTM5NSBWIDcuNDQ5OTkwNiBsIDMuNjY5OTYzLDQuOTEzMDE5NCAwLjc2OTUwOSwtMy4xOTY0MjI5IDAuOTQ3MDg5LDIuODQxMjYzOSAwLjc2OTUwOSwwLjY1MTEyMyAwLjg4Nzg5NCwwLjExODM4NiBoIDAuNDczNTQzIGwgLTEuMDY1NDcyLC0xLjMwMjI0NyAtMC4wNTkyLC0xLjA2NTQ3MyAxLjY1NzQwNiwtMy4yNTU2MTQ0IDcuODcyNjY0LC0yLjkwMDQ1NTUgMS43NzU3ODksMC4xMTgzODY5IDQuMzgwMjgxLDEuOTUzMzY4MSAwLjgyODcwMSwxLjEyNDY2NTUgMC42NTExMjQsMi45NTk2NDk0IC0wLjA1OTIsMC43Njk1MSAtMC44ODc4OTUsMS44OTQxNzQgLTQuMDg0MzEzLDEuOTUzMzY4IDQuNjc2MjQ1LC0wLjQxNDM1IDAuOTQ3MDg3LC0xLjA2NTQ3NSAwLjQ3MzU0MywtMC43Njk1MDcgMC41OTE5MjYsLTIuMDcxNzU0IEwgNDAuMjY0MDk5LDcuMjEzMjE5IDM4Ljc4NDI3NSw0LjkwNDY5MjQgMzQuMTA4MDI5LDIuNzE0NTUyOCAzMC45NzA4MDIsMi41MzY5NzM1IDIzLjU3MTY4MSw1LjMxOTA0MzIgMjEuNTU5MTE5LDcuOTgyNzI4MiAyMC4yNTY4NzMsNS42NzQyMDE2IDE5Ljc4MzMyOSw1LjczMzQwMDYgMTkuMDczMDE0LDkuNjk5MzMwMiAxNC41NzQzNDgsMy40ODQwNjc1IDE0LjEwMDgwNSwxMy4wNzMzMzEgMTEuOTEwNjY0LDExLjI5NzU0MiAxMS42MTQ3LDExLjUzNDMxNCBsIDAuOTQ3MDg3LDMuNzI5MTU2IDAuODI4NzAxLDEuNTk4MjEgelwiXG4gICAgaW5rc2NhcGU6bGFiZWw9XCJsaW5lQXJ0XCJcbiAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTAuNzQ3MTUyNCwtMC44NTM5MTY5NClcIiAvPlxuPC9nPlxuPC9zdmc+YDtcbmV4cG9ydCBkZWZhdWx0IG1pc3NDbG91ZFNWRztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1rSWNvbihjbGFzc05hbWUsIHN2Zykge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZS1wb3BcIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBpY29uLmlubmVySFRNTCA9IHN2ZztcbiAgcmV0dXJuIGljb247XG59XG4iLCJsZXQgc2hpcFNWRyA9IGA8c3ZnXG52ZXJzaW9uPVwiMS4xXCJcbmlkPVwic3ZnMVwiXG53aWR0aD1cIjIwMFwiXG5oZWlnaHQ9XCIyMDBcIlxudmlld0JveD1cIjAgMCAyMDAgMjAwXCJcbnNvZGlwb2RpOmRvY25hbWU9XCJib2F0LnN2Z1wiXG5pbmtzY2FwZTp2ZXJzaW9uPVwiMS4zICgwZTE1MGVkLCAyMDIzLTA3LTIxKVwiXG54bWxuczppbmtzY2FwZT1cImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcIlxueG1sbnM6c29kaXBvZGk9XCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFwiXG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbnhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48ZGVmc1xuICBpZD1cImRlZnMxXCI+XG4gPGxpbmVhckdyYWRpZW50XG4gICAgaWQ9XCJzd2F0Y2gxMlwiXG4gICAgaW5rc2NhcGU6c3dhdGNoPVwic29saWRcIj5cbiAgIDxzdG9wXG4gICAgICBzdHlsZT1cInN0b3AtY29sb3I6IzAwMDAwMDtzdG9wLW9wYWNpdHk6MTtcIlxuICAgICAgb2Zmc2V0PVwiMFwiXG4gICAgICBpZD1cInN0b3AxMlwiIC8+XG4gPC9saW5lYXJHcmFkaWVudD5cbjwvZGVmcz5cbjxzb2RpcG9kaTpuYW1lZHZpZXdcbiAgaWQ9XCJuYW1lZHZpZXcxXCJcbiAgcGFnZWNvbG9yPVwiI2ZmZmZmZlwiXG4gIGJvcmRlcmNvbG9yPVwiIzAwMDAwMFwiXG4gIGJvcmRlcm9wYWNpdHk9XCIwLjI1XCJcbiAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9XCIyXCJcbiAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9XCIwLjBcIlxuICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPVwiMFwiXG4gIGlua3NjYXBlOmRlc2tjb2xvcj1cIiNkMWQxZDFcIlxuICBpbmtzY2FwZTp6b29tPVwiMS42OTc4NDE3XCJcbiAgaW5rc2NhcGU6Y3g9XCIyMjAuNTc0MTZcIlxuICBpbmtzY2FwZTpjeT1cIjE3NC42MzM0OFwiXG4gIGlua3NjYXBlOndpbmRvdy13aWR0aD1cIjE3OTJcIlxuICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PVwiOTgyXCJcbiAgaW5rc2NhcGU6d2luZG93LXg9XCIxOTE5XCJcbiAgaW5rc2NhcGU6d2luZG93LXk9XCIyNVwiXG4gIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9XCIwXCJcbiAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj1cImxheWVyNlwiIC8+XG48Z1xuICBpbmtzY2FwZTpncm91cG1vZGU9XCJsYXllclwiXG4gIGlkPVwibGF5ZXI2XCJcbiAgaW5rc2NhcGU6bGFiZWw9XCJTaGlwXCJcbiAgc3R5bGU9XCJvcGFjaXR5OjFcIj5cbiA8cGF0aFxuICAgIGlkPVwicGF0aDJcIlxuICAgIHN0eWxlPVwib3BhY2l0eToxO3N0cm9rZS13aWR0aDo2LjY2MjE5O3N0cm9rZS1saW5lY2FwOnJvdW5kXCJcbiAgICBkPVwibSAxMzMuNDc2NTQsNDcuMzM0NTM5IC0yOC42MDUzMSwwLjAwMTEgLTcuODU3MDYsNi4wNDYzNTEgLTMuMTQ0MzAyLDYuOTUzODY2IC03Ljg1ODUzNywtMS4yMDgxMzEgLTE3LjY4MDYsMzMuODUwNDk1IC02MC41ODc4MjM4LC0xNC4xOTcwMTcgLTQuNzE1NzEyLDIuMTE1NjU2IDAuOTQzNDM3LDM5LjkxMjQ1MSAxMS45NDQ3OTg4LDI0LjE4OTY1IDkuMTE1OTYxLDkuOTc4NDggMjEuMzc0NzQ3LDEzLjAwMTY0IDExMy43ODg4MzEsLTIuNDE5MTIgMTMuNTE2MjEsLTAuMzAyMDMgMTAuMDU3OTIsLTguMTYzNDMgNS45NzMxNCwtMTUuNDIyMTYgNy4yMzA1NiwtMjEuNzcwNTQgLTcuNTY4MTMsLTIuMjU3NDYgMy44NjIyLC0xMC4wMTk2IC0xNS4xNDUxMiwtNS4wMjUzOCAtMy44OTYxLDEwLjUxNzMgLTYuMTk3MjEsLTEuODQ5MDcgLTQuMzc2NjYsLTMyLjQ4NjM4NyAtMTguMjMwNDUsLTcuMjU3MzYzIC0xNi4wMzEwNSwtMTEuNzkyMDg2IHogbSAtNDEuNjExNDc2LDIyLjE0NzczNiAyMi45NDYxNTYsNC41MzQ3NjYgMC45NDM0NSwyNy4yMTQyNTkgLTM2LjE0ODM4NiwtNi4zNDk4MDkgeiBtIDMxLjExODY4Niw4Ljc2ODkwNiAxOC41NDU5MSw4LjE2MzQ0IDIuMjAwODYsMTMuNjA3MTE5IC0xOS44MDMzNCwxLjgxMzYzIHogTSAxNC43MzE3MTIsOTEuMDI1OTU1IEMgNzYuNjU4MjY5LDExMC4xMzM1OSAxMzAuMDY3LDExNy40NjcwNCAxODMuMDYwMDYsMTI3LjgyODcyIGwgLTEuMjMwOSwzLjc2MTk2IEMgMTI4Ljk0NDg5LDEyMS4yNTAyNyA3Ny4xMTQ5MzgsMTE0LjE5ODk2IDE0Ljk1ODcyNyw5NS4wMjA0NTUgWiBtIDAuNjE3NjU3LDguNzkxNTk3IEMgNzYuMTE5NTIxLDExOC45MjUxOCAxMjguNTI5OTQsMTI2LjI1ODYzIDE4MC41MzM0MSwxMzYuNjIwMzIgbCAtMS4yMDg3OCwzLjc2MDU0IEMgMTI3LjQyNzkxLDEzMC4wNDA0NCA3Ni41Njc0OCwxMjIuOTkwNTYgMTUuNTcxOTYxLDEwMy44MTIwNiBaXCIgLz5cbjwvZz5cbjwvc3ZnPmA7XG5leHBvcnQgZGVmYXVsdCBzaGlwU1ZHO1xuIiwiaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmFwcCgpO1xuIiwiaW1wb3J0IEJvYXJkQ29udGFpbmVyIGZyb20gXCIuL0JvYXJkQ29udGFpbmVyXCI7XG5pbXBvcnQgbWtEZWZlYXRTY3JlZW4gZnJvbSBcIi4vbWtEZWZlYXRTY3JlZW5cIjtcbmltcG9ydCBta1ZpY3RvcnlTY3JlZW4gZnJvbSBcIi4vbWtWaWN0b3J5U2NyZWVuXCI7XG5pbXBvcnQgbWtTVkdUZXh0IGZyb20gXCIuL3N2Z1RleHQvbWtTVkdUZXh0XCI7XG5pbXBvcnQgdG9nZ2xlU3dpdGNoIGZyb20gXCIuL3RvZ2dsZVN3aXRjaFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFN0YXRpY0RPTSgpIHtcbiAgY29uc3QgYXBwQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcHBCRy5pZCA9IFwiYXBwLWJnXCI7XG5cbiAgY29uc3Qgc3ZnSGVhZGVyID0gbWtTVkdUZXh0KFwiQmF0dGxlU2hpcFwiKTtcbiAgc3ZnSGVhZGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMC44cmVtXCI7XG4gIGFwcEJHLmFwcGVuZChzdmdIZWFkZXIpO1xuXG4gIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdHYW1lQnRuLmlubmVySFRNTCA9IFwiTmV3IEdhbWVcIjtcbiAgbmV3R2FtZUJ0bi5pZCA9IFwibmV3LWdhbWUtYnRuXCI7XG5cbiAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJidG4tZGl2XCIpO1xuICBjb25zdCB0b2dnbGUgPSB0b2dnbGVTd2l0Y2goXCJhaS10b2dnbGVcIik7XG5cbiAgY29uc3QgYWlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhaUxhYmVsLmlkID0gXCJhaS1sYWJlbFwiO1xuICBhaUxhYmVsLmlubmVySFRNTCA9IFwiUDIgQ1BVXCI7XG5cbiAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1Yi5pbm5lckhUTUwgPSBcIkdpdEh1YlwiO1xuICBnaXRodWIuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1RDZG90bWFrZS9iYXR0bGUtc2hpcC90cmVlL21haW5cIjtcbiAgZ2l0aHViLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGJ0bkRpdi5hcHBlbmQobmV3R2FtZUJ0biwgdG9nZ2xlLCBhaUxhYmVsLCBnaXRodWIpO1xuXG4gIGNvbnN0IHAxRGl2ID0gbWtQbGF5ZXJEaXYoXCJwMVwiKTtcbiAgY29uc3QgcDJEaXYgPSBta1BsYXllckRpdihcInAyXCIpO1xuICBwMkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGFwcEJHLmFwcGVuZChidG5EaXYsIHAxRGl2LCBwMkRpdik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGFwcEJHKTtcbn1cbmZ1bmN0aW9uIG1rUGxheWVyRGl2KG5hbWUpIHtcbiAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyRGl2LmlkID0gYCR7bmFtZX0tZGl2YDtcbiAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGl2XCIpO1xuICBjb25zdCBwbGF5ZXJFbmVteSA9IEJvYXJkQ29udGFpbmVyKGAke25hbWV9LWVuZW15YCk7XG4gIGNvbnN0IHBsYXllclNlbGYgPSBCb2FyZENvbnRhaW5lcihgJHtuYW1lfS1zZWxmYCk7XG4gIGNvbnN0IHBsYXllckRlZmVhdCA9IG1rRGVmZWF0U2NyZWVuKCk7XG4gIHBsYXllckRlZmVhdC5pZCA9IGAke25hbWV9LWRlZmVhdGA7XG4gIGNvbnN0IHBsYXllclZpY3RvcnkgPSBta1ZpY3RvcnlTY3JlZW4oKTtcbiAgcGxheWVyVmljdG9yeS5pZCA9IGAke25hbWV9LXZpY3RvcnlgO1xuICBwbGF5ZXJFbmVteS5hcHBlbmQocGxheWVyRGVmZWF0KTtcbiAgcGxheWVyU2VsZi5hcHBlbmQocGxheWVyVmljdG9yeSk7XG4gIHBsYXllckRpdi5hcHBlbmQocGxheWVyRW5lbXksIHBsYXllclNlbGYpO1xuICByZXR1cm4gcGxheWVyRGl2O1xufVxuIiwiaW1wb3J0IG1rU1ZHVGV4dCBmcm9tIFwiLi9zdmdUZXh0L21rU1ZHVGV4dFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWtEZWZlYXRTY3JlZW4oKSB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNjcmVlbi5jbGFzc0xpc3QuYWRkKFwid2luLXNjcmVlblwiKTtcbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1zZy5jbGFzc0xpc3QuYWRkKFwid2luLW1zZ1wiKTtcbiAgbXNnLmFwcGVuZChta1NWR1RleHQoXCJEZWZlYXQhXCIpKTtcbiAgc2NyZWVuLmFwcGVuZChtc2cpO1xuICByZXR1cm4gc2NyZWVuO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWtHYW1lKCkge1xuICBsZXQgZ2FtZU9iaiA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHRvZ2dsZVAyQUkoKSB7XG4gICAgICB0aGlzLnAyLkFJID0gIXRoaXMucDIuQUk7XG4gICAgfSxcbiAgICBzZXRQMkFJKHZhbCkge1xuICAgICAgdGhpcy5wMi5BSSA9IHZhbDtcbiAgICB9LFxuICAgIHRvZ2dsZVBsYXllcigpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucDEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wMjtcbiAgICAgIH0gZWxzZSB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnAxO1xuICAgIH0sXG4gIH07XG4gIGdhbWVPYmoucDEgPSBQbGF5ZXIoXCJwMVwiKTtcbiAgZ2FtZU9iai5wMiA9IFBsYXllcihcInAyXCIpO1xuICBnYW1lT2JqLnAxLnNldE9wcG9uZW50KGdhbWVPYmoucDIpO1xuICBnYW1lT2JqLnAyLnNldE9wcG9uZW50KGdhbWVPYmoucDEpO1xuICBnYW1lT2JqLmN1cnJlbnRQbGF5ZXIgPSBnYW1lT2JqLnAxO1xuICByZXR1cm4gZ2FtZU9iajtcbn1cbiIsImltcG9ydCBta1NWR1RleHQgZnJvbSBcIi4vc3ZnVGV4dC9ta1NWR1RleHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1rVmljdG9yeVNjcmVlbigpIHtcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJ3aW4tc2NyZWVuXCIpO1xuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbXNnLmNsYXNzTGlzdC5hZGQoXCJ3aW4tbXNnXCIpO1xuICBtc2cuYXBwZW5kKG1rU1ZHVGV4dChcIlZpY3RvcnkhXCIpKTtcbiAgc2NyZWVuLmFwcGVuZChtc2cpO1xuICByZXR1cm4gc2NyZWVuO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWtNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxCRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQkcuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbEJHLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxCRy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuICByZXR1cm4gbW9kYWxCRztcbn1cbiIsImltcG9ydCBta01vZGFsIGZyb20gXCIuL21rTW9kYWxcIjtcblxuY29uc3Qgc3dpdGNoTW9kYWwgPSBta01vZGFsKCk7XG5zd2l0Y2hNb2RhbC5pZCA9IFwic3dpdGNoLW1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHN3aXRjaE1vZGFsO1xuIiwiLy90YWtlcyBpbiBhIHBsYXllciBhbmQgcGxhY2Ugc2hpcHMgcmFuZG9tbHkgb24gaXQncyBib2FyZFxuXG5jb25zdCBzaGlwbGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbmZ1bmN0aW9uIHJhbmRQb3MoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZVJhbmRTaGlwcyhwbGF5ZXIpIHtcbiAgZm9yIChsZXQgbiBvZiBzaGlwbGVuZ3Rocykge1xuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICBkb25lID0gcGxheWVyLnBsYWNlU2hpcChyYW5kUG9zKCksIHJhbmRQb3MoKSwgbiwgcmFuZFBvcygpID4gNSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBta1NWR1RleHQodGV4dCkge1xuICBsZXQgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHREaXYuc3R5bGUud2lkdGggPSBcIjIwcmVtXCI7XG4gIHRleHREaXYuc3R5bGUuaGVpZ2h0ID0gXCI1LjdyZW1cIjtcbiAgdGV4dERpdi5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG48ZmlsdGVyIGlkPVwiYmV2ZWxcIj5cbiAgPCEtLSBjb2xvciBmb3Igc3Ryb2tlIGFuZCBiZXZlbCAtLT5cbiAgPGZlRmxvb2QgcmVzdWx0PVwiU1RST0tFLWNvbG9yXCIgY2xhc3M9XCJzdHJva2UtY29sb3JcIj48L2ZlRmxvb2Q+XG4gIDxmZUZsb29kIHJlc3VsdD1cIkJFVkVMLWNvbG9yXCIgY2xhc3M9XCJiZXZlbC1jb2xvclwiPjwvZmVGbG9vZD5cbiAgPCEtLSBzdHJva2UgLS0+XG4gIDxmZU1vcnBob2xvZ3lcbiAgICBpbj1cIlNvdXJjZUFscGhhXCJcbiAgICBvcGVyYXRvcj1cImRpbGF0ZVwiXG4gICAgcmFkaXVzPVwiM1wiXG4gICAgcmVzdWx0PVwiU1RST0tFXzFcIlxuICA+PC9mZU1vcnBob2xvZ3k+XG4gIDwhLS0gYmV2ZWwgLS0+XG4gIDxmZUNvbnZvbHZlTWF0cml4XG4gICAgb3JkZXI9XCI0LDRcIlxuICAgIGtlcm5lbE1hdHJpeD1cIjEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDFcIlxuICAgIGluPVwiU1RST0tFXzFcIlxuICAgIHJlc3VsdD1cIkJFVkVMXzFcIlxuICAgIGRpdmlzb3I9XCIxXCJcbiAgPjwvZmVDb252b2x2ZU1hdHJpeD5cbiAgPGZlT2Zmc2V0IGR4PVwiNFwiIGR5PVwiNFwiIGluPVwiQkVWRUxfMVwiIHJlc3VsdD1cIkJFVkVMXzJcIj48L2ZlT2Zmc2V0PlxuICA8IS0tIGFwcGx5IGNvbG9yIC0tPlxuICA8ZmVDb21wb3NpdGVcbiAgICBpbj1cIlNUUk9LRS1jb2xvclwiXG4gICAgaW4yPVwiU1RST0tFXzFcIlxuICAgIG9wZXJhdG9yPVwiaW5cIlxuICAgIHJlc3VsdD1cIlNUUk9LRV8yXCJcbiAgPjwvZmVDb21wb3NpdGU+XG4gIDxmZUNvbXBvc2l0ZVxuICAgIGluPVwiQkVWRUwtY29sb3JcIlxuICAgIGluMj1cIkJFVkVMXzJcIlxuICAgIG9wZXJhdG9yPVwiaW5cIlxuICAgIHJlc3VsdD1cIkJFVkVMXzNcIlxuICA+PC9mZUNvbXBvc2l0ZT5cbiAgPCEtLSBjb21iaW5lIC0tPlxuICA8ZmVNZXJnZSByZXN1bHQ9XCJmaW5hbFwiPlxuICAgIDxmZU1lcmdlTm9kZSBpbj1cIkJFVkVMXzNcIj48L2ZlTWVyZ2VOb2RlPlxuICAgIDxmZU1lcmdlTm9kZSBpbj1cIlNUUk9LRV8yXCI+PC9mZU1lcmdlTm9kZT5cbiAgICA8ZmVNZXJnZU5vZGUgaW49XCJTb3VyY2VHcmFwaGljXCI+PC9mZU1lcmdlTm9kZT5cbiAgPC9mZU1lcmdlPlxuPC9maWx0ZXI+XG5cbjx0ZXh0XG54PVwiNDglXCJcbnk9XCI1NSVcIlxuICBjbGFzcz1cInRleHQtY29sb3Igc3ZnLXRleHRcIlxuPlxuICAke3RleHR9XG48L3RleHQ+XG48L3N2Zz5cbmA7XG4gIHJldHVybiB0ZXh0RGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlU3dpdGNoKGlkKSB7XG4gIGNvbnN0IHRvZ2dsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZ2dsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLWRpdlwiKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGlucHV0LmlkID0gaWQ7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5odG1sRm9yID0gaWQ7XG4gIHRvZ2dsZURpdi5hcHBlbmQoaW5wdXQsIGxhYmVsKTtcbiAgcmV0dXJuIHRvZ2dsZURpdjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==