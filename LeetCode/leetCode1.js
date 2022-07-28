var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
};

var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (remaining === nums[j]) return [i, j];
    }
  }
  return false;
};
//console.log(twoSum([3, 2, 4], 6));

//Different Ways
var twoSum2 = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complement = target - value;
    if (map[complement] !== undefined) {
      return [map[complement], i];
    } else {
      map[value] = i;
    }
  }
};
 console.log(twoSum2([3, 2, 4], 8));
