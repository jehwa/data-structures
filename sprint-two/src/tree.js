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
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  var output = false;
  // debugger;
  var targetFinder = function(trees) {
    console.log(trees);
    if (trees.value === target) {
      output = true;
    }
    if (trees.children.length) {
      _.each(trees.children, function(child) {
        targetFinder(child);
      });
      
    }
  };
  targetFinder(this);
  return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
