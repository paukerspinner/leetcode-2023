import { lengthOfLongestSubstring } from "./solution-2"

test('for the first example should return 3', () => {
  const s = 'abcabcbb'
  expect(lengthOfLongestSubstring(s)).toBe(3)
})

test('for the second example should return 3', () => {
  const s = 'pwwkew'
  expect(lengthOfLongestSubstring(s)).toBe(3)
})

test('for string is repeatation of only character should return 1', () => {
  const s = 'bbbbb'
  expect(lengthOfLongestSubstring(s)).toBe(1)
})

test('for string include only one charater should return 1', () => {
  const s = 'a'
  expect(lengthOfLongestSubstring(s)).toBe(1)
})

test('for string has list of unique charactors should return 6', () => {
  const s = 'abchy2'
  expect(lengthOfLongestSubstring(s)).toBe(6)
})

test('for null string should return 0', () => {
  const s = ''
  expect(lengthOfLongestSubstring(s)).toBe(0)
})

test('for string with repeatation of charactors should return 4', () => {
  const s = 'canhcanhcanhcanh'
  expect(lengthOfLongestSubstring(s)).toBe(4)
})

test('for a symetric string with the string length to be 4, should return 2', () => {
  const s = 'abba'
  expect(lengthOfLongestSubstring(s)).toBe(2)
})

// test('message', () => {
//   const s = ''
//   expect(lengthOfLongestSubstring(s)).toBe(3)
// })

// test('message', () => {
//   const s = ''
//   expect(lengthOfLongestSubstring(s)).toBe(3)
// })