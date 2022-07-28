function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    //Recursion
    console.log(n);
    n--
    if (n > 0) {
        countDown(n)
    }
}
// countDown(13)



function sumOfNumber(n) {
    let sum = 0
    for (let i = n; i >= 0; i--) {
        sum += i
    }
    return sum
}
// console.log(sumOfNumber(10));


//Recursion
function sumOfNumber(n) {
    if (n < 0) {
        return 0
    }
    return n + sumOfNumber(n - 1)
}
// console.log(sumOfNumber(14));


function sumOfArray(arr) {
   if (arr.length === 0) {
       return 0
   }
   let rest = arr.slice(1)

   return arr[0] + sumOfArray(rest)
}
console.log(sumOfArray([14,15,16,17,18,19,20,21,22,]));
//Time Com = bigO(n*2)
//Space Com = bigO(n)

//Sum Of Array
function sumOfArray(arr) {
    return helperSum(arr, 0)
}
function helperSum(arr, index) {
    if (arr.length === index) {
        return 0
    }
    return arr[index] + helperSum(arr, index + 1)
}
console.log(sumOfArray([14,15,16,17,18,19,20,21,22,]));


//find Odd Number Recursive 
function findOddNumber(arr) {

    let result = []

    function helper(input) {
        if (input.length === 0) return

        if (input[0] % 2 !== 0) {
            result.push(input[0])
        }

        helper(input.slice(1))
    }

    helper(arr)

    return result.length
}
console.log(findOddNumber([14, 15, 16, 17, 18, 19, 20, 21, 22,]));