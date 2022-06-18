function sortedSquares(nums: number[]): number[] {

  let results: number[] = []


  for (let i = 0; i < nums.length; i++) {

    let value = nums[i] * nums[i]

    if (results[Math.floor(results.length / 2)] < value) {
      results.push(value)


    } else {

      results.unshift(value)

    }

  }

  return results.sort((a, b) => a - b)
};