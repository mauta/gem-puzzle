/* eslint-disable import/extensions */
import create from '../utils/create.js';

export default function restart(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntRestart btn', 'повторить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.delete();
    // eslint-disable-next-line no-param-reassign
    field.isAutoPlay = false;
    field.draw(false);
  });
}
