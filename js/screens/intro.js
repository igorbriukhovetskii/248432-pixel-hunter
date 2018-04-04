import getElementFromTemplate from './../utils/getElementFromTemplate.js';
import renderScreen from '../utils/renderScreen';
import showGreeting from './greeting';
import footer from './../common/footer';

const template = `
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

const intro = {
  init() {
    this.element = getElementFromTemplate(template);
    this.startButton = this.element.querySelector(`.intro__asterisk`);
    this.addListeners();
  },
  onStartButtonClick() {
    showGreeting();
  },
  addListeners() {
    this.onStartButtonClick = this.onStartButtonClick.bind(this);
    this.startButton.addEventListener(`click`, this.onStartButtonClick);
  },
  getElement() {
    return this.element;
  }
};

export default () => renderScreen(intro, footer);
