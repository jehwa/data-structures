var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (this.children) {
    this.children.push(new Tree(value));
  }

};

treeMethods.contains = function(target) {
  var output = false;

  if(this.value === target) {
    return true;
  }

  if(this.children.length) {
    _.each(this.children, function(child) {
      if(child.contains(target)) {
        output = true;
      }
    });
  }

  return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1);
 contains: O(n);
 */
