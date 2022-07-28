const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [];

for(let i = 0; i < arr1.length; i++){
    arr3[i] = arr1[i]
}
for(let i = 0; i < arr2.length; i++){
    arr3[arr1.length +i] = arr2[i]
}
console.log(arr3);

//Arr merge short
const arr4 = [...arr1, ...arr2];
console.log(arr4);

//Use merge concat method
const arr5 = arr1.concat(arr2)
console.log(arr5);

//Output: [ 1, 2, 3, 4, 5, 6 ] 