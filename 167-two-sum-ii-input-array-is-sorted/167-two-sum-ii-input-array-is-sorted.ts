function twoSum(numbers: number[], target: number, memo: object = {}): number[] {
  let result:number[]
  for (let i = 0; i < numbers.length; i++) {
    let rest:number = target - numbers[i]
    if (rest in memo) {
      result = [memo[rest]+1, i+1]
      break
    }
    memo[numbers[i]]=i
  }

  return result;
};
