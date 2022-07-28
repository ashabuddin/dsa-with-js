function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert  = arr[i];
        let j = i - 1

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
             j =j - 1 
        }
        arr[j + 1] = numberToInsert
    }
}
const arr = [5,3,-8,4,6]
insertionSort(arr)
console.log(arr);