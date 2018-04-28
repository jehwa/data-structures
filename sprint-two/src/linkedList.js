var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list.storage = {};

  list.addToTail = function(value) {
    var newVal = new Node(value);
    // storage[newValvalue] = value;
    if (this.tail) {
      this.tail.next = newVal;
    }
    if (this.head === null) {
      this.head = newVal;
    }
    this.tail = newVal;
  };

  list.removeHead = function() {
    var previousHead = list.head;
    if (list.head) {
      list.head = list.head.next;
    }
    return previousHead.value;
  };

  list.contains = function(target) {
    var output = false;
    // debugger;
    var findTarget = function(head) {
      if (head.value === target) {
        output = true;
      }
      if (head.next) {
        findTarget(head.next);
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
