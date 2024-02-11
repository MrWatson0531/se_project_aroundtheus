export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name; // title
    this._link = data.link; // url
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
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

    // "#profile-image-card"
    //this._cardElement.querySelector(".cards__image").src =
    //this.link.addEventListener("click", () => {
    //this._handleImageClick(this);
    //});

    const cardImage = this._cardElement.querySelector(".cards__image");

    cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  getView() {
    // get card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    // set event listeners
    this._setEventListeners();

    this._cardElement.querySelector(".cards__image").src = this._link;
    this._cardElement.querySelector(".cards__image").alt = this._name;
    this._cardElement.querySelector(".cards__title").textContent = this._name;

    // return the card
    return this._cardElement;
  }
}
