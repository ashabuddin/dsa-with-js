function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }
  
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  //const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

//console.log(binarySearch( [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],23));

function binarySearch1(arr, tar) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex)/ 2)
    if ( tar === arr[middleIndex]) {
      return middleIndex
    }
    if (tar < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    }else{
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(binarySearch1( [21,22,23,24,25,26,27,28,29,30],23));
console.log(binarySearch1( [21,22,23,24,25,26,27,28,29,30],39));

//Time complexity BigO(log n)
