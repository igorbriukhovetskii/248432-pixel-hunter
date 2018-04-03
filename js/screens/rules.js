import getElementFromTemplate from './../utils/getElementFromTemplate.js';
import renderScreen from '../utils/renderScreen';
import {headerWithInfo} from '../common/header';
import showGame1 from './game1';
import footer from './../common/footer';

const template = `
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

const rules = {
  init() {
    this.element = getElementFromTemplate(template);
    this.submitButton = this.element.querySelector(`button.continue`);
    this.inputField = this.element.querySelector(`input.rules__input`);

    this.addListeners();
  },
  onInputChange() {
    this.submitButton.disabled = this.inputField.value === ``;
  },
  onSubmitButtonClick(evt) {
    evt.preventDefault();

    if (this.inputField.value) {
      showGame1();
    }
  },
  addListeners() {
    this.onInputChange = this.onInputChange.bind(this);
    this.inputField.addEventListener(`input`, this.onInputChange);

    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    this.submitButton.addEventListener(`click`, this.onSubmitButtonClick);
  },
  getElement() {
    return this.element;
  }
};

export default () => renderScreen(headerWithInfo, rules, footer);
