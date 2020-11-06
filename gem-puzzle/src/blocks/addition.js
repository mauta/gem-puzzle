/* eslint-disable import/extensions */
import create from '../utils/create.js';
import btnSave from './save.js';
import btnLoad from './load.js';
import btnLevel from './level.js';
import {btnSound, isSound} from './sound.js';


export default function btnAddition(field) {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'плюшки', buttons, ['type', 'button']);
  let isOpenAdds = false

  btn.addEventListener('click', () => {

    if (!isOpenAdds) {
      btnSave();
      btnLoad();
      btnLevel(field);
      btnSound();
      isOpenAdds = !isOpenAdds
    } else {
      isOpenAdds = !isOpenAdds
      for (let i = 0; i < 4; i++) {
        buttons.removeChild(buttons.lastChild)
      }
    }
  });
}
