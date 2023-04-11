import { reverseString } from "."

test('number of elem is odd', () => {
  const s = ["h","e","l","l","o"]
  reverseString(s)
  expect(s).toEqual(["o","l","l","e","h"])
})

test('number of elem is even', () => {
  const s = ["H","a","n","n","a","h"]
  reverseString(s)
  expect(s).toEqual(["h","a","n","n","a","H"])
})

test('list has only one charactor', () => {
  const s: string[] = ['h']
  reverseString(s)
  expect(s).toEqual(['h'])
})

test('list has only two charactors', () => {
  const s: string[] = ['A', 'b']
  reverseString(s)
  expect(s).toEqual(['b', 'A'])
})