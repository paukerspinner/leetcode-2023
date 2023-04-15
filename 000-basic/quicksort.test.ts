import { sort } from "./quicksort"

test('simple test', () => {
  const nums = [2,3,4,1,5,6,8,7,9,0]
  sort(nums)
  expect(nums).toEqual([0,1,2,3,4,5,6,7,8,9])
})

test('sorted array', () => {
  const nums: number[] = [1,2,3,4,5,6,7]
  sort(nums)
  expect(nums).toEqual([1,2,3,4,5,6,7])
})

test('reversed array', () => {
  const nums: number[] = [9,7,6,5,4,3,2,1]
  sort(nums)
  expect(nums).toEqual([1,2,3,4,5,6,7,9])
})

test('temp array', () => {
  const nums: number[] = []
  sort(nums)
  expect(nums).toEqual([])
})

test('array has only one elem', () => {
  const nums: number[] = [0]
  sort(nums)
  expect(nums).toEqual([0])
})

test('array has all elem to be the same', () => {
  const nums: number[] = [0,0,0,0]
  sort(nums)
  expect(nums).toEqual([0,0,0,0])
})

test('array has some duplicated elems', () => {
  const nums: number[] = [2,4,5,5,3,1,2]
  sort(nums)
  expect(nums).toEqual([1,2,2,3,4,5,5])
})

test('array has two elem', () => {
  const nums: number[] = [2,-8]
  sort(nums)
  expect(nums).toEqual([-8,2])
})

test('array has repeatationg of sub elems', () => {
  const nums: number[] = [1,2,3,1,2,3,1,2,3]
  sort(nums)
  expect(nums).toEqual([1,1,1,2,2,2,3,3,3])
})