//Insert new Element

const arr = [1, 2, 34, 54, 35, 64];
let position = 3;
let newEle = 10;
// console.log(arr);

for (let i = arr.length - 1; i >= 0; i--) {
  //   console.log(arr[i]);

  if (i >= position) {
    arr[i + 1] = arr[i];
    if (i === position) {
      arr[i] = newEle;
    }
  }
}
console.log(arr);
// console.log(arr.length);


//Implement array method

const ArrIn = arr.splice(2, 1, 199)
console.log(arr);
