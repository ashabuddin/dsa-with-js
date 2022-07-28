//Liner search
//Search element in array

const arr = [1, 2, 34, 54, 35, 64, 64, 98, 80, 45];
let item = 45;
let index = undefined;

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  if (arr[i] === item) {
    index = i;
    break
  }
}
console.log(index);

//Use array method search
// console.log(arr.indexOf(item));



