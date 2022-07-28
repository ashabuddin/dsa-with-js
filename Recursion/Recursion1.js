//Recursive Fibonacci Sequence
function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
// console.log(recursiveFibonacci(7));//13
// console.log(recursiveFibonacci(1));//1
// console.log(recursiveFibonacci(9));//34
//Time complexity BigO(2^n) 


//Recursive Factorial of a Number
function recursiveFactorial(n) {   
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1) 
}
console.log(recursiveFactorial(0));//1
console.log(recursiveFactorial(5));//120
console.log(recursiveFactorial(6));//720

//Time complexity BigO(n)