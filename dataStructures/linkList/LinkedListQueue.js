//Queues Data Structures = Fifo = First in first out

const LinkLists = require("./linkLists");

class LinkListQueue {
  constructor() {
    this.list = new LinkLists();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkListQueue()
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.getSize());
queue.print()

console.log(queue.dequeue());
queue.print()

console.log(queue.peek());
