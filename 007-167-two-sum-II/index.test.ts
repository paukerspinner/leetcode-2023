import { twoSum } from "."

test('the first sample shoud return [1,2]', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([1,2])
})

test('array include more than two elems and indexes are in the first and end positions should return [1,3]', () => {
  expect(twoSum([2,3,4], 6)).toEqual([1,3])
})

test('array include only two different elems is result', () => {
  expect(twoSum([-1,0], -1)).toEqual([1,2])
})

test('array include only two the same elems is result', () => {
  expect(twoSum([2,2], 4)).toEqual([1,2])
})

test('two indexes are in the middle of array', () => {
  expect(twoSum([0,2,3,4,6], 5)).toEqual([2,3])
})

test('two indexes are in the middle of array that includes negative numbers', () => {
  expect(twoSum([-10, -5, 0, 1, 4], -4)).toEqual([2,4])
})