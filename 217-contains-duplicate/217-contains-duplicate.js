/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums, memo = {}, counter = 0) {
  if (nums.length === 0) return false;
  if (nums[0] in memo) return true;

  memo[nums.shift()] = "";

  return containsDuplicate(nums, memo);
};