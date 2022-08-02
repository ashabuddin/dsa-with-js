//Reverse String with Stack in JavaScript

let data = [];
let currentSize = data.length;

function push(newVal) {
  data[currentSize] = newVal;
  currentSize++;
}
function pop(params) {
  lastRemovedItem = data[currentSize - 1];
  currentSize--;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}

let str = "ashab";
str = str.split("");
reverseStr(str);
console.warn(str.join(""));
