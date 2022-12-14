class singleLinkList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    isEmpty(){
        return this.length === 0
    }
    getLength(){
        return this.length
    }

    push(value){
        let newNode={
          value: value,
          next: null
        }
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next= newNode
            this.tail = newNode
        }
        this.length++

    }
}

const list = new singleLinkList()
console.log(list.isEmpty());
list.push(5)
list.push(10)
list.push(15)
console.log(list.getLength());
console.log(list);