/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  if (nums[0] === nums[1]) return true;
  founddupl = false;
  nums.sort();
  for (let i = 2; i < nums.length; i += 2) {
    if (nums[i - 2] === nums[i - 1] || nums[i - 1] === nums[i]) {
      founddupl = true;
      break;
    }
  }
  return founddupl;
};