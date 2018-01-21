class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.occupancy = 0;
    this.items = {};
    this.head = null;
    this.tail = null;
  }

  set(key, value) {
    let node = { val: key, next: null, prev: null };
    this.items[key] = value;

    if (!this.head) {
      this.head = node;
    } else {
      let temp = this.head;
      temp.prev = node;
      node.next = temp;
      this.head = node;
    }

    if (!this.tail) {
      this.tail = node;
    }
    
    if (this.occupancy === this.capacity) {
      delete this.items[this.tail.val];
      let temp = this.tail.prev;
      temp.next = null
      this.tail = temp;
    } else {
      this.occupancy += 1;
    }
  }

  get(key) {
    // check cache for item
    if (this.items[key]) {
      let target = this.head;

      while (target) {
        if (target.val === key) {
          
          if (target.prev) {
            target.prev.next = target.next;
          
          } 
          if (this.tail === target) {
            this.tail = target.prev;
          }
          let temp = this.head;
          this.head = target;
          this.head.next = temp;
          temp.prev = this.head;
          this.head.prev = null;
          return this.items[key];
        }
        target = target.next;
      }
    } else {
      return -1;
    }
  }
}

let cache = new LRUCache(2);
cache.set(1,1);
console.log(cache.items);
cache.set(2,2);
console.log(cache.items);
console.log('HEAD', cache.head);
console.log('GET', cache.get(1));
console.log('HEAD AFTER GET', cache.head);
cache.set(3,3);

console.log(cache.items);
console.log('HEAD', cache.head);
cache.get(2);

/* Setup

Strategy: Keep track of total items as counter, keep track of key/value in object, use a doubly linked list to hold priority.
O(1): Since retrieving from object

cache = {items: 3, key: value1, key: value2, key: value3 }; 

Transformation steps:

capacity = 3;
cache.set(A,A):   A
cache.set(B,B): A --> B 
cache.set(C,C): A --> B --> C
cache.get(B): A --> C --> B 
  output: returns B;
cache.set(D, D): C --> B --> D
cache.get(A): C --> B --> D 
  output: returns -1;

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.occupancy = 0;
    this.items = {};
    this.head = null;
    this.tail = null;
  }
  
  set(key, value) {
  // constraints:  O(1) time complexity
    if we are below capacity
      add item to liked list
      if above capacity remove head of linked list and add new item to tail
  }
  
  get(key) {
  // constraints:  O(1) time complexity
    if item is in cache
      move to tail of linked list
  }
}
*/