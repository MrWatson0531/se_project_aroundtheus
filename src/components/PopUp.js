export default class Popup {
    constructor({ popupSelector}) {
        this._popupElement = document.querySelector(popupSelector);
        console.log(this._popupElement);
        this._handleEscape = handleEscape;
    }
    
    open() {
        // open popup
        this._popupElement.classliist.add("modal_opened");
        document.addEventListener("keydown", this._handleEscape);
    }
    
    close() {
        //close popup
        
        document.removeEventListener("keydown", this._handleEscape);
        this._popupElement.classList.remove("modal_opened");
    }
    
    _handleEscClosed(e) {
        //listen for esc button
        if (e.key === "Escape"){
            this.close();
        }
    }
    
    setEventListeners() {
        //event listeners
        this._button.addEventListener("click", () =>{
            this._popupElement.classList.add("modal_opened");
        });
    }
}