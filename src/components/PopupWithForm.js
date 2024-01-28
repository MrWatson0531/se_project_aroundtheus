import Popup from "./PopUp.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  // close() {
  //   this._popupForm.reset();
  //   super.close();
  // }

  setEventListeners() {
    //event listeners
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
    super.setEventListeners()
  }
}
