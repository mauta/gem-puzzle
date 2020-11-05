/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default class Cell {
  constructor(inner, parent, top, left) {
    this.inner = inner;
    this.top = top;
    this.left = left;
    this.cell = create('div', 'cell', `${inner}`, parent);
    this.cell.style.gridColumnStart = `${this.left}`;
    this.cell.style.gridRowStart = `${this.top}`;
  }
}
