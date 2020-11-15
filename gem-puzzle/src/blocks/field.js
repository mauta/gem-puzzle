/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import create from '../utils/create';
import ascname from './ascname';
import Cell from './cell';
import sortrecords from './sortrecords';
import {
  isSound,
} from './sound';
import {
  get,
  set,
} from '../utils/storage';

export default class Field {
  constructor(size = 4) {
    this.size = size;
    this.wrap = document.querySelector('.field-wrap');
    this.stepsCounter = 0;
    this.timeCounter = 0;
    this.timerStop = '';
    this.GameSave = [];
    this.steps = create('div', 'steps', `${this.stepsCounter} шагов`);
    this.time = create('div', 'times', `${this.timeCounter}`);
    this.record = create('div', 'record', 'рекорды');
    this.score = create('div', 'score', [this.record, this.steps, this.time], this.wrap);
    this.field = create('div', 'field', null, this.wrap);
    this.load = false;
    this.empty = {
      value: this.size * this.size,
      left: this.size,
      top: this.size,
    };
    this.countCell = this.size * this.size;
    this.emptyCell = create('div', 'empty', null, this.field);
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
    ascname(winnerScore);
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
    let countRight = 0;
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
      item.left = emptyLeft;
      item.top = emptyTop;
      item.element.style.gridColumnStart = `${emptyLeft}`;
      item.element.style.gridRowStart = `${emptyTop}`;
      if (isSound()) {
        const audio = document.querySelector('.audio');
        audio.currentTime = 0;
        audio.play();
      }
      this.cells.forEach((el) => {
        el.element.removeAttribute('draggable');
      });

      this.emptyCell.removeEventListener('drop', drop);

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
          this.cells.forEach((el) => {
            el.element.style.opacity = '0';
          });
          this.field.style.backgroundColor = 'transparent';
          clearInterval(this.timerStop);
          this.field.style.pointerEvents = 'none';
          setTimeout(() => {
            this.winner();
          }, 2000);
        }
      }
      this.step();
      this.setDraggable();
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
      if (isSound()) {
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
        this.cells.forEach((el) => {
          el.element.style.opacity = '0';
        });
        this.field.style.backgroundColor = 'transparent';
        clearInterval(this.timerStop);

        this.stopAnimation = true;
        this.field.style.pointerEvents = 'none';
        if (!this.isAutoPlay) {
          setTimeout(() => {
            this.winner();
          }, 1000);
        }
      }
    }
    this.step();
    this.setDraggable();
    // this.movement();
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
        const cell = new Cell(value, this.field, top, left);
        this.cells.push({
          value,
          left,
          top,
          element: this.field.lastChild,
        });
      }
      this.shuffle();
      set('currentGame', this.cells);
      set('currentEmpty', this.empty);
      set('currentAnimatedList', this.animatedList);
      set('currentBgr', {
        bgr: this.backgroundImage,
        kind: this.kind,
      });
    } else if (this.load) {
      const save = get('longGame');
      const saveBgr = get('longTimeStepsBgr');
      const longAnimatedList = get('longAnimatedList');
      this.animatedList = longAnimatedList;
      this.field.style.backgroundImage = saveBgr.bgr;
      this.stepsCounter = saveBgr.steps;
      this.steps.textContent = `${this.stepsCounter} шагов`;
      this.timeCounter = saveBgr.times;
      this.kind = saveBgr.kind;
      this.empty = get('empty');
      save.forEach((item) => {
        const {
          left,
        } = item;
        const {
          top,
        } = item;
        const {
          value,
        } = item;
        const cell = new Cell(value, this.field, top, left);
        this.cells.push({
          value,
          left,
          top,
          element: this.field.lastChild,
        });
      });
      set('currentGame', this.cells);
      set('currentEmpty', this.empty);
      set('currentAnimatedList', this.animatedList);
      set('currentBgr', {
        bgr: this.backgroundImage,
        kind: this.kind,
      });
    } else {
      const currentPuzzle = get('currentGame');
      const currentBgr = get('currentBgr');
      if (currentBgr.kind === 'kind-digit') {
        currentBgr.bgr = '';
      }
      this.backgroundImage = currentBgr.bgr;
      this.field.style.backgroundImage = currentBgr.bgr;
      this.stepsCounter = 0;
      this.steps.textContent = `${this.stepsCounter} шагов`;
      this.timeCounter = 0;
      this.kind = currentBgr.kind;
      this.empty = get('currentEmpty');
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
        const cell = new Cell(value, this.field, top, left);
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
        const saveBgr = get('longTimeStepsBgr');
        this.backgroundImage = saveBgr.bgr;
        this.backgroundImage = saveBgr.bgr;
        this.field.style.backgroundSize = 'contain';
        this.field.style.backgroundColor = 'rgba(255,255,255,0.7)';
        this.field.style.backgroundBlendMode = 'overlay';
        this.load = false;
        set('currentBgr', {
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
    this.record.addEventListener('click', sortrecords);

    // const tryDrag = (e) => {
    //   const item = this.cells.find((el) => el.element === e.target);
    //   this.dragDrop(item);
    // };

    // this.cells.forEach((item) => item.element.addEventListener('mousedown', tryDrag));

    this.cells.forEach((item) => item.element.addEventListener('mouseup', () => {
      const leftDiff = this.empty.left - item.left;
      const topDiff = this.empty.top - item.top;
      // item.element.removeEventListener('mousedown', tryDrag)

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
    this.record.addEventListener('click', sortrecords);
    this.arrowMove();
  }

  delete() {
    this.stepsCounter = 0;
    this.timeCounter = 0;
    clearInterval(this.timerStop);
    this.record.removeEventListener('click', sortrecords);
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
      if (e.code === 'ArrowUp') {
        e.preventDefault();
        if (this.cells.find((el) => el.top === this.empty.top - 1 && el.left === this.empty.left)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top - 1 && el.left === this.empty.left);
          this.move(item);
          this.animatedList.push(0);
        }
      }
      if (e.code === 'ArrowDown') {
        e.preventDefault();
        if (this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top + 1 && el.left === this.empty.left);
          this.move(item);
          this.animatedList.push(2);
        }
      }
      if (e.code === 'ArrowLeft') {
        e.preventDefault();
        if (this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1)) {
          // eslint-disable-next-line max-len
          const item = this.cells.find((el) => el.top === this.empty.top && el.left === this.empty.left - 1);
          this.move(item);
          this.animatedList.push(3);
        }
      }
      if (e.code === 'ArrowRight') {
        e.preventDefault();
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
