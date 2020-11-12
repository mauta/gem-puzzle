/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default function capitulate() {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'сдаюсь', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    console.log('я еще не работаю, я маленькая');
  });
}
