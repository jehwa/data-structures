class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
    this.deleted;
  }
  push(value) {
    this.storage[this.index] = value;
    this.index ++;
  }

  pop() {
    if(this.index > 0) {
      this.index --;
      this.deleted = this.storage[this.index];
      delete this.storage[this.index];
      return this.deleted;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
