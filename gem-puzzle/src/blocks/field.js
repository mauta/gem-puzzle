/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import create from '../utils/create.js';
import Cell from './cell.js';
import {
  btnSound,
  isSound
} from './sound.js';

import {
  set,
  get,
  del
} from '../utils/storage.js'


export default class Field {
  constructor(size = 4) {
    this.size = size;
    this.wrap = document.querySelector('.field-wrap');
    this.stepsCounter = 0;
    this.timeCounter = 0;
    this.timerStop = '';
    this.GameSave = [];
    this.steps = create('div', 'steps', `${this.stepsCounter} шагов`)
    this.time = create('div', 'times', `${this.timeCounter}`)
    this.score = create('div', 'score', [create('div', 'record', 'рекорды'), this.steps, this.time], this.wrap);
    this.field = create('div', 'field', null, this.wrap);
    this.load = false;
    this.empty = {
      value: this.size * this.size,
      left: this.size,
      top: this.size
    }
  }

  init(size) {
    this.size = size || this.size;
    this.field.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.field.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;

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

  step() {
    this.stepsCounter++
    this.steps.textContent = `${this.stepsCounter} шагов`;
  }

  timer() {
    this.timeCounter++
    let sec = this.timeCounter % 60
    let min = Math.floor(this.timeCounter / 60)
    this.time.textContent = `${min} : ${sec}`
  }

  winner() {
    let name = prompt('вы победили! \n введите имя:');
    let winner = {
      winName: name,
      winLevel: this.size,
      winStep: this.stepsCounter,
      winTime: this.timeCounter
    }
    let record = get('records')
    if (record === null) {
      record = [winner];
    } else {
      record.push(winner);
    }
    set('records', record);
  }

  dragDrop() {
    let emptyCell = create('div', 'empty', null, this.field)
    emptyCell.style.gridColumnStart = `${this.empty.left}`;
    emptyCell.style.gridRowStart = `${this.empty.top}`;

    this.cells.forEach((item) => {
      const leftDiff = Math.abs(this.empty.left - item.left);
      const topDiff = Math.abs(this.empty.top - item.top);

      if (leftDiff + topDiff > 1) {
        return;
      } else {
        item.element.setAttribute('draggable', true);
        item.element.style.cursor = 'move';
      }

      item.element.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
      });

      item.element.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`selected`);
      });

      const drop = () => {
        console.log('я тащу')
        const emptyLeft = this.empty.left;
        const emptyTop = this.empty.top;
        this.empty.left = item.left;
        this.empty.top = item.top;
        item.left = emptyLeft;
        item.top = emptyTop;
        item.element.style.gridColumnStart = `${emptyLeft}`;
        item.element.style.gridRowStart = `${emptyTop}`;
        // let isSoundOn = isSound();
        // if (isSoundOn) {
        //   const audio = document.querySelector('.audio');
        //   audio.currentTime = 0;
        //   audio.play();
        // }
        this.cells.forEach((item) => {
          item.element.removeAttribute('draggable')
          item.element.style.cursor = 'pointer';
        });
        emptyCell.removeEventListener(`drop`, drop);
        emptyCell.remove();
        // this.dragDrop();
      }

      emptyCell.addEventListener(`drop`, drop);

      this.field.addEventListener(`dragover`, (evt) => {
        evt.preventDefault();
      });


    });
  }

  draw(isNew) {
    this.steps.textContent = `${this.stepsCounter} шагов`;
    let isWinner = false;
    let countCell = this.size * this.size;
    let numbers;
    this.empty = {
      value: this.size * this.size,
      left: this.size,
      top: this.size
    };
    this.cells = [];

    if (isNew) {
      numbers = this.generate();
      for (let i = 0; i < countCell - 1; i++) {
        const left = i % this.size + 1;
        const top = Math.ceil((i + 1) / this.size);
        const value = numbers[i];
        const cell = new Cell(value, this.field, top, left);
        this.cells.push({
          value: value,
          left: left,
          top: top,
          element: this.field.lastChild
        });
      }
    } else {
      if (this.load) {
        let save = get('longGame');
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
        this.load = false;
      } else {
        numbers = localStorage.getItem('currentGame').split(',')
        for (let i = 0; i < countCell - 1; i++) {
          const left = i % this.size + 1;
          const top = Math.ceil((i + 1) / this.size);
          const value = numbers[i];
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

    const move = (item) => {
      const leftDiff = Math.abs(this.empty.left - item.left);
      const topDiff = Math.abs(this.empty.top - item.top);
      const cellMoved = item;
      let countRight = 0;
      if (leftDiff + topDiff > 1) {
        return;
      } else {
        const emptyLeft = this.empty.left;
        const emptyTop = this.empty.top;
        this.empty.left = cellMoved.left;
        this.empty.top = cellMoved.top;
        cellMoved.left = emptyLeft;
        cellMoved.top = emptyTop;
        cellMoved.element.style.gridColumnStart = `${emptyLeft}`;
        cellMoved.element.style.gridRowStart = `${emptyTop}`;
        let isSoundOn = isSound();
        if (isSoundOn) {
          const audio = document.querySelector('.audio');
          audio.currentTime = 0;
          audio.play();
        }
      }

      for (let i = 0; i < countCell - 1; i++) {
        let position = (this.cells[i].top - 1) * this.size + this.cells[i].left;
        if (position === this.cells[i].value) {
          countRight++;
          this.cells[i].element.style.opacity = '0.8'
        } else {
          this.cells[i].element.style.opacity = '1'
        }
        if (countRight === countCell - 1) {
          this.cells.forEach(el => el.element.style.opacity = '0.1')
          clearInterval(this.timerStop);
          isWinner = true;
        }
      }
      this.step();
    }

    this.dragDrop();

    this.cells.forEach(item => item.element.addEventListener('click', () => {
      let leftDiff = this.empty.left - item.left;
      let topDiff = this.empty.top - item.top;

      function animateRight() {
        move(item);
        item.element.classList.remove('moveRight')
        item.element.removeEventListener('transitionend', animateRight);
      }

      function animateLeft() {
        move(item);
        item.element.classList.remove('moveLeft')
        item.element.removeEventListener('transitionend', animateLeft);
      }

      function animateDown() {
        move(item);
        item.element.classList.remove('moveDown')
        item.element.removeEventListener('transitionend', animateDown);
      }

      function animateUp() {
        move(item);
        item.element.classList.remove('moveUp')
        item.element.removeEventListener('transitionend', animateUp);
      }

      if (leftDiff === 1 && topDiff === 0) {
        item.element.classList.add('moveRight')
        item.element.addEventListener('transitionend', animateRight);
      }

      if (leftDiff === -1 && topDiff === 0) {
        item.element.classList.add('moveLeft')
        item.element.addEventListener('transitionend', animateLeft);
      }
      if (topDiff === 1 && leftDiff === 0) {
        item.element.classList.add('moveDown')
        item.element.addEventListener('transitionend', animateDown);
      }
      if (topDiff === -1 && leftDiff === 0) {
        item.element.classList.add('moveUp')
        item.element.addEventListener('transitionend', animateUp);
      }

      if (isWinner) {
        this.winner();
      }
    }));

    this.timerStop = setInterval(() => {
      this.timer();
    }, 1000)
  }

  delete() {
    this.stepsCounter = 0;
    this.timeCounter = 0;
    clearInterval(this.timerStop);
    while (this.field.firstChild) {
      this.field.removeChild(this.field.firstChild)
    }
  }

}
