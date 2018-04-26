var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  someInstance.deleted;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index ++;
};

stackMethods.pop = function() {
  if(this.index > 0) {
    this.index --;
    this.deleted = this.storage[this.index];
    delete this.storage[this.index];
    return this.deleted;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
