function mergeSorted(shortedArr1, shortedArr2) {
    let p1 = 0
    let p2 = 0
    let res = []

    while (p1 < shortedArr1.length && p2 < shortedArr2.length) {
        if (shortedArr1[p1] < shortedArr2[p2]) {
            res.push(shortedArr1[p1])
            p1++
        } else {
            res.push(shortedArr2[p2])
            p2++
        }
    }
    while (p1 < shortedArr1.length) {
        res.push(shortedArr1[p1])
        p1++
    }
    while (p2 < shortedArr2.length) {
        res.push(shortedArr2[p2])
        p2++
    }
    return res
}
//console.log(mergeSorted([1,5,3,4], [2,3,7,9]));


//Merge sort Recursive
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArr = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
const arr = [3, 0, 2, 5, -1, 4, 1]
console.log(mergeSort(arr));
//Time complexity BigO(n log n) avg case