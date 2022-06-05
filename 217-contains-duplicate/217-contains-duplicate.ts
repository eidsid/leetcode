var containsDuplicate = function (nums:number[],obj={}) {
  if(nums.length===0) return false  

  if(nums[0] in obj) return true

 obj[nums[0] ]=null

 nums.shift() 

let start=0
let middle=Math.floor(nums.length/2);
    
let lefthalf=nums.slice(start,middle)
let righthalf=nums.slice(middle,)

let ref=obj

return  containsDuplicate(lefthalf,ref) + containsDuplicate(righthalf,ref)

  };