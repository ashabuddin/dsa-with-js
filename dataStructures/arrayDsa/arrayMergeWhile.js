// Merge Two array with while loop

let arr1 = [1,  3, 7, 19, 100];
let arr2 = [4, 5, 6, 28];
let arr3 = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;

while (a1<arr1.length && a2<arr2.length) {
  if (arr1[a1] < arr2[a2]) {
    arr3[a3] = arr1[a1];
    a1++;
    console.log( arr3[a3]);
  } else {
    arr3[a3] = arr2[a2];
    a2++;
    console.log( arr3[a3]);

  }
  a3++;
}

console.log(arr3);
