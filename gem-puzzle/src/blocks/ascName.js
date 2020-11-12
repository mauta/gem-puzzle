import create from '../utils/create';
import { set, get } from '../utils/storage';

export default function ascname(winner) {
  const main = document.querySelector('main');
  const popup = create('div', 'dark-screen', create('div', 'popup-winner', create('h2', 'title', 'Ура-ура-ура!!!')), main);
  const winLevel = create('h3', 'win-score', `Вы решили головоломку ${winner.winLevel} х ${winner.winLevel}`, popup);
  const sec = winner.winTime % 60;
  const min = Math.floor(winner.winTime / 60);

  let step;
  const lastnumber = String(winner.winStep).slice(-1);
  const last2number = String(winner.winStep).slice(-2, 1);
  if (lastnumber === '1' && last2number !== '1') {
    step = 'шаг';
  } else if ((lastnumber === '2' || lastnumber === '3' || lastnumber === '4') && last2number !== '1') {
    step = 'шага';
  } else {
    step = 'шагов';
  }

  const winStepTime = create('h3', 'win-score', `за ${winner.winStep} ${step} и ${min} : ${sec}`, popup);

  popup.firstChild.append(winLevel);
  popup.firstChild.append(winStepTime);

  const btnclose = create('button', 'close-btn', create('span', 'visually-hidden', 'close'), null, ['type', 'button']);
  popup.firstChild.append(btnclose);
  const nameLabel = create('label', 'name_label');
  const nameInput = create('input', 'name_input', null, nameLabel, ['type', 'text'], ['placeholder', 'Введите имя']);
  const nameText = create('span', 'name_text hidden', null, nameLabel);
  popup.firstChild.append(nameLabel);

  const closePopup = (node) => {
    node.remove();
  }

  btnclose.addEventListener('click', () => {
    closePopup(popup);
  });

  function clearName() {
    nameInput.setAttribute('placeholder', '');
  }

  function setName(el) {
    if (el.type === 'keypress') {
      if (el.keyCode === 13) {
        nameText.innerText = nameInput.value;
        nameInput.classList.add('hidden');
        nameText.classList.remove('hidden');
        nameInput.blur();
        winner.winName = nameInput.value;

        let record = get('records');
        if (record === null) {
          record = [winner];
        } else {
          record.push(winner);
        }

        set('records', record);
      }
    }
  }

  nameInput.addEventListener('click', clearName);
  nameInput.addEventListener('keypress', setName);
}
