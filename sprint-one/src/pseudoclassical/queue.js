var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.deleted;
};

Queue.prototype.enqueue = function(val) {
  for(let i = Object.keys(this.storage).length; i > 0; i --){
    this.storage[i] = this.storage[i-1];
  }
  this.storage["0"] = val;
},

Queue.prototype.dequeue = function() {
  if(Object.keys(this.storage).length >= 0) {
    this.deleted = this.storage[Object.keys(this.storage).length-1];
    delete this.storage[Object.keys(this.storage).length-1];
    return this.deleted;
  }
},

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
