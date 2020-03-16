function LinkedList() {
    this.head = null;
    this.tail = null;
}
  
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null)
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail)
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
    if (!this.head) return null
    this.head = this.head.next
    if (this.head) this.head.prev = null;
    else this.head = null;
};

LinkedList.prototype.removeTail = function() {
    if (!this.head) return null
    this.tail = this.tail.prev
    if (this.tail) this.tail.next = null
    else this.tail = null;
};

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head 
    while(currentNode) {
        if (currentNode.value === searchValue) return currentNode
        currentNode = currentNode.next
    }
    return null
}

LinkedList.prototype.indexOf = function(value) {
    let currentNode = this.head
    let array = []
    let index = 0
    while(currentNode) {
        if (currentNode.value === value) array.push(index)
        index++;
        currentNode = currentNode.next
    }
    return array
};

let ll = new LinkedList()

ll.addToHead(100)
ll.addToHead(200)
ll.addToHead(300)

ll.addToTail(50)
ll.addToTail(20)

ll.removeHead()
ll.removeTail()

console.log(ll.indexOf(50))
  
  