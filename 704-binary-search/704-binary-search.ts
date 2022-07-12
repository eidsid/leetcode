function search(nums: number[], target: number) {

    let start = 0, end = nums.length - 1, middle = Math.floor((start + end) / 2)
    while (nums[middle] !== target && start <= end) {
        if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2)
    }

    if (nums[middle] == target) return middle
    return -1;
}