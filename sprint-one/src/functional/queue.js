var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var deleted;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    for(let i = Object.keys(storage).length; i > 0; i --) {
      storage[i] = storage[i-1]
    }
    storage["0"] = value;
  };

  someInstance.dequeue = function() {
    if(Object.keys(storage).length >= 0) {
      deleted = storage[Object.keys(storage).length-1];
      delete storage[Object.keys(storage).length-1];
      return deleted;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
