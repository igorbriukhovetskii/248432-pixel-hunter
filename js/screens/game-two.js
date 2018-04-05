import getElementFromTemplate from './../utils/getElementFromTemplate';
import renderScreen from '../utils/renderScreen';
import {headerWithInfo} from './../common/header';
import showGameThree from "./game-three";
import footer from './../common/footer';

const template = `
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const gameTwo = {
  init() {
    this.element = getElementFromTemplate(template);
    this.form = this.element.querySelector(`form`);
    this.questions = [...this.form.querySelectorAll(`input[name*='question']`)];

    this.addListeners();
  },
  onFormChange() {
    if (this.questions.some((radio) => radio.checked)) {
      showGameThree();
    }
  },
  addListeners() {
    this.onFormChange = this.onFormChange.bind(this);
    this.form.addEventListener(`change`, this.onFormChange);
  },
  getElement() {
    return this.element;
  }
};

export default () => renderScreen(headerWithInfo, gameTwo, footer);
