export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  setUserInfo(name, job) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
debugger
  }

  // return the current values of the profile text elements
  getUserInfo() {
    const obj = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };

    return obj;
  }
}
