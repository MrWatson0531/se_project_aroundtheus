import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

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

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};
//  const card = new Card(cardData).getView();
// wrapper.prepend(card);
//}

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

const cardTemplateSelector = "#card-template";

// /* functions */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function handleImageClick(name, link) {
  const modalImage = previewImageEl;
  const modalText = imageText;
  modalImage.src = link;
  modalImage.alt = name;
  modalImage.textContent = name;
  modalText.textContent = name;

  // set src of modalImage

  // get title element and set text
  openPopup(imageModal);
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

function handleCardAddSubmit(e) {
  e.preventDefault();
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
  openPopup(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);

cardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  openPopup(addModal);
});

initialCards.forEach((cardData) => {
  // const cardElement = getCardElement(cardData);
  // console.log(0);
  // createCard(cardData);
  // cardListEl.append(cardElement);
  renderCard(cardData, cardListEl);
});

const handleClose = (e) => {
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
    handleClose(e);
  });
});
const editFormValidator = new FormValidator(config, profileEditForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, cardAddForm);
addFormValidator.enableValidation();
console.log("hello world");

module: {
  rules: [
    {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: "/node_modules/"
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader"
        },
      ],
    },
    {
      // add the rule for processing files
      test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
      type: "asset/resource"
    },
  ]
}