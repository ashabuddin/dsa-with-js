//Queues Data Structures = Fifo = First in first out

//Queues Class in Array
class Queues {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}
//Time Com- BigO(n)

const queues = new Queues()
console.log(queues.isEmpty());
queues.enqueue(4)
queues.enqueue(5)
queues.enqueue(9)
console.log(queues.size());
queues.print();

console.log(queues.dequeue());
console.log(queues.peek());


//Queue in Object
class Queue{
    constructor(){
        this.items = {}
        this.roar = 0
        this.front = 0
    }
//Add new element
    enqueue(element){
        this.items[this.roar] = element
        this.roar++
    }

    //Remove element
    dequeue(){
      const item= this.items[this.front]
    //  console.log("ITEM", item);
      delete this.items[this.front]
      this.front++
      return item
    }

    //No Elements
    isEmpty(){
        return this.roar - this.front === 0
    }

    //first element
    peek() {
        return this.items[this.front]
    }

    //element length
    size() {
        return this.roar - this.front
    }

    //all element
    print(){
        console.log(this.items);
    }
}
const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(4)
queue.enqueue(7)
queue.enqueue(5)
console.log(queue.size());
queue.print()

console.log(queue.dequeue());

console.log(queue.peek());
