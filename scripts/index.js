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
/* 
declarations

*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddButton = document.querySelector(".profile__add-button");
const profileAddModal = document.querySelector("#profile-add-card");
const profileEditCloseButton = document.querySelector("#modal-close");
const profileAddCloseButton = document.querySelector("#modal-add-close");
const profileEditSaveButton = document.querySelector("#edit-save-button");
const profileAddSaveButton = document.querySelector("#add-save-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// /* functions */

function closePopup(modal) {
  modal.classList.remove("modal__opened");
}
function openPopup(modal) {
  modal.classList.add("modal__opened");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".cards__image");
  const cardTitleEl = cardElement.querySelector(".cards__title");
  const cardImageAlt = cardElement.querySelector(".cards__title");

  cardElement
    .querySelector(".cards__like-button")
    .addEventListener("click", (event) => {
      event.target.classList.toggle("cards__like-button_active");
    });
  const cardDeleteButtons = document.querySelectorAll("cards__delete-button");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageAlt.alt = cardData.name;

  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = profileTitleInput.value;
  const link = profileDescriptionInput.value;
  closePopup(profileAddModal);
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
profileAddCloseButton.addEventListener("click", () => {
  closePopup(profileAddModal);
});
profileEditSaveButton.addEventListener("submit", handleProfileEditSubmit);
profileAddSaveButton.addEventListener("submit", handleProfileAddSubmit);
profileAddButton.addEventListener("click", () => {
  openPopup(profileAddModal);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
