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
const cardDeleteButton = document.querySelector(".cards__delete-button");
const deleteModal = document.querySelector("#card-delete-modal");
const profileEditForm = profileEditModal.querySelector("#edit-modal-form");
const nameInput = document.querySelector("#profile-title-input");
const jobInput = document.querySelector("#profile-description-input");
const cardAddForm = addModal.querySelector("#add-modal-form");
const cardDeleteForm = deleteModal.querySelector("#delete-modal-form");
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
  renderer: renderCard,
  cssSelector: ".cards__list",
});
itemSection.renderItems();

const addCardModal = new PopupWithForm(
  "#profile-add-card",
  handleCardAddSubmit
);
addCardModal.setEventListeners();

const deleteCardModal = new PopupWithForm(
  "#card-delete-modal",
  handleCardDelete
);
deleteCardModal.setEventListeners();

function handleImageClick(name, link) {
  previewImageModal.open(name, link);
}

function createCard(cardData) {
  return new Card(
    cardData,
    cardTemplateSelector,
    handleImageClick,
    handleDeleteClick
  ).getView();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  itemSection.addItem(cardElement);
}

function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues.title, inputValues.description);
}

function handleCardAddSubmit(data) {
  console.log(data);
  renderCard(data, cardListEl);
  cardAddForm.reset();
}

function handleDeleteClick(cardSelector) { // ID will come from the CARD
  console.log(cardSelector);
  cardDeleteForm.open(cardSelector);
}

/* listeners */

profileEditButton.addEventListener("click", () => {
  const useData = userInfo.getUserInfo();
  nameInput.value = useData.name;
  jobInput.value = useData.job;
  editCardModal.open();
});

cardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardModal.open();
});

// cardDeleteButton.addEventListener("click", () => {
//   cardDeleteForm.open();
// });

const editFormValidator = new FormValidator(config, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, cardAddForm);
addFormValidator.enableValidation();
