function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  BST.prototype.insert = function(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
  
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }
  
  BST.prototype.contains = function(value) {
    if (value === this.value) return true;
    else if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value);
    };
  }
  
  // Depth First Traversal
  BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value)
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order)
    if (order === 'in-order') iteratorFunc(this.value)
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order)
    if (order === 'post-order') iteratorFunc(this.value)
  }
  
  BST.prototype.breathFirstTraversal = function(iteratorFunc) {
    let queue = [this]
    while (queue.length) {
      currentNode = queue.shift()
      iteratorFunc(currentNode.value)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
  }
  
  BST.prototype.getMinVal = function() {
    if (this.left) return this.left.getMinVal()
    else console.log('Min value is: ', this.value)
  }
  
  BST.prototype.getMaxVal = function() {
    if (this.right) return this.right.getMaxVal()
    else console.log('The maximum value is: ', this.value)
  }
  
  function log(value) {
    console.log(value)
  }
  
  let bst = new BST(50)
  
  bst.insert(30)
  bst.insert(70)
  bst.insert(100)
  bst.insert(60)
  bst.insert(59)
  bst.insert(20)
  
  
  console.log(bst)
  
  console.log(bst.contains(10))
  
  bst.depthFirstTraversal(log, 'post-order')
  console.log('///////// \n')
  bst.getMaxVal()