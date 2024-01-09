!function(){"use strict";class e{constructor(e,t,o){this._name=e.name,this._link=e.link,this._cardSelector=t,this._handleImageClick=o}_setEventListeners(){this._cardElement.querySelector(".cards__like-button").addEventListener("click",(e=>{e.target.classList.toggle("cards__like-button_active"),console.log("liked")})),this._cardElement.querySelector(".cards__delete-button").addEventListener("click",(e=>{e.target.closest(".card").remove()})),this._cardElement.querySelector(".cards__image").addEventListener("click",(()=>{this._handleImageClick(this._name,this._link)}))}getView(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._setEventListeners(),this._cardElement.querySelector(".cards__image").src=this._link,this._cardElement.querySelector(".cards__image").alt=this._name,this._cardElement.querySelector(".cards__title").textContent=this._name,this._cardElement}}class t{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t}_showInputError(e,t){const o=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),o.textContent=e.validationMessage,o.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_toggleButtonState(e,t,o){if(this._hasInvalidInput(e))return t.classList.add(o),void(t.disabled=!0);t.classList.remove(o),t.disabled=!1}_hasInvalidInput(e){return!e.every((e=>e.validity.valid))}_checkInputValidity(e){if(!e.validity.valid)return this._showInputError(e);this._hideInputError(e)}_setEventListeners(){this._inputEls=[...this._form.querySelectorAll(this._inputSelector)],this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputEls.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState(this._inputEls,this._submitButton,this._inactiveButtonClass)}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}resetValidation(){this._toggleButtonState(this._inputEls,this._submitButton,this._inactiveButtonClass),this._inputEls.forEach((e=>{this._hideInputError(e)}))}}const o={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:".modal__input_type_error",errorClass:"modal__error_visible"},r=document.querySelector("#profile-edit-button"),n=document.querySelector("#profile-edit-modal"),s=document.querySelector(".profile__add-button"),i=document.querySelector("#profile-add-card"),a=document.querySelector("#profile-image-card"),l=document.querySelector(".modal__image-text"),c=document.querySelector(".modal__image"),u=(document.querySelector("#modal-image-close"),document.querySelector("#modal-close"),document.querySelector("#modal-add-close"),document.querySelector("#edit-save-button"),document.querySelector("#add-save-button"),document.querySelector(".profile__title")),d=document.querySelector(".profile__description"),m=document.querySelector("#profile-title-input"),_=document.querySelector("#profile-add-title-input"),p=document.querySelector("#profile-add-description-input"),h=document.querySelector("#profile-description-input"),v=n.querySelector("#edit-modal-form"),S=i.querySelector("#add-modal-form"),y=document.querySelector(".cards__list");function f(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",L)}function E(e){e.classList.add("modal_opened"),document.addEventListener("keydown",L)}function g(e,t){const o=c,r=l;o.src=t,o.alt=e,o.textContent=e,r.textContent=e,E(a)}function q(t,o){const r=function(t){return new e(t,"#card-template",g).getView()}(t);o.prepend(r)}function L(e){"Escape"===e.key&&f(document.querySelector(".modal_opened"))}r.addEventListener("click",(()=>{m.value=u.textContent,h.value=d.textContent,E(n)})),v.addEventListener("submit",(function(e){e.preventDefault(),u.textContent=m.value,d.textContent=h.value,f(n)})),S.addEventListener("submit",(function(e){e.preventDefault(),q({name:_.value,link:p.value},y),f(i),e.target.reset()})),s.addEventListener("click",(()=>{k.resetValidation(),E(i)})),[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}].forEach((e=>{q(e,y)})),document.querySelectorAll(".modal").forEach((e=>{e.addEventListener("mousedown",(e=>{(e=>{(e.target.classList.contains("modal")||e.target.classList.contains("modal__close"))&&f(e.currentTarget)})(e)}))})),new t(o,v).enableValidation();const k=new t(o,S);k.enableValidation(),console.log("hello world"),MiniCssExtractPlugin.loader}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQWUsTUFBTUEsRUFDbkJDLFdBQUFBLENBQVlDLEVBQU1DLEVBQWNDLEdBQzlCQyxLQUFLQyxNQUFRSixFQUFLSyxLQUNsQkYsS0FBS0csTUFBUU4sRUFBS08sS0FDbEJKLEtBQUtLLGNBQWdCUCxFQUNyQkUsS0FBS00sa0JBQW9CUCxDQUMzQixDQUVBUSxrQkFBQUEsR0FFRVAsS0FBS1EsYUFDRkMsY0FBYyx1QkFDZEMsaUJBQWlCLFNBQVVDLElBQzFCQSxFQUFNQyxPQUFPQyxVQUFVQyxPQUFPLDZCQUM5QkMsUUFBUUMsSUFBSSxRQUFRLElBSXhCaEIsS0FBS1EsYUFDRkMsY0FBYyx5QkFDZEMsaUJBQWlCLFNBQVVDLElBQzFCQSxFQUFNQyxPQUFPSyxRQUFRLFNBQVNDLFFBQVEsSUFTeEJsQixLQUFLUSxhQUFhQyxjQUFjLGlCQUV4Q0MsaUJBQWlCLFNBQVMsS0FDbENWLEtBQUtNLGtCQUFrQk4sS0FBS0MsTUFBT0QsS0FBS0csTUFBTSxHQUVsRCxDQUVBZ0IsT0FBQUEsR0FjRSxPQVpBbkIsS0FBS1EsYUFBZVksU0FDakJYLGNBQWNULEtBQUtLLGVBQ25CZ0IsUUFBUVosY0FBYyxTQUN0QmEsV0FBVSxHQUVidEIsS0FBS08scUJBRUxQLEtBQUtRLGFBQWFDLGNBQWMsaUJBQWlCYyxJQUFNdkIsS0FBS0csTUFDNURILEtBQUtRLGFBQWFDLGNBQWMsaUJBQWlCZSxJQUFNeEIsS0FBS0MsTUFDNURELEtBQUtRLGFBQWFDLGNBQWMsaUJBQWlCZ0IsWUFBY3pCLEtBQUtDLE1BRzdERCxLQUFLUSxZQUNkLEVDcERhLE1BQU1rQixFQUNuQjlCLFdBQUFBLENBQVkrQixFQUFVQyxHQUNwQjVCLEtBQUs2QixlQUFpQkYsRUFBU0csY0FDL0I5QixLQUFLK0Isc0JBQXdCSixFQUFTSyxxQkFDdENoQyxLQUFLaUMscUJBQXVCTixFQUFTTyxvQkFDckNsQyxLQUFLbUMsaUJBQW1CUixFQUFTUyxnQkFDakNwQyxLQUFLcUMsWUFBY1YsRUFBU1csV0FFNUJ0QyxLQUFLdUMsTUFBUVgsQ0FDZixDQUVBWSxlQUFBQSxDQUFnQkMsRUFBU0MsR0FDdkIsTUFBTUMsRUFBaUIzQyxLQUFLdUMsTUFBTTlCLGNBQWUsSUFBR2dDLEVBQVFHLFlBQzVESCxFQUFRNUIsVUFBVWdDLElBQUk3QyxLQUFLbUMsa0JBQzNCUSxFQUFlbEIsWUFBY2dCLEVBQVFDLGtCQUNyQ0MsRUFBZTlCLFVBQVVnQyxJQUFJN0MsS0FBS3FDLFlBQ3BDLENBRUFTLGVBQUFBLENBQWdCTCxHQUNkLE1BQU1FLEVBQWlCM0MsS0FBS3VDLE1BQU05QixjQUFlLElBQUdnQyxFQUFRRyxZQUM1REgsRUFBUTVCLFVBQVVLLE9BQU9sQixLQUFLbUMsa0JBQzlCUSxFQUFlbEIsWUFBYyxHQUM3QmtCLEVBQWU5QixVQUFVSyxPQUFPbEIsS0FBS3FDLFlBQ3ZDLENBRUFVLGtCQUFBQSxDQUFtQkMsRUFBVUMsRUFBY2YsR0FDekMsR0FBSWxDLEtBQUtrRCxpQkFBaUJGLEdBR3hCLE9BRkFDLEVBQWFwQyxVQUFVZ0MsSUFBSVgsUUFDM0JlLEVBQWFFLFVBQVcsR0FHMUJGLEVBQWFwQyxVQUFVSyxPQUFPZ0IsR0FDOUJlLEVBQWFFLFVBQVcsQ0FDMUIsQ0FFQUQsZ0JBQUFBLENBQWlCRSxHQUNmLE9BQVFBLEVBQVVDLE9BQU9aLEdBQVlBLEVBQVFhLFNBQVNDLE9BQ3hELENBRUFDLG1CQUFBQSxDQUFvQmYsR0FDbEIsSUFBS0EsRUFBUWEsU0FBU0MsTUFDcEIsT0FBT3ZELEtBQUt3QyxnQkFBZ0JDLEdBRTlCekMsS0FBSzhDLGdCQUFnQkwsRUFDdkIsQ0FFQWxDLGtCQUFBQSxHQUNFUCxLQUFLeUQsVUFBWSxJQUFJekQsS0FBS3VDLE1BQU1tQixpQkFBaUIxRCxLQUFLNkIsaUJBQ3REN0IsS0FBSzJELGNBQWdCM0QsS0FBS3VDLE1BQU05QixjQUFjVCxLQUFLK0IsdUJBRW5EL0IsS0FBS3lELFVBQVVHLFNBQVNuQixJQUN0QkEsRUFBUS9CLGlCQUFpQixTQUFVbUQsSUFDakM3RCxLQUFLd0Qsb0JBQW9CZixHQUN6QnpDLEtBQUsrQyxtQkFDSC9DLEtBQUt5RCxVQUNMekQsS0FBSzJELGNBQ0wzRCxLQUFLaUMscUJBQ04sR0FDRCxHQUVOLENBRUE2QixnQkFBQUEsR0FDRTlELEtBQUt1QyxNQUFNN0IsaUJBQWlCLFVBQVdtRCxJQUNyQ0EsRUFBRUUsZ0JBQWdCLElBRXBCL0QsS0FBS08sb0JBQ1AsQ0FFQXlELGVBQUFBLEdBQ0VoRSxLQUFLK0MsbUJBQ0gvQyxLQUFLeUQsVUFDTHpELEtBQUsyRCxjQUNMM0QsS0FBS2lDLHNCQUVQakMsS0FBS3lELFVBQVVHLFNBQVNLLElBQ3RCakUsS0FBSzhDLGdCQUFnQm1CLEVBQUcsR0FFNUIsRUMxRUYsTUEyQk1DLEVBQVMsQ0FDYkMsYUFBYyxlQUNkckMsY0FBZSxnQkFDZkUscUJBQXNCLGlCQUN0QkUsb0JBQXFCLHlCQUNyQkUsZ0JBQWlCLDJCQUNqQkUsV0FBWSx3QkFnQlI4QixFQUFvQmhELFNBQVNYLGNBQWMsd0JBQzNDNEQsRUFBbUJqRCxTQUFTWCxjQUFjLHVCQUMxQzZELEVBQWdCbEQsU0FBU1gsY0FBYyx3QkFDdkM4RCxFQUFXbkQsU0FBU1gsY0FBYyxxQkFDbEMrRCxFQUFhcEQsU0FBU1gsY0FBYyx1QkFDcENnRSxFQUFZckQsU0FBU1gsY0FBYyxzQkFDbkNpRSxFQUFpQnRELFNBQVNYLGNBQWMsaUJBTXhDa0UsR0FMdUJ2RCxTQUFTWCxjQUFjLHNCQUNyQlcsU0FBU1gsY0FBYyxnQkFDM0JXLFNBQVNYLGNBQWMsb0JBQ3BCVyxTQUFTWCxjQUFjLHFCQUMzQlcsU0FBU1gsY0FBYyxvQkFDNUJXLFNBQVNYLGNBQWMsb0JBQ3RDbUUsRUFBcUJ4RCxTQUFTWCxjQUFjLHlCQUM1Q29FLEVBQW9CekQsU0FBU1gsY0FBYyx3QkFDM0NxRSxFQUFvQjFELFNBQVNYLGNBQWMsNEJBQzNDc0UsRUFBMEIzRCxTQUFTWCxjQUN2QyxrQ0FFSXVFLEVBQTBCNUQsU0FBU1gsY0FDdkMsOEJBRUl3RSxFQUFrQlosRUFBaUI1RCxjQUFjLG9CQUNqRHlFLEVBQWNYLEVBQVM5RCxjQUFjLG1CQUNyQzBFLEVBQWEvRCxTQUFTWCxjQUFjLGdCQU0xQyxTQUFTMkUsRUFBV0MsR0FDbEJBLEVBQU14RSxVQUFVSyxPQUFPLGdCQUN2QkUsU0FBU2tFLG9CQUFvQixVQUFXQyxFQUMxQyxDQUVBLFNBQVNDLEVBQVVILEdBQ2pCQSxFQUFNeEUsVUFBVWdDLElBQUksZ0JBQ3BCekIsU0FBU1YsaUJBQWlCLFVBQVc2RSxFQUN2QyxDQUVBLFNBQVN4RixFQUFpQkcsRUFBTUUsR0FDOUIsTUFBTXFGLEVBQWFmLEVBQ2JnQixFQUFZakIsRUFDbEJnQixFQUFXbEUsSUFBTW5CLEVBQ2pCcUYsRUFBV2pFLElBQU10QixFQUNqQnVGLEVBQVdoRSxZQUFjdkIsRUFDekJ3RixFQUFVakUsWUFBY3ZCLEVBS3hCc0YsRUFBVWhCLEVBQ1osQ0FNQSxTQUFTbUIsRUFBV0MsRUFBVUMsR0FDNUIsTUFBTUMsRUFMUixTQUFvQkYsR0FDbEIsT0FBTyxJQUFJakcsRUFBS2lHLEVBN0JXLGlCQTZCcUI3RixHQUFrQm9CLFNBQ3BFLENBR3NCNEUsQ0FBV0gsR0FDL0JDLEVBQWFHLFFBQVFGLEVBQ3ZCLENBbURBLFNBQVNQLEVBQWExQixHQUNOLFdBQVZBLEVBQUVvQyxLQUVKYixFQURjaEUsU0FBU1gsY0FBYyxpQkFHekMsQ0FwQ0EyRCxFQUFrQjFELGlCQUFpQixTQUFTLEtBQzFDbUUsRUFBa0JxQixNQUFRdkIsRUFBYWxELFlBQ3ZDdUQsRUFBd0JrQixNQUFRdEIsRUFBbUJuRCxZQUNuRCtELEVBQVVuQixFQUFpQixJQUc3QlksRUFBZ0J2RSxpQkFBaUIsVUF4QmpDLFNBQWlDeUYsR0FDL0JBLEVBQUlwQyxpQkFDSlksRUFBYWxELFlBQWNvRCxFQUFrQnFCLE1BQzdDdEIsRUFBbUJuRCxZQUFjdUQsRUFBd0JrQixNQUN6RGQsRUFBV2YsRUFDYixJQW9CQWEsRUFBWXhFLGlCQUFpQixVQWxCN0IsU0FBNkJtRCxHQUMzQkEsRUFBRUUsaUJBR0Y0QixFQUFXLENBQUV6RixLQUZBNEUsRUFBa0JvQixNQUVaOUYsS0FETjJFLEVBQXdCbUIsT0FDVmYsR0FDM0JDLEVBQVdiLEdBQ1hWLEVBQUVqRCxPQUFPd0YsT0FDWCxJQWFBOUIsRUFBYzVELGlCQUFpQixTQUFTLEtBQ3RDMkYsRUFBaUJyQyxrQkFDakJ3QixFQUFVakIsRUFBUyxJQTdJQSxDQUNuQixDQUNFckUsS0FBTSxrQkFDTkUsS0FBTSxzR0FFUixDQUNFRixLQUFNLGNBQ05FLEtBQU0seUdBRVIsQ0FDRUYsS0FBTSxpQkFDTkUsS0FBTSw0R0FFUixDQUNFRixLQUFNLFVBQ05FLEtBQU0scUdBRVIsQ0FDRUYsS0FBTSx3QkFDTkUsS0FBTSxxR0FFUixDQUNFRixLQUFNLGlCQUNORSxLQUFNLG1HQXlIR3dELFNBQVNnQyxJQUtwQkQsRUFBV0MsRUFBVVQsRUFBVyxJQW1CbkIvRCxTQUFTc0MsaUJBQWlCLFVBQ2xDRSxTQUFTeUIsSUFFZEEsRUFBTTNFLGlCQUFpQixhQUFjbUQsSUFuQmxCQSxNQUVqQkEsRUFBRWpELE9BQU9DLFVBQVV5RixTQUFTLFVBQzVCekMsRUFBRWpELE9BQU9DLFVBQVV5RixTQUFTLGtCQUU1QmxCLEVBQVd2QixFQUFFMEMsY0FDZixFQWNFQyxDQUFZM0MsRUFBRSxHQUNkLElBRXNCLElBQUluQyxFQUFjd0MsRUFBUWUsR0FDbENuQixtQkFFbEIsTUFBTXVDLEVBQW1CLElBQUkzRSxFQUFjd0MsRUFBUWdCLEdBQ25EbUIsRUFBaUJ2QyxtQkFDakIvQyxRQUFRQyxJQUFJLGVBWUp5RixxQkFBcUJDLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVJbWFnZUNsaWNrKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBoYW5kbGVJbWFnZUNsaWNrO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gXCIuY2FyZHNfX2xpa2UtYnV0dG9uXCJcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saWtlLWJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZHNfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxpa2VkXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBcIi5jYXJkc19fZGVsZXRlLWJ1dHRvblwiXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fZGVsZXRlLWJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmNhcmRcIikucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIFwiI3Byb2ZpbGUtaW1hZ2UtY2FyZFwiXHJcbiAgICAvL3RoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2ltYWdlXCIpLnNyYyA9XHJcbiAgICAvL3RoaXMubGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy90aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMpO1xyXG4gICAgLy99KTtcclxuXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19pbWFnZVwiKTtcclxuXHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayh0aGlzLl9uYW1lLCB0aGlzLl9saW5rKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmlldygpIHtcclxuICAgIC8vIGdldCBjYXJkIHZpZXdcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIC8vIHNldCBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19faW1hZ2VcIikuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBjYXJkXHJcbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcclxuXHJcbiAgICB0aGlzLl9mb3JtID0gZm9ybUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWwpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0RWxzLCBzdWJtaXRCdXR0b24sIGluYWN0aXZlQnV0dG9uQ2xhc3MpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoaW5wdXRFbHMpKSB7XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShpbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcclxuICAgIHJldHVybiAhaW5wdXRMaXN0LmV2ZXJ5KChpbnB1dEVsKSA9PiBpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKTtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xyXG4gICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWwpO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5faW5wdXRFbHMgPSBbLi4udGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcblxyXG4gICAgdGhpcy5faW5wdXRFbHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShcclxuICAgICAgICAgIHRoaXMuX2lucHV0RWxzLFxyXG4gICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLFxyXG4gICAgICAgICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKFxyXG4gICAgICB0aGlzLl9pbnB1dEVscyxcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLFxyXG4gICAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzXHJcbiAgICApO1xyXG4gICAgdGhpcy5faW5wdXRFbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZWwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcIi5tb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmREYXRhID0ge1xyXG4gIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG59O1xyXG4vLyAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhKS5nZXRWaWV3KCk7XHJcbi8vIHdyYXBwZXIucHJlcGVuZChjYXJkKTtcclxuLy99XHJcblxyXG4vKlxyXG5cclxuZGVjbGFyYXRpb25zXHJcblxyXG4qL1xyXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgcHJvZmlsZUVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LW1vZGFsXCIpO1xyXG5jb25zdCBjYXJkQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xyXG5jb25zdCBhZGRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1hZGQtY2FyZFwiKTtcclxuY29uc3QgaW1hZ2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1pbWFnZS1jYXJkXCIpO1xyXG5jb25zdCBpbWFnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZS10ZXh0XCIpO1xyXG5jb25zdCBwcmV2aWV3SW1hZ2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xyXG5jb25zdCBjYXJkSW1hZ2VDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtaW1hZ2UtY2xvc2VcIik7XHJcbmNvbnN0IHByb2ZpbGVFZGl0Q2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWNsb3NlXCIpO1xyXG5jb25zdCBjYXJkQWRkQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWFkZC1jbG9zZVwiKTtcclxuY29uc3QgcHJvZmlsZUVkaXRTYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXNhdmUtYnV0dG9uXCIpO1xyXG5jb25zdCBjYXJkQWRkU2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXNhdmUtYnV0dG9uXCIpO1xyXG5jb25zdCBwcm9maWxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xyXG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xyXG5jb25zdCBwcm9maWxlVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS10aXRsZS1pbnB1dFwiKTtcclxuY29uc3QgY2FyZEFkZFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtYWRkLXRpdGxlLWlucHV0XCIpO1xyXG5jb25zdCBjYXJkQWRkRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIjcHJvZmlsZS1hZGQtZGVzY3JpcHRpb24taW5wdXRcIlxyXG4pO1xyXG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXHJcbik7XHJcbmNvbnN0IHByb2ZpbGVFZGl0Rm9ybSA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIiNlZGl0LW1vZGFsLWZvcm1cIik7XHJcbmNvbnN0IGNhcmRBZGRGb3JtID0gYWRkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtbW9kYWwtZm9ybVwiKTtcclxuY29uc3QgY2FyZExpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpc3RcIik7XHJcblxyXG5jb25zdCBjYXJkVGVtcGxhdGVTZWxlY3RvciA9IFwiI2NhcmQtdGVtcGxhdGVcIjtcclxuXHJcbi8vIC8qIGZ1bmN0aW9ucyAqL1xyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3B1cChtb2RhbCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjYXBlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblBvcHVwKG1vZGFsKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbWFnZUNsaWNrKG5hbWUsIGxpbmspIHtcclxuICBjb25zdCBtb2RhbEltYWdlID0gcHJldmlld0ltYWdlRWw7XHJcbiAgY29uc3QgbW9kYWxUZXh0ID0gaW1hZ2VUZXh0O1xyXG4gIG1vZGFsSW1hZ2Uuc3JjID0gbGluaztcclxuICBtb2RhbEltYWdlLmFsdCA9IG5hbWU7XHJcbiAgbW9kYWxJbWFnZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgLy8gc2V0IHNyYyBvZiBtb2RhbEltYWdlXHJcblxyXG4gIC8vIGdldCB0aXRsZSBlbGVtZW50IGFuZCBzZXQgdGV4dFxyXG4gIG9wZW5Qb3B1cChpbWFnZU1vZGFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChjYXJkRGF0YSkge1xyXG4gIHJldHVybiBuZXcgQ2FyZChjYXJkRGF0YSwgY2FyZFRlbXBsYXRlU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spLmdldFZpZXcoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChjYXJkRGF0YSwgY2FyZHNXcmFwcGVyKSB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcclxuICBjYXJkc1dyYXBwZXIucHJlcGVuZChjYXJkRWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHByb2ZpbGVUaXRsZS50ZXh0Q29udGVudCA9IHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlO1xyXG4gIHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gIGNsb3NlUG9wdXAocHJvZmlsZUVkaXRNb2RhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhcmRBZGRTdWJtaXQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBuYW1lID0gY2FyZEFkZFRpdGxlSW5wdXQudmFsdWU7XHJcbiAgY29uc3QgbGluayA9IGNhcmRBZGREZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gIHJlbmRlckNhcmQoeyBuYW1lLCBsaW5rIH0sIGNhcmRMaXN0RWwpO1xyXG4gIGNsb3NlUG9wdXAoYWRkTW9kYWwpO1xyXG4gIGUudGFyZ2V0LnJlc2V0KCk7XHJcbn1cclxuXHJcbi8qIGxpc3RlbmVycyAqL1xyXG5cclxucHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwcm9maWxlVGl0bGVJbnB1dC52YWx1ZSA9IHByb2ZpbGVUaXRsZS50ZXh0Q29udGVudDtcclxuICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcclxuICBvcGVuUG9wdXAocHJvZmlsZUVkaXRNb2RhbCk7XHJcbn0pO1xyXG5cclxucHJvZmlsZUVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXQpO1xyXG5jYXJkQWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUNhcmRBZGRTdWJtaXQpO1xyXG5cclxuY2FyZEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgb3BlblBvcHVwKGFkZE1vZGFsKTtcclxufSk7XHJcblxyXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcclxuICAvLyBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGNhcmREYXRhKTtcclxuICAvLyBjb25zb2xlLmxvZygwKTtcclxuICAvLyBjcmVhdGVDYXJkKGNhcmREYXRhKTtcclxuICAvLyBjYXJkTGlzdEVsLmFwcGVuZChjYXJkRWxlbWVudCk7XHJcbiAgcmVuZGVyQ2FyZChjYXJkRGF0YSwgY2FyZExpc3RFbCk7XHJcbn0pO1xyXG5cclxuY29uc3QgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gIGlmIChcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpIHx8XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2VcIilcclxuICApIHtcclxuICAgIGNsb3NlUG9wdXAoZS5jdXJyZW50VGFyZ2V0KTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFc2NhcGUoZSkge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKTtcclxuICAgIGNsb3NlUG9wdXAobW9kYWwpO1xyXG4gIH1cclxufVxyXG4vLyBmaW5kIGFsbCBwb3B1cHNcclxuY29uc3QgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKTtcclxucG9wdXBzLmZvckVhY2goKG1vZGFsKSA9PiB7XHJcbiAgLy8gYWRkIG1vdXNlZG93biBldmVudCBsaXN0ZW5lclxyXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgIGhhbmRsZUNsb3NlKGUpO1xyXG4gIH0pO1xyXG59KTtcclxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHByb2ZpbGVFZGl0Rm9ybSk7XHJcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGNhcmRBZGRGb3JtKTtcclxuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbmNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XHJcblxyXG5tb2R1bGU6IHtcclxuICBydWxlczogW1xyXG4gICAge1xyXG4gICAgICB0ZXN0OiAvXFwuanMkLyxcclxuICAgICAgbG9hZGVyOiBcImJhYmVsLWxvYWRlclwiLFxyXG4gICAgICBleGNsdWRlOiBcIi9ub2RlX21vZHVsZXMvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRlc3Q6IC9cXC5jc3MkLyxcclxuICAgICAgdXNlOiBbXHJcbiAgICAgICAgTWluaUNzc0V4dHJhY3RQbHVnaW4ubG9hZGVyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxvYWRlcjogXCJjc3MtbG9hZGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgLy8gYWRkIHRoZSBydWxlIGZvciBwcm9jZXNzaW5nIGZpbGVzXHJcbiAgICAgIHRlc3Q6IC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWZ8d29mZigyKT98ZW90fHR0ZnxvdGYpJC8sXHJcbiAgICAgIHR5cGU6IFwiYXNzZXQvcmVzb3VyY2VcIlxyXG4gICAgfSxcclxuICBdXHJcbn0iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJ0aGlzIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2NhcmRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZXN0IiwicmVtb3ZlIiwiZ2V0VmlldyIsImRvY3VtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWwiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImVycm9yTWVzc2FnZUVsIiwiaWQiLCJhZGQiLCJfaGlkZUlucHV0RXJyb3IiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dEVscyIsInN1Ym1pdEJ1dHRvbiIsIl9oYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlZCIsImlucHV0TGlzdCIsImV2ZXJ5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfaW5wdXRFbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3N1Ym1pdEJ1dHRvbiIsImZvckVhY2giLCJlIiwiZW5hYmxlVmFsaWRhdGlvbiIsInByZXZlbnREZWZhdWx0IiwicmVzZXRWYWxpZGF0aW9uIiwiZWwiLCJjb25maWciLCJmb3JtU2VsZWN0b3IiLCJwcm9maWxlRWRpdEJ1dHRvbiIsInByb2ZpbGVFZGl0TW9kYWwiLCJjYXJkQWRkQnV0dG9uIiwiYWRkTW9kYWwiLCJpbWFnZU1vZGFsIiwiaW1hZ2VUZXh0IiwicHJldmlld0ltYWdlRWwiLCJwcm9maWxlVGl0bGUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJwcm9maWxlVGl0bGVJbnB1dCIsImNhcmRBZGRUaXRsZUlucHV0IiwiY2FyZEFkZERlc2NyaXB0aW9uSW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsInByb2ZpbGVFZGl0Rm9ybSIsImNhcmRBZGRGb3JtIiwiY2FyZExpc3RFbCIsImNsb3NlUG9wdXAiLCJtb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVFc2NhcGUiLCJvcGVuUG9wdXAiLCJtb2RhbEltYWdlIiwibW9kYWxUZXh0IiwicmVuZGVyQ2FyZCIsImNhcmREYXRhIiwiY2FyZHNXcmFwcGVyIiwiY2FyZEVsZW1lbnQiLCJjcmVhdGVDYXJkIiwicHJlcGVuZCIsImtleSIsInZhbHVlIiwiZXZ0IiwicmVzZXQiLCJhZGRGb3JtVmFsaWRhdG9yIiwiY29udGFpbnMiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJNaW5pQ3NzRXh0cmFjdFBsdWdpbiIsImxvYWRlciJdLCJzb3VyY2VSb290IjoiIn0=