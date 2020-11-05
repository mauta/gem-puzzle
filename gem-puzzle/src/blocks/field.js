/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import create from '../utils/create.js';
import Cell from './cell.js';
import {btnSound, isSound} from './sound.js';


export default class Field {
  constructor(size = 4) {
    this.size = size;
  }

  init() {
    const main = document.querySelector('main');
    this.field = create('div', 'field', null, main);
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
      const cell = new Cell(value, this.field, top, left);
      this.cells.push({
        value: value,
        left: left,
        top: top,
        element: this.field.lastChild
      });
    }

    this.cells.forEach(item => item.element.addEventListener('click', () => {
      move(item);
      let isSoundOn = isSound();
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
