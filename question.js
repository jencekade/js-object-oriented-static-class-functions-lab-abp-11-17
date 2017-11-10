'use strict';
class Question {
  constructor(content) {
    this.content = content;
    this.save();
  }

  save() {
    this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }

  static Find(id) {
    return this.All().find(function(ask) {
      return ask.id == id;
    });
  }

}
Question._All = [];
