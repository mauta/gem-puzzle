/* eslint-disable import/extensions */
import Field from './blocks/field';
import create from './utils/create';
import btnNewGame from './blocks/newgame';
import btnRestart from './blocks/restart';
import btnCapitulate from './blocks/capitulate';
import btnAddition from './blocks/addition';

const START_SIZE = 4;
const isNew = true;
const main = create('main', '', create('h1', 'title', 'Gem Puzzle'));
document.body.prepend(main);
const fieldWrap = create('div', 'field-wrap', null, main);
const field = new Field(START_SIZE);
const buttons = create('div', 'buttons', null, main);
btnNewGame(field);
btnRestart(field);
btnCapitulate();
btnAddition(field);
main.append(fieldWrap);
field.init();
field.draw(isNew);
