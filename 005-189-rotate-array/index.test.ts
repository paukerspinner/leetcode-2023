import rotate from "."

test('k less than array length', () => {
  var nums: number[] = [1,2,3,4,5,6,7]
  rotate(nums, 3)
  expect(nums).toEqual([5,6,7,1,2,3,4])
})

test('k is half of array length', () => {
  var nums: number[] = [0,1,2,3]
  rotate(nums, 2)
  expect(nums).toEqual([2,3,0,1])
})

test('k is equal to array length', () => {
  var nums: number[] = [0,1,2,3,4,5,6]
  rotate(nums, 7)
  expect(nums).toEqual([0,1,2,3,4,5,6])
})

test('k is greater than array length', () => {
  var nums: number[] = [0,1,2,3]
  rotate(nums, 6)
  expect(nums).toEqual([2,3,0,1])
})

test('rotate 0 step', () => {
  var nums: number[] = [1,2,3]
  rotate(nums, 0)
  expect(nums).toEqual([1,2,3])
})

test('complex input', () => {
  var nums: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
  rotate(nums, 38)
  expect(nums).toEqual([16,17,18,19,20,21,22,23,24,25,26,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
})