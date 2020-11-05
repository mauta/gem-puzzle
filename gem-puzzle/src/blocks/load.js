/* eslint-disable import/extensions */
import create from '../utils/create.js';



export default function btnLoad() {
  const buttons = document.querySelector('.buttons');
  const btn = create('button', 'bntCapitulate btn', 'загрузить', buttons, ['type', 'button']);

  btn.addEventListener('click', () => {
    console.log('я еще не работаю, я маленькая')
  })
}
