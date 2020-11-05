/* eslint-disable import/extensions */
import create from '../utils/create.js';
import Field from './field.js';
import field from '../main.js';


export default function restart(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntRestart btn', 'повторить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.delete()
    field.draw(false);
  })
}
