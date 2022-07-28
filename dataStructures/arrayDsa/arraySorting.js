const arr = [1, 34, 54, 2, 35, 64, 64, 98, 80, 45];

for(let i = 0; i<arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j + 1]){
            let swap = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = swap
        }
    }
}
console.log(arr);