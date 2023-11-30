export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    console.log({ name, link });
  }

  _setEventListeners() {
    // ".cards__like-button"
    this._cardElement
      .querySelector(".cards__like-button")
      .addEventListener("click", (event) => {
        event.target.classList.toggle("cards__like-button_active");
        console.log("liked");
      });

    // ".cards__delete-button"
    this._cardElement
      .querySelector(".cards__delete-button")
      .addEventListener("click", (event) => {
        event.target.closest(".card").remove();
      });
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    // get card view
    // set event listeners
    this._setEventListeners();
    // return the card
    return this._cardElement;
  }
}
