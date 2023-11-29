import Card from "./Card.js";

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

const cardData = {
  name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
}

const card = new Card(cardData);
/*

declarations

*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddButton = document.querySelector(".profile__add-button");
const addModal = document.querySelector("#profile-add-card");
const imageModal = document.querySelector("#profile-image-card");
const imageText = document.querySelector(".modal__image-text");
const previewImageEl = document.querySelector(".modal__image");
const cardImageCloseButton = document.querySelector("#modal-image-close");
const profileEditCloseButton = document.querySelector("#modal-close");
const cardAddCloseButton = document.querySelector("#modal-add-close");
const profileEditSaveButton = document.querySelector("#edit-save-button");
const cardAddSaveButton = document.querySelector("#add-save-button");
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
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = document.querySelector("#profile-title-input");
const cardUrlInput = document.querySelector("#profile-description-input");
const cardsWrap = document.querySelector("#card-template");
const allInputs = cardAddForm.querySelectorAll(".modal__input");

// /* functions */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".cards__image");
  const cardTitleEl = cardElement.querySelector(".cards__title");

  cardElement
    .querySelector(".cards__like-button")
    .addEventListener("click", (event) => {
      event.target.classList.toggle("cards__like-button_active");
    });

  cardElement
    .querySelector(".cards__delete-button")
    .addEventListener("click", (event) => {
      event.target.closest(".card").remove();
    });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = cardData.link;
    previewImageEl.alt = cardData.name;
    imageText.textContent = cardData.name;

    openPopup(imageModal);
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  return cardElement;
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleCardAddSubmit(e) {
  e.preventDefault();
  const name = cardAddTitleInput.value;
  const link = cardAddDescriptionInput.value;
  renderCard({ name, link });
  closePopup(addModal);
  e.target.reset();
}
/* listeners */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

cardAddCloseButton.addEventListener("click", () => {
  closePopup(addModal);
});
cardImageCloseButton.addEventListener("click", () => {
  closePopup(imageModal);
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

cardAddButton.addEventListener("click", () => {
  resetValidation(addModal);
  openPopup(addModal);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});

const handleCLose = (e) => {
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__close")
  ) {
    closePopup(e.currentTarget);
  }
};

function handleEscape(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}
// find all popups
const popups = document.querySelectorAll(".modal");
popups.forEach((modal) => {
  // add mousedown event listener
  modal.addEventListener("mousedown", (e) => {
    handleCLose(e);
  });
});
