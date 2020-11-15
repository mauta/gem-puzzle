/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default function capitulate(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'сдаюсь', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    const b = field.animatedList.join().replaceAll('0,2,', '').replaceAll('2,0,', '').replaceAll('3,1,', '')
      .replaceAll('1,3,', '').split(',');
    const a = b.map((el) => el = +el);
    field.animatedList = a.reverse().map((x) => (x + 2) % 4);
    field.isAutoPlay = true;
    field.stopAnimation = false;
    field.animation();
  });
}
