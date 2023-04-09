export default function searchInsert(nums: number[], target: number): number {
  let [left, right] = [0, nums.length - 1]

  while (left !== right) {
    let mid = Math.floor((left + right) / 2)
    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return target > nums[left] ? left + 1 : left
};