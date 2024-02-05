import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, config } from "../utils/constants.js";

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddButton = document.querySelector(".profile__add-button");
const addModal = document.querySelector("#profile-add-card");
// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description");
// const profileTitleInput = document.querySelector("#profile-title-input");
// const cardAddTitleInput = document.querySelector("#profile-add-title-input");
// const cardAddDescriptionInput = document.querySelector(
//   "#profile-add-description-input"
// );
// const profileDescriptionInput = document.querySelector(
//   "#profile-description-input"
// );
const profileEditForm = profileEditModal.querySelector("#edit-modal-form");
const cardAddForm = addModal.querySelector("#add-modal-form");
const cardListEl = document.querySelector(".cards__list");

const cardTemplateSelector = "#card-template";

const editCardModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
editCardModal.setEventListeners();

const previewImageModal = new PopupWithImage("#preview-image-modal");
previewImageModal.setEventListeners();

const userInfo = new UserInfo(".profile__title", ".profile__description");
const itemSection = new Section({
  items: initialCards,
  renderer: (data) => itemSection.addItem(createCard(data)),
});

const addCardModal = new PopupWithForm(
  "#profile-add-card",
  handleCardAddSubmit
);
addCardModal.setEventListeners();

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

// function renderCard(cardData, cardsWrapper) {
//   const cardElement = createCard(cardData);
//   cardsWrapper.prepend(cardElement);
// }

function handleProfileEditSubmit(inputValues) {
  // evt.preventDefault();
  // profileTitle.textContent = profileTitleInput.value;
  // profileDescription.textContent = profileDescriptionInput.value;
  // console.log(inputValues);
  userInfo.setUserInfo(inputValues.title, inputValues.description);
  closePopup(profileEditModal);
}

function handleCardAddSubmit() {
  // const name = cardAddTitleInput.value;
  // const link = cardAddDescriptionInput.value;
  renderCard({ name, link }, cardListEl);
  cardAddForm.reset();
  closePopup(addModal);
}

/* listeners */

profileEditButton.addEventListener("click", () => {
  // profileTitleInput.value = profileTitle.textContent;
  // profileDescriptionInput.value = profileDescription.textContent;
  editCardModal.open();
});

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);
//cardAddForm.addEventListener("submit", handleCardAddSubmit);

cardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardModal.open();
});

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardListEl);
// });

// function handleEscape(e) {
//   if (e.key === "Escape") {
//     const modal = document.querySelector(".modal_opened");
//     closePopup(modal);
//   }
// }

const editFormValidator = new FormValidator(config, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, cardAddForm);
addFormValidator.enableValidation();
