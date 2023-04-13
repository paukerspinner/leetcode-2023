export default function rotate(nums: number[], k: number): void {
  const length = nums.length
  k = k % length
  const copiedNums = [...nums]
  let [puttingPointer, gettingPointer] = [0, (length - k) % length]
  while (puttingPointer < nums.length) {
    nums[puttingPointer] = copiedNums[gettingPointer]
    puttingPointer ++
    gettingPointer = (gettingPointer + 1) % length
  }
};