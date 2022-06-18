function sortedSquares(nums: number[]): number[] {
  nums.sort((a, b) => (a * a) - (b * b))
  let mapnum = nums.map(x => x * x)
  return mapnum
};