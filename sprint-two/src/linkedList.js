var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
   

  list.addToTail = function(value) {
    
    // debugger;
    var newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    // node.value = value;
     
  };

  list.removeHead = function() {
    var previousHead = this.head.value;
    if (this.head) {
      this.head = this.head.next;
    }
    return previousHead;
    
  };

  list.contains = function(target) {
    var output = false;
    var findTarget = function(nodes) {
      if (nodes.value === target) {
        output = true;
      }
      if (nodes.next) {
        findTarget(nodes.next);
      }
    };
    findTarget(this.head);
    
    return output;
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
