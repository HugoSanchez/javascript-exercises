function HashTable(size) {
    this.buckets = Array(size)
    this.numBuckets = this.buckets.length
}
  
function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null
}
  
HashTable.prototype.hash = function(key) {
    var total = 0;
    for (var i = 0; i < key.length ; i++) {
      total += key.charCodeAt(i)
    }
    var bucket = total & this.numBuckets;
    return bucket
}
  
HashTable.prototype.insert = function(key, value) {
    let index = this.hash(key)
    // In case the bucket is empty at that index
    if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value)
    // In case the item matches and you just want to update the value
    else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    }
    // Both in case there is already an item end you want to
    // Either save a new node or update one in the same bucket.
    else {
        let currentNode = this.buckets[index]
        while(currentNode.next) {
            if (currentNode.next.key === key){ 
            currentNode.next.value = value
            return
            }
            currentNode = currentNode.next
        } 
        currentNode.next = new HashNode(key, value)
    }
}
  
HashTable.prototype.get = function(key) {
    let index = this.hash(key)
  
    if (!this.buckets[index]) return null
  
    else {
        currentNode = this.buckets[index]
        while(currentNode) {
            if (currentNode.key === key) return currentNode
            currentNode = currentNode.next
        }
    }
    return null
}
  
HashTable.prototype.retrieveAll = function() {
    let allNodes = [];
    for (var i = 0; i < this.numBuckets; i++) {
        let currentNode = this.buckets[i];
        while (currentNode) {
            allNodes.push(currentNode)
            currentNode = currentNode.next
        }
    }
    console.log(allNodes)
}
  
let hashTable = new HashTable(30)

console.log(hashTable)
hashTable.insert('Dean', '@')
hashTable.insert('Becca', '@')
hashTable.insert('Dane', '@')


console.log(hashTable.get('Dane'))

hashTable.retrieveAll()