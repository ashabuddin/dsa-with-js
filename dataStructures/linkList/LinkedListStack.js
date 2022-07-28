//Stack Data Structures = Lifo = Last in first out

const LinkLists = require("./linkLists");

class LinkListStack {
  constructor() {
    this.list = new LinkLists();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
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

const stack = new LinkListStack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);

console.log(stack.getSize());
stack.print();

console.log(stack.pop());
stack.print();

console.log(stack.peek());
