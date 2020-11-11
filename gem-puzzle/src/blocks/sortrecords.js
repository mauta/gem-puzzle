/* eslint-disable import/extensions */
import create from '../utils/create.js';
import {
  set,
  get,
  del
} from '../utils/storage.js'

export default function sortrecords() {
  const main = document.querySelector('main');
  const popup = create('div', 'dark-screen', create('div', 'popup', create('h2', 'title', 'РЕКОРДЫ')), main)
  const listRecords = get('records');
  const recordsWrap = create('div', 'records-wrap');
  popup.firstChild.append(recordsWrap);
  let count = 10;

  function byKey(key) {
    return (a, b) => a[key] > b[key] ? 1 : -1;
  }

  let sortList = listRecords.sort(byKey('winTime'));
  const stepTitle = create('div', 'player-step', `ШАГИ:`);
  const timeTitle = create('div', 'player-time', `ВРЕМЯ:`);

  const title = create('div', 'player-title', [create('div', 'player-name', `ИМЯ:`), create('div', 'player-level', `УРОВЕНЬ:`), stepTitle, timeTitle], recordsWrap)

  sortList.length < 10 ? count = sortList.length : count = 10;

  stepTitle.addEventListener('click', () => {
    sortList = listRecords.sort(byKey('winStep'));
    for (let i = 0; i < count; i++) {
      recordsWrap.lastChild.remove()
    }
    for (let i = 0; i < count; i++) {
      let sec = sortList[i].winTime % 60
      let min = Math.floor(sortList[i].winTime / 60)
      const playerName = create('span', 'player-name', `${sortList[i].winName}`)
      const player = create('div', 'player', [playerName, create('div', 'player-level', `${sortList[i].winLevel}x${sortList[i].winLevel}`), create('div', 'player-step', `${sortList[i].winStep}`), create('div', 'player-time', `${min} : ${sec}`)], recordsWrap)
    }
  })

  timeTitle.addEventListener('click', () => {
    sortList = listRecords.sort(byKey('winTime'));
    for (let i = 0; i < count; i++) {
      recordsWrap.lastChild.remove()
    }
    for (let i = 0; i < count; i++) {
      let sec = sortList[i].winTime % 60
      let min = Math.floor(sortList[i].winTime / 60)
      const playerName = create('span', 'player-name', `${sortList[i].winName}`)
      const player = create('div', 'player', [playerName, create('div', 'player-level', `${sortList[i].winLevel}x${sortList[i].winLevel}`), create('div', 'player-step', `${sortList[i].winStep}`), create('div', 'player-time', `${min} : ${sec}`)], recordsWrap)
    }
  })


  for (let i = 0; i < count; i++) {
    let sec = sortList[i].winTime % 60
    let min = Math.floor(sortList[i].winTime / 60)
    const playerName = create('span', 'player-name', `${sortList[i].winName}`)
    const player = create('div', 'player', [playerName, create('div', 'player-level', `${sortList[i].winLevel}x${sortList[i].winLevel}`), create('div', 'player-step', `${sortList[i].winStep}`), create('div', 'player-time', `${min} : ${sec}`)], recordsWrap)
  }

  let btnclose = create('button', 'close-btn', create('span', 'visually-hidden', close), null, ['type', 'button']);
  popup.firstChild.append(btnclose);

  function closePopup(popup) {
    popup.remove();
  }

  btnclose.addEventListener('click', () => {
    closePopup(popup);
  });
}
