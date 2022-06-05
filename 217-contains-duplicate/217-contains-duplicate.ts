var containsDuplicate = function (nums:number[]):boolean {
 let containsDuple=false
 let obj={}
 
for(let i=0;i<nums.length;i++){
if(nums[i] in obj) {
containsDuple=true;
  break;
}
obj[nums[i]]=null
  }
  return containsDuple;
  };