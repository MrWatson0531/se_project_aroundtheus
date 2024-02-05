import Popup from "./PopUp.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
    const inputValues = {};
    this._inputList.forEach((input) => {
      // here you insert the `value` by the `name` of the input
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  // close() {
  //   this._popupForm.reset();
  //   super.close();
  // }

  setEventListeners() {
    //event listeners
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
    super.setEventListeners();
  }
}
