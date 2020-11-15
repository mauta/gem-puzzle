/* eslint-disable import/extensions */
import create from '../utils/create.js';
import Difficulty from './difficulty.js';

export default function btnlevel(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'уровень', buttons, ['type', 'button']);
  btn.addEventListener('click', () => {
    const popup = new Difficulty(field).init();
  });
}
