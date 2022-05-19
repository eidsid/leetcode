var twoSum = (nums, target) => {
 
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let index = nums.indexOf(diff);
    if (i !== index && index !== -1) {
      return [index, i];
    }
  }
};