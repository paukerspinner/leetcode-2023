export function sort(nums: number[]): void {
  quicksort(nums, 0, nums.length - 1)
}

function quicksort(nums: number[], low: number, high: number) {
  if (low < high) {
    const pivotLocation = partition(nums, low, high)
    quicksort(nums, low, pivotLocation - 1)
    quicksort(nums, pivotLocation + 1, high)
  }
}

function partition(nums: number[], low: number, high: number): number {
  const pivot = nums[high]
  let leftwall = low - 1
  for (let i = low; i < high; i ++) {
    if (nums[i] < pivot) {
      leftwall ++
      swap(nums, leftwall, i)
    }
  }
  swap(nums, leftwall + 1, high)
  return leftwall + 1
}

function swap(nums: number[], index1: number, index2: number): void {
  const temp = nums[index1]
  nums[index1] = nums[index2]
  nums[index2] = temp
}