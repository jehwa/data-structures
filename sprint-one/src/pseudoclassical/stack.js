var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
  this.deleted;
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index ++;
},

Stack.prototype.pop = function() {
  if(this.index > 0) {
    this.index --;
    this.deleted = this.storage[this.index];
    delete this.storage[this.index];
    return this.deleted;
  }
},

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;

};
