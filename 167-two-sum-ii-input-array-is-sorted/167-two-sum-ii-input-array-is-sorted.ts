function twoSum(numbers: number[], target: number): number[] {
  let result: number[] = [];
  let memo: object = {}
  for (let i = 0; i < numbers.length; i++) {
    let rest = target - numbers[i]
    if (rest in memo) {
      result = [memo[rest] + 1, i + 1]
      memo = {}
      break
    }
    memo[numbers[i]] = i
  }

  return result;

}