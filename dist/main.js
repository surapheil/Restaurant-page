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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Sevillana&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Single+Day&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box; /* Optionally, include this for consistent box-sizing */\n}\n\n#content{\n    height: 100%;\n}\n\n.top{\n    background-color: #111827;\n    height: 10em;\n}\n\n.head{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 2em;\n    font-weight: 700;\n    display: flex;\n    justify-content: center;\n    padding: 1em;\n    color: #ecfdf5;\n\n}\n\n.container{\n    display: flex;\n    justify-content: center;\n    gap: 4em;\n    font-size: 1.3em;\n    color: #ecfccb;\n\n}\n\n\n.bgImg{\n    width: 100%;\n    height: 50em;\n    display: block;\n}\n\n.footer{\n    display: flex;\n    background-color: #111827;\n    color: #ecfccb;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 1rem;\n}\n\n.githubIcon{\n    width: 1rem;\n    height: 1rem;\n    background-color: #ecfccb;\n    border-radius: 100%;\n}\n\n.githubLink{\n    padding-top: 5px;\n}\n\n\n.main{\n    position: relative;\n}\n\n.pageHome{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1.4em;\n    color: #f1f5f9;\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: rgba(0,0,0, 0.5);\n    height: 25em;\n    width: 23em;\n    font-size: 24px;\n}\n\n.poster{\n    border-radius: 50%;\n}\n\n.imel{\n    font-family: 'Dancing Script', cursive;\n    font-weight: 700;\n    font-size: 3rem;\n}\n\n.dine{\n    font-family: 'Single Day', cursive;\n    font-weight: 600;\n    font-size: 2.8rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nfunction topPage(){\n    const home = document.createElement('button');\n    const menu = document.createElement('button');\n    const contact = document.createElement('button');\n    const container = document.createElement('div');\n    home.classList.add('home');\n    home.innerHTML = 'Home';\n    menu.classList.add('menu');\n    menu.innerHTML = 'Menu';\n    contact.classList.add('contact');\n    contact.innerHTML = 'Contact';\n    container.classList.add('container');\n    container.appendChild(home);\n    container.appendChild(menu);\n    container.appendChild(contact);\n    return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topPage);\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_2_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images (2).jpeg */ \"./src/assets/images (2).jpeg\");\n\nconst home = document.createElement('div');\nhome.classList.add('pageHome');\nfunction homePage(){\n    const imel = document.createElement('h2');\n    imel.classList.add('imel');\n    imel.innerHTML = `Im'EL`\n\n    const dine = document.createElement('p');\n    dine.classList.add('dine');\n    dine.innerHTML = 'Flavors unite @imEl!';\n\n    const poster = document.createElement('img');\n    poster.classList.add('poster');\n    poster.src = _assets_images_2_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n    const visit = document.createElement('p');\n    visit.classList.add('visit');\n    visit.innerHTML = 'Visit us or Order online'\n    home.appendChild(imel);\n    home.appendChild(dine);\n    home.appendChild(poster);\n    home.appendChild(visit);\n    return home;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage());\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_img2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img2.webp */ \"./src/assets/img2.webp\");\n/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/github.png */ \"./src/assets/github.png\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\nconst top = document.createElement('div');\nfunction topHeader(){ \n    top.classList.add('top');\n    const header = document.createElement('div');\n    header.classList.add('head');\n    header.innerHTML = 'ImEl';\n    top.appendChild(header);\n    top.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()); \n    return top;\n}    \n//appending the top to the content container\ncontent.appendChild(topHeader());\nconsole.log(topHeader());\n//adding background photo in for the main content\nconst mainCont = document.createElement('div');\nfunction main(){\n    mainCont.classList.add('main');\n    const img = document.createElement('img');\n    img.classList.add('bgImg');\n    img.src = _assets_img2_webp__WEBPACK_IMPORTED_MODULE_2__;\n    mainCont.appendChild(img);\n    mainCont.appendChild(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    //calling an event listener that will display the menu and contact when clicked\n    // const showMenuBtn = document.getElementsByClassName('menu');\n    // console.log(showMenuBtn);\n    // showMenuBtn.onclick = function (){\n    //     homePage.style.display = none;\n    //     mainCont.appendChild(menuContainer);\n    // }\n    // const showContactBtn = document.querySelector('.contact');\n\n    const githubBtn = document.querySelector('.menu');\n    githubBtn.addEventListener('click', () => { \n        mainCont.removeChild(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n        mainCont.appendChild(_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n    });\n    console.log(githubBtn);\n\n    return mainCont;\n}\n\n//append the img container to the main content\ncontent.appendChild(main());\n\n\n\nfunction createFooter(){\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n\n    const p = document.createElement('p');\n    const copyrightSymbol = '&copy;'\n    p.innerHTML = `Copyright ${copyrightSymbol} ${new Date().getFullYear()} SuraphelGashu `;\n    const a = document.createElement('a');\n    a.classList.add('githubLink');\n    a.href = \"https://github.com/surapheil\";\n    const githubIcon = document.createElement('img');\n    githubIcon.classList.add('githubIcon');\n    githubIcon.src = _assets_github_png__WEBPACK_IMPORTED_MODULE_3__;\n    a.appendChild(githubIcon);\n    footer.appendChild(p);\n    footer.appendChild(a);\n    return footer;\n}\n\ncontent.appendChild(createFooter());\n\nconsole.log(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_c2dd5d01_6710_4db1_9c6f_892ef4e84e4c_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/c2dd5d01-6710-4db1-9c6f-892ef4e84e4c.jpeg */ \"./src/assets/c2dd5d01-6710-4db1-9c6f-892ef4e84e4c.jpeg\");\n/* harmony import */ var _assets_f679badc_ca65_4305_851c_d7189d5d699d_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/f679badc-ca65-4305-851c-d7189d5d699d.jpeg */ \"./src/assets/f679badc-ca65-4305-851c-d7189d5d699d.jpeg\");\n/* harmony import */ var _assets_9e347296_c6d2_4dc8_a43f_04de12f55add_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/9e347296-c6d2-4dc8-a43f-04de12f55add.jpeg */ \"./src/assets/9e347296-c6d2-4dc8-a43f-04de12f55add.jpeg\");\n/* harmony import */ var _assets_7be0453e_2c10_456e_992e_97aa4d4f2c6b_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/7be0453e-2c10-456e-992e-97aa4d4f2c6b.jpeg */ \"./src/assets/7be0453e-2c10-456e-992e-97aa4d4f2c6b.jpeg\");\n/* harmony import */ var _assets_281800b0_c14f_4dbd_8707_8be10394b1dd_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/281800b0-c14f-4dbd-8707-8be10394b1dd.jpeg */ \"./src/assets/281800b0-c14f-4dbd-8707-8be10394b1dd.jpeg\");\n/* harmony import */ var _assets_a00ecbdb_f6af_486c_af1c_99d8a73463cc_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/a00ecbdb-f6af-486c-af1c-99d8a73463cc.jpeg */ \"./src/assets/a00ecbdb-f6af-486c-af1c-99d8a73463cc.jpeg\");\n\n\n\n\n\n\nconst menuContainer = document.createElement('div')\nfunction foodMenu(){\n    const item1 = document.createElement('div');\n    item1.classList.add('item1');\n    const item1Img = document.createElement('img');\n    item1Img.classList.add('item1Img');\n    item1Img.src = _assets_c2dd5d01_6710_4db1_9c6f_892ef4e84e4c_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    const item1Description = document.createElement('p');\n    item1Description.classList.add('disc1');\n    item1Description.innerHTML = 'food 1';\n    item1.appendChild(item1Img);\n    item1.appendChild(item1Description);\n\n    //---item 2\n    const item2 = document.createElement('div');\n    item2.classList.add('item1');\n    const item2Img = document.createElement('img');\n    item2Img.classList.add('item1Img');\n    item2Img.src = _assets_f679badc_ca65_4305_851c_d7189d5d699d_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    const item2Description = document.createElement('p');\n    item2Description.classList.add('disc1');\n    item2Description.innerHTML = 'food 2';\n    item2.appendChild(item2Img);\n    item2.appendChild(item2Description);\n\n    // ---item 3\n    const item3 = document.createElement('div');\n    item3.classList.add('item1');\n    const item3Img = document.createElement('img');\n    item3Img.classList.add('item1Img');\n    item3Img.src = _assets_9e347296_c6d2_4dc8_a43f_04de12f55add_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n    const item3Description = document.createElement('p');\n    item3Description.classList.add('disc1');\n    item3Description.innerHTML = 'food 3';\n    item3.appendChild(item3Img);\n    item3.appendChild(item3Description);\n\n    // ---item 4\n    const item4 = document.createElement('div');\n    item4.classList.add('item1');\n    const item4Img = document.createElement('img');\n    item4Img.classList.add('item1Img');\n    item4Img.src = _assets_7be0453e_2c10_456e_992e_97aa4d4f2c6b_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n    const item4Description = document.createElement('p');\n    item4Description.classList.add('disc1');\n    item4Description.innerHTML = 'food 4';\n    item4.appendChild(item4Img);\n    item4.appendChild(item4Description);\n\n    // ---item 5\n    const item5 = document.createElement('div');\n    item5.classList.add('item1');\n    const item5Img = document.createElement('img');\n    item5Img.classList.add('item1Img');\n    item5Img.src = _assets_281800b0_c14f_4dbd_8707_8be10394b1dd_jpeg__WEBPACK_IMPORTED_MODULE_4__;\n    const item5Description = document.createElement('p');\n    item5Description.classList.add('disc1');\n    item5Description.innerHTML = 'food 5';\n    item5.appendChild(item5Img);\n    item5.appendChild(item5Description);\n\n    // ---item 6\n    const item6 = document.createElement('div');\n    item6.classList.add('item1');\n    const item6Img = document.createElement('img');\n    item6Img.classList.add('item1Img');\n    item6Img.src = _assets_a00ecbdb_f6af_486c_af1c_99d8a73463cc_jpeg__WEBPACK_IMPORTED_MODULE_5__;\n    const item6Description = document.createElement('p');\n    item6Description.classList.add('disc1');\n    item6Description.innerHTML = 'food 6';\n    item6.appendChild(item6Img);\n    item6.appendChild(item6Description);\n\n    //append the items to the menu container\n    menuContainer.appendChild(item1);\n    menuContainer.appendChild(item2);\n    menuContainer.appendChild(item3);\n    menuContainer.appendChild(item4);\n    menuContainer.appendChild(item5);\n    menuContainer.appendChild(item6);\n\n    return menuContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodMenu());\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/281800b0-c14f-4dbd-8707-8be10394b1dd.jpeg":
/*!**************************************************************!*\
  !*** ./src/assets/281800b0-c14f-4dbd-8707-8be10394b1dd.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d90999d1328b3757577f.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/281800b0-c14f-4dbd-8707-8be10394b1dd.jpeg?");

/***/ }),

/***/ "./src/assets/7be0453e-2c10-456e-992e-97aa4d4f2c6b.jpeg":
/*!**************************************************************!*\
  !*** ./src/assets/7be0453e-2c10-456e-992e-97aa4d4f2c6b.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c3123b4a145837ab091.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/7be0453e-2c10-456e-992e-97aa4d4f2c6b.jpeg?");

/***/ }),

/***/ "./src/assets/9e347296-c6d2-4dc8-a43f-04de12f55add.jpeg":
/*!**************************************************************!*\
  !*** ./src/assets/9e347296-c6d2-4dc8-a43f-04de12f55add.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"543933a0950ec5388ab4.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/9e347296-c6d2-4dc8-a43f-04de12f55add.jpeg?");

/***/ }),

/***/ "./src/assets/a00ecbdb-f6af-486c-af1c-99d8a73463cc.jpeg":
/*!**************************************************************!*\
  !*** ./src/assets/a00ecbdb-f6af-486c-af1c-99d8a73463cc.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05aeb76064e2a819f27f.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/a00ecbdb-f6af-486c-af1c-99d8a73463cc.jpeg?");

/***/ }),

/***/ "./src/assets/c2dd5d01-6710-4db1-9c6f-892ef4e84e4c.jpeg":
/*!**************************************************************!*\
  !*** ./src/assets/c2dd5d01-6710-4db1-9c6f-892ef4e84e4c.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92b098ad05ce918384c7.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/c2dd5d01-6710-4db1-9c6f-892ef4e84e4c.jpeg?");

/***/ }),

/***/ "./src/assets/f679badc-ca65-4305-851c-d7189d5d699d.jpeg":
/*!**************************************************************!*\
  !*** ./src/assets/f679badc-ca65-4305-851c-d7189d5d699d.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c30def011e4bc25ad416.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/f679badc-ca65-4305-851c-d7189d5d699d.jpeg?");

/***/ }),

/***/ "./src/assets/github.png":
/*!*******************************!*\
  !*** ./src/assets/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e1fb0ef3b3c157f94db.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/github.png?");

/***/ }),

/***/ "./src/assets/images (2).jpeg":
/*!************************************!*\
  !*** ./src/assets/images (2).jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"542aef91704579107201.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images_(2).jpeg?");

/***/ }),

/***/ "./src/assets/img2.webp":
/*!******************************!*\
  !*** ./src/assets/img2.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f23eb904e4968c1b4d9f.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img2.webp?");

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