function rotate(nums: number[], k: number): void {

  if (nums.length === k) { }
  else if (nums.length > k) {
    let rotatedPort = nums.splice(-k)
    nums.unshift(...rotatedPort)
  } else {
    let resultArray: number[] = []
    for (let i = 0; i <= nums.length - 1; i++) {
      let numidex = (i + k) % nums.length;
      resultArray[numidex] = nums[i]
    }
    for (let j = 0; j < resultArray.length; j++) {
      nums[j] = resultArray[j];
    }
          resultArray.length = 0;

  }

};