/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/core/index.ts":
/*!**************************!*\
  !*** ./ts/core/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n    constructor() {\r\n        this.info = \"|主要核心|\";\r\n    }\r\n    background(low_quality_url, high_quality_url) {\r\n        const info = this.info + \"背景加載器|\";\r\n        console.log(info + \"開始運行\");\r\n        const img = new Image();\r\n        const pre_background = document.getElementById('preload_background');\r\n        const main_background = document.getElementById('main_background');\r\n        const start_time = Date.now();\r\n        image_load(pre_background, low_quality_url, () => {\r\n            console.log(info + \"加載成功低畫質背景\");\r\n            image_load(main_background, high_quality_url, () => {\r\n                const done_time = Date.now();\r\n                console.log(info + \"加載成功高畫質背景\");\r\n                if ((done_time - start_time) <= 50) {\r\n                    pre_background.remove();\r\n                }\r\n                else {\r\n                    this.fade_out(pre_background, () => { pre_background.remove(); }, 1200);\r\n                }\r\n            });\r\n        });\r\n        function image_load(el, url, done) {\r\n            img.src = url;\r\n            img.addEventListener('load', () => {\r\n                el.style.backgroundImage = `url(${url})`;\r\n                done();\r\n            }, { once: true });\r\n        }\r\n    }\r\n    fade_out(el, done, time = 400) {\r\n        const info = this.info + \"淡出|\";\r\n        console.log(info + time + \"ms\");\r\n        const opacity = getComputedStyle(el).opacity;\r\n        const run_time = 10; //間隔 100ms\r\n        const total_i = Math.floor(time / run_time); //總運行次數\r\n        let i = total_i; //運行次數\r\n        const interval = setInterval(run, run_time);\r\n        run();\r\n        function run() {\r\n            el.style.opacity = opacity / total_i * i;\r\n            i--;\r\n            if (i === 0) {\r\n                clearInterval(interval);\r\n                done();\r\n            }\r\n        }\r\n    }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vdHMvY29yZS9pbmRleC50cz9kYjkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZ0I7SUFDWjtRQXdETyxTQUFJLEdBQUcsUUFBUTtJQXZEdEIsQ0FBQztJQUNNLFVBQVUsQ0FBQyxlQUFzQixFQUFFLGdCQUF1QjtRQUM3RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFDLFFBQVE7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3ZCLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDcEUsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztRQUVsRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQzdCLFVBQVUsQ0FBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLEdBQUUsRUFBRTtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxXQUFXLENBQUM7WUFDN0IsVUFBVSxDQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxHQUFFLEVBQUU7Z0JBQzVDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLFdBQVcsQ0FBQztnQkFDN0IsSUFBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBRyxFQUFFLEVBQUM7b0JBQzdCLGNBQWMsQ0FBQyxNQUFNLEVBQUU7aUJBQzFCO3FCQUFJO29CQUNELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFDLEdBQUUsRUFBRSxHQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFDLElBQUksQ0FBQztpQkFDbkU7WUFDTCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7UUFFRixTQUFTLFVBQVUsQ0FBQyxFQUFjLEVBQUMsR0FBVSxFQUFDLElBQWE7WUFDdkQsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHO1lBQ2IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQzlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sR0FBRyxHQUFHO2dCQUN4QyxJQUFJLEVBQUU7WUFDVixDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFTSxRQUFRLENBQUMsRUFBYyxFQUFDLElBQWEsRUFBQyxPQUFZLEdBQUc7UUFDeEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxLQUFLO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLElBQUksR0FBQyxJQUFJLENBQUM7UUFFM0IsTUFBTSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBNEI7UUFFakUsTUFBTSxRQUFRLEdBQUcsRUFBRSxFQUFDLFVBQVU7UUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUMsT0FBTztRQUNuRCxJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUMsTUFBTTtRQUV0QixNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFDLFFBQVEsQ0FBQztRQUMxQyxHQUFHLEVBQUU7UUFFTCxTQUFTLEdBQUc7WUFDUCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQTZCLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDO1lBRS9ELENBQUMsRUFBRTtZQUNILElBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQztnQkFDUCxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUN2QixJQUFJLEVBQUU7YUFDVDtRQUNMLENBQUM7SUFDTCxDQUFDO0NBR0oiLCJmaWxlIjoiLi90cy9jb3JlL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICBkZWZhdWx0IGNsYXNze1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZChsb3dfcXVhbGl0eV91cmw6c3RyaW5nLCBoaWdoX3F1YWxpdHlfdXJsOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuaW5mbytcIuiDjOaZr+WKoOi8ieWZqHxcIlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8rXCLplovlp4vpgYvooYxcIilcclxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgICAgIGNvbnN0IHByZV9iYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWxvYWRfYmFja2dyb3VuZCcpXHJcbiAgICAgICAgY29uc3QgbWFpbl9iYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5fYmFja2dyb3VuZCcpXHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgaW1hZ2VfbG9hZChwcmVfYmFja2dyb3VuZCxsb3dfcXVhbGl0eV91cmwsKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5mbytcIuWKoOi8ieaIkOWKn+S9jueVq+izquiDjOaZr1wiKVxyXG4gICAgICAgICAgICBpbWFnZV9sb2FkKG1haW5fYmFja2dyb3VuZCxoaWdoX3F1YWxpdHlfdXJsLCgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb25lX3RpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvK1wi5Yqg6LyJ5oiQ5Yqf6auY55Wr6LOq6IOM5pmvXCIpXHJcbiAgICAgICAgICAgICAgICBpZigoZG9uZV90aW1lIC0gc3RhcnRfdGltZSk8PSA1MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlX2JhY2tncm91bmQucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFkZV9vdXQocHJlX2JhY2tncm91bmQsKCk9PntwcmVfYmFja2dyb3VuZC5yZW1vdmUoKX0sMTIwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGltYWdlX2xvYWQoZWw6SFRNTEVsZW1lbnQsdXJsOnN0cmluZyxkb25lOigpPT52b2lkKSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSB1cmxcclxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsfSlgXHJcbiAgICAgICAgICAgICAgICBkb25lKClcclxuICAgICAgICAgICAgfSx7b25jZTp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVfb3V0KGVsOkhUTUxFbGVtZW50LGRvbmU6KCk9PnZvaWQsdGltZTpudW1iZXI9NDAwKXtcclxuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5pbmZvK1wi5reh5Ye6fFwiXHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mbyt0aW1lK1wibXNcIilcclxuXHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9IGdldENvbXB1dGVkU3R5bGUoZWwpLm9wYWNpdHkgYXMgdW5rbm93biBhcyBudW1iZXJcclxuXHJcbiAgICAgICAgY29uc3QgcnVuX3RpbWUgPSAxMCAvL+mWk+malCAxMDBtc1xyXG4gICAgICAgIGNvbnN0IHRvdGFsX2kgPSBNYXRoLmZsb29yKHRpbWUgLyBydW5fdGltZSkgLy/nuL3pgYvooYzmrKHmlbhcclxuICAgICAgICBsZXQgaSA9IHRvdGFsX2kgLy/pgYvooYzmrKHmlbhcclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChydW4scnVuX3RpbWUpXHJcbiAgICAgICAgcnVuKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcnVuKCkgeyBcclxuICAgICAgICAgICAgKGVsLnN0eWxlLm9wYWNpdHkgYXMgdW5rbm93biBhcyBudW1iZXIpID0gb3BhY2l0eSAvIHRvdGFsX2kgKiBpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpLS1cclxuICAgICAgICAgICAgaWYoaSA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluZm8gPSBcInzkuLvopoHmoLjlv4N8XCJcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ts/core/index.ts\n");

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./ts/core/index.ts\");\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const main = new _core__WEBPACK_IMPORTED_MODULE_0__.default();\r\n    const image_file = \"resources/images/background\";\r\n    main.background(`${image_file}_blur.webp`, `${image_file}.webp`);\r\n}, { once: true });\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vdHMvbWFpbi50cz9mNzY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQThCO0FBQzlCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBSSwwQ0FBUyxFQUFFO0lBQzVCLE1BQU0sVUFBVSxHQUFHLDZCQUE2QjtJQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxZQUFZLEVBQUMsR0FBRyxVQUFVLE9BQU8sQ0FBQztBQUVuRSxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMiLCJmaWxlIjoiLi90cy9tYWluLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1haW5fY29yZSBmcm9tICcuL2NvcmUnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gbmV3IG1haW5fY29yZSgpXHJcbiAgICBjb25zdCBpbWFnZV9maWxlID0gXCJyZXNvdXJjZXMvaW1hZ2VzL2JhY2tncm91bmRcIlxyXG4gICAgbWFpbi5iYWNrZ3JvdW5kKGAke2ltYWdlX2ZpbGV9X2JsdXIud2VicGAsYCR7aW1hZ2VfZmlsZX0ud2VicGApXHJcbiAgICBcclxufSx7b25jZTp0cnVlfSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ts/main.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/main.ts");
/******/ 	
/******/ })()
;