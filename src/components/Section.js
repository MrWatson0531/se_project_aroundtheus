export default class Section {
  constructor({ items, renderer, cssSelector}) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cssSelector);
  }

  renderItems() {
    //use forEach to "iterate" over each (item)
    console.log("other");
    this._items.forEach((item) => {
      //use this._renderer to render each (item)
      this._renderer(item);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
