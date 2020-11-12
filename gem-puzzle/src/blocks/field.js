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
    this.backgroundImage = `url(images/${Math.floor(1 + Math.random() * 33)}.jpg)`;
    this.animatedList = [];
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
      .map(x => x + 1)
    // .sort(() => Math.random() - 0.5);
    localStorage.setItem('currentGame', numbers);

    const solvedCounter = (arr) => {
      const dlina = arr.length;
      let counter = 0;
      for (let i = 0; i < dlina; i += 1) {
        const a = arr[i];
        for (let j = i + 1; j < dlina; j += 1) {
          if (arr[j] < a) {
            counter += 1;
          }
        }
      }
      return counter;
    };

    if (solvedCounter(numbers) % 2 === 0) {
      console.log('подошло');
      this.numbers = numbers;
    } else {
      console.log('не подошло');
      this.generate();
    }

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
    const drop = () => {
      const emptyLeft = this.empty.left;
      const emptyTop = this.empty.top;
      this.empty.left = item.left;
      this.empty.top = item.top;
      let countRight = 0;

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
          this.cells.forEach(el => el.element.style.opacity = '0.05');
          clearInterval(this.timerStop);
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
        this.cells.forEach(el => el.element.style.opacity = '0');
        clearInterval(this.timerStop);
        setTimeout(() => {
          this.winner();
        }, 1000);
      }
    }
    this.step();
    this.setDraggable();
  }

  draw(isNew) {
    this.steps.textContent = `${this.stepsCounter} шагов`;
    this.countCell = this.size * this.size;
    this.backgroundImage = `url(images/${Math.floor(1 + Math.random() * 33)}.jpg)`;

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
          value: value,
          left: left,
          top: top,
          element: this.field.lastChild,
        });
      }
    } else {
      if (this.load) {
        let save = get('longGame');
        let saveBgr = get('longTimeStepsBgr')
        this.field.style.backgroundImage = saveBgr.bgr;
        this.stepsCounter = saveBgr.steps;
        this.steps.textContent = `${this.stepsCounter} шагов`;
        this.timeCounter = saveBgr.times;
        this.kind = saveBgr.kind;
        this.empty = get('empty');
        save.forEach((item) => {
          const left = item.left;
          const top = item.top;
          const value = item.value;
          const cell = new Cell(value, this.field, top, left);
          this.cells.push({
            value: value,
            left: left,
            top: top,
            element: this.field.lastChild
          });
        })

      } else {
        this.numbers = localStorage.getItem('currentGame').split(',');
        for (let i = 0; i < this.countCell - 1; i += 1) {
          const left = (i % this.size) + 1;
          const top = Math.ceil((i + 1) / this.size);
          const value = this.numbers[i];
          const cell = new Cell(value, this.field, top, left);
          this.cells.push({
            value: value,
            left: left,
            top: top,
            element: this.field.lastChild
          });
        }
      }
    }

    if (this.kind !== 'kind-digit') {
      if (this.load) {
        const saveBgr = get('longTimeStepsBgr');
        this.field.backgroundImage = saveBgr.bgr;
        this.backgroundImage = saveBgr.bgr;
        this.field.style.backgroundSize = 'contain';
        this.field.style.backgroundColor = 'rgba(255,255,255,0.7)';
        this.field.style.backgroundBlendMode = 'overlay';
        this.load = false;
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
      let leftDiff = this.empty.left - item.left;
      let topDiff = this.empty.top - item.top;

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
      }

      if (leftDiff === -1 && topDiff === 0) {
        item.element.classList.add('moveLeft');
        item.element.addEventListener('transitionend', animateLeft);
      }
      if (topDiff === 1 && leftDiff === 0) {
        item.element.classList.add('moveDown');
        item.element.addEventListener('transitionend', animateDown);
      }
      if (topDiff === -1 && leftDiff === 0) {
        item.element.classList.add('moveUp');
        item.element.addEventListener('transitionend', animateUp);
      }
    }));

    this.timerStop = setInterval(() => {
      this.timer();
    }, 1000);

    this.record.addEventListener('click', () => {
      sortrecords();
    });
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
    console.log(this.animatedList);

    let i = 0;
    console.log(this.animatedList.length);
    while (i < this.animatedList.length) {
      let item = this.animatedList[i];
      let leftDiff = this.empty.left - item.left;
      let topDiff = this.empty.top - item.top;

      function animateDown() {
        console.log('я до мува');
        this.move(item);
        console.log('я после мува');
        item.element.classList.remove('moveDown');
        item.element.removeEventListener('transitionend', animateDown);
        i = i++;
      };

      if (topDiff === 1 && leftDiff === 0) {
        console.log('я ближайший');
        item.element.classList.add('moveDown');
        item.element.addEventListener('transitionend', animateDown);
      };

    }

    // this.animatedList.forEach(item => {
    //   console.log(item);
    //   let leftDiff = this.empty.left - item.left;
    //   let topDiff = this.empty.top - item.top;

    //   // console.log('я до мува');
    //   // move(item);
    //   // console.log('я после мува');

    //   const animateDown = () => {
    //     console.log('я до мува');
    //     move(item);
    //     console.log('я после мува');
    //     item.element.classList.remove('moveDown');
    //     item.element.removeEventListener('transitionend', animateDown);
    //   };

    //   if (topDiff === 1 && leftDiff === 0) {
    //     console.log('я ближайший');
    //     item.element.classList.add('moveDown');
    //     item.element.addEventListener('transitionend', animateDown);
    //   };
    // });
  }
}
