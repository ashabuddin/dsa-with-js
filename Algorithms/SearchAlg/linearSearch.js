
//Linear Search
const numbers = [2, 4, 67, 8, 44, 6, 12];
//  arr.indexOf(val)
function linearSearchIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//  arr.includes(val)
function linearSearchIncludes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

//  arr.find(cb)
//  cb = CallBack Function

function linearSearchFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}

//console.log(linearSearchFind(numbers, 44));

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] === tar) {
     return i
   }  
  }
  return -1
}
console.log(linearSearch([2, 4, 67, 8, 44, 6, 12], 1));
console.log(linearSearch([22,23,24,25,26,27,28,29,30], 27));
console.log(linearSearch([15,16,17,18,19,20,21,22,], 21));

//Time complexity BigO(n)