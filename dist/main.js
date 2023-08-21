/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/PressStart2P-Regular.ttf */ \"./src/Fonts/PressStart2P-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Press Start';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n:root {\n    --radar-green: #63c45a;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n}\n\nbody {\n    background-color: #899687;\n    font-family: 'Press Start';\n}\n\n.main-wrapper {\n    grid-template: 100px 150px 575px 1fr / 1.2fr 2fr 2fr 1.2fr;\n    min-height: 875px;\n    display: grid;\n}\n\n.battleship-heading {\n    grid-area: 1 / 1 / 2 / 5;\n    padding-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.player-messages {\n    grid-area: 2 / 2 / 3 / 3;\n}\n\n.computer-messages {\n    grid-area: 2 / 3 / 3 / 4;\n}\n\n.player-messages, .computer-messages {\n    font-family: 'Press Start';\n   display: flex;\n   justify-content: center;\n   align-items: center;\n}\n\n.ship-placement-message {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    gap: 30px;\n    padding-top: 30px;\n}\n\n.ship-direction {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.ship-direction-button {\n    font-family: 'Press Start';\n    height: 28px;\n    width: 180px;\n}\n\n.player-ships {\n    grid-area: 3 / 1 / 4 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    gap: 20px;\n    padding-top: 70px;\n}\n\n.place-ship {\n    font-family: 'Press Start';\n    font-size: 0.7em;\n    height: 40px;\n    /* background-color: rgb(164, 206, 255); */\n    background-color: #d6d6d6;\n}\n\n#place-carrier, #computer-carrier {\n    width: 200px;\n}\n\n#place-battleship, #computer-battleship {\n    width: 160px;\n}\n\n#place-destroyer, #place-submarine, #computer-destroyer, #computer-submarine {\n    width: 120px;\n}\n\n#place-patrol-boat, #computer-patrol-boat {\n    width: 80px;\n}\n\n/* .ship-selected {\n    background-color: rgb(95, 170, 255);\n    box-shadow: 0 0 5px rgb(61, 61, 61) inset;\n} */\n\n.placed {\n    background-color: rgb(164, 206, 255);\n}\n\n.gameboard-one-container {\n    grid-area: 3 / 2 / 4 / 3;\n}\n\n.gameboard-two-container {\n    grid-area: 3 / 3 / 4 / 4;\n}\n\n.computer-ships {\n    grid-area: 3 / 4 / 4 / 5;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 20px;\n    padding-top: 70px;\n}\n\n.gameboard-one-container, .gameboard-two-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.gameboard {\n    border: 2px solid var(--radar-green);\n}\n\ntd {\n    height: 50px;\n    width: 50px;\n    border: 1px solid var(--radar-green);\n    background-color: #1c291e;\n}\n\n.show-hover:hover {\n    background-color: rgb(54, 78, 52);\n}\n\n.unclickable {\n    pointer-events: none;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.placement-preview {\n    background-color: rgb(20, 117, 20);\n}\n\n/* .player-square.adjacent-square {\n    background-color: #e7e7e7;\n} */\n\n.illegal-placement {\n    background-color: rgb(54, 78, 52);\n}\n\n.placed-ship {\n    background-color: rgb(36, 146, 26);\n}\n\n.miss, .hit {\n    height: 8px;\n    width: 8px;    \n    background-color: var(--radar-green);\n    border-radius: 50%;\n    margin: auto;\n    box-shadow: 0 0 3px 3px var(--radar-green);\n}\n\n.hit {\n    background-color: rgb(167, 12, 12);\n    box-shadow: 0 0 3px 3px rgb(167, 12, 12) ;\n}\n\n.sunk {\n    background-color: rgb(36, 146, 26);\n}\n\n.token-red {\n    background-color: #ffa5a5;\n}\n\n.play-again {\n    grid-area: 4 / 1 / 5 / 5;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#play-again-button {\n    height: 50px;\n    width: 200px;\n    font-family: 'Press Start';\n    background-color:  rgb(189, 84, 84);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addShipPlacedClass: () => (/* binding */ addShipPlacedClass),\n/* harmony export */   checkShipOverlap: () => (/* binding */ checkShipOverlap),\n/* harmony export */   clearMessages: () => (/* binding */ clearMessages),\n/* harmony export */   computerBoardDisplay: () => (/* binding */ computerBoardDisplay),\n/* harmony export */   computerMessage: () => (/* binding */ computerMessage),\n/* harmony export */   computerShips: () => (/* binding */ computerShips),\n/* harmony export */   displayHitMessage: () => (/* binding */ displayHitMessage),\n/* harmony export */   displayMissMessage: () => (/* binding */ displayMissMessage),\n/* harmony export */   displayPlacedShip: () => (/* binding */ displayPlacedShip),\n/* harmony export */   displaySunkMessage: () => (/* binding */ displaySunkMessage),\n/* harmony export */   getSquareFromDOM: () => (/* binding */ getSquareFromDOM),\n/* harmony export */   makeClickable: () => (/* binding */ makeClickable),\n/* harmony export */   makeUnclickable: () => (/* binding */ makeUnclickable),\n/* harmony export */   markShipAsSunk: () => (/* binding */ markShipAsSunk),\n/* harmony export */   markSquareAsHit: () => (/* binding */ markSquareAsHit),\n/* harmony export */   markSquareAsMissed: () => (/* binding */ markSquareAsMissed),\n/* harmony export */   placeShips: () => (/* binding */ placeShips),\n/* harmony export */   playAgain: () => (/* binding */ playAgain),\n/* harmony export */   playerBoardDisplay: () => (/* binding */ playerBoardDisplay),\n/* harmony export */   playerMessage: () => (/* binding */ playerMessage),\n/* harmony export */   setAdjacentSquares: () => (/* binding */ setAdjacentSquares),\n/* harmony export */   showShipsPlaced: () => (/* binding */ showShipsPlaced),\n/* harmony export */   turnShipTokenRed: () => (/* binding */ turnShipTokenRed),\n/* harmony export */   typewriter: () => (/* binding */ typewriter)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n\n\n//DOM ASSIGNMENTS\nconst playerBoardDisplay = document.getElementById(\"gameboard-one\");\nconst computerBoardDisplay = document.getElementById(\"gameboard-two\");\nconst playerMessage = document.querySelector(\".player-messages\");\nconst computerMessage = document.querySelector(\".computer-messages\");\nconst computerShips = document.querySelectorAll(\n  \".computer-ships button\"\n);\nconst playAgain = document.getElementById(\"play-again-button\");\nconst shipType = document.querySelector(\".ship-type\");\nconst placeCarrier = document.getElementById(\"place-carrier\");\nconst placeBattleship = document.getElementById(\"place-battleship\");\nconst placeDestroyer = document.getElementById(\"place-destroyer\");\nconst placeSubmarine = document.getElementById(\"place-submarine\");\nconst placePatrolBoat = document.getElementById(\"place-patrol-boat\");\nconst directionButton = document.querySelector(\".ship-direction-button\");\n\n//SETUP VARIABLES / CLASSES\nplaceCarrier.classList.add(\"ship-selected\");\nplayAgain.classList.add(\"hidden\");\nlet selectedShip = \"carrier\";\nlet currentShip = document.querySelector(`[data-ship=\"${selectedShip}\"]`);\nconst placeShips = [\n  placeCarrier,\n  placeBattleship,\n  placeDestroyer,\n  placeSubmarine,\n  placePatrolBoat,\n];\n\n//BUTTON EVENTS\ndirectionButton.addEventListener(\"click\", changeShipDirection);\nplayAgain.addEventListener(\"click\", () => window.location.reload());\n\n//FUNCTIONS FOR BUTTON EVENTS\nfunction removeShipSelection() {\n  for (let ship of placeShips) {\n    ship.classList.remove(\"ship-selected\");\n  }\n}\n\nfunction changeShipDirection() {\n  for (let ship of _game_js__WEBPACK_IMPORTED_MODULE_0__.player.ships) {\n    ship.changeDirection();\n  }\n  if (directionButton.textContent === \"Vertical\") {\n    directionButton.textContent = \"Horizontal\";\n  } else {\n    directionButton.textContent = \"Vertical\";\n  }\n}\n\nfunction addShowHoverClass(boardSquares, boardDisplay) {\n  for (let square of boardSquares) {\n    let currentSquare = boardDisplay.querySelector(\n      `[data-coord=\"${square.coords}\"]`\n    );\n    currentSquare.classList.add(\"show-hover\");\n  }\n}\n\n//PLAYER BOARD EVENTS\nfunction addPlayerBoardEvents() {\n  for (let square of _game_js__WEBPACK_IMPORTED_MODULE_0__.player.board.squares) {\n    let currentSquare = playerBoardDisplay.querySelector(\n      `[data-coord=\"${square.coords}\"]`\n    );\n    currentSquare.addEventListener(\"mouseover\", () => {\n      if (currentShip.classList.contains(\"placed\")) return;\n      createEvent(displayOccupiedSquares, square, currentSquare);\n    });\n    currentSquare.addEventListener(\"mouseout\", () => {\n      if (currentShip.classList.contains(\"placed\")) return;\n      createEvent(unOccupySquares, square, currentSquare);\n    });\n    currentSquare.addEventListener(\"click\", () => {\n      if (currentShip.classList.contains(\"placed\")) return;\n      if (currentSquare.classList.contains(\"illegal-placement\")) return;\n      if (currentSquare.classList.contains(\"placed-ship\")) return;\n      let squaresToOccupy = _game_js__WEBPACK_IMPORTED_MODULE_0__.player.board.addShip(_game_js__WEBPACK_IMPORTED_MODULE_0__.player[selectedShip], square);\n      _game_js__WEBPACK_IMPORTED_MODULE_0__.player.board.occupySquares(_game_js__WEBPACK_IMPORTED_MODULE_0__.player[selectedShip], squaresToOccupy);\n      addShipPlacedClass(squaresToOccupy, playerBoardDisplay);\n      createEvent(displayPlacedShip, square, currentSquare);\n      currentShip.classList.add(\"placed\");\n      prepareNextShip();\n      checkGameReady();\n    });\n  }\n}\n\n//FUNCTIONS FOR PLAYER BOARD EVENTS\nfunction createEvent(callback, square, currentSquare) {\n  let squaresToOccupy = _game_js__WEBPACK_IMPORTED_MODULE_0__.player.board.checkShipPlacement(\n    _game_js__WEBPACK_IMPORTED_MODULE_0__.player[selectedShip],\n    square\n  );\n  if (squaresToOccupy === false) {\n    displayIllegalPlacement(currentSquare);\n  } else {\n    callback(squaresToOccupy, playerBoardDisplay, _game_js__WEBPACK_IMPORTED_MODULE_0__.player, _game_js__WEBPACK_IMPORTED_MODULE_0__.player[selectedShip]);\n  }\n}\n\nfunction displayOccupiedSquares(squares, board) {\n  for (let square of squares) {\n    let currentSquare = board.querySelector(`[data-coord=\"${square.coords}\"]`);\n    if (checkShipOverlap(squares, board)) {\n      displayIllegalPlacement(currentSquare);\n      return;\n    }\n    currentSquare.classList.add(\"placement-preview\");\n  }\n}\n\nfunction unOccupySquares(squares, board) {\n  for (let square of squares) {\n    let currentSquare = board.querySelector(`[data-coord=\"${square.coords}\"]`);\n    if (checkShipOverlap(squares, board)) {\n      displayIllegalPlacement(currentSquare);\n      return;\n    }\n    currentSquare.classList.remove(\"placement-preview\");\n  }\n}\n\nfunction displayIllegalPlacement(square) {\n  square.classList.toggle(\"illegal-placement\");\n}\n\nfunction addShipPlacedClass(squares, board) {\n  for (let square of squares) {\n    let currentSquare = board.querySelector(`[data-coord=\"${square.coords}\"]`);\n    currentSquare.classList.add(\"has-ship\");\n  }\n}\n\nfunction displayPlacedShip(squares, board, currentPlayer, ship) {\n  for (let square of squares) {\n    let currentSquare = board.querySelector(`[data-coord=\"${square.coords}\"]`);\n    currentSquare.classList.remove(\"placement-preview\");\n    currentSquare.classList.add(\"placed-ship\");\n  }\n  setAdjacentSquares(squares, board, currentPlayer, ship);\n}\n\nfunction setAdjacentSquares(\n  squaresToOccupy,\n  board,\n  currentPlayer,\n  ship\n) {\n  const adjacentSquares = currentPlayer.board.getAdjacentSquares(\n    ship,\n    squaresToOccupy\n  );\n  for (let square of adjacentSquares) {\n    let currentSquare = board.querySelector(`[data-coord=\"${square.coords}\"]`);\n    currentSquare.classList.add(\"adjacent-square\");\n  }\n}\n\nfunction checkShipOverlap(squares, board) {\n  if (squares === false) return true;\n  const checkSquares = [];\n  for (let square of squares) {\n    let currentSquare = board.querySelector(`[data-coord=\"${square.coords}\"]`);\n    checkSquares.push(currentSquare);\n  }\n  return checkSquares.some(\n    (square) =>\n      square.classList.contains(\"has-ship\") ||\n      square.classList.contains(\"adjacent-square\")\n  );\n}\n\nfunction prepareNextShip() {\n  removeShipSelection();\n  let currentIndex = placeShips.indexOf(currentShip);\n  if (currentIndex < placeShips.length - 1) {\n    currentIndex++;\n  } else {\n    return;\n  }\n  currentShip = placeShips[currentIndex];\n  selectedShip = currentShip.getAttribute(\"data-ship\");\n  currentShip.classList.add(\"ship-selected\");\n  shipType.textContent = `Type: ${currentShip.textContent}`;\n}\n\nfunction checkGameReady() {\n  if (placeShips.every((ship) => ship.classList.contains(\"placed\"))) {\n    removeShipSelection();\n    makeUnclickable(\n      placeCarrier,\n      placeBattleship,\n      placeDestroyer,\n      placeSubmarine,\n      placePatrolBoat\n    );\n    hideButtons(directionButton);\n    addShowHoverClass(_game_js__WEBPACK_IMPORTED_MODULE_0__.computer.board.squares, computerBoardDisplay);\n    (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\n  }\n}\n\n//COMPUTER BOARD EVENTS\nfunction addComputerBoardEvents() {\n  for (let square of _game_js__WEBPACK_IMPORTED_MODULE_0__.computer.board.squares) {\n    let currentSquare = computerBoardDisplay.querySelector(\n      `[data-coord=\"${square.coords}\"]`\n    );\n    currentSquare.addEventListener(\"click\", () => {\n      if (\n        currentSquare.classList.contains(\"attacked\") ||\n        currentSquare.classList.contains(\"hit\")\n      )\n        return;\n      (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.attackSquare)(_game_js__WEBPACK_IMPORTED_MODULE_0__.computer, square.coords);\n      if (square.isOccupied) {\n        markSquareAsHit(currentSquare);\n        if (square.isOccupied.isSunk()) {\n          markShipAsSunk(computerBoardDisplay, square.isOccupied.placedCoords);\n          turnShipTokenRed(square.isOccupied, computerShips);\n          if ((0,_app_js__WEBPACK_IMPORTED_MODULE_1__.checkAllSunk)(_game_js__WEBPACK_IMPORTED_MODULE_0__.computer.ships)) {\n            (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.declareWinner)(_game_js__WEBPACK_IMPORTED_MODULE_0__.player);\n            return;\n          }\n          displaySunkMessage(playerMessage, square.isOccupied);\n        } else {\n          displayHitMessage(playerMessage);\n        }\n      } else {\n        markSquareAsMissed(currentSquare);\n        displayMissMessage(playerMessage);\n      }\n      currentSquare.classList.remove(\"show-hover\");\n      makeUnclickable(computerBoardDisplay);\n      if (_game_js__WEBPACK_IMPORTED_MODULE_0__.computer.board.winner === true || _game_js__WEBPACK_IMPORTED_MODULE_0__.player.board.winner === true)\n        return;\n      setTimeout(_app_js__WEBPACK_IMPORTED_MODULE_1__.computerTurn, 2500);\n    });\n  }\n}\n\n//OTHER FUNCTIONS\nfunction getSquareFromDOM(board, coords) {\n  return board.querySelector(`[data-coord=\"${coords}\"]`);\n}\n\nfunction markSquareAsMissed(square) {\n  const miss = document.createElement(\"div\");\n  square.classList.add(\"attacked\");\n  miss.classList.add(\"miss\");\n  square.appendChild(miss);\n}\n\nfunction markSquareAsHit(square) {\n  const hit = document.createElement(\"div\");\n  square.classList.add(\"attacked\");\n  square.classList.add(\"square-hit\");\n  hit.classList.add(\"hit\");\n  square.appendChild(hit);\n}\n\nfunction markShipAsSunk(board, shipsCoords) {\n  for (let coords of shipsCoords) {\n    let currentSquare = board.querySelector(`[data-coord=\"${coords}\"]`);\n    currentSquare.classList.add(\"sunk\");\n  }\n}\n\nfunction turnShipTokenRed(sunkenShip, playersShips) {\n  let shipToken;\n  for (let ship of playersShips) {\n    if (ship.getAttribute(\"data-ship\") === sunkenShip.id) {\n      shipToken = ship;\n    }\n  }\n  shipToken.classList.add(\"token-red\");\n}\n\nfunction clearMessages() {\n  playerMessage.textContent = \"\";\n  computerMessage.textContent = \"\";\n}\n\nfunction displayMissMessage(messageBox) {\n  clearMessages();\n  typewriter(messageBox, `It's a miss...`);\n}\n\nfunction displayHitMessage(messageBox) {\n  clearMessages();\n  typewriter(messageBox, `It's a hit!`);\n}\n\nfunction displaySunkMessage(messageBox, ship) {\n  clearMessages();\n  if (messageBox === playerMessage) {\n    typewriter(messageBox, `You sunk Computers ${ship.name}!`);\n  } else {\n    typewriter(messageBox, `Computer sunk your ${ship.name}!`);\n  }\n}\n\nfunction typewriter(messageBox, message, i = 0) {\n  if (i < message.length) {\n    messageBox.textContent += message.charAt(i);\n    i++;\n    setTimeout(() => typewriter(messageBox, message, i), 50);\n  }\n}\n\nfunction hideButtons(...args) {\n  for (let button of args) {\n    button.classList.add(\"hidden\");\n  }\n}\n\nfunction makeClickable(...elements) {\n  for (let element of elements) {\n    element.classList.remove(\"unclickable\");\n  }\n}\n\nfunction makeUnclickable(...elements) {\n  for (let element of elements) {\n    element.classList.add(\"unclickable\");\n  }\n}\n\nfunction showShipsPlaced(ships) {\n  for (let ship of ships) {\n    ship.classList.add(\"placed\");\n  }\n}\n\n//DISPLAY BOARDS\nfunction displayBoard(board, boardTable) {\n  for (let square of board.squares) {\n    const tableSquare = document.createElement(\"td\");\n    tableSquare.setAttribute(\"data-coord\", square.coords);\n    const currentRow = boardTable.querySelector(`.row${square.row}`);\n    currentRow.appendChild(tableSquare);\n    if (board === _game_js__WEBPACK_IMPORTED_MODULE_0__.player.board) {\n      tableSquare.classList.add(\"player-square\");\n    }\n  }\n}\n\nfunction initializeGame() {\n  displayBoard(_game_js__WEBPACK_IMPORTED_MODULE_0__.player.board, playerBoardDisplay);\n  addPlayerBoardEvents();\n  displayBoard(_game_js__WEBPACK_IMPORTED_MODULE_0__.computer.board, computerBoardDisplay);\n  addComputerBoardEvents();\n  makeUnclickable(computerBoardDisplay);\n}\n\ninitializeGame();\n\n\n//# sourceURL=webpack://battleships/./src/UI.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attackSquare: () => (/* binding */ attackSquare),\n/* harmony export */   checkAllSunk: () => (/* binding */ checkAllSunk),\n/* harmony export */   computerTurn: () => (/* binding */ computerTurn),\n/* harmony export */   decideFirstTurn: () => (/* binding */ decideFirstTurn),\n/* harmony export */   declareWinner: () => (/* binding */ declareWinner),\n/* harmony export */   flagSquaresAdjacentToSunkShip: () => (/* binding */ flagSquaresAdjacentToSunkShip),\n/* harmony export */   playerTurn: () => (/* binding */ playerTurn),\n/* harmony export */   randomCoords: () => (/* binding */ randomCoords),\n/* harmony export */   randomNumber: () => (/* binding */ randomNumber)\n/* harmony export */ });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _computer_logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer-logic.js */ \"./src/computer-logic.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\n\nfunction decideFirstTurn() {\n  const number = randomNumber(10);\n  if (number >= 0 && number <= 4) {\n    return \"player\";\n  } else {\n    return \"computer\";\n  }\n}\n\nfunction playerTurn(firstTurn) {\n  if (_game_js__WEBPACK_IMPORTED_MODULE_2__.computer.board.winner === true || _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.winner === true) return;\n  if (firstTurn !== \"player\") {\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.typewriter)(_UI_js__WEBPACK_IMPORTED_MODULE_0__.playerMessage, \"Players turn.\");\n  }\n  setTimeout(() => (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.makeClickable)(_UI_js__WEBPACK_IMPORTED_MODULE_0__.computerBoardDisplay), 1500);\n}\n\nfunction computerTurn(firstTurn) {\n  if (firstTurn !== \"computer\") {\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.typewriter)(_UI_js__WEBPACK_IMPORTED_MODULE_0__.computerMessage, `Computers turn.`);\n  }\n  setTimeout(_computer_logic_js__WEBPACK_IMPORTED_MODULE_1__.attackPlayer, 2500);\n  setTimeout(playerTurn, 5000);\n}\n\nfunction attackSquare(targetPlayer, coords) {\n  targetPlayer.board.recieveAttack(coords);\n}\n\nfunction checkAllSunk(ships) {\n  return ships.every((ship) => ship.isSunk() === true);\n}\n\nfunction flagSquaresAdjacentToSunkShip(squares) {\n  const boardSquares = (0,_computer_logic_js__WEBPACK_IMPORTED_MODULE_1__.getDOMSquares)(squares);\n  for (let square of boardSquares) {\n    square.classList.add(\"adjacent-to-sunk-ship\");\n  }\n}\n\nfunction declareWinner(winningPlayer) {\n  (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.clearMessages)();\n  if (winningPlayer === _game_js__WEBPACK_IMPORTED_MODULE_2__.player) {\n    _UI_js__WEBPACK_IMPORTED_MODULE_0__.playerMessage.textContent = `${winningPlayer.name} Wins!`;\n  } else if (winningPlayer === _game_js__WEBPACK_IMPORTED_MODULE_2__.computer) {\n    _UI_js__WEBPACK_IMPORTED_MODULE_0__.computerMessage.textContent = `${winningPlayer.name} Wins!`;\n  }\n  winningPlayer.board.makeWinner();\n  (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__.makeUnclickable)(_UI_js__WEBPACK_IMPORTED_MODULE_0__.computerBoardDisplay);\n  _UI_js__WEBPACK_IMPORTED_MODULE_0__.playAgain.classList.remove(\"hidden\");\n}\n\nfunction randomNumber(num) {\n  return Math.floor(Math.random() * num);\n}\n\nfunction randomCoords() {\n  return `${randomNumber(10)}, ${randomNumber(10)}`;\n}\n\n\n//# sourceURL=webpack://battleships/./src/app.js?");

/***/ }),

/***/ "./src/computer-logic.js":
/*!*******************************!*\
  !*** ./src/computer-logic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attackPlayer: () => (/* binding */ attackPlayer),\n/* harmony export */   getDOMSquares: () => (/* binding */ getDOMSquares),\n/* harmony export */   hardCodeAttack: () => (/* binding */ hardCodeAttack),\n/* harmony export */   placeComputerShips: () => (/* binding */ placeComputerShips)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\n\nlet boardSquare;\nlet squareToAttack;\n\nfunction placeComputerShips() {\n  for (let ship of _game_js__WEBPACK_IMPORTED_MODULE_2__.computer.ships) {\n    setRandomShipDirection(ship);\n    let squaresToOccupy = _game_js__WEBPACK_IMPORTED_MODULE_2__.computer.board.addShip(\n      ship,\n      _game_js__WEBPACK_IMPORTED_MODULE_2__.computer.board.getSquare((0,_app_js__WEBPACK_IMPORTED_MODULE_0__.randomCoords)())\n    );\n    let overlap = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.checkShipOverlap)(squaresToOccupy, _UI_js__WEBPACK_IMPORTED_MODULE_1__.computerBoardDisplay);\n    while (squaresToOccupy === false || overlap === true) {\n      squaresToOccupy = _game_js__WEBPACK_IMPORTED_MODULE_2__.computer.board.addShip(\n        ship,\n        _game_js__WEBPACK_IMPORTED_MODULE_2__.computer.board.getSquare((0,_app_js__WEBPACK_IMPORTED_MODULE_0__.randomCoords)())\n      );\n      overlap = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.checkShipOverlap)(squaresToOccupy, _UI_js__WEBPACK_IMPORTED_MODULE_1__.computerBoardDisplay);\n    }\n    _game_js__WEBPACK_IMPORTED_MODULE_2__.computer.board.occupySquares(ship, squaresToOccupy);\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.addShipPlacedClass)(squaresToOccupy, _UI_js__WEBPACK_IMPORTED_MODULE_1__.computerBoardDisplay);\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.setAdjacentSquares)(squaresToOccupy, _UI_js__WEBPACK_IMPORTED_MODULE_1__.computerBoardDisplay, _game_js__WEBPACK_IMPORTED_MODULE_2__.computer, ship);\n  }\n  (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.showShipsPlaced)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.computerShips);\n}\n\nfunction attackPlayer() {\n  if (\n    _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.lastSquareHit === \"\" ||\n    _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.lastSquareHit.isOccupied.isSunk()\n  ) {\n    boardSquare = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay, (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.randomCoords)());\n    while (\n      boardSquare.classList.contains(\"attacked\") ||\n      boardSquare.classList.contains(\"adjacent-to-sunk-ship\")\n    ) {\n      boardSquare = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay, (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.randomCoords)());\n    }\n    squareToAttack = _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(\n      boardSquare.getAttribute(\"data-coord\")\n    );\n  } else {\n    aimForAdjacentSquare(_game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.lastSquareHit);\n  }\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.attackSquare)(_game_js__WEBPACK_IMPORTED_MODULE_2__.player, squareToAttack.coords);\n  if (squareToAttack.isOccupied) {\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.markSquareAsHit)(boardSquare);\n    _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.lastSquareHit = squareToAttack;\n    if (squareToAttack.isOccupied.isSunk()) {\n      (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.markShipAsSunk)(\n        _UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay,\n        squareToAttack.isOccupied.placedCoords\n      );\n      (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.turnShipTokenRed)(squareToAttack.isOccupied, _UI_js__WEBPACK_IMPORTED_MODULE_1__.placeShips);\n      (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.flagSquaresAdjacentToSunkShip)(squareToAttack.isOccupied.adjacentSquares);\n      if ((0,_app_js__WEBPACK_IMPORTED_MODULE_0__.checkAllSunk)(_game_js__WEBPACK_IMPORTED_MODULE_2__.player.ships)) {\n        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.declareWinner)(_game_js__WEBPACK_IMPORTED_MODULE_2__.computer);\n        return;\n      }\n      (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.displaySunkMessage)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.computerMessage, squareToAttack.isOccupied);\n    } else {\n      (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.displayHitMessage)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.computerMessage);\n    }\n  } else {\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.markSquareAsMissed)(boardSquare);\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.displayMissMessage)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.computerMessage);\n  }\n}\n\nfunction aimForAdjacentSquare(lastHit) {\n  const adjacent = getLeftRightUpDownAdjacentSquares(lastHit);\n  const boardSquares = getDOMSquares(adjacent);\n  let adjacentHit = boardSquares.filter((square) =>\n    square.classList.contains(\"square-hit\")\n  );\n  if (adjacentHit.length == 2) {\n    adjacentHit = adjacentHit.filter(\n      (square) => !square.classList.contains(\"checked\")\n    );\n  }\n  if (adjacentHit.length == 1) {\n    const adjSquare = calculateNextMove(lastHit, adjacentHit[0]);\n    if (boardSquare === null || boardSquare.classList.contains(\"attacked\")) {\n      lastHit = adjSquare;\n      aimForAdjacentSquare(lastHit);\n    }\n  } else {\n    const freeSquares = boardSquares.filter(\n      (square) =>\n        !square.classList.contains(\"attacked\") &&\n        !square.classList.contains(\"adjacent-to-sunk-ship\")\n    );\n    boardSquare = freeSquares[(0,_app_js__WEBPACK_IMPORTED_MODULE_0__.randomNumber)(freeSquares.length - 1)];\n  }\n  boardSquare.classList.add(\"checked\");\n  squareToAttack = _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(\n    boardSquare.getAttribute(\"data-coord\")\n  );\n}\n\nfunction getLeftRightUpDownAdjacentSquares(lastHit) {\n  let adjacentSquares = [];\n  let xCoord = lastHit.col;\n  let yCoord = lastHit.row;\n  adjacentSquares.push(_game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(`${xCoord}, ${yCoord - 1}`));\n  adjacentSquares.push(_game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(`${xCoord + 1}, ${yCoord}`));\n  adjacentSquares.push(_game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(`${xCoord}, ${yCoord + 1}`));\n  adjacentSquares.push(_game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(`${xCoord - 1}, ${yCoord}`));\n  const filtered = adjacentSquares.filter((square) => square !== undefined);\n  return filtered;\n}\n\nfunction getDOMSquares(arrayOfSquares) {\n  let boardSquares = [];\n  for (let square of arrayOfSquares) {\n    boardSquares.push((0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay, square.coords));\n  }\n  return boardSquares;\n}\n\nfunction calculateNextMove(lastHit, adjacentHit) {\n  const adjSquare = _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(\n    adjacentHit.getAttribute(\"data-coord\")\n  );\n  if (lastHit.col < adjSquare.col) {\n    boardSquare = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(\n      _UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay,\n      `${lastHit.col - 1}, ${lastHit.row}`\n    );\n  } else if (lastHit.col > adjSquare.col) {\n    boardSquare = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(\n      _UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay,\n      `${lastHit.col + 1}, ${lastHit.row}`\n    );\n  } else if (lastHit.row < adjSquare.row) {\n    boardSquare = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(\n      _UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay,\n      `${lastHit.col}, ${lastHit.row - 1}`\n    );\n  } else if (lastHit.row > adjSquare.row) {\n    boardSquare = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(\n      _UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay,\n      `${lastHit.col}, ${lastHit.row + 1}`\n    );\n  }\n  return adjSquare;\n}\n\nfunction setRandomShipDirection(ship) {\n  const number = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.randomNumber)(10);\n  if (number >= 0 && number <= 4) {\n    ship.direction = \"vertical\";\n  } else if (number >= 5 && number <= 9) {\n    ship.direction = \"horizontal\";\n  }\n}\n\nfunction hardCodeAttack(coords) {\n  const square = _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.getSquare(coords);\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.attackSquare)(_game_js__WEBPACK_IMPORTED_MODULE_2__.player, square.coords);\n  const boardSquare = (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.getSquareFromDOM)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.playerBoardDisplay, square.coords);\n  (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.markSquareAsHit)(boardSquare);\n  _game_js__WEBPACK_IMPORTED_MODULE_2__.player.board.lastSquareHit = square;\n}\n\n\n//# sourceURL=webpack://battleships/./src/computer-logic.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   player: () => (/* binding */ player),\n/* harmony export */   startGame: () => (/* binding */ startGame),\n/* harmony export */   winner: () => (/* binding */ winner)\n/* harmony export */ });\n/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ \"./src/players.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _computer_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-logic.js */ \"./src/computer-logic.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n\n\n\nlet player = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Player\");\nlet computer = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Computer\");\nlet winner = false;\n\nfunction startGame() {\n  (0,_computer_logic_js__WEBPACK_IMPORTED_MODULE_2__.placeComputerShips)();\n  const firstTurn = (0,_app_js__WEBPACK_IMPORTED_MODULE_3__.decideFirstTurn)();\n  if (firstTurn === \"player\") {\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.clearMessages)();\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.typewriter)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.playerMessage, \"Player goes first...\");\n    (0,_app_js__WEBPACK_IMPORTED_MODULE_3__.playerTurn)(firstTurn);\n  } else {\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.clearMessages)();\n    (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.typewriter)(_UI_js__WEBPACK_IMPORTED_MODULE_1__.computerMessage, \"Computer goes first...\");\n    (0,_app_js__WEBPACK_IMPORTED_MODULE_3__.computerTurn)(firstTurn);\n  }\n}\n\n\n//# sourceURL=webpack://battleships/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeGameboard: () => (/* binding */ initializeGameboard)\n/* harmony export */ });\nfunction initializeGameboard() {\n  const boardSquares = [];\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      boardSquares.push(createSquare(i, j));\n    }\n  }\n  return {\n    squares: boardSquares,\n    getSquare: function (coordinates) {\n      return this.squares.find((square) => square.coords === coordinates);\n    },\n    addShip: function (ship, square) {\n      let squaresToOccupy = this.checkShipPlacement(ship, square);\n      return squaresToOccupy;\n    },\n    checkShipPlacement: function (ship, square) {\n      if (ship.direction === \"vertical\") {\n        return ship.length + square.row <= 10\n          ? this.getSquaresToOccupy(ship, square)\n          : false;\n      } else if (ship.direction === \"horizontal\") {\n        return ship.length + square.col <= 10\n          ? this.getSquaresToOccupy(ship, square)\n          : false;\n      }\n    },\n    getSquaresToOccupy: function (ship, frontSquare) {\n      const squaresToOccupy = [frontSquare];\n      let xCoord = frontSquare.col;\n      let yCoord = frontSquare.row;\n      for (let i = 1; i < ship.length; i++) {\n        if (ship.direction === \"vertical\") {\n          yCoord++;\n        } else if (ship.direction === \"horizontal\") {\n          xCoord++;\n        }\n        let currentSquare = this.getSquare(`${xCoord}, ${yCoord}`);\n        squaresToOccupy.push(currentSquare);\n      }\n      return squaresToOccupy;\n    },\n    getAdjacentSquares: function (ship, squaresToOccupy) {\n      const finalAdjacentSquares = [];\n      for (let square of squaresToOccupy) {\n        const allAdjacentSquares = this.calculateAdjacentSquares(square);\n        for (let square of allAdjacentSquares) {\n          if (\n            square !== undefined &&\n            square.isOccupied === false &&\n            !square.isAdjacentTo.some((e) => e.name === ship.name)\n          ) {\n            square.isAdjacentTo.push(ship);\n            ship.adjacentSquares.push(square);\n            finalAdjacentSquares.push(square);\n          }\n        }\n      }\n      return finalAdjacentSquares;\n    },\n    calculateAdjacentSquares: function (square) {\n      const adjacentSquares = [];\n      let xCoord = square.col;\n      let yCoord = square.row;\n      adjacentSquares.push(this.getSquare(`${xCoord}, ${yCoord - 1}`));\n      adjacentSquares.push(this.getSquare(`${xCoord + 1}, ${yCoord - 1}`));\n      adjacentSquares.push(this.getSquare(`${xCoord + 1}, ${yCoord}`));\n      adjacentSquares.push(this.getSquare(`${xCoord + 1}, ${yCoord + 1}`));\n      adjacentSquares.push(this.getSquare(`${xCoord}, ${yCoord + 1}`));\n      adjacentSquares.push(this.getSquare(`${xCoord - 1}, ${yCoord + 1}`));\n      adjacentSquares.push(this.getSquare(`${xCoord - 1}, ${yCoord}`));\n      adjacentSquares.push(this.getSquare(`${xCoord - 1}, ${yCoord - 1}`));\n      return adjacentSquares;\n    },\n    occupySquares: function (ship, squaresToOccupy) {\n      for (let square of squaresToOccupy) {\n        square.isOccupied = ship;\n        ship.placedCoords.push(square.coords);\n      }\n    },\n    recieveAttack: function (coordinates) {\n      const currentSquare = this.getSquare(coordinates);\n      if (currentSquare.attacked === true) return;\n      if (currentSquare.isOccupied !== false) {\n        let ship = currentSquare.isOccupied;\n        ship.hit();\n      }\n      currentSquare.attacked = true;\n    },\n    lastSquareHit: \"\",\n    hasShips: function () {\n      return this.squares.some((square) => square.isOccupied !== false);\n    },\n    winner: false,\n    makeWinner: function () {\n      this.winner = true;\n    },\n  };\n}\n\nfunction createSquare(x, y) {\n  return {\n    coords: `${x}, ${y}`,\n    row: y,\n    col: x,\n    isOccupied: false,\n    isAdjacentTo: [],\n    attacked: false,\n  };\n}\n\n\n//# sourceURL=webpack://battleships/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\n\nfunction Player(name) {\n  const board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.initializeGameboard)();\n  const carrier = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"Carrier\", \"carrier\", 5);\n  const battleship = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"Battleship\", \"battleship\", 4);\n  const destroyer = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"Destroyer\", \"destroyer\", 3);\n  const submarine = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"Submarine\", \"submarine\", 3);\n  const patrolBoat = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(\"Patrol Boat\", \"patrolBoat\", 2);\n  const ships = [carrier, battleship, destroyer, submarine, patrolBoat];\n  return {\n    name,\n    board,\n    carrier,\n    battleship,\n    destroyer,\n    submarine,\n    patrolBoat,\n    ships,\n  };\n}\n\n\n//# sourceURL=webpack://battleships/./src/players.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(name, id, length) {\n  return {\n    name,\n    id,\n    length,\n    hits: 0,\n    direction: \"vertical\",\n    changeDirection: function () {\n      if (this.direction === \"vertical\") {\n        this.direction = \"horizontal\";\n      } else if (this.direction === \"horizontal\") {\n        this.direction = \"vertical\";\n      }\n    },\n    hit: function () {\n      this.hits++;\n    },\n    isSunk: function () {\n      return this.hits === this.length ? true : false;\n    },\n    placedCoords: [],\n    adjacentSquares: [],\n  };\n}\n\n\n//# sourceURL=webpack://battleships/./src/ships.js?");

/***/ }),

/***/ "./src/Fonts/PressStart2P-Regular.ttf":
/*!********************************************!*\
  !*** ./src/Fonts/PressStart2P-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21503c6a5385ab41dde9.ttf\";\n\n//# sourceURL=webpack://battleships/./src/Fonts/PressStart2P-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;