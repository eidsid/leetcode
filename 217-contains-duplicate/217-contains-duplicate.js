/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  let foundDubl = false;
  for (var i = 0; i < nums.length; i++) {
      if(foundDubl) break
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        foundDubl = true;
        break;
      }
    }
  }
  return foundDubl;
};