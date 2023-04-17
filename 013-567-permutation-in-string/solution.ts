// brute force (bad performance)

export function checkInclusion(s1: string, s2: string): boolean {
  const sortedS1 = s1.split('').sort().join('')
  for(let i = 0; i < s2.length - s1.length + 1; i ++) {
    const substr = s2.slice(i, i + s1.length)
    const sortedSubstr = substr.split('').sort().join('')
    if (sortedSubstr === sortedS1) {
      return true
    }
  }
  return false
};