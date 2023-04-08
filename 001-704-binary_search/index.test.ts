import search from "."

test('first example should return 4', () => {
  expect(search([-1,0,3,5,9,12], 9)).toBe(4)
})

test('second example should return -1', () => {
  expect(search([-1,0,3,5,9,12], 2)).toBe(-1)
})

test('number of elems is odd should return 3', () => {
  expect(search([0,1,2,3,4], 3)).toBe(3)
})

test('number of elem is even return 2', () => {
  expect(search([0,1,2,3], 2)).toBe(2)
})

test('target is on the first should return 0', () => {
  expect(search([0,1,2,3,4], 0)).toBe(0)
})

test('target is on the end should return 5', () => {
  expect(search([0,1,2,3,4,5], 5)).toBe(5)
})

test('test includes negative numbers should return 6', () => {
  expect(search([-5,-2,0,1,2,3,4], 4)).toBe(6)
})

test('target less than all elems should return -1', () => {
  expect(search([-5,-2,0,1,2,3,4,5,6,7,9], -6)).toBe(-1)
})

test('target greater than all elems should return -1', () => {
  expect(search([-5,-2,0,1,2,3], 5)).toBe(-1)
})

test('array has only one elem to be target should return 0', () => {
  expect(search([5], 5)).toBe(0)
})

test('array has only one elem not to be target should return -1', () => {
  expect(search([0], 5)).toBe(-1)
})