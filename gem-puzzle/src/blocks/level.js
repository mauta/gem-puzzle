/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default function btnlevel() {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'уровень', buttons, ['type', 'button']);
  const main = document.querySelector('main')

  btn.addEventListener('click', () => {

    // const popup = create('div', 'popup', 'уровень', main);

  })
}
