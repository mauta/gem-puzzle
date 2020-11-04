/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import create from './utils/create.js';
import Cell from './cell.js';

const main = create('main', '', create('h1', 'title', 'Gem Puzzle'));

export default class Field {
  constructor(size = 4) {
    this.size = size;
  }

  init() {
    this.field = create('div', 'field', null, main);
    this.field.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.field.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
    document.body.prepend(main);
    return this;
  }

  generate() {
    const empty = {
      left: this.size,
      top: this.size
    }

    let countCell = this.size * this.size;
    this.cells = [];

    const move = (item) => {
      const leftDiff = Math.abs(empty.left - item.left);
      const topDiff = Math.abs(empty.top - item.top);
      const cellMoved = item;
      console.log("empty до")
      console.log(empty)
      console.log("cellMoved до")
      console.log(cellMoved)

      if (leftDiff + topDiff > 1) {
        return;
      } else {

        const emptyLeft = empty.left;
        const emptyTop = empty.top;
        empty.left = cellMoved.left;
        empty.top = cellMoved.top;
        cellMoved.left = emptyLeft
        cellMoved.top = emptyTop

        cellMoved.element.style.gridColumnStart = `${emptyLeft}`;
        cellMoved.element.style.gridRowStart = `${emptyTop}`;

        console.log("empty ")
        console.log(empty)
        console.log("cellMoved ")
        console.log(cellMoved)
      }


    }

    for (let i = 0; i < countCell - 1; i++) {
      const left = i % 4 + 1;
      const top = Math.ceil((i + 1) / 4);
      const cell = new Cell(i + 1, this.field, top, left);
      this.cells.push({
        left: left,
        top: top,
        element: this.field.lastChild
      });
    }


    this.cells.forEach(item => item.element.addEventListener('click', () => {
      move(item)
    }));

  }


}
