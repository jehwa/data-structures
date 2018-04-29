var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // list.storage = {};

  list.addToTail = function(value) {
    var newNode = new Node(value);
    var newVal = _.extend(newNode, this.contains);
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

  list.contains = function(target, currentNode) {
    var output = false;
    currentNode = currentNode || this.head;

    if (currentNode.value === target) {
      return true;
    }
    if (currentNode.next) {
      if (this.contains(target, currentNode.next)) {
        output = true;
      }
    }

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
 addToTail: O(1);
 removeHead: O(1);
 contains: O(n);
 */
