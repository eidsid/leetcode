
function searchInsert(nums: number[], target: number): number {
  let result: number = nums.length;
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > target) {
      result = i ;
      break;
    }

    if (nums[i] === target) {
      result = i;
      break;
    }

  }
  return result;
};