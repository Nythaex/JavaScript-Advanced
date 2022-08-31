export function createElement(type, content, parent) {
  let element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
  return element;
}
