function sortedSquares(nums: number[]): number[] {
  let results: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    results.push(nums[i] * nums[i])
  }  
 return   results.sort((a, b) => a - b)

   
};