function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length -i -1; j++) {         
           if (arr[j]> arr[j+1]) {
               let temp = arr[j]
                  arr[j] = arr[j+1]
                  arr[j+1] = temp
           }         
       }       
    }
    return arr;
}

function bubbleSort(arr) {
    let swap;
    for (let i = 0; i < arr.length; i++) {
        swap = false;
       for (let j = 0; j < arr.length -i -1; j++) {    
           if (arr[j]> arr[j+1]) {
               let temp = arr[j]
                  arr[j] = arr[j+1]
                  arr[j+1] = temp
                  swap = true;
           }         
       }    
       if (!swap) {
           break
       }   
    }
    return arr;
}
//console.log(bubbleSort([5,3,8,4,6]));

function bubbleSort(arr) {
    let swapped
    do {
         swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }          
        }
    } while (swapped);
}
const arr = [5,3,8,4,6]
bubbleSort(arr)
console.log(arr);

//Time complexity BigO(n^2)
