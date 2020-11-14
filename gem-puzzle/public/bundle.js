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






function btnAddition(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'плюшки', buttons, ['type', 'button']);
  let isOpenAdds = false;

  btn.addEventListener('click', () => {
    if (!isOpenAdds) {
      Object(_save_js__WEBPACK_IMPORTED_MODULE_1__["default"])(field);
      Object(_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])(field);
      Object(_level_js__WEBPACK_IMPORTED_MODULE_3__["default"])(field);
      Object(_sound_js__WEBPACK_IMPORTED_MODULE_4__["btnSound"])();
      isOpenAdds = !isOpenAdds;
    } else {
      isOpenAdds = !isOpenAdds;
      for (let i = 0; i < 4; i += 1) {
        buttons.removeChild(buttons.lastChild);
      }
    }
  });
}


/***/ }),

/***/ "./src/blocks/ascname.js":
/*!*******************************!*\
  !*** ./src/blocks/ascname.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ascname; });
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create */ "./src/utils/create.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.js");



function ascname(winner) {
  const main = document.querySelector('main');
  const popup = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'dark-screen', Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup-winner', Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'title', 'Ура-ура-ура!!!')), main);
  const winLevel = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'win-score', `Вы решили головоломку ${winner.winLevel} х ${winner.winLevel}`, popup);
  const sec = winner.winTime % 60;
  const min = Math.floor(winner.winTime / 60);

  let step;
  const lastnumber = String(winner.winStep).slice(-1);
  const last2number = String(winner.winStep).slice(-2, 1);
  if (lastnumber === '1' && last2number !== '1') {
    step = 'шаг';
  } else if ((lastnumber === '2' || lastnumber === '3' || lastnumber === '4') && last2number !== '1') {
    step = 'шага';
  } else {
    step = 'шагов';
  }

  const winStepTime = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'win-score', `за ${winner.winStep} ${step} и ${min} : ${sec}`, popup);

  popup.firstChild.append(winLevel);
  popup.firstChild.append(winStepTime);

  const btnclose = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'close-btn', Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'visually-hidden', 'close'), null, ['type', 'button']);
  popup.firstChild.append(btnclose);
  const nameLabel = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'name_label');
  const nameInput = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'name_input', null, nameLabel, ['type', 'text'], ['placeholder', 'Введите имя']);
  const nameText = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'name_text hidden', null, nameLabel);
  popup.firstChild.append(nameLabel);

  const closePopup = (node) => {
    node.remove();
  };

  btnclose.addEventListener('click', () => {
    closePopup(popup);
  });

  function clearName() {
    nameInput.setAttribute('placeholder', '');
  }

  const setName = (el) => {
    el.stopPropagation();
    if (el.type === 'keydown') {
      debugger;
      if (el.keyCode === 13) {
        nameText.innerText = nameInput.value;
        nameInput.classList.add('hidden');
        nameText.classList.remove('hidden');
        nameInput.blur();
        winner.winName = nameInput.value;

        let record = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["get"])('records');
        if (record === null) {
          record = [winner];
        } else {
          record.push(winner);
        }
        Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["set"])('records', record);
      }
    }
  };

  nameInput.addEventListener('click', clearName);
  nameInput.addEventListener('keydown', setName);
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
/* eslint-disable import/extensions */


function capitulate(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'сдаюсь', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.animatedList = field.animatedList.reverse().map((x) => (x + 2) % 4);
    field.isAutoPlay = true;
    field.stopAnimation = false;
    field.animation();
  });
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

/***/ "./src/blocks/difficulty.js":
/*!**********************************!*\
  !*** ./src/blocks/difficulty.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difficulty; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _radiobtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radiobtn.js */ "./src/blocks/radiobtn.js");
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */




class Difficulty {
  constructor(field) {
    this.main = document.querySelector('main');
    this.field = field;
  }

  init() {
    this.popup = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'dark-screen', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'title', 'Выбор сложности')), this.main);
    this.level = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('form', 'level-kind', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'form-wrap'), null, ['method', 'GET']);
    this.popup.firstChild.appendChild(this.level);

    for (let i = 0; i < 6; i += 1) {
      const item = new _radiobtn_js__WEBPACK_IMPORTED_MODULE_1__["default"]('radio', 'lavel', i + 3, 'input input-level', `${i + 3} x ${i + 3}`, this.level);
      item.span.classList.add('radio-level');
      item.input.setAttribute('checked', true);
      this.level.firstChild.appendChild(item.label);
    }

    this.level.appendChild(Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'form-wrap'));
    const item1 = new _radiobtn_js__WEBPACK_IMPORTED_MODULE_1__["default"]('radio', 'kind', 'kind-img', 'input input-kind', 'картинки', this.level);
    item1.span.classList.add('radio-kind');
    item1.label.classList.add('label-kind');
    item1.input.setAttribute('checked', true);
    this.level.lastChild.appendChild(item1.label);

    const item2 = new _radiobtn_js__WEBPACK_IMPORTED_MODULE_1__["default"]('radio', 'kind', 'kind-digit', 'input input-kind', 'цифры', this.level);
    item2.span.classList.add('radio-kind');
    item2.label.classList.add('label-kind');
    item2.input.setAttribute('checked', true);
    this.level.lastChild.appendChild(item2.label);

    const item3 = new _radiobtn_js__WEBPACK_IMPORTED_MODULE_1__["default"]('radio', 'kind', 'kind-both', 'input input-kind', 'картинки и цифры', this.level);
    item3.span.classList.add('radio-kind');
    item3.label.classList.add('label-kind');
    item3.input.setAttribute('checked', true);
    this.level.lastChild.appendChild(item3.label);

    const btnsubmit = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'btn popup-btn', 'применить', this.level, ['type', 'button']);
    this.level.appendChild(btnsubmit);

    const btnclose = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'close-btn', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'visually-hidden'), null, ['type', 'button']);
    this.popup.firstChild.appendChild(btnclose);

    const check = document.querySelectorAll('.input-level');
    const check2 = document.querySelectorAll('.input-kind');
    let levelLevel = 8;
    let kind = 'kind-both';

    for (let i = 0; i < check.length; i += 1) {
      check[i].addEventListener('click', () => {
        levelLevel = check[i].value;
      });
    }
    for (let i = 0; i < check2.length; i += 1) {
      check2[i].addEventListener('click', () => {
        kind = check2[i].value;
      });
    }

    function closePopup(popup) {
      popup.remove();
    }

    btnsubmit.addEventListener('click', () => {
      this.field.kind = kind;
      this.field.delete();
      this.field.init(Number(levelLevel));
      this.field.draw(true);
      closePopup(this.popup);
    });

    btnclose.addEventListener('click', () => {
      closePopup(this.popup);
    });
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
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create */ "./src/utils/create.js");
/* harmony import */ var _ascname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascname */ "./src/blocks/ascname.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/blocks/cell.js");
/* harmony import */ var _sortrecords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortrecords */ "./src/blocks/sortrecords.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound */ "./src/blocks/sound.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.js");
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */








class Field {
  constructor(size = 4) {
    this.size = size;
    this.wrap = document.querySelector('.field-wrap');
    this.stepsCounter = 0;
    this.timeCounter = 0;
    this.timerStop = '';
    this.GameSave = [];
    this.steps = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'steps', `${this.stepsCounter} шагов`);
    this.time = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'times', `${this.timeCounter}`);
    this.record = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'record', 'рекорды');
    this.score = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'score', [this.record, this.steps, this.time], this.wrap);
    this.field = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'field', null, this.wrap);
    this.load = false;
    this.empty = {
      value: this.size * this.size,
      left: this.size,
      top: this.size,
    };
    this.countCell = this.size * this.size;
    this.emptyCell = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'empty', null, this.field);
    this.numbers = [];
    this.kind = 'kind-digit';
    this.backgroundImage = '';
    this.animatedList = [];
    this.isAutoPlay = false;
    this.stopAnimation = false;
  }

  init(size) {
    this.size = size || this.size;
    this.field.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.field.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
    return this;
  }

  generate() {
    this.countCell = this.size * this.size;
    const numbers = [...Array(this.countCell - 1).keys()]
      .map((x) => x + 1);
    this.numbers = numbers;
  }

  step() {
    this.stepsCounter += 1;
    let step = '';
    const lastnumber = String(this.stepsCounter).slice(-1);
    const last2number = String(this.stepsCounter).slice(-2, 1);
    if (lastnumber === '1' && last2number !== '1') {
      step = 'шаг';
    } else if ((lastnumber === '2' || lastnumber === '3' || lastnumber === '4') && last2number !== '1') {
      step = 'шага';
    } else {
      step = 'шагов';
    }
    this.steps.textContent = `${this.stepsCounter} ${step}`;
  }

  timer() {
    this.timeCounter += 1;
    const sec = this.timeCounter % 60;
    const min = Math.floor(this.timeCounter / 60);
    this.time.textContent = `${min} : ${sec}`;
  }

  winner() {
    const winnerScore = {
      winName: 'какой-то мужик',
      winLevel: this.size,
      winStep: this.stepsCounter,
      winTime: this.timeCounter,
    };
    Object(_ascname__WEBPACK_IMPORTED_MODULE_1__["default"])(winnerScore);
  }

  setDraggable() {
    this.cells.forEach((item) => {
      const leftDiff = Math.abs(this.empty.left - item.left);
      const topDiff = Math.abs(this.empty.top - item.top);

      if (leftDiff + topDiff > 1) {
        item.element.removeAttribute('draggable');
      } else {
        item.element.setAttribute('draggable', true);
      }
    });

    this.emptyCell.style.gridColumnStart = `${this.empty.left}`;
    this.emptyCell.style.gridRowStart = `${this.empty.top}`;
  }

  dragDrop(item) {
    this.countCell = this.size * this.size;

    const drop = () => {
      const leftDiff = this.empty.left - item.left;
      const topDiff = this.empty.top - item.top;
      if (leftDiff === 1 && topDiff === 0) {
        this.animatedList.push(3);
      }

      if (leftDiff === -1 && topDiff === 0) {
        this.animatedList.push(1);
      }
      if (topDiff === 1 && leftDiff === 0) {
        this.animatedList.push(0);
      }
      if (topDiff === -1 && leftDiff === 0) {
        this.animatedList.push(2);
      }
      const emptyLeft = this.empty.left;
      const emptyTop = this.empty.top;
      this.empty.left = item.left;
      this.empty.top = item.top;
      let countRight = 0;

      item.left = emptyLeft;
      item.top = emptyTop;
      item.element.style.gridColumnStart = `${emptyLeft}`;
      item.element.style.gridRowStart = `${emptyTop}`;
      if (Object(_sound__WEBPACK_IMPORTED_MODULE_4__["isSound"])()) {
        const audio = document.querySelector('.audio');
        audio.currentTime = 0;
        audio.play();
      }
      this.cells.forEach((el) => {
        el.element.removeAttribute('draggable');
      });
      this.emptyCell.removeEventListener('drop', drop);
      this.setDraggable();

      for (let i = 0; i < this.countCell - 1; i += 1) {
        const position = (this.cells[i].top - 1) * this.size + this.cells[i].left;
        if (position === this.cells[i].value) {
          countRight += 1;
          // eslint-disable-next-line no-unused-expressions
          this.kind === 'kind-digit' ? this.cells[i].element.style.opacity = '0.8' : this.cells[i].element.style.opacity = '1';
        } else {
          // eslint-disable-next-line no-unused-expressions
          this.kind === 'kind-digit' ? this.cells[i].element.style.opacity = '1' : this.cells[i].element.style.opacity = '0.8';
        }
        if (countRight === this.countCell - 1) {
          this.cells.forEach((el) => el.element.style.opacity = '0');
          this.field.style.backgroundColor = 'transparent';
          clearInterval(this.timerStop);
          this.field.style.pointerEvents = 'none';
          setTimeout(() => {
            this.winner();
          }, 2000);
        }
      }
      this.step();
    };

    this.emptyCell.addEventListener('drop', drop);

    item.element.addEventListener('dragstart', (evt) => {
      evt.target.classList.add('selected');
      setTimeout(() => {
        evt.target.style.display = 'none';
      }, 0);
    });

    item.element.addEventListener('dragend', (evt) => {
      evt.target.classList.remove('selected');
      evt.target.style.display = 'flex';
    });

    this.field.addEventListener('dragover', (evt) => {
      evt.preventDefault();
    });
  }

  move(item) {
    const leftDiff = Math.abs(this.empty.left - item.left);
    const topDiff = Math.abs(this.empty.top - item.top);
    const cellMoved = item;
    let countRight = 0;
    if ((leftDiff + topDiff) === 1) {
      const emptyLeft = this.empty.left;
      const emptyTop = this.empty.top;
      this.empty.left = cellMoved.left;
      this.empty.top = cellMoved.top;
      cellMoved.left = emptyLeft;
      cellMoved.top = emptyTop;
      cellMoved.element.style.gridColumnStart = `${emptyLeft}`;
      cellMoved.element.style.gridRowStart = `${emptyTop}`;
      this.emptyCell.style.gridColumnStart = this.empty.left;
      this.emptyCell.style.gridRowStart = this.empty.top;
      if (Object(_sound__WEBPACK_IMPORTED_MODULE_4__["isSound"])()) {
        const audio = document.querySelector('.audio');
        audio.currentTime = 0;
        audio.play();
      }
    }

    for (let i = 0; i < this.countCell - 1; i += 1) {
      const position = (this.cells[i].top - 1) * this.size + this.cells[i].left;
      if (position === this.cells[i].value) {
        countRight += 1;
        // eslint-disable-next-line no-unused-expressions
        this.kind === 'kind-digit' ? this.cells[i].element.style.opacity = '0.8' : this.cells[i].element.style.opacity = '1';
      } else {
        // eslint-disable-next-line no-unused-expressions
        this.kind === 'kind-digit' ? this.cells[i].element.style.opacity = '1' : this.cells[i].element.style.opacity = '0.8';
      }
      if (countRight === this.countCell - 1) {
        this.cells.forEach(el => el.element.style.opacity = '0');
        this.field.style.backgroundColor = 'transparent';
        clearInterval(this.timerStop);

        this.stopAnimation = true;
        // this.field.style.pointerEvents = 'none'
        if (!this.isAutoPlay) {
          setTimeout(() => {
            this.winner();
          }, 1000);
        }
      }
    }
    this.step();
    this.setDraggable();
  }

  draw(isNew) {
    this.steps.textContent = `${this.stepsCounter} шагов`;
    this.countCell = this.size * this.size;
    this.backgroundImage = `url(images/${Math.floor(1 + Math.random() * 33)}.jpg)`;
    this.field.style.pointerEvents = 'auto';
    this.empty = {
      value: this.size * this.size,
      left: this.size,
      top: this.size,
    };
    this.cells = [];
    this.field.append(this.emptyCell);
    if (this.kind !== 'kind-digit') {
      this.field.style.backgroundImage = this.backgroundImage;
      this.field.style.backgroundSize = 'cover';
      this.field.style.backgroundColor = 'rgba(255,255,255,0.7)';
      this.field.style.backgroundBlendMode = 'overlay';
    }
    this.emptyCell.style.gridColumnStart = this.empty.left;
    this.emptyCell.style.gridRowStart = this.empty.top;

    if (isNew) {
      this.generate();
      for (let i = 0; i < this.countCell - 1; i += 1) {
        const left = (i % this.size) + 1;
        const top = Math.ceil((i + 1) / this.size);
        const value = this.numbers[i];
        const cell = new _cell__WEBPACK_IMPORTED_MODULE_2__["default"](value, this.field, top, left);
        this.cells.push({
          value: value,
          left: left,
          top: top,
          element: this.field.lastChild,
        });
      }
      this.shuffle();
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentGame', this.cells);
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentEmpty', this.empty);
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentAnimatedList', this.animatedList);
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentBgr', {
        bgr: this.backgroundImage,
        kind: this.kind,
      });
    } else if (this.load) {
      const save = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('longGame');
      const saveBgr = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('longTimeStepsBgr');
      const longAnimatedList = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('longAnimatedList');
      this.animatedList = longAnimatedList;
      this.field.style.backgroundImage = saveBgr.bgr;
      this.stepsCounter = saveBgr.steps;
      this.steps.textContent = `${this.stepsCounter} шагов`;
      this.timeCounter = saveBgr.times;
      this.kind = saveBgr.kind;
      this.empty = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('empty');
      save.forEach((item) => {
        const left = item.left;
        const top = item.top;
        const value = item.value;
        const cell = new _cell__WEBPACK_IMPORTED_MODULE_2__["default"](value, this.field, top, left);
        this.cells.push({
          value: value,
          left: left,
          top: top,
          element: this.field.lastChild
        });
      });
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentGame', this.cells);
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentEmpty', this.empty);
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentAnimatedList', this.animatedList);
      Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentBgr', {
        bgr: this.backgroundImage,
        kind: this.kind,
      });
    } else {
      const currentPuzzle = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('currentGame');
      const currentBgr = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('currentBgr');
      if (currentBgr.kind === 'kind-digit') {
        currentBgr.bgr = '';
      }
      this.backgroundImage = currentBgr.bgr;
      this.field.style.backgroundImage = currentBgr.bgr;
      this.stepsCounter = 0;
      this.steps.textContent = `${this.stepsCounter} шагов`;
      this.timeCounter = 0;
      this.kind = currentBgr.kind;
      this.empty = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('currentEmpty');
      currentPuzzle.forEach((item) => {
        const {
          left,
        } = item;
        const {
          top,
        } = item;
        const {
          value,
        } = item;
        const cell = new _cell__WEBPACK_IMPORTED_MODULE_2__["default"](value, this.field, top, left);
        this.cells.push({
          value,
          left,
          top,
          element: this.field.lastChild,
        });
      });
    }

    if (this.kind !== 'kind-digit') {
      if (this.load) {
        const saveBgr = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["get"])('longTimeStepsBgr');
        this.backgroundImage = saveBgr.bgr;
        this.backgroundImage = saveBgr.bgr;
        this.field.style.backgroundSize = 'contain';
        this.field.style.backgroundColor = 'rgba(255,255,255,0.7)';
        this.field.style.backgroundBlendMode = 'overlay';
        this.load = false;
        Object(_utils_storage__WEBPACK_IMPORTED_MODULE_5__["set"])('currentBgr', {
          bgr: this.backgroundImage,
          kind: this.kind,
        });
      }
      for (let i = 0; i < this.countCell - 1; i += 1) {
        this.cells[i].element.style.backgroundImage = this.backgroundImage;
        this.cells[i].element.style.backgroundRepiat = 'no-repiat';
        this.cells[i].element.style.backgroundSize = `${100 * this.size}%`;
        const value = this.cells[i].value - 1;
        const persent = 100 / (this.size - 1);
        this.cells[i].element.style.backgroundPosition = `${(value % this.size) * persent}% ${Math.floor(value / this.size) * persent}%`;
      }
    }
    if (this.kind === 'kind-img') {
      for (let i = 0; i < this.countCell - 1; i += 1) {
        this.cells[i].element.style.color = 'transparent';
      }
    }

    this.setDraggable();
    this.cells.forEach((item) => item.element.addEventListener('mousedown', () => {
      this.dragDrop(item);
    }));

    this.cells.forEach((item) => item.element.addEventListener('mouseup', () => {
      const leftDiff = this.empty.left - item.left;
      const topDiff = this.empty.top - item.top;

      const animateRight = () => {
        this.move(item);
        item.element.classList.remove('moveRight');
        item.element.removeEventListener('transitionend', animateRight);
      };

      const animateLeft = () => {
        this.move(item);
        item.element.classList.remove('moveLeft');
        item.element.removeEventListener('transitionend', animateLeft);
      };

      const animateDown = () => {
        this.move(item);
        item.element.classList.remove('moveDown');
        item.element.removeEventListener('transitionend', animateDown);
      };

      const animateUp = () => {
        this.move(item);
        item.element.classList.remove('moveUp');
        item.element.removeEventListener('transitionend', animateUp);
      };

      if (leftDiff === 1 && topDiff === 0) {
        item.element.classList.add('moveRight');
        item.element.addEventListener('transitionend', animateRight);
        this.animatedList.push(3);
      }

      if (leftDiff === -1 && topDiff === 0) {
        item.element.classList.add('moveLeft');
        item.element.addEventListener('transitionend', animateLeft);
        this.animatedList.push(1);
      }
      if (topDiff === 1 && leftDiff === 0) {
        item.element.classList.add('moveDown');
        item.element.addEventListener('transitionend', animateDown);
        this.animatedList.push(0);
      }
      if (topDiff === -1 && leftDiff === 0) {
        item.element.classList.add('moveUp');
        item.element.addEventListener('transitionend', animateUp);
        this.animatedList.push(2);
      }
    }));

    this.timerStop = setInterval(() => {
      this.timer();
    }, 1000);

    this.record.addEventListener('click', (e) => {
      e.stopPropagation();
      Object(_sortrecords__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });

    this.arrowMove();
  }

  delete() {
    this.stepsCounter = 0;
    this.timeCounter = 0;
    clearInterval(this.timerStop);
    while (this.field.firstChild) {
      this.field.removeChild(this.field.firstChild);
    }
  }

  animation() {
    if (!this.stopAnimation) {
      if (this.animatedList.length) {
        const direction = this.animatedList.shift();
        if (direction === 0) {
          if (this.cells.find((el) => el.top === this.empty.top - 1 && el.left === this.empty.left)) {
            // eslint-disable-next-line max-len
            const item = this.cells.find((el) => el.top === this.empty.top - 1 && el.left === this.empty.left);
            this.move(item);
          }
        }
        if (direction === 1) {
          if (this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left + 1)) {
            // eslint-disable-next-line max-len
            const item = this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left + 1);
            this.move(item);
          }
        }
        if (direction === 2) {
          if (this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left)) {
            // eslint-disable-next-line max-len
            const item = this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left);
            this.move(item);
          }
        }
        if (direction === 3) {
          if (this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1)) {
            // eslint-disable-next-line max-len
            const item = this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1);
            this.move(item);
          }
        }
        setTimeout(() => {
          this.animation();
        }, 100);
      }
    }
  }

  shuffle() {
    const pureMove = (item) => {
      const leftDiff = Math.abs(this.empty.left - item.left);
      const topDiff = Math.abs(this.empty.top - item.top);
      const cellMoved = item;
      if ((leftDiff + topDiff) === 1) {
        const emptyLeft = this.empty.left;
        const emptyTop = this.empty.top;
        this.empty.left = cellMoved.left;
        this.empty.top = cellMoved.top;
        cellMoved.left = emptyLeft;
        cellMoved.top = emptyTop;
        cellMoved.element.style.gridColumnStart = `${emptyLeft}`;
        cellMoved.element.style.gridRowStart = `${emptyTop}`;
        this.emptyCell.style.gridColumnStart = this.empty.left;
        this.emptyCell.style.gridRowStart = this.empty.top;
      }
    };

    const result = [0];
    for (let i = 0; i < 10 * this.countCell; i += 1) {
      const current = result[i];
      let rand = Math.floor(Math.random() * 4);
      if ((current + rand) % 2 === 0) {
        rand = (rand + 1) % 4;
      }
      result.push(rand);
    }
    this.animatedList = result;
    const rigthMove = [];
    this.animatedList.forEach((direction) => {
      if (direction === 0) {
        if (this.cells.find((el) => el.left === this.empty.left && el.top === this.empty.top - 1)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top - 1 && el.left === this.empty.left);
          pureMove(item);
          rigthMove.push(direction);
        }
      }
      if (direction === 1) {
        if (this.cells.find((el) => el.left === this.empty.left + 1 && el.top === this.empty.top)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left + 1);
          pureMove(item);
          rigthMove.push(direction);
        }
      }
      if (direction === 2) {
        if (this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left);
          pureMove(item);
          rigthMove.push(direction);
        }
      }
      if (direction === 3) {
        if (this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1);
          pureMove(item);
          rigthMove.push(direction);
        }
      }
    });
    this.animatedList = rigthMove;
  }

  arrowMove() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.code === 'ArrowUp') {
        if (this.cells.find((el) => el.top === this.empty.top - 1 && el.left === this.empty.left)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top - 1 && el.left === this.empty.left);
          this.move(item);
          this.animatedList.push(0);
        }
      }
      if (e.code === 'ArrowDown') {
        if (this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left);
          this.move(item);
          this.animatedList.push(2);
        }
      }
      if (e.code === 'ArrowLeft') {
        if (this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1);
          this.move(item);
          this.animatedList.push(3);
        }
      }
      if (e.code === 'ArrowRight') {
        if (this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left + 1)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left + 1);
          this.move(item);
          this.animatedList.push(1);
        }
      }
    });
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
/* harmony import */ var _difficulty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difficulty.js */ "./src/blocks/difficulty.js");
/* eslint-disable import/extensions */



function btnlevel(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'уровень', buttons, ['type', 'button']);
  const main = document.querySelector('main')

  btn.addEventListener('click', () => {

    let popup = new _difficulty_js__WEBPACK_IMPORTED_MODULE_1__["default"](field).init()

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
/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage.js */ "./src/utils/storage.js");
/* eslint-disable import/extensions */



function btnLoad(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'загрузить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.load = true;
    field.delete();
    const stepsTimes = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('longTimeStepsBgr');
    const save = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('longGame');
    field.init(Math.sqrt(save.length + 1));
    field.stepsCounter = stepsTimes.steps;
    field.timeCounter = stepsTimes.times;
    field.isAutoPlay = false;
    field.draw(false);
  });
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
/* eslint-disable import/extensions */


function btnNewGame(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntNewGame btn', 'новая', buttons, ['type', 'button']);
  btn.addEventListener('click', () => {
    field.delete();
    field.isAutoPlay = false;
    field.draw(true);
  });
}


/***/ }),

/***/ "./src/blocks/radiobtn.js":
/*!********************************!*\
  !*** ./src/blocks/radiobtn.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioInput; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* eslint-disable import/extensions */


class RadioInput {
  constructor(type, name, value, classname, inner, parent) {
    this.inner = inner;
    this.name = name;
    this.value = value;
    this.type = type;
    this.classmame = classname;
    this.parent = parent;
    this.label = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'label', `${this.inner}`);
    this.input = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('input', this.classmame, null, this.label, ['name', this.name], ['type', this.type], ['value', this.value]);
    this.span = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'radio', null, this.label);
  }
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
/* eslint-disable import/extensions */


function restart(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntRestart btn', 'повторить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.delete();
    field.isAutoPlay = false;
    field.draw(false);
  });
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
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create */ "./src/utils/create.js");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.js");



function btnSave(field) {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntCapitulate btn', 'сохранить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["set"])('longGame', field.cells);
    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["set"])('longAnimatedList', field.animatedList);
    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["set"])('empty', field.empty);
    Object(_utils_storage__WEBPACK_IMPORTED_MODULE_1__["set"])('longTimeStepsBgr', {
      steps: field.stepsCounter,
      times: field.timeCounter,
      bgr: field.backgroundImage,
      kind: field.kind,
    });
  });
}


/***/ }),

/***/ "./src/blocks/sortrecords.js":
/*!***********************************!*\
  !*** ./src/blocks/sortrecords.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortrecords; });
/* harmony import */ var _utils_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create.js */ "./src/utils/create.js");
/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage.js */ "./src/utils/storage.js");
/* eslint-disable import/extensions */



function sortrecords() {
  const main = document.querySelector('main');
  const popup = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'dark-screen', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'popup', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'title', 'РЕКОРДЫ')), main);
  const listRecords = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["get"])('records');
  const recordsWrap = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'records-wrap');
  popup.firstChild.append(recordsWrap);
  let count = 10;

  function byKey(key) {
    return (a, b) => (a[key] > b[key] ? 1 : -1);
  }

  let sortList = listRecords.sort(byKey('winTime'));
  const stepTitle = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-step', 'ШАГИ:');
  const timeTitle = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-time', 'ВРЕМЯ:');

  Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-title', [Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-name', 'ИМЯ:'), Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-level', 'УРОВЕНЬ:'), stepTitle, timeTitle], recordsWrap);

  sortList.length < 10 ? count = sortList.length : count = 10;

  stepTitle.addEventListener('click', () => {
    sortList = listRecords.sort(byKey('winStep'));
    for (let i = 0; i < count; i += 1) {
      recordsWrap.lastChild.remove();
    }
    for (let i = 0; i < count; i += 1) {
      const sec = sortList[i].winTime % 60;
      const min = Math.floor(sortList[i].winTime / 60);
      const playerName = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'player-name', `${sortList[i].winName}`);
      const player = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player', [playerName, Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-level', `${sortList[i].winLevel}x${sortList[i].winLevel}`), Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-step', `${sortList[i].winStep}`), Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-time', `${min} : ${sec}`)], recordsWrap);
    }
  });

  timeTitle.addEventListener('click', () => {
    sortList = listRecords.sort(byKey('winTime'));
    for (let i = 0; i < count; i += 1) {
      recordsWrap.lastChild.remove();
    }
    for (let i = 0; i < count; i += 1) {
      const sec = sortList[i].winTime % 60;
      const min = Math.floor(sortList[i].winTime / 60);
      const playerName = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'player-name', `${sortList[i].winName}`);
      const player = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player', [playerName, Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-level', `${sortList[i].winLevel}x${sortList[i].winLevel}`), Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-step', `${sortList[i].winStep}`), Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-time', `${min} : ${sec}`)], recordsWrap);
    }
  });

  for (let i = 0; i < count; i += 1) {
    const sec = sortList[i].winTime % 60;
    const min = Math.floor(sortList[i].winTime / 60);
    const playerName = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'player-name', `${sortList[i].winName}`);
    const player = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player', [playerName, Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-level', `${sortList[i].winLevel}x${sortList[i].winLevel}`), Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-step', `${sortList[i].winStep}`), Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'player-time', `${min} : ${sec}`)], recordsWrap);
  }

  const btnclose = Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'close-btn', Object(_utils_create_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'visually-hidden', 'close'), null, ['type', 'button']);
  popup.firstChild.append(btnclose);

  function closePopup(popup) {
    popup.remove();
  }

  btnclose.addEventListener('click', () => {
    closePopup(popup);
  });
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
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/create */ "./src/utils/create.js");
/* eslint-disable import/extensions */


let sound = true;

function btnSound() {
  const buttons = document.querySelector('.buttons');
  const btn = Object(_utils_create__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'bntSound btn', 'звук выкл', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    if (sound) {
      sound = !sound;
      btn.textContent = 'звук вкл';
    } else {
      sound = !sound;
      btn.textContent = 'звук выкл';
    }
  });
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
/* harmony import */ var _blocks_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/field */ "./src/blocks/field.js");
/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create */ "./src/utils/create.js");
/* harmony import */ var _blocks_newgame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/newgame */ "./src/blocks/newgame.js");
/* harmony import */ var _blocks_restart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/restart */ "./src/blocks/restart.js");
/* harmony import */ var _blocks_capitulate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/capitulate */ "./src/blocks/capitulate.js");
/* harmony import */ var _blocks_addition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/addition */ "./src/blocks/addition.js");
/* eslint-disable import/extensions */







const START_SIZE = 4;
const isNew = true;
const main = Object(_utils_create__WEBPACK_IMPORTED_MODULE_1__["default"])('main', '', Object(_utils_create__WEBPACK_IMPORTED_MODULE_1__["default"])('h1', 'title', 'Gem Puzzle'));
document.body.prepend(main);
const fieldWrap = Object(_utils_create__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'field-wrap', null, main);
const field = new _blocks_field__WEBPACK_IMPORTED_MODULE_0__["default"](START_SIZE);
const buttons = Object(_utils_create__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'buttons', null, main);
Object(_blocks_newgame__WEBPACK_IMPORTED_MODULE_2__["default"])(field);
Object(_blocks_restart__WEBPACK_IMPORTED_MODULE_3__["default"])(field);
Object(_blocks_capitulate__WEBPACK_IMPORTED_MODULE_4__["default"])(field);
Object(_blocks_addition__WEBPACK_IMPORTED_MODULE_5__["default"])(field);
main.append(fieldWrap);
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
      if (attrName.match(/value|id|type|name|placeholder|cols|rows|autocorrect|spellcheck/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}


/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/*! exports provided: set, get, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

function get(name, subst = null) {
  return JSON.parse(window.localStorage.getItem(name) || subst);
}

function del(name) {
  localStorage.removeItem(name);
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map