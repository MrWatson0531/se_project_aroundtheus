import Popup from "../PopUp.js";
class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super({popupSelector});
        this._handleFormSubmit = handleFormSubmit;
        _popupForm = this._popupElement.querySelector(".modal__form");
    }

    open(){
        super.open();
    }

    close(){
        _popupForm.reset();
        super.close();
     } 
    }

     _popupWithform.newCardPopup = new PopupWithForm("#profile-add-card", () => {});

 newCardPopup.open();
 newCardPopup.close();
