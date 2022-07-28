function recursiveBinarySearch(arr, tar) {
    return search(arr, tar, 0, arr.length - 1)
}
function search(arr, tar, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) /2)

    if (tar === arr[middleIndex]) {
        return middleIndex
    }
    if (tar < arr[middleIndex]) {
        return search(arr, tar, leftIndex, middleIndex -1)
    }else{
        return search(arr, tar, middleIndex + 1, rightIndex)
    }
}
console.log(recursiveBinarySearch( [21,22,23,24,25,26,27,28,29,30],23));
console.log(recursiveBinarySearch( [1,2,3,4,5,6,7,8,9,10,11,39],1));
console.log(recursiveBinarySearch( [1,2,3,4,5,6,7,8,9,10,11,39],12));
//Time complexity BigO(log n)
