/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/addition.js":
/*!********************************!*\
  !*** ./src/blocks/addition.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return btnAddition; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save.js */ "./src/blocks/save.js");
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.js */ "./src/blocks/load.js");
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level.js */ "./src/blocks/level.js");
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound.js */ "./src/blocks/sound.js");
/* eslint-disable import/extensions */







function btnAddition() {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'плюшки', buttons, ['type', 'button']);
  let isOpenAdds = false

  btn.addEventListener('click', () => {

    if (!isOpenAdds) {
      Object(_save_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      Object(_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      Object(_level_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      Object(_sound_js__WEBPACK_IMPORTED_MODULE_4__["btnSound"])();
      isOpenAdds = !isOpenAdds
    } else {
      isOpenAdds = !isOpenAdds
      for (let i = 0; i < 4; i++) {
        buttons.removeChild(buttons.lastChild)
      }
    }
  });
}


/***/ }),

/***/ "./src/blocks/capitulate.js":
/*!**********************************!*\
  !*** ./src/blocks/capitulate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitulate; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.js */ "./src/blocks/field.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ "./src/main.js");
/* eslint-disable import/extensions */





function capitulate(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'сдаюсь', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    console.log('я еще не работаю, я маленькая')
  })
}


/***/ }),

/***/ "./src/blocks/cell.js":
/*!****************************!*\
  !*** ./src/blocks/cell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cell; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* eslint-disable import/extensions */


class Cell {
  constructor(inner, parent, top, left) {
    this.inner = inner;
    this.top = top;
    this.left = left;
    this.cell = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'cell', `${inner}`, parent);
    this.cell.style.gridColumnStart = `${this.left}`;
    this.cell.style.gridRowStart = `${this.top}`;
  }
}


/***/ }),

/***/ "./src/blocks/field.js":
/*!*****************************!*\
  !*** ./src/blocks/field.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Field; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell.js */ "./src/blocks/cell.js");
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.js */ "./src/blocks/sound.js");
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */






class Field {
  constructor(size = 4) {
    this.size = size;
  }

  init() {
    const main = document.querySelector('main');
    this.field = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'field', null, main);
    this.field.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.field.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
    document.body.append(main);
    return this;
  }

  generate() {
    let countCell = this.size * this.size;
    const numbers = [...Array(countCell - 1).keys()]
      .map(x => x + 1)
      .sort(() => Math.random() - 0.5)
    localStorage.setItem('currentGame', numbers);

    return numbers
  }

  draw(isNew) {
    let countCell = this.size * this.size;
    let numbers
    const empty = {
      value: countCell - 1,
      left: this.size,
      top: this.size
    }
    this.cells = [];

    if (isNew) {
      numbers = this.generate();
    } else {
      numbers = localStorage.getItem('currentGame').split(',')
    }
    const move = (item) => {
      const leftDiff = Math.abs(empty.left - item.left);
      const topDiff = Math.abs(empty.top - item.top);
      const cellMoved = item;
      let countRight = 0

      if (leftDiff + topDiff > 1) {
        return;
      } else {
        const emptyLeft = empty.left;
        const emptyTop = empty.top;
        empty.left = cellMoved.left;
        empty.top = cellMoved.top;
        cellMoved.left = emptyLeft;
        cellMoved.top = emptyTop;
        cellMoved.element.style.gridColumnStart = `${emptyLeft}`;
        cellMoved.element.style.gridRowStart = `${emptyTop}`;
      }

      for (let i = 0; i < countCell - 1; i++) {
        let position = (this.cells[i].top - 1) * this.size + this.cells[i].left;

        if (position == this.cells[i].value) {
          countRight++;
          this.cells[i].element.style.opacity = '0.8'
        } else {
          this.cells[i].element.style.opacity = '1'
        }

        if (countRight === countCell - 1) {
          this.cells.forEach(el => el.element.style.opacity = '0.1')
        }
      }
    }

    for (let i = 0; i < countCell - 1; i++) {
      const left = i % this.size + 1;
      const top = Math.ceil((i + 1) / this.size);
      const value = numbers[i];
      const cell = new _cell_js__WEBPACK_IMPORTED_MODULE_1__["default"](value, this.field, top, left);
      this.cells.push({
        value: value,
        left: left,
        top: top,
        element: this.field.lastChild
      });
    }

    this.cells.forEach(item => item.element.addEventListener('click', () => {
      move(item);
      let isSoundOn = Object(_sound_js__WEBPACK_IMPORTED_MODULE_2__["isSound"])();
      if (isSoundOn) {
        const audio = document.querySelector('.audio');
        audio.currentTime = 0;
        audio.play();
      }
    }));
  }

  delete() {
    while (this.field.firstChild) {
      this.field.removeChild(this.field.firstChild)
    }
  }

}


/***/ }),

/***/ "./src/blocks/level.js":
/*!*****************************!*\
  !*** ./src/blocks/level.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return btnlevel; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* eslint-disable import/extensions */


function btnlevel() {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'уровень', buttons, ['type', 'button']);
  const main = document.querySelector('main')

  btn.addEventListener('click', () => {

    // const popup = create('div', 'popup', 'уровень', main);

  })
}


/***/ }),

/***/ "./src/blocks/load.js":
/*!****************************!*\
  !*** ./src/blocks/load.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return btnLoad; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* eslint-disable import/extensions */




function btnLoad() {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'загрузить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    console.log('я еще не работаю, я маленькая')
  })
}


/***/ }),

/***/ "./src/blocks/newgame.js":
/*!*******************************!*\
  !*** ./src/blocks/newgame.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return btnNewGame; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.js */ "./src/blocks/field.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ "./src/main.js");
/* eslint-disable import/extensions */




function btnNewGame(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntNewGame btn', 'новая', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.delete()
    field.draw(true);
  })
}


/***/ }),

/***/ "./src/blocks/restart.js":
/*!*******************************!*\
  !*** ./src/blocks/restart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return restart; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.js */ "./src/blocks/field.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ "./src/main.js");
/* eslint-disable import/extensions */





function restart(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntRestart btn', 'повторить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.delete()
    field.draw(false);
  })
}


/***/ }),

/***/ "./src/blocks/save.js":
/*!****************************!*\
  !*** ./src/blocks/save.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return btnSave; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* eslint-disable import/extensions */




function btnSave() {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'сохранить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    console.log('я еще не работаю, я маленькая')
  })
}


/***/ }),

/***/ "./src/blocks/sound.js":
/*!*****************************!*\
  !*** ./src/blocks/sound.js ***!
  \*****************************/
/*! exports provided: btnSound, isSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnSound", function() { return btnSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSound", function() { return isSound; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* eslint-disable import/extensions */


let sound = true;

function btnSound() {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntSound btn', 'звук выкл', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    if (sound) {
      sound = !sound;
      btn.textContent = 'звук вкл'
    } else {
      sound = !sound;
      btn.textContent = 'звук выкл'
    }
  })
}

function isSound() {
  return sound;
}




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/field.js */ "./src/blocks/field.js");
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _blocks_newgame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/newgame.js */ "./src/blocks/newgame.js");
/* harmony import */ var _blocks_restart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/restart.js */ "./src/blocks/restart.js");
/* harmony import */ var _blocks_capitulate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/capitulate.js */ "./src/blocks/capitulate.js");
/* harmony import */ var _blocks_addition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/addition.js */ "./src/blocks/addition.js");
/* eslint-disable import/extensions */







const START_SIZE = 4;
const isNew = true
let field = new _blocks_field_js__WEBPACK_IMPORTED_MODULE_0__["default"](START_SIZE);
const main = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_1__["default"])('main', '', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_1__["default"])('h1', 'title', 'Gem Puzzle'));
document.body.prepend(main);

const buttons = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'buttons', null, main);

Object(_blocks_newgame_js__WEBPACK_IMPORTED_MODULE_2__["default"])(field);
Object(_blocks_restart_js__WEBPACK_IMPORTED_MODULE_3__["default"])(field);
Object(_blocks_capitulate_js__WEBPACK_IMPORTED_MODULE_4__["default"])(field)
Object(_blocks_addition_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
field.init();
field.draw(isNew);


/***/ }),

/***/ "./src/utils/create.js":
/*!*****************************!*\
  !*** ./src/utils/create.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
/**
 * @param {String} el
 * @param {String} classNames
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @param  {...array} dataAttr
 */

function create(el, classNames, child, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name');
  }

  if (classNames) element.classList.add(...classNames.split(' ')); // "class1 class2 class3"

  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }
      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map