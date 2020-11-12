/* eslint-disable import/extensions */
import create from '../utils/create';

let sound = true;

function btnSound() {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntSound btn', 'звук выкл', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    if (sound) {
      sound = !sound;
      btn.textContent = 'звук вкл';
    } else {
      sound = !sound;
      btn.textContent = 'звук выкл';
    }
  });
}

function isSound() {
  return sound;
}

export {
  btnSound,
  isSound,
};
