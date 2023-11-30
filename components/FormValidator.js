export default class FormValidator{
    constructor(settings, initialCards) {
        this._settings = settings;
        this._initialCards = initialCards;
    }

     settings = {
            formSelector: ".modal__form",
            inputSelector: ".modal__input",
            submitButtonSelector: ".modal__button",
            inactiveButtonClass: "modal__button_disabled",
            inputErrorClass: ".modal__input_type_error",
            errorClass: "modal__error_visible",
    };
}

function enableValidation(options) {
    const { formSelector } = options;
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });