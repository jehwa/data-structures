var BinarySearchTree = function(value) {
  var newBinary = {};
  newBinary.value = value;
  newBinary.left = null;
  newBinary.right = null;

  _.extend(newBinary, binaryMethods);

  return newBinary;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {

  if (!this.left && this.value > value) {
    this.left = new BinarySearchTree(value);
  }
  if (this.left && this.value > value) {
    // console.log(this.left);
    return this.left.insert(value);
  }
  if (!this.right && this.value < value) {
    this.right = new BinarySearchTree(value);
  }
  if (this.right && this.value < value) {
    return this.right.insert(value);
  }

};

binaryMethods.contains = function(val) {

  if (this.value === val) {
    return true;
  }
  if (this.value > val && this.left) {
    return this.left.contains(val);
  }
  if (this.value < val && this.right) {
    return this.right.contains(val);
  }

  return false;
};

binaryMethods.depthFirstLog = function(cb) {

  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  // var findAll = function(node) {
  //   if (node.value) {
  //     cb(node.value);
  //   }
  //   if (node.left) {
  //     findAll(node.left);
  //   }
  //   if (node.right) {
  //     findAll(node.right);
  //   }
  // };
  // findAll(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n));
 contain: O(log(n));
 depthFirstLog: O(n);
 */
