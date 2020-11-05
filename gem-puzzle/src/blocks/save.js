/* eslint-disable import/extensions */
import create from '../utils/create.js';



export default function btnSave() {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'сохранить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    console.log('я еще не работаю, я маленькая')
  })
}
