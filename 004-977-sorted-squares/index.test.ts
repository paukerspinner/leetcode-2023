import sortedSquares from "."

test('first example', () => {
  expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100])
})

test('second example', () => {
  expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121])
})

test('array of not negative numbers', () => {
  expect(sortedSquares([0,1,2,3,4])).toEqual([0,1,4,9,16])
})

test('array of not positive numbers', () => {
  expect(sortedSquares([-5,-4,-3,-2,-1,0])).toEqual([0,1,4,9,16,25])
})

test('array has only one elem', () => {
  expect(sortedSquares([5])).toEqual([25])
})

test('all elem of array are the same', () => {
  expect(sortedSquares([2,2,2,2])).toEqual([4,4,4,4])
})

test('array includes big numbers', () => {
  expect(sortedSquares([-10000,10000])).toEqual([100000000,100000000])
})