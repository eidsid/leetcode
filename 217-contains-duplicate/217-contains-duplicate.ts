var containsDuplicate = function (nums:number[]):boolean {
 let containsDuple=false
  for(let i=0;i<nums.length;i++){
if(nums.lastIndexOf(nums[i])!==i) {
containsDuple=true;
  break;
}
  }
  return containsDuple;
  };