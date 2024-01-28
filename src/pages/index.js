import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__input_type_error",
  errorClass: "modal__error_visible",
};
/*

declarations

*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddButton = document.querySelector(".profile__add-button");
const addModal = document.querySelector("#profile-add-card");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const cardAddTitleInput = document.querySelector("#profile-add-title-input");
const cardAddDescriptionInput = document.querySelector(
  "#profile-add-description-input"
);
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector("#edit-modal-form");
const cardAddForm = addModal.querySelector("#add-modal-form");
const cardListEl = document.querySelector(".cards__list");

const cardTemplateSelector = "#card-template";

const itemSection = new Section({
  items: initialCards,
  renderer: (data) => itemSection.addItem(createCard(data)),
});

const addCardModal = new PopupWithForm(
  "#profile-add-card",
  handleCardAddSubmit
);
addCardModal.setEventListeners();

const editCardModal = new PopupWithForm(
  "#profile-edit-modal",
  handleCardAddSubmit
);
editCardModal.setEventListeners();

const previewImageModal = new PopupWithImage("#preview-image-modal");
previewImageModal.setEventListeners();

// /* functions */

// function closePopup(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEscape);
// }


function handleImageClick(name, link) {
  previewImageModal.open(name, link);
}

function createCard(cardData) {
  return new Card(cardData, cardTemplateSelector, handleImageClick).getView();
}

function renderCard(cardData, cardsWrapper) {
  const cardElement = createCard(cardData);
  cardsWrapper.prepend(cardElement);
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleCardAddSubmit() {
  const name = cardAddTitleInput.value;
  const link = cardAddDescriptionInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(addModal);
  e.target.reset();
}

/* listeners */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  editCardModal.open();
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

cardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardModal.open();
});

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});

function handleEscape(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

const editFormValidator = new FormValidator(config, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, cardAddForm);
addFormValidator.enableValidation();
