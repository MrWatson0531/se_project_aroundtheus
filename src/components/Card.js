export default class Card {
  constructor(data, cardSelector, handleImageClick, handleDeleteClick) {
    this._name = data.name; // title
    this._link = data.link; // url
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
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
    console.log(cardDeleteForm);
    const cardDeleteButton = this._cardElement.querySelector(
      ".cards__delete-button"
    );

    cardDeleteButton.addEventListener("click", () => {
      // cardDeleteForm.open();
      this._handleDeleteClick(this._cardSelector);
    });

    const cardImage = this._cardElement.querySelector(".cards__image");

    cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscape);
  }

  _handleEscape = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

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
