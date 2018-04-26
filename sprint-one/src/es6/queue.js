class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.deleted;
  }
  enqueue(val) {
    for(let i = Object.keys(this.storage).length; i > 0; i --){
      this.storage[i] = this.storage[i-1];
    }
    this.storage["0"] = val;
  }

  dequeue() {
    if(Object.keys(this.storage).length >= 0) {
      this.deleted = this.storage[Object.keys(this.storage).length-1];
      delete this.storage[Object.keys(this.storage).length-1];
      return this.deleted;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
