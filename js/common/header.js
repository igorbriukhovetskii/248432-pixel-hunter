import getElementFromTemplate from './../utils/getElementFromTemplate.js';
import showGreeting from './../screens/greeting';

// Шаблон блока с кнопкой возврата на экран приветствия
const headerBack = `<div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;

// Шаблон блока с информацией об игровой сессии
const headerStat = `<h1 class="game__timer">NN</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>`;

/**
 * Получение шаблона хедера
 * @param {Boolean} withInfo
 * @return {string}
 */
const getHeaderTemplate = (withInfo) => {
  return withInfo ? `<header class="header">${headerBack}${headerStat}</header>` : `<header class="header">${headerBack}</header>`;
};

// Хедер без информации об игровой сессии
const header = {
  init() {
    this.element = getElementFromTemplate(getHeaderTemplate());
    this.backButton = this.element.querySelector(`button.back`);

    this.addListeners();
  },
  onBackButtonClick() {
    showGreeting();
  },
  addListeners() {
    this.onBackButtonClick = this.onBackButtonClick.bind(this);
    this.backButton.addEventListener(`click`, this.onBackButtonClick);
  },
  getElement() {
    return this.element;
  }
};

// Хедер с информацией об игровой сессии
const headerWithInfo = {
  init() {
    this.element = getElementFromTemplate(getHeaderTemplate(true));
    this.backButton = this.element.querySelector(`button.back`);

    this.addListeners();
  },
  onBackButtonClick() {
    showGreeting();
  },
  addListeners() {
    this.onBackButtonClick = this.onBackButtonClick.bind(this);
    this.backButton.addEventListener(`click`, this.onBackButtonClick);
  },
  getElement() {
    return this.element;
  }
};

export {header, headerWithInfo};
