/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
 let memo = {};
  let isfound = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in memo) {
      memo = 0;
      isfound = true;
      break;
    }
    memo[nums[i]] = null;
  }
  return isfound;
};