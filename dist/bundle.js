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

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://zeon-2-module/./src/css/main.scss?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/js/modules/toggleMenu.js\");\n/* harmony import */ var _modules_getLocation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getLocation.js */ \"./src/js/modules/getLocation.js\");\n/* harmony import */ var _modules_modulePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modulePage.js */ \"./src/js/modules/modulePage.js\");\n/* harmony import */ var _modules_toggleModalPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/toggleModalPage.js */ \"./src/js/modules/toggleModalPage.js\");\n/* harmony import */ var _modules_consultationForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/consultationForm.js */ \"./src/js/modules/consultationForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modulePage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); \r\n(0,_modules_getLocation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_toggleModalPage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_consultationForm_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n\r\n\r\n\n\n//# sourceURL=webpack://zeon-2-module/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/consultationForm.js":
/*!********************************************!*\
  !*** ./src/js/modules/consultationForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validatingFormFunc.js */ \"./src/js/modules/validatingFormFunc.js\");\n\r\n\r\nfunction resetConsultationForm(){\r\n    const nameInput = document.querySelector(\".name\");\r\n    const emailInput = document.querySelector(\".email\");\r\n    const successfullyText = document.querySelector(\".successfully\");\r\n    const sendFormDataBtn = document.querySelector(\".consulting-form__btn\");\r\n    sendFormDataBtn.textContent = \"Получить консультацию\";\r\n    successfullyText.classList.add(\"d-none\");\r\n    nameInput.value = \"\";\r\n    emailInput.value = \"\";\r\n}\r\n\r\n\r\nfunction submittingConsultationData() {\r\n  const nameInput = document.querySelector(\".name\");\r\n  const emailInput = document.querySelector(\".email\");\r\n  const sendFormDataBtn = document.querySelector(\".consulting-form__btn\");\r\n  const successfullyText = document.querySelector(\".successfully\");\r\n  sendFormDataBtn.textContent = \"идет отправка...\";\r\n  sendFormDataBtn.disabled = true;\r\n  setTimeout(() => {\r\n    console.log({\r\n      name: nameInput.value,\r\n      email: emailInput.value,\r\n    });\r\n    sendFormDataBtn.disabled = false;\r\n    successfullyText.classList.remove(\"d-none\");\r\n    setTimeout(() => {\r\n        resetConsultationForm();\r\n    }, 1000);\r\n  }, 2000);\r\n}\r\n\r\nfunction consultationForm() {\r\n  const nameInput = document.querySelector(\".name\");\r\n  const emailInput = document.querySelector(\".email\");\r\n  const sendFormDataBtn = document.querySelector(\".consulting-form__btn\");\r\n\r\n  sendFormDataBtn?.addEventListener(\"click\", () => {\r\n    let inputNameValue = (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderValidation)(nameInput);\r\n    let inputEmailValue = (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderValidation)(emailInput);\r\n\r\n    nameInput.addEventListener(\"input\", () => {\r\n      (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderValidation)(nameInput);\r\n    });\r\n\r\n    emailInput.addEventListener(\"input\", () => {\r\n      (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderValidation)(emailInput);\r\n    });\r\n    if (inputNameValue === true && inputEmailValue === true) {\r\n      submittingConsultationData();\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consultationForm);\r\n\n\n//# sourceURL=webpack://zeon-2-module/./src/js/modules/consultationForm.js?");

/***/ }),

/***/ "./src/js/modules/getLocation.js":
/*!***************************************!*\
  !*** ./src/js/modules/getLocation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getLocation() {\r\n  const links = document.querySelectorAll(\".menu__link\");\r\n  links.forEach((element) => {\r\n    if (element.href == window.location.href) {\r\n      element.classList.add(\"menu__link--active\");\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);\r\n\n\n//# sourceURL=webpack://zeon-2-module/./src/js/modules/getLocation.js?");

/***/ }),

/***/ "./src/js/modules/modalPageFunc.js":
/*!*****************************************!*\
  !*** ./src/js/modules/modalPageFunc.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submittingFormData\": () => (/* binding */ submittingFormData),\n/* harmony export */   \"toggleForm\": () => (/* binding */ toggleForm),\n/* harmony export */   \"trackToInput\": () => (/* binding */ trackToInput)\n/* harmony export */ });\n/* harmony import */ var _validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validatingFormFunc.js */ \"./src/js/modules/validatingFormFunc.js\");\n\r\nfunction toggleForm() {\r\n  document.querySelector(\".modal-page\").classList.toggle(\"d-none\");\r\n  document.querySelector(\"body\").classList.toggle(\"overflow-hidden\");\r\n}\r\nfunction trackToInput() {\r\n  const nameInput = document.querySelector(\".name\");\r\n  const textarea = document.querySelector(\".big-text\");\r\n  const emailInput = document.querySelector(\".email\");\r\n\r\n  textarea.addEventListener(\"input\", () => {\r\n    (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderValidation)(textarea);\r\n  });\r\n\r\n  nameInput.addEventListener(\"input\", () => {\r\n    (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderValidation)(nameInput);\r\n  });\r\n\r\n  emailInput.addEventListener(\"input\", () => {\r\n    (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderValidation)(emailInput);\r\n  });\r\n}\r\n\r\n\r\n\r\nfunction resetForm() {\r\n  const nameInput = document.querySelector(\".name\");\r\n  const emailInput = document.querySelector(\".email\");\r\n  const textarea = document.querySelector(\".big-text\");\r\n  const successfullyText = document.querySelector(\".successfully\");\r\n  const sendFormDataBtn = document.querySelector(\".form__button-submit\");\r\n\r\n  sendFormDataBtn.value = \"отправить\";\r\n  successfullyText.classList.add(\"d-none\");\r\n  nameInput.value = \"\";\r\n  textarea.value = \"\";\r\n  emailInput.value = \"\";\r\n}\r\n\r\n\r\n\r\n\r\nfunction submittingFormData() {\r\n  const nameInput = document.querySelector(\".name\");\r\n  const emailInput = document.querySelector(\".email\");\r\n  const textArea = document.querySelector(\".big-text\");\r\n  const sendFormDataBtn = document.querySelector(\".form__button-submit\");\r\n  const successfullyText = document.querySelector(\".successfully\");\r\n \r\n  sendFormDataBtn.value = \"идет отправка...\";\r\n  sendFormDataBtn.disabled = true;\r\n  setTimeout(() => {\r\n    console.log({\r\n      name: nameInput.value,\r\n      email: emailInput.value,\r\n      problem: textArea.value,\r\n    });\r\n    sendFormDataBtn.disabled = false;\r\n    successfullyText.classList.remove(\"d-none\");\r\n    setTimeout(() => {\r\n      toggleForm();\r\n      resetForm();\r\n    }, 1000);\r\n  }, 2000);\r\n}\r\n\n\n//# sourceURL=webpack://zeon-2-module/./src/js/modules/modalPageFunc.js?");

/***/ }),

/***/ "./src/js/modules/modulePage.js":
/*!**************************************!*\
  !*** ./src/js/modules/modulePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modalPageFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalPageFunc.js */ \"./src/js/modules/modalPageFunc.js\");\n/* harmony import */ var _validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validatingFormFunc.js */ \"./src/js/modules/validatingFormFunc.js\");\n\r\n\r\n\r\nfunction modulePage() {\r\n  const sendFormDataBtn = document.querySelector(\".form__button-submit\");\r\n  const nameInput = document.querySelector(\".name\");\r\n  const textarea = document.querySelector(\".big-text\");\r\n  const emailInput = document.querySelector(\".email\");\r\n\r\n  sendFormDataBtn?.addEventListener(\"click\", () => {\r\n    let inputNameValid = (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_1__.renderValidation)(nameInput);\r\n    let inputEmailValid = (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_1__.renderValidation)(emailInput);\r\n    let inputTextAreaValid = (0,_validatingFormFunc_js__WEBPACK_IMPORTED_MODULE_1__.renderValidation)(textarea);\r\n    (0,_modalPageFunc_js__WEBPACK_IMPORTED_MODULE_0__.trackToInput)();\r\n    if (\r\n      inputNameValid === true &&\r\n      inputEmailValid === true &&\r\n      inputTextAreaValid === true\r\n    ) {\r\n      (0,_modalPageFunc_js__WEBPACK_IMPORTED_MODULE_0__.submittingFormData)();\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modulePage);\r\n\n\n//# sourceURL=webpack://zeon-2-module/./src/js/modules/modulePage.js?");

/***/ }),

/***/ "./src/js/modules/toggleMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/toggleMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleMenu(){\r\n    const menu=document.querySelector(\".mobail-menu\");\r\n    const burgerBtn=document.querySelector('.burger');\r\n\r\n    burgerBtn.classList.toggle(\"active\");\r\n    menu.classList.toggle(\"mobail-menu--active\");\r\n    document.querySelector(\"body\").classList.toggle(\"overflow-hidden\");\r\n}\r\nfunction openMenu() {\r\n    const burgerBtn=document.querySelector('.burger');\r\n    const closeMenu=document.querySelector(\".mobail-menu__close\");\r\n\r\n    closeMenu.addEventListener(\"click\", ()=> {\r\n        toggleMenu();\r\n    }) \r\n    burgerBtn.addEventListener(\"click\", ()=> {\r\n        toggleMenu();\r\n    }) \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openMenu);\n\n//# sourceURL=webpack://zeon-2-module/./src/js/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/js/modules/toggleModalPage.js":
/*!*******************************************!*\
  !*** ./src/js/modules/toggleModalPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modalPageFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalPageFunc */ \"./src/js/modules/modalPageFunc.js\");\n\r\nfunction toggleModalPage() {\r\n    const openBtn=document.querySelector(\"#open-modal\");\r\n    const closeBtn=document.querySelector(\".modal-page__close\");\r\n    const modalPage=document.querySelector(\".modal-page\");\r\n    const modalPageInner=document.querySelector(\".modal-page__inner\");\r\n\r\n    openBtn?.addEventListener(\"click\", _modalPageFunc__WEBPACK_IMPORTED_MODULE_0__.toggleForm)\r\n    closeBtn?.addEventListener(\"click\", _modalPageFunc__WEBPACK_IMPORTED_MODULE_0__.toggleForm)\r\n\r\n    modalPage?.addEventListener(\"click\", (e)=>{\r\n      if(e.path.indexOf(modalPageInner)===-1){\r\n        (0,_modalPageFunc__WEBPACK_IMPORTED_MODULE_0__.toggleForm)();\r\n      }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModalPage);\n\n//# sourceURL=webpack://zeon-2-module/./src/js/modules/toggleModalPage.js?");

/***/ }),

/***/ "./src/js/modules/validatingFormFunc.js":
/*!**********************************************!*\
  !*** ./src/js/modules/validatingFormFunc.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderValidation\": () => (/* binding */ renderValidation)\n/* harmony export */ });\nconst inputValidatingFunctions = {\r\n  name: [\r\n    function (value) {\r\n      if (value.length <= 0) {\r\n        return \"поле обязательно*\";\r\n      } else {\r\n        return \"\";\r\n      }\r\n    },\r\n    function (value) {\r\n      const capitalLetters = /[A-Z]|[А-Я]/;\r\n      if (capitalLetters.test(value[0])) {\r\n        return \"\";\r\n      } else {\r\n        return \"Первая буква должен быть заглавным*\";\r\n      }\r\n    },\r\n    function (value) {\r\n      if (value.length < 3) {\r\n        return \"должно быть более 3 символов*\";\r\n      }\r\n    },\r\n  ],\r\n  email: [\r\n    function (value) {\r\n      if (value.length <= 0) {\r\n        return \"поле обязательно*\";\r\n      } else {\r\n        return \"\";\r\n      }\r\n    },\r\n    function (value) {\r\n      if (value.length < 3) {\r\n        return \"должно быть более 3 символов*\";\r\n      }\r\n    },\r\n  ],\r\n  textarea: [\r\n    function (value) {\r\n      if (value.length <= 0) {\r\n        return \"поле обязательно*\";\r\n      } else {\r\n        return \"\";\r\n      }\r\n    },\r\n    function (value) {\r\n      if (value.length < 3) {\r\n        return \"должно быть более 3 символов*\";\r\n      }\r\n    },\r\n  ],\r\n};\r\n\r\nfunction renderValidation(formInput) {\r\n  const warningErrorText = document.querySelector(\r\n    `.warning-${formInput.name}-error`\r\n  );\r\n\r\n  let errorText = \"\";\r\n  inputValidatingFunctions[formInput.name].forEach((getErrorText) => {\r\n    if (errorText) return;\r\n    errorText = getErrorText(formInput.value);\r\n  });\r\n  warningErrorText.textContent = errorText;\r\n  formInput.classList.add(\"error\");\r\n  if (!errorText)\r\n  { \r\n    formInput.classList.remove(\"error\");\r\n    return true\r\n  } \r\n}\r\n\n\n//# sourceURL=webpack://zeon-2-module/./src/js/modules/validatingFormFunc.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;