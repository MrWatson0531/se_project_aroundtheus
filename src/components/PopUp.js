export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._button = this._popupElement.querySelector(".modal__close");
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscape);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscape);
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscape = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    //event listeners
    // this._button.addEventListener("click", () => {
    //   this.close();
    // });

    this._popupElement.addEventListener("click", (evt) => {
      // if the evt.target.classList contains either `modal` or `modal__close`
      // then close modal: this.close();
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__close")
      ) {
        this.close();
      }
    });
  }
}
