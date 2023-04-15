export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0
  const charIndexes = new Map<string, number>()
  let start = 0
  for (let end = 0; end < s.length; end ++) {
    if (charIndexes.has(s[end])) {
      start = Math.max(charIndexes.get(s[end])! + 1, start)
    }
    maxLength = Math.max(maxLength, end - start + 1)
    charIndexes.set(s[end], end)
  }
  return maxLength
};