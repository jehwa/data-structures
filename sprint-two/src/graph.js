

// Instantiate a new graph
var Graph = function() {
  // this.edge = [];
  // this.value;
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edge = [];
  // debugger;
  //   console.log(this.nodes);
  // var nodeContainer = this.nodes;
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  // debugger;
  if (!this.nodes.length) {
    return false;
  }
  for (let i = 0; i < this.nodes.length; i ++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // debugger;
  for (let i = 0; i < this.nodes.length; i ++) {
    // console.log(this.nodes[i].value);
    // console.log(this.nodes);
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
      // console.log(this.nodes);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasBothEdges = false;
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  }

  // debugger;
  _.each(this.nodes, function(eachNode) {
    if (eachNode.value === fromNode && eachNode.edge.includes(toNode)) {
      hasBothEdges = true;
    }
    if (hasBothEdges) {
      _.each(this.nodes, function(eachNode) {
        if (eachNode.value === toNode && eachNode.edge.includes(fromNode)) {
          return true;
        }
      });
    } else {
      return false;
    }
  });

  return hasBothEdges;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  // debugger;
  // console.log(this.contains(fromNode));
  if (this.contains(fromNode) && this.contains(toNode)) {
    // debugger;
    _.each(this.nodes, function(eachNode) {
      // console.log(eachNode);
      if (eachNode.value === fromNode) {
        eachNode.edge.push(toNode);
      }
      if (eachNode.value === toNode) {
        eachNode.edge.push(fromNode);
      }
    });
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    _.each(this.nodes, function(eachNode) {
      if (eachNode.value === fromNode && eachNode.edge.includes(toNode)) {
        for (let i = 0; i < eachNode.edge; i ++) {
          if (eachNode.edge[i] === toNode) {
            eachNode.edge.splice(i, 1);
          }
        }
      }
    });

    _.each(this.nodes, function(eachNode) {
      if (eachNode.value === toNode && eachNode.edge.includes(fromNode)) {
        for (let i = 0; i < eachNode.edge; i ++) {
          if (eachNode.edge[i] === fromNode) {
            eachNode.edge.splice(i, 1);
          }
        }
      }
    });

  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  if (this.nodes) {
    _.each(this.nodes, function(eachNode) {
      cb(eachNode.value);
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
