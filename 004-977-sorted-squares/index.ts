export default function sortedSquares(nums: number[]): number[] {
  let [first, last] = [0, nums.length - 1]
  const listOfSortedSquares = []

  while (first <= last) {
    if (Math.abs(nums[first]) > Math.abs(nums[last])) {
      listOfSortedSquares.unshift(nums[first] ** 2)
      first ++
    } else {
      listOfSortedSquares.unshift(nums[last] ** 2)
      last --
    }
  }

  return listOfSortedSquares
};