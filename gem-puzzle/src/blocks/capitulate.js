/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default function capitulate(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'сдаюсь', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    const arr = [12, 8, 4];

    for (let i = 0; i < arr[i]; i += 1) {
      const item = field.cells.filter(el => el.value === arr[i]);
      field.animatedList[i] = item;
    }
    field.animatedList = field.animatedList.flat();
    field.animation();
  });
}
