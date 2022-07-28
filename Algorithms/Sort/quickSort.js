function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [3, 0, 2, 5, -1, 4, 1]
console.log(quickSort(arr));

//Time complexity BigO(n^2) worst case
//Time complexity BigO(n log n) avg case