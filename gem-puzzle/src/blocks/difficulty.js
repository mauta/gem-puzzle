/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import create from '../utils/create.js';
import RadioInput from './radiobtn.js';
import Field from './field.js';


export default class Difficulty {
  constructor(field) {
    this.main = document.querySelector('main');
    this.field = field;
  }

  init() {
    this.popup = create('div', 'dark-screen', create('div', 'popup', create('h2', 'title', 'Выбор сложности')), this.main)
    this.level = create('form', 'level-kind', create('div', 'form-wrap'), null, ['method', 'GET'])
    this.popup.firstChild.appendChild(this.level)

    for (let i = 0; i < 6; i++) {
      let item = new RadioInput('radio', 'lavel', i + 3, 'input input-level', `${i+3} x ${i+3}`, this.level)
      item.span.classList.add('radio-level')
      item.input.setAttribute('checked', true)
      this.level.firstChild.appendChild(item.label)
    }

    this.level.appendChild(create('div', 'form-wrap'))
    let item1 = new RadioInput('radio', 'kind', 'kind-img', 'input input-kind', 'картинки', this.level)
    item1.span.classList.add('radio-kind')
    item1.label.classList.add('label-kind')
    item1.input.setAttribute('checked', true)
    this.level.lastChild.appendChild(item1.label)

    let item2 = new RadioInput('radio', 'kind', 'kind-digit', 'input input-kind', 'цифры', this.level)
    item2.span.classList.add('radio-kind')
    item2.label.classList.add('label-kind')
    item2.input.setAttribute('checked', true)
    this.level.lastChild.appendChild(item2.label)

    let item3 = new RadioInput('radio', 'kind', 'kind-both', 'input input-kind', 'картинки и цифры', this.level)
    item3.span.classList.add('radio-kind')
    item3.label.classList.add('label-kind')
    item3.input.setAttribute('checked', true)
    this.level.lastChild.appendChild(item3.label)

    // let btnsubmit = create('button', 'btn popup-btn', 'применить', this.level, ['type', 'submit'])

    let btnsubmit = create('button', 'btn popup-btn', 'применить', this.level, ['type', 'button'])
    this.level.appendChild(btnsubmit)

    let btnclose = create('button', 'close-btn', create('span', 'visually-hidden', close), null, ['type', 'button'])
    this.popup.firstChild.appendChild(btnclose)


    let check = document.querySelectorAll('.input-level');
    let check2 = document.querySelectorAll('.input-kind');
    let level = 8;
    let kind = 'kind-both';


    for (let i = 0; i < check.length; i++) {
      check[i].addEventListener('click', function (event) {
        level = check[i].value;
      });
    }
    for (let i = 0; i < check2.length; i++) {
      check2[i].addEventListener('click', function (event) {
        kind = check2[i].value;
      });
    }

    function closePopup(popup) {
      popup.remove();
    }

    btnsubmit.addEventListener('click', () => {
      this.field.kind = kind;
      this.field.delete();
      this.field.init(level);
      this.field.draw(true);
      closePopup(this.popup);
    })

    btnclose.addEventListener('click', () => {
      closePopup(this.popup);
    })

  }
}
