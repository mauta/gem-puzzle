/* eslint-disable import/extensions */
import Field from './blocks/field.js';
import create from './utils/create.js';
import btnNewGame from './blocks/newgame.js';
import btnRestart from './blocks/restart.js';
import btnCapitulate from './blocks/capitulate.js';
import btnAddition from './blocks/addition.js';
import RadioInput from './blocks/radiobtn.js';
import Difficulty from './blocks/difficulty.js';

const START_SIZE = 4;
const isNew = true
let field = new Field(START_SIZE);
const main = create('main', '', create('h1', 'title', 'Gem Puzzle'));
document.body.prepend(main);

const buttons = create('div', 'buttons', null, main);

btnNewGame(field);
btnRestart(field);
btnCapitulate(field)
btnAddition()
field.init();
field.draw(isNew);


let diff = new Difficulty().init()
