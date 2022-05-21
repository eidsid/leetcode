/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  nums.sort();
  let foundDubl = false;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      foundDubl = true;
      break;
    }
  }
  return foundDubl;
};