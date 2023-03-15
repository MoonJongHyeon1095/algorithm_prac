const nums = [3, 3, 3, 2, 2, 4];
let result;
function solution(nums) {
  const monsterSet = new Set(nums);
  const arr = [...monsterSet];
  console.log(arr);
  if (arr.length >= nums.length / 2) {
    return nums.length / 2;
  } else {
    return arr.length;
  }
}

console.log(solution(nums));

/**
 * good example
 */

 function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];
  
    return arr.length > max ? max : arr.length
  }