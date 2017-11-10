'use strict';
class Question {
  constructor (question) {
    this.question = question;
    this.save();
    //Question._All.push(this);
  }

  save() {
    this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }

  static Find(id) {
    return this.All().find(function(id) {
      return Question._All == id;
    });
  }

}
Question._All = [];
