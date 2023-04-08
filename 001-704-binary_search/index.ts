function search(nums: number[], target: number): number {
  return binarySearch(nums, 0, nums.length - 1, target)
};

function binarySearch(nums: number[], left: number, right: number, target: number): number {
  if (left === right) {
    return nums[left] === target ? left : -1
  }
  let mid = (left + right) >> 1

  if (target > nums[mid]) {
    return binarySearch(nums, mid + 1, right, target)
  } else {
    return binarySearch(nums, left, mid, target)
  }
}

export default search