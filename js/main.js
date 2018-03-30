const templates = document.querySelectorAll(`template`);
const main = document.querySelector(`main`);

let altKey = false;
let currentScreen = 0;

const KEYS = {
  ALT: 18,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39
};

/**
 * Показ выбранного экрана
 * @param {Number} screen - номер показываемого экрана
 */
const showScreen = (screen) => {
  const node = document.importNode(templates[screen].content, true);

  main.innerHTML = ``;
  main.appendChild(node);
};

// Показ следующего экрана
const showNextScreen = () => {
  if (currentScreen < templates.length - 1) {
    currentScreen++;
    showScreen(currentScreen);
  }
};

// Показ предидущего экрана
const showPreviousScreen = () => {
  if (currentScreen > 0) {
    currentScreen--;
    showScreen(currentScreen);
  }
};

/**
 * Обработчик нажатия на клавиатуру
 * @param {Object} event
 */
const onKeyDown = (event) => {
  const key = event.keyCode;

  if (key === KEYS.ALT) {
    altKey = true;
  }

  if (key === KEYS.ARROW_LEFT && altKey) {
    showPreviousScreen();
  }

  if (key === KEYS.ARROW_RIGHT && altKey) {
    showNextScreen();
  }
};

/**
 * Обработчик keyup на кнопке Alt
 * @param {Object} event
 */
const onAltKeyUp = (event) => {
  const key = event.keyCode;

  if (key === KEYS.ALT) {
    altKey = false;
  }
};

document.addEventListener(`keydown`, onKeyDown);
document.addEventListener(`keyup`, onAltKeyUp);

showScreen(currentScreen);
