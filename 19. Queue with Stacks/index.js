class Queue {
  constructor() {
    this.inflow = [];
    this.outflow = [];
    this.size = 0;
  }

  enqueue(item) {
    this.inflow.push(item);
    this.size += 1;
  };
  
  dequeue() {
    if (this.outflow.length === 0) {
      while (this.inflow.length > 0) {
        this.outflow.push(this.inflow.pop());
      }
    }
    this.size -= 1;
    return this.outflow.pop();
  };
}

module.exports = Queue;