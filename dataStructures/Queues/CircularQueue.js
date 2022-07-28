class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.roar = -1
        this.front = -1
    }
    isFull(){
       return this.currentLength === this.capacity
    }
    isEmpty(){
      return this.currentLength === 0
    }
    enqueue(element){
        if(!this.isFull()){
            this.roar = (this.roar + 1) % this.capacity
            this.items[this.roar] = element
            this.currentLength += 1
            if(this.front === -1){
                this.front === this.roar
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
      
        if(this.isEmpty()){
            this.front = -1
            this.roar = -1
        }
        return item
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    // print(){
    //     if(this.isEmpty()){
    //         console.log("Queue is Empty");
    //     }else{
    //        let i
    //         console.log("I",i);
    //         let str = ""
    //         for( i = this.front; i !== this.roar; i = (i + 1) % this.capacity){
    //            str += this.items[i] + " "
    //            console.log(str);
    //         }
    //         str += this.items[i]
    //         console.log(str);
    //     }
    // }

    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
        }else{
            let i
            let str = ''
             for(i = this.front; i !== this.roar; i = (i + 1) % this.capacity){
                 str += this.items[i] + ' '
             }
             str += this.items[i]
             console.log(str);
        }
        return i
    }
}

const queue = new circularQueue(5)
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull());
queue.print()
console.log(queue.peek());
//console.log(queue.dequeue());
// console.log(queue.dequeue());