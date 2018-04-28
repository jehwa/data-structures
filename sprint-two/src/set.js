var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // debugger;
  this._storage.push(item);
  // console.log(this._storage);
};

setPrototype.contains = function(item) {
  let output = false;
  // debugger;
  if (this._storage.length) {
    _.each(this._storage, function(val) {
      if (val === item) {
        output = true;
      }
    });
  }
  return output;
};

setPrototype.remove = function(item) {
  if (this._storage) {
    for (let i = 0; i < this._storage.length; i ++) {
      if (this._storage[i] === item) {
        this._storage.splice(i, 1);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1);
 contain: O(n);
 remove: O(n);
 */
