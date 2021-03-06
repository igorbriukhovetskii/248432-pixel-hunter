import getElementFromTemplate from './../utils/getElementFromTemplate';
import renderScreen from '../utils/renderScreen';
import {headerWithInfo} from './../common/header';
import showGame2 from './game2';
import footer from './../common/footer';

const template = `
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
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
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const game1 = {
  init() {
    this.element = getElementFromTemplate(template);
    this.form = this.element.querySelector(`form`);
    this.questions = [...this.form.querySelectorAll(`input[name*='question']`)];

    this.addListeners();
  },
  getElement() {
    return this.element;
  },
  onFormChange() {
    const checkedRadios = this.questions.filter((radio) => radio.checked);

    if (checkedRadios.length === 2) {
      showGame2();
    }
  },
  addListeners() {
    this.onFormChange = this.onFormChange.bind(this);
    this.form.addEventListener(`change`, this.onFormChange);
  }
};

export default () => renderScreen(headerWithInfo, game1, footer);
