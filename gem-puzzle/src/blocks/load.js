/* eslint-disable import/extensions */
import create from '../utils/create.js';
import {
  get,
} from '../utils/storage.js';

export default function btnLoad(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'загрузить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    field.load = true;
    field.delete();
    const stepsTimes = get('longTimeStepsBgr');
    const save = get('longGame');
    field.init(Math.sqrt(save.length + 1));
    field.stepsCounter = stepsTimes.steps;
    field.timeCounter = stepsTimes.times;
    field.isAutoPlay = false;
    field.draw(false);
  });
}
