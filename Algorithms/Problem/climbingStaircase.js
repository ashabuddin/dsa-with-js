function climbingStaircase(n) {
    const numOfWays = [1, 2]
    for (i = 2; i < n; i++) {
      numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]
    }
    return numOfWays[n -1]
}
console.log(climbingStaircase(1));//1
console.log(climbingStaircase(3));//3
console.log(climbingStaircase(4));//5
console.log(climbingStaircase(5));//8
console.log(climbingStaircase(6));//13 
//Big-O = O(n)

function climbingStaircase1(n){
    if(n === 1) return 1
    if(n === 2) return 2
    return climbingStaircase1(n -1) + climbingStaircase1(n - 2)
}
console.log(climbingStaircase1(1));//1
console.log(climbingStaircase1(3));//3
console.log(climbingStaircase1(4));//5
console.log(climbingStaircase1(5));//8
console.log(climbingStaircase1(6));//13 
console.log(climbingStaircase1(10));//89 