'use strict';
class Question {
  constructor(content) {
    this.content = content;
    this.save();
    //Question._All.push(this);
  }

  save() {
    this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }

  static Find(ID) {
    return this.All().find(function(ask) {
      return ask.ID == ID;
    });
  }

}
Question._All = [];
