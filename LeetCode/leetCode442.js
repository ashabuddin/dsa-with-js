//442. Find All Duplicates in an Array

var findDuplicates = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        const value = Math.abs(nums[i])
       // console.log("V",value);
        const index = value - 1
        //console.log("I", index);
        if (nums[index] < 0) {
            result.push(value)
        }else{
            nums[index] *= -1
        }
    }
    return result
};
const number = [4,3,2,7,8,1]
console.log(findDuplicates(number));


var findDuplicates1 = function(nums) {
    let result = []

    for(let i = 0; i < nums.length; i++){
        let index = Math.abs(nums[i]) - 1
        // console.log('I', index);
        let val = nums[index]
        if(val < 0){

            result.push(Math.abs(nums[i]))

        }else{
            nums[index] = -nums[index]
        }
    }
    return result
}
const number1 = [4,3,2,7,8,2,3,1]

console.log(findDuplicates1(number1));
