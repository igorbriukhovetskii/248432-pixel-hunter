const getElementFromTemplate = (templateString) => {
  const templateElement = document.createElement(`template`);

  templateElement.innerHTML = templateString;

  return document.importNode(templateElement.content, true);
};

export default getElementFromTemplate;
