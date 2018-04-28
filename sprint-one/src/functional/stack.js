var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var deleted;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++
  };

  someInstance.pop = function() {
    // console.log(storage[index-1]);
    if(index >= 0) {
      index --;
      deleted = storage[index];
      delete storage[index];
      return deleted;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

// storage = {0: "a", 1: "b"}
