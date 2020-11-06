/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import create from '../utils/create.js';
import RadioInput from './radiobtn.js';


export default class Difficulty {
  constructor() {
    this.main = document.querySelector('main');
  }

  init() {

    this.popup = create('div', 'dark-screen', create('div', 'popup', create('h2', 'title', 'Выбор сложности')), this.main)
    this.level = create('form', 'level-kind', create('div', 'form-wrap'))
    this.popup.firstChild.appendChild(this.level)

    for (let i = 0; i < 6; i++) {
      let item = new RadioInput('radio', 'lavel', i + 3, 'input', `${i+3} x ${i+3}`, this.level)
      item.span.classList.add('radio-level')
      item.input.setAttribute('checked', true)
      this.level.firstChild.appendChild(item.label)
    }

    this.level.appendChild(create('div', 'form-wrap'))
    let item1 = new RadioInput('radio', 'kind', 'kind-img', 'input', 'картинки', this.level)
    item1.span.classList.add('radio-kind')
    item1.label.classList.add('label-kind')
    item1.input.setAttribute('checked', true)
    this.level.lastChild.appendChild(item1.label)

    let item2 = new RadioInput('radio', 'kind', 'kind-digit', 'input', 'цифры', this.level)
    item2.span.classList.add('radio-kind')
    item2.label.classList.add('label-kind')
    item2.input.setAttribute('checked', true)
    this.level.lastChild.appendChild(item2.label)

    let item3 = new RadioInput('radio', 'kind', 'kind-both', 'input', 'картинки и цифры', this.level)
    item3.span.classList.add('radio-kind')
    item3.label.classList.add('label-kind')
    item3.input.setAttribute('checked', true)
    this.level.lastChild.appendChild(item3.label)

    let btnsubmit = create('button','btn popup-btn','применить',this.level,['type','submit'])
    this.level.appendChild(btnsubmit)

    let btnclose = create('button','close-btn',create('span','visually-hidden',close),null,['type','button'])
    this.popup.firstChild.appendChild(btnclose)
  }

}
