/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/core/index.ts":
/*!**************************!*\
  !*** ./ts/core/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    constructor() {
        this.info = "|主要核心|";
    }
    background(low_quality_url, high_quality_url) {
        const info = this.info + "背景加載器|";
        console.log(info + "開始運行");
        const img = new Image();
        const pre_background = document.getElementById('preload_background');
        const main_background = document.getElementById('main_background');
        const start_time = Date.now();
        image_load(pre_background, low_quality_url, () => {
            console.log(info + "加載成功低畫質背景");
            image_load(main_background, high_quality_url, () => {
                const done_time = Date.now();
                console.log(info + "加載成功高畫質背景");
                if ((done_time - start_time) <= 50) {
                    pre_background.remove();
                }
                else {
                    this.fade_out(pre_background, () => { pre_background.remove(); }, 1200);
                }
            });
        });
        function image_load(el, url, done) {
            img.src = url;
            img.addEventListener('load', () => {
                el.style.backgroundImage = `url(${url})`;
                done();
            }, { once: true });
        }
    }
    fade_out(el, done, time = 400) {
        const info = this.info + "淡出|";
        console.log(info + time + "ms");
        const opacity = getComputedStyle(el).opacity;
        const run_time = 10; //間隔 100ms
        const total_i = Math.floor(time / run_time); //總運行次數
        let i = total_i; //運行次數
        const interval = setInterval(run, run_time);
        run();
        function run() {
            el.style.opacity = opacity / total_i * i;
            i--;
            if (i === 0) {
                clearInterval(interval);
                done();
            }
        }
    }
});


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./ts/core/index.ts");

document.addEventListener('DOMContentLoaded', () => {
    const main = new _core__WEBPACK_IMPORTED_MODULE_0__.default();
    const image_file = "resources/images/background";
    main.background(`${image_file}_blur.webp`, `${image_file}.webp`);
}, { once: true });

})();

/******/ })()
;
//# sourceMappingURL=main.js.map