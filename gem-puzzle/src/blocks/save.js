import create from '../utils/create';
import { set } from '../utils/storage';

export default function btnSave(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'сохранить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    set('longGame', field.cells);
    set('longAnimatedList', field.animatedList);
    set('empty', field.empty);
    set('longTimeStepsBgr', {
      steps: field.stepsCounter,
      times: field.timeCounter,
      bgr: field.backgroundImage,
      kind: field.kind,
    });
  });
}
