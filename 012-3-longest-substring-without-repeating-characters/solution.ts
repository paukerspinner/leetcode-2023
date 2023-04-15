export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0
  let longestSubStr = ''
  for (let i = 0; i < s.length; i++) {
    const indexOfRepeated = longestSubStr.indexOf(s[i])
    if (indexOfRepeated === -1) {
      longestSubStr += s[i]
    } else {
      longestSubStr = longestSubStr.slice(indexOfRepeated + 1) + s[i]
    }
    if (longestSubStr.length > maxLength) {
      maxLength = longestSubStr.length
    }
  }
  return maxLength
};