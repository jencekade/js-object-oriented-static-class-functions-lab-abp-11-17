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

/*so what this is asking is that giving Find(number),
we want to get the numbered item inside the Array
and not to find something inside that matches the ID
  static Find(id) {
    return this.All().find(function(ask) {
      return ask.id == id;
    });
  }*/
  static Find(id){
    return this.All()[id - 1];
  }

}
Question._All = [];
