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
`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,yDAAkE;EAClE,yBAAyB;;EAEzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB;IACE,UAAU;IACV,yBAAyB;IACzB,eAAe;EACjB;EACA;;IAEE,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;EACrB;AACF;;AAEA;EACE,WAAW;EACX,sBAAsB;;EAEtB,cAAc;EACd,sBAAsB;EACtB,mBAAmB;;EAEnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,4BAA4B;AAC9B","sourcesContent":["#app-bg {\n  position: relative;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-image: url(\"./img/battleShipPattern_200px_light65.png\");\n  background-repeat: repeat;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.2rem;\n}\n\n.btn-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: -0.5rem;\n  > * {\n    flex: none;\n    font-family: \"Lilita One\";\n    font-size: 1rem;\n  }\n  > button,\n  a {\n    padding: 0.2rem 0.5rem;\n    color: var(--blue);\n    background-color: white;\n    border: 2px solid var(--blue);\n    border-radius: 10px;\n    margin-left: 0.7rem;\n  }\n}\n\n#ai-label {\n  color: gray;\n  border: 2px solid gray;\n\n  margin-left: 0;\n  padding: 0.2rem 0.5rem;\n  border-radius: 10px;\n\n  background-color: white;\n}\n\n#ai-label.on {\n  color: var(--red);\n  border: 2px solid var(--red);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQixlQUFlLG1EQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjRDO0FBQzdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhEQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUGdDOztBQUVoQyxvQkFBb0Isb0RBQU87QUFDM0I7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2FuaW1hdGUtcG9wLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2NvbG9yLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9mb250cy9saWxpdGFvbmUvbGlsaXRhb25lLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lRW5kLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pY29uL2ljb24uY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9wbGF5ZXJEaXYuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3Jlc2V0U3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdmdUZXh0L3N2Z1RleHQuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3RvZ2dsZVN3aXRjaC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvQm9hcmRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL05ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2Rpc3BsYXlTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9pY29uL2Jvb21TVkcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaWNvbi9taXNzQ2xvdWRTVkcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaWNvbi9ta0ljb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaWNvbi9zaGlwU1ZHLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL2luaXRTdGF0aWNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbWtEZWZlYXRTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvbWtHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21rVmljdG9yeVNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9tb2RhbC9ta01vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL21vZGFsL3N3aXRjaFBsYXllck1vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3BsYWNlUmFuZFNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3N2Z1RleHQvbWtTVkdUZXh0LmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3RvZ2dsZVN3aXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFuaW1hdGUtcG9wIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1wb3A7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI2LCAwLjUzLCAwLjc0LCAxLjQ4KTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlLXBvcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG59XG5cbi5hbmltYXRlLXBvcC1sb29wIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1wb3AtbG9vcDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZS1wb3AtbG9vcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hbmltYXRlLXBvcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFVBQVU7SUFDViwwQkFBMEI7RUFDNUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYW5pbWF0ZS1wb3Age1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGUtcG9wO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjYsIDAuNTMsIDAuNzQsIDEuNDgpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtcG9wIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGUtcG9wLWxvb3Age1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGUtcG9wLWxvb3A7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlLXBvcC1sb29wIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JhdHRsZVNoaXBQYXR0ZXJuXzIwMHB4X2xpZ2h0NjUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjYXBwLWJnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLmJ0bi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAtMC41cmVtO1xuICA+ICoge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlsaXRhIE9uZVwiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICA+IGJ1dHRvbixcbiAgYSB7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xuICB9XG59XG5cbiNhaS1sYWJlbCB7XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuXG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jYWktbGFiZWwub24ge1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5REFBa0U7RUFDbEUseUJBQXlCOztFQUV6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkI7SUFDRSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjs7RUFFdEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixtQkFBbUI7O0VBRW5CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2FwcC1iZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1nL2JhdHRsZVNoaXBQYXR0ZXJuXzIwMHB4X2xpZ2h0NjUucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLmJ0bi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAtMC41cmVtO1xcbiAgPiAqIHtcXG4gICAgZmxleDogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMaWxpdGEgT25lXFxcIjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgPiBidXR0b24sXFxuICBhIHtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICB9XFxufVxcblxcbiNhaS1sYWJlbCB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuXFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNhaS1sYWJlbC5vbiB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJlZCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWJsdWU6ICMwMDg4YWE7XG4gIC0tcmVkOiAjZDQ0ODQ4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29sb3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ibHVlOiAjMDA4OGFhO1xcbiAgLS1yZWQ6ICNkNDQ4NDg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9saWxpdGEtb25lLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBsaWxpdGEtb25lLXJlZ3VsYXIgLSBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xuICBmb250LWZhbWlseTogXCJMaWxpdGEgT25lXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZjJcIik7IC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZvbnRzL2xpbGl0YW9uZS9saWxpdGFvbmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtCQUErQjtBQUMvQjtFQUNFLGtCQUFrQixFQUFFLHNHQUFzRztFQUMxSCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0REFBZ0UsRUFBRSw0REFBNEQ7QUFDaElcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogbGlsaXRhLW9uZS1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMaWxpdGEgT25lXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiLi9saWxpdGEtb25lLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOyAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmF0dGxlU2hpcFBhdHRlcm5fMjAwcHhfZGFyazUwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndpbi1zY3JlZW4ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2FtZUVuZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5REFBaUU7RUFDakUseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aW4tc2NyZWVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA5OTg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1nL2JhdHRsZVNoaXBQYXR0ZXJuXzIwMHB4X2Rhcms1MC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmljb24ge1xuICA+IHN2ZyB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICB9XG59XG5cbi5wMS1pY29uIHtcbiAgPiBzdmcge1xuICAgID4gZyB7XG4gICAgICA+IHBhdGgge1xuICAgICAgICBmaWxsOiB2YXIoLS1ibHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnAyLWljb24ge1xuICA+IHN2ZyB7XG4gICAgPiBnIHtcbiAgICAgID4gcGF0aCB7XG4gICAgICAgIGZpbGw6IHZhcigtLXJlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5naXRodWItaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IHN2ZyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgPiBwYXRoIHtcbiAgICAgIGZpbGw6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaWNvbi9pY29uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRTtNQUNFO1FBQ0UsaUJBQWlCO01BQ25CO0lBQ0Y7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRTtNQUNFO1FBQ0UsZ0JBQWdCO01BQ2xCO0lBQ0Y7RUFDRjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQztNQUNFLFdBQVc7SUFDYjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb24ge1xcbiAgPiBzdmcge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgfVxcbn1cXG5cXG4ucDEtaWNvbiB7XFxuICA+IHN2ZyB7XFxuICAgID4gZyB7XFxuICAgICAgPiBwYXRoIHtcXG4gICAgICAgIGZpbGw6IHZhcigtLWJsdWUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucDItaWNvbiB7XFxuICA+IHN2ZyB7XFxuICAgID4gZyB7XFxuICAgICAgPiBwYXRoIHtcXG4gICAgICAgIGZpbGw6IHZhcigtLXJlZCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5naXRodWItaWNvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gID4gc3ZnIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICA+IHBhdGgge1xcbiAgICAgIGZpbGw6IGJsYWNrO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JhdHRsZVNoaXBQYXR0ZXJuXzIwMHB4X2Rhcms1MC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5REFBa0U7RUFDbEUseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy9iYXR0bGVTaGlwUGF0dGVybl8yMDBweF9kYXJrNTAucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucGxheWVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbiNwMS1kaXYge1xuICA+IC5ib2FyZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgfVxufVxuI3AyLWRpdiB7XG4gID4gLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB2YXIoLS1yZWQpO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1yZWQpO1xuICB9XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgd2lkdGg6IDIycmVtO1xuICBoZWlnaHQ6IDIycmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZW1wdHkge1xuICBncmlkLWFyZWE6IDE7XG59XG5cbi54bGFiZWwge1xuICBncmlkLWFyZWE6IDEvMi8yLzEyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi55bGFiZWwge1xuICBncmlkLWFyZWE6IDIvMS8xMi8yO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnhsYWJlbCxcbi55bGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkxpbGl0YSBPbmVcIjtcbn1cblxuLmNlbGwtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAyLzIvMTIvMTI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmNlbGwtY29udGFpbmVyIHtcbiAgZ2FwOiAxcHg7XG4gID4gKiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmxhYmVsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2VsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BsYXllckRpdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsb0NBQW9DO0VBQ3RDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxtQ0FBbUM7RUFDckM7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsUUFBUTtFQUNSLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFFBQVE7RUFDUjtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGxheWVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4jcDEtZGl2IHtcXG4gID4gLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgfVxcbn1cXG4jcDItZGl2IHtcXG4gID4gLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLXJlZCk7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgfVxcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHdpZHRoOiAyMnJlbTtcXG4gIGhlaWdodDogMjJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGdyaWQtYXJlYTogMTtcXG59XFxuXFxuLnhsYWJlbCB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzEyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi55bGFiZWwge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMTIvMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnhsYWJlbCxcXG4ueWxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlsaXRhIE9uZVxcXCI7XFxufVxcblxcbi5jZWxsLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIvMi8xMi8xMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY2VsbC1jb250YWluZXIge1xcbiAgZ2FwOiAxcHg7XFxuICA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmxhYmVsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxub2wsXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXRTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7Ozs7O0VBVUUsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldFN0eWxlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbnRzL2xpbGl0YW9uZS9saWxpdGFvbmUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxheWVyRGl2LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb24vaWNvbi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC9tb2RhbC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZUVuZC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdmdUZXh0L3N2Z1RleHQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF84X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29sb3IuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF85X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9nZ2xlU3dpdGNoLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRlLXBvcC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF84X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF85X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qcmVzZXQgc3R5bGUqL1xuXG4vKmJvbGQgZm9udCovXG5cbi8qQm9hcmQgQ29udGFpbmVyKi9cblxuLyppY29uKi9cblxuLyptb2RhbCovXG5cbi8qYXBwLCBnZW5lcmFsIGFwcGVyYW5jZSovXG5cbi8qZW5kIGdhbWUgbXNnKi9cblxuLypzdmcgZm9udCovXG5cbi8qY29sb3IgdmFyaWFibGVzKi9cblxuLyp0b2dnbGVTd2l0Y2gqL1xuXG4vKnBvcCBhbmltYXRpb24qL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7O0FBR2QsWUFBWTs7QUFHWixrQkFBa0I7O0FBR2xCLE9BQU87O0FBR1AsUUFBUTs7QUFHUix5QkFBeUI7O0FBR3pCLGVBQWU7O0FBR2YsV0FBVzs7QUFHWCxrQkFBa0I7O0FBR2xCLGVBQWU7O0FBR2YsZ0JBQWdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qcmVzZXQgc3R5bGUqL1xcbkBpbXBvcnQgXFxcIi4vcmVzZXRTdHlsZS5jc3NcXFwiO1xcblxcbi8qYm9sZCBmb250Ki9cXG5AaW1wb3J0IFxcXCIuL2ZvbnRzL2xpbGl0YW9uZS9saWxpdGFvbmUuY3NzXFxcIjtcXG5cXG4vKkJvYXJkIENvbnRhaW5lciovXFxuQGltcG9ydCBcXFwiLi9wbGF5ZXJEaXYuY3NzXFxcIjtcXG5cXG4vKmljb24qL1xcbkBpbXBvcnQgXFxcIi4vaWNvbi9pY29uLmNzc1xcXCI7XFxuXFxuLyptb2RhbCovXFxuQGltcG9ydCBcXFwiLi9tb2RhbC8vbW9kYWwuY3NzXFxcIjtcXG5cXG4vKmFwcCwgZ2VuZXJhbCBhcHBlcmFuY2UqL1xcbkBpbXBvcnQgXFxcIi4vYXBwLmNzc1xcXCI7XFxuXFxuLyplbmQgZ2FtZSBtc2cqL1xcbkBpbXBvcnQgXFxcIi4vZ2FtZUVuZC5jc3NcXFwiO1xcblxcbi8qc3ZnIGZvbnQqL1xcbkBpbXBvcnQgXFxcIi4vc3ZnVGV4dC9zdmdUZXh0LmNzc1xcXCI7XFxuXFxuLypjb2xvciB2YXJpYWJsZXMqL1xcbkBpbXBvcnQgXFxcIi4vY29sb3IuY3NzXFxcIjtcXG5cXG4vKnRvZ2dsZVN3aXRjaCovXFxuQGltcG9ydCBcXFwiLi90b2dnbGVTd2l0Y2guY3NzXFxcIjtcXG5cXG4vKnBvcCBhbmltYXRpb24qL1xcbkBpbXBvcnQgXFxcIi4vYW5pbWF0ZS1wb3AuY3NzXFxcIjtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zdHJva2UtY29sb3Ige1xuICBmbG9vZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJldmVsLWNvbG9yIHtcbiAgZmxvb2QtY29sb3I6IHZhcigtLXJlZCk7XG59XG5cbi50ZXh0LWNvbG9yIHtcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XG59XG5cbi5zdmctdGV4dCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgZm9udC1mYW1pbHk6IFwiTGlsaXRhIE9uZVwiO1xuICBmb250LXNpemU6IDRyZW07XG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIGRvbWluYW50LWJhc2VsaW5lOiBtaWRkbGU7XG4gIGZpbHRlcjogdXJsKCNiZXZlbCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdmdUZXh0L3N2Z1RleHQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN0cm9rZS1jb2xvciB7XFxuICBmbG9vZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJldmVsLWNvbG9yIHtcXG4gIGZsb29kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udGV4dC1jb2xvciB7XFxuICBmaWxsOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnN2Zy10ZXh0IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlsaXRhIE9uZVxcXCI7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZG9taW5hbnQtYmFzZWxpbmU6IG1pZGRsZTtcXG4gIGZpbHRlcjogdXJsKCNiZXZlbCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRvZ2dsZS1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICA+IGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgPiBsYWJlbDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgPiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gIH1cbiAgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZ2dsZVN3aXRjaC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDRCQUE0QjtFQUM5QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2dnbGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbiAgPiBsYWJlbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYmFja2dyb3VuZDogZ3JleTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gID4gbGFiZWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gIH1cXG4gID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gIH1cXG4gID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDRweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRDb250YWluZXIobmFtZSkge1xuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW1wdHkuY2xhc3NMaXN0LmFkZChcImVtcHR5XCIpO1xuICBjb25zdCB4bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB4bGFiZWwuY2xhc3NMaXN0LmFkZChcInhsYWJlbFwiKTtcbiAgY29uc3QgeWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgeWxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ5bGFiZWxcIik7XG4gIGNvbnN0IGNlbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjZWxsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWNvbnRhaW5lclwiKTtcbiAgY2VsbENvbnRhaW5lci5pZCA9IG5hbWU7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZChlbXB0eSwgeGxhYmVsLCB5bGFiZWwsIGNlbGxDb250YWluZXIpO1xuICB4bGFiZWwuYXBwZW5kKC4uLnhMYWJlbEFycigpKTtcbiAgeWxhYmVsLmFwcGVuZCguLi55TGFiZWxBcnIoKSk7XG4gIGNlbGxDb250YWluZXIuYXBwZW5kKC4uLmNlbGxBcnIoKSk7XG4gIHJldHVybiBib2FyZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY2VsbEFycihzaXplID0gMTApIHtcbiAgY29uc3QgbGVuZ3RoID0gc2l6ZSAqIHNpemU7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICBjZWxsLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIGNlbGwuZGF0YXNldC54ID0gaSAlIHNpemU7XG4gICAgY2VsbC5kYXRhc2V0LnkgPSBNYXRoLmZsb29yKGkgLyBzaXplKTtcbiAgICBhcnIucHVzaChjZWxsKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiB4TGFiZWxBcnIoKSB7XG4gIGxldCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImxhYmVsLWNvbnRhaW5lclwiKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBpICsgMTtcbiAgICBpdGVtLmFwcGVuZChsYWJlbCk7XG4gICAgYXJyLnB1c2goaXRlbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24geUxhYmVsQXJyKCkge1xuICBsZXQgYXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJsYWJlbC1jb250YWluZXJcIik7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpO1xuICAgIGl0ZW0uYXBwZW5kKGxhYmVsKTtcbiAgICBhcnIucHVzaChpdGVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKHNpemUgPSAxMCkge1xuICBpZiAoc2l6ZSA+PSAwKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gc2l6ZSAqIHNpemU7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgfVxuICAgIGNvbnN0IGdhbWVCb2FyZE9iaiA9IHtcbiAgICAgIHNpemUsXG4gICAgICBzaGlwczogW10sXG4gICAgICBib2FyZDogWy4uLmFycl0sXG4gICAgICByZXNldEJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gWy4uLmFycl07XG4gICAgICB9LFxuICAgICAgaW5Cb3VuZCh4LCB5KSB7XG4gICAgICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuc2l6ZSAmJiB5ID49IDAgJiYgeSA8IHRoaXMuc2l6ZTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEluZGV4KHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5Cb3VuZCh4LCB5KSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnNpemUgKiB5KSArIHBhcnNlSW50KHgpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0sXG5cbiAgICAgIHNldFRva2VuKHgsIHksIHRva2VuKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleCh4LCB5KTtcbiAgICAgICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdID0gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZXRUb2tlbih4LCB5KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleCh4LCB5KTtcbiAgICAgICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlzRW1wdHkoeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUb2tlbih4LCB5KSA9PT0gbnVsbDtcbiAgICAgIH0sXG4gICAgICBhbGxvY2F0ZVNwYWNlKHgsIHksIHNoaXBMZW5ndGgsIHZlcnRpY2FsID0gdHJ1ZSkge1xuICAgICAgICBsZXQgaW5kZXhBcnIgPSBbXTtcbiAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluQm91bmQoeCwgeSArIGkpICYmIHRoaXMuaXNFbXB0eSh4LCB5ICsgaSkpIHtcbiAgICAgICAgICAgICAgaW5kZXhBcnIucHVzaCh0aGlzLmdldEluZGV4KHgsIHkgKyBpKSk7XG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluQm91bmQoeCArIGksIHkpICYmIHRoaXMuaXNFbXB0eSh4ICsgaSwgeSkpIHtcbiAgICAgICAgICAgICAgaW5kZXhBcnIucHVzaCh0aGlzLmdldEluZGV4KHggKyBpLCB5KSk7XG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4QXJyO1xuICAgICAgfSxcbiAgICAgIHBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuZ3RoLCB2ZXJ0aWNhbCA9IHRydWUpIHtcbiAgICAgICAgbGV0IGluZEFyciA9IHRoaXMuYWxsb2NhdGVTcGFjZSh4LCB5LCBzaGlwTGVuZ3RoLCB2ZXJ0aWNhbCk7XG4gICAgICAgIGlmIChpbmRBcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHNoaXBJbmRleCA9IHRoaXMuc2hpcHMubGVuZ3RoO1xuICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChTaGlwKHNoaXBMZW5ndGgpKTtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBvZiBpbmRBcnIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdID0gc2hpcEluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB2YWxpZEF0dGFjayh4LCB5KSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oeCwgeSk7XG4gICAgICAgIHJldHVybiB0b2tlbiAhPSBcIm1pc3NlZFwiICYmIHRva2VuICE9IFwiaGl0XCI7XG4gICAgICB9LFxuICAgICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaW5Cb3VuZCh4LCB5KSkge1xuICAgICAgICAgIGlmICh0aGlzLnZhbGlkQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0VG9rZW4oeCwgeSk7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4oeCwgeSwgXCJtaXNzZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKHgsIHksIFwiaGl0XCIpO1xuICAgICAgICAgICAgICB0aGlzLnNoaXBzW2luZGV4XS5oaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sXG4gICAgICBpc0RlZmVhdGVkKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGdhbWVCb2FyZE9iajtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBkaXNwbGF5U2hpcHMgZnJvbSBcIi4vZGlzcGxheVNoaXBzXCI7XG5pbXBvcnQgcGxhY2VSYW5kU2hpcHMgZnJvbSBcIi4vcGxhY2VSYW5kU2hpcHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3R2FtZShnYW1lT2JqKSB7XG4gIC8vbmV3Z2FtZSByb3V0aW5lIGZvciBkYXRhXG4gIC8vcmVzZXQgYm9hcmQgZGF0YSBmb3IgYm90aCBwbGF5ZXJzXG4gIGdhbWVPYmoucDEucmVzZXRCb2FyZCgpO1xuICBnYW1lT2JqLnAyLnJlc2V0Qm9hcmQoKTtcbiAgLy9yYW5kb21seSBzZXQgc2hpcHMgb24gYm90aCBib2FyZHNcbiAgcGxhY2VSYW5kU2hpcHMoZ2FtZU9iai5wMSk7XG4gIHBsYWNlUmFuZFNoaXBzKGdhbWVPYmoucDIpO1xuICAvL3NldCBjdXJyZW50UGxheWVyIHRvIHAxXG4gIGdhbWVPYmouY3VycmVudFBsYXllciA9IGdhbWVPYmoucDE7XG4gIC8vIHNldCBnYW1lIHRvIGFjdGl2ZVxuICBnYW1lT2JqLmFjdGl2ZSA9IHRydWU7XG5cbiAgLy9uZXdnYW1lIHJvdXRpbmUgZm9yIHZpc3VhbFxuICAvL2VtcHR5IGFsbCBjZWxsc1xuICBjb25zdCBjZWxsc0FyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcbiAgZm9yIChsZXQgY2VsbCBvZiBjZWxsc0Fycikge1xuICAgIGNlbGwuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuICAvL3BvcHVsYXRlIGJvYXJkIHdpdGggc2hpcHNcbiAgZGlzcGxheVNoaXBzKFwicDEtc2VsZlwiLCBnYW1lT2JqLnAxKTtcbiAgZGlzcGxheVNoaXBzKFwicDItc2VsZlwiLCBnYW1lT2JqLnAyKTtcbiAgLy9nZXQgcmlkIG9mIHdpbiBzY3JlZW5zXG4gIGNvbnN0IHNjcmVlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndpbi1zY3JlZW5cIik7XG4gIGZvciAobGV0IGl0ZW0gb2Ygc2NyZWVucykge1xuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZFwiO1xuZnVuY3Rpb24gcmFuZEluZGV4KGxlbmd0aCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGxldCBwbGF5ZXJPYmogPSB7XG4gICAgLi4uR2FtZUJvYXJkKCksXG4gICAgbmFtZSxcbiAgICBBSTogZmFsc2UsXG4gICAgb3Bwb25lbnQ6IHVuZGVmaW5lZCxcbiAgICBzZXRPcHBvbmVudChhbm90aGVyUGxheWVyKSB7XG4gICAgICB0aGlzLm9wcG9uZW50ID0gYW5vdGhlclBsYXllcjtcbiAgICB9LFxuICAgIGF0dGFjayh4LCB5KSB7XG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5vcHBvbmVudC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIEFJbW92ZSgpIHtcbiAgICAgIC8vZ2V0IGEgbGlzdCBvZiB2YWxpZCBtb3Zlc1xuICAgICAgY29uc3QgdGFyZ2V0Qm9hcmQgPSB0aGlzLm9wcG9uZW50LmJvYXJkO1xuICAgICAgY29uc3QgbW92ZXNBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGluZGV4IGluIHRhcmdldEJvYXJkKSB7XG4gICAgICAgIGlmICh0YXJnZXRCb2FyZFtpbmRleF0gIT0gXCJoaXRcIiAmJiB0YXJnZXRCb2FyZFtpbmRleF0gIT0gXCJtaXNzZWRcIikge1xuICAgICAgICAgIG1vdmVzQXJyLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCByYW5kQXR0YWNrID0gbW92ZXNBcnJbcmFuZEluZGV4KG1vdmVzQXJyLmxlbmd0aCldO1xuICAgICAgY29uc3QgeCA9IHJhbmRBdHRhY2sgJSB0aGlzLm9wcG9uZW50LnNpemU7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihyYW5kQXR0YWNrIC8gdGhpcy5vcHBvbmVudC5zaXplKTtcbiAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gcGxheWVyT2JqO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgaGl0czogMCxcbiAgICBoaXQoKSB7XG4gICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBOZXdHYW1lIGZyb20gXCIuL05ld0dhbWVcIjtcbmltcG9ydCBpbml0U3RhdGljRE9NIGZyb20gXCIuL2luaXRTdGF0aWNET01cIjtcbmltcG9ydCBta0dhbWUgZnJvbSBcIi4vbWtHYW1lXCI7XG5pbXBvcnQgc3dpdGNoTW9kYWwgZnJvbSBcIi4vbW9kYWwvc3dpdGNoUGxheWVyTW9kYWxcIjtcbmltcG9ydCBta0ljb24gZnJvbSBcIi4vaWNvbi9ta0ljb25cIjtcbmltcG9ydCBib29tU1ZHIGZyb20gXCIuL2ljb24vYm9vbVNWR1wiO1xuaW1wb3J0IG1pc3NDbG91ZFNWRyBmcm9tIFwiLi9pY29uL21pc3NDbG91ZFNWR1wiO1xuaW1wb3J0IG1rU1ZHVGV4dCBmcm9tIFwiLi9zdmdUZXh0L21rU1ZHVGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoKSB7XG4gIGluaXRTdGF0aWNET00oKTtcbiAgY29uc3QgZ2FtZSA9IG1rR2FtZSgpO1xuICBhZGROZXdHYW1lRUwoZ2FtZSk7XG4gIGNlbGxzQWRkRUwoZ2FtZS5wMSwgZ2FtZSk7XG4gIGNlbGxzQWRkRUwoZ2FtZS5wMiwgZ2FtZSk7XG4gIGxldCBhcHBCRyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLWJnXCIpO1xuICBhcHBCRy5hcHBlbmQoc3dpdGNoTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdHYW1lRUwoZ2FtZU9iaikge1xuICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZ2FtZS1idG5cIik7XG4gIG5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIE5ld0dhbWUoZ2FtZU9iaik7XG4gICAgb3BlblN3aXRjaE1vZGFsKGdhbWVPYmopO1xuICB9KTtcbiAgY29uc3QgdG9nZ2xlQUlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFpLXRvZ2dsZVwiKTtcbiAgdG9nZ2xlQUlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGdhbWVPYmouc2V0UDJBSShlLnRhcmdldC5jaGVja2VkKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFpLWxhYmVsXCIpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwib25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuU3dpdGNoTW9kYWwoZ2FtZU9iaikge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoLW1vZGFsXCIpO1xuXG4gIGxldCBuYW1lID0gZ2FtZU9iai5jdXJyZW50UGxheWVyLm5hbWU7XG4gIGlmIChuYW1lID09PSBcInAxXCIpIHtcbiAgICBzd2l0Y2hNb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBwMXJkeSA9IG1rU1ZHVGV4dChcIlAxIFJlYWR5P1wiKTtcbiAgICBwMXJkeS5zdHlsZS5oZWlnaHQgPSBcIjUuNXJlbVwiO1xuICAgIHN3aXRjaE1vZGFsLmFwcGVuZChwMXJkeSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoTW9kYWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsZXQgcDJyZHkgPSBta1NWR1RleHQoXCJQMiBSZWFkeT9cIik7XG4gICAgcDJyZHkuc3R5bGUuaGVpZ2h0ID0gXCI1LjVyZW1cIjtcbiAgICBzd2l0Y2hNb2RhbC5hcHBlbmQocDJyZHkpO1xuICB9XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgc3dpdGNoRGlzcGxheWVkQm9hcmQoZ2FtZU9iaiwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaERpc3BsYXllZEJvYXJkKGdhbWVPYmosIG5hbWUpIHtcbiAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lT2JqLmN1cnJlbnRQbGF5ZXIub3Bwb25lbnQ7XG4gIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfS1kaXZgKTtcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke29wcG9uZW50Lm5hbWV9LWRpdmApO1xuICBwcmV2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG5cbmZ1bmN0aW9uIGNlbGxzQWRkRUwocGxheWVyLCBnYW1lT2JqKSB7XG4gIGxldCBuYW1lID0gcGxheWVyLm5hbWU7XG4gIGxldCBpZCA9IGAke25hbWV9LWVuZW15YDtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2hpbGRyZW47XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjZWxscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjZWxsc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZ2FtZU9iai5hY3RpdmUgJiYgZ2FtZU9iai5jdXJyZW50UGxheWVyLm5hbWUgPT09IHBsYXllci5uYW1lKSB7XG4gICAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XG4gICAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gcGxheWVyLmF0dGFjayh4LCB5KTtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgdXBkYXRlQm9hcmRzKHBsYXllciwgeCwgeSk7XG4gICAgICAgICAgLy9jaGVjayBmb3Igd2lubmVyLCBtYWtlIGdhbWUgaW5hY3RpdmUgaXMgd29uXG4gICAgICAgICAgY2hlY2tGb3JXaW5uZXIoZ2FtZU9iaik7XG4gICAgICAgICAgaWYgKCFnYW1lT2JqLmFjdGl2ZSkge1xuICAgICAgICAgICAgZGlzcGxheVdpbm5lcihnYW1lT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9zd2l0Y2ggY3VycmVudFBsYXllciBhbmQgY29udGludWUgd2l0aCBnYW1lXG4gICAgICAgICAgZWxzZSBpZiAoZ2FtZU9iai5hY3RpdmUpIHtcbiAgICAgICAgICAgIGdhbWVPYmoudG9nZ2xlUGxheWVyKCk7XG4gICAgICAgICAgICAvL2lmIHBsYXlpbmcgYWdhaW5zdCBhbm90aGVyIHBsYXllciwgcHVsbCB1cCBtb2RhbFxuICAgICAgICAgICAgaWYgKCFnYW1lT2JqLmN1cnJlbnRQbGF5ZXIuQUkpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3BlblN3aXRjaE1vZGFsKGdhbWVPYmopO1xuICAgICAgICAgICAgICB9LCA4MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBwbGF5aW5nIGFnYWluc3QgQUlcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgbW92ZSA9IGdhbWVPYmouY3VycmVudFBsYXllci5BSW1vdmUoKTtcbiAgICAgICAgICAgICAgZ2FtZU9iai5jdXJyZW50UGxheWVyLmF0dGFjayhtb3ZlLngsIG1vdmUueSk7XG4gICAgICAgICAgICAgIHVwZGF0ZUJvYXJkcyhnYW1lT2JqLmN1cnJlbnRQbGF5ZXIsIG1vdmUueCwgbW92ZS55KTtcbiAgICAgICAgICAgICAgY2hlY2tGb3JXaW5uZXIoZ2FtZU9iaik7XG4gICAgICAgICAgICAgIGlmICghZ2FtZU9iai5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5V2lubmVyKGdhbWVPYmopO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVPYmouYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU9iai50b2dnbGVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVCb2FyZHMocGxheWVyLCB4LCB5KSB7XG4gIGNvbnN0IG9wcG9uZW50ID0gcGxheWVyLm9wcG9uZW50O1xuICBjb25zdCB0b2tlbiA9IG9wcG9uZW50LmdldFRva2VuKHgsIHkpO1xuICBjb25zdCBpbmRleCA9IG9wcG9uZW50LmdldEluZGV4KHgsIHkpO1xuICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyLm5hbWV9LWVuZW15YCkuY2hpbGRyZW5bXG4gICAgaW5kZXhcbiAgXTtcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke29wcG9uZW50Lm5hbWV9LXNlbGZgKS5jaGlsZHJlbltpbmRleF07XG4gIC8vZmluZCBvcHBvbmVudCBjZWxsXG4gIGlmICh0b2tlbiA9PT0gXCJoaXRcIikge1xuICAgIHBsYXllckNlbGwuYXBwZW5kKG1rSWNvbihcImhpdFwiLCBib29tU1ZHKSk7XG4gICAgY2VsbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNlbGwuYXBwZW5kKG1rSWNvbihcImhpdFwiLCBib29tU1ZHKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09IFwibWlzc2VkXCIpIHtcbiAgICBwbGF5ZXJDZWxsLmFwcGVuZChta0ljb24oXCJtaXNzZWRcIiwgbWlzc0Nsb3VkU1ZHKSk7XG4gICAgY2VsbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNlbGwuYXBwZW5kKG1rSWNvbihcIm1pc3NlZFwiLCBtaXNzQ2xvdWRTVkcpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvcldpbm5lcihnYW1lT2JqKSB7XG4gIGlmIChnYW1lT2JqLmN1cnJlbnRQbGF5ZXIub3Bwb25lbnQuaXNEZWZlYXRlZCgpKSB7XG4gICAgZ2FtZU9iai5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKGdhbWVPYmopIHtcbiAgbGV0IHdpbm5lciA9IG51bGw7XG4gIGxldCBsb3NlciA9IG51bGw7XG4gIGlmIChnYW1lT2JqLnAxLmlzRGVmZWF0ZWQoKSkge1xuICAgIHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDItdmljdG9yeVwiKTtcbiAgICBsb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDEtZGVmZWF0XCIpO1xuICB9IGVsc2Uge1xuICAgIHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDEtdmljdG9yeVwiKTtcbiAgICBsb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDItZGVmZWF0XCIpO1xuICB9XG4gIHdpbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGxvc2VyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgY29uc3QgaGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGl0XCIpO1xuICBmb3IgKGxldCBpdGVtIG9mIGhpdHMpIHtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLXBvcC1sb29wXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgbWtJY29uIGZyb20gXCIuL2ljb24vbWtJY29uXCI7XG5pbXBvcnQgc2hpcFNWRyBmcm9tIFwiLi9pY29uL3NoaXBTVkdcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlTaGlwcyhib2FyZElELCBwbGF5ZXIpIHtcbiAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib2FyZElEKS5jaGlsZHJlbjtcbiAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG4gIGxldCBudW1SZWdleCA9IC9eXFxkKyQvO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgaWYgKG51bVJlZ2V4LnRlc3QoYm9hcmRbaW5kZXhdKSkge1xuICAgICAgY29uc3QgaWNvbiA9IG1rSWNvbihgJHtwbGF5ZXIubmFtZX0taWNvbmAsIHNoaXBTVkcpO1xuICAgICAgY2VsbHMuaXRlbShpbmRleCkuYXBwZW5kKGljb24pO1xuICAgIH1cbiAgfVxufVxuIiwibGV0IGJvb21TVkcgPSBgPHN2Z1xud2lkdGg9XCIxOTAuMDg1OTRcIlxuaGVpZ2h0PVwiMTc3LjY4ODE5XCJcbnZpZXdCb3g9XCIwIDAgNTAuMjkzNTY5IDQ3LjAxMzMzMlwiXG52ZXJzaW9uPVwiMS4xXCJcbmlkPVwic3ZnMVwiXG54bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG5pbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9XCJib21iLnN2Z1wiXG5pbmtzY2FwZTpleHBvcnQteGRwaT1cIjk2XCJcbmlua3NjYXBlOmV4cG9ydC15ZHBpPVwiOTZcIlxueG1sbnM6aW5rc2NhcGU9XCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXCJcbnhtbG5zOnNvZGlwb2RpPVwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcIlxueG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG54bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxzb2RpcG9kaTpuYW1lZHZpZXdcbiAgaWQ9XCJuYW1lZHZpZXcxXCJcbiAgcGFnZWNvbG9yPVwiI2ZmZmZmZlwiXG4gIGJvcmRlcmNvbG9yPVwiIzAwMDAwMFwiXG4gIGJvcmRlcm9wYWNpdHk9XCIwLjI1XCJcbiAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9XCIyXCJcbiAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9XCIwLjBcIlxuICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPVwidHJ1ZVwiXG4gIGlua3NjYXBlOmRlc2tjb2xvcj1cIiNkMWQxZDFcIlxuICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz1cIm1tXCJcbiAgaW5rc2NhcGU6em9vbT1cIjEuNjgxOTMwNFwiXG4gIGlua3NjYXBlOmN4PVwiMjQ4LjIyNjY4XCJcbiAgaW5rc2NhcGU6Y3k9XCI5MS4yNjQxOFwiXG4gIGlua3NjYXBlOndpbmRvdy13aWR0aD1cIjE3OTJcIlxuICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PVwiMTEyMFwiXG4gIGlua3NjYXBlOndpbmRvdy14PVwiMTkyMFwiXG4gIGlua3NjYXBlOndpbmRvdy15PVwiMFwiXG4gIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9XCIwXCJcbiAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj1cImxheWVyM1wiIC8+PGRlZnNcbiAgaWQ9XCJkZWZzMVwiPjxsaW5lYXJHcmFkaWVudFxuICAgIGlkPVwic3dhdGNoMjFcIlxuICAgIGlua3NjYXBlOnN3YXRjaD1cInNvbGlkXCI+PHN0b3BcbiAgICAgIHN0eWxlPVwic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxO1wiXG4gICAgICBvZmZzZXQ9XCIwXCJcbiAgICAgIGlkPVwic3RvcDIxXCIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Z1xuICBpbmtzY2FwZTpncm91cG1vZGU9XCJsYXllclwiXG4gIGlkPVwibGF5ZXIzXCJcbiAgaW5rc2NhcGU6bGFiZWw9XCJFZmZlY3RcIlxuICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIuMDQ5NDg3MiwtMy4zNjkzMDM3KVwiPjxwYXRoXG4gICAgaWQ9XCJwYXRoMzZcIlxuICAgIHN0eWxlPVwiZmlsbDojZmY1NTU1O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozLjAwODc2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxXCJcbiAgICBpbmtzY2FwZTpsYWJlbD1cInBhdGgzNlwiXG4gICAgZD1cIk0gNy42MTk2ODk5LDUuMjI4MTA0NyA5Ljk5MjY3MTcsMjAuMDUwOTcyIDIuMDQ5NDg3MywxNS4zNzU4MDYgOC40MDc3NTU1LDI1LjU4Mzk2OCAzLjA2NzUxMywyNy4wNTcyNjMgbCA0LjcxOTA5MTgsMS4yNTgzMjEgLTEuNDk0NDgyNCwxLjgwOTE5MiAyLjQzODYxMDgsLTAuNTUwODcxIC0wLjM5MzI1NzYsNC40MDQ5IDIuNjc0MjU1NCwtMi41OTU3MDggMC41OTQyNzksLTAuNjY0MDQyIDAuODM5MjI1LDEuMzQ3MjA1IDAuNzI4MTIxLC0yLjgxMzc4MiA4LjU0NDE4MSwtOC4zODUwMTggMC44MjA2MjIsMS45MjY0OTggOC45ODE4ODEsMC4yNDQ0MjkgLTEuMTczMDU1LC00LjQxODg1MiAwLjA5MjUsMC4xMDAyNTMgMS44NDg0NjYsLTEuNDU1MjA5IDIuMjgwOTk3LC0yLjcxMzUyOSAtMS43MzA2NDMsMC40NzE4MDYgMS4wMjI2NzYsLTIuODMxMzUyIC0zLjk0ODU5NiwxLjkyMjg4IC0wLjIxMjkwNywtNC40MzY5Mzg1IC0xLjMyNDQ2NywxLjUxMzYwMjUgLTEuNDQ2OTQsLTUuNDUwMzEzMSAtOC4xMDIzNDgsNy4yOTE1NDQxIHpcIiAvPjxwYXRoXG4gICAgaWQ9XCJwYXRoMzRcIlxuICAgIHN0eWxlPVwiZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyLjM4MTI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxXCJcbiAgICBkPVwibSAtMTUuODMzOTMzLDE3LjQxOTM3NyAyLjM5MTU0MiwyLjAwMjIyMSAxLjE2Nzk2MSwyLjE2OTA3MiAwLjA1NTYyLDEuNjY4NTE4IC0xLjg5MDk4OCwyLjc4MDg2MSAtNS4zMzkyNTQsLTUuMjgzNjM3IHogbSA0LjExNTY3NSwxNi4wNzMzNzkgQSAxNS4yOTQ3NDMsMTUuMjk0NzQzIDAgMCAxIC0yNy4wMTMsNDguNzg3NDk4IDE1LjI5NDc0MywxNS4yOTQ3NDMgMCAwIDEgLTQyLjMwNzc0MywzMy40OTI3NTYgMTUuMjk0NzQzLDE1LjI5NDc0MyAwIDAgMSAtMjcuMDEzLDE4LjE5ODAxMyAxNS4yOTQ3NDMsMTUuMjk0NzQzIDAgMCAxIC0xMS43MTgyNTgsMzMuNDkyNzU2IFpcIlxuICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1My43MDkyNzQsMC43Njc0NjE4MilcIiAvPjxwYXRoXG4gICAgc3R5bGU9XCJmaWxsOiNmZmU2ODA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIuMzgxMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjFcIlxuICAgIGQ9XCJtIDQzLjg0OTk3Miw1LjM2ODE4MDcgMC4yMzU5NjYsMy42Mzc3Nzc5IC0wLjY2ODU2NSwwLjAzOTMyNyAtMC4wMTk2NiwwLjgwNjIxMDIgLTEuMzc2NDU3LDAuOTA0NTI5MiAxLjE5OTQ4MywwLjU4OTkxIC0wLjM5MzI3MSwxLjI5NzgwMiAxLjc4OTM5MywtMC4wNzg2NSAxLjY1MTc0OCwzLjE2NTg1IDIuMjAyMzI4LC0zLjg1NDA3OCAyLjIwMjMzMSwwLjIzNTk2NCAtMS43Njk3MjksLTEuOTI3MDQgMC4yNzUyOTEsLTAuNzI3NTU1NCAwLjk4MzE4NCwtMS40NTUxMTEyIC0zLjAwODU0LDAuNTcwMjQ2MSB6XCJcbiAgICBpZD1cInBhdGg0NFwiXG4gICAgaW5rc2NhcGU6bGFiZWw9XCJTcGFya1wiIC8+PC9nPjxnXG4gIGlua3NjYXBlOmdyb3VwbW9kZT1cImxheWVyXCJcbiAgaWQ9XCJsYXllcjJcIlxuICBpbmtzY2FwZTpsYWJlbD1cIkJvbWJcIlxuICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTEuNjU5Nzg5LC0yLjYwMTg0MTkpXCI+PHBhdGhcbiAgICBpZD1cInBhdGg2MlwiXG4gICAgc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi4zODEyNTtzdHJva2UtbGluZWNhcDpyb3VuZFwiXG4gICAgZD1cIm0gLTM0Ljk5NTY5LDI3LjgwNTQ3MSAtMC4zMzQ4NjMsMC4zMzc0NDcgLTAuNjU1Nzc0LDAuNzExMDY4IDAuMTUzNDc5LDAuNDA0NjI2IDAuNTg4NTk1LC0wLjIyMzI0MiAwLjAwNzgsLTAuNDIzNzQ3IHogbSAwLjcwMDczMywwLjM3NDY1NCAtMC41ODQ5NzcsMC45MzAxNzYgMC4zOTMyNTcsMC45MzY4OTQgMC40NDQ5MzQsMC4wMDMxIDAuMTc5ODM0LC0wLjIyMTE3NSAtMC4wMzU2NiwtMS4yNDU0MDIgeiBtIDI1LjQ5OTczNTQsLTE3LjQwNTEzOSAtMC43ODAzMTQyLDAuNTM3OTUyIC0wLjQ0MDI4MzIsMC41NTc1ODggMi4wNjM0NCw0LjAyNzE0NSAwLjYwNTEzMSwtMS4xNDYxODMgeiBtIC0zLjE3NTUxNjQsLTQuMzA3NzQ3MyAxLjg5NDk3NCwzLjIxMjIwNyAwLjAzMDQ5LC0wLjk0NjcxMjIgMS4xOTQyNDI4LDAuMjU0NzY0OCAtMC4zNTc2MDA5LC0wLjg0ODUyNyB6IG0gOS42MDMwMzEsLTAuMDkxNDY3IC01LjIxMTA1MTQsMS4yODcyNTk5IDAuNzUwMzQxOCwwLjgyODM3MzIgMy41NzM5NDIsLTAuOTY4NDE2MyB6IE0gLTIuOTQ1NDQ5NSw3LjEyMzUyOTcgLTMuMjU0NDc0Niw3LjUyMjk4ODUgLTQuMTg2NzE3NCw3Ljc3NTY4NjMgLTUuNDgxMjEyLDguNjU5MzUzMiAtNC42MzE2NTE1LDkuODc2ODUgWiBtIC04LjMwNjk4NjUsMi44ODg3MTIzIC0wLjc1Mzk1OSwyLjcxMDk0NiAwLjgzMzAyNCwtMC4wNDE4NiAxLjMyOTExNzgsLTIuMzUwNzYxIHogbSAyLjkwMDA4MTQsMS4xODk1OTEgLTAuMjY4NzE3NSwwLjA1MDY0IDAuMDgxMTMyLDAuMjIzNzU5IHogbSAtMS4zMzQ4MDIzLDAuMjUyNjk4IC0wLjg4NzI4NDEsMC4xNjc5NDkgLTAuNTk4OTMsMS4wNTg4NSAtMC44MzMwMjQsMC4wNDE4NiAwLjA0MzQxLC0wLjE1NTU0NiAtMC4xNTQ1MTIsMC4xNjEyMyAyLjUwMjE3MjQsLTAuMDc2NDggLTAuNDAwNDkyNCwtMC43ODE4NjUgeiBtIDMuNjU2NjI0NCwtMC41OTI3MjkgLTEuMzkzMTk2NiwzLjY3OTg3OSAwLjA3NjQ4MSwwLjIwOTgwNyAtMC41NTA4NzA4LDEuMDQzODYzIC0wLjE5NTg1MzcsMC41MTY3NjUgMy4yMTM3NTc0LC00LjcyODkxMSB6IG0gLTAuNjI1Mjg0OCwtMC4yNDcwMTMgMC41MzUzNjc4LDAuNDg0MjA4IDAuMDg5OTE3LC0wLjIzNzE5NSAxLjE1MDMxNzQsMC43MjE0MDMgLTAuMTU2NTc5NiwwLjIzMDk5NCAzLjAyNTY1NTEsMC4zNDgyOTkgLTEuMjc1Mzc0NCwtMC45OTM3MzcgeiBtIDEuMjA1NjExMSwtMS45MTA5OTQgLTAuMTMxNzc0OSwwLjAxOTEyIC0wLjE4MjkzNDUsMC43ODkwOTkxIDIuMTQzNTM4NCwxLjYwMTk2ODkgMC4zMzQ4NjMyLDAuMDU0NzggMS4yNzUzNzQ0LDAuOTkzNzM3IC0wLjI0MzM5NiwtMC4wMjc5IDAuODg4MzE3OSwwLjY2MzUyNSAtMi45NTc5NTksLTMuNDIzNTYzMiAtMC4zMDc0NzQ4LDAuNTAyMjk0OSB6IG0gLTUuMDY3MzkwOCwwLjIyNjM0MjggLTQuNDQyNjIzLDEuNTQ3NzA5MiAzLjU0NTAwMywwLjExOTg4OSAwLjE2Mjc4MSwtMC41ODU0OTQgMC4wNzAyOCwwLjAxNjAyIDAuOTc0MTAxLC0wLjU3MzA5MTcgeiBtIDAuNDU0NzUyLDAuMzU0NTAwMyAtMC4wMDMxLDAuMDg2ODE2IDAuMDU5OTQsLTAuMDM1MTQgeiBtIDAuMDE0OTksLTYuNjgyNzk2MiAtMC4yODc4MzgsNC44NTUwMDA4IDEuMTI3MDYyOSwwLjY4MjEyODkgMC4yNTU3OTgzLDAuNjA2NjgxMyB6IG0gLTAuMTExNjIxLDAuMDE1NTAzIDAuMDg3MzMsMC4zOTY4NzUgMC4wMTYwMiwtMC4yNzI4NTE2IHogbSAwLjE0NTcyNywwLjE3NDY2NjMgMC40NDE4MzM2LDIuNDc5OTUyIDIuMjU5ODEwNCwyLjk5MzA5OSAwLjIxNDQ1NzIsLTAuMDcwNzk3IC0wLjQ4MTEwNzYsLTAuNTMxMjMzOCAxLjQwMzUzMTksLTAuMzQ2NzQ4OCAtMC4wNzA3OTcsMC4wMDM2MiB6IE0gLTE1LjM3OTgzMywxMi43ODgzIGMgLTAuMDc0NjYsLTAuMDAxNCAtMC4xNDkxODgsLTAuMDAxNCAtMC4yMjM3NTksNS4xN2UtNCAtMC41OTY1NjIsMC4wMTQ5OSAtMS4xODcwMiwwLjE0MDk5MSAtMS43NDIwMTIsMC40NjkyMjIgLTEuMTA5OTg1LDAuNjU2NDU3IC0xLjY4MDE4MiwyLjA2MzgyNSAtMS42MjEwOSw0LjA4MTkyMSAwLjAxNTE5LDAuNTEwMjk1IDAuNDQwNTE1LDAuOTEyMDM4IDAuOTUwODQ3LDAuODk4MTM2IDAuNTExMzI4LC0wLjAxNDkxIDAuOTEzNzE1LC0wLjQ0MTU4OSAwLjg5ODY1MywtMC45NTI5MTMgLTAuMDQ5NDEsLTEuNjg3MzE5IDAuMzE4MjU1LC0yLjE5OTkwOCAwLjcxMzEzNCwtMi40MzM0NDMgMC4zOTQ4ODEsLTAuMjMzNTM4IDEuMjExMTA1LC0wLjI0ODkwMyAyLjIyMDUzNywtMC4wNTI3MSAxLjAwOTQzMiwwLjE5NjE5NiAyLjEzMTY0NywwLjU1Mjc2OCAzLjE5OTI4OCwwLjY4MTYxMiAwLjUzMzgyLDAuMDY0NDIgMS4wNjg1NjU0LDAuMDgxMTUgMS42MTMzMzc5LC0wLjA5NjEyIDAuMzEyNzU5MiwtMC4xMDE3NzIgMC42MjA1NDEyLC0wLjI5NTAzOCAwLjg3MTc4MTQsLTAuNTUzOTcyIGwgLTAuOTIwMzU3MiwtMS43OTU3NTYgYyAtMC4xNTMwMTkyLDAuMDk5ODMgLTAuMjc4MjM3NiwwLjI0NTY2NyAtMC4zNTE5MTY1LDAuNDI3ODgxIC0wLjA1NzI4OSwwLjE0MTgwMyAtMC4wNDM0MTgsMC4xMjAzOTcgLTAuMTcyMDgyNiwwLjE2MjI2NCAtMC4xMjg2NjQsMC4wNDE4NyAtMC40MjMxMTQsMC4wNjUyMyAtMC44MTgwMzgsMC4wMTc1NyAtMC43ODk4NDYsLTAuMDk1MzIgLTEuOTE3Nzg3LC0wLjQzODMwOCAtMy4wNjg1NDYsLTAuNjYxOTc1IC0wLjUwMzQ1OSwtMC4wOTc4NSAtMS4wMjcxMzEsLTAuMTgyNjUgLTEuNTQ5Nzc3LC0wLjE5MjIzNiB6IG0gLTUuNjAyMjQyLDIuNTY5ODY5IC0xLjI3ODQ3NSwwLjI0NzUzIC0yLjY3MzIyMSwxLjkzOTkzMyAxMi4yMzI4NDUsOS40OTAzNzcgMS40Mzc2MzgsLTMuMzc2MDIxIC0wLjEyMDQwNiwtMS4zNzA0NTkgLTAuNzQ0MTQxLC0xLjY5NDk4NyAtMi44MjQ2MzQsLTMuNDkwMjI2IC0yLjExNzE4MywtMC45NTQ5ODEgYyAtMS45OWUtNCwwLjAwMTUgLTMuMTllLTQsMC4wMDMyIC01LjE3ZS00LDAuMDA0NyAtMC4wMDcyLDAuMDUzODggLTAuMDEzMjgsMC4xMTE5OTQgLTAuMDE5MTIsMC4xNzAwMTUgLTAuMDEwODQsMC4xMTA1ODggLTAuMDIwMzMsMC4yMjQ3NTUgLTAuMDI1MzIsMC4zNTI0MzQgLTAuMDAxMiwwLjAyODYzIC0wLjAwMTIsMC4wNjAzNiAtMC4wMDIxLDAuMDg5OTIgLTAuMDA0NCwwLjE2MDcxMSAtMC4wMDYsMC4zMjk5MyAtNS4xNmUtNCwwLjUxODgzMSAwLjAwMTksMC4wNjM5MiAtMC4wMDI5LDAuMTI2NDM3IC0wLjAxMzQ0LDAuMTg3MDY5IC0wLjAxMDU2LDAuMDYwNjMgLTAuMDI2NzgsMC4xMTk2MyAtMC4wNDg1OCwwLjE3NTcgLTAuMDg3MTksMC4yMjQyNzggLTAuMjU5NzM2LDAuNDA2NzcxIC0wLjQ3ODUyNCwwLjUwNjk0NSAtMC4wNTQ3LDAuMDI1MDQgLTAuMTEyMTczLDAuMDQ0ODIgLTAuMTcyMDgyLDAuMDU4OTEgLTAuMDU5OTEsMC4wMTQwOSAtMC4xMjIxMTksMC4wMjI0MiAtMC4xODYwMzUsMC4wMjQyOSAtMC4wNjM3OSwwLjAwMTcgLTAuMTI2MDUzLC0wLjAwMjggLTAuMTg2NTUyLC0wLjAxMzQzIC0wLjA2MDUsLTAuMDEwNjUgLTAuMTE5MjQ1LC0wLjAyNzI1IC0wLjE3NTE4MywtMC4wNDkwOSAtMC4yMjM3NTQsLTAuMDg3MzYgLTAuNDA1OTQ0LC0wLjI1OTU5NCAtMC41MDU5MTMsLTAuNDc4MDA3IC0wLjAyNDk5LC0wLjA1NDYgLTAuMDQ0ODMsLTAuMTEyMjg4IC0wLjA1ODkxLC0wLjE3MjA4MyAtMC4wMTQwOCwtMC4wNTk3OSAtMC4wMjIzOSwtMC4xMjE3MzEgLTAuMDI0MjksLTAuMTg1NTE4IC0wLjAwNjEsLTAuMjA3NjExIC0wLjAwMTksLTAuNDA1NDUyIDAuMDA2MiwtMC41OTg5MyAwLjAwMjcsLTAuMDc0MDkgMC4wMDUyLC0wLjE0Nzk4MSAwLjAwOTgsLTAuMjIwMTQxIDAuMDA5OCwtMC4xNDAwMDQgMC4wMjMwMiwtMC4yNzY0ODQgMC4wMzk3OSwtMC40MDkyNzggMC4wMTQ2MiwtMC4xMjA0NzQgMC4wMzI4MiwtMC4yMzcwODkgMC4wNTMyMywtMC4zNTEzOTkgeiBtIDUuNTY1NTUyLDIuODg5NzQ2IDAuNzg2NTE1LDAuNTUwMzU0IC0xLjM1NTk4OSwxLjMwOTk5OCAtMC42ODg4NDcsLTAuNjgwNTc5IHogbSAxLjI4NTcxLDAuOTc1NjUxIDEuMzU4NTczLDEuOTU0OTE5IDAuMTA3NDg3LDAuOTk3ODcyIC0wLjkxNjc0LDAuOTE1NzA3IC0wLjU1ODYyMiwtMS4yMTM4OCAtMS4yNDk1MzYsLTEuNDQ5NTI0IHogbSAtMTMuMjA2NDI5LC0yLjE2MzE3NSBjIC0wLjM4NzIxNywwLjAxMzE5IC0wLjc3NDA4NSwwLjA0MDMzIC0xLjE1OTYxOSwwLjA4MTEzIC04Ljk0MTk1NCwwLjk0NTc5IC0xNS40MjQyNDksOC45NjEzMiAtMTQuNDc4NzAzLDE3LjkwMzMgMC45NDU3ODMsOC45NDIxNzYgOC45NjE2NDcsMTUuNDI0NTU0IDE3LjkwMzgxNiwxNC40Nzg3MDIgOC45NDE5NywtMC45NDYwNDcgMTUuNDI0MDQ4NywtOC45NjE4MjkgMTQuNDc4MTg3LC0xNy45MDM4MTYgLTAuMjEzMjA5LC0yLjAxNTQxNSAtMC43ODk0NTEsLTMuOTE0NjM0IC0xLjY1OTg0NywtNS42MzQ3OTkgbCAtMC40NDc1MTgsMS4wNTEwOTkgLTEyLjIzMjg0NSwtOS40OTAzNzcgMC40NTIxNjgsLTAuMzI4MTQ1IGMgLTAuNTU2NTA5LC0wLjA3OTExIC0xLjEyMDg0NSwtMC4xMzM1NzMgLTEuNjkzNDM2LC0wLjE1NTAyOSAtMC4zODc0MTgsLTAuMDE0NDggLTAuNzc0OTg4LC0wLjAxNTIyIC0xLjE2MjIwMywtMC4wMDIxIHogbSAtMi4zOTEwNjksMi4zODY0MTcgNy41NTg3MTIsMi43NDYwODYgMS45MTY2NzksMi4zMTA5NyAxLjU2OTkzLDguMTQ5MzczIC0wLjc5MjcxNywxLjYzMDkwOCAtMi40NzIyLDIuNzc1MDI1IC0xLjQzNjYwNSwwLjQwOTI3NyAtMy41NzQ5NzYsMC4yNDkwODEgLTEuMDAwOTcyLC0wLjM0NDY4MiAtMS44NDk1LC0xLjY3MzggLTEuMjg1NzA5LDAuMDA3MiAtMC43MDk1MTgsMC41OTAxNDUgMC4xMzc0NiwwLjY5NTA0OCAtMC40MDQ2MjcsMC40Mjg5MTQgLTEuMjIyMTQ3LDUuMTdlLTQgLTAuNTEyMTE0LC0wLjU5MDE0NSAtMC43MTY3NTIsMC41MjY1ODMgLTAuNzgzNDE1LC0wLjExMDU4OCAtMC43Mzc0MjIsLTAuODg4MzE4IC0wLjQ2NTA4OCwtMC4xNDQ2OTQgLTAuNjg2MjYzLDAuMjAxNTM4IC0wLjk1MTM2MywtMC40Nzk1NTcgLTAuMDUzNzQsLTAuNTA5NTI5IDAuMDM5NzksLTAuODQyMzI2IC0wLjY4Njc4LDAuMjAyMDU1IC0xLjA0MTc5NywtMC43MjgxMjEgLTAuMTc3NzY3LC0xLjA3NzQ1NCAwLjQxODU3OSwtMS40NDQ4NzMgMC43NTM5NiwtMC43ODE4NjQgLTAuODU4ODYzLDAuNDg2NzkyIC0wLjU5MDE0NSwtMC44NzMzMzIgMC4wMjU4NCwtMC45Njk0NSAxLjQ0MjI4OSwtMS41NzA0NDcgMC4zMTk4NzcsLTEuODM4NjQ3IC0wLjExMjEzOCwtMS42NjQ0OTggMS40NjUwMjcsLTEuOTU5NTcgMy4wMzI4OSwtMS43Mzg5MTIgeiBtIC0zLjk1Mzc2NCwyLjk4MDE4IC0xLjg5MTg3NCwwLjM5Mzc3NCAtMi4xNTU5NDEsMS4yNDE3ODUgMC4zMjk2OTYsMS43NDc2OTcgMC45NzQxMDEsMC41NjA2ODkgMi42MTUzNDQsLTAuNDk0NTQzIDEuMjIxMTE0LC0xLjIyNDczMiAwLjE5NzQwNCwtMC45MjQ0OTEgMC4wNTAxMywtMC44NjE0NDYgeiBtIDMuOTEzNDU3LDIuMTY3ODI2IC0xLjAwNzE3NCwwLjg0MTgwOSAtMC43MTIxMDEsMS4wNTQyIC0wLjAyMzc3LDEuNzkxNjIyIDAuNTEyMTE0LDEuMzQxNTIgMC4zNTc2MDEsMC45NTc1NjQgMS40NTY3NTgsMC40OTM1MSAxLjIwODcxMiwtMC4yNjkyMzQgMC43Mzc0MjMsLTEuMzYwMTI0IDAuMjUxNjY0LC0yLjI2NzU2MiAtMS41MDAxNjcsLTIuMjI4Mjg4IHogbSAxNS44ODU4NTIsMTEuNjY0OTIxIGMgMC42MDgyLC0zLjJlLTUgMS4xMDEyNTcsMC40OTMwMjQgMS4xMDEyMjQsMS4xMDEyMjUgMy4zZS01LDAuNjA4MjAyIC0wLjQ5MzAyNCwxLjEwMTI1OCAtMS4xMDEyMjQsMS4xMDEyMjUgLTAuNjA4MjAyLDMuM2UtNSAtMS4xMDEyNTgsLTAuNDkzMDIzIC0xLjEwMTIyNSwtMS4xMDEyMjUgLTMuM2UtNSwtMC42MDgyMDEgMC40OTMwMjMsLTEuMTAxMjU3IDEuMTAxMjI1LC0xLjEwMTIyNSB6IG0gLTEuNjQxMjQ0LDIuNTA2ODI0IGMgMC4yNTEzODQsLTAuMDA2MyAwLjQ5ODMxMiwwLjA2NzE0IDAuNzA1MzgzLDAuMjA5ODA2IDAuNTQxNjQsMC4zNzMxMDIgMC42NzgxNjEsMS4xMTQ3MDYgMC4zMDQ4OTEsMS42NTYyMyAtMi43NjI5OTUsNC4wMDg4MyAtNy4xODQyNzUsNi4yMjk2NDggLTEyLjQ5NDMyNyw2LjgwMDYxOSAtMC42NTQyNTgsMC4wNzExOSAtMS4yNDIxNzYsLTAuNDAxOTI1IC0xLjMxMjU4MiwtMS4wNTYyNjcgLTAuMDcxMTgsLTAuNjU0NDM3IDAuNDAyMjM0LC0xLjI0MjQzOSAxLjA1Njc4MywtMS4zMTI1ODEgNC44MTA2MzQsLTAuNTE3MjY5IDguNDU4ODc4LC0yLjQwMjMyOSAxMC43ODkwMDYsLTUuNzgzMTEgMC4yMTYyODIsLTAuMzEzODgxIDAuNTY5NzgxLC0wLjUwNTIzMiAwLjk1MDg0NiwtMC41MTQ2OTcgelwiIC8+PC9nPjwvc3ZnPmA7XG5leHBvcnQgZGVmYXVsdCBib29tU1ZHO1xuIiwibGV0IG1pc3NDbG91ZFNWRyA9IGA8c3ZnXG53aWR0aD1cIjE5NC4zNTIyM1wiXG5oZWlnaHQ9XCIxOTMuNTQ1MlwiXG52aWV3Qm94PVwiMCAwIDUxLjQyMjM2IDUxLjIwODgzM1wiXG52ZXJzaW9uPVwiMS4xXCJcbmlkPVwic3ZnMVwiXG5zb2RpcG9kaTpkb2NuYW1lPVwibWlzc0Nsb3VkLnN2Z1wiXG54bWxuczppbmtzY2FwZT1cImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcIlxueG1sbnM6c29kaXBvZGk9XCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFwiXG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbnhtbG5zOnN2Zz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48c29kaXBvZGk6bmFtZWR2aWV3XG4gIGlkPVwibmFtZWR2aWV3MVwiXG4gIHBhZ2Vjb2xvcj1cIiNmZmZmZmZcIlxuICBib3JkZXJjb2xvcj1cIiMwMDAwMDBcIlxuICBib3JkZXJvcGFjaXR5PVwiMC4yNVwiXG4gIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PVwiMlwiXG4gIGlua3NjYXBlOnBhZ2VvcGFjaXR5PVwiMC4wXCJcbiAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD1cIjBcIlxuICBpbmtzY2FwZTpkZXNrY29sb3I9XCIjZDFkMWQxXCJcbiAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9XCJtbVwiXG4gIGlua3NjYXBlOnpvb209XCIxLjY4MTkzMDRcIlxuICBpbmtzY2FwZTpjeD1cIjY1LjQwMTA0MVwiXG4gIGlua3NjYXBlOmN5PVwiODguMjkxNDA1XCJcbiAgaW5rc2NhcGU6d2luZG93LXdpZHRoPVwiMTc5MlwiXG4gIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9XCIxMDkyXCJcbiAgaW5rc2NhcGU6d2luZG93LXg9XCIxOTIwXCJcbiAgaW5rc2NhcGU6d2luZG93LXk9XCIyOFwiXG4gIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9XCIwXCJcbiAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj1cImxheWVyMVwiIC8+XG48ZGVmc1xuICBpZD1cImRlZnMxXCIgLz5cbjxnXG4gIGlua3NjYXBlOmdyb3VwbW9kZT1cImxheWVyXCJcbiAgaWQ9XCJsYXllcjRcIlxuICBpbmtzY2FwZTpsYWJlbD1cIkxheWVyIDJcIj5cbiA8Z1xuICAgIGlkPVwiZzZcIlxuICAgIGlua3NjYXBlOmxhYmVsPVwiZGFya1Ntb2tlXCI+XG4gICA8cGF0aFxuICAgICAgc3R5bGU9XCJmaWxsOiNjOGI3Yjc7c3Ryb2tlLXdpZHRoOjIuMzgxMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmRcIlxuICAgICAgZD1cIm0gNDIuNDkxNTc1LDM2LjI2MjQ0MiAxLjMzNDgxMiwzLjY3MDczOSAtMC40NDQ5MzYsMC43Nzg2NDIgMC44ODk4NzUsMy4zMzcwMzQgMi40NDcxNTgsMS4xMTIzNDUgMi42Njk2MywtMS40NDYwNDggMC4yMjI0NjcsLTQuMDA0NDQzIC0xLjg5MDk4NSwtMS41NTcyODIgLTEuNjY4NTE4LDAuMjIyNDcgelwiXG4gICAgICBpZD1cInBhdGg0XCIgLz5cbiAgIDxwYXRoXG4gICAgICBzdHlsZT1cImZpbGw6I2M4YjdiNztzdHJva2Utd2lkdGg6Mi4zODEyNTtzdHJva2UtbGluZWNhcDpyb3VuZFwiXG4gICAgICBkPVwiTSAwLjc3ODY0MTQxLDMuMjI1ODAwMiAxLjgzNTM2OTEsNC45Nzc3NDMyIDEuNjY4NTE3Myw1LjU4OTUzMjkgMC44MzQyNTg2NSw2LjA5MDA4ODMgMC41NTYxNzI0NCw3LjMxMzY2NzcgMS4xNjc5NjIxLDguNTY1MDU1NiAyLjM5MTU0MTUsOS4wNjU2MTA3IDMuNjk4NTQ2Niw4LjgxNTMzMzEgNC4xNDM0ODQ3LDkuOTI3Njc4IDUuODk1NDI3OCwxMC4xMjIzMzggNy4wMzU1ODE0LDguNTkyODY0MSA5Ljk4MzI5NTIsOS4yMzI0NjI1IDkuMDY1NjEwNyw1LjMzOTI1NTQgMTAuMzE2OTk5LDQuOTIyMTI2IDEwLjUzOTQ2OCwzLjIyNTgwMDIgOC43ODc1MjQ2LDEuMjIzNTc5NCA2Ljk3OTk2NDEsMC45NDU0OTMxNiA1LjY3Mjk1OSwxLjMwNzAwNTIgNC4xNzEyOTMzLDAuNTAwNTU1MiAxLjk0NjYwMzUsMS41MDE2NjU2IFpcIlxuICAgICAgaWQ9XCJwYXRoNVwiIC8+XG4gPC9nPlxuIDxwYXRoXG4gICAgc3R5bGU9XCJmaWxsOiNlM2RiZGI7c3Ryb2tlLXdpZHRoOjIuMzgxMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmRcIlxuICAgIGQ9XCJtIDIzLjM1OTI0Myw0LjY3MTg0ODQgNi44OTY1MzgsLTIuMjI0Njg5NyAzLjY3MDczNywwLjY2NzQwNyAzLjc4MTk3MiwxLjc3OTc1MTggMS4zMzQ4MTUsMi43ODA4NjIxIDAuMjIyNDcsMi41NTgzOTM0IC0wLjY2NzQwOSwyLjAwMjIyMSAtMC44ODk4NzYsMC43Nzg2NDEgMS4zMzQ4MTUsMi4zMzU5MjQgMC4xMTEyMzQsMC4zMzM3MDQgNC4wMDQ0NDIsMC41NTYxNzIgNS4wMDU1NTEsNi4xMTc4OTcgLTAuMzMzNzAzLDMuODkzMjA3IC0yLjQ0NzE1Nyw0LjAwNDQ0MiAtNC41NjA2MTUsMC4zMzM3MDMgMC44ODk4NzYsMS42Njg1MTggLTAuMzMzNzA0LDEuNDQ2MDQ5IC0xLjc3OTc1MSwwLjg4OTg3NSAwLjU1NjE3MywzLjIyNTggdiAxLjc3OTc1MiBsIC00Ljc4MzA4NSwyLjY2OTYyNyBoIC0yLjc4MDg2MSBsIC00LjQ0OTM3OCwtMi41NTgzOTQgMC4xMTEyMzMsLTIuNjY5NjI3IC0yLjc4MDg2MiwwLjc3ODY0MiAtMi4wMDIyMjEsMC41NTYxNzMgLTcuNjc1MTgsOC41NjUwNTUgMS41NTcyODMsLTEwLjEyMjMzOSAtMi4zMzU5MjQsMS4xMTIzNDUgLTAuMTExMjM1LC00LjAwNDQ0MiAtMS41NTcyODIsMS4wMDExMTIgLTMuMzM3MDM1LC0yLjIyNDY5MSAwLjMzMzcwMywtMy43ODE5NzMgLTIuNTU4MzkyOSwxLjAwMTExMiAtNC43ODMwODI5LC0zLjY3MDczOSAtMS4wMDExMTA0LC01LjU2MTcyNCAzLjY3MDczODIsLTQuODk0MzE4IDYuNjc0MDY5LC0wLjU1NjE3MiBoIDEuMzM0ODE0IGwgMC43Nzg2NDEsLTEwLjM0NDgwNzUgMy44OTMyMDgsNC44OTQzMTc0IDEuMDAxMTEsLTIuNzgwODYyIDEuMTEyMzQ1LDEuNzc5NzUxNyB6XCJcbiAgICBpZD1cInBhdGgxXCJcbiAgICBpbmtzY2FwZTpsYWJlbD1cInNtb2tlXCIgLz5cbiA8cGF0aFxuICAgIHN0eWxlPVwiZmlsbDojZmZlNjgwO3N0cm9rZS13aWR0aDoyLjM4MTI1O3N0cm9rZS1saW5lY2FwOnJvdW5kXCJcbiAgICBkPVwibSA0LjA5MDA0MjQsMzcuNDc4OTQ2IDAuMjc1MjkxMiwzLjAyODIwNCAtMS42NTE3NDc5LDEuNjkxMDc2IDIuMDA1Njk0LDEuMjU4NDc1IDAuOTA0NTI4NywyLjMyMDMxMSAyLjI4MDk4NSwtMi4wMDU2OTMgSCA5Ljg3MTE1OTggTCA4LjQ5NDcwMzQsNDEuNDkwMzMzIDkuNjM1MTk1OSwzOC42NTg3NjUgNi44ODIyODI4LDM5LjE3MDAyMiBaXCJcbiAgICBpZD1cInBhdGg2XCJcbiAgICBpbmtzY2FwZTpsYWJlbD1cInN0YXJcIiAvPlxuIDxwYXRoXG4gICAgaWQ9XCJwYXRoMTE0XCJcbiAgICBzdHlsZT1cIi1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0FyaWFsIEJsYWNrLCAgSGVhdnknO2Rpc3BsYXk6aW5saW5lO3N0cm9rZS13aWR0aDoxLjAwNVwiXG4gICAgZD1cIm0gMjYuMTA5NzA1LDE4LjcyODA1NyBjIC0wLjU5MDIsMC4wMDY2IC0xLjE3NzYzNSwwLjAzODc3IC0xLjc2NjIxNSwwLjA5ODU0IDAuMjI4MTM2LDQuNDM5ODkzIDAuMjI1NTQ1LDguMjgxNTc0IDAuMDE2NDksMTIuNTA2NzkgMC43ODAwMDcsMC4wNTUyNSAxLjU1NjM0OCwwLjA2NjcgMi4zNDA1NTgsMC4wMzg4NyAtMC4wMDU1LC0wLjI1ODU1MSAtMC4wMTA1NiwtMTIuMTMzMjczIDQuMDJlLTQsLTEyLjY0MjIzMSAtMC4xOTc1NDYsLTAuMDAzNSAtMC4zOTQ0OSwtMC4wMDQxIC0wLjU5MTIyNiwtMC4wMDIgeiBtIDQuODUzNDU5LDAuMjIzNzY5IGMgLTAuNTQxMzU2LC0wLjAyMDUzIC0wLjk5NzMzMSwwLjExNjI3MiAtMS4zNzA0OTUsMC40MDAwNCAtMC40NTkwNjEsMC4zNDUzOTcgLTAuODA4ODg1LDAuODQ3MzAyIC0xLjA0OTc1NywxLjQzODgwMyAtMC4wMTUxNywwLjAzNzI5IC0wLjAyOTY3LDAuMDc1MTEgLTAuMDQzOTcsMC4xMTMwNjIgLTAuMTY3ODE4LDAuNDQ3ODI3IC0wLjI3MjU5NSwwLjg5MjM4MyAtMC4zMTk1NTksMS4zMjQ1NjIgLTAuMDE5MjgsMC4xNzczNzcgLTAuMDI5MjMsMC4zNTMzMDcgLTAuMDI5NDUsMC41Mjc2MjcgLTIuMDJlLTQsMC4xODkwMjEgMC4wMDg4LDAuMzY2Mzg3IDAuMDI3MDksMC41MzMxMjMgMC4wNDgyMSwwLjQ0MDQ1MSAwLjE2MDc3NywwLjgxMzg3NCAwLjMzNDQ3NiwxLjEzNDk0NyAwLjA3NzYzLDAuMTQzMzM3IDAuMTY3ODk2LDAuMjc2ODE0IDAuMjcwNDg3LDAuNDAwODIzIDAuNDE0MTU5LDAuNTA0NTQyIDEuMTE1MjI0LDAuOTA0NTgzIDIuMTA3MzY3LDEuMTgzNjI2IDAuNjA4MTUyLDAuMTY2OTc2IDEuMDAwMTE1LDAuMzQxOTMgMS4xNjg3MDgsMC41MzQ2OTQgMC4xNjg5NTYsMC4xOTMxNzUgMC4yNTM2MSwwLjQxNTExNyAwLjI1NTU3LDAuNjc3NTkxIDAuMDAyMiwwLjI3NjE3MSAtMC4wODI5NCwwLjUzNjA0OSAtMC4yNTU1NywwLjc4MDQ0OSAtMC4xNjk3MDQsMC4yMzk1NjMgLTAuNDE1MzI4LDAuMzgzNDIgLTAuNzQyMzY4LDAuNDEyNjAxIC0wLjQzOTY1NiwwLjAzOTIzIC0wLjc3OTQ3OSwtMC4xNzYzIC0xLjAyMTg4MiwtMC42MjMwMjUgLTAuMTQ3NzA5LC0wLjI3Mzg0OSAtMC4yNDQwOTksLTAuNjY4MDU3IC0wLjI4OTcyNSwtMS4xNTY1MzkgLTAuMzM3MjcsMC4wMzkxIC0xLjE1OTI0MiwwLjEzNTU5NyAtMS40OTY1MTIsMC4xNzQ2OTkgLTAuMDA1Myw2LjA0ZS00IC0wLjMyNTY1NCwwLjAzNzgyIC0wLjMzMDk0MywwLjAzODQ3IC0wLjAwNTEsNi4wMmUtNCAtMC4yOTAxMjYsMC4wMzI3MiAtMC4yOTUyMjEsMC4wMzMzOCAwLjAzMTkyLDAuNjA2Mzg1IDAuMTI5NTExLDEuMjAzNzY1IDAuMzAxODk0LDEuNzc2MDI2IDAuMDk1OTksMC4zMTgzOTEgMC4yMTU1ODYsMC42Mjk0NTkgMC4zNTk2MDMsMC45MjY4ODEgMC4wNTk0MywwLjEyMjY0OSAwLjEyMjkxNCwwLjI0MjkwMSAwLjE5MDc5NCwwLjM2MDM4NyAwLjU0NDcwMSwwLjk0Mjc3MyAxLjQ3Mzg5NiwxLjM3NDg3NCAyLjc4MTgxNSwxLjEyMDgxNCAwLjczMjkzLC0wLjE0MjM2NyAxLjMwMTUxNywtMC40OTA3NzEgMS43MjczNDksLTAuOTUwNDMzIDAuNDIxMTc5LC0wLjQ2MTU3NiAwLjczNzczOSwtMS4wMzY4NCAwLjk2NzcxLC0xLjY0Mjk0NSAwLjIzMTk3LC0wLjYxMTM4IDAuMzYyNjM5LC0xLjE4OTU1IDAuMzY1MDk3LC0xLjc3MDE0IDAuMDAyMSwtMC40OTU4ODMgLTAuMDk0ODYsLTAuOTE2Mjk5IC0wLjI5OTE0NSwtMS4zMDQxNDggLTAuMTk5MDkxLC0wLjM4NDUzNCAtMC41MjU1MDIsLTAuNzE3MjU3IC0wLjk2ODA5OSwtMS4wMDE4NjMgLTAuNDM1NzAxLC0wLjI4NjM4NSAtMS4xNzA2NDMsLTAuNjAxOTI1IC0yLjE2MTU0MiwtMC45NTAwNDIgLTAuNDAxNzg0LC0wLjEzNzA5NyAtMC42NTQxNywtMC4yODA3NTggLTAuNzU5NjQyLC0wLjQzMTA1MSAtMC4xMDg3NzQsLTAuMTQ1Mzc3IC0wLjE2MTkxLC0wLjMwOTQwNSAtMC4xNTg5OTQsLTAuNDkzNDczIDAuMDA0LC0wLjI1MjU1OCAwLjA3NTcyLC0wLjQ3MTU2MyAwLjIxNTUyNCwtMC42NDU0MDEgMC4xNDA3NDEsLTAuMTgwNDEzIDAuMzQzNjY0LC0wLjI1ODkzOCAwLjYxMDA3MSwtMC4yMzE2MjIgMC4zMjM4MTIsMC4wMzMyMSAwLjU2OTA2NCwwLjE4OTI3IDAuNzQzMTUsMC40NDYzNjIgMC4xNzY1MzgsMC4yNTYwNjcgMC4yODg4NzcsMC42MzgwMzYgMC4zNDIzMzEsMS4xMDU4OTggMC43MjY1NjIsLTAuMDEzMjkgMS40NTA4NzEsLTAuMDE4MDEgMi4xOTE3NzEsLTAuMDE4MDUgLTAuMDg0ODgsLTAuOTc5OTU0IC0wLjMzMjk2OSwtMS45NTQ0NiAtMC43NDU1MSwtMi42NDk1MTggLTAuNDIwMTAzLC0wLjcyMDEwNSAtMS4wNzY3NzEsLTEuMjk2ODQgLTIuMDUyNDA1LC0xLjUwMzE4NCAtMC4xOTk0NjksLTAuMDQyMTkgLTAuMzg5NTcxLC0wLjA2NjU4IC0wLjU3MDAyMywtMC4wNzM0MSB6IG0gLTguMTk5NDExLDAuMTAwNTAyIGMgLTAuMzM3Mjg4LDAuMDYxOTEgLTAuNjcyNDIyLDAuMTMxODEyIC0xLjAwNjk2OCwwLjIxMDAzIC0wLjExNzg4MywwLjAyNzU0IC0wLjIzNTQ4NCwwLjA1NjE0IC0wLjM1MjkyOCwwLjA4NTU4IC0wLjU1MjEzOSwwLjEzODU4MSAtMS4wOTU1NDYsMC4yOTY0ODQgLTEuNjM3ODQsMC40Njc1NjIgMC4yNzEzNzUsMi42NzYwODEgLTAuNDM3MTE5LDQuOTY1NTg4IC0wLjcyMzEzMiw2LjMwOTE0MSAtMC4xNzUwMiwtMC43NjA2NDEgLTAuODM4ODc1LC00LjIxMzUyNSAtMS41Mjk0ODgsLTUuNTQ2NzUzIC0wLjk1NjcyMSwwLjMzMzU0MyAtMS45MjY0MjIsMC42Njc4OTIgLTIuODc4Nzg0LDAuOTExNTY4IDEuMTE3Nzc5LDIuNDg3NDc5IDEuMDYwNDI1LDQuOTg5NjUxIDAuMDIyNzcsNy40NzAzOTIgMC41OTU5MjcsMC4xNDY5IDEuMTk1NTc0LDAuMzI1NjUgMS43OTA1NTQsMC41MTI3MDkgMC4yNDU3MjcsLTAuNjczMTA5IDAuMjkyNywtNi4wOTk5NTYgMC4yOTc5NjcsLTYuMzM1NDQ0IDAuMTU0MDQsMC43MjU1ODkgMS4zNDQ4MDEsNS4wNzcyMTMgMS4wODk0MDgsNi43ODA2MjggMC41NDc5MjEsMC4xNzYwNjQgMS4wODk5NTksMC4zNDY1OTUgMS42NDY4NzEsMC41MDc2MDUgMC43MTYwODQsLTEuODU5NDE2IDEuNjE1ODIzLC02LjYzMDU4NCAxLjc1MjQ3NCwtNy44MDcyMjMgMC4wNjU4OCwxLjQ2MjE2OSAwLjE0MDA2Niw1LjU5NjkxMyAtMC4zMTk5NTMsOC4xODUyNzggMC4xNzIzMjgsMC4wNDA1NCAwLjM0NTExOSwwLjA3OTI1IDAuNTE4MjA2LDAuMTE1ODA5IDAuMTE3Mjc2LDAuMDI0NzkgMC4yMzQ1ODgsMC4wNDg1IDAuMzUyMTQzLDAuMDcxNDUgMC4zMzM2MTYsMC4wNjUwMiAwLjY2NzU4OSwwLjEyMjU3MiAxLjAwMzQzMywwLjE3MTk1MSAwLjM0OTQ0LC0zLjM2ODIzMyAwLjM1NTYyOCwtOC41NjI2MDUgLTAuMDI0NzMsLTEyLjExMDI4NyB6IG0gMTUuMjk0NDk4LDEuNjc2NzA3IGMgLTAuMzIxMDMyLDAuMDAxOSAtMC42MDc0NzQsMC4wNDc5MiAtMC44NjQ4NTUsMC4xNDYwMzkgLTAuNTAxOTUyLDAuMTg4NzY0IC0wLjg5NDE2MiwwLjUyMDk3NCAtMS4xNjA4NTYsMC45NjY5MjMgLTAuMjYxNDIzLDAuNDM5MzExIC0wLjM4NzQ4MiwwLjkwNzk3NyAtMC4zODk4MzEsMS4zODIyNzIgLTAuMDAzNSwwLjcxNzAxNiAwLjIzNDg1OSwxLjI3ODYgMC42ODQyNjQsMS43MDAyNjIgMC40NTA0ODMsMC40MjU5MiAxLjE5NzM4NywwLjc1MDAyOSAyLjI1ODUxMSwwLjk4MjIzMSAwLjY0NzksMC4xMzg0OSAxLjA1OTExMywwLjI4MzA5OCAxLjIzMzQ4NCwwLjQzODkwNiAwLjE3NDMxOSwwLjE1NTc2MyAwLjI1NzQxMSwwLjMzMjE4NiAwLjI1MTI0OSwwLjUzMzUxMyAtMC4wMDY1LDAuMjExOTc1IC0wLjEwNTg4OCwwLjQwMzEzMyAtMC4yOTU2MTEsMC41Nzc4NzYgLTAuMTg1OTEzLDAuMTcwNzYyIC0wLjQ0ODUyMywwLjI2OTU0NyAtMC43OTEwNDcsMC4yODk3MjUgLTAuNDYwNDAzLDAuMDI3MTMgLTAuODE0NDczLC0wLjExOTk4NCAtMS4wNjI3MTIsLTAuNDUxODYgLTAuMTUxOTE2LC0wLjIwNDM2NyAtMC4yNDc3MjgsLTAuNTAzOTc0IC0wLjI5MDExNywtMC44OTE5MzkgLTAuNzcwMDg1LDAuMDY2NzkgLTEuNTIxMzA0LDAuMTM5NjA3IC0yLjI3Nzc0NSwwLjIyMDYyOSAwLjA1OTQ0LDAuODg3MDQyIDAuMzYxODE3LDEuNjg5ODY0IDAuOTM0MzM5LDIuMjk5NzMxIDAuNTk5MjM3LDAuNjM4MzI5IDEuNTM2OTYzLDAuNzgwMzkyIDIuODM1NiwwLjU2NzY3IDAuNzI1Mzk3LC0wLjExODgyNCAxLjMxMTQ2LC0wLjMyOTg3NyAxLjc2MTUwMywtMC41OTc4OTkgMC40NTEyMjQsLTAuMjcyNjkzIDAuODE2NjI1LC0wLjYxNDM2IDEuMDkxNzYyLC0xLjAyNzc3MyAwLjI3NzUxMywtMC40MTY5ODEgMC40Mzk2MjMsLTAuODU0NjA0IDAuNDU5NzEsLTEuMzM1NTU1IDAuMDE3MSwtMC40MDg3MzUgLTAuMDc2NjYsLTAuNzc1OTQ3IC0wLjI4NTAxMiwtMS4xMDcwNzQgLTAuMjA0NTMsLTAuMzMwNzA5IC0wLjU0MjUzMSwtMC42MDYwOTcgLTEuMDA5NzA5LC0wLjgzMzgzOCAtMC40NzIxMjMsLTAuMjM1MzQ2IC0xLjIyMzk4NCwtMC40NjA5NTMgLTIuMjk3NzY5LC0wLjczODA0OSAtMC40Mjk2NzEsLTAuMTA3NzY2IC0wLjcwMTI2NywtMC4yMjI3ODQgLTAuODE2MTczLC0wLjMzOTE4OSAtMC4xMTg0MjgsLTAuMTEyODI3IC0wLjE3NzY2MSwtMC4yMzgyNzkgLTAuMTc3ODQsLTAuMzc1MzA1IC0yZS00LC0wLjE4ODA4NyAwLjA3MjMzLC0wLjM0NDg5MyAwLjIxNTkxOSwtMC40NjQ4MTMgMC4xNDQzOTUsLTAuMTI0NTYxIDAuMzU0NzYyLC0wLjE3MTc1OCAwLjYzMzIzMSwtMC4xNDY0MzMgMC4zMzc2ODgsMC4wMzA3MSAwLjU5OTQ2NCwwLjE0MDgxOCAwLjc4OTg3LDAuMzIyMzA3IDAuMTkzMzEzLDAuMTgxMTQgMC4zMjY1NzYsMC40NTQzMDQgMC4zOTcyOSwwLjgwOTQ5NyAwLjc2MzM2NCwtMC4wMTc0OSAxLjUxNzkzNywtMC4wNDA3NCAyLjI3Nzc0NiwtMC4wNzQyIC0wLjEzMDk4NSwtMC43NzA5OTQgLTAuNDU1MjIsLTEuMzY2NjY1IC0wLjkyMzM0NywtMS43ODMwOTQgLTAuNDYzNTkzLC0wLjQxODk0IC0xLjE2MjQzOSwtMC43NTgzNzUgLTIuMTEwNTA4LC0wLjk0OTY1MSAtMC4zOTQ4NjMsLTAuMDc5NjcgLTAuNzUwMzE5LC0wLjEyMjY2NiAtMS4wNzEzNDYsLTAuMTIwOTExIHogbSA0LjcwOTc3NiwxNS40NDMyODQgMS41Mjc1MjUsNS40ODQzMzMgMS4yNzMxMywtMC4zMjU4NDEgLTEuMTgzMjM2LC0zLjAyMTI5IDIuMzAyNDg0LDEuODc4ODg1IDEuMDAxODYsLTEuMTI4NjY3IHogbSAxLjMwMzc1Miw0LjY4MDcyMyAtMC42NzY4MDYsMC41MTc4MTIgMS4xNzAyNzYsNC4zNTYwNjEgMS4xNjQ3ODMsLTAuMzEzMjc5IC0wLjk2MDY0LC0zLjU3NTYxMiAwLjU5NDM2NSwtMC40NTQ2MDggLTEuMDY4MjA1LDAuMjczMjM2IHogbSA1LjA4MTU0OCwtMi4yMTMzNjIgLTAuOTY3NzEyLDAuNzE5OTkxIDEuODk0MTk3LDIuNTQ1NDgzIDAuOTY3NzA0LC0wLjcxOTk5IHogbSAtMC4wNjYzMiwwLjA0OTQ2IC0xLjU3Njk5NywwLjI2NDk5MSAwLjE3OTgwNCwwLjEwNTYwMiAtMC45ODQ1ODYsMS4xMDkwMzggMC4wMDY5LDAuMDM5NjQgMS44NzE0MjksLTAuMzE0NDU4IC0wLjM5NzY4OSwtMC41MzQyOTkgeiBtIDEuODg5ODc1LDIuNTQ4NjI0IC0wLjg5NzA0NiwwLjY2NzM4NSAtMC4yNzc1NTIsLTAuMzcyOTUgLTAuMTA3NTczLDMuMzM3NzA4IDEuMjA1MjIyLDAuMDM5MjYgMC4xMTg1NTcsLTMuNjcwMjI1IHogbSAtMS4yNTc0MzUsMi44NjA3MjYgLTIuNTQ3MDQ5LDEuNTQ4MzMyIDAuNjI2NTUzLDEuMDMwNTIxIDIuOTE4ODI1LC0xLjc3NDA2NiAtMS4wMjMwNjUsLTAuMDMzMzggeiBtIC00LjE3NTQ2OSwwLjYyMzAyNCAwLjE4NjA3OCwwLjY5MjExNyAtMS4wNjQ2NzEsMC4yODYxOTEgMy4xMDI5NDIsMS4wMzQ0NDUgMC4wMjMxNiwtMC4wNjkwOSAtMC42MTkwOTMsLTEuMDE4MzUxIDAuNDA2MzIsLTAuMjQ2OTMyIHogTSA4LjE4OTYzOTEsMS40Njc5MTM5IEMgNy41NTM5NTAyLDEuNDY4MjM1OCA2Ljg4MjkzMzksMS42NTM3NTI1IDYuMjQzMjMwNSwyLjA4NDY1NTYgbCAwLjQ5Nzc5MTMsMC43Mzg0NDIyIGMgMC43Njg2Njg1LC0wLjUxNzc3NDkgMS40ODk2MjMsLTAuNTYxMTM1OCAyLjE0OTM3MDUsLTAuMzU5OTk1IDAuNjU5NzQ4NSwwLjIwMTE0IDEuMjUwMzUxNywwLjY3NjM0NzggMS42MjEzNTE3LDEuMjEyNjc3MSAwLjM3MTAwMywwLjUzNjMzMDQgMC40OTYwMywxLjExMjQwMDggMC4zODQ3MywxLjQ3MTM4NzMgLTAuMTExMzAzLDAuMzU4OTg3NiAtMC40MDUxNzIsMC42NDYzNTE2IC0xLjMwNjExMiwwLjY4MjMwMyBsIDAuMDM1NzMsMC44ODk5NzczIEMgMTAuNzUxODQsNi42NzQ1MzAzIDExLjUxNzUyMiw2LjE1MDEwOTQgMTEuNzQ2ODA2LDUuNDEwNTg4MSAxMS45NzYwODcsNC42NzEwNjY3IDExLjcyMjcxMSwzLjg2MTUzMjEgMTEuMjQzOTEsMy4xNjkzNTMgMTAuNzY1MDk5LDIuNDc3MTczOSAxMC4wMzQ2MzEsMS44ODA5NDA3IDkuMTQ5ODkwMiwxLjYxMTIwNTIgOC45Mjg3MDQyLDEuNTQzNzc3MyA4LjY5NzUzNzksMS40OTg0NzY4IDguNDU5NzM1MSwxLjQ3ODkwNTcgOC4zNzA1NTY5LDEuNDcxNjE0IDguMjgwNDUzOCwxLjQ2Nzg2MzkgOC4xODk2NDEyLDEuNDY3OTE2IFogTSA1LjA0NjY0ODUsMC44NjY4NzU0NyA0LjYyNzc2NjMsMS43ODA0MDcyIDYuNjY4Nzg2NiwyLjcxNTkyMzYgNi4yNDMyMzA1LDIuMDg0NjU1NiBDIDYuNDY4MzE3NSwxLjkzMzAzNzIgNi42OTc1NTc4LDEuODIyMDY2MSA2LjkyNzQ5NywxLjcyODU4NjkgWiBNIDUuMDQyNjksMC44NTM5MTY5OCAyLjE3MTc1NjgsMS45NDkyMTM1IDIuNTMwMTgxOSwyLjg4ODI2MzEgNC45OTQwMTAzLDEuOTQ4MDM1MyA0LjYyNzczNCwxLjc4MDQwNDEgNS4wNDY2MTUxLDAuODY2ODcxMyBsIDAuMDAxMjUsNC4wMjA5ZS00IHogTSAyLjExNDA0ODksMS45ODQxNTI0IDEuMjg1MzEyOCw0LjMyMjM1NTMgMi4yMzI2MDc1LDQuNjU4NDAyIDIuOTExNzY5OCwyLjc0MjYxNTYgMi41MzAxODE5LDIuODg4MjYzMSAyLjE5NjA5NzgsMi4wMTMyMDM3IFogbSAwLjI2MjI0MTYsMi4yNjk1MDEgLTAuMTQzNjgzLDAuNDA0NzQ4NiAtMC44OTIzMzM2LC0wLjMxNjQxODQgLTAuMDMzMzc1LDAuMDE2NDkgMS4wMzk1NTEsMi4xMDAyOTg5IDAuOTAwNTc2NCwtMC40NDU1NzgyIHogbSAwLjgzMTg3NjYsMS42ODE0MTcgMC4wMzg4NjUsMC4wNzgxMjYgTCAyLjM0NjQ1NTcsNi40NTg3NzM1IDIuMTU0MDkyLDYuMDcwMTE4OSBDIDEuNTIwNTc1LDYuMzA2NzM3MyAxLjAzOTA5ODQsNi44MDkwNTI4IDAuODQzNjYxNzMsNy40MTk4MDY5IDAuNTQxNjExMjQsOC4zNjM3NDUyIDAuOTQzNDc1NDIsOS41Mzg5ODQyIDIuMTIxMTE1NSwxMC4yNDgzNDIgTCAyLjYzOTcxMjQsOS4zODc0MTQ4IEMgMS43NjkzNzkxLDguODYzMTY1OCAxLjY0MTM4NTksOC4yMjQxMTAyIDEuODAwNzcxMiw3LjcyNjAxODkgMS45NjAxNTQzLDcuMjI3OTI4NSAyLjQyODE1NTcsNi44NDM1NjM1IDMuMTcyODM1NSw2Ljk0MjAzODcgTCAzLjMwNDc0MjIsNS45NDU2NzE2IGMgLTAuMDMyNDA2LC0wLjAwNDI3IC0wLjA2NDQ4LC0wLjAwNzYgLTAuMDk2NTc0LC0wLjAxMDU5NCB6IE0gNS4wODU0ODEyLDkuMDE5NTY2NiBDIDQuNTAzNzYxNyw5LjA0MDIyMzEgMy45ODcxOTQxLDkuMjQ0OTk0MyAzLjU0MzAzNjcsOS4zNDU3OTk2IDMuMDk4ODc5Myw5LjQ0NjYwMyAyLjgwMDYzODMsOS40NTYyMTc2IDIuNTQzMTM3Myw5LjI4MjU5MDUgbCAtMC4wMTc2NjcsMC4wMjYzMDIgYyAwLjAzODk5LDAuMDI2MDk0IDAuMDcxNzcyLDAuMDUyOTM4IDAuMTE0MjQsMC4wNzg1MTEgTCAyLjE0MjcwNTMsMTAuMjEyMjE1IEMgMi42ODU1Mzk5LDEwLjQ5Nzk3NyAzLjI3Nzg3NiwxMC40MzYzNjggMy43NjU2Mjc4LDEwLjMyNTY3IDQuMzAyMTU0OSwxMC4yMDM5IDQuNzg1MTU1NiwxMC4wMzU3MDkgNS4xMjEyMDQzLDEwLjAyMzc3NiBaIE0gNy44MDAxNjY3LDguNTQ0MTUyNyA2Ljc2ODQ2OSw5LjE5NTQ0MTcgYyAwLjI0MjQ0NzcsMC4zODQwMjEyIDAuMjA4NzE3MSwwLjYwNTY3NTkgMC4wOTM0MjgsMC44MjgzNDIzIC0wLjExNTI4MzYsMC4yMjI2NjYgLTAuMzg0NjA0NiwwLjQzNDkyMSAtMC42ODExMjU4LDAuNTIxNzM5IC0wLjI5NjUyMDMsMC4wODY4MiAtMC41NzQ4MDksMC4wNTE3NiAtMC43NjM5NTkyLC0wLjA4Nzk0IC0wLjExMjExMDYsLTAuMDgyOCAtMC4yMjQzNCwtMC4yMTUyOTUgLTAuMjk2MDA0NCwtMC40NTAyODQgbCA0LjAyZS00LDAuMDE2NDggYyAtMC4yOTcyMzg5LDAuMDEwNTYgLTAuNzE5MTM2NywwLjE0MjczMyAtMS4xODE2NjQxLDAuMjU3NTMyIDAuMTM5MjIyNSwwLjQ5ODk1OSAwLjM5OTA0OTYsMC44OTYyMTIgMC43NTI1NzU3LDEuMTU3MzI0IDAuNTUyODgzNywwLjQwODM1OSAxLjI0MjEyMjEsMC40NTA0NzQgMS44MzEzODIyLDAuMjc3OTQ2IEMgNy4xMTI3NjI2LDExLjU0NDA1MiA3LjY0NzMwNjUsMTEuMTYwNTc3IDcuOTQ1NDI0NiwxMC41ODQ3NzMgOC4yNDM1NDQ5LDEwLjAwODk2OSA4LjIzMjgxOTgsOS4yMjk0MjY0IDcuODAwMTcxLDguNTQ0MTQ0MyBaIE0gOS4xNTkyNzY3LDUuMjcxMjE4OCAxMC4yNjgzMTMsOS41MzI2Njc1IDcuODAxNzM2NSw4LjU0NjkwMDUgQyA4LjA1OTUzMTMsOC45NTY0Mzg4IDguMTUxNDM3Niw5LjM5NTY1MTMgOC4xMzIyODk0LDkuODA4NjUgTCAxMS42Mzk5ODQsMTEuMjg1NTM0IDEwLjY4NjgwMiw3LjA4MDYxNzQgMTAuMjk5NzE4LDYuNjIyMDgzOCBjIC0wLjIwNzc3NCwwLjA1MTc3MiAtMC40MzA1MTkzLDAuMDg3NjU3IC0wLjY3MzY2NDksMC4wOTczNTUgbCAtMC4wMzU3MywtMC44ODk5NzcgYyAwLjAxNDQ2OCwtNS44MzNlLTQgMC4wMjIzNTUsLTAuMDA0MDcgMC4wMzY1MTEsLTAuMDA0NjggeiBtIC0xLjM3NTU5NzYsMy4yNjg2MTUgLTQuMDIyZS00LDAuMDE0OTE3IDAuMDE0NTIxLC0wLjAwOTA2IHogTSAxMS4zMDUxMTUsMzkuMTQ5MjQ0IDcuMDc3NDI3OSwzOS42MzM2ODYgNy4zOTU4MDk4LDQwLjc0ODIxNyA5Ljg1MDIxNjIsMzkuOTcyODczIDguNjIzMDEzLDQyLjU0MTUyIDkuNzEzOTkwNiw0Mi44MzI0MjMgWiBtIC0yLjgwNDU4NjgsMy4xMzkwNjIgMC4xNDkxNzk5LDAuMTk3NDY5IDAuMDc2MTU3LC0wLjE1OTc4MiB6IG0gMC4yMDgwNjcyLDAuMjc1OTg0IDEuNzE3NTM0NiwyLjI3NzM1NCAwLjk2MjYwNCwwLjIwOTI0MyAtMS42NTA3OTUxLC0yLjI3NDIxMSAtMC4wMjM5NDgsMC4wNTU3NSB6IG0gLTQuMTg0MTEwNSwtNS4yMTUwMjIgMC40NjAxMDM0LDEuNDIzMSAyLjU1MzMzNTcsMi4wOTI4NCB2IC0wLjE2MTc0MyBsIC0wLjE0MjExNDIsMC4wNDQ3NSAtMC4zMTgzODE5LC0xLjExNDUzMSAwLjMzNDQ3NzksLTAuMDM4NDcgeiBtIDAuMTY3MjM4NSwwLjA4MzYyIC0wLjAwMzU0LDAuMDQzOTcgMC4wMzMzNzUsMC4wMjU5MSB6IG0gLTAuMDI3NDgsMC4zNDg5OTggLTAuMjY1Mzg0NSwzLjM3NjE4MyAtMi42Nzg5NjExLDIuMDUwODM0IDMuNDc0MzI2OSwxLjI5Nzg2NiAwLjk2MjYwNTIsMy41OTk1NjEgMi40Mjc3MTAzLC0yLjkzMDIxMiBIIDExLjU1NTk3MiBMIDEwLjk2MzU3MSw0NC40NjUxNTcgMTEuMzg4NzM0LDQ1LjA1MDg4NCAxMC40MjYxMyw0NC44NDE2NDIgMTAuMDAxNzUxLDQ0LjI3OTA3NSA4LjUwMDUyOTMsNDQuMDQ2Mjc2IDYuNTc1MzE4OCw0NS43NjIyNCA2LjE1NjgzMDQsNDMuOTIwNjUgNC4yNzMyMzQsNDIuODMyNDIxIDUuNjU0MzI4Niw0MS44Mjc4MDkgNS40NDUwODM0LDM5LjE5MDg1NCA1LjQxNzk4OTMsMzkuMTI3NjQ1IDQuOTg0NTgyMSwzOC43NzIzNjMgWiBNIDQ4LjgwMTU3Nyw1LjM3MDkzNzYgYyAtMC41MDU5MTQsMC4xNjIyNDc4IC0wLjk3NDEyNSwwLjM1NjQyNTEgLTEuNDEyNTAyLDAuNTczMTY1MiAtMC42NDg2OTYsMC42ODU0MTU1IC0xLjE0NDU5LDEuNDIwNzgwNSAtMS41ODY0MTcsMi4xNjU4NjAzIC0wLjI1MzQwMSwwLjQ2Mzc4NzggLTAuNDg2ODMsMC45MzA0MjA0IC0wLjcyMTU1OCwxLjM5MTY5MzcgMC4wODIyMiwwLjA5OTQ2IDAuMTY0MzUsMC4xOTkxNjggMC4yNDYxNDYsMC4yOTkxNDUyIDAuOTAwMzU5LC0wLjk1NTM0NDggMS43NTA2NTQsLTEuOTIzNjc0IDIuODg0Njc4LC0yLjY2ODM2MSAwLjI1NTEyNSwtMC4xNjMyMzExIDAuNTI0MDg1LC0wLjMxNTExNTMgMC44MTA2NjksLTAuNDUzMDM2NyAwLjE1MDEyMiwtMC4zMTQzODkxIDAuMzIxMzAyLC0wLjYyNjE5NCAwLjUxNjY0MSwtMC45MzUxMjM3IC0wLjEwMTI2MiwtMC4xMTAzNTU1IC0wLjIwNjQ5MSwtMC4yMTg1NTk5IC0wLjMxNTYzNiwtMC4zMjQ2NjMyIC0wLjE0MDYxLC0wLjAxODk1OSAtMC4yODEyNzMsLTAuMDM1MjIgLTAuNDIyMDIxLC0wLjA0ODY3OCB6IG0gMS4wODQ2OTcsMy40ODg4NTIxIGMgLTAuNjQyNTQ0LC0wLjAwMTI1IC0xLjI2Nzc0NCwwLjAyODEzNiAtMS44Nzc3MTIsMC4wODI0MzkgLTEuNzA4NjM2LDAuODA5NzI2MyAtMy4xNjgzNjcsMS44MjMyOTczIC00LjUzMzg5NywyLjg5NDQ4NzMgLTAuODA5NjI5LDAuNjgyNDUyIC0xLjU4MzMzMywxLjM4NTA1IC0yLjM1NjI2MiwyLjA3NjM1MiAwLjA4MTQzLDAuMjQ1Mzg0IDAuMTYyMzM4LDAuNDkxMjEgMC4yNDI2MTUsMC43MzcyNjQgMi4zNzQ0MzIsLTEuMTMxMzc1IDQuNjY0MzEyLC0yLjMyMzI3IDcuMzIyMzg5LC0yLjg5MTc0IDAuNTk0ODg5LC0wLjExOTg0OCAxLjIwNzQ3OCwtMC4yMDg1NTUgMS44NDI3NjcsLTAuMjU4MzE3IDAuNTA4MzY3LC0wLjQ3ODMyNyAxLjA1NDQ2OSwtMC45MzY3MzEgMS42NDMzNCwtMS4zNzIwNjUgQyA1Mi4wNjA0MjMsOS44NDg2NjYzIDUxLjk0MTkyLDkuNTcwNTE0OSA1MS44MTUwMTQsOS4yOTMxOTM4IDUxLjU2NjE0LDkuMTU1ODAzNiA1MS4zMTUxNjMsOS4wMjM1MDMxIDUxLjA2MjA1LDguODk2Mjk1NCA1MC42NjM1ODUsOC44NzIzNDcyIDUwLjI3MTc5Myw4Ljg2MDU0NDkgNDkuODg2Mjc0LDguODU5Nzg0NSBaIE0gMzkuODUyNzI5LDMwLjQ3MzYzOCBjIC0wLjIxMTE4Niw5LjgyZS00IC0wLjQ0NDUyMSwwLjAwNDcgLTAuNzA0Mjg5LDAuMDA5NSBsIC0wLjkxNzQ1NiwwLjM2MTU2NiBjIDEuODkyMDcsLTAuMDM0NTMgMi40ODI3NzgsMC40ODA2ODEgMi45MDc4MzEsMS4xMDAwMDggMC40MjUwNjEsMC42MTkzMjIgMC43NTQ4NjUsMS40NDQ2NzUgMC4zNjM5MjEsMi4xNTkxODUgLTAuMzkwOTM0LDAuNzE0NTA4IC0xLjA5NjQ1NSwwLjkwNDI0MSAtMS45MzEwOTQsMC45OTI0NCAtMC44MzQ2NCwwLjA4ODIgLTEuODU3ODg4LDAuMTE1OSAtMi45MDU0NzksLTEuMTk2NTgxIGwgMC4xODc2NTMsMS4wMzgzNzIgYyAxLjE4NjE0OCwxLjQ4NjA3IDEuNjExNDAyLDEuNTkwMzY2IDIuNzk2NzM1LDEuNDY1MTA3IDEuMTg1MzMxLC0wLjEyNTI2NCAyLjY3NTczMiwtMC42NDE2NjkgMy4xOTk1MjEsLTEuNTk4OTc3IDAuNTIzNzksLTAuOTU3MzEgMC4wOTMyLC0yLjQxNDI4MSAtMC41NjM3NCwtMy4zNzE0NzIgLTAuNTc0ODI2LC0wLjgzNzU0MSAtMC45NTUyOTIsLTAuOTY1NTI1IC0yLjQzMzYwMywtMC45NTkwNjkgeiBtIDAuMTk3NDY4LC0xNC42MTAyMzMgYyAtMS44OTQsMS4wNjU3OTEgLTMuNTI0NDg4LDIuNTMzNzA4IC00LjQyNDM3LDQuMjM1MTQ2IDEuMjE3NDU4LC0xLjM0NTIxMiAyLjkwMzUyMSwtMi4yNTUzNDggNC42OTY4MiwtMi44Mjg1MzQgLTAuMDk1NjgsLTAuNDY3ODk0IC0wLjE4NjMxMiwtMC45MzcwMTkgLTAuMjcyNDUsLTEuNDA2NjEyIHogTSAxMy45NzkwMDYsMjYuNzQ5MjM3IGMgLTAuNjIzMDQ2LDAuNjQwNDA3IC0xLjE4NDE4MywxLjI1NzYzOCAtMS43OTY0NDQsMS43NzE3MDkgLTAuNjA3Mzg1LDAuNTA2NzIxIC0xLjI3MTQwNCwwLjkzOTUwMiAtMi4wMTM5MzEsMS4xNTMzOTkgMC4zNDM3NjQsMC41NzM0ODEgMC43OTcxNjYsMS4wOTc1OTUgMS4zMjc3MDIsMS41NzExMDIgMC41NzAzNDMsLTAuNTM0NDE0IDAuOTg4OTQ1LC0xLjEzMDI1NiAxLjMxNDc1LC0xLjczMzYyOSAwLjQ4Njk5NiwtMC45MDI3NjcgMC43OTA1NzksLTEuODE3Nzc2IDEuMTY3OTIzLC0yLjc2MjU4MSB6IG0gMTMuNTMzMzg2LDUuOTcxOTE3IGMgLTAuNTAyMjk5LC0wLjAwNTIgLTEuMDE4MjY5LDAuMDc0NzEgLTEuNTExNDMsMC4yODU0MDUgLTAuNTc1NDMxLDAuMjQ1NDMxIC0xLjExODExOSwwLjY5MjczIC0xLjQ3MjE3MywxLjM0MDY1NyAtMC40MjEzNDcsMC43OTM4MjYgLTAuNTQyNDE1LDEuNzc5NjM1IC0wLjQ1MzQzLDIuNzA1NjU4IDAuNDYzMjA3LC0wLjA4MTExIDAuOTIzMTg0LC0wLjE3MjA3NiAxLjM3OTUyNCwtMC4yNzIwNTggLTAuMTczOTQ3LC0wLjczNTMzOSAtMC4yNDE5NDQsLTEuNDg2MjMyIC0wLjAxMDYsLTIuMDc1OTU5IDAuMTUzMzYxLC0wLjQ1MzgzNyAwLjQ5MjQ5MSwtMC44NTUwNiAwLjg5OTM5OCwtMS4xMzQxNjEgMC40MTEwNjEsLTAuMjgyNDQzIDAuOTA5MjY3LC0wLjQ1MDQ4OCAxLjQyNjYzMywtMC41MzE5NDYgMC40NjA2NDIsLTAuMDYzNiAwLjkxMjQ5NCwtMC4wNjc4NCAxLjMxMTYwNywwLjA0NDM2IC0wLjM3NjA1NCwtMC4yMTM4NjUgLTAuODUyNDQ2LC0wLjMyMTI3IC0xLjM1NTE4NCwtMC4zNTQ0OTkgLTAuMDcxMDksLTAuMDA0IC0wLjE0MjU5LC0wLjAwNjcgLTAuMjE0MzQ3LC0wLjAwNzQgeiBtIC0xMC4yMDkwMjUsMi4yMDI3NjEgLTIuODU1NjIyLDAuODcyNzA1IDAuNDE3NzA0LDQuOTk5MTA0IDIuMjk4NTUyLC0xLjE5MDMgLTIuMDg5Njk5LDEyLjQ1NzMyNiAxMC41MTgzNzcsLTEyLjkzMzUyNSAtMC42OTY0MzcsLTEuOTA0NDAxIC03LjM4MzYzMSw4LjU2OTYxMiAyLjE1OTE4OCwtMTAuMDc3MTE2IC0zLjEzNDM1NSwxLjk4MzcwMiB6IE0gMzguMjg5NDgsMTMuMjU4MjUgYyAtMC4wNjg5NiwwLjAwMjEgLTAuMTM3MzI4LDAuMDE0MDcgLTAuMjAyOTY1LDAuMDM2MTIgLTAuMTc2OTI4LDAuMDU5NTEgLTAuMzIyOTU1LDAuMTg2ODkxIC0wLjQwNTkyNywwLjM1NDEwNSAtMC4xNzI4LDAuMzQ3OTg5IC0wLjAzMDc5LDAuNzcwMTc0IDAuMzE3MjA0LDAuOTQyOTc3IDAuNDM2OTk3LDAuMjE3IDAuNjAxNjgsMC40NzA2NiAwLjc1Njg5MywwLjg3NjIzNiAwLjEwODgyNSwwLjI4NDM3MiAwLjE4MzY0NiwwLjYzOTgwMyAwLjI4MTQ3OSwxLjAyOTczNiAwLjMyODQ5MywtMC4yMjI4OTUgMC42NjQ2NzcsLTAuNDM3NDI3IDEuMDE0MDMzLC0wLjYzNDAxNiAwLjA4NjE0LDAuNDY5NTkxIDAuMTc2NzY2LDAuOTM4NzIgMC4yNzI0NSwxLjQwNjYxMiAtMC4yMTE0OTcsMC4wNjc1OSAtMC40MjA5OSwwLjE0MDc0NiAtMC42Mjg5MTMsMC4yMTc4ODIgMC4xMTY4NzIsMC4wMjY3IDAuMjQxOTg5LDAuMDI0MzkgMC4zNjQ3MDcsLTAuMDEzNzUgMC4zNzEwOTgsLTAuMTE1MjEzIDAuNTc4NTEsLTAuNTA5NDc0IDAuNDYzMjQzLC0wLjg4MDU1NSAtMC4xMzk2MjcsLTAuNDQ5MjAxIC0wLjIyMTYyMiwtMS4wMjQxMTMgLTAuNDUzMDM1LC0xLjYyODgxMiAtMC4yMzE0MTYsLTAuNjA0Njk4IC0wLjY3NDM1NywtMS4yNTA3OTkgLTEuNDQ1MDg1LC0xLjYzMzUyMiAtMC4wODI3NSwtMC4wNDExMiAtMC4xNzI4MDEsLTAuMDY1NTMgLTAuMjY0OTkxLC0wLjA3MTg0IC0wLjAyMzAyLC0wLjAwMTYgLTAuMDQ2MTEsLTAuMDAxOSAtMC4wNjkwOSwtMC4wMDEzIHogbSAyLjA4NDk4NywyLjc1NTkwNiBjIDAuMDQ4MjMsMC4yMDM2NSAwLjA5MzcxLDAuNDA3MzE3IDAuMTQ3MjE3LDAuNTc5NDQ3IDAuMTE1MjY3LDAuMzcxMDgyIC0wLjA5MjE1LDAuNzY1MzQyIC0wLjQ2MzI0MywwLjg4MDU1NiAtMC4xMjI3MTgsMC4wMzgxNSAtMC4yNDc4MzUsMC4wNDA0NCAtMC4zNjQ3MDcsMC4wMTM3NSAtMC4wNDg1NiwwLjAxODAxIC0wLjA5NDE3LDAuMDQxOTIgLTAuMTQyNTA2LDAuMDYwNDYgMC4wODQ5NiwwLjAzNCAwLjE3Njg1MSwwLjA1NDcyIDAuMjczNjI4LDAuMDU3NzEgbCAzLjg0NzY2OSwwLjExODU1OCBjIDAuNDQzODE3LDAuMDEzNjUgMC44MTQ2NzQsLTAuMzM1MDU4IDAuODI4MzQsLTAuNzc4ODc3IDAuMDEzNjgsLTAuNDQzODE5IC0wLjMzNTA2LC0wLjgxNDY3NiAtMC43Nzg4NzcsLTAuODI4MzQzIHogbSAxLjc1NDQzNCwxNC41NDYyNDEgYyAtMC4xOTg3OTUsLTAuMDA3NCAtMC4zODMyNzcsMC4wNTgzOCAtMC41MjgwMTMsMC4xNzI3MzQgMC4yNTIwNSwwLjE0NDcyNSAwLjQ1NDQ2LDAuMzYzMDMzIDAuNjg1NDQ0LDAuNjk5NTc3IDAuMTU2NywwLjIyODMyNSAwLjI5ODk5LDAuNDg2NDM2IDAuNDIwMDYsMC43NTgwNzIgbCAyLjU1OTIyMSwwLjA5NSBjIDAuNDQzODU0LDAuMDE2NTcgMC44MTcwNTksLTAuMzI5OTEyIDAuODMzNDQ1LC0wLjc3Mzc3NSAwLjAxNjMzLC0wLjQ0MzcwMiAtMC4zMzAwNjksLTAuODE2NjU4IC0wLjc3Mzc3MiwtMC44MzMwNTMgeiBtIDYuMzk3ODY3LC0zLjkwNjU1NyBjIC0wLjAzNTAyLDkuODJlLTQgLTAuMDY5NzQsMC4wMDQxIC0wLjEwNDQyNywwLjAwOTggLTAuMjEwNTYzLDAuMDM0MDggLTAuMzk4OTU4LDAuMTUwNDU1IC0wLjUyMzY5NywwLjMyMzQ4NCBsIC0yLjY1Nzc2NywzLjY4ODY3OCAwLjA4NDQxLDAuMDAzMSBjIDAuNDQzNzAyLDAuMDE2NDEgMC43OTAxMiwwLjM4OTM1MSAwLjc3Mzc3MiwwLjgzMzA1MyAtMC4wMTQxMiwwLjM4MjM1OSAtMC4yOTc5OTUsMC42NzcxMTMgLTAuNjU4NzQ5LDAuNzQ1MTE2IDAuMzEzODgxLDAuMDg1MTcgMC42NjEwNTksLTAuMDI1MyAwLjg2MjQ5NiwtMC4zMDQ2NDEgbCAyLjkwMDc2OSwtNC4wMjUxMTUgYyAwLjI1OTU2OSwtMC4zNjAzMzkgMC4xNzc4MzUsLTAuODYyODggLTAuMTgyNTQ3LC0xLjEyMjM4NiAtMC4xMTQ0ODQsLTAuMDgyNSAtMC4yNDg2NTksLTAuMTMzMzk4IC0wLjM4OTA1LC0wLjE0NzYwOCAtMC4wMzQ5NSwtMC4wMDM1IC0wLjA3MDIsLTAuMDA0NiAtMC4xMDUyMDksLTAuMDAzNSB6IG0gMC42Mjg5MTQsLTQuMzgwNzkyIGMgLTAuMDMwMDgsLTQuMDJlLTQgLTAuMDYwMzIsNi4wM2UtNCAtMC4wOTAyOSwwLjAwMzUgLTAuMzczMzE4LDAuMDM2MzMgLTAuNjcxOTEzLDAuMzI1OTY5IC0wLjcxOTU5OSwwLjY5ODAwNSBsIC0wLjUzMDc2Miw0LjEyODc1OCAwLjA4MzYyLC0wLjExNjIwNiBjIDAuMTI0NzM5LC0wLjE3MzAzIDAuMzEzMTM0LC0wLjI4OTM5NSAwLjUyMzY5NywtMC4zMjM0ODMgMC4wMzQ2NCwtMC4wMDU2IDAuMDY5NDQsLTAuMDA4NyAwLjEwNDQyNywtMC4wMDk4IDAuMDM1MDIsLTkuODJlLTQgMC4wNzAyNywwIDAuMTA1MjA5LDAuMDAzNSAwLjE0MDM5MSwwLjAxNDIyIDAuMjc0NTY2LDAuMDY1MTMgMC4zODkwNSwwLjE0NzYxIDAuMjQ4NzA3LDAuMTc5MDkyIDAuMzUzNzI3LDAuNDczNzA3IDAuMzE2NDE4LDAuNzU3Njc5IDAuMDM0NzksLTAuMDc0MDQgMC4wNTkzMywtMC4xNTQzMjkgMC4wNzAyNywtMC4yMzk4NjUgbCAwLjUzMjczLC00LjE0MzI4NSBjIDAuMDU2NzUsLTAuNDQwNDc0IC0wLjI1NDM3NCwtMC44NDM1MzkgLTAuNjk0ODYyLC0wLjkwMDE4NCAtMC4wMjk4NSwtMC4wMDM4IC0wLjA1OTc5LC0wLjAwNTggLTAuMDg5OSwtMC4wMDY0IHogbSAtOC4wODU1NjQsMTMuODExNzI0IGMgLTAuMzgwOTIzLDAuMTMzMjA2IC0wLjc3MjAxNCwwLjIxMjkzNiAtMS4xNDk4NjUsMC4yNjkzMTEgLTAuMDc4OCwwLjEzODY3IC0wLjExNzU2NSwwLjMwMTgzMiAtMC4xMDEyODIsMC40NzI2NjUgbCAwLjM1NDg5MiwzLjcyOTExIGMgMC4wNDIwMiwwLjQ0MjExMSAwLjQzNDUyNywwLjc2NjQxOSAwLjg3NjYyNywwLjcyNDMwOSAwLjQ0MjExNSwtMC4wNDIwMiAwLjc2NjQxOCwtMC40MzQ1MjkgMC43MjQzMSwtMC44NzY2MyBsIC0wLjM1NTI4NCwtMy43MjkxMDkgYyAtMC4wMjM2MywtMC4yNDgzNzggLTAuMTU3OTAxLC0wLjQ1OTcyMyAtMC4zNDkzOTUsLTAuNTg5NjU2IHogbSAtMC45NDI1ODIsMy45ODQyODggLTUuMzgxNDc4LDIuNzczOTY2IGMgLTAuMzk0NzQzLDAuMjAzNDU1IC0wLjU0OTc3NiwwLjY4ODQxNiAtMC4zNDYyNTYsMS4wODMxMjUgMC4yMDM0NDksMC4zOTQ1MTQgMC42ODgxMjEsMC41NDk1MTIgMS4wODI3MzQsMC4zNDYyNTcgbCA1Ljc0MTg2NiwtMi45NTk2NTcgYyAwLjEyMTk0NSwtMC4wNjI4NSAwLjIyMDk2MywtMC4xNTI2OTUgMC4yOTM2NSwtMC4yNTgzMTcgLTAuMTI1NzIxLDAuMTE5MDcxIC0wLjI4MTgyMiwwLjIwODA3OSAtMC40Njc1NjUsMC4yMjU3MzMgLTAuNDQyMDk4LDAuMDQyMTIgLTAuODM0NjA3LC0wLjI4MjIgLTAuODc2NjI4LC0wLjcyNDMwOSB6IG0gLTkuMzE5MDQ4LDEuMjY0MTA1IGMgLTAuMzQ2Mjk4LC0wLjAwNjcgLTAuNjYxODAxLDAuMjEwNjg0IC0wLjc3NTczNywwLjU0MzMzMSAtMC4xNDM4NDgsMC40MjAwNzkgMC4wODAwNywwLjg3NzIzMyAwLjUwMDE0NiwxLjAyMTA5OCBsIDQuMzIwNzI4LDEuNDgwMDI1IGMgMC4zMTQ5NiwwLjEwODAxNCAwLjY1MDY4MSwwLjAwOSAwLjg1OTc0OCwtMC4yMjQxNjQgbCAtMC4yMzA4MzcsMC4xMTg5NTMgYyAtMC4zOTQ2MTMsMC4yMDMyNTMgLTAuODc5Mjg1LDAuMDQ4MjUgLTEuMDgyNzM0LC0wLjM0NjI1NyAtMC4yMDM1MTksLTAuMzk0NzA5IC0wLjA0ODQ5LC0wLjg3OTY3IDAuMzQ2MjU2LC0xLjA4MzEyNSBsIDAuMjM1NTQ3LC0wLjEyMTMwOCAtMy45Mjc3NTYsLTEuMzQ1MzcgYyAtMC4wNTY5OCwtMC4wMTk0OSAtMC4xMTU5NzgsLTAuMDMyNTQgLTAuMTc1ODc1LC0wLjAzODg3IC0wLjAyMzMxLC0wLjAwMjUgLTAuMDQ2NCwtMC4wMDM4IC0wLjA2OTQ5LC0wLjAwNDQgeiBtIC0yLjA2MjYxMiwtMS45NTI2ODggYyAtMC4yMTMwNiwwLjAwOTIgLTAuNDEzNzI5LDAuMTAyNjk5IC0wLjU1Nzg1NCwwLjI1OTg4OCAtMC4zMDAxNCwwLjMyNzM2NiAtMC4yNzc5OTMsMC44MzYwODIgMC4wNDk0NiwxLjEzNjEyMyBsIDEuODIxOTYsMS42Njk2MzkgYyAtMC4wNzM5NCwtMC4xNzU1NTQgLTAuMDkzMjYsLTAuMzc1MjMzIC0wLjAyNjcsLTAuNTY5NjMxIDAuMTIxNTMyLC0wLjM1NDgyMSAwLjQ3MjI0OCwtMC41Nzg0NzggMC44NDUyMjMsLTAuNTM5MDExIDAuMDU5OSwwLjAwNjQgMC4xMTg4OTMsMC4wMTkzNiAwLjE3NTg3NywwLjAzODg3IGwgMC4zNDc4MjQsMC4xMTkzNDUgLTIuMDc3OTIyLC0xLjkwNDc5NCBjIC0wLjE1NzEyMSwtMC4xNDM5NTMgLTAuMzY0OTY5LC0wLjIxOTYzOSAtMC41Nzc4NjksLTAuMjEwNDI0IHogbSAwLjUyNzIzMywtMi40MjczMTkgYyAtMC4wMjYyNywtNi4wMWUtNCAtMC4wNTI2NywtMi40ZS01IC0wLjA3ODkxLDAuMDAyIC0wLjM4MjUyNiwwLjAyODY0IC0wLjY5MTU0NCwwLjMyMzUxOSAtMC43MzgwNSwwLjcwNDI4NyBsIC0wLjIzOTA4LDEuOTU5NzU2IGMgMC4xNDE4MzgsLTAuMTQxMjMxIDAuMzI3OTU1LC0wLjIzIDAuNTI4ODA0LC0wLjIzODY4OCAwLjIxMjkwMSwtMC4wMDkxIDAuNDIwNzQ5LDAuMDY2NDcgMC41Nzc4NzYsMC4yMTA0MjEgbCAwLjQ2NDgxNSwwLjQyNTk1IDAuMjYzODEzLC0yLjE2MjcyIGMgMC4wNTM3OCwtMC40NDA3ODkgLTAuMjU5OTYsLTAuODQxNzE3IC0wLjcwMDc1NCwtMC44OTU0NzIgLTAuMDI2MTEsLTAuMDAzMiAtMC4wNTIyNCwtMC4wMDQ5IC0wLjA3ODUyLC0wLjAwNTUgeiBtIC0wLjYzNTk3OCwwLjMwNTgyIC0zLjE4NTM4NywwLjc4MjQxIGMgLTAuMDgwNzIsMC4wMTk3OSAtMC4xNTU3MiwwLjA1MTE3IC0wLjIyMzM3OCwwLjA5MTg2IGwgMC4zNjQzMTMsMC45OTU5NzMgLTAuMzI3MDE5LDAuNDAyMDAyIGMgMC4xNjg2NTIsMC4wODk4OSAwLjM2OTQ0NCwwLjEyMTA4MyAwLjU2OTYzMywwLjA3MTg0IGwgMi40NTc1NDcsLTAuNjAzNzg3IDAuMTYzMzEyLC0xLjMzOTg3MiBjIDAuMDE4NzksLTAuMTUzODE3IDAuMDg4OTcsLTAuMjg2NTM0IDAuMTgwOTc5LC0wLjQwMDQzMSB6IE0gMjQuMDk0OTksMzUuODI5MjA0IGMgLTAuMDIzMjQsMC4wMDk1IC0wLjA0NTk5LDAuMDIwMDggLTAuMDY4MzIsMC4wMzE4MSAtMC4zOTMwNDEsMC4yMDY0NDUgLTAuNTQ0MzU5LDAuNjkyMzkgLTAuMzM4MDEyLDEuMDg1NDgyIGwgMC41NDgwNDIsMS4wNDM4NjggMC42NTk1MzIsLTAuNzY1NTI5IDAuMzMyMTI0LDAuOTA4NDI4IGMgMC4wNjc2NiwtMC4wNDA3IDAuMTQyNjYzLC0wLjA3MjA4IDAuMjIzMzc4LC0wLjA5MTg2IGwgMC41NTU4OTUsLTAuMTM2NjI1IC0wLjU4NjUxMywtMS4xMTcyODEgYyAtMC40NDUzNCwwLjA5NzExIC0wLjg5Mzg5OCwwLjE4NjI1MyAtMS4zNDU3NjIsMC4yNjUzODQgLTAuMDM4ODMsLTAuNDAzOTU4IC0wLjAyODk5LC0wLjgxNzg0OSAwLjAxOTY0LC0xLjIyMzY2OSB6IG0gMi4xMTUyMTYsMy42ODE2MDcgLTAuMzc0OTEzLDAuMDkyMjcgYyAtMC4yMDAxODksMC4wNDkyNCAtMC40MDA5ODEsMC4wMTgwNSAtMC41Njk2MzMsLTAuMDcxODQgbCAtMC4wNjUxNiwwLjA4MDA4IGMgMC4yMzY0ODcsMC4xNTU4ODIgMC41NDgwNDIsMC4xODIxNzkgMC44MTY1NjUsMC4wNDEyMiAwLjA3MzEyLC0wLjAzODM2IDAuMTM3NDkyLC0wLjA4NjQgMC4xOTMxNDgsLTAuMTQxNzIyIHogTSAxNi45NDIxOTMsMzMuNDAxMSBjIC0wLjEzODQ0LC0yZS02IC0wLjI3NTA0MSwwLjAzNTkxIC0wLjM5NjExMiwwLjEwNDQyNiBsIC0zLjEzNzEsMS43NzU2MzggYyAtMC4zODY3MTEsMC4yMTg2NjQgLTAuNTIyNzg3LDAuNzA5NTE5IC0wLjMwMzg1NywxLjA5NjA4IDAuMjE4NzkxLDAuMzg2MzMzIDAuNzA5MzE4LDAuNTIyMTkyIDEuMDk1Njg4LDAuMzAzNDY1IGwgMC4zMDYyMTMsLTAuMTczNTIxIC0wLjA1OTI4LC0wLjcxMDU2OCAyLjg1NTYyMSwtMC44NzI3MDUgLTQuMDFlLTQsMC4wMDEzIDAuMDM1MzMsLTAuMDIwMDIgYyAwLjM4NjU2OSwtMC4yMTg4MDIgMC41MjI0NTgsLTAuNzA5NjIyIDAuMzAzNDY0LC0xLjA5NjA4MSAtMC4xMDUwNjYsLTAuMTg1NDIxIC0wLjI3OTQ1NCwtMC4zMjE1NDIgLTAuNDg0ODM2LC0wLjM3ODQ0OCAtMC4wNTA4MSwtMC4wMTQxIC0wLjEwMjg3NywtMC4wMjMxNyAtMC4xNTU0NjEsLTAuMDI3MDggLTAuMDE5ODMsLTAuMDAxNSAtMC4wMzk1LC0wLjAwMjQgLTAuMDU5MjgsLTAuMDAyNCB6IG0gLTUuODk1NzU0LC0wLjIzNjMzMiBjIC0wLjA1MjcxLC0wLjAwMTYgLTAuMTA1NDM4LDAuMDAyMiAtMC4xNTc0MjYsMC4wMTA5OSAtMC4yMTAyMSwwLjAzNTQ2IC0wLjM5NzczNywwLjE1MjkzOCAtMC41MjEzNDQsMC4zMjY2MjUgLTAuMjU3MzczLDAuMzYxODYxIC0wLjE3MjY1MywwLjg2Mzg1MyAwLjE4OTIyNCwxLjEyMTIwNiBsIDIuNjYzNjQ5LDEuODk0MTk2IGMgMC4wMDQ5LDAuMDAzNCAwLjAxLDAuMDA2MSAwLjAxNDkyLDAuMDA5MyAtMC4wNDU3OSwtMC4wNDc2IC0wLjA5NjI5LC0wLjA4OTg0IC0wLjEzMDMzNywtMC4xNDk5NjUgLTAuMjE4OTI5LC0wLjM4NjU2IC0wLjA4Mjg2LC0wLjg3NzQxNiAwLjMwMzg1NywtMS4wOTYwNzkgbCAwLjQ3MTg3NywtMC4yNjY5MjggLTIuMzkxOTg2LC0xLjcwMTA0NiBjIC0wLjEyOTU2NCwtMC4wOTIxMiAtMC4yODM1MzEsLTAuMTQzNzU5IC0wLjQ0MjQzNiwtMC4xNDgzOTYgeiBtIC0wLjcwNzAzNiwtMy4yMzIxMDUgYyAtMC4wMzYwNSwwLjA4NzI0IC0wLjA1ODE2LDAuMTgxOTMxIC0wLjA2MTI0LDAuMjgxODcxIGwgLTAuMTE4MTY3LDMuODQ3NjcgYyAtMC4wMTM1NywwLjQ0MTI5MiAwLjMzMTIxMiwwLjgwOTkzNiAwLjc3MTQxOCwwLjgyNzU1OCBsIC0wLjM3NDUxOSwtMC4yNjYxNjkgYyAtMC4zNjE4ODIsLTAuMjU3MzU0IC0wLjQ0NjYwMSwtMC43NTkzNDUgLTAuMTg5MjI5LC0xLjEyMTIwNiAwLjEyMzYwNywtMC4xNzM2ODcgMC4zMTExMzQsLTAuMjkxMTczIDAuNTIxMzQ0LC0wLjMyNjYyNSAwLjA1MiwtMC4wMDg4IDAuMTA0NzE3LC0wLjAxMjUgMC4xNTc0MjUsLTAuMDEwOTkgMC4xNTg5MDYsMC4wMDQ2IDAuMzEyODczLDAuMDU2MjggMC40NDI0MzYsMC4xNDgzOTUgbCAwLjI5NjM5OCwwLjIxMDgxNiAwLjA4MjA1LC0yLjY2MDExOSBjIC0wLjExNjY1OSwwLjEyOTg0MyAtMC4yMzg3NTEsMC4yNTc2ODQgLTAuMzcwOTg5LDAuMzgxNTg4IC0wLjQ0OTA5MywtMC40MDA4MTcgLTAuODM4MDksLTAuODQwMTg4IC0xLjE1NjkzLC0xLjMxMjc4NSB6IG0gLTAuMTI1MjMyLC0wLjE4OTIyNSAtMS44MDY2NTExLDAuMjk0MDQ1IGMgLTAuNDM4MzEzNiwwLjA3MTQxIC0wLjczNTcyNTUsMC40ODQ2NSAtMC42NjQyNDM0LDAuOTIyOTUyIDAuMDcxNDA3LDAuNDM4MTM2IDAuNDg0Mzk4NCwwLjczNTQ4NyAwLjkyMjU2MSwwLjY2NDI0NSBsIDEuNTc2OTkwNSwtMC4yNTY3NDcgMC4wMzUzMywtMS4xNTMzOTkgYyAwLjAwMzEsLTAuMDk5OTQgMC4wMjUxOSwtMC4xOTQ2MjcgMC4wNjEyNSwtMC4yODE4NzEgLTAuMDQyMzcsLTAuMDYyOCAtMC4wODQxOCwtMC4xMjU4MjcgLTAuMTI1MjMzLC0wLjE4OTIyNSB6IE0gMy42Nzg1MTAyLDI2LjI5ODE2NCBjIC0wLjAzNTA4NCwxLjk2ZS00IC0wLjA2OTk5LDAuMDAyNyAtMC4xMDQ4MTg5LDAuMDA3NCAtMC4yMTEyMjM0LDAuMDI4OTkgLTAuNDAyMjgyOSwwLjE0MDY4OCAtMC41MzExNTk1LDAuMzEwNTMgLTAuMjY4MzM0NCwwLjM1MzY0OCAtMC4xOTkyNjksMC44NTc4NTEgMC4xNTQyODMxLDEuMTI2MzExIGwgNC43MjM1MTQ3LDMuNTg1MDY1IGMgLTAuMDg0OTcsLTAuMTA1MDM5IC0wLjE1Mzc2NDMsLTAuMjI0MTc1IC0wLjE3NzA1MzEsLTAuMzY3MDYyIC0wLjA3MTQ4LC0wLjQzODMgMC4yMjU5Mjk4LC0wLjg1MTU0OSAwLjY2NDI0MzQsLTAuOTIyOTUyIGwgMC4zODkwNDYyLC0wLjA2MzIxIC00LjYyNzcyNSwtMy41MTI4MDEgYyAtMC4xMTIzNzc0LC0wLjA4NTIyIC0wLjI0NTE5NTYsLTAuMTM5MzcyIC0wLjM4NTEyMDIsLTAuMTU3MDMgLTAuMDM0ODc2LC0wLjAwNDQgLTAuMDcwMTI2LC0wLjAwNjUgLTAuMTA1MjEwNywtMC4wMDY0IHogbSA1LjE2MjgxMDcsNS4yOTc4NTcgLTAuMTc1NDgzNCwwLjAyODY1IGMgLTAuMDg0MDQyLDAuMDEzNjcgLTAuMTY0NjE3NiwwLjAwMjQgLTAuMjQ0NTc2OCwtMC4wMDk1IDAuMTM5ODgwOCwwLjAzMTA1IDAuMjg0OTA4NiwwLjAyNCAwLjQyMDA2MDIsLTAuMDE5MjQgeiBNIDIuNjg3MjQ3MywyMC44NTM0ODIgYyAtMC4wMzUwMSwwLjAwMjEgLTAuMDY5OTE4LDAuMDA2NyAtMC4xMDQ0MjYyLDAuMDEzMzUgLTAuNDM1ODkxNywwLjA4NDQ3IC0wLjcyMDc5NCwwLjUwNjI4OCAtMC42MzYzNzEyLDAuOTQyMTkgbCAwLjk3NzkxNDgsNS4wNTE3MTEgYyAwLjAyNzA1MiwtMC4wODUxNCAwLjA2MTA3NCwtMC4xNjkzNDUgMC4xMTgxNjcxLC0wLjI0NDU3OCAwLjEyODg3NjYsLTAuMTY5ODQyIDAuMzE5OTM3MSwtMC4yODE1MzkgMC41MzExNTk1LC0wLjMxMDUzIDAuMDY5NjU3LC0wLjAwOTYgMC4xNDAyNzA0LC0wLjAxIDAuMjEwMDI5NiwtMC4wMDEzIDAuMTM5OTI0NiwwLjAxNzY3IDAuMjcyNzQyOCwwLjA3MTgxIDAuMzg1MTIwMiwwLjE1NzAzMyBsIDAuMzcwMjAzMywwLjI4MTA4NyAtMS4wMTQwMzI5LC01LjIzODk3MyBjIC0wLjA2OTEwNSwtMC4zNTcyOCAtMC4zNjk1NjA2LC0wLjYyMzYwNSAtMC43MzI1NTM1LC0wLjY0OTMyMyAtMC4wMzUwNjMsLTAuMDAyNSAtMC4wNzAxOTksLTAuMDAyOSAtMC4xMDUyMTA3LC04LjM2ZS00IHogbSAzLjM5NTgxMTQsLTQuOTEzNTI0IGMgLTAuMDcwMjcyLC0wLjAwMjkgLTAuMTQwNjIxNCwwLjAwMzQgLTAuMjA5MjQ1MiwwLjAxODg0IC0wLjIwODA2OTEsMC4wNDY5MSAtMC4zODg5NzMzLDAuMTc0NTc0IC0wLjUwMjg5NDUsMC4zNTQ4OTIgbCAtMi45MTAxODk5LDQuNjAzMzg2IGMgMC4wNDE1OTQsLTAuMDE1NTggMC4wNzcwMzIsLTAuMDQxNTIgMC4xMjIwOTIsLTAuMDUwMjUgMC4wMzQ1MTEsLTAuMDA2NyAwLjA2OTQwNywtMC4wMTEyNiAwLjEwNDQyNjIsLTAuMDEzMzUgMC4wMzUwMTEsLTAuMDAyMSAwLjA3MDE0NiwtMC4wMDE5IDAuMTA1MjEwNyw4LjM1ZS00IDAuMzYyOTkyOSwwLjAyNTcyIDAuNjYzNDU0OCwwLjI5MjA0NSAwLjczMjU1MzUsMC42NDkzMjUgTCAzLjYzNDU0MSwyMi4wNjkzNDQgNi43MzAwMjksMTcuMTczMDk1IEMgNi45Njc1MDI3LDE2Ljc5NzgwNyA2Ljg1NTcwNjUsMTYuMzAxMDUyIDYuNDgwMzQ3OSwxNi4wNjM2NzUgNi4zNjEwNjQxLDE1Ljk4ODMxMSA2LjIyNDA0NDgsMTUuOTQ1NjU5IDYuMDgzMDU4NywxNS45NDAwMTMgWiBNIDEzLjY5MzYsMTUuMjg4Mjc3IGMgLTAuMDI3MTcsLTIuMjJlLTQgLTAuMDU0NDIsOS4xMWUtNCAtMC4wODIwNSwwLjAwMzUgbCAtNy4zMTcyODU3LDAuNjg1ODM2IGMgMC4wNjUxNTcsMC4wMjA3IDAuMTI3NzksMC4wNDkxNSAwLjE4NjA4MjQsMC4wODU5OCAwLjM3NTM1ODcsMC4yMzczNzcgMC40ODcxNTQ4LDAuNzM0MTMyIDAuMjQ5NjgxMSwxLjEwOTQyOSBsIC0wLjI1NDM5MTYsMC40MDI3ODcgNy4yODU4Nzg4LC0wLjY4MzA4OCBjIDAuNDQyMDc4LC0wLjA0MTQzIDAuNzY2ODgyLC0wLjQzMzM3MSAwLjcyNTQ4NywtMC44NzU0NTQgLTAuMDM4ODQsLTAuNDE0NDQ3IC0wLjM4NTkyNywtMC43MjU4MjQgLTAuNzkzNDAzLC0wLjcyOTAxOCB6IG0gMzAuNDgwMjUxLDAuOTQ2OSBjIC0wLjAyNDYyLC03LjllLTUgLTAuMDQ5MDgsMC4wMDE0IC0wLjA3MzM4LDAuMDAzNSAwLjI0MzI5OCwwLjE0NDU3OSAwLjQwOTc1MywwLjQwNDE0MSAwLjQwMDQzMSwwLjcwNzAzNCAtMC4wMTM1MiwwLjQzNzczMiAtMC4zNzUzNTMsMC43Nzk4NTggLTAuODExMDY1LDAuNzc2MTI5IGwgNC42MDM3NzQsNS42NTc0NjIgMC4wNTIxOSwtMC40MDQ3NTEgYyAwLjA0NzcxLC0wLjM3MjAzIDAuMzQ2Mjg4LC0wLjY2MTY3NSAwLjcxOTU5OCwtMC42OTgwMDUgMC4wMzAwMSwtMC4wMDI5IDAuMDYwMjQsLTAuMDA0IDAuMDkwMjksLTAuMDAzNSAwLjAzMDA5LDQuMDJlLTQgMC4wNjAwMSwwLjAwMjQgMC4wODk5LDAuMDA2NCAwLjEyMTkzLDAuMDE1NjggMC4yMjk5NjYsMC4wNjIyMyAwLjMyNzAxNSwwLjEyNDQ0OCBsIC00Ljc3ODA5NSwtNS44NzE4MjMgYyAtMC4xMzQ1MzMsLTAuMTY1NDE4IC0wLjMyOTI2NCwtMC4yNzA2MjIgLTAuNTQxMzYsLTAuMjkyNDcxIC0wLjAyNjUxLC0wLjAwMjcgLTAuMDUyODgsLTAuMDA0MiAtMC4wNzkzLC0wLjAwNDQgeiBNIDE1Ljc1ODIwOCwxOS4yMjkzOTUgViA3LjQ0OTk5MDYgbCAzLjY2OTk2Myw0LjkxMzAxOTQgMC43Njk1MDksLTMuMTk2NDIyOSAwLjk0NzA4OSwyLjg0MTI2MzkgMC43Njk1MDksMC42NTExMjMgMC44ODc4OTQsMC4xMTgzODYgaCAwLjQ3MzU0MyBsIC0xLjA2NTQ3MiwtMS4zMDIyNDcgLTAuMDU5MiwtMS4wNjU0NzMgMS42NTc0MDYsLTMuMjU1NjE0NCA3Ljg3MjY2NCwtMi45MDA0NTU1IDEuNzc1Nzg5LDAuMTE4Mzg2OSA0LjM4MDI4MSwxLjk1MzM2ODEgMC44Mjg3MDEsMS4xMjQ2NjU1IDAuNjUxMTI0LDIuOTU5NjQ5NCAtMC4wNTkyLDAuNzY5NTEgLTAuODg3ODk1LDEuODk0MTc0IC00LjA4NDMxMywxLjk1MzM2OCA0LjY3NjI0NSwtMC40MTQzNSAwLjk0NzA4NywtMS4wNjU0NzUgMC40NzM1NDMsLTAuNzY5NTA3IDAuNTkxOTI2LC0yLjA3MTc1NCBMIDQwLjI2NDA5OSw3LjIxMzIxOSAzOC43ODQyNzUsNC45MDQ2OTI0IDM0LjEwODAyOSwyLjcxNDU1MjggMzAuOTcwODAyLDIuNTM2OTczNSAyMy41NzE2ODEsNS4zMTkwNDMyIDIxLjU1OTExOSw3Ljk4MjcyODIgMjAuMjU2ODczLDUuNjc0MjAxNiAxOS43ODMzMjksNS43MzM0MDA2IDE5LjA3MzAxNCw5LjY5OTMzMDIgMTQuNTc0MzQ4LDMuNDg0MDY3NSAxNC4xMDA4MDUsMTMuMDczMzMxIDExLjkxMDY2NCwxMS4yOTc1NDIgMTEuNjE0NywxMS41MzQzMTQgbCAwLjk0NzA4NywzLjcyOTE1NiAwLjgyODcwMSwxLjU5ODIxIHpcIlxuICAgIGlua3NjYXBlOmxhYmVsPVwibGluZUFydFwiXG4gICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0wLjc0NzE1MjQsLTAuODUzOTE2OTQpXCIgLz5cbjwvZz5cbjwvc3ZnPmA7XG5leHBvcnQgZGVmYXVsdCBtaXNzQ2xvdWRTVkc7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBta0ljb24oY2xhc3NOYW1lLCBzdmcpIHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtcG9wXCIpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgaWNvbi5pbm5lckhUTUwgPSBzdmc7XG4gIHJldHVybiBpY29uO1xufVxuIiwibGV0IHNoaXBTVkcgPSBgPHN2Z1xudmVyc2lvbj1cIjEuMVwiXG5pZD1cInN2ZzFcIlxud2lkdGg9XCIyMDBcIlxuaGVpZ2h0PVwiMjAwXCJcbnZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiXG5zb2RpcG9kaTpkb2NuYW1lPVwiYm9hdC5zdmdcIlxuaW5rc2NhcGU6dmVyc2lvbj1cIjEuMyAoMGUxNTBlZCwgMjAyMy0wNy0yMSlcIlxueG1sbnM6aW5rc2NhcGU9XCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXCJcbnhtbG5zOnNvZGlwb2RpPVwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcIlxueG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG54bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPGRlZnNcbiAgaWQ9XCJkZWZzMVwiPlxuIDxsaW5lYXJHcmFkaWVudFxuICAgIGlkPVwic3dhdGNoMTJcIlxuICAgIGlua3NjYXBlOnN3YXRjaD1cInNvbGlkXCI+XG4gICA8c3RvcFxuICAgICAgc3R5bGU9XCJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjE7XCJcbiAgICAgIG9mZnNldD1cIjBcIlxuICAgICAgaWQ9XCJzdG9wMTJcIiAvPlxuIDwvbGluZWFyR3JhZGllbnQ+XG48L2RlZnM+XG48c29kaXBvZGk6bmFtZWR2aWV3XG4gIGlkPVwibmFtZWR2aWV3MVwiXG4gIHBhZ2Vjb2xvcj1cIiNmZmZmZmZcIlxuICBib3JkZXJjb2xvcj1cIiMwMDAwMDBcIlxuICBib3JkZXJvcGFjaXR5PVwiMC4yNVwiXG4gIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PVwiMlwiXG4gIGlua3NjYXBlOnBhZ2VvcGFjaXR5PVwiMC4wXCJcbiAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD1cIjBcIlxuICBpbmtzY2FwZTpkZXNrY29sb3I9XCIjZDFkMWQxXCJcbiAgaW5rc2NhcGU6em9vbT1cIjEuNjk3ODQxN1wiXG4gIGlua3NjYXBlOmN4PVwiMjIwLjU3NDE2XCJcbiAgaW5rc2NhcGU6Y3k9XCIxNzQuNjMzNDhcIlxuICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9XCIxNzkyXCJcbiAgaW5rc2NhcGU6d2luZG93LWhlaWdodD1cIjk4MlwiXG4gIGlua3NjYXBlOndpbmRvdy14PVwiMTkxOVwiXG4gIGlua3NjYXBlOndpbmRvdy15PVwiMjVcIlxuICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPVwiMFwiXG4gIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9XCJsYXllcjZcIiAvPlxuPGdcbiAgaW5rc2NhcGU6Z3JvdXBtb2RlPVwibGF5ZXJcIlxuICBpZD1cImxheWVyNlwiXG4gIGlua3NjYXBlOmxhYmVsPVwiU2hpcFwiXG4gIHN0eWxlPVwib3BhY2l0eToxXCI+XG4gPHBhdGhcbiAgICBpZD1cInBhdGgyXCJcbiAgICBzdHlsZT1cIm9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ni42NjIxOTtzdHJva2UtbGluZWNhcDpyb3VuZFwiXG4gICAgZD1cIm0gMTMzLjQ3NjU0LDQ3LjMzNDUzOSAtMjguNjA1MzEsMC4wMDExIC03Ljg1NzA2LDYuMDQ2MzUxIC0zLjE0NDMwMiw2Ljk1Mzg2NiAtNy44NTg1MzcsLTEuMjA4MTMxIC0xNy42ODA2LDMzLjg1MDQ5NSAtNjAuNTg3ODIzOCwtMTQuMTk3MDE3IC00LjcxNTcxMiwyLjExNTY1NiAwLjk0MzQzNywzOS45MTI0NTEgMTEuOTQ0Nzk4OCwyNC4xODk2NSA5LjExNTk2MSw5Ljk3ODQ4IDIxLjM3NDc0NywxMy4wMDE2NCAxMTMuNzg4ODMxLC0yLjQxOTEyIDEzLjUxNjIxLC0wLjMwMjAzIDEwLjA1NzkyLC04LjE2MzQzIDUuOTczMTQsLTE1LjQyMjE2IDcuMjMwNTYsLTIxLjc3MDU0IC03LjU2ODEzLC0yLjI1NzQ2IDMuODYyMiwtMTAuMDE5NiAtMTUuMTQ1MTIsLTUuMDI1MzggLTMuODk2MSwxMC41MTczIC02LjE5NzIxLC0xLjg0OTA3IC00LjM3NjY2LC0zMi40ODYzODcgLTE4LjIzMDQ1LC03LjI1NzM2MyAtMTYuMDMxMDUsLTExLjc5MjA4NiB6IG0gLTQxLjYxMTQ3NiwyMi4xNDc3MzYgMjIuOTQ2MTU2LDQuNTM0NzY2IDAuOTQzNDUsMjcuMjE0MjU5IC0zNi4xNDgzODYsLTYuMzQ5ODA5IHogbSAzMS4xMTg2ODYsOC43Njg5MDYgMTguNTQ1OTEsOC4xNjM0NCAyLjIwMDg2LDEzLjYwNzExOSAtMTkuODAzMzQsMS44MTM2MyB6IE0gMTQuNzMxNzEyLDkxLjAyNTk1NSBDIDc2LjY1ODI2OSwxMTAuMTMzNTkgMTMwLjA2NywxMTcuNDY3MDQgMTgzLjA2MDA2LDEyNy44Mjg3MiBsIC0xLjIzMDksMy43NjE5NiBDIDEyOC45NDQ4OSwxMjEuMjUwMjcgNzcuMTE0OTM4LDExNC4xOTg5NiAxNC45NTg3MjcsOTUuMDIwNDU1IFogbSAwLjYxNzY1Nyw4Ljc5MTU5NyBDIDc2LjExOTUyMSwxMTguOTI1MTggMTI4LjUyOTk0LDEyNi4yNTg2MyAxODAuNTMzNDEsMTM2LjYyMDMyIGwgLTEuMjA4NzgsMy43NjA1NCBDIDEyNy40Mjc5MSwxMzAuMDQwNDQgNzYuNTY3NDgsMTIyLjk5MDU2IDE1LjU3MTk2MSwxMDMuODEyMDYgWlwiIC8+XG48L2c+XG48L3N2Zz5gO1xuZXhwb3J0IGRlZmF1bHQgc2hpcFNWRztcbiIsImltcG9ydCBhcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5hcHAoKTtcbiIsImltcG9ydCBCb2FyZENvbnRhaW5lciBmcm9tIFwiLi9Cb2FyZENvbnRhaW5lclwiO1xuaW1wb3J0IG1rRGVmZWF0U2NyZWVuIGZyb20gXCIuL21rRGVmZWF0U2NyZWVuXCI7XG5pbXBvcnQgbWtWaWN0b3J5U2NyZWVuIGZyb20gXCIuL21rVmljdG9yeVNjcmVlblwiO1xuaW1wb3J0IG1rU1ZHVGV4dCBmcm9tIFwiLi9zdmdUZXh0L21rU1ZHVGV4dFwiO1xuaW1wb3J0IHRvZ2dsZVN3aXRjaCBmcm9tIFwiLi90b2dnbGVTd2l0Y2hcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTdGF0aWNET00oKSB7XG4gIGNvbnN0IGFwcEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXBwQkcuaWQgPSBcImFwcC1iZ1wiO1xuXG4gIGNvbnN0IHN2Z0hlYWRlciA9IG1rU1ZHVGV4dChcIkJhdHRsZVNoaXBcIik7XG4gIHN2Z0hlYWRlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjAuOHJlbVwiO1xuICBhcHBCRy5hcHBlbmQoc3ZnSGVhZGVyKTtcblxuICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3R2FtZUJ0bi5pbm5lckhUTUwgPSBcIk5ldyBHYW1lXCI7XG4gIG5ld0dhbWVCdG4uaWQgPSBcIm5ldy1nYW1lLWJ0blwiO1xuXG4gIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYnRuLWRpdlwiKTtcbiAgY29uc3QgdG9nZ2xlID0gdG9nZ2xlU3dpdGNoKFwiYWktdG9nZ2xlXCIpO1xuXG4gIGNvbnN0IGFpTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWlMYWJlbC5pZCA9IFwiYWktbGFiZWxcIjtcbiAgYWlMYWJlbC5pbm5lckhUTUwgPSBcIlAyIENQVVwiO1xuXG4gIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWIuaW5uZXJIVE1MID0gXCJHaXRIdWJcIjtcblxuICBidG5EaXYuYXBwZW5kKG5ld0dhbWVCdG4sIHRvZ2dsZSwgYWlMYWJlbCwgZ2l0aHViKTtcblxuICBjb25zdCBwMURpdiA9IG1rUGxheWVyRGl2KFwicDFcIik7XG4gIGNvbnN0IHAyRGl2ID0gbWtQbGF5ZXJEaXYoXCJwMlwiKTtcbiAgcDJEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBhcHBCRy5hcHBlbmQoYnRuRGl2LCBwMURpdiwgcDJEaXYpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChhcHBCRyk7XG59XG5mdW5jdGlvbiBta1BsYXllckRpdihuYW1lKSB7XG4gIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckRpdi5pZCA9IGAke25hbWV9LWRpdmA7XG4gIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRpdlwiKTtcbiAgY29uc3QgcGxheWVyRW5lbXkgPSBCb2FyZENvbnRhaW5lcihgJHtuYW1lfS1lbmVteWApO1xuICBjb25zdCBwbGF5ZXJTZWxmID0gQm9hcmRDb250YWluZXIoYCR7bmFtZX0tc2VsZmApO1xuICBjb25zdCBwbGF5ZXJEZWZlYXQgPSBta0RlZmVhdFNjcmVlbigpO1xuICBwbGF5ZXJEZWZlYXQuaWQgPSBgJHtuYW1lfS1kZWZlYXRgO1xuICBjb25zdCBwbGF5ZXJWaWN0b3J5ID0gbWtWaWN0b3J5U2NyZWVuKCk7XG4gIHBsYXllclZpY3RvcnkuaWQgPSBgJHtuYW1lfS12aWN0b3J5YDtcbiAgcGxheWVyRW5lbXkuYXBwZW5kKHBsYXllckRlZmVhdCk7XG4gIHBsYXllclNlbGYuYXBwZW5kKHBsYXllclZpY3RvcnkpO1xuICBwbGF5ZXJEaXYuYXBwZW5kKHBsYXllckVuZW15LCBwbGF5ZXJTZWxmKTtcbiAgcmV0dXJuIHBsYXllckRpdjtcbn1cbiIsImltcG9ydCBta1NWR1RleHQgZnJvbSBcIi4vc3ZnVGV4dC9ta1NWR1RleHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1rRGVmZWF0U2NyZWVuKCkge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzY3JlZW4uY2xhc3NMaXN0LmFkZChcIndpbi1zY3JlZW5cIik7XG4gIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtc2cuY2xhc3NMaXN0LmFkZChcIndpbi1tc2dcIik7XG4gIG1zZy5hcHBlbmQobWtTVkdUZXh0KFwiRGVmZWF0IVwiKSk7XG4gIHNjcmVlbi5hcHBlbmQobXNnKTtcbiAgcmV0dXJuIHNjcmVlbjtcbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1rR2FtZSgpIHtcbiAgbGV0IGdhbWVPYmogPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB0b2dnbGVQMkFJKCkge1xuICAgICAgdGhpcy5wMi5BSSA9ICF0aGlzLnAyLkFJO1xuICAgIH0sXG4gICAgc2V0UDJBSSh2YWwpIHtcbiAgICAgIHRoaXMucDIuQUkgPSB2YWw7XG4gICAgfSxcbiAgICB0b2dnbGVQbGF5ZXIoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09PSB0aGlzLnAxKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucDI7XG4gICAgICB9IGVsc2UgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wMTtcbiAgICB9LFxuICB9O1xuICBnYW1lT2JqLnAxID0gUGxheWVyKFwicDFcIik7XG4gIGdhbWVPYmoucDIgPSBQbGF5ZXIoXCJwMlwiKTtcbiAgZ2FtZU9iai5wMS5zZXRPcHBvbmVudChnYW1lT2JqLnAyKTtcbiAgZ2FtZU9iai5wMi5zZXRPcHBvbmVudChnYW1lT2JqLnAxKTtcbiAgZ2FtZU9iai5jdXJyZW50UGxheWVyID0gZ2FtZU9iai5wMTtcbiAgcmV0dXJuIGdhbWVPYmo7XG59XG4iLCJpbXBvcnQgbWtTVkdUZXh0IGZyb20gXCIuL3N2Z1RleHQvbWtTVkdUZXh0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBta1ZpY3RvcnlTY3JlZW4oKSB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNjcmVlbi5jbGFzc0xpc3QuYWRkKFwid2luLXNjcmVlblwiKTtcbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1zZy5jbGFzc0xpc3QuYWRkKFwid2luLW1zZ1wiKTtcbiAgbXNnLmFwcGVuZChta1NWR1RleHQoXCJWaWN0b3J5IVwiKSk7XG4gIHNjcmVlbi5hcHBlbmQobXNnKTtcbiAgcmV0dXJuIHNjcmVlbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1rTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbEJHLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWxCRy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsQkcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgcmV0dXJuIG1vZGFsQkc7XG59XG4iLCJpbXBvcnQgbWtNb2RhbCBmcm9tIFwiLi9ta01vZGFsXCI7XG5cbmNvbnN0IHN3aXRjaE1vZGFsID0gbWtNb2RhbCgpO1xuc3dpdGNoTW9kYWwuaWQgPSBcInN3aXRjaC1tb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzd2l0Y2hNb2RhbDtcbiIsIi8vdGFrZXMgaW4gYSBwbGF5ZXIgYW5kIHBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIGl0J3MgYm9hcmRcblxuY29uc3Qgc2hpcGxlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG5mdW5jdGlvbiByYW5kUG9zKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VSYW5kU2hpcHMocGxheWVyKSB7XG4gIGZvciAobGV0IG4gb2Ygc2hpcGxlbmd0aHMpIHtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgZG9uZSA9IHBsYXllci5wbGFjZVNoaXAocmFuZFBvcygpLCByYW5kUG9zKCksIG4sIHJhbmRQb3MoKSA+IDUpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWtTVkdUZXh0KHRleHQpIHtcbiAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0RGl2LnN0eWxlLndpZHRoID0gXCIyMHJlbVwiO1xuICB0ZXh0RGl2LnN0eWxlLmhlaWdodCA9IFwiNS43cmVtXCI7XG4gIHRleHREaXYuaW5uZXJIVE1MID0gYDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuPGZpbHRlciBpZD1cImJldmVsXCI+XG4gIDwhLS0gY29sb3IgZm9yIHN0cm9rZSBhbmQgYmV2ZWwgLS0+XG4gIDxmZUZsb29kIHJlc3VsdD1cIlNUUk9LRS1jb2xvclwiIGNsYXNzPVwic3Ryb2tlLWNvbG9yXCI+PC9mZUZsb29kPlxuICA8ZmVGbG9vZCByZXN1bHQ9XCJCRVZFTC1jb2xvclwiIGNsYXNzPVwiYmV2ZWwtY29sb3JcIj48L2ZlRmxvb2Q+XG4gIDwhLS0gc3Ryb2tlIC0tPlxuICA8ZmVNb3JwaG9sb2d5XG4gICAgaW49XCJTb3VyY2VBbHBoYVwiXG4gICAgb3BlcmF0b3I9XCJkaWxhdGVcIlxuICAgIHJhZGl1cz1cIjNcIlxuICAgIHJlc3VsdD1cIlNUUk9LRV8xXCJcbiAgPjwvZmVNb3JwaG9sb2d5PlxuICA8IS0tIGJldmVsIC0tPlxuICA8ZmVDb252b2x2ZU1hdHJpeFxuICAgIG9yZGVyPVwiNCw0XCJcbiAgICBrZXJuZWxNYXRyaXg9XCIxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxXCJcbiAgICBpbj1cIlNUUk9LRV8xXCJcbiAgICByZXN1bHQ9XCJCRVZFTF8xXCJcbiAgICBkaXZpc29yPVwiMVwiXG4gID48L2ZlQ29udm9sdmVNYXRyaXg+XG4gIDxmZU9mZnNldCBkeD1cIjRcIiBkeT1cIjRcIiBpbj1cIkJFVkVMXzFcIiByZXN1bHQ9XCJCRVZFTF8yXCI+PC9mZU9mZnNldD5cbiAgPCEtLSBhcHBseSBjb2xvciAtLT5cbiAgPGZlQ29tcG9zaXRlXG4gICAgaW49XCJTVFJPS0UtY29sb3JcIlxuICAgIGluMj1cIlNUUk9LRV8xXCJcbiAgICBvcGVyYXRvcj1cImluXCJcbiAgICByZXN1bHQ9XCJTVFJPS0VfMlwiXG4gID48L2ZlQ29tcG9zaXRlPlxuICA8ZmVDb21wb3NpdGVcbiAgICBpbj1cIkJFVkVMLWNvbG9yXCJcbiAgICBpbjI9XCJCRVZFTF8yXCJcbiAgICBvcGVyYXRvcj1cImluXCJcbiAgICByZXN1bHQ9XCJCRVZFTF8zXCJcbiAgPjwvZmVDb21wb3NpdGU+XG4gIDwhLS0gY29tYmluZSAtLT5cbiAgPGZlTWVyZ2UgcmVzdWx0PVwiZmluYWxcIj5cbiAgICA8ZmVNZXJnZU5vZGUgaW49XCJCRVZFTF8zXCI+PC9mZU1lcmdlTm9kZT5cbiAgICA8ZmVNZXJnZU5vZGUgaW49XCJTVFJPS0VfMlwiPjwvZmVNZXJnZU5vZGU+XG4gICAgPGZlTWVyZ2VOb2RlIGluPVwiU291cmNlR3JhcGhpY1wiPjwvZmVNZXJnZU5vZGU+XG4gIDwvZmVNZXJnZT5cbjwvZmlsdGVyPlxuXG48dGV4dFxueD1cIjQ4JVwiXG55PVwiNTUlXCJcbiAgY2xhc3M9XCJ0ZXh0LWNvbG9yIHN2Zy10ZXh0XCJcbj5cbiAgJHt0ZXh0fVxuPC90ZXh0PlxuPC9zdmc+XG5gO1xuICByZXR1cm4gdGV4dERpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZVN3aXRjaChpZCkge1xuICBjb25zdCB0b2dnbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2dnbGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZ2dsZS1kaXZcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICBpbnB1dC5pZCA9IGlkO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuaHRtbEZvciA9IGlkO1xuICB0b2dnbGVEaXYuYXBwZW5kKGlucHV0LCBsYWJlbCk7XG4gIHJldHVybiB0b2dnbGVEaXY7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=