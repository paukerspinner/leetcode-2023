/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let [leftPointer, rightPointer] = [0, s.length - 1]
  while (leftPointer < rightPointer) {
    const tempChar = s[leftPointer]
    s[leftPointer++] = s[rightPointer]
    s[rightPointer--] = tempChar
  }
}