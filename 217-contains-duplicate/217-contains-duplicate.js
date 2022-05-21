/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
 let memo = {};
  isfound = false;
  let i = 0;
  while (!isfound && i <= nums.length) {
    if (nums[i] in memo) isfound = true;

    memo[nums[i]] = "";
    i++;
  }
  return isfound;
};