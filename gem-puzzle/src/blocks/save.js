/* eslint-disable import/extensions */
import create from '../utils/create.js';
import Field from './field.js';
import {
  set,
  get,
  del
} from '../utils/storage.js'


export default function btnSave(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'сохранить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    set('longGame', field.cells);
    set('empty', field.empty);
    set('longTimeSteps', {steps:  field.stepsCounter, times:field.timeCounter});
  })
}
