const arr = [1, 2, 34, 54, 35, 64];

let position = 2
console.log(arr);

for(let i = position; i<arr.length -1; i++){
    // console.log(arr[i]);
    arr[i] = arr[i + 1]
}
arr.length = arr.length - 1
console.log(arr);

//Use array method delete
arr.splice(2,1)
console.log(arr);