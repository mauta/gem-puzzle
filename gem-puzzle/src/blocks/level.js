/* eslint-disable import/extensions */
import create from '../utils/create.js';
import Difficulty from './difficulty.js';

export default function btnlevel() {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'уровень', buttons, ['type', 'button']);
  const main = document.querySelector('main')

  btn.addEventListener('click', () => {

    let popup = new Difficulty().init()

  })
}
