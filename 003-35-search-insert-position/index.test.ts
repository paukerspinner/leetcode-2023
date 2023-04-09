import searchInsert from "."

test('target is found in middle of array should return 2', () => {
  expect(searchInsert([1,3,5,6], 5)).toBe(2)
})

test('target is not found in array and need to insert in middle should return 2', () => {
  expect(searchInsert([1,3,5,6], 4)).toBe(2)
})

test('target is greater than all elems should return 5', () => {
  expect(searchInsert([0,1,3,4,5], 15)).toBe(5)
})

test('target is smaller than all elems should return 0', () => {
  expect(searchInsert([1,3,4,5], 0)).toBe(0)
})

test('target is found at first of array should return 0', () => {
  expect(searchInsert([-5,-2,0,1,2,3,4,5,6,7,9], -5)).toBe(0)
})

test('target is found at end of array should return 6', () => {
  expect(searchInsert([2,4,5,6,7,8,15], 15)).toBe(6)
})

test('elems are big numbers should return 4', () => {
  expect(searchInsert([100000000,200000000,300000000,400000000,500000000,600000000],450000000)).toBe(4)
})