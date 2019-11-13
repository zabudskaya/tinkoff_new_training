import './layout.pcss';

NodeList.prototype.forEach = Array.prototype.forEach;

class Layout {
  constructor() {}

  add(selector, component) {
    document.querySelectorAll(selector).forEach(item => {
      item[component.name] = new component(item);
    });
  }
}

window.Layout = new Layout();


