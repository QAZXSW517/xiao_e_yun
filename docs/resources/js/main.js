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
        this.__viewer = {};
        this.info = "|主要核心|";
    }
    DOM_ready(fun) {
        document.addEventListener('DOMContentLoaded', fun, { once: true });
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
                    pre_background.style.display = "none";
                }
                else {
                    this.fade_out(pre_background, () => { }, 1200);
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
    fade_in(el, done, time = 400) {
        const info = this.info + "淡入|";
        console.log(info + time + "ms");
        const opacity = getComputedStyle(el).opacity;
        if (el.style.display === "none") {
            el.style.display = "block";
        }
        const run_time = 10; //間隔 10ms
        const total_i = Math.floor(time / run_time); //總運行次數
        let i = total_i; //運行次數
        const interval = setInterval(run, run_time);
        run();
        function run() {
            i--;
            const fade_opacity = ((1 - opacity) / total_i * (total_i - i)) + opacity;
            el.style.opacity = fade_opacity;
            if (i === 0) {
                clearInterval(interval);
                if (done) {
                    done();
                }
            }
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
            i--;
            const fade_opacity = opacity / total_i * i;
            el.style.opacity = fade_opacity;
            if (i === 0) {
                clearInterval(interval);
                el.style.display = "none";
                if (done) {
                    done();
                }
            }
        }
    }
    viewer(key, val) {
        if (key === undefined) { //&&val===undefined
            return this.__viewer;
        }
        else if (val === undefined) {
            return this.__viewer[key];
        }
        else {
            if (val !== this.__viewer[key]) {
                try {
                    const $this = this;
                    const el = document.getElementById("$" + key);
                    if (el.style.display === "none" || el.style.opacity === "0" || $this.__viewer[key] === "" || $this.__viewer[key] === undefined) {
                        run();
                    }
                    else {
                        $this.fade_out(el, run);
                    }
                    function run() {
                        el.innerHTML = val;
                        $this.fade_in(el);
                    }
                }
                catch (e) {
                    const info = this.info + "viewer|";
                    console.warn(info + "未找到id:" + key, e);
                }
            }
            return this.__viewer[key] = val;
        }
    }
    on(el, event, fun) {
        el.addEventListener(event, fun, false);
        return this;
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

const main = new _core__WEBPACK_IMPORTED_MODULE_0__.default();
main.DOM_ready(() => {
    const image_file = "resources/images/background";
    main.background(`${image_file}_blur.webp`, `${image_file}.webp`);
    const your_name = sessionStorage.getItem("your_name") || "陌生人";
    main.viewer("your_name", `歡迎回來！${your_name}！`);
    hello_time();
    setInterval(hello_time, 300000);
    function hello_time() {
        const hr = new Date().getHours();
        let text = "";
        switch (hr) {
            case 23:
            case 0:
            case 1:
            case 2:
            case 3:
                text = `${your_name}還沒睡麻，${your_name}可不要一直熬夜喔~`;
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                text = `${your_name}早安喵~`;
                break;
            case 10:
            case 11:
                text = `${your_name}午安~快要到中午惹~`;
                break;
            case 12:
                text = `${your_name}~今天的午餐真好吃呢~`;
                break;
            case 13:
            case 14:
            case 15:
                text = `${your_name}午安~想要躺在${your_name}的懷裡~`;
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                text = `${your_name}晚上好呀~`;
                break;
            case 21:
            case 22:
                text = `${your_name}記得可要早點睡喔~`;
                break;
        }
        main.viewer("hello_time", text);
    }
    main.on(document.body, "click", (e) => {
        main.viewer("your_name", `歡迎回來！${your_name}！`);
        hello_time();
    }).on(document.getElementById("title"), "click", (e) => {
        e.stopPropagation();
        main.viewer("your_name", "想要怎麼叫你呢~");
        main.viewer("hello_time", "<input id='input_your_name' >");
    }).on(document.getElementById("hello_time"), "click", (e) => {
        e.stopPropagation();
        main.viewer("your_name", `${your_name}要找什麼東西嗎~`);
        main.viewer("hello_time", "<input id='input_your_name' >");
    });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map