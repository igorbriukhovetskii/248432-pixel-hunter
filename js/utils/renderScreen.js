const main = document.querySelector(`main.central`);

const renderScreen = (...nodes) => {
  main.innerHTML = ``;

  nodes.forEach((node) => {
    const element = Object.create(node);
    element.init();
    main.appendChild(element.getElement());
  });
};

export default renderScreen;
