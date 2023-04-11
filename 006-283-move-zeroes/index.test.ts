import { moveZeroes } from "."

test('the first example', () => {
  const nums = [0,1,0,3,12]
  moveZeroes(nums)
  expect(nums).toEqual([1,3,12,0,0])
})

test('array has no any zero number', () => {
  const nums = [1,2,3,4,5,6]
  moveZeroes(nums)
  expect(nums).toEqual([1,2,3,4,5,6])
})

test('array includes only zeroes', () => {
  const nums: number[] = [0,0,0,0]
  moveZeroes(nums)
  expect(nums).toEqual([0,0,0,0])
})

test('array includes an elem to be zero', () => {
  const nums: number[] = [0]
  moveZeroes(nums)
  expect(nums).toEqual([0])
})

test('array includes an elem not to be zero', () => {
  const nums: number[] = [1]
  moveZeroes(nums)
  expect(nums).toEqual([1])
})

test('array has zeroes at the first', () => {
  const nums: number[] = [0,0,0,1,2]
  moveZeroes(nums)
  expect(nums).toEqual([1,2,0,0,0])
})

test('array has zeroes at the end', () => {
  const nums: number[] = [1,2,3,0,0,0]
  moveZeroes(nums)
  expect(nums).toEqual([1,2,3,0,0,0])
})