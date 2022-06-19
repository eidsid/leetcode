/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count: number = 0;
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === 0) {
      nums.push(nums[i])
      nums.splice(i, 1)
      count++
      i--
    }
  }

};