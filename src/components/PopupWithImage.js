import Popup from "./PopUp.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }

  open(name, link) {
    // get access to modal image element & modal title element
    // set name of title
    this._popupElement.querySelector(".modal__image").src = link;
    this._popupElement.querySelector(".modal__image").alt = name;

    // set image url (link)
    this._popupElement.querySelector(".modal__image-text").textContent = name;
    super.open();
  }
}
