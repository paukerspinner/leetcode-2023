import { checkInclusion } from "./solution"

test('s2 contains reversed s1 should return true', () => {
  const s1 = "ab"
  const s2 = "eidbaooo"
  expect(checkInclusion(s1, s2)).toBe(true)
})

test('s2 does not contain permutation of s1 should return false', () => {
  const s1 = "ab"
  const s2 = "eidboaoo"
  expect(checkInclusion(s1, s2)).toBe(false)
})

test('s2 contains permutation of s1 at first should return true', () => {
  const s1 = "acb"
  const s2 = "bacdkueolsllcj"
  expect(checkInclusion(s1, s2)).toBe(true)
})

test('s2 contains permutation of s1 at last should return true', () => {
  const s1 = "uku"
  const s2 = "skeukkwowkuu"
  expect(checkInclusion(s1, s2)).toBe(true)
})

test('s2 is repeatation of permutation of s1 should return true', () => {
  const s1 = "tool"
  const s2 = "ootltolo"
  expect(checkInclusion(s1, s2)).toBe(true)
})

test('s2 and s1 has only one character but not the same should return false', () => {
  const s1 = "b"
  const s2 = "a"
  expect(checkInclusion(s1, s2)).toBe(false)
})

test('s2 and s1 has only one the same character should return true', () => {
  const s1 = "a"
  const s2 = "a"
  expect(checkInclusion(s1, s2)).toBe(true)
})