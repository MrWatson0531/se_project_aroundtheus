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
const profileImageModal = document.querySelector("#profile-image-card");
const profileImageText = document.querySelector(".modal__image-text");
const profileImageEl = document.querySelector(".modal__image");
const profileImageCloseButton = document.querySelector("#modal-image-close");
const profileEditCloseButton = document.querySelector("#modal-close");
const profileAddCloseButton = document.querySelector("#modal-add-close");
const profileEditSaveButton = document.querySelector("#edit-save-button");
const profileAddSaveButton = document.querySelector("#add-save-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileAddTitleInput = document.querySelector("#profile-add-title-input");
const profileAddDescriptionInput = document.querySelector(
  "#profile-add-description-input"
);
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector("#edit-modal-form");
const profileAddForm = profileAddModal.querySelector("#add-modal-form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = document.querySelector("#profile-title-input");
const cardUrlInput = document.querySelector("#profile-description-input");
const cardsWrap = document.querySelector("#card-template");
// /* functions */

function closePopup(modal) {
  modal.classList.remove("modal__opened");
}
function openPopup(modal) {
  modal.classList.add("modal__opened");
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
    profileImageEl.src = cardData.link;
    profileImageEl.alt = cardData.name;
    profileImageText.textContent = cardData.name;

    openPopup(profileImageModal);
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

function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = profileAddTitleInput.value;
  const link = profileAddDescriptionInput.value;
  renderCard({ name, link });
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
profileImageCloseButton.addEventListener("click", () => {
  closePopup(profileImageModal);
});
profileEditSaveButton.addEventListener("submit", handleProfileEditSubmit);
profileAddForm.addEventListener("submit", handleProfileAddSubmit);

profileAddButton.addEventListener("click", () => {
  openPopup(profileAddModal);
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
