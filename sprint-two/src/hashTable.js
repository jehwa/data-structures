

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //the outer array
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  var passed = false;
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }

  _.each(this._storage[index], function(ele) {
    if (ele[0] === k) {
      ele[1] = v;
      passed = true;
    }
  });

  if (!passed) {
    this._storage[index].push([k, v]);
  }

  console.log(this._storage);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  if (this._storage[index]) {
    // _.each(this._storage[index], function(arr) {
    //   if(arr[0] === k) {
    //     console.log(arr[1]);
    //     return arr[1];
    //   }
    // })
    for (let i = 0; i < this._storage[index].length; i ++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var targetArr = this._storage[index];

  for (let i = 0; i < targetArr.length; i++) {
    if (targetArr[i][0] === k) {
      targetArr.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
