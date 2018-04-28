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
  var mother = this;
  // debugger;
  // console.log(new BinarySearchTree(value));
  var findChildren = function(child) {
    // console.log(child);
    if (mother.value > child.value && !mother.left) {
      mother.left = child;
      // console.log(mother.left);
    }
    if (mother.value > child.value && mother.left) {
      mother = mother.left;
      findChildren(child);
    }
    if (mother.value < child.value && !mother.right) {
      mother.right = child;
    }
    if (mother.value < child.value && mother.right) {
      mother = mother.right;
      findChildren(child);
    }
  };
  var newNode = new BinarySearchTree(value);
  findChildren(newNode);
};

binaryMethods.contains = function(val) {
  let output = false;
  // debugger;
  var findVal = function(node) {
    if (node && node.value === val) {
      // console.log(true);
      output = true;
    }
    if (node && node.value > val) {
      findVal(node.left);
    }
    if (node && node.value < val) {
      findVal(node.right);
    }

  };
  findVal(this);
  return output;
};

binaryMethods.depthFirstLog = function(fuc) {

  var findAll = function(node) {
    if (node.value) {
      fuc(node.value);
    }
    if (node.left) {
      findAll(node.left);
    }
    if (node.right) {
      findAll(node.right);
    }
  };
  findAll(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n));
 contain: O(log(n));
 depthFirstLog: O(n);
 */
