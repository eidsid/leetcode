/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums, memo = {}, counter = 0) {
   let current = nums[counter];
  if (current in memo) return true;
  if (nums.length === counter) return false;
  memo[current] = "";
  return containsDuplicate(nums, memo, counter + 1);
};