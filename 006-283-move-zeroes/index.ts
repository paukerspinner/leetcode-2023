/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let [runningPointer, puttingPointer] = [0,0]
  while (runningPointer < nums.length) {
    if (nums[runningPointer] !== 0) {
      nums[puttingPointer] = nums[runningPointer]
      puttingPointer ++
    }
    runningPointer ++
  }
  while (puttingPointer < nums.length) {
    nums[puttingPointer++] = 0
  }
};