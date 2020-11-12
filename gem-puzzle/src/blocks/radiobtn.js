/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default class RadioInput {
  constructor(type, name, value, classname, inner, parent) {
    this.inner = inner;
    this.name = name;
    this.value = value;
    this.type = type;
    this.classmame = classname;
    this.parent = parent;
    this.label = create('label', 'label', `${this.inner}`);
    this.input = create('input', this.classmame, null, this.label, ['name', this.name], ['type', this.type], ['value', this.value]);
    this.span = create('span', 'radio', null, this.label);
  }
}
