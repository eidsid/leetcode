
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let middel = Math.floor((start + end) / 2)
  
  while (nums[middel] !== target && start <= end) {

    if (nums[middel] < target) {
      start = middel + 1
    }
    else {
      end = middel - 1
    }
    middel = Math.floor((start + end) / 2)
  }

  if (nums[middel] == target) return middel
  return -1;
};