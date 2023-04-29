// solved problem with O(n) using sliding window and map

export function checkInclusion(s1: string, s2: string): boolean {
  const s1Counting = new Array(26)
  s1Counting.fill(0)
  for (let i = 0; i < s1.length; i ++) {
    s1Counting[s1.charCodeAt(i) - 97] ++
  }
  let subS2Counting = new Array(26)
  subS2Counting.fill(0)
  for (let i = 0; i < s1.length; i ++) {
    subS2Counting[s2.charCodeAt(i) - 97] ++
  }
  let pointer = s1.length - 1
  do {
    if (isEqualCounting(s1Counting, subS2Counting)) {
      return true
    }
    pointer ++
    subS2Counting[s2.charCodeAt(pointer) - 97] ++
    subS2Counting[s2.charCodeAt(pointer - s1.length) - 97] --
  } while (pointer < s2.length)

  return false
};

function isEqualCounting(counting1: number[], counting2: number[]): boolean {
  for (let i = 0; i < counting1.length; i ++) {
    if (counting1[i] !== counting2[i]) {
      return false
    }
  }
  return true
}