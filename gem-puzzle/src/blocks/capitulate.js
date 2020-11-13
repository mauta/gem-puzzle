/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default function capitulate(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'сдаюсь', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.animatedList = field.animatedList.reverse().map((x) => (x + 2) % 4);
    field.isAutoPlay = true;
    field.stopAnimation = false;
    console.log(field.animatedList);
    field.animation();
  });
}
