//Stack in JavaScript

let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
  if (currentSize >= max) {
    console.log("Stack is full you can not add"  + newVal);
  }
  data[currentSize] = newVal;
  currentSize++;
}
//Output:[ 4, 5, 8, 18, 82 ]

function pop() {
    if (currentSize > 0) {
      currentSize --;
      data.length = currentSize;
    } else {
      alert("stack is already empty");
    }
  }


push(4);
push(5);
push(8);
push(18);
push(82);
// push(83);

pop()
console.log(data);
