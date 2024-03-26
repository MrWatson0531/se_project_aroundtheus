export default class Api {
    constructor({baseUrl, authToken}) {
        this._baseUrl = baseUrl;
        this._authToken = authToken;
    }

    getCardList() {
        return fetch("${this._baseUrl}/cards", {
            headers: {
               authorization: this._authToken
          }
})
    .then(res =>  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch((err) => {
        console.error(err); // log the error to the console
      })
}}